---
title: Work and Energy
excerpt: What is energy? A course of questions to answer this enigmatic question. WORK IN PROGRESS
layout: article
categories: physics
---
**please note that this course is a work in progress**

'Energy', in the various forms it takes, is a concept extremely close to the centre of physics.

We use it in many different contexts in every area of physics: classical mechanics, quantum mechanics, relativity. One field, thermodynamics is all about the energy of complicated systems, and how it changes.

But what is this 'energy', and where does it come from?

An interesting starting point is the *work-energy principle* in classical mechanics.

*This course of questions assumes you know how to solve simple systems of ordinary differential equations, and the basics of classical Newtonian mechanics, i.e. what a particle and a force is and how to write them in terms of vectors.*

## Force and distance

In classical, Newtonian mechanics we deal with particles, acted on by forces $$\mathbf{F}$$. Each particle has a position $$\mathbf{r}(t)$$ that is a function of time $$t$$, and we are concerned with the velocity $$\dot{\mathbf{r}}$$ and acceleration $$\ddot{\mathbf{r}}$$ of particles. Each particle also has a number associated with it called its *mass*, $$m$$.

The basic principle is that the acceleration of the particle is determined by the forces on it as

$$m\ddot{\mathbf{r}}=\sum \mathbf{F}$$

Newtonian mechanics is about identifying the appropriate set of forces and using them to work out *equations of motion* for each particle, differential equations that we can (hopefully) solve to get the particle's motion, i.e. find $$\mathbf{r}(t)$$.

Let's have a look and see where work comes into this.

## Simple example: a thrown ball

A ball of mass $$m$$ is thrown straight up with initial speed $$v_0$$, acted on by a gravitational force of strength $$mg$$. Assume its subsequent motion is confined to one dimension, i.e. it goes straight up and down.

What is the maximum height attained by the ball as a function of $$g$$ and $$v_0$$?

 - $$\frac{v_0}{g} $$
 - $$\frac{ {v_0}^2}{2g}$$
 - $$\frac{ {v_0}^2}{ g}$$
 - $$\frac{ {v_0}^2}{2mg}$$

{% capture solution1 %}
The only force here is gravity. We'll call the height of the ball above its starting point $$z$$, so gravity is acting in the negative $$z$$ direction. The equation of motion is then:

$$m\ddot{z}=-mg$$

The initial conditions are $$\dot{z}(0)=v_0$$ (the initial speed of the ball is $$v_0$$), and $$z(0)=0$$ (the ball starts at height $$z=0$$).

We can integrate the equation of motion twice with respect to time.

