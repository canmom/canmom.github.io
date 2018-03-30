---
title: How does electromagnetism give rise to light?
excerpt: A course of leading questions (WORK IN PROGRESS)
layout: article
categories: physics
---
**please note that this course is a work in progress**

## Introduction

You are reading this page with light\*: *electromagnetic waves* produced by your computer monitor passing through the lens in your eyeball and interacting with your retina.

In this quiz we'll see how the equations of electromagnetism we've been investigating give rise to self-propagating bits of 'electromagnetic stuff' that spread out and move through space: in other words, we're finding *wave solutions* to the equations of electromagnetism.

From this we can build up a unified understanding of phenomena ranging from radio communications to light to certain kinds of radioactive decay.

\*Unless you are reading this page with a screen reader! In that case, light is probably still being used to transmit the web page data to you via optical fibers, and the physics of transmission lines is closely related to the wave solutions we're studying here.

*This course assumes familiarity with vector calculus, and knowing Maxwell's equations are a thing that exist.*

## What is a wave solution?

A wave solution is a mathematical function that moves through space as time changes. Let's have a look at what that entails.

Suppose you have some function, $$f_0(x)$$ of position in space $$x$$ - the precise values don't particularly matter.

We'd like the values of this function to move as time changes: in other words, we want to make a new function of *two* values, space and *time*.

Let's imagine that at time $$t$$, the function we want to describe turns into a new function $$f_t(x)$$. So the problem we're trying to solve is finding the values of $$f_t$$ from the $$f_0$$ and the time $$t$$.

## Translation as a function of time

We'd like the speed the function moves to be something we can vary. Let's call it $$c$$, so the graph of the function $$f_t(x)$$ should be the same as the graph of $$f_0(x)$$ translated a distance $$ct$$ in the positive $$x$$ direction.

Which expression for $$f_t(x)$$ has this property?

 - $$f_t(x)=f_0(x+ct)$$
 - $$f_t(x)=f_0(x-ct)$$
 - $$f_t(x)=f_0(x)+ct$$
 - $$f_t(x)=f_0(cx-t)$$

{% capture solution1 %}

Think about the case $$x=0$$. If we have translated $$f_0(x)$$ a distance $$ct$$ in the positive $$x$$ direction, then $$f_t(ct)$$ should take the same value as $$f(0)$$. This property is satisfied only by $$f_t(x)=f(x-a)$$.

Does it work for other points? Yes: this expression says, if we want to know the value of $$f_t(x)$$, look at the value of $$f_0$$ a distance $$ct$$ in the negative $$x$$ direction.

We could also write this as $$f_0(x+a)=f_t(x)$$.

The other solutions represent possible mistakes:

 - $$f_t(x)=f_0(x+ct)$$ represents translation in the *negative* $$x$$ direction - though this is also a wave solution and we shouldn't forget it.
 - $$f_t(x)=f_0(x)+ct$$ represents translation in the direction of positive $$f$$ - imagine the graph slowly rising into the air. It also probably has a dimension mismatch!
 - $$f_t(x)=f_0(cx-t)$$ represents translation in the correct direction, but with a speed of exactly 1 and with an additional scaling in the $$x$$ direction by a factor of $$c$$.

{% endcapture %}

{% include hidden.html content=solution1 id="solution1" title="Solution" %}

## Differential equations

When we describe the universe, we try to do so in a way that is *local*, dealing with the values of a quantity and its differentials only at a particular point at a time. This naturally connects to an area of maths called differential equations.

A natural question, then, is what kind of differential equations have wave solutions?

For simple systems, with only a couple of variables, we can describe their behaviour with an ordinary differential equation such as the simple harmonic oscillator equation

$$\df{^2f}{t^2}=-\omega^2 t$$

However, because we're now dealing with functions of two or more variables, we are going to need a partial differential equation instead.

## The wave equation

