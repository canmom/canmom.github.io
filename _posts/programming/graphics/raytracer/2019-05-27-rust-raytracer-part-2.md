---
title: "Writing a Raytracer in Rust: part 2"
layout: article
categories:
 - programming
 - graphics
 - raytracer
tags:
 - building a raytracer
 - learning rust
excerpt: We have pixels. What next?
custom_css: highlighting
---
After I posted the previous post, one of my friends remarked...

> i like the way there is no raytracing in the first post its just faffing to get a window

This is an entirely accurate diagnosis.

But, right now, have a representation of a frame buffer as a container (probably a vector) of pixels, which we can pass to the window to render a frame. Now we need to figure out what we're drawing to it!

There are a couple of tweaks I need to make to this - a representation of the framebuffer in linear float space, for example. But let's come back to that. I want to trace rays.

## How do you trace a ray?

A ray consists of: a starting point (position vector) and a direction (a vector), the latter of which would ideally be normalised. It's also useful to have a number representing the distance from the starting point to the light.

So, if the starting point of the ray is $$\mathbf{r}$$, and the light is $$\mathbf{r}_\text{L}$$, then a vector from the starting point to the light is $$\mathbf{d}=\mathbf{r}_\text{L}-\mathbf{r}$$ The length of the ray is then of course $$d=\lvert\mathbf{r}_\text{L}-\mathbf{r}\rvert$$, and the normalised direction vector $$\hat{\mathbf{d}}$$ is

$$\hat{\mathbf{d}}=\frac{\mathbf{d}}{d}=\frac{\mathbf{r}_\text{L}-\mathbf{r}}{\lvert\mathbf{r}_\text{L}-\mathbf{r}\rvert}$$

That means we will need to be able to represent vectors, calculate their magnitude, add and subtract them, multiply them by a scalar, and normalise them. It will also be useful to be able to calculate the dot product later, when we're testing for intersections.

## How to implement the maths?

