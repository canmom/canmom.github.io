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

**Assumed knowledge:** You need to know how to solve a mechanics problem by conserving momentum and transforming between reference frames, how to differentiate and partially differentiate a function, and how to solve an integral of the form $$\int\frac{1}{x}\dif x$$.

In the process of this course, we'll see how to express conservation laws with the differential of a function.

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

{% include captionedfigure.html alt="A similar image, but now there are two parts to the picture. The first similarly shows an astronaut, labelled Mae, with one large ball. The second shows a different astronaut, labelled Valentina, throwing two smaller balls. Both astronauts are marked as having mass M; Mae's ball is mass m, Valentina's are both mass m/2." img="embed/physics/rocketequation/astronaut-ball-2.png" %}

Mae goes on another spacewalk, and this time she's joined by [Valentina](https://en.wikipedia.org/wiki/Valentina_Tereshkova), who has the same mass as Mae, but has brought *two* bowling balls of mass $$\frac{m}{2}$$.

Mae once again has one large bowling ball, of mass $$m$$. Mae throws her bowling ball at speed $$v$$; Valentina throws both her bowling balls, first one then the other, both at speed $$v$$ relative to herself.

Which of the two astronauts will be travelling faster after all these bowling balls have been thrown?

 - Mae
 - Valentina
 - They will move at the same speed

{% capture solution2extra %}
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

{% capture solution2 %}
When Mae throws her ball, as before, she ends up at speed $$V=\frac{m}{M}v$$.

When Valentina throws her ball, you might imagine that throwing a ball of mass $$\frac{m}{2}$$ would give her a speed $$\frac{V}{2}$$. This is true for the second ball she throws. But Valentina isn't just pushing her own mass when she throws the first ball, but also the mass of the other ball. So she'll gain *less than* $$\frac{V}{2}$$ speed from the first ball, and her total speed will be less than $$V$$.

For that reason, Mae will end up travelling faster.

{% include hidden.html content=solution2extra id="solution2extra" title="Extra details" %}
{% endcapture %}
{% include hidden.html content=solution2 id="solution2" title="Solution" %}

## What is a rocket?

A rocket is not all that different to our astronauts and bowling balls: it's a machine that pushes reaction mass out in order to make itself accelerate in the other direction.

Unlike the astronauts, the reaction mass comes out of a rocket in a steady stream rather than one or a few goes. Nevertheless, we can analyse a rocket in a similar way to the way we analysed the astronauts.

{% include captionedfigure.html alt="Greyscale photograph of Konstantin Tsiolkovsky, an old man with a white goatee wearing a pair of glasses and wearing a white button-up shirt." contentsrc="https://commons.wikimedia.org/wiki/File:Tsiolkovsky.jpg" img="/embed/physics/rocketequation/Tsiolkovsky.jpg" capt="Konstantin Tsiolkovsky, date unknown." %}

In 1897, long before any practical rockets had been created, the reclusive Russian scientist Konstantin Tsiolkovsky was busy imagining the future of human spaceflight in a log cabin near Kaluga.

He discovered a striking result: in a vacuum, the change in velocity produced by a rocket depends only on the speed of its exhaust, and the *ratio* of the mass of the rocket before it begins the burn, to the mass of the rocket after. He expressed this in a simple equation:

$$\Delta v=v_\text{e} \log \frac{M_\text{init}}{M_\text{after}}$$

Let's follow his work and find out what this equation means.

{% capture relativistic %}
The Tsiolkovsky rocket equation is valid in Newtonian physics, which means it works when everything we're dealing with is moving very slowly compared to the speed of light.

There is a *relativistic* version of the equation, and we need to use it instead of the Tsiolkovsky equation when we deal with very fast rockets using presently speculative technologies such as fusion torches or even antimatter propulsion.

The relativistic rocket equation looks like this for a rocket starting at zero speed:

$$v_\text{f} = c \tanh \left(\frac{v_\text{e}}{c}\log \frac{M_\text{init}}{M_\text{after}}\right)$$

