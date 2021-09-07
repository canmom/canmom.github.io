---
title: "Perspective! 4: the bag of tricks"
layout: article
excerpt: How do you make sure two things are the same height? How do you move things around on a plane? And, especially, how do you cast shadows? We start to build up a bag of tricks for perspective-wrangling.
category: animation
tags:
    - animation notes
    - perspective
date: 2021-09-01 22:22:00 +01:00
---

Whoops, it's been a long time since I updated this series! More than a year, in fact.

The goal of this article is to build up some of the 'bag of tricks' that artists have created over the centuries to help place things in perspective. This may seem... esoteric and nerdy; it is rare to need to construct a picture this meticulously. But seeing how they work can be useful for understanding perspective.

{% include hiddentoc.md %}

## The first trick: extending a distance along a line

Last year we were drawing a railway---the classic example of something equally spaced, receding into the distance.

So, I want to draw all the equally distant railway sleepers, in perspective. Let's start by drawing one sleeper.

<figure>
  <img alt="A box in perspective, representing a railway sleeper." src="{{ site.url }}/img/embed/animation/perspective/42-new-railway-single-sleeper.png">
</figure>

Where does the second one go? Well, that depends how far you want them to be spaced. It's possible to work this out exactly, but for now, just eyeball it. I'm only going to draw the front plane; we'll soon see how to work out the appropriate depth to foreshorten it anon.

<figure>
  <img alt="An arbitrarily placed second sleeper." src="{{ site.url }}/img/embed/animation/perspective/43-new-railway-second-sleeper.png">
</figure>

Now comes the fun part. Here’s the two useful facts:
<ul>
  <li><b>if two things are in the same place in world space, they’re also in the same place in canvas space</b></li>
  <li><b>straight lines in world space are straight lines in canvas space</b></li>
</ul>

With that in mind, we just need to figure out the right lines to draw in order to clone our railway sleepers.

There are actually multiple approaches to this. The most common method I see is to "draw a line through the midpoint". It goes like this... 

<figure>
  <img alt="Two sleepers, with a cross connecting corresponding corners. This is shown from above, and in perspective" src="{{ site.url }}/img/embed/animation/perspective/44-new-railway-cross-from-above.png">
</figure>

First, we find the midpoint. If we diagonally connect the corners of the sleepers, the diagonals will cross at the exact centre of this rectangle (in world space).

If we draw a line from this midpoint that’s parallel to the tracks, it will hit every single sleeper right in the middle:

<figure>
  <img alt="A line extends from the midpoint, dead central to the tracks." src="{{ site.url }}/img/embed/animation/perspective/45-new-railway-cross-centre-line.png">
</figure>

Now, if we draw a line from the edge of one sleeper through the middle of another, and then continue it to the opposite side of the track…

<figure>
  <img alt="A new line from the corner of one sleeper through the middle of the other, allowing placement of a third sleeper." src="{{ site.url }}/img/embed/animation/perspective/46-new-railway-cloned-sleeper.png">
</figure>

through the magic of triangles, we have cloned the distance between the sleepers!

However, there is (in my opinion) a better way! Certainly if you have access to a vanishing point tool, like in Krita. Constructing the midpoint is too laborious and restrictive.

Instead, we can simply extend one of those diagonal lines to the horizon, to find a new vanishing point for that family of diagonal lines.

<figure>
  <img alt="A line from one corner of a sleeper to the opposite corner of another, extended to the horizon line." src="{{ site.url }}/img/embed/animation/perspective/47-new-railway-diagonal-line-family.png">
</figure>

We can now connect further diagonal lines up to this vanishing point to clone the distance between the sleepers. By alternating two vanishing points, we zigzag along the track.

{% include figure.html alt="A series of equidistant lines, cloned in perspective using using a diagonal vanishing point." src="embed/animation/perspective/48-new-railway-cloning-with-vp.png" %}

The great part about this method is that we can use it to clone any distance along a parallel line. For example, if we draw a diagonal line across a sleeper, we get another diagonal family:

{% include figure.html alt="A series of equidistant lines, cloned in perspective using using a diagonal vanishing point." src="embed/animation/perspective/49-new-railway-sleeper-thickness-cloning.png" %}

which we've used to foreshorten the thickness of the sleepers as they recede into the distance. The result, turning off all the vanishing line layers, is...

