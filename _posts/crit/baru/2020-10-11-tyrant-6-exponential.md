---
title: "Kimbune's theorem (on <cite>The Tyrant Baru Cormorant</cite>, part 6)"
layout: article
tags:
 - baru cormorant
excerpt: "Capitalist economics, population growth, disease, cancer, radioactivity---the subjects of <cite>Baru Cormorant</cite> are all linked through the terrifying power of exponential growth and decay. In this book, Baru encounters a different angle on exponentials, through a famous mathematical theorem. What can this angle tell us?"
categories:
 - crit
 - baru
date: 2020-10-11 01:00:00 +0100
has_plots: true
---
This is the sixth part of a series of articles on <cite>The Tyrant Baru Cormorant</cite>---part review, part meta, part commentary. For intro and links to the others, go [here]({{ site.url }}/crit/baru/tyrant-1-intro)!

Depending on how much you'd like to read about Euler's formula, this is either a short article or a long one.

1. foo
{:toc}

## The number of interest

In taking this ecological reading of culture, I am reminded of something Seth once wrote on their Twitter---unfortunately I can't get the direct quote---about the parallels between cancer and colonialism: a part of an organism or community ceasing to participate in symbiosis, but attempting to gather all resources to itself. (Seth said it better.)

So let's look at the thing that unites all the powers, and evils, explored by <cite>Baru Cormorant</cite> books. Powers such as...

 - economic growth
 - disease epidemics
 - cancer
 - colonialism
 - radioactive materials

What do these have in common? In mathematical terms, there's one striking point of unity: <dfn>exponential</dfn> growth and decay.

What's that, then? Exponential growth is a pattern which manifests itself whenever the rate of growth of something is proportionate to how much is already there.

That may sound a bit confusing, so let's consider an example. Imagine a population of bacteria (with plenty of tasty sugars to eat). Every hour, each bacterium splits into two bacteria. The more bacteria there are, the more will be born each generation. When you only have two bacteria, the population grows very slowly... but as the colony gets bigger, the bacteria appear faster and faster. If we count the bacteria every hour, over a number of hours we'll see a curve like this:

{% include plot.html name="exponential" fn="exp(x)" range="[0,50]" %}

This is the the <dfn>exponential function</dfn>, $$\exp(x)$$, or $$e^x$$. Though there are many exponential functions, like $$2^x$$ or $$10^x$$, they can all be related back to this one.

Exponential functions are of deep importance to capitalist economics, because the terrifyingly powerful engine at the heart of capitalism---at least, once the brutal primitive accumulation phase has seized control of land and materials through direct violence---is the cycling of profits back into making more stuff than the last time around ('expanded reproduction' in the language of Marx).

All societies must reproduce themselves, and all growing societies produce more than they need to just continue to exist---but capitalism made this growth the core of what a society is. Everything in capitalism is keyed to an assumption of exponential economic growth, from the interest on a loan to the expectation of annual profits from a company. So if any part of the system---a company, for example---can't keep up with the pace of growth, it will be crowded out by its competitors, starved of funds or bought up and remade.

But it's not just capitalism. Diseases, too, spread exponentially at first through a large population---something we're all too aware of in the age of COVID-19. Cancer cells, not subject to programmed cell death, reproduce themselves on a similar trajectory (although, pedantically) the specifics vary for different cancers, and some only grow at the surface of a tumour).

And radiation? Radioactive decay is something of the opposite: every atom has a random chance to decay in every instant, so the more atoms there are, the more quickly they disappear. In the specific case of uranium, so beloved of the Cancrioth, the most common isotope (by far) has a half life in the billions of years---slow enough that it hasn't all decayed already, fast enough that, in abundance, it creates some serious activity.

