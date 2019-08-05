---
title: "Writing a Raytracer in Rust: part 5"
layout: article
categories:
 - programming
 - graphics
 - raytracer
tags:
 - building a raytracer
 - learning rust
excerpt: An ab-serde situation? The program becomes a little more flexible, and I get ready to try to benchmark it.
custom_css: highlighting
---

Last time, we made a program that could genuinely be called a 'raytracer'! It traces rays!

But we can do a whole lot more than that. Light doesn't just stop at surfaces: if it did, we would only ever be able to see light sources with direct line of sight. Instead, our rays should reflect and refract. That's probably some of the most interesting phenomena our raytracer can show, so let's look into doing that.

What this means is that, instead of just cancelling the ray, our ray has to spawn a child ray according to the angle rules of reflection and refraction. Only that child ray will not, in general, be heading towards a light. So what do we do?

One solution would be to replace our lights with emissive surfaces. We can follow a ray until it either hits an emissive surface or reaches the iteration limit. If it hits an emissive surface, we add light, attenuated by the total length of the ray.

Another approach is to have surfaces that aren't perfectly specular. If we have diffuse surfaces, or more generally surfaces with any particular bidrectional scattering distribution function (BSDF), we can hit a surface and then go directly to the light, and the BSDF will tell us how to attenuate the ray according to the angle of scattering.

In this case, we'd be essentially implementing a 2D version of Whitted's 1979 algorithm (according to Wikipedia). When a ray hits a surface, if we're less than the max iteration count...

 - we generate a 'direct illumination' ray for each light source. If this ray doesn't intersect any object, we attenuate by the BSDF and add light.
 - if the surface is reflective, we generate a reflection ray according to the 'angle of incidence = angle of reflectance' rule. If this ray hits an object, we increase the iteration count and generate another set of 2-3 rays
 - if the surface is transparent, we generate a refraction ray based on its index of refraction. If this ray hits an object, we increase the iteration count and generate another set of 2-3 rays

This approach could capture, for example, a light ray that hits a diffuse object, is reflected or refracted by some number of mirrors/transparent objects, and eventually reaches the camera. However since the reflectance rays don't go directly to a light, it could not capture 'caustics' - areas where light is particularly concentrated by reflection and refraction.

This approach has a problem, however. It does not account for *diffuse interreflection*, or in general any interreflection which is not perfectly specular. This is most apparent when the camera ray hits the floor, which we're treating as a diffuse reflector. Reflected light could, in general approach the floor from any direction, so it's not enough just to cast rays directly towards the lights anymore. We'd want to cast some additional rays in order to sample this incoming reflected light, but which direction?

In a *path tracing* renderer, the answer is: bounce rays in random directions, average all the rays, and let the result slowly converge. When a ray hits a surface in a path tracer, we spawn a child ray in a random direction, attenuated by the BSDF. We repeat this until we reach an emissive surface or the max iteration count runs out. This is, for example, how Blender's Cycles renderer works.

We also potentially could make this work with point lights, by forcing the final ray to go directly to the light, instead of a random direction. This would require us to take into account multiple 'generations' of indirect light. The algorithm would go something like:

 - shoot rays to all lights to get direct illumination. if a ray hits something, discard it
 - generate a random set of reflection rays, each one with an attenuation factor based on the BSDF.
     - if they hit something, increase the iteration count and go to the first step

I think that seems workable. It could also do with a set of rays that start from the lights to handle caustics perhaps. But before we do any of that, let's see about improving our program's usability!

## Some tweaks

