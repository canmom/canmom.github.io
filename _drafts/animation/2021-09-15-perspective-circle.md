---
title: "Perspective! 5: the ninety degree circle"
layout: article
excerpt: Place vanishing points precisely... with nothing but a protractor. Rotate objects in the THIRD DIMENSION. All with... forgive me... one weird trick.
category: animation
tags:
    - animation notes
    - perspective
date: 2021-09-15 22:22:00 +01:00
---
Back for more, eh? Not satisfied with just dropping vanishing points on your page, somewhere that looks right? Not going to eyeball? Oh, so you want rigour? You want to rotate 3D objects in your mind?

Well, lucky for you... it's not as hard as it sounds!

This article is going to go into detail about a specific perspective construction which I call the "ninety degree circle". It is quite simple to build, and it saves you the trouble of calculating trig functions and copying FOV circles. I was introduced to it by Handprint's series, but I think the elegance of this method gets rather lost in the weeds in their presentation, so this is my attempt.

## The 90° circle construction

The basis for the 90° circle is a fairly simple geometric construction---but not necessarily one that would just occur to you!

Let us return to the perspective setup we discussed back in [article 2]({{site.url}}/animation/perspective-practical). For a quick terminology recap: the perspective setup has a <dfn>centre of projection</dfn> (the location of the imagined eyeball), and a flat surface called the <dfn>canvas</dfn> which we're drawing on, which we imagine to lie in between us and the world. We cast <dfn>visual rays</dfn> through the canvas, creating <dfn>vanishing points</dfn> where they hit it for that particular ray direction. The visual ray that is exactly perpendicular to the canvas is called the <dfn>canvas normal</dfn>, and its vanishing point---usually the centre of our image---is the <dfn>principal point</dfn>.

{% include figure.html src="embed/animation/perspective/75-45-degree-wedge.png" alt="An artist standing in front of a canvas, with a 45 degree cone marked out around the central canvas normal by four visual rays." %}

Now the new bit! The <dfn>90° circle</dfn> is a circle on the canvas, centred on the principal point, whose radius is the distance between our eye and the canvas. For this reason, visual rays that pass through the 90° circle make a 45 degree angle with the canvas normal. So the total angle from one side of the circle to the other is 90°.

So why's this a useful thing to draw? Well, very conveniently, if we have a vanishing line---such as the horizon line---that passes through the principal point, the angles between our visual rays and the canvas normal can be found by drawing a point at the top of the 90° circle, and measuring angles at that point.

This is perhaps easier explained in an animation....

{% include figure.html src="embed/animation/perspective/90-degree-circle-angle-correspondence.gif" alt="Animation showing how angles at the 90° circle correspond to angles at the eye. First, we rotate the visual rays around the horizon line until they lie inside the canvas. Then, we slide a point along the horizon line, which makes the same angle at both the original projection point and its corresponding rotated point." %}

The angle that it makes at the eye is the same as the angle that it makes on the 90° circle.

## So how do we use this thing?

So. That's all well and good in the abstract realm of construction, but what is it actually like to use this tool?

