---
title: "Writing a Raytracer in Rust: part 3"
layout: article
categories:
 - programming
 - graphics
 - raytracer
tags:
 - building a raytracer
 - learning rust
excerpt: At long last we get to the point of tracing rays - not entirely as we want.
custom_css: highlighting
---
In the first article, we worked out how to wrangle an interface and draw a window. In the second, we implemented a vector struct.

### A loose thread: a more general dot product

This morning I realised what was up with this code:

```rust
impl<T: Mul<U, Output = S>, S: Add, U: Copy> Vec2<T> {
    fn dot (a: Vec2<T>, b: Vec2<U>) -> <S as Add>::Output {
        a.x * b.x + a.y * b.y
    }
}
```

The problem is that the thing we're implementing is only specific to one of the generic types we have here. And Vec2 only has one generic type associated with it! Instead, we need to create a *generic trait* that can can be implemented by `Vec2` representing being dot-productable with a vector containing a particular type.

What threw me off last night was the contrast with implementation blocks like

```rust
impl<T: Copy + Mul<Output = A> + Div<S>, A: Add<Output = S>, S: Sqrt + Copy> Vec2<T> {
    fn normalise(self) -> Vec2<<T as Div<S>>::Output> {
        self / self.length()
    }
}
```

which seem to take the same form: an `impl` statement with a bunch of types, and then just plain `Vec2<T>` as the thing we're implementing. However, in this case there *is* a constraint to fix the types `S` and `A`: `A` has to be the output of multiplying two `T`s, which is unique, and `S` has to be the output of adding two `A`s, which is also unique. So for a given `T`, there is only one normalise function.

Contrast the code above: `U` could be any type, but we're only making one implementation here, instead of a pattern for implementations for any given `U`.

So, how do we make a new trait? Simple: we use the `trait` keyword! Then we specify what our trait needs to have. Following the pattern of built-in traits like `mul`, we'll have an associated type called `Output`, and a function taking `self` and `other` arguments. We make it generic in the type `RHS`, but also have that default to `Self`.

```rust
trait Dot<RHS = Self> {
    type Output;

    fn dot(self, rhs: RHS) -> Self::Output;
}
```

Although there isn't an operator that we're planning to overload here, it's basically identical syntax to how the `Add` trait is defined, [as documented here](https://doc.rust-lang.org/book/ch19-03-advanced-traits.html#default-generic-type-parameters-and-operator-overloading).

Then, our implementation goes like this:

```rust
impl<T: Mul<U, Output = S>, S: Add, U: Copy> Dot<Vec2<U>> for Vec2<T> {
    type Output = <S as Add>::Output;

    fn dot (self, other: Vec2<U>) -> Self::Output {
        self.x * other.x + self.y * other.y
    }
}
```

Note that we have now turned `dot` from an associated function to a method. So we'd have to write `a.dot(b)` to calculate a dot product between two vectors `a` and `b`. Let's expose a function as well, to make that more obviously symmetric. I think that would go...

```rust
pub fn dot<T: Dot<U>, U> (a: T, b: U) -> <T as Dot<U>>::Output {
    a.dot(b)
}
```

At this point Rust starts complaining that we're leaking private types into the public interface. Aha! This is something I've totally neglected. I need to make a whole bunch of things public... or at least, the `Dot` trait. The `impl` blocks are apparently public implicitly, but only if the trait is external I guess? And do the methods need to be made public?

Anyway, putting `Pub` on my `Dot` trait stops Rust from complaining, so I'll stop there for now. I'm not sure whether, if I import my `dot` function, it will automatically import the `Dot` trait it depends on, or if I'll need to import both. We'll see! ...or we won't, because within a crate we don't need to explicitly import stuff lol.

## Moving on: a ray module

I think that's all I want to do on the Vector module for now. If I need more, I can implement it later! To sum up, we have defined a 2D vector, and we can...

 - add and subtract vectors, and invert them (unary minus)
 - multiply and divide them by scalars, and find the remainder from integer division by a scalar
 - take the dot product of two vectors
 - calculate the Euclidean norm of a vector, if the type supports square roots
 - calculate a normal vector in the same direction as any other vector, if the type supports square roots

Let's spin up a new module. I'll simply call it `ray`.

I think now I'm going to commit to particular types instead of making everything absurdly general. A ray will consist of:

 - a starting point, which is a `Vec2<f64>`
 - a normalised direction vector, which is a `Vec2<f64>`
 - the distance to the light, which is a `f64`

