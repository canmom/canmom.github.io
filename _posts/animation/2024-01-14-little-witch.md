---
title: How we made 'The Tale of the Little Witch'
layout: article
origin: https://canmom.tumblr.com/post/712492038712590336/when-robots-got-muscles
excerpt: Make a short 3DCG film in a week and make it look goood! It's possible. Here's how.
categories:
 - animation
tags:
 - film projects
 - making-of	
---
Towards the end of last year my vtuber friend Yuri Heart and I made a short film. In a week!

{% include youtube.html id="NsnS8-fGe90" %}

A very intense week.

I love talking about how stuff is made, so here's an article about how we did it.

{% include hiddentoc.md %}

## The basic idea

<cite>The Tale of the Little Witch</cite> is inspired by cutout animation and mechanical theatres.

Mechanical theatres, also known as automata, have been built from the 18th century to the present. They involve various scene elements being moved around on armatures powered by mechanisms such as cams and linkages. When they're run---perhaps operated by a coin---the machine will run through a series of motions to tell a story. Check the box for some examples, old and modern...

<details markdown="1">
<summary>Mechanical theatres</summary>

{% include youtube.html id="drofW-ELc-0" %}

{% include youtube.html id="ucJJ2o6J_Lc" %}

{% include youtube.html id="WcOi81eRGBE" %}

{% include youtube.html id="5EEUGGwR_9U" %}

</details>