{% include figure.html alt="A set of regularly spaced boxes, which could be the sleepers of a railway, in perspective." src="embed/animation/perspective/50-new-railway-sleepers-finished.png" %}

To accentuate the sense of depth, I've reduced the line weight and opacity of the more distant sleepers. We'll come back to this kind of depth trick later. And for the hell of it, let's draw the rest of a scene.

{% include figure.html alt="A girl sits on the platform by a railway leading into a tunnel. A distance plume of smoke suggests an approaching train. The scene is rendered using pencil style hatching." src="embed/animation/perspective/51-railway-scene.png" %}

This trick is very useful if you want to clone distances. For example, in animation, if a character is walking away from the camera in perspective, and you want their steps to be evenly spaced, you can use a method like this to space out your keyframes. (Perspective walks are very difficult, though, so don't be discouraged.)

To express this in a slightly more formal algebraic way, which you may or may not find useful depending on your inclinations:

<details markdown="1">
<summary>To clone a vector in the direction it's pointing</summary>

To transport a vector (3D line segment) which we'll call <b>V</b>, which has vanishing point <b>VP1</b>, in the direction it's pointing:

 - draw a line through V to VP1, which we'll call <b>L1</b>.
 - create a second line <b>L2</b> that also goes to VP1 (i.e. L2 is parallel to L1 in 3D space).
 - pick a second vanishing point, <b>VP2</b>. Connect VP1 to VP2 with a line, which we'll call <b>H</b> (for Horizon).
 - draw a line from VP2 through the starting point of V, up to L2. Let's call the point where it crosses L2 <b>I1</b> (for Intersection 1).
 - draw a line from I through the ending point of V, and extend it all the way to H. Where it crosses H, you have the vanishing point of the 'diagonal' lines. We'll call this <b>VP3</b>.
 - pick a point on L1 where you want to copy the ending point of V. Let's call this <b>T</b> for Target.
 - draw a line from VP3 through T, and continue it until you hit L2. Call this point I2 (for Intersection 2).
 - draw a line from VP2 to I2. This line should cross L1. The point where it crosses L1 is the starting point of the cloned line segment. Connect this to T and you're done.

</details>

This is probably better expressed by a gif:

{% include figure.html alt="Animation of the above algorithm for transporting a vector." src="embed/animation/perspective/parallel-transport.gif" %}

## Cloning distances along a non-parallel line

We can extend this technique slightly to transport vectors in arbitrary directions. (It's implicit in what we did above, but I think it's worth showing in detail.)


<details markdown="1">
<summary>To clone a vector in an arbitrary direction</summary>

To transport a vector (3D line segment) which we'll call <b>V</b>, which has a vanishing point <b>VPV</b>, along another line <b>L1</b>, which has vanishing point <b>VP1</b>:

 - draw a line from VP1 through the endpoint of V. we'll call this line <b>L2</b>.
 - pick a point on L1 where we want to clone V. Call this point <b>T</b>.
 - draw a line from VPV through T until it hits L2---a point which we will call <b>I</b>.
 - draw a line from T to I. You're done!

</details>

Now that may seem simpler, but we had some extra information to start (two different vanishing points). The tricky part in practice may be finding the vanishing point of the vector V you're trying to clone.

One of the most common examples is when you have multiple characters of about the same height standing on the same ground plane. For example, suppose you have a character in one spot, and you want a second character standing further from the camera at a particular spot on the ground...

{% include figure.html alt="A single figure standing on a cross in perspective, with another cross further from the 'camera'." src="embed/animation/perspective/55-one-figure-on-plane.png" %}

To find a vanishing point for these two figures, we can simply draw a line through the two 'base' points up to the horizon.

{% include figure.html alt="The same figure with a line from the base of their feet through the second point to the horizon, establishing a vanishing point VP1." src="embed/animation/perspective/56-figure-on-plane-vanishing-point.png" %}

Then we can connect this to the head of the first figure, and use it to transport a line along the plane.

{% include figure.html alt="Using this vanishing point, a vertical line at the original figure is transported to the second cross." src="embed/animation/perspective/57-transporting-figure.png" %}

Then we can draw a figure to match that line.

{% include figure.html alt="A second figure is drawn to match the height of the first." src="embed/animation/perspective/58-two-figures.png" %}

One thing that you may notice here is that the horizon line crosses both figures at about shoulder height. This indicates the height of the camera. In general, the horizon line will cross figures at the height of the camera. For an eye-level camera, it will cross the figures at eye level. This follows from geometry: the 'eye lasers' from the camera that run horizontal to the ground are the ones that vanish on the horizon line. So for a POV shot at eye-level, the horizon line should cross characters at around eye-level (modulo their individual heights). If the camera is placed low to the ground for a low-angle shot, the horizon line should cross near the ankles.

In this picture, to simplify as much as possible, I've chosen an asymmetric crop that isn't typical of a camera, where the principal point is off-centre. This may look a little odd; we can instead choose to make the principal point central like in a camera and draw the figures with a true three-point perspective. But to know how to place the third vanishing point accurately, we'll need to know how to use the 90-degree circle, so I'll come back to that one next time!

## The underlying method:

All of the tricks above are essentially variants of 'building our way out' by following chains of implications. The core 'building blocks' are, to me anyway,

 - if we know two points, we can connect them with a line segment
 - if we know a line segment lies in a plane, we can find its vanishing point by extending it to the vanishing line of the plane
 - if we know a line's vanishing point, we can create a line through any point that's parallel to the first line
 - if we know two vanishing points, we can draw a line through them to create the vanishing line of a plane containing both families of parallel lines
 - if we know two lines live in same plane, their intersection in world space is the same as their intersection in canvas space

So yes, the way I'm presenting it, it is very very much like constructing a mathematical proof: you have a set of 'allowed moves', a thing you want to find, and a starting list of 'axioms' (the points and lines you already know).

Using these tricks, you can construct a perspective grid without the aid of a computer. (You should, however, probably use a computer!) Here's a quick gif I made a little while ago to illustrate how you'd do this:

{% include figure.html alt="An animation showing the construction of a perspective grid." src="embed/animation/perspective/grids.gif" %}

## Casting shadows

These two figures in their white void have form shadows, but to really anchor them in the scene, they ought to be casting shadows as well. How do we work out where to put a shadow in perspective?

### The general method

This is a pretty complex subject, and a lot of the time it's better to lean on your visual intuition and eyeball it, or (for especially complex shadows, e.g. shadows cast on curved surfaces) open 3D software, roughly block out the scene, and let a raytracer do the hard part. But shadows from a linear (sun-like) source onto flat planes is well within human capabilities, and hopefully seeing this one will build a bit of intuition for how shadows work in general.

Before we go into 3D, let's have a look at shadow geometry in 2D. Parallel rays of light slant down and hit an occluder. The edge of the shadow is where the ray of light that just glances the occluder hits a line along the ground plane, creating a triangle that receives no light.

{% include figure.html alt="A 2D slice of a world in which a bumpy object blocks out a chunk of slanting rays, delineating an area where no light falls. The edge of this dark area is marked by a ray that just grazes the top of the bumpy object." src="embed/animation/perspective/59-2d-shadow.png" %}

How can we construct this in 3D? We can intersect lines with lines, but intersecting lines with planes is harder. What we need is a line that is:
 - in the same plane as the light ray, so its intersection with the ray is meaningful (represents a real point in 3D space and not just a coincidence)
 - also in the ground plane, since that is where we're drawing the shadow
I will call this line the 'baseline' for the shadow. I have no idea if that's standard terminology but I need a name, you know?

So we need to imagine a 'shadow plane' containing both the light ray and this 'baseline' that runs along the ground plane. However, this in itself gives us infinitely many possible choices of plane and baseline. How can we pin it down further? Let's specify that the shadow plane contains the ground plane's <b>normal</b> - a line that points directly away from the ground plane. This is generally a good choice because it's often possible to construct the plane's normal.

Knowing the normal, we can find a vanishing point for the baseline by drawing a line in the normal direction, connecting the ground plane's vanishing line to the light source's vanishing point. Sound kinda abstract? Let's do some examples.

### Shadows on a big flat plane

The simplest case, a flat ground plane and a level camera, is easy. The normal lines are all vertical, so you can drop a line straight down from the light source, and where it hits the horizon line, you have the vanishing point of the baseline.

{% include figure.html alt="A vertical line is drawn from the sun to the horizon plane." src="embed/animation/perspective/60-shadow-baseline.png" %}

Now all we need to do is draw a ray from the sun that goes through the top of the figure (more precisely, through the shadow terminator), and the baseline through their feet (the point on the ground plane directly underneath that point on the terminator).

{% include figure.html alt="Light rays are drawn through the figures until they hit the baseline." src="embed/animation/perspective/61-shadow-rays.png" %}

With this information, we can draw in shadows at the right size. (If we wanted to be really precise, we could project every single point, but you really just need a few to anchor your drawing intuition!.)

{% include figure.html alt="Grey shadows are drawn on the ground using the shadow ray construction we've discussed." src="embed/animation/perspective/62-cast-shadows.png" %}

Turn off the construction lines and throw in a few more values and you get something like this.

{% include figure.html alt="The figures hanging out in a featureless grey void, with shadows cast by the sun." src="embed/animation/perspective/63-figures-on-plane-final.png" %}

### Shadows of slanting and floating objects

We can apply the same method to cast shadows of objects that are not upright, or even floating above the ground. The tricky part is that we need to know about a point on the plane directly underneath the point whose shadow we're trying to project.

Let's say our two figures on a plane are visited by an octahedron. (Any resemblance to angels living or dead are purely coincidental.) We know two of its vanishing points on the horizon line.

{% include figure.html alt="A blue octahedron is placed in the scene with the two figures. It doesn't yet have a shadow but it is above the ground." src="/embed/animation/perspective/67-ramiel-no-shadow.png" %}

We can find the points directly underneath the corners of the octahedron by drawing a vertical line down from each one (since the camera is level, all the normal lines of the ground plane are parallel), and intersecting them with lines from these vanishing points. But first we need to make some decisions, like, is it small and near or large and far away? In practice, for this particular shape, we need to place one single point underneath, and from that we can construct the rest using vanishing lines. Like so:

{% include figure.html alt="An animation showing how it is possible to construct the silhouette of the octrahedron underneath by using line intersections." src="/embed/animation/perspective/ramiel-under-silhouette.gif" %}

Having found these points, we can then project the points of the octrahedron using the same method as the figures. The result is a kind of "sun's eye view" of the octahedron projected onto the ground plane.

{% include figure.html alt="An animation showing how it is possible to construct the shadow of the octrahedron by projecting each point." src="embed/animation/perspective/ramiel-shadow-projection.gif" %}

Now all we need to do is fill in the shadow we've created...

{% include figure.html alt="The octahedron is now shaded blue and the shadow we drew filled in grey." src="embed/animation/perspective/68-figures-on-plane-with-ramiel.png" %}

You can see that this technique can be used for just about any 3D shape, but of course the more points you project, the more effort it will take! It's worth remembering at this point that it may be better to draw something inaccurate that still 'looks right' to you; it is unlikely that anyone will put this much scrutiny into whether your shadows are perfectly perspective accurate! Use this kind of exercise to build intuition, and handle unusual situations.

### Shadows on a sloping surface

However, things get a big trickier if, for example, you're trying to cast a shadow on an inclined plane in general. Not overwhelmingly so, but it requires some thought!

For now, I'll just talk about how to do it if you already know the vanishing point of a plane's normal. Next time, I'll go into how we can *find* this vanishing point easily using the 90-degree circle.

So, let's say you've got a river bank. As an inclined plane, it has a tilted vanishing line. This time I rigorously constructed both the vanishing point of the normal, and the second vanishing point of lines going directly down the slope. We'll go into that next time!

Anyway, using the methods discussed above, I spaced out regular slabs and placed a couple of figures. The camera is slightly lower than the river bank, so the horizon line of level ground is not visible in most of the picture. Here's our riverbank:

{% include figure.html alt="A steeply sloping riverbank divided into regular slabs. One figure stands by the water, a second at the top of the bank." src="embed/animation/perspective/64-figures-on-riverbank.png" %}

Now, we want these figures to cast shadows. So let's put the sun somewhere in our picture---and make sure it's above the plane's vanishing line so the plane is not fully in shadow! (When the sun is close to this vanishing line, you'll get long, dramatic shadows. When it's far away---outside the picture area, generally---you'll get smaller shadows.) We also need to know the direction of the plane's normal. If you go to the effort of constructing it, the vanishing point of the normal is a long way outside the picture plane, but I drew some example normals so you get an idea where it is.

