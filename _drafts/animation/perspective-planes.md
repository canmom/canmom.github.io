---
title: "Perspective! 3: catching a plane"
layout: article
excerpt: You can draw planes at all sorts of angles. But to do so, we need some more concepts in our toolbox. Let's meet vanishing lines.
category: animation
tags:
    - animation notes
    - perspective
date: 2020-08-09 00:00:04 +01:00
---

<p>We just introduced the most important tool of perspective drawing: the vanishing point. Let's summarise what we've learned:</p>

<ul>
  <li>Parallel, infinitely long lines in <b>world space</b> all connect to a specific point in <b>canvas space</b>, called the <dfn>vanishing point</dfn>.
  <li>The 'distance' between vanishing points is the angle between the directions they represent. The closer you place vanishing points representing a particular angle, the wider the field of view of your picture.</li>
  <li>Angles are more and more 'stretched out' the further you get from the <dfn>principal point</dfn> (the point where your gaze is perpendicular to the image plane). This reaches an extreme for directions that are parallel to the image plane, whose vanishing points are infinitely far away.</li>
</ul>

<p>That's all well and good for lines, but what happens when we connect these lines up to make planes (flat surfaces)?</p>

<h2>Vanishing lines</h2>

<p>A family of parallel lines in perspective all point to a vanishing point. What about an <b>infinitely big plane</b>?</p>

<p>A plane contains an infinite number of different families of parallel lines, each of which has a vanishing point. If you were to draw all of these vanishing points, it turns out… they all form a line in <b>canvas space</b>!</p>

<p>This is most commonly seen when we deal with the <dfn>ground plane</dfn>, which is a good place to start. Imagine we’re standing not on a spherical Earth, but an infinitely large flat plane with the canvas vertical. We shoot lasers out of our eyes as usual.</p>

<p>We can divide the lasers into two classes. If they’re angled below the horizontal, they will eventually hit the ground. If they’re skimming exactly along the ground, or pointing above the horizontal, they will not hit anything but sky. In <b>canvas space</b>, this corresponds to dividing the picture into a side that’s ground and a half that’s sky. The boundary corresponds to the lasers that are exactly parallel to the ground plane.</p>

<figure>
  <img alt="The horizon line corresponds to visual rays parallel to the ground plane. Rays angled above this see sky; rays below see ground." src="{{ site.url }}/img/embed/animation/perspective/23-horizon-line.png">
</figure>

<p>Now hold on a minute, you might say. We live on a spheroid, not an infinite flat plane. Objects such as ships don’t recede infinitely far away, but disappear over the horizon, starting with the bottom. And they start to disappear like this only a few kilometres away.</p>

<p>If you said this, you were right. The ‘horizon line’ in a perspective drawing will actually be very slightly above the horizon as seen on Earth… except for hills and stuff, which will probably have the opposite effect. But the difference is so small that it is unlikely to be discernible. We can actually work out how far the Earth’s horizon is below the perspective horizon using some circle geometry:</p>

<figure>
  <img alt="A quick trigonometry calculation showing how far a spherical Earth's actual horizon is below the horizontal ray." src="{{ site.url }}/img/embed/animation/perspective/24-earth-horizon.png">
</figure>

<p>For a 2m tall person standing on a 6371000m radius Earth, this turns out to be… 0.05°. You’re absolutely not going to be able to draw that without a gigantic piece of paper/stupidly high res digital canvas and an implausibly sharp pen. And if there’s hills and stuff, they’ll cause much more disruption to the visual horizon. This is why we can get away with calling the vanishing line of the ground plane the ‘horizon line’: the Earth is really fucking big. If we lived on a tiny little asteroid like the little prince, we’d have to be more careful in our terminology :p</p>

<p>So, there’s a horizon line. If, for whatever reason, you have an infinite plane in your picture that’s not the ground plane… or you want to do perspective constructions on a non-planar surface… where should the vanishing line go? Well, you can always rely on our old friend, vanishing points. If you already know two sets of parallel lines in this plane (easy if it’s a rectangle), you can draw their vanishing points, and then draw a line connecting those vanishing points, and that’s the horizon for this specific plane.</p>

<p>For example: here’s a quadrilateral. This could represent a rectangle in perspective, but it’s not flat to the ground plane.</p>

<figure>
  <img alt="A wonky looking quadrilateral" src="{{ site.url }}/img/embed/animation/perspective/25-arbitrary-plane.png">
</figure>

<p>By extrapolating out its edges and finding where they meet, we can find out its vanishing points.</p>

<figure>
  <img alt="The quadrilateral's edges are extrapolated out until they meet. This defines two vanishing points." src="{{ site.url }}/img/embed/animation/perspective/26-arbitrary-vps.png">
</figure>

<p>Now, if we connect them with a line, we’ve discovered this plane’s vanishing line.</p>

<figure>
  <img alt="A line through the vanishing points defines a vanishing line." src="{{ site.url }}/img/embed/animation/perspective/27-arbitrary-plane-horizon-line.png">
</figure>

<p>Phew, that's pretty steeply tilted - we've drawn a steep ramp! Since we started with a pretty distorted looking quadrilateral, naturally its vanishing points are pretty close together, meaning we have quite a wide-angle drawing here. Just how wild angle? We can construct a 3D scene that matches a rectangle up with this perspective drawing in Blender, but there's multiple ways to go about it depending on where we put the principal point. Here's one possibility:</p>

{% include figure.html alt="A Blender render of a rectangle that perfectly lines up with our perspective drawing." src="arbitrary-plane-blender-v2.png" capt="In this render, the field of view is 126°." %}

<p>We’ll see what we can <em>do</em> with a horizon line in a moment, but let’s talk a little about what it <em>represents</em>.</p>

<p>Where a vanishing point picks out a set of parallel <em>lines</em>, a horizon line picks out a set of parallel <em>planes</em>. So if you have a stack of parallel planes, like a multistorey car park, all of them have the same horizon line.</p>

<p>When two planes intersect, it creates a line in <b>world space</b>. Like all lines, this intersection line has a vanishing point in <b>canvas space</b>. This vanishing point is exactly where the vanishing lines of the two planes cross each other.</p>

<p>For example, suppose we add a ground plane to the drawing we just made, and we want this plane to touch the ramp we drew on its bottom edge. So the ground plane's vanishing line should intersect the ramp's vanishing line at the vanishing point of the bottom edge---the blue one. That looks like this:</p>

{% include figure.html alt="The same plane but now with a horizon line added, crossing through the." src="32-arbitrary-plane-horizon.png" %}

<h2>Where does the vanishing line go in the picture?</h2>

<p>A vanishing line represents a set of parallel planes, sure. But where do we place a vanishing line? How do we interpret its position and orientation?</p>

<p>We've seen that vanishing <em>points</em> represent the direction of an eye laser, and they spread out from the central 'normal direction' to represent increasing angles. We can take this concept again, but first we need a couple of geometrical concepts: specifically, the normal of a plane.</p>

<p>The <dfn>normal</dfn> of a plane is the direction that is perpendicular to the plane---pointing away from the plane as directly as possible. We can draw a little arrow representing the normal at any position on the plane. Since all these arrows are parallel to each other

<p>To understand vanishing lines, let's bring back our rotating square. When we're looking face-on to the square, the vanishing point is i</p>