(While we're at it... in a nuclear weapon, which even the Cancrioth have yet to imagine, the nuclear chain reaction exploits exponential growth in the other direction: one neutron becomes two, becomes four, each time releasing more energy until, in an instant, most of the fissile material has transformed and all that energy is ready to incinerate a city.)

Perhaps alone among the cast, the Brain is aware of the terror of exponential growth on the scale of societies:

> “They understand the secret of power, Baru.”
> 
> “Which one?”
> 
> “The ability to improve one’s own power, no matter how slowly, triumphs in the long run over any other power. Time magnifies small gains into great advantages. If you are hungry, then it is better, in the long run, to plant one seed than to steal a pound of fruit. Falcrest applies this logic in all their work. They do not conquer. They make themselves irresistible as trading partners. They do not keep their wealth in a royal hoard. They send it out among their people, stored in banks and concerns, where it helps the whole empire grow. They do not wait to treat the sick. They inoculate against the disease before it spreads. All their power sacrifices brute strength in the present for the ability to capture a piece of the future.”

The thing about exponential growth is that, though it starts out apparently slow, once it gets into motion it is the fastest-growing mathematical function we routinely encounter. This is what makes disease outbreaks so scary---and it's what makes capitalism have such force.

Exponential economic growth is Falcrest's meta-weapon, but---Barhu eventually comes to believe---it is the weapon that can be turned against them too.

## Kimbune's Theorem

But the interest in exponentials comes at a different angle, too. While visiting the Cancrioth, Baru runs into a mathematician who is determined to track down Abdumasi Abd for a different reason than most: in Abdumasi's tumour is, she believes, the soul of her husband, who died before she could win an argument. And what's this argument about?

It's about Euler's formula. You know:

$$e^{i\pi} + 1 = 0$$

When I saw that formula on the page, I was like... Seth you absolute *dork*. Oh, sure, she's invented the "most beautiful theorem in mathematics" (as decided by vote)...

Then, I ended up spending a very fun afternoon introducing some friends to the significance of this formula, and started thinking about why it would be here.

In the book, Kimbune's formula comes across to Baru (who can't understand the proof) as a bizarre connection between unrelated, but important numbers: an indication of the numerical structure of the universe, that Falcrest can't perceive. But Baru, not a pure mathematician, does not grasp the proof, nor the heart of the formula, which is better rendered in the more general form:

$$e^{i\theta} = \cos\theta + i \sin \theta$$

Naturally I came up with a reading of the book's broader themes in relation to Euler's formula. But first, to get everyone on the same page, I need to explain the recipe. Since this is a long aside not exactly about <cite>Baru Cormorant</cite>, it gets *the box*.

<details markdown="1">
<summary>A recipe for Kimbune's Theorem</summary>

Euler's/Kimbune's formula requires a lot of conceptual leaps to understand. We've talked about exponential growth and decay: but what this formula creates is a connection between that growth and circular, or more generally repeating, motion. And in so doing, it creates the fundamental tool that we use to calculate with complex numbers, which ended up becoming vital to just about every branch of physics and maths.

