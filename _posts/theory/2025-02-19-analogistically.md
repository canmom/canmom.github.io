---
title: analogistically
excerpt: or, the adventure of canmom on lysergic acid diethylamide
layout: article
origin: https://canmom.tumblr.com/post/775883632351051776/analogistically
categories:
 - theory
tags:
 - LLMs
 - brainweird
---

<strong>Epistemic status:</strong> jam session

Two months ago I dropped acid for the first time, which surely explains a lot about recent posting trends on canmom dot tumblr dot edu. It was exactly as extraordinary as you would hope your first time on psychedelics would be. Among other things, LSD kind of acts like an intense reverb filter on your thoughts, boosting the intensity of sensory perceptions in various ways (for e.g. touch, music, colour, edges) and putting your capacity to form associations into overdrive. I did a lot of classic ‘on drugs things’ like staring very intensely at my hands or a piece of flatbread <small>trying to map my perception into some kind of visual effects filters I might be able to recreate later… my best description is something akin to</small> <a href="https://www.youtube.com/watch?v=NSS6yAMZF78"><small>motion extraction</small></a> <small>as the primary effect, causing all sorts of little surface details to pop out very vividly as I moved an object.</small>

This, however, is not a trip report; just an attempt to explain some ideas and connections that were formulated while on acid, in a state where my eyes were full of interesting fractals and I couldn’t remember the world 'analogously’.

Here’s some music to start us off - one of the first things that I listened to during the trip and something which probably informed the very geometric path I went down…

{% include youtube.html id="BDERfRP2GI0" %}

This is a music track that can be interpreted simultaneously as music and, when used to control an oscilloscope trace, as imagery. The whole function that generates it fits on a floppy. The beat of this music basically stayed with me throughout the whole trip, and for a while afterwards.

One of the curious experiences I had during the trip was what the (sadly no longer actively updated) <a href="https://psychonautwiki.org/wiki/Main_Page">psychonaut wiki</a> calls <a href="https://psychonautwiki.org/wiki/Perceived_exposure_to_inner_mechanics_of_consciousness">perceived exposure to the inner mechanics of consciousness</a>. Although it’s not listed as a common effect of LSD, and said to be associated with a higher degree of visual effects than I reached, the description does resonate:

> <strong>Perceived exposure to inner mechanics of consciousness</strong> can be described the experience of being exposed to an array of complex, autonomously-generated, cognitive sensations and <a href="https://psychonautwiki.org/wiki/Conceptual_thinking">conceptual thoughts</a> which contain detailed sets of innately readable information.
> 
> The information within these sensations is felt to convey the organization, structure, architecture, framework and inner mechanics of the underlying programming behind all conscious and subconscious psychological processes. Those who undergo this effect commonly interpret the experience as suddenly having perceivable access to the inner workings of either the universe, reality, or consciousness itself.<br>
>
> (...)
> 
> These specific pieces of information are often felt and understood to be a profound unveiling of an undeniable truth at the time. Afterward, they are usually realized to be ineffable due to the limitations of human language and cognition, or simply nonsensical, and <a href="https://psychonautwiki.org/wiki/Delusions">delusional</a> due to the impairment caused by of other accompanying <a href="https://psychonautwiki.org/wiki/Cognitive_effects">cognitive effects</a>.</blockquote>

Here, it felt like a kind of separating out of processes within my brain: a separation of sensory processing, <a href="https://psychonautwiki.org/wiki/Conceptual_thinking">conceptual thinking</a>, and the word stream operating with a slight delay between them.

I imagined these different elements of me kind of floating in some kind of space, that each one possessed its own space of meaning, and that thoughts were being mapped between the different parts. I imagined that they were all working in concert to make 'Bryn’ happen, so much so that I didn’t perceive the different parts most of the time, and that they seemed happy with this arrangement. I also hit on a very striking metaphor of thoughts as oscillations and the resonant modes of the brain.

Afterwards, I wondered how much of this was driven simply by inputs - elaboration on stuff I’d been learning about recently, which we’ll get into in a bit. I find it hard to be confident that what I perceived was actual 'direct’ introspection, rather than a narrative conjured on the fly by my brain when prompted to generate a 'look inside’.

However, even if it was not the direct observation of some kind of 'brain telescope’, it certainly gave me a lot of rich connections to think about. So the purpose of this post is to flesh out and record what came to me very intuitively at the time. Although my direct memory has faded a bit, my brain is still oscillating intently (upcoming metaphor) with thoughts inspired by what I explored there.

