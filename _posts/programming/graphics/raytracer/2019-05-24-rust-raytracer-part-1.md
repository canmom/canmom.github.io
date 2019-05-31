---
title: "Writing a Raytracer in Rust: part 1 - the Piston maze"
layout: article
categories:
 - programming
 - graphics
 - raytracer
tags:
 - building a raytracer
 - learning rust
excerpt: Let's learn to cast rays with RAII!
custom_css: highlighting
---
I’ve never used Rust before. I don’t know how RAII works (...yet, hopefully I'll figure it out!). But I’ve been talking with <a class="tumblelog" spellcheck="false">@dawnfandom</a>​ about some of their uni work and they’re writing a 2D raytracer, which sounds like a cool project, and seems like a good way to push me to figure out how to do stuff in Rust.

## What are we trying to do?

We want to render an image. This means determining the colour for each pixel in the _frame buffer_.

A pixel can receive light from various _lights_, scattered around the scene. The intensity of each light falls off with distance (if we’re truly in a 2D world, as $$1/r$$, but interpreted as an orthographic view of a 3D world, as $$1/r^2$$), and the brightness of the pixel is a linear sum of the amount of power received from each light.

[Physically, the floor is a diffuse reflector, the lights are somewhere above it, and the camera is orthographic and intercepts all vertical rays being reflected off the floor. In principle, we should also include the height of each light, and that way take into account the angle of reflection using the [Lambertian](https://en.wikipedia.org/wiki/Lambert%27s_cosine_law) $$\cos\theta$$ factor. Not yet though.]

If there’s an _object_ in between the pixel and the light source, the ray is occluded and the pixel receives no power from that light. That’s the ‘ray tracing’ part: we follow a ray of light backwards from the pixel to the light source, to see if it hits anything. To start with, objects will be _geometric primitives_ such as circles. If a pixel falls inside an object, it receives no light (which will be handled automatically, since any ray must pass through the surface of the object!)

The lights will emit three colours - red, green and blue. Once we’ve found the colour of a pixel in a linear colour space, we will need clamp it to an acceptable range and gamma-correct it, to put it into sRGB. Then we display it, or save it to a file, or some such thing. That bit I’ll handle with crates.

## Wouldn’t it be faster and take less effort to do this on the GPU in a shader?

It sure would! But the goal of this project is to learn Rust, so I won’t do that. Maybe something for the future - to write this same program in a fragment shader and throw it on ShaderToy!

## High level view of the program

The algorithm is pretty simple:

* for each pixel:
    * for each light:
        * generate a ray from the pixel to the light
        * for each object:
            * if the ray intersects the object:
                * stop calculating this ray
        * add the colour of the light, attenuated by distance, to the pixel
        * update display of the framebuffer (for cool visuals!)

## What's new with Rust?

Prior to this project, I have pretty much only used more or less 'C-like' languages - namely, Python, JavaScript and C++. Rust has some more modern features, and some unique features that allow it to very thoroughly check programs and make sure they execute correctly.

Rust doesn’t have ‘classes’, but it does have [structs](https://doc.rust-lang.org/book/ch05-01-defining-structs.html), and structs can have methods. The major difference from “classes” in languages I’m more familiar with, such as Python, JavaScript and C++, is that Rust is all about implementing "traits” (and composing multiple traits), rather than having a hierarchy of “x is a y” type inheritance. So instead of a class inheriting from a superclass, a Rust struct can implement a Trait.

Another funky part that makes Rust different from other programming languages is its concept of ownership. The way it seems to work is (reading [this chapter](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html)), when you initialise a variable on the heap in a particular scope, it will be deleted when it goes out of scope. But if you assign the value of that variable to another variable, or pass it to a function, the original variable becomes invalid and you can no longer use it! (There are certain exceptions to this, namely types which have the&nbsp;‘copy’ trait, such as integers). You can pass a variable back to the enclosing scope by returning it from the function.

If that’s a pain, you can create a reference to a variable, which doesn’t transfer ‘ownership’, but instead ‘borrows’ the variable. These may or may not be mutable (they’re immutable by default, like most Rust variables). But you can only have one mutable borrow at a time.

I am definitely in the category of 'novice rustaceans' (groan) who are going to find this confusing, but we'll see how it goes. Let's come back to that when we actually have some code to worry about.

## What do we need first
Well first we need to create a project with Cargo. Then we delete the “Hello World” line from the standard starting script.

```bash
cargo new raytracer2d
```

Well I think first of anything we need to store and display a framebuffer.

I'm going to use the [image crate](https://docs.rs/image/0.21.1/image/) to store image data.

I think I will represent objects in my program in a float-based space, and convert positions on the pixel grid into this 'world space' for performing raytracing calculations. Luckily, in this problem, we don't need to do nearly as many coordinate transformations as we did in the rasteriser! But seperating the pixel grid from the world coordinates will let us set the resolution arbitrarily.

The image crate provides a bunch of structs for representing image data, and suitable traits for pixels and images and so forth. Before we can use it, we need to add it to our project.

Cargo doesn't seem to have a command for adding a new crate as a dependency automatically - it seems we need to manually add the dependency to our `cargo.toml` file. That feels weird to me after using various node package managers, but I'm sure there's a good reason.

```toml
[dependencies]
image = "0.21.1"
```
That means we need at least the current most up to date version of `image`, or a future version with a compatible API.

So then we need to use `extern crate image;` to import the library into our program.

There's some brief explanation of how to instantiate an image buffer on the `image` crate page. First of all, they `use` the relevant structs from image. I should probably check what this syntax means, though it seems rather self-explanatory.

There's [a whole system](https://stevedonovan.github.io/rust-gentle-intro/4-modules.html) for like, splitting your project up into smaller modules which looks reasonable. Modules don't have to be defined in separate files, but if they are, there's a standard way for Rust to look for them. `use` makes stuff in one module visible to another module.

The difference between a 'module' and a 'crate' seems to be that 'crates' are compiled individually, while all the 'modules' in a given crate are compiled at once. I'm not sure whether the image library is going to be a library that needs to be linked by the final binary or... idk, maybe Rust pulls out what it needs? Regardless, that crate contains modules and we're `use`-ing the stuff in those modules. I think.

Anyway, what they decide to `use` is two specific things from `image`:

```rust
use image::{GenericImage, ImageBuffer}
```

I'm not entirely sure why they need both of these? GenericImage is a trait that ImageBuffer implements.

Then they create a new image buffer object on the heap. This is basically an immutable pointer - it will always point to the same part of the heap - but the image itself seems to be mutable?

```
const WIDTH: u32 = 1280;
const HEIGHT: u32 = 720;

let img = ImageBuffer::new(WIDTH, HEIGHT)
```

Here I've used constants, which are like variables that never die and can be used throughout the program. I've set the width and height to make our image 720p in size, but I can change this later!

The `::` syntax means this is an 'associated function', which is sort of like a 'static method' in other languages. In this case it's a constructor.

At this point I gave it a test compile. There was a whole bunch of stuff to compile in the image crate, but it didn't take that long, and Rust didn't get upset! Hooray!

Now to make our program actually _do_ something with this fine image buffer that we've created.

## What's actually in our image buffer anyway?
So it's a buffer pixels - but I don't seem to have anywhere specified exactly which of the several possible kinds of pixel I've created. 

Let's look in the docs and see what options there are, I guess? Internally, we want images to be floating point rgb triplets in a linear colour space. But `ImageBuffer` is a generic type.

So were we supposed to have done like `ImageBuffer<Rgb<f32>>` or something like that? I guess there's no harm in trying that...

So Rust barfs, saying this:
```
error: chained comparison operators require parentheses                                                                                                                                                     
 --> src/main.rs:9:26                                                                                                                                                                                       
  |                                                                                                                                                                                                         
9 |     let img = ImageBuffer<Rgb<f32>>::new(WIDTH, HEIGHT)                                                                                                                                                 
  |                          ^^^^^^^^                                                                                                                                                                       
  |                                                                                                                                                                                                         
  = help: use `::<...>` instead of `<...>` if you meant to specify type arguments                                                                                                                           
  = help: or use `(...)` if you meant to specify fn arguments 
```
So apparently I have to put the two colons first? If we try again:
```
error: expected one of `!`, `.`, `::`, `;`, `?`, `{`, or an operator, found `new`                                                                                                                           
 --> src/main.rs:9:38                                                                                                                                                                                       
  |                                                                                                                                                                                                         
9 |     let img = ImageBuffer::<Rgb<f32>>new(WIDTH, HEIGHT)                                                                                                                                                 
  |                                      ^^^ expected one of 7 possible tokens here
```
So I guess that's *not* how you do it. Let's look at [the docs for generic types](https://doc.rust-lang.org/1.7.0/book/generics.html) again lol.

It seems like I'm getting ahead of myself, perhaps. It seems Rust uses its clever type inferencing stuff to work out what type a generic should be automatically. So maybe I should delete the type annotations and just, start putting pixels into my image? And rust will cleverly deduce, oh, this must be made of RGB floats?

I kind of need to initialize the image to black for the algorithm to work. So let's see if there's a method for that.

Yes, this seems to be the `from_pixel` associated function. So instead of `new`, I'll do that. That means we need to create a pixel as well! That appears to have some kind of generic constructor (I guess meaning it goes on the stack?) - the example I'm working from uses `image::Luma([0u8])` which seems to indicate it's making an array containing a single unsigned 8-bit integer and passing that to some kind of `Luma` constructor. Which turns out to be a function defined in the image library - a shorthand for constructing pixels. Not sure why that's necessary but OK.

So to create an image of black RGB pixels we should presumably write

```rust
let img = ImageBuffer::from_pixel(WIDTH, HEIGHT, image::Rgb([0.,0.,0.]));
```
The default type for float literals in Rust is `f64` i.e. a 64-bit float. That's tbh kind of overkill for our purposes, but the docs say it's unlikely to cause any slowdown on modern CPUs.

Now it compiles, though Rust complains that we don't do anything with GenericImage. Let's remove it until we need it. In fact let's remove the `use` block altogether, and just use the `image::` where we need it. If we find we're using something a bunch, we can come back and `use::` it.

Now Rust warns us that we don't actually use this variable, but we compile just fine. Hooray!

## Drawing a window
Next, let's see about display or output. The `image` crate can save our output just fine, but it would be cool to have a window. The recommendation seems to be to use [rust-sdl](https://github.com/brson/rust-sdl) to create windows using good old SDL. However another option would be to use a [GTK widget](https://gtk-rs.org/docs/gtk/struct.Image.html). That all seems pretty overkill, though?

Instead, let's have a look at [Piston](https://www.piston.rs/), which is designed to be a modular game engine written in Rust. So far most Piston projects are remakes of existing gmaes: you have 2048, a (rather accurate looking!) Minecraft clone, some kind of other stuff with hex grids and so on.

What we need from Piston seems to be the `piston_window` crate, documented [here](https://docs.piston.rs/piston_window/piston_window/). So let's throw that in our `Cargo.toml`.

```
piston_window = "0.93.0"
```

We need to `extern crate piston_window;` that into our program, and then just rip off the boilerplate code. First to instantiate our window:

```rust
let mut window: piston_window::PistonWindow =
    piston_window::WindowSettings::new("Raytracer", [WIDTH, HEIGHT])
        .exit_on_esc(true)
        .build()
        .unwrap_or_else(|e| { panic!("Could not create window!")});
```
So that calls the `new` associated function, which takes a window title and a window size (I think), and then calls `build` on it. This returns an `enum` giving either the result wrapped in a `Some()` or a failure, which is in this case handled with `unwrap_or_else` which simply returns the thing inside if it's successful, and panics (crashes the program) with a hopefully slightly-helpful error message. That `|e| { }` is like, an anonymous function - not sure what the Rust word is for that yet.

Apparently this is using Glutin as a backend, but we can use other backends like SDL or GLFW if we want to. Let's not worry about that for now - figuring out different window management APIs is not the focus of this project!

## Now, how do we actually draw to this window?

The examples do not in fact seem to use the `image` library, even though it is associated with the broader Piston project. Instead, they use [graphics](http://docs.piston.rs/graphics/graphics/), which is a somewhat more powerful graphics library. This contains an image module, though a less flexible one I think? Instead it seems to be using 'textures' from the opengl_graphics library.

Right now I don't want to start using OpenGL, Vulkan or similar (that's a future project), I want to work entirely in Rust. It looks like perhaps the `image` library isn't the best way to handle a program-internal image buffer. But let's take a closer look at the drawing functions...

Well it seems that the obvious function to use is `draw_2d`, which offers the following extremely helpful documentation:

```
pub fn draw_2d<E, F, U>(&mut self, e: &E, f: F) -> Option<U> where
    W: OpenGLWindow,
    E: GenericEvent,
    F: FnOnce(Context, &mut G2d, &mut Device) -> U, 
```
> Renders 2D graphics.
>
> Calls the closure on render events. There is no need to filter events manually, and there is no overhead.

I thought making the window and drawing the framebuffer to it would be the easy part, and then I could focus on the actual problem of tracing rays, but it seems like this is much more confusing.

Having a look around, [a 'closure' is the Rust term for an anonymous function](https://doc.rust-lang.org/book/ch13-01-closures.html). Unlike Rust's functions, closures close over their environment like functions in JavaScript and Python.

So what this does is, when the next event `e` from the window is a render event (as opposed to whatever other events windows have), this function will call the given closure `f`. That's not as bad as I feared? Once you parse the jargon, it's just 'when this happens, do this'.

The closure has to take ownership of the Context, and also borrows references to a G2d (whatever that is) and a Device. FnOnce means it's the kind of closure that is only allowed to be called once, and it takes ownership of all the variables it closes over. I guess it creates a new closure each time or something?

Let's have a look at the sample code and see if we can make sense of it.

```rust
while let Some(e) = window.next() {
    window.draw_2d(&e, |c, g, _| {
        clear([0.5, 0.5, 0.5, 1.0], g);
        rectangle([1.0, 0.0, 0.0, 1.0], // red
                  [0.0, 0.0, 100.0, 100.0], // rectangle
                  c.transform, g);
    });
}
```
So it seems that `window.next()` returns some kind of event `e` which (I presume) tells the program that it's ready for another frame. Once that happens, it calls the `window.draw_2d` function with a reference to that event, and the closure as described (the Device seems to be unnecessary and left out?). That closure takes two arguments, `c` and `g`, and an underscore. `c` is then the Context, `g` is the G2d, and I guess the underscore means we're not actually passing it a device after all.

I took some time to read the Closures chapter here. It all makes a decent amount of sense.

In this example, the Rectangle takes `c.transform` from the `Context`. Both use the `G2d` object, presumably as the target to draw to.

`Context` seems to store information about the window's coordinate system - which way the Y axis is, for example. Not sure how to set it though.

`G2d` seems to be a wrapper around GfxGraphics, which has various graphics drawing functions in order to implement the trait [Graphics](http://docs.piston.rs/piston_window/piston_window/trait.Graphics.html).

The colour space for Graphcis objects seems to be sRGB, but stored as a float for some reason? But anyway, we don't need to go down that far.

The function we want seems to be [image](http://docs.piston.rs/piston_window/piston_window/fn.image.html). This takes a Texture, which depends on the specific backend. There's also [an Image struct](http://docs.piston.rs/piston_window/piston_window/image/struct.Image.html), which represents... a place where an image might be drawn? Seemingly separate from the texture that will be drawn there.

I decided I'd make no headway staring at these API docs, so I decided to go and have a look at one of the examples. [This one looks promising.](https://github.com/PistonDevelopers/piston-examples/blob/master/src/image.rs)... so they load a texture from a path, using the Texture, and declaring it should be type `G2dTexture`:

```rust
let rust_logo: G2dTexture = Texture::from_path(
        &mut window.create_texture_context(),
        &rust_logo,
        Flip::None,
        &TextureSettings::new()
    ).unwrap();
```
So let's track down Texture::from_path?? Aha, [here](http://docs.piston.rs/piston_window/piston_window/struct.Texture.html)'s the `Texture` *struct*, whereas before I was looking at some other thing also called `Texture`.

It seems that it is possible to create a texture from an ImageBuffer, which in turns seems to be the `ImageBuffer` from the `image` crate. At last, something recognisable!

So now I think I can see what we need to do: we make a Texture from our existing ImageBuffer, and in the future we can update that.

And I *believe* that means the following code:

```rust
let tex = piston_window::Texture::from_image(
    &mut window.create_texture_context(),
    &frame_buffer,
    &piston_window::TextureSettings::new())
    .unwrap();
```
Let's see if it even compiles lol.

...OK, I needed to fill in some module namespaces, and then it turned out I needed to make my image buffer into an RGBA rather than RGB buffer (idk why we need an alpha channel, but apparently we do). We can handle gamma conversion on the texture settings, though I need to figure out which function exactly.

Then we find another error: the Texture expects its colours to be u8s, but of course the working frame buffer is in floats. So, we're going to need to convert colour spaces now.

Just for the sake of, making sure we can do anything at all, I'll switch it to u8s for a sec.

Do that, and despite some complaints about unused variables, we compile! If we run, a window appears for a brief fraction of a second. I guess we need to handle the loop to stick around?

First, I'm going to copy the example and turn on lazy evaluation, which I believe means we don't draw a frame unless something changes?

```rust
piston_window::window.set_lazy(true)
```
Something like that. Window still doesn't stick around. Also we had to bring the `EventLoop` trait into scope for this to work?

Now we set up the drawing loop to update our window, which we'll directly copy from the example code lol:

```rust
while let Some(e) = window.next() {
    window.draw_2d(&e, |c, g, _| {
        piston_window::clear([1.0; 4], g);
        piston_window::image(&tex, c.transform, g)
    });
}
```
Hopefully with this in, we'll actually see the window stick around? I sure hope so. Let's try it!

Success! A 720p white window appears. It's white because our Clear function cleared it with `1.0`, I think. And, because we cleverly set the alpha channel to zero in our framebuffer, it doesn't show up when it's drawn over the screen. Lol.

I put the alpha up to 255, and ran it again. This should be black.

It is! Success! Hooray! We have managed to draw a black screen.

There's a few issues that I need to fix, like the window starting maximised, and I need to work out how to convert a framebuffer that's a float to a framebuffer that's u8, but still, I am finally at the point where I can start writing an actual raytracer. I hope.

Here's the full program so far:

```rust
extern crate image;
extern crate piston_window;

use piston_window::EventLoop;

const WIDTH: u32 = 1280;
const HEIGHT: u32 = 720;

fn main() {
    let frame_buffer = image::ImageBuffer::from_pixel(WIDTH, HEIGHT, image::Rgba([0,0,0,255]));

    let mut window: piston_window::PistonWindow =
    piston_window::WindowSettings::new("Raytracer", [WIDTH, HEIGHT])
        .exit_on_esc(true)
        .build()
        .unwrap_or_else(|_e| { panic!("Could not create window!")});

    let tex = piston_window::Texture::from_image(
        &mut window.create_texture_context(),
        &frame_buffer,
        &piston_window::TextureSettings::new())
        .unwrap();

    window.set_lazy(true);

    while let Some(e) = window.next() {
        window.draw_2d(&e, |c, g, _| {
            piston_window::clear([1.0; 4], g);
            piston_window::image(&tex, c.transform, g)
        });
    }
}
```