{% include figure.html alt="The same riverbank, now with the sun located near the top of the picture, above the vanishing line of the riverbank." src="embed/animation/perspective/65-riverbank-sun-normal.png" %}

So, we first need to connect the vanishing line of our riverbank to the sun, in the normal direction. This gives us the vanishing point of shadow 'baselines'. This is always going to meet the vanishing line at a right angle.

{% include figure.html alt="The same image with the sun connected to the vanishing line of the bank with a line in the normal direction" src="embed/animation/perspective/66-riverbank-baseline-vp.png" %}

But, we can't just draw a line through the head and feet like last time, because the figures are not standing normal to the riverbank! (These inclined planes really are a pain huh.) We need to do a bit of extra work: first extend a line in the river bank plane through the base of the figure, then connect it to the head of the figure with a normal line. Finally we can draw in the shadow baseline, and extend a shadow ray to meet it. Here's an animation:

{% include figure.html alt="An animation showing how to construct the position of the shadow of the head." src="embed/animation/perspective/66-riverbank-baseline-vp.png" %}

We've constructed the location of the head's shadow; but to get a sense of how the proportions break down, we can construct other landmarks, like the neck and waist. This can be done in exactly the same way. Here's an animation of how this construction traces out the line of the shadow:

{% include figure.html alt="An animation showing how a series of points on the body of a figure are projected onto the ground, creating a straight line to their feet" src="embed/animation/perspective/riverbank-shadow-points.gif" %}

