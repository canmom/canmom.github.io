---
title: "Perspective! 4: the bag of tricks"
layout: article
excerpt: How do you make sure two things are the same height? How do you move things around on a plane? We start to build up a bag of tricks for perspective-wrangling.
category: animation
tags:
    - animation notes
    - perspective
date: 2021-08-30 00:00:04 +01:00
---

Whoops, it's been a long time since I updated this series! More than a year, in fact.

The goal of this article is to build up some of the 'bag of tricks' that artists have created over the centuries to help place things in perspective. This may seem... esoteric and nerdy; it is rare to need to construct a picture this meticulously. But seeing how they work can be useful for understanding perspective.

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

There are actually multiple approaches to this. The most common method I see is to "draw a line through the midpoint". It goes like this: first, you draw a cross between 

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

Now that may seem simpler, but we had some extra information to start (two different vanishing points). The tricky part in practice may be finding the vanishing point of the vector V you're trying to clone. For example...

## Bringing it all together

Suppose we have a building that has a line of diagonal flagpoles. We want the flagpoles to be evenly spaced, and all the same length and pointing in the same direction. So in short, we want to clone the *length* and *direction*  of the flagpole along the front of the building. And for an extra twist, let's put it in three point perspective. Perhaps a character is climbing into an embassy, and we want the camera angled down to emphasise the height.

So, let's block out a three point perspective box and plonk in a flagpole:

{% include figure.html alt="A slightly downwards angled camera view of a box with some equally spaced gradations. A flagpole juts out of it." src="embed/animation/perspective/52-single-flagpole.png" %}

To copy the flagpole, we need two points: its start point and its endpoint. We have a line (the blue vanishing line) representing the starting points. The endpoints are being transported in the same direction, so we can connect the endpoint of the first flag to the blue vanishing point.

To space the starting points, we can use the method from the previous section. But what about the end points? To extend the starting points to the endpoints, we would need the vanishing point of the flagpole itself. For, say, a vertical fencepost and a level camera, this is easy. But we've made life hard for ourselves!

How you find this vanishing point will depend a bit on the particulars of the scene. (Or could for example pick it arbitrarily.) In this scene, I figured I should use the green line that is perpendicular to the facade of the building to construct a second flagpole. Here's the method:

{% include figure.html alt="Animation in which a series of steps along known directions are used to construct a second flagpole." src="embed/animation/perspective/construct-flagpole.gif" %}

If you can get two flagpoles, you can find their vanishing point. In this case they're almost parallel in canvas space, so the vanishing point will be miles away outside the canvas. (Not a problem in digital, but if you're drawing this on paper, probably just draw em parallel!)

{% include figure.html alt="The same illustration with lines leading to the vanishing point of the flagpoles." src="embed/animation/perspective/53-flagpole-vp.png" %}

Then, you know, draw the rest of the owl.

{% include figure.html alt="A woman with a grappling pistol perches on a narrow windowsill beside a row of flagpoles. Below, we can see embassy guards." src="embed/animation/perspective/54-flagpole-scene.png" %}

## The underlying method:

All of the tricks above are essentially variants of 'building our way out' by following chains of implications. The core 'building blocks' are, to me anyway,

 - if we know two points, we can connect them wtih a line segment
 - if we know a line segment lies in a plane, we can find its vanishing point by extending it to the vanishing line of the plane
 - if we know a line's vanishing point, we can create a line through any point that's parallel to the first line
 - if we know two vanishing points, we can draw a line through them to create the vanishing line of a plane containing both points
 - if we know two sets of lines belong to the same plane, we can find intersections between them

So yes, the way I'm presenting it, it is very very much like constructing a mathematical proof: you have a set of 'allowed moves', a thing you want to find, and a starting list of 'axioms' (the points and lines you already know).

Using these tricks, you can construct a perspective grid without the aid of a computer. (You should, however, probably use a computer!) Here's a quick gif I made a little while ago to illustrate how you'd do this:

{% include figure.html alt="An animation showing the construction of a perspective grid." src="embed/animation/perspective/grids.gif" %}

So far, however, all of these tricks only handle *translating* lines. If we really want to be able to constract any object we want, we also really need to be able to *rotate* lines in 3D.

To do this, we need the power of the 90-degree circle. Which is the subject of the next article. Hopefully appearing in less than a year!