We’re mostly talking about human brains here, but I will be talking about AI stuff as well, largely as a provocative counterexample.

Prior to the trip I had recently watched 3Blue1Brown’s video on how LLMs encode meaning with high-dimensional vector embeddings and the 'attention’ mechanism:

{% include youtube.html id="9-Jl0dxWQs8" %}

To try and summarise briefly, the meaning of a token inside an LLM (and various other types of machine learning system) is an incredibly <a href="https://en.wikipedia.org/wiki/Feature_(machine_learning)#Feature_vectors">high-dimensional vector</a> of associations. By combining information from elsewhere in its inputs, the LLM is able to alter its encoding to take into account which specific nuances of a word are relevant here, its grammatical role in a sentence, etc.

How exactly a concept is encoded is essentially entirely relative: <strong>a vector can be said to encode a concept because it activates other nodes in the network that correspond to that concept</strong> (insofar as, by the time that it percolates through the LLM into its final output, it generates tokens that a human will associate with that concept). It can also come in degrees, rather than being purely binary. <small>The correspondence of individual</small> <em><small>nodes</small></em> <small>with concepts can be identified using techniques like</small> <a href="https://transformer-circuits.pub/2023/monosemantic-features"><small>sparse autoencoder dictionary learning</small></a><small>, which let you find neurons strongly connected to a certain concept which can be 'pinned’ to force the LLM to behave in a certain way. And they can also be in a 'superposition’ of corresponding to multiple concepts that would be relevant to humans.</small>

Crucially, the 'space’ of concepts that a given LLM understands is entirely specific to that model. You can’t tale a vector inside Claude and directly convert it into a vector that works for DeepSeek. You have to figure out <strong>a mapping between the two spaces</strong>.

So let’s talk about spaces, and then we’ll talk about language.

## Spaces & thought-oscillations

Perhaps not surprising as creatures who spend our lives navigating 3D environments, one of the most versatile recurring metaphors in maths and physics is an abstract space.

In physics: you have regular <strong>physical space</strong> where particles might live; you have <strong><a href="https://en.wikipedia.org/wiki/Phase_space">phase space</a></strong>, the high-dimensional space of all parameter values and velocities accessible to a system; you have <strong><a href="https://en.wikipedia.org/wiki/Hilbert_space">Hilbert space</a></strong>, which is the <em>infinite</em>-dimensional space of all states of the quantum wavefunction; you have <strong><a href="https://en.wikipedia.org/wiki/Minkowski_space">Minkowski spacetime</a></strong> of special relativity and various <strong><a href="https://en.wikipedia.org/wiki/Curved_spacetime">curved spacetime manifolds</a></strong> of general relativity which can be parameterised in multiple ways; you have <strong><a href="https://en.wikipedia.org/wiki/Frequency_domain">frequency space</a></strong> accessed by a Fourier transform… Other fields have their own spaces; biology has its own phase space describing populations for example.

In my current field of computer graphics, spaces abound just as much. In <a href="https://scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation/overview-rasterization-algorithm.html">rasterisation</a>, you define your verticex positions in <strong>object space</strong>, then map them to <strong>world space</strong>, and project them into <a href="https://en.wikipedia.org/wiki/Clip_coordinates"><strong>clip space</strong></a> before the <a href="https://en.wikipedia.org/wiki/Projective_geometry">projective-geometry</a> perspective divide finally maps them into <strong>screen space</strong> (where various further algorithms can take place). But we are far from done! We must also keep track of the <strong>UV space</strong> over the surface of an object, and the <strong>tangent space</strong> defining directions along the surface for certain kinds of anisotropic effect. A lot of graphics calculations involve mapping points in one space into another space. It’s linear algebra all the way down, baby. Even more abstract spaces like all the different <strong>colour spaces</strong> are there.

One interesting area where spaces come up is the study of oscillations. For many oscillating structures, from something simple like a string on a violin to something complicated like a building, you can decompose the motion into a combination of pure, sinusoidal vibrations known as <strong><a href="https://en.wikipedia.org/wiki/Normal_mode">normal modes</a></strong>. You do this by turning the system’s equations of motion into a matrix and finding its <a href="https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors">eigenvalues and eigenvectors</a>. Remarkably, these form a <a href="https://en.wikipedia.org/wiki/Basis_(linear_algebra)">basis</a>, meaning that you can break down the system into a sum of eigenvectors, evolve them independently, and then add it back up.

Now, let’s return to machine learning, and its feature spaces. In an LLM, the feature-encoding vectors evolve in discrete steps passing through layers of the LLM. High-dimensional vector spaces also show up in neuroscience, for example when using electrode arrays to monitor the activity of neurons.