The second figure in this picture is standing at the bottom of the bank, so basically none of their shadow will touch the bank. The water is level, so instead of the vanishing line of the bank, we just use the horizon line.

{% include figure.html alt="An animation showing how a shadow is projected on a different plane, that of the water" src="embed/animation/perspective/riverbank-shadow-points.gif" %}

What about shadows that cut across plane changes? Let's put a large bridge in the background of this picture. We need to portray two shadows: the one cast on the bank, and the one cast on the river. If our perspective constructions are accurate, these will line up nicely.

First, we should construct the shadow down the riverbank:

{% include figure.html alt="An animation showing the construction of a shadow down the river bank." src="embed/animation/perspective/riverbank-bridge-shadow.gif" %}

To do this, I imagined extending the plane of the riverbank a bit further until it met the bridge, which gave me one point on the edge of the shadow. Then I extended out a line from the sun through a fairly arbitrary point on the bridge---it doesn't matter which one exactly, but I wanted one whose shadow point would be inside the plane of the picture. I found the corresponding point along the normal direction, and drew the baseline through it.

We can do something very similar for the water - we just need two points in the ground plane to connect with a line, and it really doesn't matter if they're visible or not.

{% include figure.html alt="An animation showing the projection of points of the bridge onto the water." src="embed/animation/perspective/riverbank-bridge-shadow-on-water.gif" %}

