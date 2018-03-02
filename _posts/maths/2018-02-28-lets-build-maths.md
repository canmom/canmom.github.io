---
title: "Let's build maths: part 1"
excerpt: "When we learn basic maths in school, 'rules' are often presented by fiat, that we're just expected to memorise - but this can seem incredibly unsatisfying and arbitrary. Let's rebuild the number system step by step, see the reasons we need negative numbers, fractions, powers, complex numbers etc. and find the repeating pattern underlying the whole thing. Why this, and not something else?"
layout: article
categories: maths
tags:
- lets build maths
---
When we learn basic maths in school, 'rules' are often presented by fiat, that we're just expected to memorise - but this can seem incredibly unsatisfying and arbitrary. You might learn how to add up fractions, or suddenly have complex numbers introduced, but the 'why' is far too often left out - it's this way because it is, just go with it.

There are some good reasons for that, and bad ones. You don't need to think about axioms and so on if all you want to do is learn *how* to deal with numbers and proportions in everyday life. But at the same time, I find knowing *why*, realising that in, say, introducing complex numbers we're doing *exactly* the same thing we did when we introduced negative numbers and subtraction, fractions and division, exponents including negative exponents, etc. - it makes it all hang together a lot better, makes it (to me at least) easier to understand.

So this post is an attempt to try and find a suitable bridge between the hardcore stuff you'd get in a uni-level maths textbook, which would start with the Peano axioms or set theory or something and work out every consequence in a fully rigorous way, and the presentation you get in school which just goes 'this works like this, now do it a bunch'.

We're going to be pretty light on the actual calculations here. I'm not trying to explain *how* to calculate sums, but *where it all comes from* - how you build up the basic rules, and why you want them.

## Doctors hate her! Area woman builds entire number system with *one weird trick*

Here's the idea: our entire number system is built by doing one thing, over and over again. We set up one kind of number; we find an operation you can do with numbers to get other numbers; we find there's something missing in what we have; we introduce a new kind of number that fills the gap and makes everything work nicer. That's kind of abstract, so let's go straight in with an example.

# Step 1: the natural numbers and addition

Let's start with one kind of very familiar number: the *natural numbers*, which go

$$0,1,2,3,4,5,6,\ldots$$

