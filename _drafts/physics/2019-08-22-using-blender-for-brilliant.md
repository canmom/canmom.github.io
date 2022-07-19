---
title: Using Blender for Brilliant.org
excerpt: On ways to use Blender and its python API for very precise animation
layout: article
categories: physics
---
I started working for the education company [Brilliant.org](https://brilliant.org) about a year ago. Most of my work involves writing questions (the upcoming course on electromagnetism and after that, Daily Challenges), but I also work on animation. By preference, I like to use free software - and in particular, the 3D graphcis suite [Blender](https://blender.org).

This post is written in part for other members of the Brilliant art team who may be thinking of using Blender for their own animation, and in part for anyone who is interested to see how the animations in Brilliant questions are made. Because it's not really covered elsewhere that I've seen, I will be talking in particular about using drivers and the Python API, which allow me to manipulate Blender's data structures and create extremely precise animations.

Blender recently released the 2.8 version, which includes a number of new features, in particular the Grease Pencil 2D animation system and the Eevee real-time renderering engine. I've been working in Blender 2.8, so I will be (for example) talking about Collections rather than Layers.

## My experience of the Brilliant workflow

Generally speaking, when producing a Daily Challenge, I will write a first draft of the text and submit it for review by other writers. If it's approved, we move it to 'iterating' and I write a request to the artists for images to illustrate the problem. I'll find reference images to illustrate these, or draw my own sketches.

A lot of my problems have involved concepts such as reference frames, which can be much more clearly explained with animation. So, I'll usually describe a set of assets (e.g. a train and its wheels, and a juggler character inside the train) that I want to animate. Previously, these would tend to be SVG images produced using [Figma](https://www.figma.com). However, Brilliant recently adopted a new art style, which means the assets tend to be PNG images instead. I'll talk about the process of animating both of these.

# How a Blender file works

A Blender file has many parts - different pieces of data representing e.g. objects in 3D space, a particular set of material properties, data representing the points of a mesh or curve, or 'IPO curves' defining how an animation should play out. These data structures refer to each other: a mesh Object, for example, has a reference to some Mesh data, which in turns refers to a certain set of material slots, which point to Materials; the object, meanwhile, also has e.g. a set of modifiers and a set of constraints. Often, multiple objects can point to the same data: two different objects can use the same mesh data, or two meshes can  You have e.g. World settings, and Render Layers which might say 'render these parts of the scene with these camera settings and draw outlines in this way'.

Generally speaking, when editing, you will have one or more objects selected. One of these objects is the 'active' object, whose data is displayed in other panels. This object is outlined in a slightly brighter shade of orange. You can select more than one object with `shift+right click`, and also select a different object in the current selection set as the active object.

Blender relies heavily on hotkeys, and to get good with the program it's quite important to learn at least the main ones: `G` to move something ('grab'), `S` to scale, `R` to rotate, `Shift-A` to add a new object, `Tab` to switch between Object Mode and Edit Mode (to edit a specific object's mesh/curve data). I'll talk more about the specifics of these operations shortly. Blender 2.8 has added a set of widgets that allow you to more easily access these actions using the mouse (or a tablet!) but I'd still recommend getting the hand of the hotkeys.

Let's begin by taking a quick survey of the major Blender objects.

## Rendered objects

The main objects we're going to be interested in are Mesh and Curve objects, so let's look at those first. You can select an object by (default settings) right clicking on it - if there are a lot of closely overlapping objects you may need to right click a few times to cycle through until you get the object you want.

### Meshes

A mesh is a set of points (vertices) in 3D space, joined by edges, which can form faces made out of 3 or more vertices surrounded by edges. These faces are ultimately made of triangles, but a lot of the time these faces will be combined into 'quads' made of two triangles and sometimes 'n-gons' made of more.

Typically, you build a mesh object by starting with a 'primitive' such as a plane, circle or sphere. From there, you might extrude vertices, or use the sculpting tools. Since we're mostly going to be animating 2D assets from other software, I won't go into 3D modelling techniques too much.

### Curves

In a mesh, two vertices are always joined by a straight line (though you can use modifiers such as Subdivision Surface to create a smoother shape). A curve, on the other hand, represents a [Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) - each vertex is associated with handles that can shape the curve. This is the same system as generally used in SVG, so when importing an SVG asset into Blender, you'll end up with a set of curve objects for each object in the SVG file.

A curve can be 2D or 3D. 2D curves can be filled in, just like the fill in SVG. Alternatively, 2D or 3D curves can be used as a path, along which you can extrude a second 2D curve. This is referred to as a 'bevel object'.