For changes where the velocity does not start at zero, or adding up multiple rocket burns, we can most easily handle it using [rapidity](https://en.wikipedia.org/wiki/Rapidity) instead of velocity, since we can add up rapidity changes just like velocity changes. With rapidity coordinates, we have

$$\Delta w=\frac{v_\text{e}}{c}\log \frac{M_\text{init}}{M_\text{after}}$$

which is almost exactly like the Tsiolkovsky equation.

As we work out the rocket equation, these bonus boxes will illustrate how we'd do things differently for the relativistic rocket equation. If you haven't learned about relativity yet, don't worry!
{% endcapture %}
{% include hidden.html content=relativistic id="relativistic" title="Aside: Relativistic rocket" %}

## Step 1: set up the situation

{% include captionedfigure.html alt="A labelled diagram of a rocket of mass M moving to the right at speed v. A quantity of exhaust with mass m is travelling to the left at speed u." img="/embed/physics/rocketequation/rocket-variables.png" %}

We will start our analysis in a frame of reference where the rocket has a total mass $$M$$, and it is travelling at speed $$v$$. Some exhaust of mass $$m$$ is leaving the rocket at a velocity $$-u$$.

We're looking at this in a frame where the rocket's travelling at speed $$v$$. We know that in the rocket's *rest frame*, the exhaust will be exiting the rocket with velocity $$-v_\text{e}$$. What is the speed of the exhaust in this frame, $$u$$?

 - $$u = v_\text{e} - v$$
 - $$u = v - v_\text{e}$$
 - $$u = v_\text{e} + v$$

{% capture solution3 %}

We can transform into the rocket's rest frame using the [Galilean transformation](https://en.wikipedia.org/wiki/Galilean_transformation). 

The rocket's rest frame is travelling at velocity $$+v$$ relative to our frame. So, to get to the rest frame, we need to do a Galilean transformation with velocity $$-v$$.

The rule for Galilean transformation of a velocity $$v$$ by velocity $$V$$ (in the same direction!) is that the velocity in the new frame, $$v'$$, is given by

$$v' = v + V$$

This can be straightforwardly applied to our case:

$$ u = v_\text{e} - v $$

{% endcapture %}

{% include hidden.html content=solution3 id="solution3" title="Solution" %}

{% capture relativistic1 %}

In the relativistic case, transforming velocities between frames is more complicated. Instead of the Galilean transformation, we must use the [Lorentz transformation](https://en.wikipedia.org/wiki/Lorentz_transformation).

The rule for a Lorentz transformation of a velocity $$v$$ by a velocity $$V$$ (in the same direction!) is that the velocity in the new frame, $$v'$$, is given by

$$v' = \frac{v+V}{1+vV}$$

In our case, that turns into

$$u = \frac{v_\text{e}-v}{1-v\text{e}}$$

{% endcapture %}

{% include hidden.html content=relativistic1 id="relativistic1" title="The relativistic case: Lorentz transforms" %}

## Differential of a function

There are a number of ways to derive the rocket equation, but here we're going to do it in a way that can be easily paralleled by the relativistic case later, using the concept of a [differential of a function](https://en.wikipedia.org/wiki/Differential_of_a_function).

The differential $$\dif f$$ of a function $$f$$ describes a very small change in the value of a (smooth) function arising from a similarly small change in its variables - so small any nonlinear variation disappears. It is defined by

$$\dif f = \df{f}{x} \dif x$$

for a function $$f(x)$$ of a single variable, and 

$$\dif f = \sum_{i=0}^n \pdf{f}{x_i}\dif x_i$$

for a function $$f(x_0, \dots x_n)$$ of multiple variables. In other words, to get the differential, you add up the partial differentials of the function with respect to each of its variables, each multiplied by the differential of the corresponding variable.

For a particular system of two particles whose masses can vary, the total momentum is given by

$$p(m_1,v_1,m_2,v_2)=m_1 v_1 + m_2 v_2$$

What is the differential, $$\dif p$$?

 - $$\dif p = m_1 \dif v_1 + v_1 \dif m_1 + m_2 \dif v_2 + v_2 \dif m_2$$
 - $$\dif p = m_1 \dif v_1 + m_2 \dif v_2$$
 - $$\dif p = m_1 + v_1 + m_2 + v_2$$

{% capture solution4 %}
Using the above formula, the differential of $$p$$ is written

$$\dif p = \pdf{p}{v_1}\dif v_1 + \pdf{p}{m_1} \dif m_1 + \pdf{p}{v_2} \dif v_2 + \pdf{p}{m_2} \dif m_2$$

We evaluate the partial differentials:

$$\begin{align*}
\pdf{p}{v_1}&=m_1 &\qquad \pdf{p}{m_1}&=v_1 \\
\pdf{p}{v_2}&=m_2 & \pdf{p}{m_2}&=v_2
\end{align*}$$

So we find 

$$\dif p = m_1 \dif v_1 + v_1 \dif m_1 + m_2 \dif v_2 + v_2 \dif m_2$$
{% endcapture %}

{% include hidden.html content=solution4 id="solution4" title = "Solution" %}

## Why is this useful?

If we know a physical quantity such as momentum is *conserved*, it gives us a constraint: we can change the variables that determine momentum (such as masses and velocities) in some ways, but not others. When it changes in an acceptable way, the small, immediate changes in the momentum must cancel out to zero.

This means that conservation laws can be expressed by setting a differential to zero, such as

$$\dif p=0$$

Which of the following quantities is *not* conserved in this stystem?

 - total mass $$\mathcal{M}=m+M$$
 - total momentum $$Mv - mu$$
 - total kinetic energy $$\frac{1}{2}Mv^2 + \frac{1}{2}mu^2$$

{% capture solution5 %}
No mass is entering or leaving the system, so the total mass $$\mathcal{M}=m+M$$ is conserved.

No forces are acting on the system as a whole, so the total momentum $$p=Mv - mu$$ is conserved.

However, potential energy in the rocket (e.g. chemical potential energy) is being converted into kinetic energy of the reaction mass, so the kinetic energy is *not* conserved.
{% endcapture %}
{% include hidden.html content=solution5 id="solution5" title="Solution" %}

{% capture relativistic2 %}
In the relativistic case, there's an interesting wrinkle: the potential energy stored in the rocket fuel contributes to the rest mass of the rocket! That means the total mass is *not* conserved, since some of that mass turns into kinetic energy for the rocket and propellant.

Instead, we must conserve relativistic energy $$E=\gamma_v Mc^2 + \gamma_u mc^2$$ where $$\gamma_v=\frac{1}{1-\sqrt{\frac{v^2}{c^2}}}$$.

The relativistic momentum, $$p=\gamma_v Mv - \gamma_u mu$$, is also conserved, but the expression is different from Newtonian momentum.

Why are these conservation laws different? It is because in special relativity, the _symmetry_ of [Minkowski spacetime](https://en.wikipedia.org/wiki/Minkowski_space) is different: the *Poincaré group* instead of the *Galilean group*. This connection is due to a very fundamental principle called [Noether's theorem](https://en.wikipedia.org/wiki/Noether%27s_theorem). In a later course, I hope to explain what that means.
{% endcapture %}

{% include hidden.html content=relativistic2 id="relativistic2" title="The relativistic case: conservation laws" %}

## Step 2: conserve momentum and mass

Conserving the total mass gives us:

$$\dif \mathcal{M} = \dif M + \dif m = 0$$

Conserving the total momentum gives us:

$$\dif p = v \dif M + M \dif v - m \dif u - u \dif m = 0$$

We are considering this as increasing the mass of propellant travelling at velocity $$-u$$, rather than changing the velocity of the existing propellant. So we say in the system we're considering, $$\dif u=0$$.

Combining these various results, what do we get?

 - $$(v+u) \dif M + M \dif v=0$$
 - (think of some wrong answers!)

{% capture solution6 %}
Substituting $$\dif u = 0$$ we find:

$$v \dif M + M \dif v - u \dif m = 0$$

Then, substituting $$\dif M = - \dif m$$ we find:

$$v \dif M + u \dif M + M \dif v = 0$$
{% endcapture %}
{% include hidden.html content=solution6 id="solution6" title="Solution" %}

{% capture relativistic3 %}

As noted above, in the relativistic case, we can no longer rely on conservation of mass. Instead we set the differential of the total energy equal to zero:

$$\dif E = \dif (\gamma_v Mc^2) + \dif (\gamma_u m c^2) = 0$$

And we set the differential of momentum equal to zero:

$$\dif p = \dif(\gamma_v Mv) - \dif (\gamma_u m u) =0 $$

{% endcapture %}

{% include hidden.html content=relativistic3 id="relativistic3" title="The relativistic case: differentials" %}

## Step 3: Integration

We're almost there. We just need to use the result we obtained earlier, expressing $$u$$ in terms of the constant $$v_e$$. We found $$u=v_\text{e}-v$$, so that changes our expression to

$$v_\text{e}\dif M + M \dif v = 0$$

This expresses how acceptable variations in $$v$$ relate to acceptable variations in $$M$$, if we want to maintain conservation of momentum. Let's find a function $$v=v(M)$$ that satisfies this condition.

We have a differential equation in only two variables, $$M$$ and $$v$$. We can rearrange it to [separate variables](https://en.wikipedia.org/wiki/Separation_of_variables):

$$\dif v = -v_\text{e} \frac{1}{M}\dif M$$

We'll integrate this with respect to $$M$$, between limits $$M_\text{init}$$ where $$v$$ takes the value $$v_\text{init}$$, and $$M_\text{final}$$ where $$v$$ takes the value $$v_\text{final}$$:

$$\int_{v_\text{init}}^{v_\text{final}} \dif v = -v_\text{e} \int_{M_\text{init}}^{M_\text{final}}\frac{1}{M}\dif M$$

What is the solution to this integral?

 - $$v_\text{final}-v_\text{init} = v_\text{e} \log \frac{M_\text{final}}{M_\text{init}}$$
 - $$v_\text{final}-v_\text{init} = v_\text{e} \log \frac{M_\text{init}}{M_\text{final}}$$
 - $$v_\text{final}-v_\text{init} = v_\text{e} \left(\frac{1}{M_\text{init}^2}-\frac{1}{M_\text{final}^2}\right)$$

{% capture solution7 %}
We'll use [the standard result](https://en.wikipedia.org/wiki/Lists_of_integrals#Rational_functions) that the integral of $$\frac{1}{x}$$ over a domain with positive $$x$$ is the natural logarithm of $$x$$, i.e.

$$\int_{x>0} \frac{1}{x} \dif x = \log x + c$$

With that in mind, we find

$$\begin{align*}-\int_{M_\text{init}}^{M_\text{final}} \frac{1}{M}\dif M &= -(\log M_\text{final} - \log M_\text{init})\\
&=\log \frac{M_\text{init}}{M_\text{final}}\end{align*}$$

where we have used the identities that $$\log A + \log B = \log AB$$ and $$-\log A = \log A^{-1}$$ to simplify the result.
{% endcapture %}

{% include hidden.html content=solution7 id="solution7" title="Solution" %}

{% capture integration %}
You may be wondering exactly how the notation for the differential of a function, e.g. $$\color{red}{\dif f}$$, relates to the symbol used when integrating, e.g. $$\int x^2 \color{blue}{\dif x}$$. Can we really just slap an integration sign on and call it a day?

When Leibniz was inventing the notation we're using here for calculus, he regarded notation like $$\dif f$$ and $$\dif x$$ to represent infinitesimal quantities: smaller than any real number, but bigger than zero. Later mathematicians found this concept extremely difficult to make formally rigorous, and the idea of 'a differential' [has been formalised in a number of different ways](https://en.wikipedia.org/wiki/Differential_(infinitesimal)).

Strictly speaking, the delimiter $$\color{blue}{\dif x}$$ used in integration has nothing inherently to do with the differential of a function that we defined above. However, nothing really goes wrong (at least in physics) if we treat it as the same as a differential, since when you deal with *integration by substitution* they behave the same way. Physicists play fast and loose with the technicalities of concepts like differentials, often much to the frustration of mathematicians who have to clean up afterwards.

If we want to justify integrating the differential of a function, we can observe:

$$\color{red}{\dif f} = \df{f}{x} \color{red}{\dif x}$$

is a valid differential; additionally, thanks to the fundamental theorem of calculus, when we integrate the first derivative of a function

$$\int_a^b \df{f}{x}\color{blue}{\dif x} = f(b) - f(a)$$

and this turns out to be the same thing as

$$\int_{f(a)}^{f(b)} \color{blue}{\dif f}= f(b) - f(a)$$

It would be a pain and more confusing than clear to write all that out every time, so in physics we generally talk about integrating differentials directly.

To make these ideas more rigorous, we could look to the idea of [differential 1-forms](https://en.wikipedia.org/wiki/Differential_form) in differential geometry, but that's way too heavy-duty for the problems we're dealing with here.
{% endcapture %}

{% include hidden.html content=integration id="integration" title="Technical aside: can you integrate a differential?" %}

## The rocket equation

Hooray, we've derived the rocket equation! Let's see it again::

$$\Delta v = v_\text{e} \log \frac{M_\text{init}}{M_\text{final}}$$

Normally, the difference of velocities $$v_\text{final}-v\text{init}$$ is compressed into one quantity, $$\Delta v$$, pronounced 'delta-vee'.

Mission planners think of it this way: a rocket has a 'total budget' of delta-v when it launches, and each time it turns on its engines and performs a maneuver to change its velocity in some way, it uses up some of its delta-v. By finding optimal missions (such as Hohmann transfer orbits, or gravitational slingshot maneuvers) we can work out the total delta-v 'cost' to reach a particular planet or orbit.

The exhaust velocity $$v_\text{e}$$ is also commonly called the *specific impulse*, $$I_\text{sp}$$. There's a confusing wrinkle here, because there's another, related measure that's *also* called the specific impulse that's measured as a time instead of a force. The specific impulse as a time is obtained by dividing the specific impulse as a speed by the standard gravity $$g=9.81\unit{ms^{-2}}$$.

For example, if we [look up the Saturn V rocket](https://en.wikipedia.org/wiki/Saturn_V), we find the specific impulse of its first stage is $$263\unit{s}$$. To actually use this in a calculation, we have to turn it back into a speed, which turns out to be $$263\unit{s}\times9.81\unit{ms^{-2}}=2.58\unit{kms^{-1}}$$.

The ratio $$\frac{M_\text{init}}{M_\text{final}}$$ is called the rocket's *mass ratio*. 

The rocket equation tells us there are only two ways to get more delta-v: increase the mass ratio (i.e. carry a greater proportion of the rocket's mass as propellant) or use an engine with more specific impulse.

## Implication: thrust

{% include captionedfigure.html alt="Two rockets, each with seven engines shown. One rocket has an exhaust plume coming out of all its engines, the other out of only one engine." img="/embed/physics/rocketequation/rocket-manyengines.png" %}

An interesting aspect of the rocket equation is that the *thrust* (applied force) of the rocket never enters into it. Let's have a look at what that means.

Suppose two rockets launch, with zero velocity, at the same time. Each rocket has the same mass and amount of propellant. The rockets each have a hundred engines, but on one of the two rockets, there is a malfunction and only one of the engines starts. Both rockets burn through all of their propellant.

Do the rockets reach the same velocity?

- Yes
- No

{% capture solution8 %}
Both rockets have the same initial mass, and same final mass. So they will reach the same velocity. The fact that one rocket has a hundred times the thrust of the other doesn't matter at all! (Of course, the rocket with a hundred engines will reach its final speed much, much more quickly than the broken rocket.)
{% endcapture %}

{% include hidden.html content=solution8 id="solution8" title="Solution" %}

## Implication: staging

Often, a big part of the mass of the rocket is fuel tanks 