However, inside a brain, the whole system is temporal in nature, and you have all kinds of feedback effects, which means you could imagine these 'feature vectors’ not as static things but as <em>oscillations</em>.

I imagined a thought as something like a spiky little blob oscillating with various overlapping modes. Well, I’m a 3D artist, let me make a picture of that for you. Let’s make it a demo even. Let’s go to Switzerland and spend a weekend trying to make a visual representation of something I saw on LSD. That’s a cool thing to do.

{% include youtube.html id="zbihfgj5P78" %}

This is a superposition of spherical harmonics, all given different frequencies. The (infinite) set of spherical harmonics forms an orthnormal basis for functions on a sphere, so if you took each component of one of those ultra high dimensional vectors as the coefficient of a spherical harmonic, you would get a unique bumpy shape.

Funnily enough, I was inspired by code <a href="https://momentsingraphics.de/VMV2023.html">that was written for displaying data from MRI imaging</a>, although that is pretty much entirely a coincidence because there it represents something quite different, the diffusion of water molecules.

With this metaphor in hand, we can imagine recurring patterns of thought (ranging from comfortable turns of phrase to traumatic flashbacks) as something like the <strong>resonant modes</strong> of a system. They are easily excited by random impulses, and slow to die out. Conversely, other types of thought might be heavily damped. Much like a violin bow provides a whole bunch of noisy excitations which ultimately end up exciting a string’s resonant modes, the noisy sensory input would get distilled down into oscillations.

The idea of considering the movement of neurons through some kind of phase space is not so outlandish. In fact, recent research has been investigating the topology of 'subspaces’ explored by neurons in the brains of mice, as discussed in this video (yes I’ve been watching a lot of Arsem’s videos lately…)

{% include youtube.html id="QHj9uVmwA_0" %}

However, the exact meaning of any of these hypothetical 'modes’ is entirely contextual. We might be able to say 'this mode is stimulated when you receive sensory input with the colour red’ for any given brain, or even section of one brain.

But to map the oscillations in one space into another space, we need to have some kind of common interface. Perhaps for adjacent regions of the brain, we could go 'directly’, with one functional unit of neurons wired up to excite corresponding oscillations in another.

But what about brains that are only connected by whatever you can pass through the physical world inbetween them? Sound, images, etc.? How can you create a correspondence there?

## Language

Writing <a href="https://youtu.be/V5wLQ-8eyQI?si=5pLdpV07lFaPoYIm&amp;t=670">has been described</a> as a kind of telepathy: we <em>encode</em> our internal world into a series of symbols (either as images or sound), which are then <em>decoded</em> to generate a thought in someone else’s brain - one that is notionally equivalent.

But what is the nature of that equivalence? It isn’t that it will make the exact same pattern of neuron firing in your brain that it did in mine. After all, you have a completely different neural network that has learned different inputs. So there is some kind of mapping from one space to another: the pattern of activity in my brain and the pattern of activity in your brain are related in some way.

We all know that the meaning of sounds in language is pretty much arbitrary. It’s built by associations: you have learned that the symbol-sequence 'red’ corresponds to <span style="color: #ff4930">this colour</span>’s internal representation [assuming your monitor is not calibrated in a really weird way].

And insofar as we have broadly similar sensory and bodily experiences, it is possible to build up this mapping of associations between words, sensations, and whatever other internal representation exists in our brains. <small>It’s also a feedback process, spawning all sorts of social constructs by giving them names and acting as if they exist.</small>

However, language does more for us than this.

A moment of introspection: I personally experience an ongoing verbal 'stream of consciousness’ most of the time. How this manifests more concretely is that words come to me rapidly from 'somewhere inside’; if I am speaking, I might consider briefly whether they are the 'right’ words before saying them.

Internally, I might consider a thought that occurs to me and decide that I do not agree with it, or just think about a sentence I have thought as a kind of 'object’, as if I am perceiving it from a different vantage point. It seems to be impossible to consider a thought 'as I am thinking it’; only after it has entered into memory can I 'observe’ it.

When I was on LSD, I perceived a kind of 'separating out’ of the 'inner’, nonverbal process of thought and the linguistic stream. There would be a delay in which the linguistic stream would be waiting for input, and would have to kind of 'spin its wheels’ and fill space as it waited for something concrete to encode. This separation was quite delightful, since I am not used to perceiving it in such a way. Other times when I was on LSD I had a vague sense of <a href="https://psychonautwiki.org/wiki/Multiple_thought_streams">multiple thought streams</a> occurring in parallel, of switching tracks to bring one or another into salience (something covered here on the psychonaut wiki). I’m not entirely sure if these 'seemed verbal’.