When it's displayed in the viewport or rendered, the curve is coverted to a triangle mesh, which sometimes looks quite blocky. We can adjust the resolution of this triangulation, to make a smoother curve (or reduce it, if sharp angles is what we want!). It's also possible to convert a curve into a mesh object (default hotkey: `Alt-C`) for more precise editing.

### Text

Blender kind of falls down here. It can put text in the scene, with all the same options as a 2D curve (since that's basically what it's generating!). You can use whatever OpenType or TrueType fonts you have on your computer, though you'll need to navigate to the font files manually. I don't think there's a lot of support for advanced font features like ligatures and fancy kerning and so forth. But I don't really know enough about fonts to give an in-depth comment.

I think there are some bugs in the implementation: it's hard to format text the way I want a lot of the time. If you're having trouble with text, it may be easier just to convert the text you want into SVG in another program, and then import that into Blender as a Curve. (See below for discussion of the... *limitations* of the SVG importer.)

### The other stuff

Blender supports two other types of 3D object: metaballs (which create a surface based on findind contours of a scalar field), NURBS (similar to curves, a way of representing a smooth surface with control points)... I won't be going into these at all, since I don't tend to use them!

Blender 2.8 added a new set of features called Grease Pencil designed for 2D animation. This looks very powerful, but I'm not really familiar with how it's used. If you want to try out Grease Pencil, there are various tutorials out there on YouTube.

### Volumetrics, physics and particle systems

Strictly speaking, these are effects applied to other kinds of objects already mentioned. But they are distinct enough to be worth discussing on their own.

Blender supports various kinds of volumetric simulation: fluids, smoke etc. It also simulates physics simulations, in which you might deform objects as if they're made of cloth or other soft materials, or as rigid bodies.

Additionally, Blender objects can create systems of thousands of 'particles', emitted over time from the vertices or faces of another object. These particle systems can be used to create 'instances' of existing objects in the scene.

## Non rendered objects

There are a number of other important Objects which don't represent physical parts of our scene, but are either used to assist in animation or to define how the scene is rendered.

### Cameras