The [simplest wave equation](https://brilliant.org/wiki/wave-equation/) - generally just called 'the wave equation' - looks like this:

$$\frac{\partial^2 f}{\partial t^2} - c^2 \frac{\partial^2 f}{\partial x^2} = 0$$

It is [possible to show](http://mathworld.wolfram.com/dAlembertsSolution.html) that the general solution to this equation is $$f(x,t)=g(x-ct)+h(x+ct)$$. That is, two functions $$g$$ and $$h$$, one moving in the positive $$x$$ direction, the other in the negative.

{% capture dAlembert %}

<p class='citation' markdown="1">
based on  [Weisstein, Eric W.](http://mathworld.wolfram.com/about/author.html) *["d'Alembert's Solution."](http://mathworld.wolfram.com/dAlembertsSolution.html)* From *[MathWorld](http://mathworld.wolfram.com/)*--A Wolfram Web Resource.
</p>

We introduce two new variables, $$\xi = x-ct$$ and $$\eta = x + ct$$. Using the Chain Rule, we rewrite the operators $$\frac{\partial}{\partial x}$$ and $$\frac{\partial}{\partial t}$$ in terms of these variables.

First, let's note:

$$\begin{align*}
\pdf{\xi}{x} &= 1\\
\pdf{\eta}{x} &= 1\\
\pdf{\xi}{t} &= -c\\
\pdf{\xi}{t} &= c
\end{align*}$$

With these we can apply the Chain Rule as follows:

$$\begin{align*}
\pdf{}{x} &= \pdf{\xi}{x}\pdf{}{\xi}+\pdf{\eta}{x}\pdf{}{\eta}\\
&=\pdf{}{\xi} + \pdf{}{\eta} \\
\pdf{}{t} &= \pdf{\xi}{t}\pdf{}{\xi}+\pdf{\eta}{t}\pdf{}{\eta}\\
&=-c\pdf{}{\xi}+c\pdf{}{\eta}\end{align*}$$

Then, we can use these operators to rewrite $$\pdf{^2f}{x^2}$$ and $$\pdf{^2f}{t^2}$$:

$$\begin{align*}
\pdf{^2 f}{x^2}&=\left(\pdf{}{\xi} + \pdf{}{\eta}\right)\left(\pdf{}{\xi} + \pdf{}{\eta}\right)f\\
&=\pdf{^2f}{\xi^2}+2\frac{\partial^2f}{\partial\xi\partial\eta} + \pdf{^2f}{\eta^2}\\
\pdf{^2 f}{t^2}&=\left(-c\pdf{}{\xi} + c\pdf{}{\eta}\right)\left(-c\pdf{}{\xi} + c\pdf{}{\eta}\right)f\\
&=c^2\left(\pdf{^2f}{\xi^2}-2\frac{\partial^2f}{\partial\xi\partial\eta} + \pdf{^2f}{\eta^2}\right)
\end{align*}$$

Now we can substitute these into the original equation. We find:

$$c^2\left(\pdf{^2f}{\xi^2}-2\frac{\partial^2f}{\partial\xi\partial\eta} + \pdf{^2f}{\eta^2}\right)-c^2\left(\pdf{^2f}{\xi^2}+2\frac{\partial^2f}{\partial\xi\partial\eta} + \pdf{^2f}{\eta^2}\right)=0$$

and after we cancel out most of the terms, this just becomes

$$\frac{\partial^2 f}{\partial \xi \partial \eta}=0$$

So the solutions are any functions of only $$\xi$$ or $$\eta$$, i.e. the general solution is

$$f(x,t)=g(\xi(x,t))+h(\eta(x,t))=g(x-ct)+h(x+ct)$$
{% endcapture %}

{% include hidden.html content=dAlembert id='dalembert' title="d'Alembert's solution to the wave equation" %}

## Maxwell's equations



## Plane wave solutions to Maxwell's equations

## Spherical wave solutions to Maxwell's equations

## The geometric optics limit