$$\begin{align*}\int_0^t \ddot{z}(t') \dif t' &=\dot{z}(t) - v_0 \\&=\int_0^t -g \dif t' = -gt\end{align*}$$

so $$ \dot{z}(t)= v_0-gt$$ and therefore

$$\begin{align*}\int_0^t \dot{z}(t') \dif t' &= z(t) - 0 \\&= \int_0^t v_0-gt \dif t = v_0 t - \frac{1}{2}gt^2 \end{align*}$$

The ball's velocity falls to zero at some time $$T$$ when $$\dot{z}(T)=0$$ so $$v_0-gT=0$$ i.e. $$T=\frac{v_0}{g}$$. At this time, the ball has attained a height

$$\begin{align*}z(T)&=\frac{ {v_0}^2}{g}-\frac{ {v_0}^2}{2g}\\&=\frac{ {v_0}^2}{2g}\end{align*}$$
{% endcapture %}
{% include hidden.html content=solution1 id="solution1" title="Solution" %}

## Work

We can rearrange our solution as follows:

$$mg x(T) = \frac{1}{2}m{v_0}^2$$

The force acting times the distance travelled is equal to a quantity $$\frac{1}{2}m{v_0}^2$$. This is a specific example of the *work-energy principle*, and the quantity $$\frac{1}{2}mv^2$$ is the *kinetic energy*.

It turns out it's useful to consider this quantity kinetic energy in its own right, as a sort of substance that can be added and taken away by forces - with the amount it changes similarly determined by the product of force and distance. However, there are some wrinkles outside of the one-dimensional case.

## A perpendicular force

Let's consider another example.

An electron with charge $$q$$ and mass $$m$$ is moving perpendicular to a constant magnetic field of strength $$B$$, with its position given by $$\mathbf{r}(t)$$. The magnetic field acts on it with a force $$\mathbf{F}$$ of magnitude $$qB\dot{r}$$, that is always perpendicular to its velocity $$\dot{\mathbf{r}}$$, i.e. $$\mathbf{F}\cdot\dot{\mathbf{r}}=0$$.

Initially, the electron is moving with a speed $$v_0$$. After a time $$t$$, what is its kinetic energy $$\frac{1}{2}m\dot{\mathbf{r}}^2$$?

 - $$\frac{1}{2}m{v_0}^2$$
 - $$\frac{1}{2}m{v_0}^2 + v_0Ft + \frac{F^2t^2}{2m}$$
 - $$\frac{1}{2}m{v_0}^2 + v_0Ft$$
 - $$\frac{1}{2}m{v_0}^2 - v_0Ft$$

{% capture solution2 %}
You may recognise this as a case of circular motion, where the electron's speed - and therefore its kinetic energy - never changes from its initial $$\frac{1}{2}m{v_0}^2$$. But let's go through and illustrate how this comes about.

The force vector is rotated 90 degrees = $$\frac{\pi}{2}$$ radians from the velocity vector. Thus in Cartesian coordinates, we have

$$\mathbf{F}=qB\begin{pmatrix} \cos \frac{\pi}{2} & - \sin \frac{\pi}{2} \\ \sin \frac{\pi}{2} & \cos \frac{\pi}{2}\end{pmatrix} \dot{\mathbf{r}}=qB\pmatrix{-\dot{y} \\ \dot{x}}$$

We will pick our coordinates such that the electron is initially on the $$x$$ axis at position $$x=R$$, and moving in the positive $$y$$ direction. Therefore, initially $$\dot{x}=0$$ and $$\dot{y}=v_0$$, and also let $$x=R$$ and $$y=0$$. $$R$$ is an arbitrary offset; we'll pick a particular value for it later, in a way that simplifies the problem.

Therefore the equations of motion of the electron are:

$$\begin{align*}m\ddot{x}&=-qB\dot{y}\\
m\ddot{y}&=qB\dot{x}\end{align*}$$

Integrating this with respect to time:

$$\begin{align*}\int_0^t m \ddot{x}(t') \dif t' &= m\dot{x} - 0\\&=\int_0^t -qB \dot y(t') \dif t'=-qBy - 0\\
\int_0^t m \ddot{y}(t') \dif t' &= m\dot{y} - mv_0\\&=\int_0^t qB \dot x(t') \dif t=Fx - qBR\end{align*}$$

Simplifying...

$$\begin{align*}\dot{x} &= -\frac{qB}{m}y\\
\dot{y}&=v_0 + \frac{qB}{m}(x-R)\end{align*}$$

By substituting this back into the original equations of motion, we can decouple $$x$$ and $$y$$:

$$\begin{align*}m\ddot{x}&=-\frac{(qB)^2}{m}(x-R) - qBv_0\\
m\ddot{y}&=-\frac{(qB)^2}{m}y\end{align*}$$

To simplify the first equation, let's settle on the value $$R=\frac{mv_0}{qB}$$. The first equation reduces to

$$m\ddot{x}=-\frac{(qB)^2}{m}x$$

Both of these equations are now of the form

$$\ddot{f}=-\omega^2 f$$

i.e., the equation of simple harmonic motion with angular frequency $$\omega = \frac{qB}{m}$$. The solutions are therefore of the general form

$$\begin{align*}x&=a\cos\omega t + b\sin \omega t\\
y&=c\cos\omega t + d \sin \omega t\end{align*}$$

To fix the values of $$a$$, $$b$$, $$c$$ and $$d$$ we make use of the initial values. From $$\mathbf{r}(0)=\begin{pmatrix}R\\0\end{pmatrix}$$ we find $$a=R=\frac{mv_0}{qB}$$ and $$c=0$$. To fix $$b$$ and $$d$$, we differentiate $$\mathbf{r}$$:

$$\begin{align*}\dot{x}&=-a\omega \sin \omega t + b \omega \cos \omega t\\
\dot{y}&=d \omega \cos \omega t\end{align*}$$

Therefore from $$\dot{\mathbf{r}}=\begin{pmatrix}0 \\ v_0\end{pmatrix}$$ we get $$b=0$$ and $$d=\frac{v_0}{\omega}=\frac{mv_0}{F}$$.

This gives an overall solution:

$$\mathbf{r}=\frac{mv_0}{qB}\begin{pmatrix}\cos \frac{qB}{m}t \\ \sin \frac{qB}{m}t\end{pmatrix}$$

which describes motion in a circle of radius $$\frac{mv_0}{qB}$$ with angular frequency $$\frac{qB}{m}$$.

To find the kinetic energy of the electron, we calculate...

$$\begin{align*}\frac{1}{2}m\dot{\mathbf{r}}^2&=\frac{1}{2} m \left(\frac{mv_0}{qB}\right)^2 \left(\frac{qB}{m}\right)^2 \begin{pmatrix} -\sin \omega t \\ \cos \omega t\end{pmatrix} \cdot \begin{pmatrix} -\sin \omega t \\ \cos \omega t \end{pmatrix}\\
&=\frac{1}{2}m{v_0}^2 (\sin^2 \omega t + \cos^2 \omega t)\\
&=\frac{1}{2}m{v_0}^2\end{align*}$$

Therefore the electron's kinetic energy is always $$\frac{1}{2}m{v_0}^2$$.
{% endcapture %}

{% include hidden.html content=solution2 id='solution2' title='Solution' %}

## The work-energy principle

We have just seen:

 - a case where a force acting *parallel to* the direction a particle is moving increased its kinetic energy proportional to the distance travelled
 - a case where a force acting *perpendicular to* the direction a particle is moving had no effect on its kinetic energy

These rules are the essence of the work-energy principle. Let's make it concrete, and prove it.

As a first step, let's diffentiate the kinetic energy with respect to time.

$$\dot{E}=\df{}{t} \left(\frac{1}{2}m\dot{r}^2\right)=\frac{1}{2}m\df{(\dot{\mathbf{r}}\cdot\dot{\mathbf{r}})}{t}$$

Applying the product rule, express this as a function of $$\dot{\mathbf{r}}$$ and $$\ddot{\mathbf{r}}$$.

{% capture solution3 %}
We find

$$\df{(\dot{\mathbf{r}}\cdot\dot{\mathbf{r}})}{t}=\ddot{\mathbf{r}}\cdot\dot{\mathbf{r}}+\dot{\mathbf{r}}\cdot\ddot{\mathbf{r}}=2\ddot{\mathbf{r}} \cdot \dot{\mathbf{r}}$$

Therefore, $$\dot{E}=m\ddot{\mathbf{r}}\cdot\dot{\mathbf{r}}$$
{% endcapture %}
{% include hidden.html content=solution3 id='solution3' title='Solution' %}