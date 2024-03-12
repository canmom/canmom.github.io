---
title: Could we drop all our nukes in the sun?
excerpt: No, but maybe not for the reason you think.
layout: article
categories: physics
tags:
 - physics
 - rockets
 - space
 - orbital mechanics
---
[ajax-daughter-of-telamon](https://ajax-daughter-of-telamon.tumblr.com) asked me:
>  I have a question! would firing all the nukes on the Earth into the Sun be a good way to get rid of them, or would they do something bad to the Sun? 

Cool question! It wouldn’t be a good way to get rid of them, but more because it’s incredibly difficult to _reach_ the sun than because they’d do anything bad to the sun.

## What would it do to the sun?

Nukes are far too tiny to do anything to perturb the sun - you’d need considerably more than the entire nuclear arsenal of Earth [to do something as ‘small’ as make a visible mark on the moon](/physics/how-to-write-your-name-on-the-moon). But let's do a direct comparison. The sun's luminosity - the total power output - is $$3.828\times 10^{26} \unit{W}$$, i.e. in each second it emits $$3.828\times 10^{26} \unit{J}$$ of energy. The largest nuclear bomb ever created, the Tsar Bomba, had a total energy yield when it was detonated of $$2.10\times10^{17}\unit{J}$$. Thus every second, the sun emits a billion times more energy than the largest nuclear bomb. Even if you set all the nukes off at once, it would be imperceptible compared to the sun's output in that second.

Of course, that is spread across a surface area that is, well, the area of the entire sun. The sun is quite big; it has a surface area of $$6\times10^{12}\unit{km^2}$$. This means the radiosity (power emitted per unit area) of the sun is $$6.33\times 10^7 \unit{W\,m^{-2}}$$. So, suppose we want to find an area of the sun that, in one second, emits the same amount of energy as the Tsar Bomba. The result is about 4000 square kilometres. That's a few times the size of London's built up area, but still smaller than the London commuter belt. So if the Tsar Bomba's energy was spread out over an area about the size of London, the sun itself would take about three seconds to match that energy. It's safe to say the nuclear bomb will have no effect at all.

But actually it's even harder than that to perturb the sun. The nuclear bomb would be vaporised long before it reached the surface. It *could* be detonated in space somewhere near the sun. But, when you detonate a nuke in space, there's none of the shock waves, fireballs and mushroom clouds that are so horrifyingly devastating in Earth's atmosphere, just a point source of energy divided over a sphere. To avoid vaporising our nuke, it must be detonated a long, long way from the sun.

As we'll discuss later, NASA is hoping to send a probe to within $$0.04\unit{AU}=6\times10^9\unit{m}$$ of the sun, which is about eight times its radius. They're able to keep scientific equipment working using a shadow shield; presumably, with enough effort, one could also protect a nuclear weapon long enough to set it off.

If that's where we detonate our nuke, the time the nuke's energy reaches the sun, it will be spread out over a sphere of radius $$5.3\times10^9m$$, with the result that the energy per unit area is now just $$7\times10^{-4}\unit{J\,m^{-2}}$$. That is to say, in 0.00000000001 seconds, that area of sun would have put out more energy. It would barely even slightly warm up the surface of the sun, by an absolutely unnoticeable amount - the moment-to-moment variation in the sun's temperature would probably be significantly bigger. Even if you had a telescope trained on the sun, I doubt the nuclear explosion would be visible against its disc.

So we really needn't worry about hurting the sun!

In any case, we're seeking to get rid of the nukes, so vaporising them without setting them off is fine for our purposes - better, probably.

## But how do we drop it in?

There's actually a great, accessible video from Minute Physics addressing exactly this topic. So I'll put that first.

<figure><iframe width="560" height="315" src="https://www.youtube.com/embed/LHvR1fRTW8g" frameborder="0" allowfullscreen></iframe></figure>

That basically gives you the gist of it, but let's check out the details, since a bit is left out of that video.

### Maths-heavy bit

As the video describes, getting close to the Sun from an Earth orbit is considerably more difficult than it sounds. The problem is that you can’t just ‘fall in’ - even when you escape from Earth, you are [in orbit](/physics/how-to-fly-a-rocket-in-space) around the sun, which means you’re moving fast enough tangential to the sun to stay in orbit. (This is the same problem we faced [when we tried to drop a neutron star into Sagittarius A*](/physics/how-to-bat-a-neutron-star-into-sagittarius-a-star).) The orbital speed of Earth varies (though not by much) at different points in its orbit. At any particular point, it can found by the [vis-viva equation](https://en.wikipedia.org/wiki/Vis-viva_equation):

$$v^2=GM\left(\frac{2}{r}-\frac{1}{a}\right)$$

where $$v$$ is the orbital speed of an orbiting body, $$G$$ is the gravitational constant, $$r$$ is the orbiting body's current distance from the centre, and $$a$$ is the semi-major axis of the orbit. In this case, Earth orbits with a semi-major axis of $$149\,598\,023 \unit{km}$$, and its slowest speed is at aphelion where its distance from the sun is $$152\,100\,000 \unit{km}$$. Here, we can plug in the numbers into the formula, getting an orbital speed of $$29.3\unit{km\,s^{-1}}$$.

In theory, a powerful enough rocket could simply dump its entire orbital speed and fall directly towards the sun. On top of this, we would need to get the nukes into an Earth escape trajectory. The first part - getting into orbit - is difficult to calculate, as it requires flight through the atmosphere, but per [this table](https://en.wikipedia.org/wiki/Delta-v_budget#Earth.E2.80.93Moon_space_.E2.80.94_high_thrust), about $$9.3-10\unit{km\,s^{-1}}$$ is needed to get to a low Earth orbit.

From there, [it seems Wikipedians do an energy calculation](https://en.wikipedia.org/wiki/Delta-v_budget#Interplanetary). They combine the amount of energy you need to impart to get to the sun, and the amount you need to get out of LEO. They assume you're orbiting at $$7.73\unit{km\,s^{-1}}$$.

In general, for any orbit around a single body, the *specific orbital energy* is given by

$$\epsilon = \frac{v^2}{2}-\frac{\mu}{r}$$

where $$\mu=GM$$ is the standard gravitational parameter. In the case of an elliptical orbit, this can be simplified to $$\epsilon=-\frac{\mu}{2a}$$, so $$\frac{\mu}{2a}$$ is the specific energy needed to get to an escape trajectory where $$\epsilon=0$$. For the specific case of a *circular* orbit, we can take $$r=a$$, giving $$v^2=\frac{\mu}{a}$$. So in other words, we can take the square of the orbital speed to be twice the amount of specific energy needed to get out of orbit.

So, add that to the square of the delta-v needed to fall into the sun, giving you twice the *total* specific kinetic energy you need, and take the square root of that to get the new total delta-v needed. For the sun, this gives you $$31.7\unit{km\,s^{-1}}$$. Fortunately, you can cancel out some of that, since at a certain point in your orbit you will be travelling the way you want to go at $$7.73\unit{km\,s^{-1}}$$. So you can subtract this from the delta-v budget, giving you $$24.0\unit{km\,s^{-1}}$$ to get from LEO to the sun. For comparison, getting to the moon from LEO took about $$6\unit{km\,s^{-1}}$$. (Numbers from Wikipedia, I didn't check their maths but it looks plausible!)

That means we're talking about a delta-v budget of roughly $$34\unit{km\,s^{-1}}$$ from the *ground* to the sun. This is a hell of a lot to ask of a rocket, especially if you want to do this for every nuke on Earth. In general, building a rocket that could accomplish that is a tall order, especially one with a high enough thrust to carry nuclear warheads.

(This is where some of you might think of [Project Orion](https://en.wikipedia.org/wiki/Project_Orion_(nuclear_propulsion)), which has the benefit of *using* the nukes that you're carrying to propel the ship. But at the point where Project Orion is on the table, ridding the world of nuclear weapons probably is not.)

### Real and fake rockets

NASA has not tried to drop anything into the sun, but they have gotten pretty close. First there were the [Helios probes](https://en.wikipedia.org/wiki/Helios_(spacecraft)), launched in the 70s, which got as close as $$0.3\unit{AU}$$ (30% of the orbit of Earth). In the near future, they will be beaten by the [Parker Solar Probe](https://en.wikipedia.org/wiki/Parker_Solar_Probe), a probe designed to orbit close to the sun and analyse its outer corona, due to launch in July 2018. It will approach the sun as close as $$0.04\unit{AU}$$ (4% of the Earth's orbit, and about 8 times the radius of the sun), and relies on a shadow shield to keep it cool enough to operate when it gets very close to the sun.

The Helios probes went pretty much directly, dumping as much orbital energy as possible and flying in an elliptical orbit that took them down close to the sun and back towards Earth's orbit. However, to really get close to the sun, you need to dump energy using [gravity assists](https://en.wikipedia.org/wiki/Gravity_assist), aka gravitational slingshots. This means you fly a hyperbolic orbit around some big heavy thing such as a planet, giving it some of your kinetic energy relative to the sun and leaving on a more convenient trajectory. To get so close to the sun, the Parker probe will do this at Venus seven times over a six-Earth-year period.

For an illustration of how hard it is to get to the Sun, here's *Kerbal Space Program* youtuber Scott Manley trying to do this with realistic rockets:

<figure><iframe width="560" height="315" src="https://www.youtube.com/embed/uNS6VKNXY6s" frameborder="0" allowfullscreen></iframe></figure>

Instead of doing a gravity assist at Venus, he does a more indirect trip, using a single assist at Jupiter to cancel his orbital velocity and fall straight into the sun. As Minute Physics mentioned, NASA also considered this kind of mission, but ultimately went with the seven Venus flybys.

The Parker probe has a dry mass of 555kg, which - depending on the nuke - could easily carry a few nukes close-ish to the sun. Probably, the nukes would be totally fried and inoperable, even if not vaporised as such; in any case they would be essentially impossible to retrieve.

The probe launches on a Delta IV Heavy rocket, which in 2017 prices costs $400,000,000 per launch. However, it's not enough to just shove the nukes on the rocket, you also have to have thrusters and guidance to do all those gravity assists. It also needs a team to direct it through those gravity assists. The Parker probe mission costs 'in the region of $1,500,000,000' according to the Guardian, but that also includes the research and engineering necessary to create a probe capable of performing that mission. So the cost per nuke launch may be less. On the other hand, those gravity assists are based on particular positions of the Earth and Venus. Every nuclear launch will require a new orbit to be plotted.

Let's not let that deter us!

## How many do we need?

What is the total mass of nukes in the world today? Although the *number* of weapons is fairly easy to look up, the total *mass* is a harder question, since you'd need like, the count per weapon, the mass of each type of weapon, etc. Per [a nuclear disarmament org](https://www.ploughshares.org/world-nuclear-stockpile-report), the total world nuclear weapons stockpile today is 14,900, the vast majority in the US and Russia. How big are these weapons? Well, we can download [a report](http://www.tandfonline.com/doi/pdf/10.1080/00963402.2016.1264213?needAccess=true&).

What we find is that the US has...

 - 600 W78 warheads, massing about 310-360kg each
 - 200 W78 warheads, massing about 200-270kg each
 - 1600 W76 warheads, massing 164kg each
 - 384 W88 warheads, massing less than 360kg each
 - 528 W80 bombs, massing 130kg each
 - 510 B61 and B83 bombs in some combination, massing 320kg for the former and 1,100kg for the latter
 - 500 more B83 bombs massing 320kg each

This adds up to ~6780 warheads, massing about 1,260,000kg.

The [Russian arsenal](http://www.tandfonline.com/doi/pdf/10.1080/00963402.2017.1290375?needAccess=true) is comparable, containing about 4,300 active warheads, and another 2,700 retired warheads, but the data available in the report is somewhat less precise. I'm kind of tired of adding up the masses of nukes, so let's just assume they both have about $$1.25\times10^{6}\unit{kg}$$ so overall we have to dispose of about twice that.

Assuming we can launch a packet of nukes comparable in mass to the Parker probe into (somewhere near) the sun, that means we'll take somewhere between 4000 and 5000 launches to get all the nukes up there. Per Wikipedia, doing a bit of number crunching, there have been/are planned to be [5939](https://en.wikipedia.org/wiki/Timeline_of_spaceflight) space launches, including failed launches. So you need to do about as many space launches as there have been in human history. On top of that, every year there's a handful of failed launches. A failed launch is bad enough when it's a big tube of explosive rocket fuel, much much worse when it's full of terrifyingly radioactive material.

(Could we use existing launch systems? Despite [that time the United States thought about nuking the moon (with Carl Sagan's help!)](https://nsarchive2.gwu.edu//NSAEBB/NSAEBB479/docs/EBB-Moon02.pdf), nuclear missiles are designed not so much to go into orbit as to go up then come down again. So they don't need more delta-v than one suborbital hop. I wouldn't expect they'd help us much for this kind of absurd mission.)

## Wacky schemes aside, how do we actually get rid of nukes?

It's somewhat less impossible to get a rocket near the sun than I initially thought. It's still basically impossible. As far as decommissioning nuclear weapons goes, the sun isn't a great option.

There are, thankfully, [ways to decommission nuclear weapons](https://foxtrotalpha.jalopnik.com/how-to-dismantle-a-nuclear-weapon-1795347850) that aren't quite so extreme. Per that article, since the US started dismantling some of its nukes, the rate of dismantling weapons has varied between 300 and 1000 per year. The materials can variously be recycled or burned; the uranium in particular can be used in civilian reactors. There's a fascinating fact here:

> Here’s a fun fact: Most Americans have no idea that nearly half of the uranium burned at U.S. power plants between 1994 and 2014 came from decommissioned Russian weapons, according to the Bulletin of Atomic Scientists. It started back in 1993 under the “Megatons to Megawatts” program, when the Russians agreed to convert 500 tons of bomb-grade uranium into nuclear power and sell it to the Americans; in turn the Americans sold to to energy companies stateside. It was a good way for Washington to find common ground with its former adversaries after the fall of the USSR.
>
> Plus, it was profitable for them because the Russian economy was on the brink of collapse at several points during the 1990s. Moscow made $17 billion during the program’s 20-year span. But the Kremlin ended it in 2013, as it didn’t feel Russia could benefit from it any longer. Specifically, Pavel Podvig, a Russian physicist, wrote in 2008 that the program is not economically advantageous for Russia, nor does it adequately address its own non-proliferation needs.

Plutonium, on the other hand, is bad, bad news; there's no nice civilian use for it. About the only option is to shove it in the ground somewhere and wait hundreds of thousands of years for radioactive decay to make it less absurdly dangerous. It *can* be potentially turned into [MOX fuel](https://en.wikipedia.org/wiki/MOX_fuel) and used in new kinds of civilian nuclear reactors; the drawback is that someone other than an imperialist superpower might use 'oh we're just making some nice old MOX fuel' as cover for a nuclear weapons program, and the USA really does not like the idea of anyone other than itself and its allies having nuclear weapons.

It would take fewer launches to put just the plutonium into the sun; I'm not going to try to calculate the total amount of plutonium in the world, and how many rockets that would take. And an exploding rocket packed full of plutonium would be even worse news than a rocket packed full of disarmed nuclear warheads.

[It may be worth raising the question of whether a better alternative to trying to hit the sun would be to put that plutonium on an escape trajectory, and just send it off into interstellar space (much like the Voyager probes). By the time it goes anywhere near another star, that plutonium should be inert. That wouldn't solve the 'putting a giant pile of plutonium on a rocket is an absurdly bad idea' problem, but it might shave off some of that huge delta-v.]

So that's where we're at. Thankfully, the number of nuclear weapons in the world isn't nearly so high as it was during the Cold War, but 'any at all' is of course far too many. And we need a better way to deal with all these nuclear weapons than putting them on a rocket.