When you render an image, it is from the point of view of a Camera object. You can have as many cameras as you please in your scene, and each one can have different parameters such as lens angle (with one exception: the aspect ratio of every camera is fixed by the scene's render settings).

For 2D animation, we generally _don't_ want faraway objects to appear smaller, so we need to change our camera settings from Perspective to Orthographic. This lets us physically layer our objects in 3D space. We also generally want to align the camera with one of the axes (I tend to prefer the Z axis), which is most easily achieved by manually typing zeros in each of its rotation angles.

To switch to the view from the current camera, hit `Numpad 0`. To switch to a different camera as the current camera (and look through it at the same time), the easiest way is to select it and press `Ctrl+Numpad 0`.

### Lights

In the old days of Blender, you'd generally light your scene by adding 'light' objects, representing a point light source, or a 'sun' light that creates light 'from infinity' in a uniform direction. Nowadays, both of Blender's main render engines, Cycles (raytracer) and Eevee (rasteriser) use a 'physics-based' rendering model where the amount of physical space taken up by a light is quite important. So we generally want to use objects with an 'emission' material, or else use an omnidirectional scan of a particular scene (usually called an 'HDR') to light our scene. I'll talk more about lighting later.

For 2D animation, I generally want no lighting at all so I'll delete all light objects and set all materials to emissive.

### Empties

An 'Empty' object is simply a location and orientation in space. They don't appear in the render. They're useful for:

 - creating force fields centred on a specific point
 - acting as a 'parent' object, to which you can attach other objects using parenting or constraints, for animation - for example, to make a lot of objects rotate around a specific point, you can 'parent' them all to an Empty and animation the Empty's rotation angle
 - creating a target that e.g. a camera can point to, or for Inverse Kinematics

You can choose how an Empty appears in the scene: a set of axes, an arrow, etc.

### Bones

You can create a system of 'bones', which are a tool for deforming other objects - traditionally, for character animation. These bones support algorithms such as Inverse Kinematics. This is a very broad subject, so I'll discuss it in more detail once we get to a concrete example.

## Materials

So that's what can appear in the 3D scene. But how to determine how it looks?

Every rendered object in Blender has a reference to a list of materials, which determine how light reflects off the object, whether they emit light etc. In terms of rendering theory, the material determines the Bidirectional Scattering Distribution Function. This function, given the direction of incoming and outgoing light rays, determines the colour of light that gets reflected, refracted etc.

(This is sometimes called a 'shader', though it should not be confused with 'shaders' in realtime rendering which are small programs which run per pixel, per vertex etc.)

Blender supports a very powerful system for creating materials out of a network of nodes, which take the information such as texture coordinates, material colour etc., process it in some way, and ultimately feed into an appropriate BSDF. For the most part I don't use the full power of material nodes, creating only very simple materials using the Emission node. I'll get into that in the examples.

## Colour management

As of Blender 2.8, Blender's default setting for colour management is 'Filmic', which internally handles colours in a linear space and then applies a 'view transform' to turn them from this high dynamic range linear floating point space to sRGB (or whatever other space you're using for output) in a similar way to a real camera. You can read about the technicalities [here](https://docs.blender.org/manual/en/latest/render/color_management.html).

For Brilliant, however, I usually want to precisely recreate one specific sRGB colour to match up with other assets on the website. I can copy an sRGB hex string into Blender's materials, and it will automatically convert it into the internal linear space for materials, but when I render a scene with this material, the Filmic transform will probably create a different colour entirely!

Luckily there's an easy fix. In the 'Render' settings, open the 'Color Management' box, and change the View Transform from Filmic to Default (note that 'Default' is no longer actually the default!). You won't necessarily *exactly* reproduce sRGB colours, because there are likely floating point errors in the process of converting a colour from sRGB to linear and back again, but you'll be within 1 or 2 hex values, too close for the eye to tell the difference.

## Drivers

Every parameter of every Blender object can be animated. This can be done in one of two ways: with keyframes, or programatically with a Python expression. The latter method is called a driver, and drivers are what allow me to create precise animations suitable for use in physics problems.

To add a driver, right click on a property and click 'Add driver', or simply type in your expression starting with the hash `#` character. Drivers can use data stored in the 'driver namespace', which can be accessed through the Python API. They can also access the properties of other objects. And they can obtain the current frame, using the `frame` keyword.

For example, suppose you want to make something go up and down with a sinusoidal motion. You could do this approximately by carefully keyframing a sinusoid, and setting it to repeat... you could do it with physics, by creating a simple harmonic motion force field and fiddling with the physics parameters on your object until you get the motion you want... or you could do it the easy way, and type `#sin(2*pi*frame/[period in frames])` in its Z-location field. If you wanted to use a different axis, you could get a little creative and parent it to an Empty and rotate it to a new angle.

Drivers are *absurdly* powerful, but they're very poorly documented. One of the major reasons I'm writing this guide is to demonstrate what they can do.

## Constraints

Blender objects can be placed in the scene by hand, but they can also be moved and rotated by 'constraints' in relation to other objects. For example, you could copy another object's location, its orientation, you could point to it. If there are multiple constraints, you can average their effects by assigning each one a certain weight. The weighting can be animated with keyframes or drivers, like any other property.

## The SVG importer and its limitations

Blender supports import and export to a lot of 2D and 3D formats. Unfortunately, the level of support is... variable.

Although the workflow has changed lately, at one point the artists at Brilliant would create assets in a program called Figma, which supported export to SVG. I would download the SVG files, and import them into Blender.

In Blender, the SVG files would appear as a collection of Curve objects. Each object in the SVG file would appear as its own 2D Curve object, with a material that uses the fill colour of the SVG object. So far, so reasonable (at least if you're not using too many strokes).

Unfortunately, there are some drawbacks. The curve objects all appear in the same plane, regardless of what layer they are on in the original SVG file. This creates the potential for 'z-fighting', where two materials occupy the same space and the renderer decides arbitrarily which one it should draw. Sometimes you get lucky and this doesn't happen, but for reliability, it's a good idea to move the individual parts of the SVG file to very slightly different heights.

Another problem is that the curves are not generally filled in. This would require going through and clicking on each individual curve. Moreover, the default material when nodes aren't enabled is based on the physically realistic 'principled' BSDF, but generally I want to use a flat, unshaded 'emissive' BSDF.

Rather than go through and manually change every Curve object to fix these problems, I wrote a Python script to use Blender's Python API to make these changes automatically:

```python
import bpy

curves = [object for object in bpy.data.objects if object.type == 'CURVE']

for curve in curves:
    curve.data.fill_mode = 'BOTH'
    
    material = curve.material_slots[0].material
    colour = material.diffuse_color
    
    material.use_nodes = True
    
    tree = material.node_tree
    
    output_node = tree.nodes[0]
    
    tree.nodes.remove(tree.nodes[1])
    new_node = tree.nodes.new('ShaderNodeEmission')
    
    new_node.inputs[0].default_value = colour
    tree.links.new(new_node.outputs[0], output_node.inputs[0])
```

This script can be opened in the Scripting tab (or any Text Editor pane), and run from there as well. What it does:

 - makes sure every Curve object is filled in on both sides (will crash if there are any 2D curves in the scene!)
 - finds the material assigned to the curve by the SVG script, saves its colour in a local variable
 - enables nodes. this will, by default, create a Principled shader with default settings, connected to an output node
 - deletes the Principled shader node, and creates an Emission node
 - sets the colour input of the Emission node to the colour stored in the local variable
 - links the Emission node to the output node

In short, it makes it so that all the curves in your scene are filled in and flat shaded. I could make various improvements, such as letting you select specific curves to work on, and making curves with the same colour use the same material instead of generating a new material for each one, but this is plenty for my purposes.

# Example 2: the juggler on the train

This was created for [one of my first DCs](https://brilliant.org/daily-problems/jupiter-gravity-assist/), and the first time I used the SVG import script. I wanted to show the way velocities could be added with a vector sum when transforming between reference frames. So I came up with the idea of a train with a juggler riding on it.

The artist created a juggler character and a train, which I downloaded as an SVG file. I needed to do some cleanup of the SVG file in Inkscape before it was ready to be imported into Blender, to avoid some glitchy surfaces.

To create the animated juggling, I created an armature of bones: one bone for each segment of the character's arms. Bones are arranged in a hierarchical tree: each bone has a start point and an endpoint, starting from a base or root bone, down to a final branch bone. Rotate a bone near the root, and its child bones will follow. So you have a 'chain' of bones, which allows you to create poses similar to a puppet.

Inverse Kinematics allows you to place a bone at the bottom of a tree (the juggler's hand, for example) and the other bones (the forearm and upper arm in this case) will automatically position themselves in a plausible way in between the root and the bone you're controlling, consistent with the constraints on each bone. This meant I could easily animate the juggler's hand, and her arms would follow in a natural way.

To create this IK rig, I set up the following system of bones and constraints:

 - there is a forearm bone, a hand bone, and an upper arm bone. There is also a 'target' bone, which is not directly parented to the bone tree.
 - the forearm bone has an IK constraint, with its target set as the target bone. This will mean the upper arm bone and forearm bone will always move so that the forearm bone is at the base of the target bone.
 - the hand bone has a 'copy rotation' constraint, with its target set as the target bone. Since the hand bone's position is fixed by its parent (the forearm bone) is will mean the hand bone will essentially be a clone of the target bone.

I animated the juggling balls using Python, to create a physically accurate animation (under the assumption of zero air resistance). This involved a quick, low arc and a slow, high arc, each one a parabola. The key part of the script is:

```python
fps = 24

jugglerwidth = 1.2

t1 = 50.
t2 = 25.

vx1 = jugglerwidth / t1
vx2 = - jugglerwidth / t2 

g = 0.1/fps

vy1 = 0.5 * g * t1
vy2 = 0.5 * g * t2

offset = Vector(-6.1,0.3)

def parabolicarc(frame, vx, vy, xinit):
    return Vector(xinit + vx * frame + offset.x, vy * frame - 0.5 * g * frame**2 + offset.y)

def juggle(frame):
    cf = frame % (t1 + t2)
    if cf <= t1:
        return parabolicarc(cf, vx1, vy1, 0)
    elif cf <= t1+t2:
        return parabolicarc(cf-t1, vx2, vy2, vx1 * t1)
    else:
        raise ValueError('Frame out of cycle range (should be impossible!)')
```

`Vector` is a simple Cartesian vector class, supporting the usual operations. `parabolicarc` determines the position of the ball along a parabolic arc, given its initial velocity and x location. `t1` and `t2` are the durations of each toss of the juggling ball. From them, I calculate appropriate initial velocities. Finally, `juggle` uses the modulo operation to put the current frame into a cycle of length `t1+t2`, and then determine which segment of the cycle (first or second throw) we're in and call `parabolicarc` with the appropriate parameters.

I then made this function available in the Driver namespace:

```python
py.app.driver_namespace['juggle'] = juggle
bpy.app.driver_namespace['period'] = t1 + t2
```

This allows me to use this function in drivers. (Because Python functions close over other in-scope variables when they're created, I can use the globals defined in this script in the function; they're not actually exposed to the rest of Blender's python API.)

The actual drivers then look like this:

```python
juggle(frame+period / 3).x
```
The offset is different for each ball.

Once the juggling balls were animated, and the juggler's IK rig was set up, I could animate her hands to follow the juggling balls for a few frames, making it appear that she is throwing them. This could be handled with keyframe animation, but I found it easier to use constraints again.

I applied three "copy location" constraints to the target bone of the hand, one for each ball. If all three applied, it would massively overdetermine the hand's motion; the third constraint would take priority. But I turned the weight of all three constraints down to zero, and then keyframe animated them to briefly jump up to 1, stay there for a few frames, and then return to zero.