I have a couple of choices here. I could roll my own vector structure, or I could use the (most likely more robust) ones already implemented in Piston. Or, I could look to a different library for representing vectors, such as GLM ([which has a Rust version](https://docs.rs/glm/0.2.3/glm/)).

The advantages of GLM are perhaps less great here - the C++ version of GLM is a convenient header-only library, but this has no meaning in Rust, and linking in crates is trivial. Also, Rust's GLM is necessarily not quite as GLSL-y as the C++ one. Per the maintainer, 'the syntax/semantics distances from Rust to GLSL is way longer than from C++ to GLSL'. Still, this one has things like accessing vector components through `v.x` type syntax, and implements various operators that can be applied to vectors through the appropriate traits.

So let's also have a look at the Piston [graphics::math](http://docs.piston.rs/graphics/graphics/math/index.html) module. This seems to be a wrapper around the [vecmath](http://docs.piston.rs/graphics/vecmath/) crate. This one has generic types for various kinds of matrices and vectors, and gives the choice of row-major or column-major representations of matrices. It seems that vector and matrix operations are largely handled through functions - you can't, for example, write `some_vec2 + another_vec2` or `matrix * vector` and have it do what you'd expect.

Using GLM seems to be ideal for writing code in a readable way. On the other hand, making my own vector structs and traits and so on will teach me a lot more about how Rust handles such things - even if, ultimately, I'm just reinventing GLM...

## Let's make some structs

I think the first thiing to do is to split off my own vector code into a module. We can put that in a new file, even. We don't need to do anything special for this: just make a file containing the various declarations of our module (we don't seem to need `mod` syntax if it's in a separate file).

So now we need to declare our struct. I'm going to call it `vec2`, and make it a generic (so that we can have a vec2 of floats, of ints, etc.) for flexibility. The basic declaration is pretty trivial: a 2D vector has an `x` component and a `y` component, and these have the same type..

```rust
#[derive(Debug)]
pub struct Vec2<T> {
    x: T,
    y: T,
}
```

By convention, struct definitions in Rust are capitalised. The `#[derive(Debug)]` is [a macro](https://doc.rust-lang.org/rust-by-example/hello/print/print_debug.html) that helps ensure that we can easily print this struct for debugging purposes.

The fun stuff is going to come when we start implementing traits. First of all, I think we need to make an implementation block with the same name as the struct that includes all its methods. This apparently [needs the generic type listed twice](https://doc.rust-lang.org/book/ch10-01-syntax.html#in-method-definitions) - one to declare the implementation block depends on a generic type, then to say that we want the `Vec2` we're implementing on to use that type.

```rust
impl<T> Vec2<T> {

}
```

We don't seem to need to make a `new` function here, since it would just be an unnecessarily verbose wrapper around [the default struct constructor syntax](https://doc.rust-lang.org/nomicon/constructors.html).

Let's take the dot product as a good starting point. This needs to take (immutable references to?) two Vec2s the sum of `x*x` and `y*y`. I guess that means we need to make sure `T` is a type that we're allowed to multiply? But maybe that will be handled automatically. Anyway, this is an associated function rather than a method...

```rust
impl<T> Vec2<T> {
    fn dot(a: Vec2, b: Vec2) -> T {
        a.x * b.x + a.y * b.y
    }
}
```

So let's throw that in and see what happens? Maybe we need to annotate more?

To get Rust to compile it, we need to link it in our main file with

```rust
mod vector;
```

We get a whole bunch of errors, mostly complaining about a lack of type annotation. *Those* errors go away if we rewrite it like this:

```rust
impl<T> Vec2<T> {
    fn dot(a: Vec2<T>, b: Vec2<T>) -> T {
        a.x * b.x + a.y * b.y
    }
}
```

Note that in Rust, you don't need any sort of 'return' keyword: if you just type an expression on the last line of the function, that's the return value.

Now we get the complaint I was expecting: Rust can't be sure that type `T` can be multiplied or added.

```
error[E0369]: binary operation `*` cannot be applied to type `T`
(snip)
  = note: `T` might need a bound for `std::ops::Mul` 
```

So how do we make a 'bound for' that? It seems like we need to specify that `T` implements a particular trait. I believe that would be accomplished by writing

```rust
use std::ops::{Add, Sub, Mul};

impl<T: Mul + Add> Vec2<T> {
    (snip)
}
```

where I've imported a few traits from `std::ops` that allow overloading of the relevant operators, and detecting whether something can be multiplied.

Then we get another error... because there's no reason multiplying two `T`s together will give you a `T`. Rust says it expected `T` but got `<T as std::ops::Mul>::Output` which just means, I think, 'whatever type comes out of multiplying two `T`s together'.

So how can I make it clear to Rust that I'm assuming multiplying two `T`s together has to result in a `T`?

After various mistakes and dead ends, I hit on using the 'result of multiplication' type as the output.

```rust
impl<T: Mul> Vec2<T> {
    fn dot (a: Vec2<T>, b: Vec2<T>) -> <T as Mul>::Output {
        a.x * b.x
    }
}
```

That compiles! Hooray! But what about adding the `y` coponents??

Some time later, I found out there was actually a way to insist that the result of multiplication should be `T`. I don't know where this might be documented, but in [an example](https://doc.rust-lang.org/std/ops/trait.Add.html) on the Add trait, I saw that you could do

```rust
impl<T: Mul<Output = T>> {}
```

since anything with the `Mul` trait necessarily has an associated type called `Output`. But this way is potentially more flexible: if there happened to be a type which, when multiplied by itself made another type, we could implement that in Rust.

We can use this trick, and another generic type, to complete our dot product:

```rust
impl<T: Mul<Output = S>, S: Add> Vec2<T> {
    fn dot (a: Vec2<T>, b: Vec2<T>) -> <S as Add>::Output {
        a.x * b.x + a.y * b.y
    }
}
```

So, we have a dot product! And I have a much better idea how method syntax works.

## Overloading some operators

I'd like to use the standard operators such as `+` to add vectors together. To do that, we need to implement the `Add` trait on our vector. In fact, the example code for `Add` [in the documentation](https://doc.rust-lang.org/std/ops/trait.Add.html) is almost exactly what I need.

```rust
impl Add for Vec2 {
    type Output = Self;

    fn add(self, other: Self) -> Self {
        Self {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}
```

So there are a few new things in this example. We have the `for` keyword, which says we're implementing an existing trait for a particular struct. We have the `Self` type, which is "whatever type I am". The `Add` trait requires us to implement a function called `add` taking arguments `self`, and some other type which we're allowed to add. In this case, we want to add other `Vec2`s, so we declare `other` is of type `Self`. (How about that, philosophers!)

Since I copied that from an example code with barely any modification, it should compile immediately, right..?

Ah, no, `impl` needs a generic type parameter `<T>` still. And we need to make sure Rust knows that `T` implements `Add` as well. And then we can't trust that the output will be type `Self`. Oh, bother. Was using generics really such a great idea?

(Yes, because it teaches me how generics work. Practically, I'd have been better to just make it so that `Vec2` can only contain number types or something - that's what GLM does, restricting itself only to the types that exist in GLSL! My Vec2 here is actually potentially more general than GLM's... when I finish it.)

Let's try this...

```rust
impl<T: Add> Add for Vec2<T> {
    type Output = Vec2<<T as Add>::Output>;

    fn add(self, other: Self) -> Output {
        Output {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}
```

This doesn't work. Apparently when we declare `type::Output` it's like, not just in scope? Instead we had to use `Self::Output`, which I don't really understand. But this compiled:

```rust
impl<T: Add> Add for Vec2<T> {
    type Output = Vec2<<T as Add>::Output>;

    fn add(self, other: Self) -> Self::Output {
        Self::Output {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}
```

So I looked it up and apparently this is [just the syntax for associated types](https://doc.rust-lang.org/book/ch19-03-advanced-traits.html?highlight=associated,type#specifying-placeholder-types-in-trait-definitions-with-associated-types). They just all go on `Self`?

The reason there is an associated type here, rather than say a free type parameter `Add<T>`, is that a struct should be able to implement `Add` only once with a fixed type of output. Confusingly, the generic struct `Vec2` stands in for various possible `Vec2`s for each possible type of scalar, but for each of those possible `Vec2`s the outcome of adding them together is guaranteed to give one particular type.

Well, anyway, we need to do the same thing for `Sub` to make it possible to subtract vectors. This time, minimal faff.

```rust
impl<T: Sub> Sub for Vec2<T> {
    type Output = Vec2<<T as Sub>::Output>;

    fn sub(self, other: Self) -> Self::Output {
        Self::Output {
            x: self.x - other.x,
            y: self.y - other.y,
        }
    }
}
```

Now, we need to implement multiplication by scalars. This is going to be implementing the `Mul` trait, but instead of `other` being type `Self`, it will be of type `S` - another generic type. (Making it different from `T` means I could, for example, multiply a float vector by an integer scalar).

Let's see if this is possible...

```rust
impl<T: Mul, S: Mul> Mul for Vec2<T> {
    type Output = Vec2<<T as Mul>::Output>;

    fn mul(self, scalar: S) -> Self::Output {
        Self::Output {
            x: self.x * scalar,
            y: self.y * scalar,
        }
    }
}
```

Rust gets upset: `S` is an 'unconstrained type parameter'. This would usually mean I haven't used it, but I have used it... I've said `mul` has to be of type `S`?

It turned out I was actually implementing the wrong trait. Instead of implementing `Mul`, I needed to implement `Mul<S>`.

```rust
impl<T: Mul<S>, S> Mul<S> for Vec2<T> {
    type Output = Vec2<<T as Mul<S>>::Output>;

    fn mul(self, scalar: S) -> Self::Output {
        Self::Output {
            x: self.x * scalar,
            y: self.y * scalar,
        }
    }
}
```

This is because, by default, traits like `Mul` require the right hand side to be of `Self` type. But if I give it a type parameter, I can tell it that it needs to implement multiplication by some other type. I also removed the `Mul` trait from `S`, since it's not needed - we're using the implementation on `T`. (Not sure what that implies for commutativity of operators in rust... something to look into. Python has distinct `__add__` and `__radd__` special methods, so you can overload addition and make it non-commutative if you want!)

However, there was another problem! This has to do with ownership. Assigning `self.x * scalar` in a struct moves ownership of `scalar` to that struct, at which point I'm not supposed to use it anymore. It's fine, however, if the type `S` has the `Copy` trait, which means it's cheap to copy its value and it doesn't need to move ownership. I think that's a reasonable restriction for my purposes, so I just gave `S` the `Copy` trait.

```rust
impl<T: Mul<S>, S: Copy> Mul<S> for Vec2<T> {
    type Output = Vec2<<T as Mul<S>>::Output>;

    fn mul(self, scalar: S) -> Self::Output {
        Self::Output {
            x: self.x * scalar,
            y: self.y * scalar,
        }
    }
}
```

I also might as well implement division and remainder, while I'm at it! That's almost identical to the multiplication function there.

At this point I realised the power of generics and decided to go back and make the `Add` and `Sub` implementations _also_ support adding vectors containing two different types together! If you want to add a vector of floats to a vector of integers, I won't stop you! The power!

That ends up looking something like this:

```rust
impl<T: Add<S>, S: Copy> Add<Vec2<S>> for Vec2<T> {
    type Output = Vec2<<T as Add<S>>::Output>;

    fn add(self, other: Vec2<S>) -> Self::Output {
        Self::Output {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}
```

I feel like I'm writing a lot of repetitive code here. I wonder if there's like, a 'supergeneric', which will generate the appropriate code for `Mul`, `Div` and `Rem` automatically? Probably not, that's kinda niche lol.

## More vector space axioms

We seem to be implementing the main axioms of a [vector space](https://en.wikipedia.org/wiki/Vector_space#Definition). Though some, such as associativity and distribution, depend on the underlying implementation of multiplication and addition.

We can also establish a few more: the existence of an additive identity element, and of inverses (in programming terms, defining behaviour for the unary minus operator).

Previously in Rust's history, it had a whole hierarchy of numeric traits including the existence of one and zero, but they went and pruned all that. So there's no `Zero` trait to implement. However, there is a trait for the unary minus, called `Neg`.

Let's see if I can do this in one go without mistakes...

```rust
impl<T: Neg> Neg for Vec2<T> {
    type Output = Vec2<<T as Neg>::Output>;

    fn neg(self) -> Self::Output {
        Self::Output {
            x: - self.x,
            y: - self.y
        }
    }
}
```

In the unlikely event that I have a vector containing a type that will turn into a different type when negated... I'll handle it just fine!

## Calculating magnitude and normalising

There's another vector-specific operation we haven't implemented, which will be very important for raytracing. We need to calculate the magnitude of a vector, going from a vector space to a normed vector space.

The norm we want to implement is the Cartesian norm, given by:

$$
\lvert \mathbf{v} \rvert = \sqrt{v_x^2 + v_y^2}
$$

So we need to know how Rust handles square roots. Is there a 'square rootable' trait? There's probably a power type at least... is there one for fractional powers?

It seems that, in older versions of Rust, there was trait that allowed square roots, but it's gone. In the current version of the API spec, I find square root methods on the two float types, but no general purpose square root function or trait that I have to worry about?

There does seem to be [a crate in Piston](https://crates.io/crates/piston-float) that adds a bunch of float-related traits, so I could use those. In the interests of remaining generic, I think I will. We'll add

```toml
piston-float = "1.0.0"
```

to our `cargo.toml`, and then add

```rust
extern crate float
```

to our vector module. Note that, internally, the crate is just called `float` - not `piston-float` which has a hyphen in it, and Rust would be upset about!

All we want from that right now is the `Sqrt` trait. Anything with the `Sqrt` trait has a `.sqrt()` method, which returns the same type. Strictly speaking that's an unnecessary restriction, and we could imagine a type that  but this 'let's be pointlessly over-general about everything' thing I'm having fun with has to stop somewhere - probably before 'let's implement my own, slightly more general square root trait' lol.

So this is what we've got:

```rust
use float::Sqrt;

impl<T: Copy + Mul<Output = A>, A: Add<Output = S>, S: Sqrt> Vec2<T> {
    fn length(&self) -> S {
        (v.x * v.x + v.y * v.y).sqrt()
    }
}
```

We start with the vector components having type `T`, which must be `Copy` because we multiply each one by itself, which involves passing them to a multiplication function that would take ownership of them, and that isn't allowed if they're not `Copy`! The output of this multiplication needs to have the trait `Add` so we can add the two products together, and the resulting sum has to have trait `Sqrt` so we can take the square root.

We can now finally reap the benefits of our hard work, because to normalise a vector all we need to do is divide it by its length. That means that the starting type `T` needs to be dividable by the type `S` that's the result of our length calculation. To avoid imposing that restriction on `length`, I'll make yet another `impl` block.

```rust
impl<T: Copy + Mul<Output = A> + Div<S>, A: Add<Output = S>, S: Sqrt + Copy> Vec2<T> {
    fn normalize(self) -> Vec2<<T as Div<S>>::Output> {
        self / self.length()
    }
}
```

So now `T` has to be divisible by `S`, and `S` has to be copyable since we only implemented division for copyable `S`. Boom.

That's an awful lot of code to account for a lot of possibilities I won't be using, but I learned a ton about type inference and generics and structs, so I think it's worth it!

Because of the way we've implemented it, we can use our `Vec2` struct to contain integers or floats. When it contains integers, we won't be able to normalise it.

## Casting between different Vec2s?

One other possibility to account for: converting an integer vector to a float vector. For example, the coordinates of a pixel in screen space will be an integer vector, but then we want to convert that into world space, which is a float.

I don't need to define traits for casting to handle this, but it would be good to work out how casting between types work in Rust. Hopefully, I just need to write one generic trait for a generic type `T` that can be cast into another generic type `S`. Hopefully.

After some poking around, I think what I need is probably the `From` trait, documented [here](https://doc.rust-lang.org/std/convert/trait.From.html).

So what I think I need to do is...

```rust
impl<T, S: From<T>> From<Vec2<T>> for Vec2<S> {
    fn from(prev: Vec2<T>) -> Self {
        Vec2 {
            x: S::from<T> prev.x,
            y: S::from<T> prev.y
        }
    }
}
```

Rust tells me this conflicts with one of the 'core' implementations.

```
error[E0119]: conflicting implementations of trait `std::convert::From<vector::Vec2<_>>` for type `vector::Vec2<_>`:
(snip)
   = note: conflicting implementation in crate `core`:
           - impl<T> std::convert::From<T> for T;  
```

I think that possibly implies I've made my generic types too general. I need to make sure `S` is not `T` to avoid this conflict. How to specify that... apparently what I want is 'negative trait bound', but in 2017 it was buggy and therefore not implemented in stable. Is it implemented now?

Short answer: doesn't look like it. There is another language feature called 'specialization' that has been proposed and is available on the 'nightly' builds, but it's not yet well-documented. I think I'll just have to write case by case functions for type conversions.

## Polishing up our original dot product

Why does the dot product have to be a dot product of two vectors of the same type? If they can be multiplied and the result can be added, the more the merrier.

That means we need to put two things on a `Mul<>`... something like `Mul<U, Output = S>`? Does that compile? Here's what I tried to compile:

```rust
impl<T: Mul<U, Output = S>, S: Add, U: Copy> Vec2<T> {
    fn dot (a: Vec2<T>, b: Vec2<U>) -> <S as Add>::Output {
        a.x * b.x + a.y * b.y
    }
}
```

Rust complained that `S` and `U` were unconstrained. Will have to figure that out next time.

## The full vector module right now:

```rust
extern crate float;

use std::ops::{Add, Sub, Mul, Div, Rem, Neg};
use float::Sqrt;

#[derive(Copy,Clone,Debug)]
pub struct Vec2<T> {
    x: T,
    y: T,
}

impl<T: Mul<Output = S>, S: Add> Vec2<T> {
    fn dot (a: Vec2<T>, b: Vec2<T>) -> <S as Add>::Output {
        a.x * b.x + a.y * b.y
    }
}

// says U and S are unconstrained ??
// impl<T: Mul<U, Output = S>, S: Add, U: Copy> Vec2<T> {
//     fn dot (a: Vec2<T>, b: Vec2<U>) -> <S as Add>::Output {
//         a.x * b.x + a.y * b.y
//     }
// }

impl<T: Add<S>, S: Copy> Add<Vec2<S>> for Vec2<T> {
    type Output = Vec2<<T as Add<S>>::Output>;

    fn add(self, other: Vec2<S>) -> Self::Output {
        Self::Output {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}

impl<T: Sub<S>, S: Copy> Sub<Vec2<S>> for Vec2<T> {
    type Output = Vec2<<T as Sub<S>>::Output>;

    fn sub(self, other: Vec2<S>) -> Self::Output {
        Self::Output {
            x: self.x - other.x,
            y: self.y - other.y,
        }
    }
}

impl<T: Mul<S>, S: Copy> Mul<S> for Vec2<T> {
    type Output = Vec2<<T as Mul<S>>::Output>;

    fn mul(self, scalar: S) -> Self::Output {
        Self::Output {
            x: self.x * scalar,
            y: self.y * scalar,
        }
    }
}

impl<T: Div<S>, S: Copy> Div<S> for Vec2<T> {
    type Output = Vec2<<T as Div<S>>::Output>;

    fn div(self, scalar: S) -> Self::Output {
        Self::Output {
            x: self.x / scalar,
            y: self.y / scalar,
        }
    }
}

impl<T: Rem<S>, S: Copy> Rem<S> for Vec2<T> {
    type Output = Vec2<<T as Rem<S>>::Output>;

    fn rem(self, scalar: S) -> Self::Output {
        Self::Output {
            x: self.x % scalar,
            y: self.y % scalar,
        }
    }
}

impl<T: Neg> Neg for Vec2<T> {
    type Output = Vec2<<T as Neg>::Output>;

    fn neg(self) -> Self::Output {
        Self::Output {
            x: - self.x,
            y: - self.y
        }
    }
}

impl<T: Copy + Mul<Output = A>, A: Add<Output = S>, S: Sqrt> Vec2<T> {
    fn length(&self) -> S {
        (self.x * self.x + self.y * self.y).sqrt()
    }
}

impl<T: Copy + Mul<Output = A> + Div<S>, A: Add<Output = S>, S: Sqrt + Copy> Vec2<T> {
    fn normalize(self) -> Vec2<<T as Div<S>>::Output> {
        self / self.length()
    }
}

// clashes with core implementation
// impl<T, S: From<T> + T> From<Vec2<T>> for Vec2<S> {
//     fn from(prev: Vec2<T>) -> Self {
//         Vec2 {
//             x: S::from(prev.x),
//             y: S::from(prev.y),
//         }
//     }
// }
```

## Doing something with our vectors

Well, now we have vectors (a few final issues notwithstanding). What can we build with a vector?

I think the first thing we need to do is write a function to convert a pixel location into a position vector. Then, we need to create a representation of a ray, and a constructor to build that ray from a starting position and an endpoint position.

So let's create a new module, and a new struct. But this article is already 3000 words long, so let's call it a day for now.