(Some people think 'natural numbers' should refer to the above except for zero, and really it's a matter of preference, depending on what kind of algebraic structure you want it to be.)

The natural numbers, sometimes called the 'counting numbers', can be built up using axioms if you want (check out [this video](https://www.youtube.com/watch?v=3gBoP8jZ1Is) for a nicely explained/animated explanation), but they're very intuitive: pretty much the first idea of number we ever encounter, when we learn to count.

So, jargon that will be useful: addition is a *binary operation* on the natural numbers: that means you take two natural numbers, and using addition, you get another natural number back. You know, like... $$1+1=2$$.

Addition has some nice properties:

- The natural numbers are *closed* under addition. What does this mean? It means that any time you apply addition to two natural numbers, what you get back will *always* be another natural number.
- We have an *identity element*: adding zero to anything is special. Let's say you have some natural number, which we'll just call $$x$$. *Any* number added to zero gives itself: we can write this as $$x+0=x$$ for any natural number $$x$$. Because of this, zero has a special name: we call it the *identity element* for addition.
- It's *associative*. Suppose we have three natural numbers, $$a$$, $$b$$ and $$c$$, and we want to add them all together in that order. There's two ways we could go about it: we could first add $$a$$ and $$b$$, then add $$c$$ to whatever we get... or we could first add $$b$$ and $$c$$, then add the result to $$a$$. Saying addition is *associative* means you always get the same result.
    - As an equation, we'd write this as $$(a+b)+c=a+(b+c)$$ for all natural numbers $$a$$, $$b$$ and $$c$$ - the brackets mean 'do the thing in brackets first'. Because the order doesn't matter, we don't have to write the brackets: we can write $$a+b+c$$ without any brackets, and we're still perfectly clear, because whichever order we do it in, the result is the same.
    - Although I'm just telling you this is true, we can prove it - starting from the recursive definition for addition, and the Peano axioms. This is entirely possible, but I'm trying to leave out that level of detail. If you're curious, [a proof is here](https://proofwiki.org/wiki/Natural_Number_Addition_is_Associative#Proof_2).
- It's *commutative*. Suppose you have a natural number $$a$$, and you add $$b$$ to it. You get the same result as if you start with $$b$$, and add $$a$$ to it. In symbols, $$a+b=b+a$$ for all natural numbers $$a$$ and $$b$$. This means if we have a line of things we're adding up, we can freely swap the order if it's convenient.
	- Again, leaving out the proof, but [here's one](https://proofwiki.org/wiki/Natural_Number_Addition_is_Commutative#Proof_2).

While they sound very abstract, these rules are really helpful: they mean we can do all sorts of manipulations and equations, even with numbers we don't know precisely.

## Algebraic manipulation - or what these 'equations' are all about
As mentioned above, we're using equations. We have a symbol, $$=$$, which we can put between two different *expressions*, which are built out of natural numbers and addition. An equation might be true, such as $$2+2=4$$, or it might be false, such as $$2+3=4$$.

We also have symbols, called *variables*, that stand in for a natural number in two contexts.

In the equations above, we're using variables to simply express a general statement, such as "$$x+0=x$$ for any natural number $$x$$" - this means we're claiming you can replace $$x$$ with any specific natural number, such as $$5$$, and as long as you replace every instance of $$x$$ with the same thing, you'll get an equation that's true. [Mathematicians have a special notation for this - instead of writing 'for any natural number $$x$$' we could have written $$\forall x \in \mathbb{N}$$. I'm not using this notation because I don't want to throw too much at you at once.]

There's another situation: we can write an equation that might be true for only one or a few cases, such as $$x+2=5$$, and ask the question: are there any natural numbers that make this equation true, and if so, which natural numbers are they?

In either case, the really important rule with equations is that you can get a new equation by doing the same operation to both sides of the equation. In this case, the only thing we know how to do is adding natural numbers, so can say something like this: "For any natural numbers $$a$$, $$b$$ and $$c$$, if we know $$a=b$$ then we also know $$a+c=b+c$$". This is called the *substitution property*. (In general you talk about predicates and stuff but let's leave that alone for now.)

The other trick we have, is that if $$a=b$$ and we have some true equation that contains $$a$$, we can swap out $$a$$ for $$b$$ and the equation will still be true. So for example if we had $$2+a=5$$ and $$a=b$$, we'd also have $$2+b=5$$.

There's a few other properties: $$a=a$$ for any $$a$$ (that one's *reflexivity*), if $$a=b$$ and $$b=c$$ then $$a=c$$ (that one's *transitivity*) and if $$a=b$$ then $$b=a$$ (that's *reflexivity*).

Algebraic manipulation means starting with some equations that, for our purposes, we consider to be true, and working out what other equations might also be true by using the above rules.

The tl;dr: whatever you do to one side of an equation that changes its value, as long as you do the same thing to the other side at the same time, your equation will still be true.

## Where's the problem?

One sort of question we might want to ask is, 'what number, when added to a particular natural number, gives you a third natural number'. For example, we might have this as an equation like $$5+x=7$$, and we want to find out if there's a natural number $$x$$ that can fit there (and make the equation be true). In this particular case, there is a natural number that fits: if we set $$x=2$$, we can make the true equation $$5+2=7$$.

But there isn't always an answer. Instead, imagine we have $$7+x=5$$: there is *no* natural number that we can put in place of $$x$$ that would make this equation true.

## The trick: invent more numbers - the integers
So this is where we first use the trick we're going to use over and over as we build up maths from the ground up.

Suppose that, for a given natural number, we had a special number, which we write $$(-x)$$, with the useful property that $$x+(-x)=0$$ - adding $$(-x)$$ to $$x$$ gives the *identity element* we noticed before.

*If* we had those numbers, we could solve equations like $$x+7=5$$ in the following way: we add $$-7$$ to both sides of the equation, and we get

$$\begin{align*}x+7+(-7)&=5+(-7)\\
x+0&=5+(-7)
\\x&=5+(-7)\end{align*}$$

And in general, if we know $$y$$ and $$z$$ and want to find a value of $$x$$ in $$x+y=z$$, we would find $$x=z+(-y)$$ in the same way.

Unfortunately, there are no natural numbers that combine in this way. Add any two natural numbers together, and the only time you'll get zero is when both of the numbers you start with are also zero. So if we're going to have these kinds of useful numbers, we're going to have to start working with a bigger set of numbers.

So we **invent new numbers**. For every single natural number, we invent a new number, that acts just like a natural number under addition. Now we're dealing with a bigger set of numbers, called the *integers*. Some jargon: $$(-x)$$ is the *inverse element* of $$x$$, and since we're talking about addition, it's specifically the *additive inverse*. We also have a special name for the new numbers: the *negative* numbers.

While we have symbols for the natural numbers such as $$1$$, $$235$$ etc., we don't give the negative numbers their own symbols. Instead, we've created something called a *unary operator*, which we're writing $$-$$. This takes exactly one integer, and spits out another integer (the definition of a *unary* operator being that it operates on only one thing) that is its additive inverse. (Every integer has only one additive inverse, but we'll get to that in the next section). With that, we have a unique way to pick out the inverse of any natural number $$x$$: just $$-x$$. So for example, $$-5$$ is the additive inverse of $$5$$.

This means we can write the integers like this:

$$\ldots -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, \ldots$$

As it happens, the integers are also closed under addition: add any two integers together, and you always get another integer. We still have our identity element, $$0$$ - incidentally, should mention that zero is its own inverse, i.e. $$0=-0$$. Addition is still associative and commutative. And now, every element has an inverse. This means that the integers under addition form something called a *commutative group* (more commonly called an *Abelian group* but imo that's needlessly confusing). We'll get into that in a second.

### Subtraction

We more commonly see $$-$$ as another *binary operation*, taking *two* numbers, not just one. We can, in fact, define this 'binary' subtraction in terms of inverses. For any two integers $$a$$ and $$b$$, we can define $$a-b=a+(-b)$$, where the second $$-$$ sign is the unary 'give me the additive inverse please' operator we defined above.

Although it is a binary operation, subtraction doesn't have all the nice properties that addition does. It is *not* associative: in general, $$(a-b)-c$$ is *not* equal to $$a-(b-c)$$. People still write expressions like $$a-b-c$$ and there's a rule (often unspoken) that we work from left to right: this is called being *left-associative*. So if you see $$a-b-c$$ you're supposed to interpret it as $$(a-b)-c$$. We can mix and match $$-$$ and $$+$$, and the same left-associativity applies: e.g. $$a+b-c+d-e$$ is read as $$(((a+b)-c)+d)-e$$.

## What we did - what is a group?

We had a *set* of *elements* (the natural numbers) and a *binary operation* (addition). We noticed that addition had the nice properties: closure, associativity, existence of identity, and commutativity. But we don't have inverses. So we created a new, bigger set of numbers, where we'd have all those properties.

Closure, associativity, identity and inverses are called the *group axioms*. If you have a set of numbers and a binary operation that satisfy them, you call it a *group*.

Groups are interesting because a whole fucking lot of interesting mathematical behaviour can come out of just these four things. Their axioms are useful because they make algebra a whole lot easier, or in other words, when mathematicians look at mathematical structures that *don't* have all of these properties, things get *very* fiddly and unintuitive. (Not that groups are necessarily intuitive...)

We might say, OK, that's lovely and all, but why should we want to build groups? Somehow it happens that these axioms lead to mathematical structures that aren't just easy to mess around with, but also very useful for describing our world.

We can prove some interesting facts from just these axioms. For example, we can show that a group has only one identity element - that is, if we introduce another identity element, we can prove it's equal to the original one. And we can prove that every element has exactly one inverse - if it had two inverses, we can prove they're equal to each other.

So that's the basic technique: start with numbers, find out an operation, check which of the group axioms apply, and if there's something missing, fill in the gap with new numbers to make a bigger set of numbers where all the axioms apply.

### How to work out consequences of group axioms

I'm throwing this in because I'd be a hypocrite to mention something like that without saying why, but I don't want to get too caught up in the tangent on group theory.

OK, so this time, instead of working specifically with addition, we'll work with an arbitrary operation $$a\bullet b$$ that satisfies the group axioms.

Suppose $$e$$ and $$f$$ are identity elements. But then we can use the definition of an identity element $$e \bullet x = x$$ for all $$x$$ to just go $$e = e \bullet f = f$$ so $$e=f$$, they're the same element.

A slightly more complicated case: suppose an element $$x$$ has two inverses, $$y$$ and $$z$$, so $$x \bullet y = x \bullet z = e$$ where $$e$$ is the identity element. We can crunch the group axioms like:

$$\begin{align*}y &= y \bullet e && \text{since $e$ is the identity element} \\
&= y \bullet (x \bullet z) \qquad && \text{using $x \bullet z = e$} \\
&= (y \bullet x) \bullet z && \text{since in a group, $\bullet$ must be associative} \\
&= e \bullet z && \text{since $y$ is an inverse of $x$} \\
&= z &&\end{align*}$$

so from this long chain of things that are equal to each other, we can connect up the ends and say $$y=z$$ i.e. the two 'different' inverses are the same.

There's all kinds of similar proofs you can do, proving that for example a 'left-inverse' is the same as a 'right-inverse', but we'll leave it there.

# Step 2: multiplication and fractions

So far we've looked at one binary operation (subtraction just being addition in disguise). But now we've built up the basic ideas, we can proceed a lot more quickly.

We'll go back to the natural numbers for now. In this case, here's the definition: if you multiply something by a natural number, say $$n$$, you take $$n$$ copies of that thing and add them all together.

Let's write that in symbols. Suppose you have two natural numbers $$x$$ and $$y$$, then we define the multiplication operation (which has symbol $$\times$$ or $$\cdot$$) like this:

$$x\times y = \underbrace{x + x + \ldots + x + x}_\text{$y$ times}$$

So in this particular case, multiplication is defined in terms of another operation.

(The result of multiplying two numbers together is called the *product* of the two numbers, much as the result of adding two numbers together is called the sum.)

In fact, if we want to be more precise about this, we can do it recursively. For any natural numbers $$m$$ and $$n$$, we say $$m \times 0 = 0$$ and $$m \times (n+1) = (m \times n) + n$$. (Expressing it that way doesn't mix up 'ordinal and 'cardinal' numbers, and is useful for proving properties of multiplication).

Having defined multiplication, there are two sets of questions to ask. We want to know, how does it square with the group axioms we just talked about? And also, how does it interact with the operation we already have, addition?

Multiplication turns out to be associative and commutative, and multiplying two natural numbers produces a new natural number. We also have an identity element: the natural number $$1$$ happens to be such that $$1 \times m = m \times 1 = m$$ for any natural number $$m$$.

When it comes to interacting with addition, there's an interesting property: multiplication is distributive over addition. This means, for any natural numbers $$m$$, $$x$$ and $$y$$, we get $$m \times (x + y)= (m \times x) + (m \times y)$$. In other words, if we're summing up some natural numbers, and we multiply the result by some natural number $$m$$, we get the same thing as if we multipled each of the individual natural numbers by $$m$$ first, then summed up the results.

I realise I'm kind of pulling these properties out of a hat; I will do another post to show you you prove them later, if people are interested. You can see proofs of [associativity](https://proofwiki.org/wiki/Natural_Number_Multiplication_is_Associative), [commutativity](https://proofwiki.org/wiki/Natural_Number_Multiplication_is_Commutative) and [distribution over addition](https://proofwiki.org/wiki/Natural_Number_Multiplication_Distributes_over_Addition) on proofwiki too.

## Multiplication and integers

All right, that's all well and good for the *natural* numbers, but what about the negative numbers we just created? Well, when we bring in the rest of the integers, want to keep all the properties we already have: associativity, commutativity, distributivity etc.

That distributive property turns out to be what we want. Let's create a multiplication involving a negative number, $$-x$$, and some other integer $$y$$. So we want the value of $$(-x)\times y$$.

Let's add it to another product: $$(-x)\times y + x \times y$$. Running the distributive property in reverse, we can find this expression is equal to another one:

$$(-x)\times y + x \times y = ((-x)+x)\times y$$

But hold on, $$(-x)+x=0$$, so this is equal to $$0 \times y$$, which is equal to $$0$$. So, we have

$$(-x)\times y + x \times y = 0$$

and that means $$(-x)\times y = - (x \times y)$$, i.e. multiplying something by a negative number is the negative of multiplying it by the corresponding positive number. This, combined with the inverse of an inverse taking you back to the original, is where the rule 'negative times positive makes negative, negative times negative makes positive' comes from.

## The inverse of multiplication: reciprocals

Anyway, we're back in the same boat: we've got three of the group axioms (and commutativity). What about the fourth one, inverses?

As before, we're looking at equations like $$5 \times x = 35$$. In this case, there is an integer answer, $$x=7$$. This also applies to some situations involving negative numbers, e.g. $$-5 \times y = 20$$, solved by $$y=-4$$.

But as before, in many cases we can't solve equations like this. For example, if we have $$2 \times z = 5$$, there is no integer that answers that question.

Once again, our solution is to introduce a new kind of number: reciprocals, and products of reciprocals with other numbers. By doing this, we've now moved from the *integers* to a new set of numbers called the *rational numbers*.

We'll start with 'reciprocals', because they're the basic building block of the rational numbers. What we're doing is introducing *multiplicative inverses* of the integers (except zero), just as above we introduced additive inverses of the natural numbers to create the integers.

As before, we make up a unary operator that takes a number (that isn't zero), and gives us its multiplicative inverse, and use that to identify the new numbers.

There are actually two common notations for the multiplicative inverse of a number, both special cases that connect up to much broader notation systems. Since we're working up towards fractions, we'll do it this way: the inverse of $$x$$ is $$\frac{1}{x}$$, which is pronounced 'one over x'. (The other way is to write $$x^{-1}$$, pronounced 'x to the minus one').

What makes a reciprocal? Well, they're numbers, that we want to be added to and multiplied by the integers. The defining property: if you multiply a number (that's not zero) with its reciprocal, you get $$1$$. That is, for any rational number $$x$$ *except zero*, we say $$x \times \frac{1}{x}=1$$.

The zero thing is a big deal but we'll get to it later.

## From reciprocals to fractions

OK cool, what if you multiply a reciprocal by some *other* number? Can we, from just the definition of reciprocals, and trying to keep all the other properties of multiplication intact, work out the other properties?

Let's first note: multiplying reciprocals by natural numbers still means adding up copies of the reciprocal, just like multiplying other kinds of number. To see this, if $$x$$ is a natural number, and $$y$$ is some integer, and requiring that multiplication is still distributive over addition,

$$\begin{align*}x \times \frac{1}{y} &= (x \times 1) \times y \\
&=(\underbrace{1+1+...+1}_\text{$x$ copies})\times \frac{1}{y}\\
&=\underbrace{\frac{1}{y}+\frac{1}{y}+\ldots+\frac{1}{y}}_\text{$x$ copies}
\end{align*}$$

(In fact we could use the same argument to show that multiplying *any* kind of number with a natural number is the same as adding up that many copies.)

Anyway, since multiplication is commutative, supposing we had a whole bunch of reciprocals and other numbers multiplied together, we can group up the two different sides. For example:

$$a \times \frac{1}{b} \times \frac{1}{c} \times d \times e \times \frac{1}{f} = (a \times d \times e) \times \left(\frac{1}{b} \times \frac{1}{c} \times \frac{1}{f}\right)$$

The final piece we need to create fractions is to see what happens when we multiply two reciprocals together. Let's start with $$1$$, and factor in two things that are equal to $$1$$ based on some nonzero integers $$x$$ and $$y$$.

$$1 = 1 \times 1 = \left(x \times \frac{1}{x}\right) \times \left(y \times \frac{1}{y}\right)$$

Then, let's rearrange, using the fact that we want to keep multiplication commuative and associative.

$$x \times y \times \frac{1}{x} \times \frac{1}{y} = 1$$

Group those terms up and we see this takes the form of a definition of a reciprocal, and in fact, the reciprocal of $$x \times y$$ is $$\frac{1}{x} \times \frac{1}{y}$$...

$$(x \times y) \times \left(\frac{1}{x} \times \frac{1}{y}\right) = 1$$

So that means,

$$\frac{1}{x} \times \frac{1}{y} = \frac{1}{x \times y}$$

With this, we're ready to introduce a new notation: fractions. Instead of always writing $$1$$ at the top of the fraction, we can write any number. So a fraction looks like this:

$$\frac{x}{y}$$

There are some special words: $$x$$ (the top number) is called the *numerator*, and $$y$$ is called the *denominator*. However, since most people reading this are gay as fuck, I'm going to call them 'top' and 'bottom'. A fraction just means: the number on the top, multiplied by the reciprocal of the number on the bottom.

In other words, a fraction is saying: "here is a number, which if you multiply it by what's on the bottom, you get whatever's on the top".

For example, $$\frac{4}{5}$$ is a fraction; if you multiply $$\frac{4}{5}$$ by $$5$$, you get $$4$$.

## Some cleanup

We've been writing a whole lot of $$\times$$ signs, haven't we? In fact, in mathematical writing, it's common to drop them. If you've got two variables sitting next to each other without a symbol between them, we assume it means multiplication. That means, $$xy = x \times y$$. (This doesn't apply to number symbols. Writing $$1$$ and $$2$$ next to each other doesn't mean $$1\times2$$, it means twelve. But we'll build that up later.)

Additionally, we can introduce a rule of priority, to save us from writing brackets. When we have an expression with multiplication/fractions and addition/subtraction, we evaluate the multiplication/fractions before the addition/subtraction. That means that, for example, instead of writing

$$(a \times b) + (c \times d \times e) + (b \times f)$$

we can just write

$$ab + cde + bf$$

and it will be clear what we mean.

Sometimes I'll still write the multiplication sign to try to be clear.

## Manipulating fractions

Using the properties of reciprocals we found above, we can break up any fraction into its constituent parts. For example, if we have products on the top and bottom of a fraction...

$$\frac{abc}{def}= a \times b \times c \times \frac{1}{d} \times \frac{1}{e} \times \frac{1}{f}$$

Important cases: if the top and bottom are equal, the fraction's value is exactly $$1$$: $$\frac{x}{x} = x \times \frac{1}{x} = 1$$. And if the bottom is $$1$$, then the fraction is equal to the top: $$\frac{x}{1}=x\times\frac{1}{1}=x$$.

So, suppose we're multiplying two fractions. We're most of the way there; we can just use the commutativity of multiplication. For example:

$$\begin{align*}\frac{a}{b} \times \frac{c}{d} &= a \times \frac{1}{b} \times c \times \frac{1}{d} \\
&= a \times c \times \frac{1}{b} \times \frac{1}{d} \\
&= \frac{ac}{bd}\end{align*}$$

In short, since we're requiring multiplication commutes for reciprocals (in the same way it does for integers), **when you multiply two fractions, you multiply the tops together to get the new top, and the bottoms together to get the new bottom, and get a new fraction**.

An important application of this trick is cancelling or introducing common factors. We see...

$$\frac{ab}{cb}=\frac{a}{c}\times\frac{b}{b}=\frac{a}{c}$$

So we can multiply the top and bottom of a fraction by anything we please, as long as we do the same to both.

This, however, means we can write the same rational number (fraction) in multiple ways. For example, $$\frac{1}{2}$$ and $$\frac{2}{4}$$ have the same value, since you can take out a factor of $$2$$ from the top and bottom of the second fraction. In fact, there are *infinitely* many ways to write a rational with the same value using fraction notation: a different way to write the fraction for every integer (except zero).

In other words, while any two integers uniquely determine a rational number, a rational number does not uniquely give us two integers to represent it as a fraction. However, most of the time we do try to write fractions in 'reduced' form, i.e. with top and bottom as nonzero integers that are as close to zero as possible, and with either neither negative, or only the top negative. We'd rather write $$\frac{1}{2}$$ than $$\frac{8}{16}$$ or $$\frac{-5}{-10}$$ even though they all have the same value. This 'reduced fraction' form *is* unique for any rational number.

What about when you add fractions together? The easy case is when they have the same bottom, so we can just use the 'distributes over addition' rule.

$$\frac{a}{c} + \frac{b}{c} = (a+b)\frac{1}{c} = \frac{a+b}{c}$$

So **when you add two fractions, if they have the same bottom, you add the tops together and get a new fraction**.

But what about when they *don't* have the same denominator? In this case, you can proceed in the following way...

$$\begin{align*}\frac{a}{b}+\frac{c}{d} &= \frac{ad}{bd} + \frac{cb}{bd} && \text{rescale each fraction by denominator of the other}\\
&= \frac{ad+bc}{bd}&&\text{fractions now have the same denominator}\end{align*}$$

So, **you just make sure the fractions have the same bottom, by multiplying top and bottom of each fraction by the other fraction's bottom**.

## The problematic case: division by zero

'Except for zero'! Except for zero! What's so bad about zero?

So yeah, zero does not have a reciprocal. That is because zero multipled by any integer, and indeed any of the rational numbers we've just defined, always produces zero. What if zero did have a reciprocal? The whole system would break down; everything would be equal to zero. $$y = y \times 0 \times \frac{1}{0}=0$$ because anything multiplied by $$0$$ is $$0$$ from the way we defined multiplication in the first place. So, strictly speaking, the rational numbers under multiplication *don't* form a group, because *not every element* has an inverse.

Fortunately, groups - while particularly nice - are not the only algebraic structure we like. What we have here is not a group but a commutative [*monoid*](https://en.wikipedia.org/wiki/Monoid), which is like a group but doesn't require there to be inverses for every element. Zero is called an *absorbing element*. However, drop zero and the rational numbers under multiplication *would* be a group. So, as long as you don't try to divide by zero, just about all the useful features of groups still apply.

In fact, the rational numbers with addition and multiplication form an algebraic structure called a [*field*](https://en.wikipedia.org/wiki/Field_(mathematics)). That means it's a bunch of other things too, like a commutative ring.

## How do you compare rational numbers?

With the natural numbers, they came in a nice order. With the integers, they can be fitted into that order pretty nicely, extending off in the other direction: if $$x$$ and $$y$$ are natural numbers and $$x$$ is greater than $$y$$, then $$-x$$ is less than $$-y$$. We actually have symbols for this: $$x>y$$ means '$$x$$ is greater than $$y$$' and $$x<y$$ means '$$x$$ is less than $$y$$'. These 'inequality' signs can be used very much like the equals sign.

What about rational numbers? Can you put them in a nice order? Can you compare them with the integers?

It turns out you can, in fact. In the integers, if $$x>y$$ then $$x-y>0$$. So to find out which integer is bigger (or if they're the same integer), subtract one from the other and find out if the answer is greater than zero, less than zero, or exactly zero.

We can do the same thing with fractions, since we've worked out how to add (and therefore subtract) fractions. This means we can work out whether a fraction is bigger than an integer as well.

For example,

$$\frac{5}{2}-2=\frac{5\times 1}{2\times 1} - \frac{2 \times 2}{1 \times 2}=\frac{5}{2}-\frac{4}{2}=\frac{1}{2}>0$$

so $$\frac{5}{2}>2$$.

Indeed, fractions fill up a lot of the 'inbetween' spaces on the number line. There are, in fact, infinitely many rational numbers between any two distinct rational numbers. (We're not going to go into the different sizes of infinity here.)

## Where has this gotten us?

We can now write much more complicated equations, and we're getting closer to having all the tools to understand science. But there's one more crucial piece: exponents.

First, a couple of loose ends:

### What about decimals?

In school, fractions, decimals and percentages are usually introduced at the same time - which makes sense, as they're different ways of representing the idea of 'part of a whole'. We can use fractions to build up decimals and percentages.

'Decimals' are actually a special case of the base $$b$$ representation of a number. You may also have heard of *binary* numbers, *octal* numbers, or *hexadecimal* numbers. They all work on the same principle.

We can define decimals now, but it will be easier to do so once we've gotten to *exponents* in the next section.

### What about the division sign?

Ah, the division sign, $$\div$$. If you're on a computer, it might be represented with a $$/$$ instead.

Really, the *only* time you should be using it is if you're on a computer. Computers process expressions in a linear way, processing each symbol at a time, so it makes sense to have a division operation. But if we're writing equations for humans to read, it's just about always clearer to draw a fraction.

Like subtraction, if you have a division sign, it's not associative, so in any sort of complicated expression, you will almost certainly need to use brackets to make it clear what's being divided by what. At which point... use a fraction! It looks nicer.

Like, on the one hand,

$$(x + ab - 12) \div (ab + fg + 2)+(abc)\div(be)$$

on the other,

$$\frac{x + ab - 12}{ab+fg+2}+\frac{abc}{be}$$

One of those is easier to read :p

# Step 3: exponents

So, we invented multiplication by starting in a simple case: when you multiply by a natural number, you add something up repeatedly.

$$x\times y = \underbrace{x + x + \ldots + x + x}_\text{$y$ times}$$

What about if we wanted to multiply by a number $$x$$ certain number of times? Something like this...

$$\underbrace{x \times x \times \ldots \times x \times x}_\text{$y$ times}$$

The standard notation for this is to use a superscript:

$$x^y = \underbrace{xx \ldots xx}_\text{$y$ times}$$

...when $$y$$ is a natural number, anyway. As before, we'll start with that case, and then we'll build up to cases where $$y$$ is *not* a natural number: that is, what it means when it's negative, and when it's a fraction.

Previously, we had addition and multiplication. Now we have *exponentiation*. That's a mouthful, so it's usually called 'powers'. You pronounce $$x^y$$ as '$$x$$ to the power of $$y$$'.

We're going to break away from the whole 'group axioms' thing a bit here. There are two major respects where exponentiation is *not* like multiplication and addition: it is not commutative, and worse, it's not associative. In general, $$x^y$$ is *not* equal to $$y^x$$, and $$x^{\left(y^z\right)}$$ is not equal to $$\left(x^y\right)^z$$.

What about the other axioms? For now, we'll stick to natural number powers.

- closure: yes. Take any rational number to any natural number power, and you get another rational number, because multiplication is closed.
- identity element: yes - sort of. $$x^1=x$$, so $$1$$ is the *right-identity* element.

But, we're not really in group-like territory here, or even commutative monoid territory. Still, there *are* some valuable properties to find.

## Power identities - no, put the Foucalt book down, not that kind of power or identity...

For example, what if we take two different exponents of a number, and multiply them together? e.g. $$x^a x^b$$ where $$a$$ and $$b$$ are natural numbers. Well, what we have is:

$$\begin{align*}x^a x^b &= \underbrace{xx\ldots xx}_\text{$a$ times} \underbrace{xx\ldots xx}_\text{$b$ times} \\
&= \underbrace{xx\ldots xx}_\text{$a+b$ times}\\
&= x^{a+b}\end{align*}$$

You can do that more rigorously with the recursive definition and induction if we want to, but this should give the picture of what's going on. So, in short, for natural numbers $$a$$ and $$b$$, $$x^a x^b = x^{a+b}$$. Sweet!

The next property: a power of a power. Again, I'll illustrate how it works in a somewhat intuitive way, but you can also prove it more rigorously by induction.

$$({x^a})^b= \underbrace{\begin{aligned}&xx \cdots xx  \\
\times &xx \cdots xx\\
&\phantom{xxx}\vdots \\
\times & xx \cdots xx\end{aligned}}_\text{$a$ times}\!\!\left.\vphantom{\begin{aligned}x\\x\\\vdots\\x\end{aligned}}\right\rbrace \scriptsize \text{$b$ times} \normalsize = x^{(ab)}$$

The final property: exponentiation distributes over multiplication. That is, $$(ab)^c = a^c b^c$$. To show that, using the fact that multiplication commutes:

$$\begin{align*}(ab)^c &= \underbrace{(ab)(ab)\ldots (ab)(ab)}_\text{$c$ times} \\
&= \underbrace{aa\ldots aa}_\text{$c$ times}\underbrace{bb\ldots bb}_\text{$c$ times}\\
&= a^c b^c\end{align*}$$

A couple of these powers have special names. $$x^2$$ is called '$$x$$ squared', and $$x^3$$ is called '$$x$$ cubed'. (This is because the area of a square of side length $$x$$ is $$x^2$$, and the volume of a cube of side length $$x$$ is $$x^3$$.)

Previously, when we extended our initial definition to a new situation, what we were trying to keep were the group axioms. This time, we're trying to keep the above identities intact.

Let's see what happens...

## Zeroth power

While I've talked about natural numbers above, it's not all that obvious what the case would be for the zeroth power - the 'empty product'. Actually, it follows reasonably easily from the identities above. For some numbers $$x$$ and $$a$$, we can do this trick:

$$x^a = x^{a+0} = x^a x^0$$

which means we must have $$x^0=1$$ regardless of what $$x$$ is. (Unless it's zero? That's controversial, but there are good reasons to define $$0^0=1$$ as well.)

## Negative powers

Let's first move from the natural numbers to the integers. We want to figure out what it means to have a *negative* power, given the above rules about *natural number* powers.

It turns out to be simple enough. From what we've got above with $$x^0=1$$...

$$x^0 = x^{a+(-a)}=x^a x^{-a}=1$$

so divide out $$x^a$$ and get $$x^{-a}=\frac{1}{x^a}$$ - so in order to keep our identities intact, a negative power must be the reciprocal of a positive power. That's why, previously, I said you could also write the reciprocal of $$x$$ as $$x^{-1}$$.

That also means we've drawn a connection between the additive inverse (negative numbers) and the multiplicative inverse (reciprocals). That feels pretty reasonable.

## Fractional powers

This is where we end up having to invent a new kind of number.

So, much as previously we wanted to solve equations like $$5x=8$$, and had to introduce fractions in order to always have an answer, let's look at equations like $$x^2=9$$. Sometimes, we have an answer with a rational $$x$$ - in general, in fact, if the exponent is even, we have *two* solutions, with opposite sign. For this example, the solutions are $$x=3$$ and $$x=-3$$. Another case: $$x^3 = \frac{1}{27}$$. That has one solution, $$x=3$$, also a nice rational number.

As ever, though, most of the time we don't have a nice rational solution. Consider for example $$x^2=2$$. There is no rational number we can set $$x$$ to that will make this true. (Actually *proving* that can be done in [a variety of ways](https://en.wikipedia.org/wiki/Square_root_of_2#Proofs_of_irrationality).) And this is true for the vast majority of equations like this we could think up.

Now, think about what might happen if we're allowed fractional powers. Take both sides of $$x^2=2$$ to the $$\frac{1}{2}$$th power... we get $$(x^2)^\frac{1}{2}=x^{2\times\frac{1}{2}}=x=2^\frac{1}{2}$$. So, we'd be able to use fractional powers to solve these kinds of equations. Which means, we're introducing a new type of number...

There's a name for numbers that solve equations like $$x^n=k$$, and that is that $$x$$ is 'the $$n$$th root of $$k$$'. Some of them have special names: with $$n=2$$ we call it the 'square root', and with $$n=3$$ we call it the 'cube root'.

There's also a special notation for these. We can write 'the $$n$$th root of $$k$$' as $$\sqrt[n]{k}$$ - and when $$n=2$$ we don't bother to write $$n$$, we just write $$\sqrt{k}$$.

So we can identify these fractional powers with roots: $$x^\frac{1}{n}=\sqrt[n]{x}$$.

There's an ambiguity here: as we mentioned, sometimes there are *two* solutions to $$x^n=k$$. In general, unless we say otherwise, the fractional power/radical notation refers to the *positive* root, and the other solution is $$-x^\frac{1}{n}$$.

So we've introduced a new type of number here with these roots, and in the process, we've moved from (deep breath) the *rational numbers* to the *algebraic numbers*.

Although roots of positive numbers are not rational numbers, they can be compared to rational numbers. In fact, you can find a rational number as close as you like to any particular algebraic number, just not exactly the same. They all fit onto one number line.

Roots can be added and multiplied. The notable thing is that, keeping the exponentiation identities means $$a^c b^c = (ab)^c$$ so $$x^\frac{1}{2} y^\frac{1}{2}=(xy)^\frac{1}{2}$$ so rewriting that with the other notation, $$\sqrt{x}\sqrt{y}=\sqrt{xy}$$. That also means that if we're multiplying a root by another number, we can bring it inside the root by taking it to an appropriate power:

$$x y^\frac{1}{n} = x^\frac{n}{n} y^\frac{1}{n} = (x^n)^\frac{1}{n} y^\frac{1}{n} = (x^n y)^\frac{1}{n}$$

or with the other notation:

$$x \sqrt[n]{y} = \sqrt[n]{x^n} \sqrt[n]{y} = \sqrt[n]{x^n y}$$

which is sometimes a useful thing to do. Otherwise, they can be a bit of a pain.

# Recap

We started with the natural numbers, and addition.

We wanted to solve equations like $$x+5=3$$, so we introduced a new type of number: negative numbers, by giving every natural number an additive inverse. That meant we're now dealing with a larger set of numbers, called the integers.

We created multiplication for natural numbers based on the idea of repeating addition over and over. Then, we worked out what happens if we multiply negative numbers.

We wanted to solve equations like $$5x=2$$, so we introduced a new type of number: reciprocals, by giving every integer a multiplicative inverse. Then we worked out what happens if you multiply and add reciprocals, and created fractions. That meant we're now dealing with a larger set of numbers, called the rational numbers.

We created exponentiation for natural number exponents based on the idea of repeating multiplication over and over. Then, we worked out what happens if we have negative exponents, which turned out to relate to reciprocals.

We wanted to solve equations like $$x^2=2$$, and give meaning to fractional powers, so we introduced a new type of number: roots. That meant we're now dealing with a larger set of numbers, called the algebraic numbers.

We are most of the way to the *real numbers*. But first, we need to come back to the subject of decimals. Or, to be more strict, positional notation.

# Sum and product notation

So suppose we have some expression, which we can use to take a number $$i$$ and get a new number $$f(i)$$. So, for example, $$f(0)$$, $f(2)$$, $$f\left(\frac{1}{3}\right)$$, $$f(\sqrt{2})$$. For example, we might have $$f(i)=i^3 + 2i$$; then $$f(0)=0$$, $$f(2)=12$$, $$f\left(\frac{1}{3}\right)=\frac{1}{27}+\frac{2}{3}=\frac{19}{27}$$, $$f(\sqrt{2})=2^\frac{3}{2}+2^\frac{3}{2}=2^\frac{5}{2}=4\sqrt{2}$$.

Suppose you want to evaluate this expression at a variety of different integer values of $$i$$ (called terms of the sum), and add up the result. Mathematicians have a special notation for this. When $$n>m$$, and both are integers...

$$\sum_{i=m}^n f(i) = f(m) + f(m+1) + \dots + f(n-1) + f(n)$$

This turns out to be useful in a whole variety of cases. There's a similar notation for products:

$$\prod_{i=m}^n f(i) = f(m) \times f(m+1) \times \dots \times f(n-1) \times f(n)$$

As an example of the kind of thing you can say with this notation is the formula for the sum of natural numbers:

$$\sum_{i=1}^n i = \frac{n(n+1)}{2}$$

which says 'if you add up all the integers from one up to $$n$$, the answer you get is $$n$$ times $$n+1$$ divided by $$2$$'.

I'm introducing this now because it will make it easier to define positional notation.

Using commutativity and distribution over addition, the product of two sums is the sum of all the possible products of their terms:

$$\left(\sum_{i=m}^n f(i)\right)\times\left(\sum_{j=p}^q g(j)\right)=\sum_{i=m}^n\left(\sum_{j=p}^q f(i)g(j)\right)$$

which is also saying that some double sums are separable into a product of two sums.

# Decimals/positional notation

OK, here's the ingredients: a nonzero natural number $$b$$ that's called the *base* of our system, and a list of natural numbers called *digits*, identified by subscripts called *indices* (each one is an *index*): $$d_0, d_1, d_{-1}$$ and so on; in general, $$d_i$$. Suppose the smallest subscript is $$m$$ and the largest is $$n$$.

Then, we can calculate a number corresponding to these digits like so:

$$ d = \sum_{i=m}^n d_i b^i$$

That means we have a different way to express numbers: we write all the digits next to each other, and then multiply each one by a power of $$b$$, going from left to right. To help place ourselves relative to the indices, we put a dot called the *radix point* (when $$b=10$$, the *decimal point*) right after d_0. So it goes like

$$d_n d_{n-1} \dots d_{2} d_1 d_0 . d_{-1} d_{-2} \dots d_{m+1} d_{m}$$

If there's no radix point, we assume it's just to the right of the final digit.

Why does the radix point go there? The point marks the place where we go from numbers greater than 1 to numbers less than 1. If there's nothing to the right of the radix point, we're talking about an integer. If there's nothing to the left, we're talking about a number smaller than 1.

When $$b=10$$, we call this a decimal representation. (When $$b=2$$, we call it binary; when $$d=8$$, octal; when $$d=16$$, hexadecimal).

That's a very abstract way to introduce the subject I realise! But you've probably already used decimal numbers every day; I wanted to introduce them like, properly. And it will help us move to the real numbers.

Here's an example: the decimal number $$907.498$$. Let's expand what that means...

$$9 \times 10^2 + 0 \times 10^1 + 7 \times 10^0 + 4 \times 10^{-1} + 9 \times 10^{-2} + 8 \times 10^{-3}$$

So we have here $$n=2$$ and $$m=-3$$, and $$d_2=9, d_1=0, d_0=7, d_{-1}=4$$ etc.

May be worth noting, we're still using positional notation in this 'expanded' example here, every time we write 'ten' as $$10$$. That's because our culture doesn't *need* a special symbol for 'ten' if we're always using decimal.

Here's another example: the binary number $$110110.01_2$$ (the little subscript 2 means 'base 2'). Let's expand it out, and then convert it into decimal.

$$\begin{gather}1 \times 2^5 + 1 \times 2^4 + 0 \times 2^3 + 1 \times 2^2 + 1 \times 2^1 + 0 \times 2^0 + 0 \times 2^{-1} + 1 \times 2^{-2} \\
= 32 + 16 + 4 + 2 + 0.25 \\
= 54.25\end{gather}$$

## Positional notation and fractions

Numbers in positional notation can be transformed into a fraction. A form of this fraction with integer top and bottom is...

$$\frac{\sum_{i=m}^n d_i b^{i-m}}{b^{-m}}$$

That's kind of hard to understand, but for example, using $$907.498$$ again, we get

$$907.498 = \frac{907498}{1000}$$

We've written the top and bottom with positional notation as well.

We've gone one way, from positional notation to fractions; what about the other? We certainly can, but it's not always easy, and if we allow ourselves infinitely many digits, we're not actually guaranteed to have only one answer! We'll come back to that.

But if we restrict ourselves to writing *integers* in positional notation, we are guaranteed a unique representation in each basis. There's a proof of that [here](https://proofwiki.org/wiki/Basis_Representation_Theorem).

## What can you do with positional notation?

You're probably already used to doing calculations in positional notation, indeed the idea of *not* doing that probably seems kind of silly, but let's see *why* it's so helpful - following from the properties such as commutativity and associativity.

First of all, adding two numbers together. Suppose we have one number $$x$$ with digits $$x_i$$ and another number $$y$$ with digits $$y_i$$. We'll say all the digits are between $$m$$ and $$n$$, padding by zeroes if necessary (so e.g. if we're adding 1000 and 2 we would pad 2 out to 0002). Then when we add them together, we can rearrange them using the fact addition is commutative, to add corresponding digits together:

$$x+y = \sum_{i=m}^n x_i b^i + \sum_{i=m}^n y_i b^i = \sum_{i=m}^n (x_i + y_i) b^i$$

That doesn't necessarily immediately give us the representation of $$x+y$$, because $$x_i+y_i$$ isn't necessarily less than $$b$$. But $$x_i+y_i$$ is more than $$b$$, we can subtract some multiple $$nb$$ from it, and add $$n$$ to $$x_{i+1}+y_{i+1}$$, repeating as necessary until we get a representation. You've done this, I'm sure, without thinking about it this way; the point is that this - adding stuff up, digit by digit - comes from commutativity of addition, and from multiplication distributing over addition.

Similarly, when you multiply two numbers together, you can use the digits with appropriate powers of 10. Since we have a product of sums...

$$x \times y = \left(\sum_{i=m}^n x_i b^i\right) \left(\sum_{j=p}^q y_j b^j\right) = \sum_{i=m}^n \sum_{j=p}^q x_i y_j b^{i+j}$$

so often when you work out a long multiplication, you pair up the digits and multiply them, shift them by appropriate powers of 10, and add them up.

## How do you find the positional notation for any old number?