Cutout animation is one of the oldest styles of animation, involving moving and replacing paper cutouts in stop motion. It's one of the oldest styles of animation, with notable examples including [<cite>The Adventures of Prince Achmed</cite>](https://en.wikipedia.org/wiki/The_Adventures_of_Prince_Achmed) by Lotte Reiniger, and the famous work of Soviet animators like Yuri Norstein (<cite>Hedgehog in the Fog</cite>, <cite>Tale of Tales</cite>), who even today labours on his forty-year magnum opus <cite>The Overcoat</cite>. In modern times, it's associated with the incredibly stylish duo [Gekidan Inu Curry](https://en.wikipedia.org/wiki/Gekidan_Inu_Curry), whose cutout collage style gave the witches in <cite>Madoka</cite> incredibly unsettling effect.

Our film took inspiration for this, but in Blender. I wanted to generally give the impression that the whole film would be running a mechanical theatre, one made with everyday materials like cardboard, foil and small light bulbs. Some of the motions in the film would be impossible to do with a mechanism (mainly the part where the Little Witch flies around!), so I imagine they were done with stop motion and the supporting armature painted out. But mostly... *mostly* we kept to this idea!

A combination of a cutout style and a 'children's book' style narration is not entirely uncommon in animation, since you can get an appealing result with less effort than, say, traditional animation. The game <cite>NieR Automata</cite> provides some memorable examples over the course of the B playthrough, for example:

{% include youtube.html id="XMkZJVMAhWU" capt="NieR Automata: 'Parenticide' picture book" %}

Given the incredibly tight frame though this was absolutely the way to go. But how to make it stand out? The answer: the power of lighting. Blender has an incredibly powerful path tracing renderer called Cycles, which allows light to bounce naturally around the scene, creating all sorts of beautiful intermixing of colours, soft shadows, bounce lighting etc. In a path tracing renderer, everything reflects everything, resulting in a scene that feels very natural and well-integrated. It is, however, *much* slower than Blender's other rasterisation-based renderer, Eevee. Getting renders that were both fast and clean with Cycles was a whole challenge.

So, the idea took shape: the story would be told in a mechanical theatre using cutouts. To add a little interest to the cutouts, we used a 'line boil' effect, where three very similar drawings are alternated. Behind the characters is a screen showing slides of Japanese text, and 2D animations of magic effects.

Originally this backdrop was going to be paper slides, but I hit on the idea of a projector in the back of the theatre that would shine on the back screen. We did this in a really cool way---we are actually simulating the projector.

The rest unfolded over the week...

## Audio

Since the animation in this film is so tightly coupled to the music and narration, we started with sound.

Yuri wrote the script for the narration really quickly, and composed the music in a matter of hours. It was deeply impressive. Our narrator, [Roubharb](https://www.twitch.tv/roubharb), recorded the narration on one of the first nights, giving a viable backing track that we could start animating to.

Audio isn't my field (yet), so I can't tell you what tricks she pulled to clean and balance the recording or how she went about composing the music. It seems like dark magic to me! The result was amazing though and it does so much to set the vibe of the short.

## Building the stage

The mechanical theatre model is actually incredibly simple: it's just a wedge shape with a box around it. On top of this I applied solidify and bevel modifiers---a non-destructive technique which made it very easy to modify the theatre if I needed to. The only tricky part was setting up the UVs to avoid stretching and make sure the wood grain would always go in the right direction. (There are a lot of grooves cut in the theatre for paper elements to slide in and out, but I did these at the very last minute, once the animation was finalised. So I'll come to that later!)

{% include figure.html src="embed/animation/little-witch/theatre-model.png" alt="An unlit version of the theatre box, showing the model topology." capt="If you're following along at home, note the solidify modifier was applied and superfluous edgeloops removed." %}

To make the stage look really good I needed nice physics-based materials to texture it with. Fortunately, there are a great many libraries of free PBR texture maps out there nowadays. One of the major ones is [Poliigon](https://www.poliigon.com/), and a lot of our materials came from there. Using PBR textures and the Principled shader makes things incredibly easy: you get all the realistic speculars and Fresnel effect just like that.

I used the wood material pretty much as-is, but other materials took some modifications. Let's talk about the projector, because it's definitely the coolest one in the scene!

### The projector

I wanted to have the projector physically be shining through the back of the paper screen. The projector itself consists of a spotlight with an image texture. If you want to adjust the mapping settings for a spotlight, you don't use UV coordinates as with a mesh, but instead use the Geometry node's 'incoming' field, and transform it from world to object space. You can then feed this into a mapping node like a usual texture. In this case, I needed to flip the image horizontally and adjust the aspect ratio.

{% include figure.html src="embed/animation/little-witch/spotlight-mapping.png" alt="An image of the node graph for the spotlight, and the resulting effect." %}

I also remapped the brightness of the video to make the dark slightly brighter than pure black, causing a nice glowing spot in the centre of the projector screen. Due to clipping, the brightness appears to fall off very rapidly at the edge of the bright parts. However, this works pretty well in this case - it's a less-than-perfect projection.

The screen itself is simply a plane with a solidify modifier. Although the solidifier modifier adds very little physical thickness, it's actually tremendously important for the light to pass through *two* faces for proper calculation of the subsurface scattering. This is because, in the raytracing, the incoming light ray is converted into a subsurface scattering ray. It needs to hit another face of the same material to convert back into a regular light ray.

If you increase the thickness of the screen, you can get some very interesting and beautiful effects, with the subsurface scattering spreading out and blurring the light---just as with a real paper screen!

{% include figure.html src="embed/animation/little-witch/thicker-screen.png" alt="A render with a thicker screen, causing the light to spread out and bleed." capt="(I also darkened the whites of the spotlight a bit for this one to make the white less overwhelming.)" %}

However, we kept it nice and thin to keep the text clear and readable.

The subtle gradients across the projector screen actually caused no end of trouble at the encoding stage. But more on that later.

### The content of the projector

At the outset, the projector simply displays the narration translated into Japanese. Later... my lips are sealed. Yuri created this on her side and exported it as a video file I could use as an animated texture. She did an amazing job with the typography and layouts, which I proceded to mangle by passing it through a distorted projector ;p

For the most part, almost all the animation in this project was done in Blender. However, for the 'weave her soul into the very fabric of the universe' part, and a couple of other effects, Yuri made a 2D animation in Clip Studio Paint, with the lines weaving together and morphing into fish. My side of this was super easy, it's just part of the projector video file.

### The other lights

The projector spills light quite nicely into the scene, but everything else needs to be lit from the front. We went for a scheme with four coloured lights at the corners of the stage. These are simple area lights. The lower lights use a warmer orange colour, and the upper lights use a cyan colour. In the control rig---hold on, I'm getting to it!---I set up drivers so the brightness of all these lights could be easily controlled using bones.

In addition to that, there is a spotlight which shines in the centre of the stage. Another driver controls both the size and brightness of this spotlight, giving it the appearance of opening an aperture.

On top of all these lights are the house lights, which are created by an HDRI image from [Poliigon](https://www.poliigon.com/). I turn down the brightness of this HDRI at the beginning as the curtains open, which gives us a glimpse of the normal map on the back screen.

{% include figure.html src="embed/animation/little-witch/backstage-view.png" alt="Render from inside the stage, showing the major lights." capt="This is what the stage looks like from the projector's side, showing the four stage lights and the HDRI in the background (with bokeh)." %}

These four lights, which could all be turned on and off individually, proved a suitable combination for lighting the scene. The four front lights can be turned down all together, or individually, allowing specific areas of the stage to be lit up. And you get a really pretty gradient from top to bottom with the different colours.

The coloured lights aren't directly visible from the front of the stage, but they reflect brightly in the metallic surfaces, primarily the sun and moon. Tuning this to not be overwhelming took some work, but it led to a really cool effect.

### The characters and scenery

The various sprites that Yuri drew in Clip Studio are added using the Images As Planes addon, which comes packaged with Blender. I modified the material to add a small amount of SSS and a subtle normal map, and to create the line boil effect. Each one is simply a quad with an alpha channel mapped to the principled shader's alpha input (*not* transmission).

The line boil on the characters is accomplished by rotating through the three different images cyclically. Unfortunately, the way Blender's image sequence node works makes this a bit harder than it needs to be. Essentially, the image sequence will advance every frame no matter what, there's no way to control this directly. In our case, we wanted a slower line boil effect, every 10 frames (1/3 of a second at the target 30fps, equivalent to 8 frames if animating at the traditional 24fps). Luckily, this can be achieved with some driver magic using the modulo operator. Put the following expression into the driver for the 'offset' field...

```python
-((frame - 1) % 3)+((frame % 30)//10)
```

The first part of this expression cancels out the automatic frame advancement, the second part then sets it to the frame number that *we* want, changing every 10 frames instead of every 1. This is used for the diffuse colour, while the AO, roughness, displacement and normal textures all come from a paper material on Poliigon. Honestly, these maps likely made little difference compared to a regular diffuse material.

The Witch actually has an additional stage which blends between her initial sprites, and the tired version that she assumes during the 'building the machines' part of the story. This is what the node set up ends up looking like...

{% include figure.html src="embed/animation/little-witch/witch-line-boil.png" alt="Screenshot of the nodes for accomplishing the 'line boil' effect on the Witch." %}

Obviously you couldn't have a 'line boil' effect in a mechanical theatre. You totally could in stop motion though. In a sense, our short is CGI pretending to be stop motion pretending to be a mechanical theatre...

### The sun-moon gears

One feature I really liked was the geared device which shows the sun and moon above the stage. I actually planned to have lots more geared mechanisms attached to the motion of various elements that would be faintly visible in the background, but there was not time for this in the end. Still, the sun/moon was p strong on its own!

{% include figure.html src="embed/animation/little-witch/sun-moon-gears.png" alt="The sun/moon gear train system, rendered in brighter light." %}

I mostly did not put a lot of effort into texturing this, since it needed to stay dark to avoid distracting from the rest of the scene. The gear train uses a simple dirty metal texture, and the spars holding the sun and moon a dark wood. The sun and moon themselves are given a kind of gold foil texture---the idea was that the person who made the mechanical theatre simply wrapped gold foil around cardboard shapes. The normal map added a lot of visual interest to the reflections of the bright lights at the top of the theatre.

I modelled the moon first, and then when we came to do the later scene where we wanted to imply time is passing, hit on the idea of the sun being on the other end of the arm. This led to a number of problems, since the sun and moon had a nasty habit of clipping through the walls of the theatre. I had to do some finicky animations to avoid visible clipping. However, it was totally worth it.

The gear train is modelled and animated using the [Precision Gears](https://blendermarket.com/products/precision-gears) addon by Maker Tales. This addon is actually designed for making real gears in a CAD setting, so the shape of the teeth is actually the mathematically correct shape for optimal power transfer. For my purposes though, it also gives you a very convenient way to set up a tree of dependent gears. The backend runs on Geometry Nodes.

With this setup, I could use a driver to connect the first gear in the train to the sun/moon system, allowing the gear train to move realistically as if it is driving the sun and moon. It's the kind of detail that nobody would be able to tell without watching the film very closely, and this gear train with its giant ring gear is honestly kind of complete nonsense from an engineering standpoint, but I think it adds a lot. I imagine that the creator of the mechanical theatre found some old gears in a rubbish dump and put them into this project.

We had some performance issues with this system. At first I thought it was the geometry nodes, but no, geometry nodes is *fast*. Instead I think it turned out to be a problem with the gears having ginormous amounts of vertices---great if you're doing CAD and you need things to be incredibly accurate, not great for animation purposes. Slapping a 'weld' modifier on each gear brought the vertex count down to a much more reasonable level.

When animating the gears (and everything else), I made sure to do a lot of overshoot and settle, as if a mechanism is clicking into place. More on that later.

### The train

The train is built the same way as the other sprites, but it has emission set on its windows so they glow. It's bright enough to trigger the bloom effect, which looks very pretty. It also has a small spotlight at the front.

The train exits through a door that swings up at the edge of the stage. During the credits I have it come back in through that same door and exit through a narrow slot. I didn't want to add an extra door...

### The curtains

The curtains were actually one of the first things I made. They are of course animated with Blender's cloth sim. The question is, how do you animate cloth? The answer is ~~with great difficulty~~ that you use a pinning group and shape keys.

The actual cloth model is nothing more than a grid with a subdivision surface. (It's often a good idea to simulate at a lower resolution and then use subsurf to smooth the result.) I assign the top row of vertices and a couple of vertices in the middle edge to the pin group with max weight, everything else gets weight zero.

A computer cloth sim essentially treats all the edges in a model as springs and all the vertices as weights. If the springs are stretched out, a force will pull the vertices in that direction. So, if you animate the vertices of a pin group, it will stretch out the springs and tug the cloth with it.

The cloth is animated in three stages. Firstly, for the 'open curtain' stage, starting from before the first frame, we animate the pin group along the upper edge of the curtain into a zigzag shape. This is a standard technique for making a curtain.

{% include figure.html src="embed/animation/little-witch/curtain-hang.png" alt="The first shape key, with the top row of vertices bunched into a zigzag pattern." %}

This part takes place before the beginning of the actual film. Unfortunately, starting before frame zero caused problems with Blender's ability to store a point cache between sessions. This meant I'd have to re-simulate the cloth every time I closed and reoopened Blender.

For the actual animation, there are two stages. We start by moving a small cluster of vertices at the inner edge of the curtain outwards, as if there is a hidden string tugging the curtain open. That looks like this:

{% include figure.html src="embed/animation/little-witch/curtain-draw.png" alt="The second shape key, with a small group of vertices pulled almost all the way across the curtain."%}

In another shape key, we squeeze that zigzag shape at the top of the curtain, and move it over slightly...

{% include figure.html src="embed/animation/little-witch/curtain-quarter.png" alt="The third shape key, with the vertices at the top squeezed off to the side." %}

We animate the third shape key with a slight delay compared to the second shape key. With the right timing, this creates a convincing impression that the hidden string is pulling the curtain open.

I called these shape keys 'hang', 'draw' and 'quarter'.

## The house

We animated the short pretty much in order, beginning to end. As we reached the part where the Witch goes into seclusion to make her machines, Yuri suggested the house could be made in 3D. This was an exciting challenge for me, and I set about making the house out of cardboard.

Here's a render of the house out in the open under bright lighting conditions.

{% include figure.html src="embed/animation/little-witch/house-render.png" alt="A render of the witch's house, under bright lighting." %}

I polymodelled this using, once again, the good old solidify and bevel modifiers to go from flat polygons to solid surfaces. I tried to imagine it being made out of actual cardboard and glue. All the elements have tabs that connect them together---this can be more easily seen from underneath...

{% include figure.html src="embed/animation/little-witch/house-render-upside-down.png" alt="A render of the witch's house on its roof, under bright lighting." %}

The cardboard actually only uses one material, but I multiply the base colour with a vertex colour, allowing me to colour different parts of the card. In this case, I only went for bare card and purple card. The sign uses a different material, a wood texture from---you guessed it!---poliigon. I put the base colour through a gamma 0.6 function to lighten the wood, and subtracted out the value of the text's alpha channel. Fans of Yoko Taro's games may recognise the [Celestial Alphabet](https://en.wikipedia.org/wiki/Celestial_Alphabet)---this was actually Yuri's idea, since she knows I'm a huge NieR nerd, bless her. It says 'majokko' (<span lang="jp">魔女っ子</span>).

You might notice the faintly visible strings holding the house as it's lowered onto the stage. I'm really proud of these. The main strings are simple enough, just curves with a circular profile attaching to four corners of the house, and a nearly-transparent material so all you will see is specular reflections. But the really cool part comes in the two lines which attach to the front panel. To explain, let me make them a bit more visible, and show you how it works...

{% include figure.html src="embed/animation/little-witch/house-strings-slack.png" alt="A render of the house with the strings holding the front panel slack, and highlighted in red." capt="At first, the strings are slack. The slack and taut shapes are shape keys on the curve. A driver controls the blending, which is connected to a bone in the control rig." %}

{% include figure.html src="embed/animation/little-witch/house-strings-front-detach.png" alt="Now the front panel tilts forward and the string is more taut." capt="I animate the front panel tilting forwards, and at the same time, make the strings more taut. The strings are attached to empties using a 'copy location' constraint. The empties are parented to points on the front panel. Using this method, the strings will always attach to the right spot and point straight up." %}

{% include figure.html src="embed/animation/little-witch/house-strings-front-swing.png" alt="The front panel lifts up on taut strings, swinging forwards." capt="As the string becomes taut, I animate the front panel lifting up. I make it swing back and forth a bit to give it a sense of weight." %}

The result ended up feeling very natural, without the strings being distracting.

### The light bulbs

The house has several lights attached to it. The main one is the three lightbulbs in the fireplace. There is also a magic lamp on the outside of the house, and the fairy lights in the attic.

The light bulbs caused no end of trouble. I wanted to model real light bulbs with filaments. However, when I did this, the render would become incredibly noisy and take much much longer. Even with the AI denoiser (discussed later), we were getting nowhere near acceptable results.

Eventually, I found the solution was to make the bulbs invisible to shadow rays. It turns out that somehow, when a ray passed through a layer of glass, it would mess with the light transport algorithms in Cycles and, when the light bulbs were the main light source in the scene, the render would take much longer to converge. This is because every light ray had to go [emissive filament] -normal ray-> [into glass] -transmission ray-> [out of glass] -normal ray-> hit something -> camera. Those extra steps at the beginning threw a huge spanner in things.

But, by preventing the light bulbs from casting shadows, light rays could pass straight through them as if the glass isn't there to cast light on the scene. In this case, the render would converge much, much faster than the refracted rays, and the loss in realism at the bulbs is pretty minimal---you only notice it if you're looking for it.

Here are some comparison renders:

{% include figure.html src="embed/animation/little-witch/1024-samples-with-glass.png" alt="A house render lit mainly by the light bulbs with only 1024 max samples." capt="A render with the same 1024 samples and higher noise threshold as we used in the final film, but no AI denoising, and glass shadows enabled. The light has barely even begun to scatter through the scene at this point." %}

{% include figure.html src="embed/animation/little-witch/65536-samples-with-glass-threshold-0-005.png" alt="The same render with a lot more samples." capt="A comparison render with 65536 max samples per pixel, and a much lower noise threshold. This is close to a 'ground truth' accurate render with the light passing through the glass before it gets further into the scene." %}

{% include figure.html src="embed/animation/little-witch/1024-samples.png" alt="The same render without glass shadows." capt="With shadows disabled on the glass, the scene is generally brighter, and it converges much much faster, giving a usable render even at 1024 samples. However, we've lost the complex refractions in the light bulbs." %}

If I'd been very clever, I could have combined a render of just the light bulbs and full refractions over the last of those renders to get a kind of 'best of both worlds' approach. But that would be too much work.

You might notice the last image is still pretty noisy! More on denoising in the rendering section.

### The fairy lights

We talked about possible things to go in the attic, and eventually settled on the idea of having fairy lights, plus the battery that's powering the whole house. A string of LEDs on a wire smells just like 'instancing objects along a curve' to me.

Back in the old days of Blender, you could instance an object along a curve by animating it to follow the curve, then using the 'dupliframes' button. That's not a thing in modern Blender---nowadays we have a much more flexible and powerful system called Geometry Nodes.

{% include figure.html src="embed/animation/little-witch/house-fairy-lights.png" alt="Render of the hidden side of the house in bright light." capt="Here, I've turned up the brightness of the fairy lights so you can see into the attic." %}

Geometry Nodes is essentially a graphical system for functional programming. We start with a curve object, convert it to a series of points along the curve, and then instance the LED model at each point, rotated to follow the curve.

{% include figure.html src="embed/animation/little-witch/house-fairy-lights-geometry-nodes.png" alt="Screenshot of the geometry nodes setup for the fairy lights." %}

I could rotate individual fairy lights by selecting points along the curve and then hitting `Ctrl-T` to tilt them, i.e. rotate around the direction of the curve. Creating an aesthetic arrangement of fairy lights took quite a bit of fine-tuning. What made it fiddly is that I was rotating *control points*, not *individual instances*, and these didn't necessary match up 1:1. If I were to make this effect again, I might try to come up with a method that gives me better control on a per-fairy-light level.

### The lantern over the door

The lantern was simply modelled using a mesh with the 'wireframe' modifier to create a triangular-profile frame. It doesn't look pretty up close, but it's small and in the dark, and that hides a lot!

The little magic sparkle in the lantern is a looping animation drawn by Yuri. I animated it using the same method as the line boil effect, and set it to be emissive. The size of the spark can be animated using the control rig, so we could make it light up when the Witch enters her house, and extinguish when she leaves.

## The big rig

Initially, I planned to simply animate each element individually on the timeline. However, an issue soon emerged: Blender assigns each object its own animation data in something called an 'action'. It would be fiddly to have to keep jumping between actions in order to synchronise effects, and even more problematic if I wanted to move a whole group of animations at once. As it turned out there was really only one point where I had to move a whole group of animations later.

The solution I came up with was to control the entire scene from a single armature. This armature would have bones for every scene element, it would have bones to turn the lights up and down, it would have bones to move the spotlight. Nearly everything would have a bone. This is a very normal thing to say if you're a 3D artist and sounds absolutely deranged if you're not.

{% include figure.html src="embed/animation/little-witch/big-rig.png" alt="The rig for the project, with all the bones visible and labelled." %}

With this approach, I could split everything up into strips on the Non Linear Animation editor, and move them around as I pleased. The NLA editor is something like a nonlinear video editor, but instead of video clips on your timeline, you have animations. Ours looked like this...

{% include figure.html src="embed/animation/little-witch/nla-editor.png" alt="The NLA editor in Blender, showing various strips." %}

This was probably the biggest mistake I made in the whole project!

The reason is that nonlinear animation strips interact in unexpected ways forwards and backwards in the timeline. If a channel is keyed in a given NLA strip, so for example if there is animation data for a particular bone, it will by default carry on in that state until it is overriden by a later strip, or overriden by a strip higher on the stack. It can also do this *backwards* if it is in 'hold' mode rather than 'hold forward', and I did not realise at first that I had strips in 'hold' mode.

Cue all sorts of headaches where I'd add a bone and start animating it later in the timeline only to find that it had screwed up my animation earlier on, or that I'd need to go back and add keyframes in every earlier strip.

And that's not to mention the difficulties of having two different animations split between two overlapping strips. You gotta remember which channel lives in which strip. Switch if necessary. Oh, remember, when you're editing a strip it overrides everything else, so...

Suffice to say that Yuri became very used to the phrase 'nonlinear animation bullshit' by the end of the project.

Now I understand how it works, I don't hate the NLA editor, but for my use case, it probably would have been wiser to have skipped the big scene control rig and just animated everything directly on the same timeline.

Nevertheless, having chosen this path, I set about animating...

{% include figure.html src="embed/animation/little-witch/animation-ui.png" alt="Screenshot of Blender being used to animate a shot." capt="This is what I was looking at for most of the project." %}

## It's time for... animation!

Cutout animation in this style is very limited. You can only move the sprites around. A lot of stuff like squash and stretch and secondary motion and solid drawing and all that jazz is just not relevant. *But*. Some of it really is.

Just about everything that moves in this animation has a bit of overshoot and settle, usually a few rounds of it. The idea is that it should feel like a mechanism clicking into place. This does a *lot* to add life to the paper cutout animation. This is very easy to do. You move and/or rotate it past the target point and keyframe it. Then you move or rotate it back slightly a few frames later and keyframe it again. If it's too much, tweak the keyframes.

Although that was often enough, sometimes it wasn't and you had to get into the IPO curves. IPO is short for 'interpolation', and it defines how objects move in between keyframes. You can choose from a variety of easing functions or create your own curve with Bézier handles.

The 'motion paths' tool can be enabled inside an armature to get a kind of onion-skin like effect for bones. This is *very* useful as a way to preview your animation curves and check spacing without having to play back the whole animation. You could also consider the [mesh onion skins](https://github.com/tingjoybits/Mesh_Onion_Skins) addon. I didn't use it in this project, but it's been useful in others!

{% include figure.html src="embed/animation/little-witch/motion-paths.png" alt="A screenshot showing the motion path for the flying-about scene." %}

In general, it was often better to use automatic easing with few keyframes than to try to set the handles myself. It's fast, and also often led to more natural result. However, if you take this approach, it's very important to know when to use 'automatic' and when to use 'automatic clamped'---one option can overshoot in certain ways, one won't. For example, in the bit where the witch flies up and around, because she makes some abrupt turns and I needed to make sure she wouldn't disappear behind the scenery, I mostly used 'automatic clamped' to keep her in the right zone.

In general, making the picture-book elements feel good depended on moving to hit the strong beats of the song, and overlapping multiple motions in a ripple-like effect.

One of the most interesting moments from an animation perspective is the point where the Witch constructs her four friends. While everything else in the animation was supposed to feel a little organic, this part needed to be *very* mechanical. The machines had to rise up in sync to the same beat, and they would rock back and forth in sync as well, feeling like a conveyor belt. There is very little easing in this part. This was Yuri's idea, and it worked *great*.

(do you recognise these friends? if not, why not go and watch a few of Yuri's VODs~)

### Eevee

Blender has two render engines, Cycles and Eevee. Eevee is a real-time rasterisation-based engine with a similar PBR model to Cycles, so while it doesn't support certain features like subsurface scattering, it can be pretty good for getting a preview of how things look in near-real time, without waiting for a Cycles render.

*However*, without SSS, there's no projector shining through the back. The solution I came up with was a textured plane... but we wouldn't want that to get in the way in Cycles. How to solve this? You can disable all its ray visibility settings. These settings are ignored by Eevee, so we had an object that only Eevee could see, not Cycles.

{% include figure.html src="embed/animation/little-witch/cycles.png" alt="A render of a shot in Cycles, as in the final film." capt="Here's a shot in Cycles." %}

{% include figure.html src="embed/animation/little-witch/eevee.png" alt="A render in Eevee, with many missing light sources and inferior shading." capt="Here's the same shot in Eevee. Doesn't look as good somehow, does it? But it rendered near instantly." %}

### The curse

The curse symbol that appears over the Witch's heart beats in time with the music. Actually lining this up was a bit fiddly because the music does some pretty creative things with tempo and my musical knowledge is pretty limited. I calculated roughly the right places to put each heartbeat, and then moved them around a bit to line up with noticeable musical ideas. I'm not sure I did it exactly right but it works well enough.

Every time the heart beats it shrinks down for one frame of anticipation before popping big and settling back.

The first heartbeat is special, because that's the one with the particle effect. It comes in on a very impactful beat of the music, and the particles bounce around all over the stage and change colour. Setting up the sim was pretty easy---they're all sprayed out from an icosphere. The tricky part was getting the elongated spark look. This could have been done with motion blur, which would be the most accurate way to do it, but I didn't want to use motion blur elsewhere in the animation.

Instead, each particle instances a tiny little needle-shaped object that is aligned to the direction of motion. We simulate rotation, so these particles roughly aline to the direction of motion. With so many particles flying around, it works reasonably well.

The particle shader is very simple. It just takes the particle's age divided by its lifetime and uses this to interpolate from the bright magenta colour of magic down to a cyan colour. The emission strength is animated in the same way. The stage is set to act as a collider so it will bounce around for a bit.	

It's not a super complicated particle effect, much more advanced stuff is possible, but it got the job done.

### Truck-kun

So at the end of the animation, the witch is run down by truck-kun. (Look close at the hiragana.)

The truck zips across the screen very quickly without any easing at all. For just one frame prior to the impact we dim all the lights to near zero, creating an impact frame; then we turn them *all* on to maximum brightness, and gradually dim it. The curse, which represents the witch's life, gradually shrinks away. There's another brief flash at the very end as the witch is consumed by the curse.

In terms of effort to animation time, this part of the animation was by far the most favourable ratio---and I can't deny, we were running *very* low on time when we got to that part. But I like the result. The stillness provides contrast to the very busy animations earlier, and gives the music and narration space to breathe.

### Credits

After that, we roll credits on the projector! Yuri drew some great character sketches of me and Roub. For the final version of the animation, I added a couple of extra animations to the credits to give it life---Yuri steps in and takes a bow, and the train comes back in.

### The grooves in the floor and walls

One simple thing that does a lot to sell this as a physical artefact is all the grooves that have been cut in the floor and walls. Viewed from above, they look like this:

{% include figure.html src="embed/animation/little-witch/grooves.png" alt="A screenshot showing the layout of the grooves on the floor of the theatre." %}

The tricky part about cutting these was keeping the UVs clean. I absolutely could not *move* vertices, since that would result in UV stretching. Instead, I used the Loop Cut and Knife tools to split edges, creating a bunch of extra topology, then deleted faces wherever wood would need to be removed to accomodate some character or scenery.

Of course, this had to come right at the end, after all the animation had been finalised. I tweaked the animation a bit to make things use the same grooves as much as possible, then got cutting.

I imagine the person who made this mechanical theatre sitting there with a router cutting out lines with a great deal of satisfaction.

## Compositing

The compositing effects were pretty minimal in this case. I used a Glare node set to 'Fog Glow' to apply a bloom effect. I adjusted the threshold and size until it looked good (which for me was 0.2 threshold, size 8, high). This helped the various bright lights and magic effects in our scene pop.

For tonemapping, I used the Filmic view transform. Blender has now moved away from Filmic to something a bit closer to ACES, where bright saturated colours move towards white instead of staying super saturated, closer to how real cameras and eyes work. However, Filmic was actually exactly what we wanted, since we wanted the magic effects to be very bright and saturated.

One thing that really threw a wrench in things was that I was using a wide gamut monitor which I had not calibrated (cue screams from anyone who knows what that means). Luckily I caught this mistake and calibrated my monitor before the final release---see [canmom's notes on fixing the colours]() for the ins and outs of that saga. The main consequence was that, because the gamma on my monitor was too bright, I had effectively made the film too dark. It also turned out that rec.709 would give a warmer shade of red on the curtains than I'd originally thought, but I can live with that.

## Rendering

On my computer---which is a pretty beastly one, with a 4070Ti---GPU compute renders with CUDA took generally in the realm of 25-50 seconds, depending on which part of the animation.

To get it down this low and have a usable render, we needed to use OpenImageDenoise. The reason is that a path-tracing renderer like Cycles converges only gradually on the final 'correct' image by shooting out light rays at random from the camera and following them backwards until they reach a light source. Although there are many techniques to speed this up, it still means that two adjacent pixels might end up looking quite different after the first few rays, depending on whether those rays happen to go one way or another. Over time, the renderer shoots out more and more rays and explores more of the scene, and the average of all those rays gradually gets closer and closer to the *true* average you'd get with real light. But, unless you're prepared to wait forever for that asymptotic convergence, you will probably still have some noise in your render.

Blender's got built into it a tool called [OpenImageDenoise](https://www.openimagedenoise.org/), which removes noise from the render using a neural network trained on noisy and clean renders. OpenImageDenoise is a smart denoiser which takes the scene's albedo and normals into account, to try to preserve these high frequency details. However, it's not perfect. A render that's *too* noisy will come out weirdly blotchy and generally pretty ugly. For example...

{% include figure.html src="embed/animation/little-witch/1024-glass-shadows-denoised.png" alt="An example of the denoiser being used on a noisy image." capt="With glass casting shadows, the noisy image generated by even 1024 samples results in a splotchy image as the denoiser tries to make sense of a useless input." %}

So, when I was tuning the render samples, I needed to give enough time to the *actual* rendering give OpenImageDenoise something to work with. Luckily, once I'd figured out the glass thing, everything was looking decent enough.

Even at 30 seconds per render, rendering all 5970 frames in the animation was not a small task. Assuming 30 seconds per frame, rendering the full animation would have taken two full days on my computer, during which time the GPU would be running flat-out and I would not be able to use the computer for much else. As time ticked closer and closer to the debut, we realised we wouldn't have time to do it that way, especially if we caught any mistakes that would require retakes after rendering.

Luckily there was another option: a render farm!

### Using a render farm

I have never used a render farm before, so it was very exciting. After searching about a bit, I settled on [GarageFarm](https://garagefarm.net/). I contacted them to check whether the various drivers in my project would be able to run on the render farm computers and they got back to me incredibly quickly. So kudos to those guys.

A render farm is basically a company with a lot of powerful computers who sell time on those computers. The work of rendering the animation is split up into parallel jobs which are distributed in parallel. Rendering a movie is what they call an '[embarassingly parallel](https://en.wikipedia.org/wiki/Embarrassingly_parallel)' task, which means there are no bottlenecks, it just straight up gets faster the more computers you throw at it. In the end, I'm pretty sure it took less than two hours for us to get the whole render done, even on the lowest priority tier.

GarageFarm gives you a certain number of free credits when you sign up, and after that you pay for it. They do their best to estimate how many credits it will take, but in my case because the easier frames were at the beginning of the animation, this turned out to be a bit of an underestimate. Nevertheless, it was totally worth it to get the render done on time.

I rendered all frames in the OpenEXR format, which is a 'scene-referred floating point' representation of colour - that means no tonemapping or gamma correction, it's just the raw values that come out of Cycles, which makes it great for doing further processing later. I did the encode on my own computer. I used Blender's Video Sequence Editor to compose the frames, since I knew it would know exactly how to handle OpenEXR files produced in Blender.

Using OpenEXR is *highly highly recommended*. It will give you by far the most freedom to adjust the colours, apply additional compositing effects, fix issues, and generally do all the things you might want to do without fear of introducing colour banding and other issues like that. The only drawback is that OpenEXR files tend to be pretty huge. Although they're compressed using e.g. DEFLATE, it doesn't go very far when the raw data is 96-bit-per-pixel floating point data. So make sure you've got a good few gigabytes to spare.

After a few test runs with small samples of the frames which confirmed everything looked pretty good, I pressed the button. I felt like a wizard commanding an army of ghosts to go forth and do my bidding.

## Encoding

Once we had our frames, the next step was to encode them to a video.

Initially, I did the encode in Blender's built-in ffmpeg wrapper. However, this is quite limited. Notably, it only works in 8-bit colour, so if you want to encode a 10-bit video, you're out of luck. So later I would switch to using [Hybrid](https://www.selur.de/), an impressively versatile GUI wrapper over a variety of different encoding tools. More on that in a bit.

### Patches, so many patches

However, once we got the frames back from the render farm, we started spotting issues. Places with clipping, that kind of thing. Luckily, I hit on a very convenient way to fix this quickly: I could render out *part* of the frame, creating a patch that would be applied over the original render in the Video Sequencer (Blender's built-in nonlinear video editor). This can be toggled by ticking the 'render region' box in the Output tab in Blender, right under where you set the resolution. Once you tick it, you get a box you can resize when you're in the camera view to designate the region to render.

We found a few issues at first, and then after the debut, rather a lot more issues. Sometimes I would, for example, find an issue with the curtains---and that would mean I'd need to re-render the curtains for the entire animation. Or we'd spot something clipping through a wall, so I'd need to cut a new slot in the wall, and re-render the area around the slot in every frame. Sometimes we'd only have to modify a few frames to fix a specific animation. Here's what the editor looked like at the end of it all...

{% include figure.html src="embed/animation/little-witch/sequencer.png" alt="The project in the video sequencer, with an unholy pile of video clips." %}

Definitely something of a Frankenstein's monster at that point. It got even worse when I resorted to fixing certain issues by trying to splice encoded video at keyframes. (I abandoned that approach later when it became necessary to encode the video differently.) By the time we finished, I was on 'final encode candidate 18', although that is in truth an undercount because I didn't always increment the number.

I discovered various pitfalls of using these kinds of patches. In theory, if nothing is being reflected, rendering a region should line up pixel-perfectly with the stuff around it... and generally speaking that's true, *except* for the fact we were using a bloom effect in the compositor and I had unwisely decided to apply that at render time instead of over the top of the sequencer footage.

This meant that if there were pixels in or near enough to the patch to cause bloom, I'd need to make sure the bloom region was big enough to include those pixels. Luckily, pixels bright enough to cause bloom were rare enough that it was usually possible to expand the patch a small amount to address this issue.

### The colour wars

If you look at my tag [canmom vs video encoding](https://canmom.tumblr.com/tagged/canmom%20vs%20video%20encoding/chrono), you can witness my woes as I tried to figure out how to get something halfway decent out of Youtube.

Basically, the issue is this. Modern video encoders such as H264, VP9 and even AV1 are based on something called 'macroblocks'. The video is split into small chunks, and the encoder applies a number of tricks to have to save as little information about each chunk as possible. Your video has something called a 'birate', which is how many bits of data it uses per second. The lower the bitrate, the more information the encoder must discard.

Online video on Youtube is generally speaking quite heavily compressed. Certain types of scenes compress better than others. A well-lit scene which moves in generally consistent ways, like a pan, will often compress well. A darkly lit scene with a lot of subtle gradients, or lots of small particles such as snowflakes or confetti moving in different directions, is likely to have issues.

Guess which one we're dealing with here.

That projector screen proved to be my downfall. If we uploaded the original 1080p video to youtube, the video would be beset by big, chunky macroblocks. Silhouettes would be eaten away by compression artefacts. Lots of things would look blurry.

Youtube's encoding is unavoidable, but there are some tricks we could use. Mainly, Youtube is much more generous to 1440p and 4K videos. It gives them higher bitrates and uses the more efficient VP9 codec instead of H264. So, if video quality is a serious concern, you may have to do something evil. You may have to upload a 1080p video... upscaled to 4k.

They would shoot you for that on nyaa.

To make a very long story short, here's the eventual recipe I came up with.

- make sure your monitor has calibrated gamma. Choose a 'look' preset and gamma adjustment in Blender that you like.
- using the Blender sequencer reencode the exr files to 16-bit TIF or PNG files. This allows you to continue to use high bit depth colour further down the chain.
    - Blender will *not* apply dithering to 16-bit colour images. If you view it in a program that does not apply dithering but instead truncates down to 8 bits, you will see colour banding.
- in Hybrid, import your TIF/PNG sequence as an image sequence. set your audio to 'custom'.
    - set the video encoder to x265 and the container to MP4.
    - we want to do two encodes: a 10-bit encode and an 8-bit encode. The 10-bit encode is the definitive version, the 8-bit encode is for youtube. So toggle between these on the x265 tab as needed.
    - in the Crop/Resize tab, increase your resolution to 3840\*2160 (4K resolution). Set the upscale mode to Lanczos. This is a horrible hack to force Youtube to give a higher bitrate. (if you're feeling fancy, use one of the Vapoursynth upscalers.)
    - put the bitrate mode to specific filesize/bitrate (2-pass) and set the bitrate to something horrendous like 15Mbps. You probably won't actually use that much with VBR. But you want the most near-lossless file you can before you feed it into the Youtube mangler.
    - HDR is a whole can of worms I don't intend to go into here. It probably won't make your video look less bitstarved though.

All being well, you should end up with a hefty but manageable video file with no visible encoding issues. (Ours weighed in at about 363MB at 10bit, and only a few MB less at 8bit, for a few minutes of video.) Now, watch your video. Sigh wistfully at the beautifully smooth gradients, nicely dithered with no visible banding. Weep with joy, for there is nary a macroblock to be seen.

You will not see such perfection again. Not where you're going.

Upload your video to youtube. Watch it in 1080p. Sob. Watch it in 4K. Sob a bit less. It is probably OK-ish at 4K. Look resentfully at the channels that are big enough to unlock AV1 encodes. One day that will be you.

Now you just need subtitles.

## Subtitles

Youtube's internal SRV3 subtitle format is not officially documented anywhere. But luckily someone has broken it down [unofficially](https://jacobstar.medium.com/the-first-complete-guide-to-youtube-captions-f886e06f7d9d). It's an XML-based format, loosely based on the TTML standard. It supports a lot of nice features such as coloured text, positioning and fonts. And with some creativity, you can even recreate effects like fades.

I don't recommend writing it directly, though. Instead, the authoring workflow I ended up using goes like this.

 - time your subs in [Aegisub](https://aegisub.org/). This is hands down the best free subtitling program out there, widely used by anime fansubbers, and it gives you lots of nice features like showing you the waveform to time your subs exactly down to the millisecond if you so desire. Only problem: it generates the Advanced Substation Alpha (.ass) format. This is a pretty powerful format, but it's not supported by Youtube. So...
 - use [this Python script](https://github.com/arcusmaximus/YTSubConverter) to generate a YTT file from the ASS file. It's decent enough but if you use advanced features like certain types of karaoke sub, it can break, or just look different from how the ASS file renders. so, you might need to...
 - crack open that YTT file in a text editor. with some judicious find and replaces, you can clean split the lines into something a bit more readable. make any edits you need to.
 - on Youtube, upload the subtitle file. *do not edit it in the web-based editor* or it will strip all the formatting (thanks, Youtube!).
 - open your video page and refresh it to see the subtitle.

## All in all

If you want to make a short film in a week, I hope this helps! If you want to make a short film in *longer* than a week, you're more sensible than me. I also hope this helps!

This project was so much fun to work on, I can't wait to do more. Just one of those times when you and the other person get each other fired off, bouncing ideas back and forth and feverishly making a thing. The cutout style proved perfect: complex enough to provide something to get our teeth into, but restricted enough to get it done in the time.

What's next after the Tale of the Little Witch? Why not go and [watch a few of Yuri's streams](https://www.twitch.tv/yuriheart), and you'll be the first to know ;)

<details markdown="1">
<summary>Resources and tools we used</summary>

- [Blender](https://www.blender.org/) - 3d modelling, shading, rigging, animation, rendering, compositing and editing
    - [Precision Gears](https://blendermarket.com/products/precision-gears) - modelling and animating gears \[requires money but cheap\]
    - [Poliigon](https://www.poliigon.com/) - PBR textures and HDRI
- [Ableton Live](https://www.ableton.com/en/live/) - music composition \[requires money\]
- [Clip Studio Paint](https://www.clipstudio.net/en/) - 2D drawing and animation \[requires money - [Krita](https://krita.org/en/) is a great free, open source alternative!\]
- [Hybrid](https://www.selur.de/) - video encoding
- [GarageFarm](https://garagefarm.net/) - rendering \[requires money\]
- [Aegisub](https://aegisub.org/) - subtitling
- [YTSubConverter](https://github.com/arcusmaximus/YTSubConverter) - converting subtitles for Youtube

</details>