You can read my attempt to introduce this subject below. Or, if you prefer, you can watch one of the excellent videos by Grant of 3blue1brown, such as [this short one](https://www.youtube.com/watch?v=v0YEaeIClKY) or [this longer one](https://www.youtube.com/watch?v=ZxYOEwM6Wbk), which present it perhaps more visually and intuitively than I can do here.

We have a few topics to (re)introduce: complex numbers, exponential functions, trigonometry and Taylor series. Or, in Barhu's world, the Impossible Number, the Number of Interest, and the Round Number. (She doesn't mention calculus---it's not clear if the Masquerade has it!---but the usual proof of Euler's/Kimbune's theorem is through a tool of calculus called a Taylor series.)

### The first ingredient: exponential functions and calculus

To begin: a little more on the 'number of interest'. We spoke of the breeding elephants: but to understand what makes $$e^x$$ special compared to, say, $$2^x$$, we need to deal with not discrete, but continuous functions.

So let's follow the path of Jacob Bernoulli, studying compound interest in 1683. We imagine a bank account, accruing interest over time. Let's imagine an extremely generous bank awards interest at 100%. If you have £100 in your bank account, at the end of the year, they give you 100% more money, and you have £200.

Another, even more generous bank might offer 50% after 6 months, and another 50% (of whatever's in your account after the first payment) after the full year. Despite seeming to add up to the same 100%, this is a better deal. After the first payment, you have £150; after the second payment, you get an extra 50% of the first payment, so the total you have is:

$$£150\times1.5=£225$$

A pretty nice increase! And over time, this increase will turn into a bigger increase. The same goes for 'turnover' of a capitalist's goods as they're sold, and the proceeds reinvested into production.

Now, you can imagine slicing up the year into smaller and smaller slices, until the amount of money is continually changing by infinitesimal amounts. So if you get $$N$$ interest payments each year, the amount you'll have after $$i$$ payments will be

$$£100 \times \left(1+\frac{1}{N}\right)^i$$

{% include plot.html name="compoundinterest" data="[{fn: `exp((floor(x*${slider.value})/${slider.value}) * log(1.2))`, range : [0,1], graphType: 'polyline'}]" extraOptions="disableZoom: true" domain="[0,1]" range="[0,3]" slider="Interest payments" slidermin="1" slidermax="15" sliderdefault="5" %}

And the limit of getting "infinitely small payments all the time" gives you a special, smooth curve. In this limit, by the end of the first year, the money has grown by a factor of

$$e=2.71281828459\dots$$

This number is special: its decimal expansion goes on forever, without repeating itself. It can't be written as a fraction: the best we can do is describe a process, like the limiting process above, which slowly gets closer to the value of $$e$$.

Why is this number important? Instead of a complicated limit, Bernoulli's fancy "infinitely frequent compound interest" formula can be calculated by this number, raised to the power of the number of years that pass.

$$\text{money}(t)=£100 \times e^\frac{t}{1\text{year}}$$

We've just done some calculus, by taking a 'limit', and ended up with an exponential function: a number raised to the power of the input.

But there's another, much nicer way to look at this particular exponential function than Bernouilli's method. Calculus tells us a way to measure *how quickly* something is changing. If we have something called $$f$$ which depends on time, then we can do a similar process of slicing time into smaller and smaller parts, and looking at how $$f$$ changes. This leads us to a number called the *rate of change* or *first differential* of $$f$$, which we might write

$$f'(t)$$

if we like Newton, or 

$$\df{f}{t}$$

if we're more into Leibniz.

This particular exponential function has one very special unique property. Its rate of change is always equal to the function itself:

$$\df{}{t} e^t = e^t$$

This makes it incredibly convenient, expecially when it comes to 'differential equations'. A differential equation comes up in a situation where we know the rules that describe how something changes: for example, the number of new elephants born in a year will always be a certain fraction of the number of living elephants. Or, the average number of particles that radioactively decay per unit time will be a certain proportion of the total. The hotter something is, the faster its heat spreads to the surroundings.

All those situations I just mentioned are variants on this equation:

$$x'(t)=kx(t)$$

This says that the *rate* that something, measured as $$x$$, is changing---growing or shrinking---is proportional to the size of the thing itself (and $$k$$ is just a number to say how strong the connection is). A bigger thing grows or shrinks faster than a smaller thing. We can always solve this kind of equation with the exponential function, scaled up or down by some factor.

### The second ingredient: Taylor series

Calculus gives us a special trick: we can *approximate* smoothly varying functions, with something that is (often) easier to calculate. We take a starting point---the time $$t=0$$, say---and build up a 'power series', so that the rate of change, the rate of change of the rate of change, the rate of change of the rate of change of the rate of change, etc., all matches our function.

For example, a power series might look like:

$$1+x+\frac{x^2}{2}+\frac{x^3}{6}+\frac{x^4}{24}\dots$$

At $$x=0$$, the value of this function is 1, the rate of change is 1, the rate of change of the rate of change is 1, and so on all the way down. Which is exactly the same as the exponential function... and that's not a coincidence, this power series *is* just another way of writing the exponential function!

Most useful functions can be approximated by a power series *as long as we're near enough to the point where we make the approximation*. But $$e^x$$ is very special, because the approximation is good for *the entire number line*! The further away from $$x=0$$, the more terms in the power series you need to add up, but add up enough terms and you can get as close as you like to $$e^x$$.

Which tells us why exponentials grow so quickly, faster than every 'polynomial' (function of powers, such as $$x^5 + x^4+3x^2$$). No matter how high the powers in a polymonial, $$e^x$$ contains a higher one.

How did we find this Taylor series, which I seemingly pulled out of a hat? We use the rate of change. If you have a power of $$x$$, such as $$x^5$$, you can easily find its rate of change: multiply by the exponent, then drop the exponent by one. For example, the rate of change of $$x^5$$:

$$\df{}{x} x^5 = 5 x^4$$

and in general...

$$\df{}{x} x^k = k x^{k-1}$$

This is all we need. Suppose we have some function, and we know the value of the function, its rate of change, the rate of change of the rate of change, etc. In less cumbersome language, its first, second, third, fourth... differentials. And suppose we suspect it's equal to a power series:

$$f(x) = k_0 + k_1 x + k_2 x^2 + k_3 x^3 + \dots $$

where the $$k_0$$, $$k_1$$, etc. are numbers whose values we do *not* know. If we calculate the first, second, etc. differential of this power series, we get another power series.

$$\begin{align*}
f'(x) &= k_1 + 2 k_2 x + 3 k_3 x^2 + 4 k_4 x^3 + \dots\\
f''(x) &= 2 k_2 + (3 \times 2) k_3 x + (4 \times 3) k_4 x^2 + (5 \times 4) k_5 x^5 \dots \\
\end{align*}
$$

Now, when we set $$x$$ to zero, all the terms of every power series disappear... except the one at the beginning! This gives us an expression with just one $$k$$ constant in it:

$$\begin{align*}
f(0)  &= k_0\\
f'(0) &= k_1\\
f''(0) &= 2 k_2\\
f^{(3)}(0) &= 6 k_2\\
f^{(n)}(0) &= n! k_n
\end{align*}
$$

So if we know all the differentials at zero, we can find a general expression for the power series equivalent to any function (assuming certain technicalities hold up...)

$$f(x) = f(0) + f'(0) x + f''(0) \frac{x^2}{2} + \dots + f^{(n)}(0) \frac{x^n}{n!} + \dots$$

This is known as the Taylor series around zero. For $$e^x$$, we've seen that all the differentials are equal to 1:

$$f^{(n)}(0)=1$$

So our power series is nice and simple. This form of $$e^x$$ is the easiest way to discover Kimbune's theorem.

### The third ingredient: trigonometry

Now, let's look at another branch of maths which Baru would surely have encountered: the geometry of triangles, circles, and trigonometric functions.

The trigonometric functions are, essentially, ways to describe points on a circle. Let's say you start walking along a circle of radius 1---we call this the 'unit circle'. To walk half the way round the circle is a special distance, which we give the name $$\pi$$ (the Greek letter pi). Like $$e$$, $$\pi$$ goes on forever... it is, somehow, deeply baked into the geometry of flat space. Its value is approximately...

$$\pi=3.141592653589793238...$$

And if we keep going around the circle, we'll have eventually walked a distance $$2\pi$$. In the meantime, we will move through a series of $$(x,y)$$ positions. Assuming we start at $$(x,y)=(1,0)$$, and walk anticlockwise, then after we've walked a distance $$\theta$$, we will be at some specific position $$(x(\theta),y(\theta))$$  on the circle. For example, if we walk a distance $$\frac{\pi}{6}$$, we'll be at position

$$\left(x\left(\frac{\pi}{6}\right),y\left(\frac{\pi}{6}\right)\right)=\left(\frac{\sqrt{3}}{2},\frac{1}{2}\right)$$

{% include plot.html
    name="unitcircle"
    data="[{r: '1', fnType: 'polar', graphType: 'polyline'},{vector: [Math.cos(sliderValue),Math.sin(sliderValue)], fnType: 'vector', graphType: 'polyline', color: 'black'}, {r: '1', fnType: 'polar', graphType: 'polyline', color: 'black', range: [0.0,sliderValue]}]"
    domain="[-2,2]"
    extraOptions="annotations: [{x: Math.cos(sliderValue), text: 'cos(distance)'}, {y: Math.sin(sliderValue), text: 'sin(distance)'}]"
    slider="distance"
    slidermin="0"
    slidermax="6.28318530718"
    sliderdefault="0.52359877559"
    sliderstep="0.001" %}

The positions we go through around the circle are have been given names, defining two functions, called the 'cosine' and the 'sine' function for historical reasons. So after we've walked a distance $$\theta$$, we're at position

$$(x,y)=(\cos\theta,\sin\theta)$$

What's so important about this? These functions, $$\cos \theta$$ and $$\sin \theta$$, turn out to have far more uses than just examining circles. (Kimbune's theorem helps tell us why). We can understand this by looking at the rate of change. While the rate of change of $$e^x$$ was just $$e^x$$, calculating the rate of change of $$\cos$$ and $$\sin$$ turns one into the other:

$$\begin{align*}
\df{}{t}\cos t &= - \sin t\\
\df{}{t}\sin t &= \cos t
\end{align*}$$

So if we find the rate of change of the rate of change---acceleration, as opposed to velocity---we get back to where we started, with a minus sign:

$$\begin{align*}
\df{^2}{t^2}\cos t &= - \cos t\\
\df{^2}{t^2}\sin t &= - \sin t
\end{align*}$$

And this fact has a useful consequence. Let's think about a spring. The further we stretch the spring, the stronger the force pulling it back to its original length. The acceleration of the end of the spring depends on the force. So we get another kind of differential equation:

$$\df{^2x}{t^2}=-k x$$

This kind of differential equation is called the *harmonic oscillator*, and it's tremendously important to physics---to the point that it's been joked that physics is just finding new ways to solve the harmonic oscillator. This is because all sorts of problems can be approximated by harmonic oscillators.

Because their differentials are so nice, and because $$\cos 0=1$$ and $$\sin 0=0$$, the trigonometric functions *also* have very helpful Taylor series. They essentially divide up the terms of the exponential function's Taylor series between each other. Sine takes all the odd powers, and cos, the even. Only, the signs (plus or minus) alternate.

$$\begin{align*}
\cos x &= 1 - \frac{x^2}{2} + \frac{x^4}{24} \dots\\
\sin x &= x - \frac{x^3}{6} + \frac{x^5}{120}\dots
\end{align*}$$

You might be wondering... if their power series are so similar, is there some deeper relationship between the trigonometric functions and the exponential function? There absolutely is, but to find it, we need to make one of the most profound leaps in mathematical history.

### The fourth ingredient: complex numbers and the path of inventing new numbers

The thing we're about to describe is known as the 'imaginary number'. The name betrays the deep discomfort of the mathematicians who called it into being, but in fact the imaginary number is no more imaginary than any other kind of number.

To discover the imaginary number, let's pretend we know nothing but counting, and adding things up. All the numbers we know about are the <dfn>natural numbers</dfn>:

$$\mathbb{N}=\{0,1,2,\dots\}$$

Given two natural numbers, we can 'add' them together and get a third natural number: for example,

$$2+3=5$$

Now, let's suppose we want to ask a question like: what number, added to 3, will give 5? We can write this as:

$$3+x=5$$

and we want to discover the value of $$x$$. Sometimes, there is an answer: in this case it's $$x=2$$. But we want a general method that will always get us the answer; and moreover, we want to be able to handle cases like

$$6+x=2$$

which have no valid answer in the numbers we know.

To solve this problem, we create new numbers. For every natural number $$n$$, we create a matching number written $$-n$$, with the property that:

$$n+(-n)=0$$

We call these numbers the 'additive inverses' of the natural numbers, because by adding them to the natural numbers, they cancel out to the 'additive identity', zero.

These new numbers mean that we're no longer just working with the set of natural numbers. Now we have the <dfn>integers</dfn>:

$$\mathbb{Z}=\{\dots,-3,-2,-1,0,1,2,3,\dots\}$$

Suitably armed with these new numbers, we can solve all equations along the line of "if $$a+x=b$$, what is $$x$$?"---at least, assuming $$a$$ and b$$ are all integers. Good trick. But you know that's not the only kind of numbers.

Turns out you can build the entire number system wtih variants on this one weird trick!

For example, let's invent <dfn>multiplication</dfn>. The most basic kind of multiplication is just an instruction to repeatedly add up natural natural numbers:

$$x \times 5 = x + x + x + x + x$$

And we can work out how to multiply negative numbers, in order to make multiplication work in a way that is consistent. We find interesting rules like $$(-x)\times(-y)=+(x\times y)$$, which is pretty sweet.

But we soon hit a roadbump. Suppose we want to solve questions like, is there a number $$x$$ which will make an equation like

$$x \times 3 = 6$$

turn out to be true? (Yes, in this case! If $$x=2$$, the equation is true.)

Soon, we'll hit on the problem that, with the numbers we currently have, we can't solve certain equations. For example, try

$$x \times 3 = 2$$

We don't have any integer to solve this one!

So let's pull out the same trick, and create new numbers. Now, for every integer $$x$$, we create a new number called its multiplicative inverse, written $$\frac{1}{x}$$ with the property :

$$x \times \frac{1}{x}=1$$

Then, we multiply all these inverses with the existing integers to get even more new numbers, such as $$\frac{3}{2}=3\times\frac{1}{2}$$. In this way, we build up the whole system of 'fractions' (which are just all the possible products of an integer with the inverse of an integer)---and now we're in yet another new set of numbers, called the <dfn>rational numbers</dfn>.

While we're building out the rational numbers, we might notice something interesting. If we work out the rules, we find that $$\frac{3}{2}$$ is the exact same number as $$\frac{6}{4}$$. Suddenly, we have infinitely many different ways of writing a particular number. $$2$$ could also be written $$\frac{2}{1}$$ or $$\frac{14}{7}$$ etc. etc. But that's not all that much of a problem.

We've come quite a long way from our original natural numbers!

Why this long detour? Well, by looking back like this at the most 'basic' kinds of number, we can see that inventing new numbers to solve a problem is really nothing new. However, because all of these ideas were invented pretty early in human history, nobody doubts that fractions or negative numbers are 'real' kinds of number.

Now, let's consider one more operation: squaring, i.e. multiplying a number by itself. As before, we might want to solve certain kinds of equation, such as:

$$x^2=4$$

This one can be solved in two different ways: $$x=2$$ and $$x=-2$$. And other cases, such as

$$x^2=\frac{9}{4}$$

can be solved with fractions, in this case $$\frac{3}{2}$$ and $$\frac{-3}{2}$$.

But surprisingly enough, we often find equations which *can't* be answered using a fraction. For example:

$$x^2=2$$

can't be solved by any rational number! There's no fraction which we can multiply by itself, and end up with 2.

We have to invent *yet more* new numbers to solve this problem. These numbers, called 'radicals', lie 'in between' the rational numbers. Although they aren't rational numbers, we can still *approximate* them by adding together a series of rational numbers. For example, the positive square root of 2---the number which, when multiplied by itself, gives 2---has the 'decimal expansion' starting:

$$\sqrt{2}=1.41421356\dots$$

A decimal expansion is just a list of rational numbers to add up: $$1$$, $$\frac{4}{10}$$, $$\frac{1}{100}$$, etc. But when you have an infinitely long list, you can find your way to numbers that *aren't* rational.

By adding the radicals to our number system, we've found our way to the 'algebraic numbers'. Although the algebraic numbers aren't fractions, which caused consternation to ancient Greeks trying to build them with rulers and compasses, they at least have a clear place in between the fractions. Given any fraction $$f$$, we definitely can say whether $$\sqrt{2}$$ is larger or smaller than $$f$$.

So have we now discovered all the numbers? Not quite! When we added the radicals, we opened the door to numbers which aren't fractions, but which we can get to by adding infinitely long lists of fractions together. Turns out, there are a whole lot of decimal expansions which aren't given by square roots (or cube roots, etc.),

Well, we can go ahead and patch this hole. Let's declare that *every decimal expansion* now leads us to a number. This includes the numbers like $$\pi$$ and $$e$$ which we've met already. This does mean there are, once again, multiple ways to write down the same number: the number $$1$$ can now also be written $$0.99999\dots$$, because

$$\frac{9}{10}+\frac{9}{100}+\frac{9}{1000}+\dots=1$$

Like a wizard, we've called a whole lot of numbers into being. We can draw strict conclusions about what these numbers do, and how they relate to other numbers. (Incidentally, doing this is actually a pretty profound step in itself. If we ask 'how many real numbers are there', the answer is obviously 'infinitely many'. But in a very bizarre twist, it turns out there's different kinds of infinity, and the number of real numbers is a *bigger kind of infinity* than all the other sets of numbers we've seen so far.)

Have we, at last, found all the numbers we're likely to need? Unfortunately, not quite! And this is where we get towards the amazing insight that Baru sees in Kimbune's theorem.

Sometimes, the solution to an equation like

$$x^2=-9$$

...is *not* somewhere in the 'gaps' in the number line. It's not 3, since $$3^2=9$$. But it also can't be $$-3$$, since $$(-3)^2=9$$ as well.

Hopefully we're now comfortable with what we have to do: we invent! more! numbers!

In fact, the first step is to just invent one new number, the square root of $$-1$$. We call this number $$i$$, or the <dfn>imaginary unit</dfn>. All the other square roots of negative numbers are just multiples of $$i$$. The square roots of $$-4$$, for example, are $$2i$$ and $$-2i$$.

That name, 'imaginary number' suggests there's something distinct about $$i$$ that makes it different from other kinds of number. But as we've seen, we made up just about every other kind of number to close a gap in the number system.

With $$i$$, we can build all sorts of new numbers, such as $$5+3i$$. These numbers don't live anywhere on the number line, but we can imagine they live in a 2D plane, known as the complex plane. We call them 'complex numbers', and the nice thing about them is that we can solve *any* polynomial with a complex number, even ones without real roots. We can still invent new systems of number if we like, such as quaternions, but we've finally plugged all the gaps.

And now, for our next trick, let's put all our ingredients together...

### Cooking Kimbune's theorem

So we have our ingredients:

 - the exponential function
 - trigonometric functions
 - Taylor series
 - complex numbers

From here, it's easy. Plug an imaginary number---let's say $$i\theta$$ where $$theta$$ is some real number---into the power series for the exponential function, and apply the rule that $$i^2=-1$$:

$$e^{i\theta}=1+i\theta - \frac{\theta^2}{2} - i \frac{\theta^3}{6} + \frac{\theta^4}{24} + i \frac{\theta^5}{120} \dots$$

Can you see the power series for the trigonometric functions hiding in there? Let's rearrange the power series a little...

$$e^{i\theta}=\left(1-\frac{\theta^2}{2} + \frac{\theta^4}{24}+\dots\right)+i\left(\theta - \frac{\theta^3}{6} + \frac{\theta^5}{120} + \dots\right)$$

The power series for this exponential function is the same as the power series for $$\cos \theta$$, plus the imaginary unit times the power series for $$\sin \theta$$. Brushing over some technical details regarding convergence, we've proven the following amazing thing...

$$e^{i\theta}=\cos \theta + i \sin \theta$$

</details>

## The consequence of Kimbune's thoerem

$$e^{i\theta}=\cos \theta + i \sin \theta$$

This is Kimbune's formula (or Euler's, in the boring world). It does a few things. It tells us how to handle complex numbers in exponents, which was not at all obvious. It gives a fascinating geometric interpretation of complex numbers, as a kind of polar coordinates. It leads into the whole terrifying world of <dfn>complex functions</dfn>, which add some fascinating headaches. But we're getting away from the main point...