This suggests to me some kind of feedback cycle, of thoughts bouncing between the 'language space’ and the broader 'conceptual space’ of the rest of the brain. Speculatively: my brain might encode something into language in order to store it while it thinks about something else, for certain more 'sequential’ forms of thought, or to activate resonances with linguistically-encoded things. By bouncing thoughts in and out of 'language-space’ it might be able to perform different kinds of thinking/computation.

## Expanding the space

One of the more intense images that occurred to me while I was jamming with all these ideas of spaces and oscillations was the thought of how new ideas get encoded into the space as I encounter new things and learn. I had recently made two friends, and I had the idea of new dimensions appearing: first a direction that was associated with my friends as a pair, and a secondary dimension that encoded the differences between them.

Each of these 'dimensions’ would be associated with other concepts by the dynamics of the neural network.

Visually, I imagined a line extending out from (something that represented the space), and then dividing into another line. I think this is kind of what is meant when the psychonaut wiki speaks of 'intrinsically understandable’ geometric representations: I knew exactly what this line was supposed to mean, but it would hardly be clear if I drew you a picture.

Exactly what that 'adding of dimensions’ would mean on a physical level I can’t tell you. I don’t think it’s like my brain was literally growing an extra neuron that would specifically be stimulated by thoughts of my friends, like the now-famous 'golden gate bridge’ neuron in Claude. Internally, it all presumably exists in some nebulous state of superposition with all sorts of other ideas. Maybe you could extract a vector associated with that concept by some kind of statistical bullshit if you had somehow access to the states of all the neurons, but we don’t. Do we?

…well, I thought we don’t. Actually we pretty much do have access to individual neurons in mice. We can do all sorts of crazy shit like make their brains transparent and attach glowing proteins to specific neurons that are activated when a specific memory is stimulated. That is <em>fucking insane</em>. We are literally living in an age. Here’s Arsem again:

{% include youtube.html id="X5trRLX7PQY" %}

The idea of 'engrams’ as the physical correspondents to memory is nearly a century old, but now we can actually physically observe them.

So, you develop a new concept-association, and a certain subset of neurons get tagged to that concept and excited when it comes up. We mentioned these 'subspaces’ up above: presumably that is what could be said to grow an extra dimension. If I have a conceptual dimension that is 'associated with my friend M.’, presumably there is a set of neurons that correspond to her, and another set of neurons linking them to various concepts that I associate with her, my memories of what she looks like, etc. etc.

I get a strong sense that the more things that I encounter, the larger my internal 'space’ of concepts becomes. But these feature dimensions don’t seem to be 'independent’. I suppose what I’m approaching obliquely and fuzzily here is the idea of covariance, and the <a href="https://en.wikipedia.org/wiki/Covariance_matrix">covariance matrix</a> seen in techniques like principal component analysis. Or something to do with the subspaces mentioned above.

## The role of prediction and roleplaying

The thing language models optimise for is to generate something that is contextually appropriate and consistent. This results in a curious behaviour akin to 'roleplaying’, where the model will respond as if it’s 'in character’, according to a premise set up in a prompt.

I previously <a href="https://canmom.tumblr.com/post/774741910421143552/as-a-general-maxim-when-you-make-art-you-wanna">talked about</a> the 'free energy’ model in neuroscience, in which the brain is constantly attempting to predict the next sensory input. There, the main point was in the creation of art: that a lot of the interest we have in artworks comes from its delicate balance of predictability/unpredictability.

However, I think the brain is also predicting something even more significant: itself!

Viewed in another light, an LLM generates a variety of contextually plausible tokens that it might continue along, and then it selects one. The form of its selection is to pick one at random. However, what if it was <em>not</em> random? What if there is some process that views the prediction output and goes 'yes, that one?’

When I am talking, ideas of things to say will come into my head. I will have just a moment to decide whether to let them come out my mouth or not. Or, I will think a thought in my internal 'stream of consciousness’, and then conclude that 'yes, that is good’ or 'no, this appals me, I won’t say this’. We could say that the process that is generating the stream of language is attempting to predict whether I will find it agreeable, or interesting, or relevant or some such thing.

In other words, I am continually engaged in an elaborate performance of 'Bryn’.

On LSD, I had the curious sense of how all these functional elements I was dimly sensing within my brain were acting in concert to produce 'Bryn’. I had the strange and honestly very comforting sense that they were all <em>happy</em> to play a role in generating this persona. I don’t know how much credence to lend to this idea.