As we'd hope, the shadows join up nicely. You might also notice that the shadow of the road is parallel to the road itself. In general, if you project the shadow of a line onto a parallel surface, the shadow line will be parallel to the original line. This is useful for example for quickly eyeballing a character's shadow on a wall.

### Shadows from behind the camera

If the light source is behind the camera, this creates an additional wrinkle. No matter how far you expand your picture, you'll never draw the light source. But never fear! There is still a vanishing point: instead of being where the light is coming from, it's where the light is travelling to.

In practice, this means you use largely the same constructions as we've just covered, but the vanishing point will typically be underground. For example, suppose we have a girl running in the desert.

{% include figure.html alt="A girl sprinting towards the camera along a completely flat plane." src="embed/animation/perspective/71-sprinting-girl.png" %}

Let's cast her shadow from behind the camera this time! The shadow vanishing point should be somewhere below the horizon line. We can connect that up to a baseline vanishing point. We also need to make sure we know the ground plane location of each point we intend to project, constructing out from one starting point.

Now we can project shadows! The only difference is that the shadow ray crosses the baseline on the other side than we're used to.

{% include figure.html alt="Animated construction of a (slightly janky) shadow of the running girl." src="embed/animation/perspective/running-girl-shadow-projection.gif" %}

This one honestly came out kind of janky, probably a result of projecting too complex a shape. I tried adjusting the final shadow shape by eye in the last step, but even so, it looks odd to me. Nevertheless, let's add some form shadows.

{% include figure.html alt="The running girl with form shadows to accentuate the light direction, drawn in a harsh black." src="embed/animation/perspective/73-sprinting-girl-rendered.png" %}