We pass it the starting position when we create it, and we calculate other two given the position of the light.

The first difficulty comes from me messing up the module pathing system. At first I thought I'd need to import the `vector` module with `mod vector`, but that's incorrect: `mod` declares a module in the module tree, and the `vector` module is already in the tree starting from `main.rs`.

Then I just tried `use vector::{Vec2, dot};` and Rust said it couldn't resolve that path and suggests I use an absolute path starting with `crate::`... apparently [something changed](https://doc.rust-lang.org/edition-guide/rust-2018/module-system/path-clarity.html), though this article doesn't make clear why the relative path doesn't work.

Apparently we also no longer need to use `extern crate` for non-`std` crates: if they're in our `cargo.toml` they will be `extern`ed where necessary by default.

First, let's define the struct's member variables:

```rust
struct Ray {
    origin: Vec2<f64>,
    dir: Vec2<f64>,
    length: f64,
}
```

Next, I tried writing a constructor function.

```rust
impl Ray {
    fn new(from: Vec2<f64>, to: Vec2<f64>) -> Ray {
        let fullvector = to - from;
        Ray {
            origin: from,
            dir: fullvector.normalise(),
            length: fullvector.length(),
        }
    }
}
```

Rust complained in a way I was kind of expecting... we're trying to use private methods! I guess we need to go and scatter some `pub`s into the `vector` implementation, to make `normalise` and `length` public methods. (That may be public relative to the struct, rather than public relative to the module!)

There is room for an optimisation here: notice that we are calculating the length twice, once for the call to `normalise` and once for the call to `length`, which involves calculating two products, a sum and a square root. If that turns out to be an issue, there's a couple of approaches: we could cache the outcome of calculating a length (at the cost of making the code much more complex), or we could create a vector method that returns both the length and the normalised vector at once. But that's a thing to worry about in the future.

## Rays from pixels