When I enter a new social context where the rules are unfamiliar (such as a kink scene, c.f. <a href="https://canmom.tumblr.com/post/767269521180573696/like-you-know-viewing-life-by-way-of-performance">everything is roleplaying except roleplaying which is improv</a>), I become temporarily compromised in my ability to perform the contextually appropriate character. I need to get a sense of the dynamics of this new space - in other words, my brain must develop its prediction-model. It is, in other words, <em>very much like learning to play a new game</em>. (I’ll read you eventually, Wittgenstein.)

Depending on context, depending on which set of dynamics you are attempting to predict, different memories will become more or less able to be drawn up through the associative links. Feedbacks are possible; hence 'flashbacks’, emotional and literal, where the memory becomes so furiously excited that it shuts out everything else for a while. But this also shapes what sort of person the brain predicts you will be (and thus gives you the option to be) in a given moment.

## Compression

Prediction, game-playing, and performance are all facets of this constant process of updating my internal representations - in other words, adjusting the resonances and dynamics of those neuron-interaction spaces. The brain 'wants’ - generally tends - to simplify and abstract. In other words, it wants to <em>compress</em> - to discern underlying patterns so it can store its information and generate predictions more efficiently.

So it will try to relate unfamiliar new things to familiar types, and then, where necessary (e.g. because of an extended interaction with a person or a thing), flesh them out with additional details - which is to say building out a subspace for that thing to vary within.

When I was first transitioning my gender, I had a pathetic tendency to view all these interesting new women I was meeting as instances of the same type. It made me embarassing; I was viewing people as a category, not as individuals. Now many many years later, probably the subspace for thinking about all the different trans women I know is one of the larger ones in here. Perhaps other information has been forgotten (dissolved into noise) to make room for it.

The more time I spend with someone, the more specific associations I can build with them.

The more I can get a sense of the dynamics of their inner meaning-spaces.

## Initiate feedback loop

So we encode high-dimensional oscillating thoughts into a stream of language-associations in order to excite analogous thoughts in the brain of another person. But of course, that person will have their own associations. Different memories and ideas will be excited by that word. I can only dimly predict how my words will be perceived.

But communication is not hopeless. Because we can ask for clarification. We can pass messages back and forth. Clarify the shapes of each of our thoughts.

The specific ideas I use for introspection, whether or not I’m under the influence of a powerful substance like LSD, are all influenced by the history and the models my brain has built. I like physical science metaphors, obviously. I am a creature who can’t help but think in the language of dynamical systems, feedback loops, networks of interacting elements, fluids (hehehe), component parts, parallel processes, games, and of course abstract spaces…

Perhaps it is a worldview that is proper to this moment in the story of the superorganism!

This post represents the most complete effort I’ve made so far to encode the 'working model’ I have of the shape of thinking into language. But the things I am talking about are very abstract, and the direct experiences I refer to are only really available to me - I can only hope that my words excite something analogous in <em>your</em> mysterious meaning-space.

Listen to me banging on about oscillations though. <small>Might as well go full hippie and call it vibes. You can take the girl out of Glastonbury, but…</small>

## Postscript

The other image I had while I was on that LSD trip was of each brain existing somewhere in a void: each a constellation of connected parts, which only occasionally get so lucky as to brush up against another such structure and glimpse another mind. Each one trying desperately to roleplay itself in the face of chaotic input and its own inscrutable behaviour. As many people do when they take this stuff, I felt a sort of empathy for everyone, even - especially - the people who had annoyed or troubled me. A glow that lingered long after.

I do not think I am anywhere near done with this quest to understand what the hell I am, or what any of us are for that matter. It’s impossible, isn’t it? To somehow find a model of the universe and all within it so elegant that it can fit inside here and so rich it captures all that complexity. Authors to read, conversations to have (hii), sensory and emotional experiences to flesh out the spaces.

But before all that… or running through all that… is of course, well, other people. You lot. Endlessly mysterious creatures who continue to fill this hungry, vibrating brain with strange oscillations. Have you considered yourself as the nucleus of the fractal patterns evolving within the <a href="https://www.wolframalpha.com/input?i=number+of+neurons+in+a+human+brain+*+world+population">~800,000,000,000,000,000,000</a> human neurons, and all that we accumulate around us? I don’t know, is that a silly metaphor? Do you like it?

“The net is vast and infinite”.

<em>That’s all we’ve got for tonight, folks. We’ve been canmom - love you all, thanks for listening!</em>