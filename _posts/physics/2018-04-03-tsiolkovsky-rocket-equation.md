---
title: Tsiolkovsky's rocket equation
excerpt: Derive and use the most important equation in rocket science through a series of bite-sized questions.
layout: article
categories: physics
---
On Earth, it is both easier and more difficult to move than in space.

It is easy, because there is always something you can push against to start yourself moving, or change direction. Your feet (or a car) push on the floor, a fish or boat pushes on water and a bird or plane pushes on air. So it's easy to change your speed or direction, at least up to a point.

It is hard because you are always rubbing against things, or pushing air and water out the way, so unless you *keep* pushing, you will gradually slow to a stop as your energy is dissipated to the environment. So it's hard to keep moving (relative to the ground or the fluid around you, anyway.) For this reason, you get tired as you keep walking, and vehicles run out of fuel. Since these *resistance forces* often increase as you move faster, there is also a maximum speed you can move, limited by how hard you are pushing.

In space, the situation is different. You will, in general, keep moving at the same velocity (speed and direction) until you hit something, or else when gravity gets involved move in arcs where your total energy is conserved. However, there is, in general, nothing to push off against when you want to change your velocity.

This leads to [all kinds of unintuitive consequences](/physics/how-to-fly-a-rocket-in-space.html) that makes spaceflight unlike movement on Earth.

In that post, I briefly talked about something called the Tsiolkovsky rocket equation; I've also gone through [how to derive the equation and its relativistic counterpart](/physics/relativistic-rocket-part-1). However, simply seeing the equation derived doesn't give you an intuition for it: where it comes from, and what it *means*.

This post is a course of questions that guide you through: where the rocket equation comes from, its implications, and how you might use it to understand the behaviour of a rocket like the Saturn V.

## How to move in space

{% include captionedfigure.html alt="Two images of an astronaut and a large ball. In the first, they appear stationary, and the astronaut is marked as having mass M and the ball mass m. In the second image, the ball is moving to the right with speed v and the astronaut to the left with speed V" img="embed/physics/rocketequation/astronaut-ball-1.png" %}

[Mae](https://en.wikipedia.org/wiki/Mae_Jemison), who is of mass $$M$$, is floating on a spacewalk somewhere deep in space. We are looking at her in a frame of reference where she is initially still.

Mae has a large bowling ball of mass $$m$$. She throws the ball away from her with speed $$v$$, causing her to travel in the opposite direction with speed $$V$$.

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

Mae is joined by [Valentina](https://en.wikipedia.org/wiki/Valentina_Tereshkova), who has the same mass as Mae, but has *two* bowling balls of mass $$\frac{m}{2}$$. Mae once again has one large bowling ball, of mass $$m$$. Mae throws her bowling ball at speed $$v$$; Valentina throws both her bowling balls, first one then the other, both at speed $$v$$ relative to herself.

Which of the two astronauts will be travelling faster after all these bowling balls have been thrown?

 - Mae
 - Valentina
 - They will move at the same speed

{% capture solution2 %}
When Mae throws her ball, as before, she ends up at speed $$V=\frac{m}{M}v$$.

When Valentina throws her ball, you might imagine that throwing a ball of mass $$\frac{m}{2}$$ would give her a speed $$\frac{V}{2}$$. This is true for the second ball she throws. But Valentina isn't just pushing herself when she throws the first ball, but also the other ball. So she gains less speed.

For that reason, Mae will end up travelling faster.

Let's work out exactly how fast Valentina is going. After she throws the first ball, she has speed $$V_1$$. We conserve momentum as before, but this time we have

$$\frac{m}{2}v-\left(M+\frac{m}{2}\right)V_1=0$$

so after the first ball, Valentina has speed

$$V_1=\frac{m}{2M+m}v=\frac{1}{1+\frac{m}{2M}}$$

We can then transform to Valentina's rest frame, and do the same calculation we did for Mae. So we find, in this new frame, Valentina has speed

$$V_2'=\frac{m}{2M}v$$

and when we transform back into the original frame, we find

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

This is always negative if $$x$$ is positive, i.e. $$V_2$$ (Valentina's speed) is always less than $$V$$ (Mae's speed). This is what the two solutions look like when plotted:


{% endcapture %}
{% include hidden.html content=solution2 id="solution2" title="Solution" %}