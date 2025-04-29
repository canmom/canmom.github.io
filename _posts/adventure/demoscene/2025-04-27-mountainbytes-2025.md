---
title: MountainBytes 2025
excerpt: What it was like going to my very first demoparty...
categories:
 - adventure
 - demoscene
tags:
 - demoscene
layout: article
date: 2025-04-27 00:02:00
---
After two years in the game industry, with a little more income than I'd had most my life and a burning sense of wanting more artistic fulfilment from my computer shape making, I ran [an Animation Night on the demoscene](/films/animation-night/196-demoscene). Which prompted the long overdue thought... why don't I *actually go to a demoparty*?

As it happened, one was coming up in Switzerland, not far from [the company I work for](https://www.holonautic.com/), allowing me to kill two birds with one stone: finally visit the company 'offices' and then find out what the scene was really like. Better yet, [MountainBytes](https://www.mountainbytes.ch/) had a whole workshop for first-time sceners to learn the ropes over the course of the weekend. I booked my plane to Zürich and got ready to learn...

The venue was a large town hall type of building called the Lorzensaal in the pretty town of Cham*, not so far away from historic Lucerne. After a beautiful day exploring Lucerne in the snow and lending a bit of help getting ready for our game release, I scooted back and walked down to the Lorzensaal, unsure exactly what I would find.

<aside markdown="1">
\*pronounced with the phoneme [ach-laut](https://en.wiktionary.org/wiki/ach-laut), aka /x/, the voiceless velar fricative
</aside>

What I found was, well, a really welcoming group of sweet, and (to varying degrees) autistic-as-hell nerds. *Exactly my kind of people.* A large number of visitors to MountainBytes were newcomers, drawn perhaps by the workshop; a solid proportion of us were trans, because it's that sorta scene these days.

I started to learn how things work...

## How a demoparty works

Like this: a large hall is filled with long tables, covered with power strips. At the front of the room is a big projector screen and a powerful sound system; at the back of the room, the organisers (or <dfn>orgas</dfn> in scene parlance) in the beam/video team sit on a raised platform with a bunch of computers all wired up to the projector.

{% include figure.html src="embed/demoscene/mountainbytes.webp" alt="Photo of the Lorzensaal, view of the projector from the back row." %}

Attendees filter in and find a spot at the tables to plug in their laptop, Amiga, or whatever else they might have brought with them to work on demos. (Most demos are not actually made during the party, but it's quite common for the finishing touches to be made there, or special on-the-day compos to be revealed at the party itself.) In this way, it's quite like a hacker event with a focus on graphics: people bring their interesting old computers and wander around the hall chatting with friends and showing off their stuff.

To set the atmosphere, music, often from the scene, is played over the party using the sound system, along with a reel of slides, mostly promoting other demoparties or other scene-related stuff, rotating on the projector... well, that is, outside of the compos.

<dfn>Compos</dfn>? Right, so, this is the main feature of a demoparty: the competitions in which people submit their creations (demos, music, videos, etc.) to be played to the whole hall---and these days, typically also a livestream for remote viewers. Each one is scored by attendees with a star-rating system; then, at the end of the compo, the rankings are released and everything submitted is uploaded to demoscene websites like [scene.org](https://files.scene.org/) and catalogued on databases like [demozoo](https://demozoo.org/) and [pouet](https://www.pouet.net/). (The scene places a huge emphasis on archival.)

The competitions are not taken too seriously---a lot of people will consciously submit relatively minimal 'compofiller' entries in order to fill out the competition and provide contrast with the high-effort entries, which also provides an on-ramp for new sceners. The main reward for winning a compo is really just satisfaction and prestige; larger parties may give out a small sum of money, but once you subtract the ticket price of attending the party and travelling to the venue, and the fact that winning entries are usually group efforts, it is unlikely to actually be profitable.

Along with the compos, demoparties tend to feature performances: music sets and livecoding shows are perhaps the main draws. Additionally, side rooms will host seminars on various scene-relevant topics, like sizecoding. All in all it comes together in a weekend long explosion of creative energy, and for many sceners, a chance to meet dear friends and hang out in a very special social context.

## The two (or three) schools

I arrived at MountainBytes, got my little box of Swiss chocolate with my vote key, and attended the introductory talk by moovie and psykon on the demo workshop.

{% include figure.html src="embed/demoscene/mountainbytes-selfie.webp" alt="Selfie from MountainBytes." capt="Your author." %}

Although there were many experienced hands around, there is quite a diversity of different skills. Broadly speaking, demos are divided into two broad types. There are old-school demos, targeting specific old computers: the Commodore 64, Amiga, BBC Micro, Game Boy... These typically feature 8- or 16-bit registers, limited colour palettes, dedicated hardware for drawing sprites, and the code must run as the electron gun of a (nowadays, notional) cathode ray tube display runs across the screen. Techniques involve precise timing around HBLANK and VBLANK, and deep knowledge of the special hardware qualities of the machine. Many such demos are written directly in assembly rather than a compiled language like C.

Then, there are new-school demos, which run on PCs with graphics cards and operating systems like Windows or Linux---or even browsers supporting APIs like WebGL or WebGPU. Rather than the features of the hardware, you are exploiting of the features of the operating system or browser (often in perverse ways, such as using a PNG decoder to handle decompression), and pulling on the ever-evolving field of computer graphics. The main creative constraint adopted in the new school is <dfn>sizecoding</dfn>: for most compos, the entire executable (or web page) must fit into an extremely limited size such as 4, 8, or 64kb. The only way it can work is heavy use of procedural techniques and advanced compression, and a whole lot of ingenuity.

So, someone might be an expert at making old-school demos in assembly for the Commodore 64 or Amiga, and have little knowledge of the 'new school'. Or vice versa!

## My MountainBytes project

{% include youtube.html id="zbihfgj5P78" capt="<a href='https://www.pouet.net/prod.php?which=103659'>pouet</a>, <a href='https://www.pouet.net/prod.php?which=103659'>Demozoo</a>, <a href='https://github.com/canmom/shape-of-thought'>source</a>" %}

For my first demo, I wanted to explore a few things: the Bevy game engine, the use of compute buffers to pass information from the CPU to the GPU, and express certain themes around neuroscience inspired by a then-recent LSD trip. The main idea was to create an oscillating shape using spherical harmonics.

As it happened, one of the other first-time sceners, Ronja, had brought MRI scan data for her girlfriend Monchi's brain! I helped her clean it up in Blender, and then, with her approval, used the brain model in my demo.

Although the idea I had wasn't *too* complicated, the compressed time and the unfamilarity of the engine meant I had to pack a ton of learning into one weekend, and I ended up staying up very late on Saturday night in the hopes of getting it finished. (A rather alarming moment came when I got back to my hotel and realised I'd left the keycard at the demoparty...)

Bevy is an elegantly designed but very young engine, and so I had to get to grips with the toolchain, the general framework of a project, and the APIs for invoking and talking to shaders... largely by parsing various examples. I also needed to find an efficient way to calculate spherical harmonics in a vertex shader. And of course the shader compiler had to throw some really strange bugs my way. I will save the technical details for another article, but in the end, I had to scale back my ambitions a lot... but I still pulled off the basic idea: an animated spherical harmonic glyph oscillating in complicated ways above a brain.

## The people

As much as seeing cool shapes---I got to meet people! Some really goddamn lovely people in fact. I won't name too many names in this article (this is not a scroller demo and I'm a *little* wary about privacy), but everyone I spoke too was really happy to be approached and talk about what they're working on, and full of enthusiasm for the demos we were watching. Many turned out to work in the rail industry for some reason---turns out if you work for a train company you get discounted travel across Europe.

Of course, the majority of sceners work somewhere in tech---though less overlap with the game industry than I would have guessed given the focus on realtime graphics! Still, it tends to be pretty damn technical and often low-level stuff: I've met people who work for ARM or nVidia, who fuzz the Linux kernel for security vulns... the demoscene is, naturally, a place for people who really vibe with computers on a deep level.

One of my most treasured memories of MountainBytes was the hours after the party where a lot of the new, mostly-trans people gathered for hugs, messing around with cameras (from modern DSLRs to weird floppy disc devices and a Game Boy Camera) and generally became fast friends. Rarely have I hit it off with people so fast! We travelled back to Zürich, and I wished for more time to spend cuddling and talking about esoteric features of server architecture. When I got home one of my new friends was showing off a demo for a graphing calculator.

## The compos of MountainBytes

So what did all these fascinating tech nerds make? You can go check out everything [right here](https://demozoo.org/parties/4954/).

The first day focused on announcing the nominees for the Meteoriks awards, the annual award for the scene's favourite projects over the last year. (The actual winners would be announced at Revision later). After blitzing through the announcements, the nominees were played on the projector. For us newcomers, it was an excellent cross-section of the demoscene to hype us up.

I'll save discussion of the Meteoriks for another article, since this one's already quite long. Let's instead get into the projects of MountainBytes itself.

### Graphics

{% include figure.html src="embed/demoscene/mountainbytes-2025-livecoding.webp" alt="Photo of Lucid and Kahtrin Hunze sitting with laptops and mixers in front of a gigantic splash of colourful shapes projected over and behind them." capt="A bad photo of a frame from the set. It looked a lot better in motion!" %}

As a relatively small demoparty, MountainBytes is not where groups would tend to drop their big projects---but there were a few particular highlights. One of the more interesting presentations was the combination of the 3D modelling compo with the livecoding music/realtime visual performance of Lucid along with [Kathrin Hunze](https://demozoo.org/parties/4954/). Lucid worked on the sound on one computer, which was piped into Hunze's computer; her chaotic visuals which projected the screen over bits of moving geometry also included all the 3D models in the compo.

Which unfortunately made it a little tricky to realise that 1. it was a compo and 2. which things we were supposed to be judging... nevertheless, it was *cool*, and that is the important thing. The actual models ranged from beginner projects to a fairly solid robot character which run the competition. Special shoutout should go to RaccoonViolet's model of the MountainBytes mascot, Cowee, a splayed out cow which I ended up taking home in plush form.

The graphics compo received a mix of pixel entries and 3DCG, the winner being Suule's [old-school cyberpunk robot](https://demozoo.org/graphics/367429/) with a lot of nice hand-dithering.

### Music

The music compo was really my first proper introduction to tracker music. Trackers are stripped-down sequencers: programs which allow you to arrange samples and synth notes on a quantised grid, allowing them to be played back on compatible software---notably, on old-school hardware. Originating as software for the Amiga, trackers are popular in the demoscene both for the history and because they offer a highly compressible form of music writing. In the compo scrolling, spreadsheet-like view of the track would be shown as the music played, along with a list of samples used.

MountainBytes being a small party, the compo combined trackers and executable chiptunes with the general category of streaming music. [One entry](https://demozoo.org/music/367431/) was even an oscilloscope music piece---though without the oscilloscope visualisation. It would take until Revision for oscilloscope music to finally get the proper recognition in the scene! [Another](https://demozoo.org/music/367441/) (also in part by the Bus Error collective) went for microtonalism in 15ed7:2 (that means 15 equal divisions of the 7:2 ratio).

As for the actual demos? The party divided them simply into 'Oldschool and Alternative' (which includes fantasy consoles like the TIC80 and Pico-8) and 'PC', with no division by size.

### Oldschool & Alternative

I will admit to being very much a newschool scener; the old ways are mysterious to me and I don't really know how to appreciate them. The oldschool compo was won by [an Amiga demo](https://demozoo.org/productions/367472/) which, like many oldschools, progressed through a few different effects: particles with a kind of overlapping falloff and spinning text sprites.

{% include youtube.html id="\_S6HMPdc5hw" capt="The Story of Josef K and the Cathodic Guillotine" %}

More interesting was the second place winner, [<cite>The Story of Josef K. and the Cathodic Guillotine</cite>](https://demozoo.org/productions/367471/), whose blocky shapes told a rather oblique mythologically flavoured story full of Swiss computer history allusions and injokes, which then starts jumping around to various parts of the scenes seen so far. This felt like proper outsider art, which is to say I didn't entirely get it but it certainly had a vibe to it. The creators express their intent in some detail on [a writeup](https://research.swissdigitization.ch/?p=3393) released after the compo: they wanted to break various conventions, tile-based graphics, cultural allusions, as well as exploring the technical ideas being explored (the cathode ray beam, moving bitplanes and the 'guillotine' effect it applied to the image).

I now know that the technical limits of the Amiga are... really damn high. But this compo demonstrated to me that the demoscene is, or can be, about a lot more than pushing the limits of graphics techniques.

Also interesting was la1n's entry, a <cite>Space Invaders</cite>-style C64 game that [fits in just 254/384 bytes](https://demozoo.org/productions/367465/). This one also received a [thorough writeup](https://www.gamelab.ch/?p=10661) explaining how such is even possible---through left-field programming, that's for sure.

### PC compo

In the PC compo, the competition was swept easily by [the Revision invite](https://www.pouet.net/prod.php?which=103537), which involved a combination of graphics techniques from Gaussian splatting of the Revision venue to classic CGI, a banging soundtrack, and a clear visual theme. I'm not sure how many of the creators were at MountainBytes, but Sylvia was---all the way from Hong Kong---and we made damn sure to congratulate her for it.

This was a pretty hard act to take on (and anyone who could would probably be saving their work for another party), but there were some powerful entries all the same. [Markov Chant](https://www.pouet.net/prod.php?which=103538) by Limp Ninja won well-deserved praise, with the moody whispering soundtrack and heavy VHS-style distortion effects over its particles creating a powerful sense of atmosphere. Spectrox's 32k entry, [All Filler, No Killer](https://www.pouet.net/prod.php?which=103536), was a self-identified compo filler with a couple of effects and scrolling shoutouts, but it looked very nice with its oldschool pixels and chromatic aberration.

The Hong Kong pair, Sylvia and Leon, made [a sweet little 4k](https://www.pouet.net/prod.php?which=103643) during the party (I think), that I believe must be doing CPU rendering because it makes my fan go absolutely nuts when I run it at 1440p. And Rebels gave us a 4k which I believe is a variant of the ['Fractal Flame' effect](https://en.wikipedia.org/wiki/Fractal_flame), though I did not know this at the time.

Not everything in this category was a demo; la1n made [a web program](https://www.swissdigitization.ch/public/c64camera/) which allows you to view your webcam as if displayed on a Commodore 64 with attendant limitations. The girls from UwU space made a 64k intro that was written in sizecoded Rust and ran on the Steam Deck. Rust code does not optimise for executable size so efficiently as C, so this had some interesting challenges associated with it!

Overall? A compo that certainly honoured the ideal of 'esoteric computer shit'.

### Overhead Projector

The *cutest* compo was the overhead projector compo, which had to be created during the party and took a demoscene ethos to making little live shadow puppet acts on an overhead projector. The winner, OHP!FTW, went pretty crazy with an entire zoetrope contraption that I gradually watched come together next to me. Their use of Suno to generate the music did not generate much controversy this time... perhaps because the rest of the "demo" for this silly joke compo was so high effort. Perhaps they'll upload the video.

The OHP compo, as a sendup of demoscene aesthetics, was also a cute way to get a sense of what the demoscene cliches *are*. Amiga bounceballs, scrolling text etc. abounded.

### DemoLab

The highlight for *me, personally* was Monday's DemoLab showing, where all of us newbies got to drop our demos. We'd been provided music by sceners to use, and we had the mentors floating around to offer advice---admittedly, mostly for my case acting as a helpful rubber duck because not a lot of people had experience with Rust and WGPU. The entries were quite varied: [an arduino with an LED strip](https://demozoo.org/productions/367499/) that acted like a campfire; fractals; C64, NES and TIC80 demos; a Minesweeper implementation... Considering it was all created by complete noobs in a weekend, I think we did all right! I'm excited to see these names cropping up around the scene again in the future.

The attendees of the DemoLab workshop were pretty varied. Some were long-time demoparty-goers who were for the first time putting their own hat into the ring. Others, like me, were coming to the scene for the first time, having heard about it before. We were a pretty varied mix of ages (with the lower cutoff admittedly being safely within 'millenial').

I was probably the only person in the cohort who had come in with significant graphics programming experience, and that gave me a nice opportunity to get some people going with [scratchapixel](https://www.scratchapixel.com/) and infodump about rendering pipelines haha. Next year I plan to go along to MountainBytes as a real mentor!

Once I've proven myself with some demos.

*Once I've proven myself with some demos.*

## Other stuff

MountainBytes was mostly not catered, but you could just walk across the road into Cham and get takeaway and such, so I was pretty well covered. Shoutout to Jonas for effortly switching between three languages.

Tip for anyone who fancies going to this party: they really fuckin love cows here. Here is their mascot, Cowee:

{% include figure.html src="embed/demoscene/cowee.webp" alt="A plush cow in a splayed posture in between a plush hermit crab and a plush shark." capt="Cowee with some friends from Paris Aquarium." %}

MountainBytes was, overall, a delight---and a great place to get my foot in the door, figure out the general pace of things, and meet a load of Revision orgas so I'd have an easier time acclimatising at Revision. If you want a route to get involved in the Demoscene and you're not too far from Switzerland, I highly recommend it.