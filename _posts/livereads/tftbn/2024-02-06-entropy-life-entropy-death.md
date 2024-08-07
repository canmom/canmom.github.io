---
title: "entropy and life//entropy and death"
layout: article
origin: https://canmom.tumblr.com/post/741559439932391424/entropy-and-lifeentropy-and-death
categories:
 - livereads
 - tftbn
tags:
 - tftbn
 - physics
excerpt: "I couldn't resist talking about entropy in depth, to the point it needed to be excised to its own post."
---

This is a discussion that spun out of <a href="https://www.tumblr.com/canmom/741553930023124992/the-flower-that-bloomed-nowhere-000-012?source=share">a post on web novel <cite>The Flower That Bloomed Nowhere</cite></a>. However, it’s mostly a chance to lay out the entropy thing. So most of it is not <cite>Flower</cite> related at all…

{% include hiddentoc.md %}

## the thermodynamics lesson

Entropy is one of those subjects that tends to be described quite vaguely. The rigorous definition, on the other hand, is packed full of jargon like ‘macrostates’, which I found pretty hard to wrap my head around as a university student back in the day. So let’s begin this post with an attempt to lay it out a bit more intuitively.

In the early days of thermodynamics, as 19th-century scientists like Clausius attempted to get to grips with 'how do you build a better steam engine’, <dfn><strong>entropy</strong></dfn> was a rather mysterious quantity that emerged from their networks of differential equations. It was defined in relation to measurable quantities <em>temperature</em> and <em>heat</em>. If you add <em>heat</em> to a system at a given <em>temperature</em>, its <em>entropy</em> goes up. In an idealised reversible process, like compressing a piston infinitely slowly, the entropy stays constant.

Strangely, this convenient quantity always seemed to go up or stay the same, never ever down. This was so strictly true that it was declared to be a 'law of thermodynamics’. Why the hell should that be true? Turns out they’d accidentally stumbled on one of the most fundamental principles of the universe.

So. What actually is it? When we talk about entropy, we are talking about <strong>a system that can be described in two related ways</strong>: a 'nitty-gritty details’ one that’s <em>exhaustively precise</em>, and a 'broad strokes’ one that <em>brushes over most of those details</em>. (The jargon calls the first one a 'microstate’ and the second one a 'macrostate’.)

For example, say the thing you’re trying to describe is a gas. The 'nitty gritty details’ description would describe the position and velocity of every single molecule zipping around in that gas. The 'broad strokes’ description would sum it all up with a few quantities such as temperature, volume and pressure, which describe how much energy and momentum the molecules have <em>on average</em>, and the places they <em>might</em> be.

In general there are many different possible ways you could arrange the molecules and their kinetic energy match up with that broad-strokes description.

In statistical mechanics, <em><strong>entropy</strong></em> describes the relationship between the two. It measures the number of possible 'nitty gritty details’ descriptions that match up with the 'broad strokes’ description.

In short, entropy could be thought of as a measure of what is not known or indeed knowable. It is <em>sort of</em> like a measure of 'disorder’, but it’s a very specific sense of 'disorder’.

For another example, let’s say that you are running along with two folders. Each folder contains 100 pages, and one of them is important to you. You know for sure it’s in the left folder. But then you suffer a comical anime collision that leads to your papers going all over the floor! You pick them up and stuff them randomly back in the folders.

In the first state, the macrostate is 'the important page is in the left folder’. There are 100 positions it could be. After your accident, you don’t know which folder has that page. The macrostate is 'It could be in either folder’. So there are now 200 positions it could be. This means your papers are now in a higher entropy state than they were before.

In general, if you start out a system in a given 'broad strokes’ state, it will randomly explore all the different 'nitty gritty details’ states available in its phase space (this is called the <a href="https://en.wikipedia.org/wiki/Ergodic_hypothesis">ergodic hypothesis</a>). The more 'nitty gritty details’ states that are associated with a given 'broad strokes’ state, the more likely that it will end up in that state. In practice, once you have realistic numbers of particles involved, the probabilities involved are <em>so extreme</em> that we can say that the system will <em>almost certainly</em> end up in a 'broad strokes’ state with equal or higher entropy. This is called the <a href="https://en.wikipedia.org/wiki/Second_law_of_thermodynamics">Second Law of Thermodynamics</a>: it says entropy will always stay the same, or increase.