The first step is to decide the <dfn>Field of View</dfn> (FOV) of our drawing. This is the range of angles that are inside the frame; everything else is cropped out. (If you're more used to photography than computer graphics, you may be more familiar with the <dfn>focal length</dfn>---more on that in a moment.)

As we discussed back in the first article, a wide angle lens will result in a lot of perspective 'distortion' if viewed anywhere other than its centre of projection. This can be a desirable artistic effect, but if you want things to look 'normal', you should keep your FOV small.

But what is small? A 'normal' camera uses 35mm film with a 50mm focal length, which means the field of view is about 40° wide. For my own part, this feels quite narrow especially for indoor scenes, so I often default to a wide angle of about 60°, which means roughly a 30mm focal length. Regardless, all that really matters is that you pick an angle. For this example I'm going to go with 60°.

Once we've decided on a field of view, we can work out how big to draw the 90° circle. Let's say we've got an image that's 60° wide. We'll put the principal point dead centre in our image---you can use a cross to find this---and draw a horizontal line through it (which, if the camera is level, is the horizon line). This line represents the field of view of the camera. Each end of the line is 30° away from the centre---half the field of view.

{% include figure.html src="embed/animation/perspective/76-30-degree-fov.png" alt="A frame within a frame, and a cross to identify the principal point within it. The sides are marked as plus and minus 30 degrees." %}

Now we're going to have to measure that angle. (I know, I know, it's art, who said anything about using a protractor? If you're in Krita, you can actually use the vanishing point tool for this. Alternatively most drawing programs let you rotate something in 15 degree increments by holding down a modifier key.)

So, shoot up a line at 30 degrees from the vertical from each end of the centre line. Where these lines meet, you have the top of your 90° circle. We can grab a (virtual) compass and draw the rest of the circle.

{% include figure.html src="embed/animation/perspective/drawing-the-90-degree-circle.gif" alt="animation in which we extend out two 30 degree lines to find the radius of the 90° circle, and then draw the circle." %}

Now the 90° circle exists, our drawing has a definite structure. So we can easily drop in a box in two point perspective by drawing a right angle at the top of the circle...

{% include figure.html src="embed/animation/perspective/77-two-point-with-90-degree-circle.png" alt="An example of how the 90° circle can be used to construct a box, by extending two lines from the apex point at 90 degrees to find vanishing points on the horizon line." %}

...and trust that this box will be in the correct perspective for the field of view we've chosen. But the real power comes in the ability to easily make correct three-point perspective, in rotating things, and in projecting from plan views...

## Three-point perspective with one weird trick!

Three-point perspective is the thing that's often left out of perspective courses, though as we've seen, it's not special: all our perspective tricks so far work just fine. But there is a major hurdle right at the start: having chosen your first two vanishing points, how do you pick the third?

We can think of it this way. If you are working in 'three point' perspective, you are dealing with a plane that is not parallel to the canvas normal. As we've established in the last [couple](./perspective-planes) [articles](./perspective-tricks), a plane has a <dfn>vanishing line</dfn>, consisting of the vanishing points of every line within that plane. This plane has a normal (a direction perpendidcular to the plane).

Now, do you remember this construction?

{% include figure.html src="embed/animation/perspective/34-perpendicular-to-vanishing-line-variant.png" alt="A line perpendicular to the vanishing line of the plane through the principal point to the normal." %}

If you draw a line that...

 - is perpendicular to the vanishing line of the plane
 - passes through the principal point

...then it will hit the vanishing point of the normal. All that remains is to measure angles along this line. And what do you know, we literally just found a technique for measuring view angles on lines that pass through the principal point.

So how do we set up in three point land? We can think of it this way: we need a plane and its normal. These can be constructed together.

First, we draw a line through the principal point representing the direction of the plane's normal. We'll use this line to measure angles. Next, draw a line perpendicular to the first, and extend it out to the 90° circle to create a point to measure angles.



Now, at this angle-measuring point, draw two lines that make a right angle. These give you the vanishing point of the normal, and the place where the vanishing line of the plane is closest to the principal point.

## Inclined planes: a little trickier

So we've seen how to measure angles on the ground plane or a wall parallel to the camera. But all the techniques we saw before worked on all kinds of planes, not just those cases. Is there a way we can generalise our technique?

If you opened the esoteric alchemy box in the planes article, you may remember me saying something about hyperbolas. In plain language, the upshot is that as you rotate your gaze down towards the plane, the vanishing points for given angles spread out along the vanishing line, gradually at first and then more quickly. So how do we work out how far to spread them out?

Essentially, we need to construct an equivalent to the 90° circle for the tilted vanishing line. This is a larger circle, centred on the point where the vanishing line is closest to the principal point. If the 90° circle has 

