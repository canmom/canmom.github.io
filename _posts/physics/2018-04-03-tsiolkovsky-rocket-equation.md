---
title: Tsiolkovsky's rocket equation
excerpt: Derive and use the most important equation in rocket science through a series of bite-sized questions.
layout: article
categories: physics
---
{% include captionedfigure.html alt='Image of a car in space, launched as part of a publicity stunt earlier this year. The car, with a dummy astronaut sitting at the wheel, sits in the foreground, while the Earth hangs in the background.' contentsrc='public domain image by SpaceX, via [Wikimedia Commons]("https://commons.wikimedia.org/wiki/File:Elon_Musk%27s_Tesla_Roadster_(40110297852).jpg").' img='embed/physics/rocketequation/spacecar.png' %}

Earlier this year, private spaceflight company SpaceX launched a car into space to test their new Falcon Heavy rocket.

A car, of course, cannot drive in space, so to get to its eventual destination of flying by Mars, the car must be pushed around by a rocket. But why is this?

Space is a very different environment to Earth. On Earth, there is always something around you: the ground, water, air. This gives you something to push off, so acceleration is easy. But friction and air resistance will always slow you down as you move around, so without constant work to maintain your speed, you will slow back down to a stop.

In the vacuum of space, a spacecraft need not worry about friction, and it fly on forever at the same speed. However, when it wants to *change* its speed or direction, it has no convenient ground to push on. It has to do something else.

**Assumed knowledge** You need to know how to solve a mechanics problem by conserving momentum and transforming between reference frames, and how to solve an integral of the form $$\int\frac{1}{x}\dif x$$.

## How to move in space

{% include captionedfigure.html alt="Two images of an astronaut and a large ball. In the first, they appear stationary, and the astronaut is marked as having mass M and the ball mass m. In the second image, the ball is moving to the right with speed v and the astronaut to the left with speed V" img="embed/physics/rocketequation/astronaut-ball-1.png" %}