This is the modern, statistical view of entropy developed by Ludwig Boltzmann in the 1870s and really nailed down at the start of the 20th century, summed up by the famous formula S=k log W. This was such a big deal that they engraved it on his tombstone.

Since the Second Law of Thermodynamics is statistical in nature, it applies <em>anywhere</em> its assumptions hold, regardless of how the underlying physics works. This makes it astonishingly powerful. Before long, the idea of entropy in thermodynamics inspired other, related ideas. Claude Shannon <a href="https://en.wikipedia.org/wiki/Entropy_(information_theory)">used the word entropy</a> for a measure of the maximum information conveyed in a message of a certain length.

## the life of energy and entropy

So, everything is made of energy, and that energy is in a state with a certain amount of thermodynamic entropy. As we just discussed, every chemical process must globally increase the entropy. If the entropy of one thing goes down, the entropy of something else must increase by an equal or greater amount.

(A little caveat: traditional thermodynamics was mainly concerned with systems in equilibrium. Life is almost by definition <em>not</em> in thermodynamic equilibrium, which makes things generally a lot more complicated. Luckily I’m going to talk about things at such a high level of abstraction that it won’t matter.)

There are generally speaking two ways to increase entropy. You can add more energy to the system, and you can take the existing energy and distribute it more evenly.

For example, a fridge in a warm room is in a low entropy state. Left to its own devices, energy from outside would make its way into the fridge, lowering the temperature of the outside slightly and increasing the temperature of the inside. This would increase the entropy: there are more ways for the energy to be distributed when the inside of the fridge is warmer.

To cool the fridge we want to move some energy back to the outside. But that would lower entropy, which is a no-no! To get around this, the heat pump on a fridge must always add a bit of <em>extra</em> energy to the outside of the fridge. In this way it’s possible to link the cooling of the inside of the fridge to the increase in entropy outside, and the whole process becomes thermodynamically viable.

Likewise, for a coherent pattern such as life to exist, it must slot itself into the constant transition from low to high entropy in a way that can dump the excess entropy it adds somewhere else.

Fortunately, we live on a planet that is orbiting a bright star, and also radiating heat into space. The sun provides energy in a relatively low-entropy state: highly directional, in a certain limited range of frequencies. The electromagnetic radiation <em>leaving</em> our planet is in a higher entropy state. The earth as a whole is pretty near equilibrium (although it’s presently warming, as you might have heard).

Using a multistep process and suitable enzymes, photosynthesis can convert a portion of the incoming sunlight energy into sugars, which are in a tasty low entropy state. This is a <em>highly</em> unfavoured process in general, and it requires some shenanigans to get away with it. <a href="https://www.pnas.org/doi/pdf/10.1073/pnas.59.3.734">But basically, the compensating increase in entropy is achieved by heating up the surroundings, which radiate away lower-temperature infrared radiation.</a>

## the reason we don’t live forever

Nearly all other lifeforms depend on these helpfully packaged low-entropy molecules. We take in molecules from outside by breathing in and eating and drinking, put them through a bunch of chemical reactions (respiration and so forth), and emit molecules at a higher entropy (breathing out, pissing, shitting, etc.). Since we constantly have to throw away molecules to get rid of the excess entropy produced by the processes of living, we constantly have to eat more food. This is what I was alluding to in <a href="https://canmom.tumblr.com/post/741355397357682688/comics-mini-comints-dungeon-meshi">the Dungeon Meshi post from the other day</a>.

That’s the short-timescale battle against entropy. On <em>longer</em> timescales, we can more vaguely say that life depends on the ability to preserve a low-entropy, non-equilibrium state. On the simplest level, a human body is in a very low entropy state compared to a cloud of carbon dioxide and water, but we generally speaking do not spontaneously combust because there is a high enough energy barrier in the way. But in a more abstract one, our cells continue to function in specialised roles, the complex networks of reaction pathways continue to tick over, and the whole machine somehow <em>keeps working</em>.

However, the longer you try to maintain a pattern, the more low-probability problems start to become statistical inevitabilities.