I became aware of the crate [cargo-edit](https://crates.io/crates/cargo-edit), which can be installed system-wide, and adds new commands to Cargo. This lets me `cargo add` a new crate, instead of manually editing the `config.toml` file. In order to install this, I first needed to install the `libssl-dev` package on my Ubuntu, and update my Rust installation to the latest (stable) version with `rustup update`. All three commands `add`, `rm` and `upgrade` can then be installed with `cargo install cargo-edit`. With that, I could `cargo upgrade` to the latest versions of `image` and `piston-window`.

## Reading config from an external file

Presently, we are hardcoding the lights and occluders in our program. This means that every time I change the scene, I need to re-compile the program.

My initial instinct was to use the TOML crate, decide on a format for writing light specifications in TOML, and write code to handle converting the output of the TOML library (internally, BTreeMaps) into the structs I use in my program. However, I realised that I'm essentially reinventing the wheel here! The problem I'm trying to solve is *deserialisation*, which is handled in Rust by the [Serde](https://serde.rs/) crate. With Serde, I theoretically only have to `[derive]` the Serialize and Deserialize traits on my structs, and it will be able to convert to and from TOML, JSON and various other structures 'for free'.

Because our structs are pretty much entirely f64s, there should be little trouble deserializing them. The only potential question is how it will handle the generic `Vec2` and `Vec3` structs. But the documentation promises:

> It is able to generate implementations for most structs and enums including ones with elaborate generic types or trait bounds.

So fingers crossed it will just work!

First step: I need to add Serde to my project, along with say, serde\_toml or something like that to pick a specific serialisation format (the docs describe `serde_json`). That's described in the docs [here](https://serde.rs/derive.html). And... it turns out the `toml` crate supports serde already, there's no need to find some kind of separate serde\_toml, so that's nice. This is my `Cargo.toml` now:

```toml
[package]
name = "raytracer2d"
version = "0.1.0"
authors = ["canmom <bryn.dickinson@gmail.com>"]
edition = "2018"

[dependencies]
image = "0.21.2"
piston_window = "0.99.0"
"piston-float" = "1.0.0"
serde = { version = "1.0.94", features = ["derive"] }
toml = "0.5.1"
```

I haven't really been changing the version according to semver. I should *probably* do that if I put it up publicly, not that I expect anyone to actually use this program!

I'll just check if this compiles first... reassuringly, it does.

Next, I neede to `use` and `derive` both `Serialize` and `Deserialize` on... basically all of my structs. That is: my lights, my occluders, and of course my 2D and 3D vectors.

```rust
use serde::{Serialize, Deserialize};

#[derive(Copy,Clone,Debug,Serialize,Deserialize)]
pub struct Vec2<T> {
    pub x: T,
    pub y: T,
}
```

and likewise for `Vec3`, `Light`, `Ray` and `Circle`. Then, I gave this a test compile to see if Rust is happy with me deriving those traits.

...unfortunately, it is not! The reason seems to be the reference to a `Light` in my `Ray`:

```rust
#[derive(Debug,Serialize,Deserialize)]
pub struct Ray<'a> {
    pub origin: Vec2<f64>,
    pub dir: Vec2<f64>,
    pub length: f64,
    pub target: &'a Light,
}
```

I started puzzling over a way to implement `Ray` without a reference, and then it dawned on me that I have no need to serialise `Ray`s at all! The Rays are generated and discarded entirely within the rendering process, they're not part of the config.

Once again, the Rust compiler is smarter than me. With those unneeded `derive`s removed, the program compiles without issue.

Next step: let's serialise some data, and see what it looks like. I'll start by serialising the lights. If that works OK, I'll try creating a structure to represent the scene, containing vectors of lights and occluders. (To make a vector of different types of occluders, we'll be able to use an `enum`, which will be a new thing to learn!)

To serialise a thing, we need to use the TOML libary's methods - specifically, `to_string`. We just need to pass this function a reference to a struct that implements `Serialize`. For now, I'll just `println!` it to the console.

```rust
println!("{}",toml::to_string(&lights).unwrap());
```

The output looks like this:

```toml
[loc]
x = 0.5
y = 0.4

[col]
x = 1.0
y = 0.0
z = 0.0
[loc]
x = 0.41339745963
y = 0.55

[col]
x = 0.0
y = 1.0
z = 0.0
(...)
```

Curiously the individual lights don't have anything to mark them as a Light, and they kind of directly run into each other... is this really a valid serialisation? Let's try deserialising from it into a vector of lights.

```rust
let lights: Vec<Light> = toml::from_str("[loc]
x = 0.5
y = 0.4

[col]
x = 1.0
y = 0.0
z = 0.0
[loc]
x = 0.41339745963
y = 0.55

[col]
x = 0.0
y = 1.0
z = 0.0
...").unwrap();
```

This panics from the `unwrap()` at runtime, saying that it expected a sequence and got a map. Could it be that I copied it from the console incorrectly?

Let's try creating the lights the way I did originally, serialising it, then deserialising it and using the output. We'll see if it barfs in the same way.

```rust
let lights: Vec<Light> = toml::from_str(&toml::to_string(&lights_original).unwrap()).unwrap();

```

...we do, in fact, get the same error message. So it seems the TOML crate isn't correctly serialising our sequence, at least not in a way it understands itself! As it turns out, this is a [known bug](https://github.com/alexcrichton/toml-rs/issues/303) with the TOML crate. The suggested workaround is to wrap the object in a `HashMap` in order to produce a full TOML document instead of a fragment.

I'm not into that!

What happens if we make a `Scene` struct, to contain our various vectors of lights and so forth? This might be a step towards refactoring into a hypothetically faster Entity Component System model later. If this doesn't work, I'll abandon TOML for JSON or some other serialisation format.

So I made a new `scene` module:

```rust
use crate::ray::{Light};
use crate::occluders::{Circle};
use serde::{Serialize, Deserialize};

pub struct Scene {
    pub lights: Vec<Light>,
    pub occluders: Vec<Circle>,
}
```

I populated a `Scene` in `main.rs`:

```rust
let scene = Scene {
    lights: vec![
        Light {
            loc: centre + Vec2 { x: 0., y: -0.1},
            col: colour(1.0,0.0,0.0),
        },
        (more lights)
    ],
    occluders:  vec![
        Circle {
            centre: centre,
            radius: 0.15,
        },
        (more circles)
    ]
};
```

And I made a few modifications to the drawing loop to refer to `scene.lights` and `scene.occluders`. That compiled and drew the same image as before.

Now what happens if I try to deserialize then reserialize it in the same way? ...well, it panics on deserialisation again, but in a different way. This time, it complains about a ValueAfterTable. I split up the serialisation and deserialisation, and it turns out the problem this time is with the serialisation!

I'm sure there is a way to fix this with enough time and effort, but let's see what happens if we use a different serialisation format. A promising one for my purposes strikes me as [RON](https://github.com/ron-rs/ron) (Rusty Object Notation), which is built around Serde's data model, and distinguishes between structs and maps while generally looking very similar to Rust code.

So, I `cargo rm toml` and `cargo add ron`. A slight complication comes that RON is split into `de` and `ser` submodules, but once fixed, I'm able to successfully serialise and deserialise my scene! Hooray!

The RON output of my scene description looks like this:

```RON
(lights:[(loc:(x:0.5,y:0.4,),col:(x:1,y:0,z:0,),),(loc:(x:0.41339745963,y:0.55,),col:(x:0,y:1,z:0,),),(loc:(x:0.58660254037,y:0.55,),col:(x:0,y:0,z:1,),),(loc:(x:0.5,y:0.8,),col:(x:1,y:0,z:0,),),(loc:(x:0.24019237887,y:0.35,),col:(x:0,y:1,z:0,),),(loc:(x:0.75980762113,y:0.35,),col:(x:0,y:0,z:1,),),],occluders:[(centre:(x:0.5,y:0.5,),radius:0.15,),(centre:(x:0.5,y:0.5,),radius:0.05,),],)
```

It's a bit cluttered - I wonder if there's a way to prettify it? There is, in fact, a `to_string_pretty` method, but it requires a [special config](https://docs.rs/ron/0.5.1/ron/ser/struct.PrettyConfig.html). Luckily this implements the `Default` trait, so we can pass it the default for its type:

```rust
let scene_description = ron::ser::to_string_pretty(&scene, Default::default()).unwrap();
```

The result is a nicely nested, comprehensible syntax.

Now, I would like to load this from a file when the program starts. That means invoking the `fs` module of Rust's standard library. We also (going by the example!) need the io::prelude module which takes into scope some useful traits for I/O work.

```rust
use std::fs::File;
use std::io::prelude::*;
```

Then I wrote a short function to load a scene from RON:

```rust
impl Scene {
    pub fn from_ron(description: &mut File) -> Scene {
        let mut contents = String::new();
        description.read_to_string(&mut contents).unwrap();
        ron::de::from_str(&contents).unwrap()
    }
}
```

`read_to_string` returns a `Result`. The documentation mentioned the `?` operator, which is [a little syntactic feature](https://doc.rust-lang.org/edition-guide/rust-2018/error-handling-and-panics/the-question-mark-operator-for-easier-error-handling.html) added to Rust in the 2018 edition, which unwraps an `Ok`, and propagates an `Err` up the call stack. However, that requires the calling function to return a `Result` or `Err` and right now, I'm happy to just panic.

Anyway, over in `main` we do this:

```rust
let scene = Scene::from_ron(&mut File::open("scene.ron").unwrap());
```

which should load the scene from a file called 'scene.ron'. I tried it... and it worked! Hooray!

Now all I need to do is take the name of the scene description from the command line. This is pretty easy in fact, documented in [the book](https://doc.rust-lang.org/book/ch12-01-accepting-command-line-arguments.html) like so many useful things. It gives us a `Vec` of `String`s, starting with the program's name.

```rust
let args: Vec<String> = env::args().collect();
let scene_description = &args[1];
let scene = Scene::from_ron(&mut File::open(scene_description).unwrap());
```

That worked fine! So now, if I want to render any number of scenes, I have no need to recompile the program; I can just scribble out a RON file with the scene I want to render.

## Concurrency

The next trick I want to pull is gonna be to try to get the system rendering in parallel. Instead of rendering every pixel in order, I want to split into threads and have each thread handle some portion of the pixels.

In general, realtime graphics program is about running an thousands of copies of a simple programs in parallel on the GPU. These 'shaders' cannot, in general, talk to each other. In 3D, this has generally been limited to rasterisation, because raytracing has just been too slow - though that's changing! Using a modern graphics API such as Vulkan or OpenGL (or, if you insist, a proprietary one like DirectX or Metal), you can write shaders that run for every vertex (of a mesh), for every fragment (roughly, every pixel), and various other 'every something's.

We're on the CPU, not the GPU, but we can kind of approximate the approach a GPU takes. After all, the inner part of our rendering loop is not all that different from a fragment shader (and could have been implemented as one), so in theory we could split this between different threads. But first, to see the benefits of this, I need to work out how to benchmark profile the current version of my program. (It seems that *benchmarking* measures the total execution time, while *profiling* analyses which bits of the code the program spends the most time executing.)

The recommendation for this seems to be the [Criterion](https://crates.io/crates/criterion) crate. In order to use it, I have to add some stuff to my `cargo.toml`:

```toml
[dev-dependencies]
criterion = "0.2"

[[bench]]
name = "render"
harness = false
```

Apparently I need to disable the "standard benchmarking harness", which is what that last line does. I also need to make sure I have gnuplot installed.

Then, I need to add some benchmarking to a benchmark in a `$PROJECT/benches` folder. Rust 2018 edition seems to have come out since the docs for Criterion were written, so instead of using `#[macro_use]` and `extern crate criterion`, I can now just `use criterion::macroname` in order to import a macro. So I should be able to import the relevant macros with:

```rust
use criterion::{Criterion, black_box, criterion_group, criterion_main};
```

Next, I need to split off my rendering code in `main.rs` into its own function, so I can pass that function to the benchmarker. A first stab goes like:

```rust
pub fn render(scene: Scene) -> ImageBuffer<Rgba<u8>, Vec<u8>> {
    let mut frame_buffer = ImageBuffer::from_pixel(WIDTH, HEIGHT, Rgba([0,0,0,255]));

    for (x, y, pixel) in frame_buffer.enumerate_pixels_mut() {
        let world_space_position = Vec2 {
            x: x as f64 / WIDTH as f64,
            y: y as f64 / WIDTH as f64,
        };

        let mut fragment = colour(0.0,0.0,0.0);

        for light in &scene.lights {
            let ray_to = Ray::new(world_space_position, light);

            if !scene.occluders.iter().any(|occluder| {
                occluder.hit_by(&ray_to)
            }) {
                fragment += ray_to.shade();
            }
        }

        *pixel = frag_to_pixel(fragment);
    }

    frame_buffer
}
```

This compiled so it's probably fine!

Now, I need to set up the benchmark itself. The benchmark file looks like this, basically cloned from the Criterion documentation with minor changes:

```rust
use criterion::{Criterion, black_box, criterion_group, criterion_main};
use crate::render;

fn criterion_benchmark(c: &mut Criterion) {
    c.bench_function("render 20", |b| b.iter(|| render(black_box(20))));
}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);
```

Running `cargo bench` recompiled my crate for production (removing the debug flags), including all 206 of its dependencies... and then, unfortunately didn't work. Because, it turns out, Criterion is built as its own crate... and it cannot analyse binary crates. Wish I'd realised that sooner!

Since I've been sitting on this for a while, I'll post this for now. Next time, I'll see about using the less sophisticated benchmarking provided by Rust's onw `libtest` to benchmark this program, and then see if we can improve performance with either async code or managing threads ourselves.