An astronaut [Mae](https://en.wikipedia.org/wiki/Mae_Jemison), who is of mass $$M$$, is floating on a spacewalk somewhere deep in space. We are looking at her in a frame of reference where she is initially stationary.

Mae would prefer not to be stranded in space, but she had the foresight to bring a large bowling ball of mass $$m$$. She throws the ball away from her with speed $$v$$, causing her to travel in the opposite direction with speed $$V$$.

What is the relationship between $$V$$ and $$v$$?

 - $$V=v$$
 - $$V=\frac{m}{M+m}v$$
 - $$V=\frac{m}{M}v$$
 - $$V=v\log\frac{m+M}{M}$$

{% capture solution1 %}
In this problem, momentum is conserved. (Kinetic energy is not conserved, because the throwing the ball introduces new kinetic energy, transformed from the chemical energy in Mae's arms.)

Initially, nothing is moving, so the total momentum is zero.

After Mae has thrown the ball, the total momentum becomes

$$mv + M \cdot (-V)$$

By conservation of momentum, the total momentum must be the same in both cases, so we have

$$mv-MV=0$$

which we can rearrange to find

$$V=\frac{m}{M}v$$

{% endcapture %}
{% include hidden.html content=solution1 id="solution1" title="Solution" %}

## Splitting the reaction mass

Mae's bowling ball illustrates one way you can change your velocity in space: take a part of yourself, and push it away from the rest of you, making you accelerate in the opposite direction. The stuff you throw away is called **reaction mass**, because the *reaction* from pushing it away is what causes you to accelerate.

Rockets, however, do not launch all their reaction mass in one go, but release it over time in a steady stream. As a first step, let's consider what happens if you release your mass bit by bit.

Mae goes on another spacewalk, and this time she's joined by [Valentina](https://en.wikipedia.org/wiki/Valentina_Tereshkova), who has the same mass as Mae, but has brought *two* bowling balls of mass $$\frac{m}{2}$$. Mae once again has one large bowling ball, of mass $$m$$. Mae throws her bowling ball at speed $$v$$; Valentina throws both her bowling balls, first one then the other, both at speed $$v$$ relative to herself.

Which of the two astronauts will be travelling faster after all these bowling balls have been thrown?

 - Mae
 - Valentina
 - They will move at the same speed

{% capture solution2 %}
When Mae throws her ball, as before, she ends up at speed $$V=\frac{m}{M}v$$.

When Valentina throws her ball, you might imagine that throwing a ball of mass $$\frac{m}{2}$$ would give her a speed $$\frac{V}{2}$$. This is true for the second ball she throws. But Valentina isn't just pushing her own mass when she throws the first ball, but also the mass of the other ball. So she'll gain *less than* $$\frac{V}{2}$$ speed from the first ball, and her total speed will be less than $$V$$.

For that reason, Mae will end up travelling faster.

We can work out exactly how fast Valentina is going. After she throws the first ball, we'll say she has speed $$V_1$$. We conserve momentum as before, but this time the ball thrown has mass $$\frac{m}{2}$$, while the mass of Valentina and the second ball together is $$M+\frac{m}{2}$$. This means we get

$$\frac{m}{2}v-\left(M+\frac{m}{2}\right)V_1=0$$

so after the first ball, Valentina has speed

$$V_1=\frac{m}{2M+m}v=\frac{1}{1+\frac{m}{2M}}$$

We can then transform to Valentina's rest frame, and do the same calculation we did for Mae. So we find, in this new frame, Valentina has speed

$$V_2'=\frac{m}{2M}v$$

and when we transform back into the original frame, we find her speed is

$$\begin{align*}
V_2&=V_2' + V_1 \\
&= \left(\frac{1}{1+\frac{m}{2M}}+\frac{m}{2M}\right)v \\
&= \frac{\frac{m}{2M} + \left(1+\frac{m}{2M}\right)\frac{m}{2M}}{1+\frac{m}{2M}}v \\
&=\frac{2+\frac{m}{2M}}{1+\frac{m}{2M}}\frac{m}{2M}v
\end{align*}$$

That's not *obviously* less than $$\frac{m}{M}v$$, is it? But let's check: first, to make our algebra clearer, let's let $$x=\frac{m}{2M}$$. Then, the difference between our two solutions is...

$$\begin{align*}
V_2-V&=\frac{2+x}{1+x}x - 2x\\
&= x\left(\frac{2+x}{1+x}-2\right)\\
&= x\left(\frac{2+x-2(1+x)}{1+x}\right)\\
&= x\left(\frac{-x}{1+x}\right)
\end{align*}$$

This is always negative because $$m$$ and $$M$$, and therefore $$x$$, are always positive. As we thought, $$V_2$$ (Valentina's speed) is always less than $$V$$ (Mae's speed).
{% endcapture %}
{% include hidden.html content=solution2 id="solution2" title="Solution" %}

## What is a rocket?

A rocket is not all that different to our astronauts and bowling balls: it's a machine that pushes reaction mass out in order to make itself accelerate in the other direction.

Unlike the astronauts, the reaction mass comes out of a rocket in a steady stream rather than one or a few goes. Nevertheless, we can analyse a rocket in a similar way to the way we analysed the astronauts.

In 1897, long before any practical rockets had been created, the reclusive Russian scientist Konstantin Tsiolkovsky was busy imagining the future of human spaceflight in a log cabin near Kaluga. He discovered a striking result: in a vacuum, the change in velocity produced by a rocket depends only on the speed of its exhaust, and the *ratio* of the mass of the rocket before it begins the burn, to the mass of the rocket after. He expressed this in a simple equation:

$$\frac{\Delta v}=v_e \log \frac{M_\text{init}}{M_\text{after}}$$

This is just as true for a low-thrust rocket that burns for a long time as for a high-thrust rocket that burns much shorter.

We are going to rebuild this equation in a modern way, using the principles of conservation of momentum and mass.

## Step 1: set up the situation

We will start our analysis in a frame of reference where the rocket has a total mass $$M$$, and it is travelling at speed $$v$$.

In a short period of time, the rocket's mass changes to $$M+\Delta M$$, and the rocket's velocity changes to $$v+\Delta v$$. A small mass $$\Deltam$$ exits the rocket with velocity $$-u$$. ('$$\Delta$$' is a common way to label a small change in a quantity.)

Because the total mass of the system is conserved, we must have that $$M+\Delta M + \Delta m = M$$, and therefore $$\Delta M = - \Delta m$$. (This seems really obvious, but when we come to think about *relativistic* rockets that travel close to the speed of light, this won't be true anymore!)

We're looking at this in a frame where the rocket's travelling at speed $$v$$. We know that in the rocket's *rest frame*, the exhaust will be exiting the rocket with velocity $$-v_e$$. What is the speed of the exhaust in this frame, $$u$$?

 - $$u = v_e - v$$
 - $$u = v - v_e$$
 - $$u = v_e + v$$

{% capture solution3 %}

We can transform into the rocket's rest frame using the [Galilean transformation](https://en.wikipedia.org/wiki/Galilean_transformation). 

The rocket's rest frame is travelling at velocity $$+v$$ relative to our frame. So, to get to the rest frame, we need to do a Galilean transformation with velocity $$-v$$.

The rule for Galilean transformations with velocity $$V$$ is that the speed in the new frame, $$v'$$, is given by

$$v' = v + V$$

This can be straightforwardly applied to our case:

$$ u = v_e - v $$

{% endcapture %}

{% include hidden.html content=solution3 id="solution3" title="Solution" %}

<!-- {% capture relativistic1 %}

As a bonus, we can also do a similar derivation to learn about a *relativistic* rocket. If you haven't yet learned about relativity, don't worry about this box and just worry about the Newtonian case!

In the relativistic case, we can no longer rely on conservation of mass, because the rest mass of an object can transform into other forms of energy.

However, we *can* now use conservation of *total energy*, because the chemical energy that turns into kinetic energy of the rocket and exhaust is initially included in the rocket's rest energy.

The relativistic energy of an object is given by $$E=\gamma_v mc^2$$ where $$\gamma_v=\frac{1}{\sqrt{1-\frac{v^2}{c^2}}}$$. However, to simplify our workings, we can work in natural units

{% endcapture %}

{% include hidden.html content=relativistic1 id="relativistic1" title="Relativistic case" %} -->

## Step 2: conserve momentum

Initially, the rocket's momentum is $$Mv$$.

After the rocket has released the exhaust, the system's total momentum is

$$(M+\Delta M)(v + \Delta v) - u \Delta M$$

We can multiply this out...

$$Mv + v \Delta M + M \Delta v - u \Delta m + \Delta M \Delta v$$

Now, we want to deal with the limit of a very small amount of time, when the small changes become *differentials*.