For example, cells contain a whole mess of chemical reactions which can gradually accumulate errors, waste products etc. which can corrupt their functioning. To compensate for this, multicellular organisms are <em>constantly</em> rebuilding themselves. On the one hand, their cells divide to create new cells; on the other, stressed cells undergo <a href="https://en.wikipedia.org/wiki/Apoptosis">apoptosis</a>, i.e. die. However, sometimes cells become corrupt in a way that causes them to fail to die when instructed. Our body <a href="https://www.pnas.org/doi/pdf/10.1073/pnas.59.3.734">has an entire complicated apparatus</a> designed to detect those cells and destroy them before they start replicating uncontrollably. Our various defensive mechanisms detect and destroy the vast majority of potentially cancerous cells… but over a long enough period, the odds are not in our favour. Every cell has a tiny potential to become cancerous.

At this point we’re <em>really</em> not in the realm of rigorous thermodynamic entropy calculations. However, we can think of 'dead body’ as generally speaking a higher-entropy set of states than 'living creature’. There are many more ways for the atoms that make us up to be arranged as a dead person, cloud of gas, etc. than an alive person. Worse still should we find we were in a metastable state, where only a small boost over the energy barrier is needed to cause a runaway reaction that drops us into a lower energy, higher entropy state.

In a sense, a viral infection could be thought of as a collapse of a metastable pattern. The replication machinery in our cells could produce human cells but it can equally produce viruses, and it turns out stamping out viruses is (in this loose sense) a higher entropy pattern; the main thing that stops us from turning into a pile of viruses is the absence of a virus to kick the process off.

So sooner or later, we inevitably(?) hit a level of disruption which causes a cascading failure in all these interlinked biological systems. The pattern collapses.

This is what we call 'death’.

## an analogy

If you’re familiar with cellular automata like <cite>Conway’s Game of Life</cite>, you’ll know it’s possible to construct incredibly elaborate persistent patterns. You can even <a href="https://www.youtube.com/watch?v=xP5-iIeKXE8">build the game of life in the game of life</a>. But these systems can be quite brittle: if you scribble a little on the board, the coherent pattern will break and it will collapse back into a random mess of oscillators. 'Random mess of oscillators’ is a high-entropy state for the Game of Life: there are many many different board states that correspond to it. 'Board that plays the Game of Life’ is a low-entropy state: there are a scant few states that fit.

The ergodic hypothesis does not apply to the <cite>Game of Life</cite>. Without manual intervention, the 'game of life in game of life’ board would keep simulating a giant version of the game of life indefinitely. However…

For physical computer systems, a vaguely similar process of accumulating problems can occur. For example, a program with a memory leak will gradually request more and more memory from the operating system, leaving more and more memory in an inaccessible state. Other programs may end up running slowly, starved of resources.

In general, there are a great many ways a computer can go wrong, and few that represent it going right.

One of the ways our body avoids collapsing like this is by dedicating resources to cells whose job is to monitor the other cells and intervene if they show heuristic signs of screwing up. This is the evolutionary arms race between immune system and virus. The same can be true on computers, which also support 'viruses’ in the form of programs that are able to hijack a computer and replicate themselves onto other computers - and one of our solutions is similar, writing programs which detect and terminate programs which have the appearance of viruses.

When a computer is running slowly, the first thing to do is to reboot it. This will reload all the programs from the unchanging version on disc.

The animal body’s version of a reboot is to dump all the accumulated decay onto a corpse and produce a whole new organism from a single pair of cells. This is one function of reproduction, a chance to wipe the slate clean. (One thing I remain curious about is how the body keeps the gamete cells in good shape.)

## but what if we did live forever?

I am not particularly up to date on senescence research, but <a href="https://en.wikipedia.org/wiki/Senescence#Definition_and_characteristics">in general the theories do appear to go along broad lines of 'accumulating damage’</a>, with disagreement over what represents the most fundamental cause.

Here’s how Su discusses the problem of living indefinitely in <cite>The Flower That Blooms Nowhere</cite>, chapter 2:

<blockquote>

  The trouble, however, is that the longer you try to preserve a system well into a length of time it is utterly not designed (well, evolved, in this case) for, the more strange and <em>complicated</em> problems appear. Take cancer, humanity’s oldest companion. For a young person with a body that’s still running according to program, it’s an easy problem to solve. Stick a scepter in their business, cast the <i>Life-Slaying Arcana</i> with the 'cancerous’ addendum script – which identifies and eliminates around the 10,000 most common types of defective cell – and that’s all it takes. No problem! A monkey could do it.<br>

  <br>

  But the body isn’t a thing unto itself, a inherently stable entity that just gets worn down or sometimes infected with nasty things. And cancer cells aren’t just malevolent little sprites that hop out of the netherworld. They’re one of innumerable quasi-autonomous components that are themselves important to the survival of the body, but just happen to be doing their job <em>slightly</em> wrong. So even the act of killing them causes disruption. Maybe not <em>major</em> disruption, but disruption all the same. Which will cause little stressors on other components, which in turn might cause <em>them</em> to become cancerous, maybe in a more 'interesting’ way that’s a little harder to detect. And if you stop that…<br>

  <br>

  Or hell, forget even cancer. Cells mutate all the time just by nature, the anima script becoming warped slightly in the process of division. Most of the time, it’s harmless; so long as you stay up to date with your telomere extensions, most dysfunctional cells don’t present serious problems and can be easily killed off by your immune system. But live long enough, and by sheer mathematics, you’ll get a mutation that isn’t. And if you live a really long time, you’ll get a <em>lot</em> of them, and unless you can detect them perfectly, they’ll build up, with, again, interesting results.<br>

  <br>

  At a deep enough level, the problem wasn’t biology. It was physics. Entropy.

</blockquote>

A few quirks of the setting emerge here. Rather than DNA we have 'the anima script’. It remains to be seen if this is just another name for DNA or reflecting some fundamental alt-biology that runs on magic or some shit. Others reflect real biology: ’<a href="https://en.wikipedia.org/wiki/Telomere">telomeres</a>’ are a region at the end of the DNA strands in chromosomes. They serve as a kind of ablative shield, protecting the end of the DNA during replication. The loss of the telomeres have been touted as a major factor in the aging process.

A few chapters later we encounter a man who does not think of himself as really being the same person as he was a hundred years ago. Which, mood - I don’t think I’m really the same person I was ten years ago. Or five. Or hell, even one.

The problem with really long-term scifi life extension ends up being a kind of signal-vs-noise problem. Humans <em>change</em>, a lot, as our lives advance. Hell, life <em>is</em> a process of constant change. We accumulate experiences and memories, learn new things, build new connections, change our opinions. Mostly this is desirable. Even if you had a perfect down-to-the-nucleon recording of the state of a person at a given point in time, overwriting a person with that state many years later would amount to killing them and replacing them with their old self. So the problem becomes distinguishing the good, wanted changes ('character development’, even if contrary to what you wanted in the past) from the bad unwanted changes (cancer or whatever).

But then it gets squirly. Memories are physical too. If you experienced a deeply traumatic event, and learned a set of unwanted behaviours and associations that will shit up your quality of life, maybe you’d want to erase that trauma and forget or rewrite that memory. But if you’re gonna do <em>that</em>… do you start rewriting <em>all</em> your memories? Does space become limited at some point? Can you back up your memories? What <em>do</em> you choose to preserve, and what do you choose to delete?

Living <em>forever</em> means <em>forgetting</em> infinitely many things, and Ship-of-Theseusing yourself into infinitely many people… perhaps infinitely many times each. Instead of death being sudden and taking place at a particular moment in time, it’s a gradual transition into something that becomes unrecognisable from the point of view of your present self. I don’t think there’s any coherent self-narrative that can hold up in the face of infinity.

That’s still probably better than dying I guess! But it is perhaps unsettling, in the same way that it’s unsettling to realise that whether or not Everett quantum mechanics is true, and if there is a finite amount information in the <em>observable</em> universe, an infinite universe must contain infinite exact copies of that observable universe, and infinite near variations, and basically you end up with many-worlds through the back door. Unless the universe is finite or something.

Anyway, living forever probably isn’t on the cards for us. Honestly I think we’ll be lucky if complex global societies make it through the next century. 'Making it’ in the <em>really</em> long term is going to require an unprecedented megaproject of effort to effect a complete renewable transition and reorganise society to a steady state economy which, just like life, takes in only low-entropy energy and puts out high-entropy energy in the form of photons, with <em>all</em> the other materials - minerals etc. - circulating in a closed loop. That probably won’t happen but idk, never say never.

Looking forward to how this book plays with all this stuff.