That relentless exponential growth and decay? Kimbune's theorem turns it 'sideways', transforming real numbers into imaginary numbers and back, in an endless circle.

This short video does a good job of illustrating this concept:

{% include youtube.html id='v0YEaeIClKY' %}

Now, let's imagine a point roaming the complex plane. At each instant, we can draw a little arrow to see which way it's going (its rate of change). The bigger the arrow, the faster the change.

{% include plot.html
    name="complexrateofchange"
    domain="[-5,5]"
    data="[{x: `exp(cos(${sliderValue})*t)*cos(sin(${sliderValue})*t)`, y: `exp(cos(${sliderValue})*t)*sin(sin(${sliderValue})*t)`, fnType: 'parametric', graphType: 'polyline', range: [0, 6*Math.PI]},{vector: [Math.cos(sliderValue),Math.sin(sliderValue)], offset: [1, 0], fnType: 'vector', graphType: 'polyline', color: 'black'}]"
    slider="direction"
    slidermin="0"
    slidermax="6.28318530718"
    sliderdefault="0"
    sliderstep="0.01"
    complexPlane=true %}

Exponential growth means that arrow points away from the origin. Exponential decay, back towards the origin.

And now we have a way to circle the origin, neither growing nor decaying, but always changing, ever faster the larger it is.