<!--<details markdown="1">
<summary>A mathematical justification for this</summary>

The classic ray-line intersection test has a ray with parametric equation $$\mathbf{r}(t)=\mathbf{r}_0 + t \hat{\mathbf{d}}$$ intersecting with a plane $$(\mathbf{r}-\mathbf{p}_0)\cdot\hat{\mathbf{n}}=0$$, with the solution that the intersection point happens when

$$t=\frac{(\mathbf{p}_0-\mathbf{r}_0)\cdot\hat{\mathbf{n}}}{\hat{\mathbf{d}}\cdot\hat{\mathbf{n}}}$$

so the shadow point is at position

$$\mathbf{r}=\mathbf{r}_0+\hat{\mathbf{d}}\frac{(\mathbf{p}_0-\mathbf{r}_0)\cdot\hat{\mathbf{n}}}{\hat{\mathbf{d}}\cdot\hat{\mathbf{n}}}$$

Here we can interpret $$\mathbf{r}_0$$ as the point where the light ray grazes the occluding object.
</details>-->

## Bringing it all together

Suppose we have a building that has a line of diagonal flagpoles. We want the flagpoles to be evenly spaced, and all the same length and pointing in the same direction. So in short, we want to clone the *length* and *direction*  of the flagpole along the front of the building. And for an extra twist, let's put it in three point perspective. Perhaps a character is climbing into an embassy, and we want the camera angled down to emphasise the height.

So, let's block out a three point perspective box (for now, just eyeballing the vanishing points) and drop in the first flagpole:

{% include figure.html alt="A slightly downwards angled camera view of a box with some equally spaced gradations. A flagpole juts out of it." src="embed/animation/perspective/52-single-flagpole.png" %}

To copy the flagpole, we need two points: its start point and its endpoint. We have a line (the blue vanishing line) representing the starting points. The endpoints are being transported in the same direction as the start point, so we can connect the endpoint of the first flag to the blue vanishing point.

To space the starting points, we can use the method from the previous section. But what about the end points? To extend the starting points to the endpoints, we would need the vanishing point of the flagpole itself.

How you find this vanishing point will depend a bit on the particulars of the scene. In this scene, I figured I should use the green line that is perpendicular to the facade of the building to construct a second flagpole. Here's the method:

{% include figure.html alt="Animation in which a series of steps along known directions are used to construct a second flagpole." src="embed/animation/perspective/construct-flagpole.gif" %}

If you can get two flagpoles down by some means, you can find their vanishing point by extending the lines until they cross. In this case they're almost parallel in canvas space, so the vanishing point will be miles away outside the canvas. (Not a problem in digital, but if you're drawing this on paper, probably just draw em parallel!) With this VP, we can connect the starting points to the ending points of the flagpoles.

{% include figure.html alt="The same illustration with lines leading to the vanishing point of the flagpoles." src="embed/animation/perspective/53-flagpole-vp.png" %}

Then, you know, draw the rest of the owl.

{% include figure.html alt="A building with large plate glass windows and a row of flagpoles. A guard can be seen standing below" src="embed/animation/perspective/54-flagpole-scene.png" %}

But what about shadows? We want our scene to have some values and shadow shapes to bring out the sense of "3D form" even further, right? ("Maybe *you* do.") 

The front of the embassy is vertical, and its vanishing point is also pretty much vertical. I'm going to put the light source (red vanishing lines) outside the picture frame (thank the art gods for Krita's vanishing point tool) and work pretty briskly.

{% include figure.html alt="Animated time lapse: The embassy scene is lit as a value painting in a series of steps." src="embed/animation/perspective/embassy-rendering.gif" %}

I hope this process is now comprehensible as something you could potentially use to cast a shadow now and again! Here's the final embassy drawing...

{% include figure.html alt="Drawing of the embassy with value painting and the flags reflected in the windows." src="embed/animation/perspective/74-embassy-rendered.png" %}

Those window reflections are pretty messy, aren't they? Maybe next time we can look into reflective surfaces...

## The next step

So far all of these tricks only handle *translating* lines, and synthesising new lines between known points. If we really want to be able to constract any object we want, we also really need to be able to *rotate* lines in 3D.

To do this, we need the power of the 90-degree circle. Which is the subject of the next article. Hopefully appearing in less than a year!