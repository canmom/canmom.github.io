---
title: Recursive Elaboration 0
layout: article
origin: https://canmom.tumblr.com/post/818495534114471936/recursive-elaboration
categories:
 - theory
tags:
 - introspection
 - plurality
excerpt: Grief, acid-mediated conceptual unfolding, and trying to express all that in GLSL
---
note: <i>recently (2026-10-29) we started a series called 'recursive elaboration'. it turns out we'd already written something under this title earlier in the year. so this is retroactively post 0 in a series.</i>

some scattered notes of major themes from recent pretty intense acid experience revolving around recursion and hyperbolic space. it was interesting, soon as it hit we went <em>straight</em> into ‘we-moded’ state, like instead of all this prevaricating seemed silly to think we might be anything other than plural, of course we are a cluster of things. and notably we seem to be a lot more comfortable using 'we’ in everyday life now (though that’s partly just like. meeting more plural systems that do that and seem to get along fine)

during the trip we got very chatty about all sorts of stuff as usual, at the same time space got very stretchy like in hyperrogue. the same kind of happened to concepts: we had a sense of concepts memories associated with a thing or place being stored inside triangles which we could open or close to spread out the space of concepts around them. thinking felt very geometric.

the following was written late at night while coming down from it, nine poles of interesting things which formed some kind of structure. and there’s a shader in it

oki <strong>first</strong> up subdivision surfaces in computer graphics. you take some piece of geometry, like a quad (four-sided shape), and replace it with four quads. this allows the mesh to hold more complex details. and you can do this recursively. with catmull-clarke you also smooth the positions towards a limit surface but you could do all kinds of things.

this is one very visualisable example of a rewriting rule, which is often used to generate structures like fractals. it’s also, in the form of a context-free grammar, how a programming language is defined: you have a set of symbols that can resolve to one of a few other symbols and by recursively expanding that out you can in principle generate all syntactically valid expressions in that language.

that’s one pole…

for a <strong>second</strong> pole, this weekend we played a roleplaying game about creating a language for an isolated group. we would take turns to create a word based on prompt cards and play out a scene to show how that word would be used. and while there were various provisions in the prompts for how that language would evolve, we also very quickly developed our own ways of using the jargon we had created, e.g. sarcasm, using the word to represent the people that use that word, etc.

and it was very interesting to observe how ideas contributed early in the game would expand out and shape the sorts of ideas we would come up with of where to take the story next. related to 'fictional positioning’ in emily care boss/vincent baker language, but more abstract: by creating a word we created a space of possible expansions on that word and directed the flow of the game. so it’s kind of a similar process of recursive expansion

ok, so then <strong>pole 3</strong> is the lambda calculus. this is basically an algorithm that recursively transforms statements into other statements, and it’s equivalent to a turing machine. it’s the basis of functional programming and a huge foundation of computer science.

and thinking about how in the lambda calculus, one path of continuous rewriting from the same expression might terminate, while another might not.

<strong>pole 4</strong> is our subjective experience of time and space stretching out hyperbolically (compare hyperrogue). a corner could expand in associations to become a mini universe but it’s still all contained in that 'triangle’

<strong>pole 5</strong> is still a bit unformed but it’s in projective geometry and the idea of projecting that triangle through other concepts

<strong>pole 6</strong> is the ability to observe the recursion from outside and stop the recursive expansion if necessary. analogy: <a href="https://www.youtube.com/watch?v=HZAmbbTcQ3M">mrna transcription</a> and the various functional units that do things like 'locate a relevant section of DNA’ and 'produce a string of precursor mRNA’ and 'snip it up according to cell environment to produce different combinations of protein segments’; all of these little functional units eagerly running around in the cell grabbing onto anything that has the right type to fit into their active site. and then various regulators and signalling systems to indicate when all of that should go ahead and when it should rein it in

every cell is a computation process

<strong>pole 7</strong> is the deleuzian body without organs so far as we understand it; the capacity to create functional structures out of something previously formless. a silicon wafer superposes every possible circuit it could hold, and then particular circuits are etched in; but we are a process that can etch itself new functionality out of its capacity to just give things names

so then <strong>pole 8</strong> is our recognition of our existence as a system of generating functions; kind of a foundation to understand the different personas we can construct both internally and externally

and then <strong>pole 9</strong> is i guess making a visual expression of this in <a href="https://github.com/canmom/jams/blob/main/bonzomatic/canmom-2026-06-09-recursive-bubbles.glsl">a recursive shader</a> (we showed up to the fieldfx shader jam and managed to livecode to some degree lmao) where the spheres represent the roundness of blahaj which now signifies nora memdmp, and also through it transfeminity and being a creature and so forth; and each sphere recursively expands into another view of the spheres

(more specifically, it raymarches through a quadtree grid of spheres, derived from this shader with the flowers; then when it hits a sphere, it takes the polar coordinates on the sphere as UV coordinates to re-run the whole shader down to about recursion depth 3.)

---

2026-10-31 note: the original acided shader would sometimes enter an infinite loop due to a coding mistake (it turns out coding on acid is kind of suboptimal). the version linked is an improved version which fixes the flaw and improves the colours. acid is great for making connections, rather less so for debugging ;p

embedded version to come as soon as some webgl code is written