Now we have a way to create rays, we need code to create a ray for each pixel. The clearest way to iterate over all the pixels in the `image` crate will be the `enumerate_pixels(&self)` [method](http://docs.piston.rs/piston_window/image/struct.ImageBuffer.html#method.enumerate_pixels), which gives both coordinates and a reference. This comes in the form of an `EnumeratePixels` struct... which contains `x` and `y` as u32 values. So we need to cast those into floats, scaled appropriate to the size of the image.

That raises a question: what is our 'world space' coordinate system? Which is really a question about: if we resize our window, do all the lights, occluders and so on grow with the window, or do they stay put? I'm inclined to say they should grow with the window: if we resize the window, we'll render the same scene at a different resolution.

At least, that's if the *width* of the image changes. If the height changes independently of the width, changing our aspect ratio, the lights shouldn't move about.

So here's what we need to do:

 - take the coordinates of our pixel
 - divide each one by the width to get a normalised position (this will mean our world coordinates are in the 0..1 range, at least horizontally)
 - create a ray using this normalised position and the light's normalised position

`EnumeratePixels` is an [iterator](https://doc.rust-lang.org/book/ch13-02-iterators.html#creating-our-own-iterators-with-the--iterator--trait), which is something I've not studied yet. An iterator is a thing that iterates through a collection, which always has a `next` method and an `Item` type. If we advance through the iterator - for example, with a `for` loop, which advances an iterator 'behind the scenes' - we get a series of `Item`s. In this case, the `Item` is a tuple consisting of two u32s (x and y) and a reference to the pixel struct.

Iterators are apparently a 'zero-cost abstraction' letting us do high-level functional-style code that compiles into fast assembly. Which is cool.

So, we want to iterate over pixels and positions, and for each one, call some kind of shading function that will handle the casting of rays and so forth. Returning to `main.rs`, let's have a go at that...

```rust
for (x, y, pixel) in linear_buffer.enumerate_pixels() {
    let world_space_position = Vec2 {
        x: x as f64 / WIDTH as f64,
        y: y as f64 / WIDTH as f64,
    }
}
```

Boy I can't wait to see what exciting new compiler errors this throws up...

So the error I get is actually to do with trying to `use` my `Vec2` and `ray` in `main.rs`... hold on what? Why wouldn't that work?

```
error[E0658]: imports can only refer to extern crate names passed with `--extern` on stable channel (see issue #53130)
```

Well I guess let's go and see what issue 53130 is... [ok well this is just incomprehensible](https://github.com/rust-lang/rust/issues/53130). But slapping a `crate::` in front of the paths seemed to fix it.

I then hit my next problem: instantiating a vector using that notation doesn't seem to work with private fields? So we'd better make `x` and `y` public fields:

```rust
#[derive(Copy,Clone,Debug)]
pub struct Vec2<T> {
    pub x: T,
    pub y: T,
}
```

We'll be making a lot of `Vec2`s and there's no need to make a constructor function which is just a wrapper around the struct instantiation syntax, so I'm fine with these being public!

What next? Well, to cast rays to lights, we need to create some lights. So let's make a representation of a light.

## What is a light? A miserable little pile of vectors

A basic spherical light doesn't need much. It needs a position, and it needs a colour. I think I'm going to put it in `ray.rs` since lights have little meaning except in relation to rays.

Do we need to create a new representation of light colours? I think this rather depends on whether we can add pixels together... but it seems that we can't.

I guess we need to create a representation of a `Vec3` as well as a `Vec2`, huh. And in fact, we might want to do away with our linear frame buffer if we do that, and just iterate over the sRGB buffer.

In GLSL, colours are represented as `vec3`s. The three individual floats in a `vec3` can be accessed using either the `r` `g` and `b` components or the `x` `y` and `z` components (also I think there's a third set, but I forget). This makes sense, because you basically want to use the same operations on both types of vector - adding, subtracting, multiplying by a scalar and so forth.

GLM doesn't seem to implement e.g. `.r` `.g` `.b` on its `Vector3` struct, as far as I can tell. I think I might want to internally stick to `x`, `y` and `z`, but maybe write functions to use `r`, `g`, and `b` when constructing a `Vec3`.

Part of me is wondering if it would be better just to have an array, but I think it's useful to be able to explicitly name the `x`, `y` and `z` components.

Right, enough faff. Here's the Vec3 struct, pretty much a clone of Vec2 but with more `z`s everywhere:

{% capture vec3 %}
```rust
#[derive(Copy,Clone,Debug)]
pub struct Vec3<T> {
    pub x: T,
    pub y: T,
    pub z: T,
}

impl<T: Add<S>, S: Copy> Add<Vec3<S>> for Vec3<T> {
    type Output = Vec3<<T as Add<S>>::Output>;

    fn add(self, other: Vec3<S>) -> Self::Output {
        Self::Output {
            x: self.x + other.x,
            y: self.y + other.y,
            z: self.z + other.z,
        }
    }
}

impl<T: Sub<S>, S: Copy> Sub<Vec3<S>> for Vec3<T> {
    type Output = Vec3<<T as Sub<S>>::Output>;

    fn sub(self, other: Vec3<S>) -> Self::Output {
        Self::Output {
            x: self.x - other.x,
            y: self.y - other.y,
            z: self.z - other.z,
        }
    }
}

impl<T: Mul<S>, S: Copy> Mul<S> for Vec3<T> {
    type Output = Vec3<<T as Mul<S>>::Output>;

    fn mul(self, scalar: S) -> Self::Output {
        Self::Output {
            x: self.x * scalar,
            y: self.y * scalar,
            z: self.z * scalar,
        }
    }
}

impl<T: Div<S>, S: Copy> Div<S> for Vec3<T> {
    type Output = Vec3<<T as Div<S>>::Output>;

    fn div(self, scalar: S) -> Self::Output {
        Self::Output {
            x: self.x / scalar,
            y: self.y / scalar,
            z: self.z / scalar,
        }
    }
}

impl<T: Rem<S>, S: Copy> Rem<S> for Vec3<T> {
    type Output = Vec3<<T as Rem<S>>::Output>;

    fn rem(self, scalar: S) -> Self::Output {
        Self::Output {
            x: self.x % scalar,
            y: self.y % scalar,
            z: self.z % scalar,
        }
    }
}

impl<T: Neg> Neg for Vec3<T> {
    type Output = Vec3<<T as Neg>::Output>;

    fn neg(self) -> Self::Output {
        Self::Output {
            x: - self.x,
            y: - self.y,
            z: - self.z,
        }
    }
}
```
{% endcapture %}

{% include hidden.html content=vec3 id="vec3" title="Code for Vec3 that's just the same as Vec2" %}

There was a bit of a hiccup with these three implementations:

```rust
impl<T: Copy + Mul<Output = A>, A: Add<Output = A> + Sqrt> Vec3<T> {
    pub fn length(&self) -> A {
        (self.x * self.x + self.y * self.y + self.z * self.z).sqrt()
    }
}

impl<T: Copy + Mul<Output = A> + Div<A>, A: Add<Output = A> + Sqrt + Copy> Vec3<T> {
    pub fn normalise(self) -> Vec3<<T as Div<A>>::Output> {
        self / self.length()
    }
}

impl<T: Mul<U, Output = S>, S: Add<Output = S>, U: Copy> Dot<Vec3<U>> for Vec3<T> {
    type Output = <S as Add>::Output;

    fn dot (self, other: Vec3<U>) -> Self::Output {
        self.x * other.x + self.y * other.y + self.z * other.z
    }
}
```

Compared to the Vec2 implementation, which allows the `A` type to add together to make some third square-rootable type `A`, I needed to restrict it so that `A` has to add together to make more `A`, and have `A` itself be square-rootable. Otherwise, you add together the first two terms `x*x` and `y*y` and get the square-rootable type `S`, but then you need to add on `z*z` which is of type `A`. I could have the result of `A+A` be yet another type, one which allows adding type `A` to produce `S`, but that seems *overly general* even by my standards!

I'm also going to implement one more thing, just for good measure: the [cross product](https://en.wikipedia.org/wiki/Cross_product)! This will take two `Vec3`s $$\mathbf{a}$$ and $$\mathbf{b}$$ and produce a new `Vec3` $$s$$ whose components are given by

$$\begin{pmatrix}s_x\\s_y\\s_z\end{pmatrix}=\begin{pmatrix}a_y b_z - a_z b_y \\ a_z b_x - a_x b_z \\ a_x b_y - a_y b_x\end{pmatrix}$$

which is perpendicular to both $$\mathbf{a}$$ and $$\mathbf{b}$$, and has a magnitude $$ab\sin\theta$$ where $$\theta$$ is the angle between the two vectors. The direction is given by the right hand rule... but if you know what a cross product is you know all this, and if you don't you're lost right now, so let's just move on and implement it.

Like the dot product, we'll need to make a trait to accomodate a second vector of arbitrary type.

```rust
pub trait Cross<RHS = Self> {
    type Output;

    fn cross(self, rhs: RHS) -> Self::Output;
}

impl<T: Mul<U, Output = S> + Copy, S: Sub, U: Copy> Cross<Vec3<U>> for Vec3<T> {
    type Output = Vec3<<S as Sub>::Output>;

    fn cross (self, other: Vec3<U>) -> Self::Output {
        Vec3 {
            x: self.y * other.z - self.z * other.y,
            y: self.z * other.x - self.x * other.z,
            z: self.x * other.y - self.y * other.x,
        }
    }
}
```

I don't think I'm likely to need the cross product in this project, but it feels good to include it in case I ever use this janky vector module in a future project (instead of, say, just sensibly using GLM).

## Back to lights

OK, we've quickly added a third dimension of vectors. Let's get back to making lights.

```rust
pub struct Light {
    pub loc: Vec2<f64>,
    pub col: Vec3<f64>,
}
```

We'll modify the constructor for `Ray` to use this new struct, taking a reference to a light.

```rust
impl Ray {
    pub fn new(from: Vec2<f64>, to: &Light) -> Ray {
        let fullvector = to.loc - from;
        Ray {
            origin: from,
            dir: fullvector.normalise(),
            length: fullvector.length(),
        }
    }
}
```

Now, how should we shade a pixel? We could have a method on `Ray` which calculates the contribution of that ray... that seems sensible, for now. The easiest way to do that would be to hold on to a reference to a light, which means... time to figure out lifetimes?

Basically, my reasoning is, although I've been rather cavalier about making most things be `copy` so far, it seems weird to make a copy of the light for every ray. (You could say the same for the origin... but that's just two floats. Admittedly a light is just five floats but bear with me here, I'm trying to use this as an excuse to teach myself this stuff!) Better to store a reference to the light.

If we store a reference, [we need to tell Rust how long it needs to live](https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html) so it can check we're not holding onto an invalid reference. So we need to annotate the `struct` definition to depend on a generic lifetime, and then annotate the reference to the light with that lifetime. Lifetime annotations, it seems, are preceded by an apostrophe.

So here's a new version of a `Ray`.

```rust
#[derive(Debug)]
pub struct Ray<'a> {
    origin: Vec2<f64>,
    dir: Vec2<f64>,
    length: f64,
    target: &'a Light,
}
```

The `#[derive(Debug)]` thing [just automatically makes it implement the Debug trait in the default way](https://doc.rust-lang.org/rust-by-example/trait/derive.html), giving it a basic implementation. I've so far been rather cavalier about slapping copy semantics on things via derive. Like, I've kind of made it so that `Vec2` has to have `Copy` traits, which isn't necessarily the case. I needed to make sure `Light` had it, in order to use it in `Ray`.

I've also neglected some other traits like `Eq` and `PartialEq` which are probably relevant. Work for the future!

Our implementation, it seems, also needs to have a lifetime parameter.

```rust
impl<'a> Ray<'a> {
    pub fn new(from: Vec2<f64>, to: &Light) -> Ray {
        let fullvector = to.loc - from;
        Ray {
            origin: from,
            dir: fullvector.normalise(),
            length: fullvector.length(),
            target: &to,
        }
    }
}
```

The lifetimes would also seem to need to be written out in the function as well, but there are these things the compiler does called 'elision rules' that fill in lifetimes automatically under certain circumstances! So instead of the signature being

```rust
pub fn new<'a>(from: Vec2<f64>, to: &'a Light) -> Ray<'a> {}
```

...I can instead just do what I wrote up there. Neat.

## Shading!

Now the important bit: we generate a ray pointing to a light. Suppose that the ray does not meet any occluding objects. In that case, we need to add the colour of the light, attenuated by distance.

Let's declare a new method:

```rust
pub fn shade(&self) -> Vec3<f64> {
    self.target.col / (self.length * self.length)
}
```

This attenuates the light's colour by the square of distance and returns the resulting colour as a vec3.

## Populating our scene with lights

I'd like to make it so the user can click to add lights to the scene, eventually. But not yet. For now, let's just create a vector (in the [built-in Rust type](https://doc.rust-lang.org/std/vec/struct.Vec.html) sense) containing a set of lights at various coordinates. For now, only one light. We'll use the `vec!` macro to initalise a vector with some lights.

```rust
let lights = vec![
    Light{
        loc: Vec2 {
            x: 0.5,
            y: 0.2,
        },
        col: Vec3 {
            x: 1.0,
            y: 0.0,
            z: 0.0,
        }
    }
];
```
This puts a red light in the middle (ish) of the screen. It's going to be slightly off-centre in the vertical direction but that's fine.

Now, we need to iterate over a read-only slice of the vector (since we don't need to change the lights). I'm going to try this:

```rust
for &light in &lights {
    let ray_to = Ray::new(world_space_position, light);
    let colour = ray_to.shade();
}
```

That seemed to work fine! Now we just need to do something with these calls to shade()... which is to say, for a given pixel, we want to add them all up.

```rust
for (x, y, pixel) in frame_buffer.enumerate_pixels() {
    let world_space_position = Vec2 {
        x: x as f64 / WIDTH as f64,
        y: y as f64 / WIDTH as f64,
    };

    let mut colour = Vec3 {
        x: 0.0,
        y: 0.0,
        z: 0.0,
    };

    for light in &lights {
        let ray_to = Ray::new(world_space_position, light);
        colour += ray_to.shade();
    }
}
```

For this to work we need to implement the `AddAssign` trait on `Vec3`. Luckily there's a ready-made example on the [AddAssign](https://doc.rust-lang.org/std/ops/trait.AddAssign.html) docs page. This involves the dereferencing operator `*`:

```rust
impl<T: Add<S, Output = T>, S: Copy> AddAssign<Vec2<S>> for Vec2<T> {
    fn add_assign(&mut self, other: Vec2<S>) {
        *self = Self {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}
```

We're saying, dereference the mutable reference to self and reassign self with a new vector as given.

But actually this feels like a violation of DRY ('Don't Repeat Yourself'): I could just use the existing add. So let's do it like this instead?

```rust
impl<T: Add<S, Output = T>, S: Copy> AddAssign<Vec2<S>> for Vec2<T> {
    fn add_assign(&mut self, other: Vec2<S>) {
        *self = self + other
    }
}
```

Rust barfs when I try that. It's because I'm trying to add a reference to a non-reference, and that's not valid. So then I go ahead and try dereferencing first: `*self + other`. Then I get a 'cannot move out of borrowed content' problem. Ah, maybe I need to make it clear that `T` has to have copy semantics for this to work? That seems to fix it. So now we have:

```rust
impl<T: Add<S, Output = T> + Copy, S: Copy> AddAssign<Vec3<S>> for Vec3<T> {
    fn add_assign(&mut self, other: Vec3<S>) {
        *self = *self + other;
    }
}
```

For good measure, I went ahead and implemented `SubAssign`, `MulAssign`, `DivAssign`, and `RemAssign` on both `Vec2` and `Vec3` with the appropriate types. I'm a little surprised there's no way to automate this from the existing `Add`, `Sub`, etc. traits.

## Converting from linear space to sRGB

We've built up a colour as a float. The only thing we have to do now is copy it onto the pixel.

There are some things to worry about here. First of all, we could be dividing by zero if a pixel happens to be exactly under the light, which will shoot the value up to the floating point +infinity! To preclude this possibility, I'm going to slightly modify the shade method:

```rust
pub fn shade(&self) -> Vec3<f64> {
    self.target.col / (self.length * self.length + 1.0)
}
```

In physical terms, what this means is that every light is hovering exactly 1 unit above the ground. This puts a cap on how bright a pixel is. If it happens to be directly underneath/on top of the light, it will use the light's shading value without modification. Outside of that, it will fall off.

Now, to convert to sRGB, we need to decide a maximum colour value to scale everything by - kind of like setting the exposure on a camera! (In theory we could calculate this as adaptive exposure based on the brightest pixel in the scene, but that often looks weird as adding more light to the scene potentially makes everything seem darker except for the brightest parts...)

So the algorithm is going to be:

 - if the pixel is brighter than the maximum colour value, set it to the maximum
 - divide the value of the pixel by the maximum colour value to put it in the range 0 to 1
 - perform gamma correction
 - multiply it by 255 and cast it to an integer

There was one thing I was wondering here: the [TextureSettings](http://docs.piston.rs/piston_window/piston_window/struct.TextureSettings.html) struct from Piston contains a flag to do with gamma correction. Digging around in the source code, I noticed that `gfx_graphics` [converts the sRGB colours back into linear](https://github.com/PistonDevelopers/gfx_graphics/blob/master/src/back_end.rs) before using them to render on the graphics card... how many times is it going to go around!

There is some discussion of whether `piston_window` should represent colours in sRGB or have the option to choose, but presently it seems that `sRGB` is forced by default.

While digging into that, I found out that `gfx_graphics` is a backend for a library called `graphics`, and it uses helper functions from that to convert colours between linear and sRGB. The `graphics` library has its own representation of a colour, which is an array of four `f32`s in the range 0 to 1, and it's these that are handled by its helper functions. (I can't use those in place of my own implementation of `Vec3` since they don't have all the traits I want.)

If `graphics` internally uses floats to represent colours, then why did I have to use integers to create a texture again? Oh, because we're using the `gfx_graphics` backend which pins that down, while `graphics` is agnostic on the subject. That's why the `clear` function used float colours while the texture had to use integers.

This is so confusing, so many different representations and interfaces... maybe I should just write shaders in GLSL lol. Or maybe I could try a different backend, such as OpenGL? Ah, not an option if I continue to use `piston_window`... maybe I want to jump back to using `glutin_window` more directly? ...no this looks even more fiddly.

For now let's just go with the janky plan described above. It's not likely to be a big performance hit... it's just ugly lol.

We'll define a new constant, `CLAMP_MAX`, which is the maximum value any colour component can have. For now I'll call it `1.0`. Then, let's write a clamp trait and function.

```rust
pub trait Clamp<RHS> {
    fn clamp (&self, max:RHS) -> Self;
}

impl<T: PartialOrd + Copy> Clamp<T> for Vec3<T> {
    fn clamp (&self, max: T) -> Self {
        Vec3 {
            x: {if self.x > max {max} else {self.x}},
            y: {if self.y > max {max} else {self.y}},
            z: {if self.z > max {max} else {self.z}},
        }
    }
}
```

Here we're using a cool fact: Rust scopes always return a value and can be used anywhere. So we don't need a ternary operator: we can just stick curly braces right here.

(A cleanup we could do would be to implement the Clamp trait for a PartialOrder type, and then define it for any vector that contains `Clamp` objects. Or import the numeric library and use its clamp function...)

I'm going to copy the per-component gamma-correction function out of the graphics library. This is their version:

```rust
fn component_linear_to_srgb(f: ColorComponent) -> ColorComponent {
    if f <= 0.0031308 {
        f * 12.92
    } else {
        1.055 * f.powf(1.0 / 2.4) - 0.055
    }
}
```

I need to make some modifications. We don't have a `ColorComponent` type (which is just another name for `f32`). We also need to apply this to all three components of a Vec3.

There's a few things that are specific to `vec3`s containing colours I want to implement, so I'm going to throw up a new `colour` module. First of all, a helper function that doesn't leave any confusing `x`, `y` and `z`s about:

```rust
pub fn colour<T> (r: T, g: T, b: T) -> Vec3<T> {
    Vec3 {
        x: r,
        y: g,
        z: b,
    }
}
```

I tried modifying the srgb gamma conversion function to use the generic `Float` trait from the Piston Float library:

```rust
fn component_linear_to_srgb<F: Float> (lin_component: F) -> F {
    if lin_component <= 0.0031308 {
        lin_component * 12.92
    } else {
        1.055 * lin_component.powf(1.0 / 2.4) - 0.055
    }
}
```

However, Rust doesn't recognise that a `Float` is compatible with float literals. I could commit to one particular float type like Graphics did... or I could just cast all those literals into whatever `F` is, since a `Float` must implement the `FromPrimitive` trait and therefore have a `from_f64` associated function:

```rust
fn component_linear_to_srgb<F: Float> (lin_component: F) -> F {
    if lin_component <= F::from_f64(0.0031308) {
        lin_component * F::from_f64(12.92)
    } else {
        F::from_f64(1.055) * lin_component.powf(F::from_f64(1.0) / F::from_f64(2.4)) - F::from_f64(0.055)
    }
}
```

"Bryn, you don't need to be this generic!" "Bryn, what does all this extra code do for you!" Be silent, fools, and behold: I can gamma-convert 32 and 64 bit floats, and whatever weird floating point types I might hypothetically invent in the future (but won't), with one simple function! This is totally unnecessary but I did it because I could.

Now I can use these new functions to finish off the colour rendering thing. I need one more function: to convert a float Vec3 (which I might as well term a fragment, after openGL) into an sRGB pixel.


```rust
use image::{Rgba};

fn linear_to_srgb<F: Float> (lin: Vec3<F>) -> Vec3<F> {
    Vec3 {
        x: component_linear_to_srgb(lin.x),
        y: component_linear_to_srgb(lin.y),
        z: component_linear_to_srgb(lin.z),
    }
}

pub fn frag_to_pixel (fragment: Vec3<f64>) -> Rgba<u8> {
    let fragment = linear_to_srgb(fragment.clamp(CLAMP_MAX) / CLAMP_MAX) * 255 as f64;
    Rgba([
        fragment.x as u8,
        fragment.y as u8,
        fragment.z as u8,
        255,
    ])
}
```

Here I had to drop the generic type so I could use the `as` keyword. I could also cast with `From`, but that doesn't allow 'lossy' conversions.

Then we can use this in our shading function to modify the pixel. The pixel we get is a reference, so we have to dereference it to modify it.

```rust
for (x, y, pixel) in frame_buffer.enumerate_pixels() {
    let world_space_position = Vec2 {
        x: x as f64 / WIDTH as f64,
        y: y as f64 / WIDTH as f64,
    };

    let mut fragment = colour(0.0,0.0,0.0);

    for light in &lights {
        let ray_to = Ray::new(world_space_position, light);
        fragment += ray_to.shade();
    }

    *pixel = frag_to_pixel(fragment);
}
````

Now we hit an error I was kind of expecting: `enumerate_pixels` doesn't make the pixels mutable. We actually want `enumerate_pixels_mut`. That also means we need to declare the `frame_buffer` as mutable!

Once we do that, we finally pass the checker with no errors (just warnings about unused code).

Theoretically, we are drawing an image (with one light) and we've done everything we need to do to display it. Time to run my program and see what happens... do we get a nice little circle of red fading out nicely around the position of the light?

Hmm, well, what happens is that the entire screen is bright red. That's... not... *quite* what we want.

Next time: figure out what's gone wrong!