In Barhu's world, the number $$e$$ is called the 'number of interest'. Interest is the result of a loan: it is money turned to make more of itself. But through Kimbune's theorem, the process of interest is turned aside: not to expand but to transform...

Perhaps this metaphor is kind of a stretch? I think it's a fun reading though, given what Barhu plans to do.

## From Kimbune's theorem to ecology

Although we've talked about how bacterial growth gives rise to economic growth, in the real world, very few lifeforms get to happily grow their population without limit... as often as not, there's a shortage of food... or something out there to eat them.

[One of the simplest models](https://en.wikipedia.org/wiki/Lotka%E2%80%93Volterra_equations) involves a population of predators, and a population of prey animals. We can model this as a coupled system of differential equations: the population of predators rises as their food source increases, but predation wipes out the prey, and the starving predators die out. This video discusses a stripped down version of the problem:

{% include youtube.html id='https://www.youtube.com/watch?v=M0nRWcF1WJw' %}

Mathematicians have a tool for analysing this kind of problem: they move to a 'phase space', not so different from the complex numbers we've explored so far. One axis represents the number of prey, the other the number of predators, and the system 'moves' through phase space as the two populations vary.

Many choices of parameter result in orbits around a 'fixed point'. At the 'fixed point', the predators devour the prey as quickly as they are born, and themselves die off as quickly as they breed, and the two populations remain stable. Everywhere else, waves of prey breed without fear of predators, only to precipitate an explosion in the predator population which slaughters most of the prey... and then the predators starve, and the cycle begins again.

When we humans want to control a population of animals---for example, of deer---one of the most effective ways we've found is to introduce a population of predators to the region. And when we humans disrupt these cycles by, for example, killing off wolves for the sake of agriculture, the cycles of the ecosystem are disrupted.

Unfortunately, it's rarely as simple as this simple, two-component system. The explosion of prey populations will affect all the things the prey eat. One fascinating example is the [reintroduction of wolves into Yellowstone](https://www.yellowstonepark.com/things-to-do/wolf-reintroduction-changes-ecosystem). Prior to the reintroduction of wolves, elk populations had grown rapidly, threatening the reproduction of the things the elks ate, such as aspen trees. The failure of the aspen crashed the beaver population, and the lack of beaver dams caused further effects, increasing the variability of water runoff and removing places for fish to breed.

Reintroducing the wolves, on the other hand, made the elk start moving around a lot more---to avoid getting eaten! The aspen could bounce back, the beavers could bounce back, and so on; the effect was termed a 'trophic cascade'. The ecosystem started to edge back towards its rhythm of self-reproduction.

So, then, in this rather strained metaphor, the Masquerade's economic engine is like the population of elk. But there is no predator to keep it in check... not yet, anyway.

## The danger of over-abstraction

Yet at the same time, we don't want to disappear up our own asshole with this. The masquerade's problems aren't merely that its number (money) is growing faster than, say, the Mbo's number: it is that, on the strength of its ever-growing production, it can impose a powerfully self-replicating, horrifying eugenic terror regime on the people living in its shadow. Treating everything on the level of an abstract phase space is to ignore what is actually *happening* to the living beings inside that system.

Consider: a wolf chases a terrified elk, tears it limb from limb, and drags its corpse back to its cubs. The death of a deer, as Disney demonstrated with <cite>Bambi</cite>, can inspire a lot of empathy even in us humans. We've just explained how that is a really good thing for the perspective of a stable ecosystem, but it's hardly a good thing for the elk! The humans ruling over Yellowstone made the decision that they valued 'restoring' the ecosystem to a particular function enough that the painful death of a certain number of elk was an acceptable price to pay.

The same decision is made by those who set hunt quotas: the course of evolution has produced a world whose stability deeply relies on most lives teetering on the edge of sudden annihilation. Thinking too hard about this is what leads people to making grand declarations that the long term mission of humanity is to ascend to some kind of transhumanist omnipotence, and then reengineer death out of nature... or else to a radical break from the values of capitalist 'civilisation'. (Tain Shir says hi.)

What of Baru? Her plan is a little less abstract, but as we'll shortly see, the end she's pursuing is, for now, merely the *economic* destruction of Falcrest.

Will it be enough? Perhaps history can help tell us...