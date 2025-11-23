---
title: "what sort of game is an RPG? part 5: balance"
layout: article
categories:
 - rpgs
excerpt: How do game design questions shift when approaching RPG land? Here we take a look at the tricky subject of game balance.
tags:
 - rpgs
 - rpg design
---

In the last four articles in this series, I've considered the structure of RPGs from various angles, with a throughline being the 'prelusory goal + voluntary restrictions' theory of Bernard Suits.

All of this involves questions that tend to fall under the field of *game design*. Indeed, I even claimed that DMs and players are engaging in piecemeal bits of game design at the table, as they come up with rulings to handle unexpected situations.

We are angling in on weighing up Vi Huntsman's critique of overreaching game design. But let's set the scene.

In the current era, indie games are printed and sold by self-identified *game designers*, with the promise that following their rules you will achieve... something. A different sort of experience, perhaps, than you could devise on your own. For indie gamers, there is a general sentiment that different games are suited for different things, and you should make sure to pick the *best* system for the subject you want to represent. Against them stands the spectre of D&D players who refuse to try another game, even though by game design lights, their game of choice is ill-suited for what they use it for.

'System does matter' was, in particular, the watchword of the Forge---who, in fairness, made the very important observation that 'system' extends far beyond the pages of the rulebook, but also to all the unwritten procedures that shape the game which we discussed in [article 3](./rpgs-as-games-3-unwritten). Seeking a particular kind of experience, their solution was to write games which made these unwritten procedures much more explicit---even something you could do *incorrectly*. Ron Edwards would go on a tirade against a forum user who spoke about changing what he considered to be one of the core rules of Sorcerer.

However, before we speak too harshly of the ambitions of game designers, let's take a look at what motivates them. A hard problem of game design---perhaps the hardest---is how to make a game 'balanced'. This becomes even more squirly when applied to RPGs.

1. contents
{:toc}

## game balance

One of the biggest concerns in designing board games or computer games is the question of *game balance*. This is also frequently discussed in relation to RPGs, but how does it apply? We'll start outside the field of RPGs and work our way in.

In a competitive game, 'game balance' means that, relative to some axis of variation, a player doesn't get a significant advantage. For example, in an asymmetric game such as <cite>[hnefatafl](https://en.wikipedia.org/wiki/Tafl_games)</cite>, it means that (for 'equally skilled' players) both sides are equally likely to win. In a symmetric turn-based game like chess, it means that there isn't a significant advantage for either the first or second player. (In fact, at the highest levels, chess *does* have a first-move advantage, so it is *not* balanced on this axis.)

In games where players are given a choice of a variety of options, trying to make them balanced means the designer wants to make them all equally strong. For example, in a fighting game, if two characters are roughly equally likely to win (once again, in the hands of equally skilled players), then the game is said to be balanced.

### balance and strategies

Not every aspect of a game is supposed to be equal, or else there would be no room for skill in selecting a strategy, so the struggle against the voluntary constraints would not exist. For example, in a strategy game with multiple factions, the designers would probably try to make sure that two factions are equally likely to win in the hands of reasonably skilled players, but when a player is deciding which moves to make (e.g. which units to build), some moves may be much better than others for a given strategic situation.

That said, when it comes to strategies, balance is not irrelevant: the designer generally wants to avoid the existence of a "degenerate strategy", a term which originates in mathematical game theory. In game theory, it has [a technical definition](https://math.stackexchange.com/questions/395515/the-notion-of-degenerate-two-player-game), which essentially amounts to a strategy (pure or mixed) existing where it doesn't really matter which of several answering strategies the other player pursues, the outcome will be the same. (No guarantee that the degenerate strategy has a positive payoff for the player who selects it, mind you!)

However, in more casual terms, game designers tend to use it to refer to a strategy that (as Salen and Zimmerman describe it) exploits a weakness in the game design to get an unintended advantage that makes the game less complex. For example, in a fighting game, there might be a move that comes out fast and stunlocks the other character, and there is no feasible way to block it. A player could simply spam this move over and over and always win. This makes for a boring game, so game designers want to avoid it.

A less clear-cut case might be a move that *can* be countered, but requires a very complex technique that is beyond the skill level of most players. The availability of such a move might be a reason that character selection is unbalanced---and that the balance may be different at different skill levels.

In general, designers want their players' decisions to be 'meaningful'. So a game with a degenerate strategy, in the casual sense, is considered an unbalanced game.

But what exactly needs to be balanced is a nuanced question. In terms of mathematical game theory, for any game with finitely many players and 'pure strategies', it's [inevitable](https://en.wikipedia.org/wiki/Nash_equilibrium#Existence) that there will be, in terms of the payoff matrix, at least one optimal (Nash equilibrium) mixed strategy answered by its best response. This can't be something the game designer seeks to avoid. Instead, they want to make it challenging (physically, computationally...) for the players to always select the best strategy in the moment... and that the amount of effort that players need to expend to find a similar advantage is roughly the same.

### balance and metagame

If a lot of players are playing a game, they will quickly start to discuss strategy. Before long, optimal strategies will be found and spread through a community. This has an interesting consequence: some strategies may be weaker in general, but contextually strong against the optimal strategy. If most players in a community are playing the optimal strategy, playing such a 'counter' strategy will suddenly be a much better idea.

Before long, players will start playing the 'counter' more often, and after a while the previously optimal strategy may no longer be an optimal strategy. Now it's better to counter the counter. And so it goes.

So, as long as your game supports a variety of strategies that situationally have advantages over others, a game supports an additional evolving 'metagame' around it. For sufficiently complex games, different groups of players can easily have different metagames prevailing within them. (There's an article I wanna link here about the experience of moving to a different <cite>Netrunner</cite> play group, but I don't have it to hand.)

### non-competitive games

OK, that's a lot about competitive games, but what about single-player or collaborative games, where the player is opposed not by another human but a random or deterministic system? Well, assuming some sort of goal, then a game can still be balanced with respect to options or strategies.

One way of looking at it could be this: if all options give a player a reasonable chance of succeeding, the game has 'play' in the sense of free movement, and it is said to be balanced. If there is a universally 'best' option, a game is said to be unbalanced.

One way for this to be true would be for the automaton to always play a degenerate strategy, in the technical, mathematical sense. Then, all options are equally good; the game is balanced but also trivial. A better situation is one where the automaton plays different strategies at different times, and the player's challenge is to identify what the automaton is doing and understand the interplay of strategies, so they can answer it with the best response.

This angle treats the game as a two-player game, where the game designer sets the strategy for one of the players. However, there are other types of games. In puzzle games, there is usually only one solution, which is obviously the best strategy. *Finding* that solution is the challenge of the game.

Of course, as before, players spread knowledge about optimal strategies. In a team-based game, an expectation may form that players should strictly follow the optimal strategy once it is identified. For example, in an MMORPG, a player may calculate the most efficient damage rotation and gear, and everyone will copy that 'meta' pick. This leads to an unfortunate tension when the 'meta' strategy is not particularly fun to execute. If there is some pressure towards optimal play, such as a resource which players are trying to accumulate, the pressure to pick the 'meta' strategy may overwhelm the player's pursuit of fun.

As a result, you get a phenomenon like <cite>Warframe</cite> players---who joined up to play a game about space ninjas acrobatically traversing levels and fighting with a variety of weapons and moves---standing in a closet pressing the same button over and over for hours on end to accumulate a resource as efficiently as possible.

As Soren Jonsen [famously put it](https://www.designer-notes.com/game-developer-column-17-water-finds-a-crack/),

> Given the opportunity, players will optimize the fun out of a game.

### balance and the lusory attitude

Except, of course, players may in many cases deliberately choose to avoid the 'best' option for a more interesting game. After all, Bernard Suits said that is what a game *is*. With this expectation, you can also offer stronger or weaker options to a player and invite them to consciously elect to use a weaker option for an additional challenge. In <cite>Crypt of the Necrodancer</cite>, for example, you can choose to play a much more punishing character who immediately dies if they do not move on the beat; in most Supergiant games, there is a granular system to introduce restrictions or make the enemies stronger and increase the challenge.

Even without the game giving such an option explicitly, players may collectively agree to limit certain options to rebalance a game. In <cite>Pokémon</cite>, some pokémon are simply much more powerful than others. As a result, players of competitive Pokémon have sorted the pokémon into a series of strength tiers, and will agree to play only with pokémon up to that tier. So, weaker pokémon can see play, and the different tiers end up with different metagames, and the game is more diverse.

So, an unbalanced game can be remedied. Often, however, it won't be. What determines the situation where a player will take on an additional challenge, vs. the situation where they will pursue a tedious but optimal strategy? A matter of framing, perhaps. Or the fear of losing out.

### balance as a game design goal

We've seen a bunch of different tricky considerations around 'game balance'. In a computer game, or a board game, designers work hard to iterate and tune their game, making sure the optimal strategies are also fun, varied and challenging. Not an easy problem...

That's all well and good, but how does game balance apply to RPGs, where as we've seen, goals are kind of nebulous?

## balance in D&D

One of the most frequent criticisms of D&D 3.5e is that it's a terribly balanced game, with spellcasters vastly more powerful than non-spellcasters. But what does that mean?

There are various domains that balance could exist. For example, we could observe that in combat, a party with a spellcaster in it has a major advantage---they are more likely to win---compared to a party lacking a spellcaster.

However, that is intentional on the designers' part: the game is intended to be played by a mixed party, conventionally a fighter, rogue, wizard and cleric (but it could equally be a warblade, artificer, psion and druid). Assuming a game about overcoming a dungeon, where there is a goal along the lines of 'explore the dungeon, defeat the enemies, and make it out alive', the DM is encouraged to include tasks specialised for all the players. There are enemies to be fought, locks for the rogue to pick, and so on. So it is intended that an optimal strategy should include someone playing a spellcaster.

Instead, the problem is that the spellcasters can 'contribute more' in situations where everyone is involved, and can cover the niches of other classes better. For example, in a combat encounter, a wizard could cast a 'save or lose' spell such as 'Sleep' and completely disable the enemies; success is largely determined by the wizard. A well-optimised wildshape druid or self-buff cleric can fight more viciously than a fighter, and also cast spells. A spellcaster can even cast utility spells like 'open locks', negating the need for a rogue.

Why is this a problem? Well, the usual arguments would go...
- from the 'make-believe' angle, it undermines the intended fiction; the player of the fighter may not be getting the fantasy they want to explore, since they are largely irrelevant
- from the 'striving' angle, the only reason not to play a spellcaster is because you want to challenge yourself with additional rules

The main way this is balanced is limiting the spellcasters ability with a resource, such as spells per day. The spellcaster player has a few moments of enormous power, but is otherwise very weak. But critics of 3.5e argue that, under default assumptions, the players soon become absolutely flush with these resources. And if necessary, the party can crawl through the dungeon at a snail's pace, retreating into their extradimensional fortress to sleep and replenish spells.

A DM could respond by interfering with the party's ability to rest, but then another problem emerges: the spellcaster's power is very all-or-nothing, and they have little to contribute otherwise. As a result, the game is unstable: it requires constant adjustments to limit the spellcasters without making them irrelevant.

D&D is not only used for 'dungeon crawling' games. Combat is a common subject, but there are many different forms it can take. Others take inspiration mainly from the fantasy setting, and may put the focus of the game on mystery or political intrigue. In this case, the tools provided by the game are minimal, and most likely the emphasis will be on freeform narration, with the only thing kept being the 'procedural' element of D&D.

The question of 'relevance balance' remains in these domains, however. For example, if the players decide to add a mechanical element to social interactions using e.g. 'diplomacy' and 'deception' skill rolls, casters still have a much wider toolkit to enforce mechanical effects, like a 'dominate person' spell.

However, it's also frequently the case that most of the talking (and thus dicerolling) will be assigned to a 'party face' character with the best scores in these skills. This may be a case of 'optimising the fun out of a game', if other players would prefer to participate in 'social' scenes.

<small>Other balance complaints abound in 3.5e. Many character creation options are significantly less useful than others, [an intentional choice according to designer Monte Cook](https://web.archive.org/web/20080221174425/http://www.montecook.com/cgi-bin/page.cgi?mc_los_142), who wanted to 'reward player mastery' of the game. These 'trap' options (or 'Timmy cards', in Monte Cook's language) intentionally mislead a beginner player about how the game works. This makes the game far more baroque and complicated than it needs to be, makes most of the game rules simply irrelevant noise to an experienced player, and it's widely seen as an abdication of the responsibility of a designer to make a tight, balanced game.</small>

There is never any question, though, that players should be balanced with the DM in terms of narrative authority! It would be silly to say that 'be the DM' is the dominant strategy, because the DM has different goals entirely.

### could D&D be saved?

Later editions of D&D made strong efforts to balance the game. In D&D 4th Edition, the characters were designed to fulfil certain combat roles, often with quite similar mechanics, calibrated to achieve similar power to the other options; the game was, in that sense, far more 'balanced'. The result was nevertheless an *enormous* stink. A minority of players eagerly took to the new game, feeling that it answered their problems with the distorted world of 3.5e and gave them a much richer tactics game. But many others hated the new game, feeling that it was samey or too 'video gamey', and refused to change editions, or jumped ship for the new indie-game tents. (I'll mix metaphors all I want!)

The publisher Paizo even saw opportunity and spun up a game called <cite>Pathfinder</cite> which started as a minor variant on D&D 3.5e, and the game proved successful enough that it's still widely played today.

Trying to salvage the situation in 5th edition, the designers went for a design broadly more similar to 3.5e, but applied new limits and baseline powers to spellcasters to suppress some of the most problematic strategies and make them less 'all or nothing', and added more diverse options to the non-spellcaster classes. The result is a game that is not exactly *balanced* as far as combat potential etc., and makes some truly strange design assumptions about the pacing of the game... but is *more* balanced, and players... seem to appreciate it? Nevertheless, poor balance is still a frequent complaint.

Some players of D&D would write their own variants of it to address these issues. I have a copy of a game from 2011 called <cite>Legend</cite>, by Jake Kurzer, Chris Campbell and Pavel Samsonov. (It seems that the game has since been [wikified](https://legendwiki.com/index.php/Main_Page), so you need not download a PDF.) Structurally, the game makes no secret of being a streamlined variant of D&D 3.5e, issued under the Open Gaming License. Along with the rewritten rules with retuned numbers and revised mechanics, the game also comes with a kind of game design manifesto, one which really hinges on questions of balance. Their frustration with D&D is clear, with statements like...

> When it comes to “right-and-wrong” issues of gamedesign, we present only one principle: All of a
game’s narrative space should be fully supported. That is, if a game has rules for playing a character, the game should not simultaneously punish you for playing that character.

Indie efforts like <cite>Legend</cite> did not really catch on, perhaps lacking the backing of a major publisher but also living too much in the shadow of their parent game, with the appeal mostly reaching a niche of "experienced D&D players frustrated with game design problems". For whatever reason, most popular variants of <cite>D&D</cite> are quite unbalanced games. Perhaps Monte Cook was not entirely wrong, and there is some computer-hacker-like satisfaction sought by players in demonstrating their deep understanding of a complex but severely unbalanced system?

But we can't focus too narrowly on such fighting-oriented games...

## preserving the fun in trad RPGs

In the face of the terrifying power of the players to paint themselves in a corner where they don't engage with most of the game, what are game designers and GMs to do?

A great deal of the above difficulty comes when the players' goal is assumed to be to succeed at every task set before them (a 'character stance' attitude). One solution identified by game designers of the 2000s and 2010s was to make the 'failure' path less catastrophic and more interesting, so that it can satisfy the goal of 'create an interesting story' (a 'author stance' attitude). For example, the GM or another player might 'set stakes' before a roll, so that something dramatically interesting is always in question.

In a game of <cite>Burning Wheel</cite>, a game closer to the trad end of story games, losing in a Duel of Wits may force my character's beliefs and intentions to change. This could be a compelling narrative beat, and a fun thing to explore with roleplaying. Perhaps this line of thought would tempt me to enter a debate that my character is likely to lose?

Of course, this method works best if the players' goal is to create a varied story. Indeed, without any change of mechanics, prioritising this goal has a 'self-balancing' effect: you won't pursue the same strategy over and over because it's boring to do so.

But we've seen that RPGs can contain many shifting goals. We can't rely on the players being so conveniently aligned.

A canny GM can counteract the 'optimising the fun away' approach by applying pressure to the party that interferes with their default strategies, tempting players to take bigger risks, and so on---a narrow game design solution, on the level of scenario, to a broad game design problem on the level of rules. This works, and could be a lot of fun, forcing players to find alternative strategies to fall back on, and the game remains in a 'sweet spot' which is still 'unsolved'. But how to learn to do this? The advice of peers can only go so far; mostly it is experience. Should the game be giving more tools to help out?

I'll come back to that soon.

## balance in story games

In other designs of game with different goals, these concerns take a different shape.

For example, in <cite>Kagematsu</cite> (2009) by Danielle Lewon, one player controls a ronin called Kagematsu, and other players are townswomen vying for his attention in the hopes of having him protect their village. The role of Kagematsu is clearly very different from the other players. They are more restricted than the DM in D&D, but they still have a lot more control over scene framing and how things play out. Would it make sense to try to balance them? The fact that Kagematsu is powerful and important relative to the townswomen is the focus of the game. So, most of the game's 'balance' mechanics instead focus on allowing the townswomen equal screen time, and deciding who has priority to have a scene with Kagematsu.

<cite>Kagematsu</cite> is not a game without strategy or goals. Indeed, it has an unusually explicit goal, one that could even be called prelusory: the townswomen's goal is to win over Kagematsu, and the mechanics determine if Kagematsu will ultimately decide whether to stay with the village and who he loves. The townswomen can roll win affections from Kagematsu, with a 'push your luck' mechanic; affections can be traded forwards for acts of desperation later in the game. Kagematsu's player also has the option to assign secret points of love or pity to each woman, which may make future rolls easier, so as well as the board-game-like dice rolling mechanics, the player is also trying to roleplay in order to convince Kagematsu to give them 'love'. (This is the game's only 'fiction->tokens' arrow. Without this, 'formal <cite>Kagematsu</cite>' could be played as a board game, albeit probably not a terribly exciting one!)

Perhaps we could say that <cite>Kagematsu</cite> is just a variant on the traditional DM/player division, where one player is given more power and very different responsibilities/goals in order to give the others a context to act in. But other story games may still involve characters in positions of greater authority or power.

For example, a Hardholder in <cite>Apocalypse World</cite> rules a small settlement. The structure of the game does not give the Hardholder's player more screen time; since it is about characters with different goals which interact chaotically, it doesn't necessarily matter that the Hardholder has more resources, because they also have bigger problems to deal with, which will also frame the situations encountered by the other players. So even though within the fiction, the Hardholder has more power, it doesn't necessarily lead to a balance problem.

However, including a Hardholder in the game *does* cause the game to be framed around that settlement. This comes with many built-in conflicts, so it's quite desirable for the Bakers' design goal of creating an unstable narrative situation full of brewing trouble. It's also pretty upfront about what the players are signing up for when they pick a Hardholder. (Perhaps in a game set up from the outset to tell the story of a powerful wizard and their minions, the spellcaster advantage would also not feel objectionable.)

Overall, what we see is that for story games, having complex strategies is rarely a target, but balance *might* be pursued in structured games like <cite>Kagematsu</cite> which have competition as an element. In general, the scenarios and emphasis are such that Suitsian striving may not be a concern at all, or a very secondary concern to figuring out the next beat of the story...

## balance in old-school games

Old-school gamers tend to be quite dismissive of balance.

In <cite>The Elusive Shift</cite>, we hear about players taking their characters from one game to another, and referees complaining that other referees were far too generous with levels and magic items... so they would not allow such characters at their table. A more powerful character, it seemed, needed to be something which you *earned*. However, if a character had fought their way to high levels at a suitably challenging table, it seems like there was no intrinsic objection to introducing them to a different D&D group, even if they would be more powerful than the other characters.

This seems very strange from a modern view, where characters are almost always created for a specific game! Even if you wanted to *narratively* bring the same character in to a different game, you'd likely redo their statistics. Modern 'old-school' games, played by unfamiliar groups at one-shots, tend to follow the modern practice.

At character creation, there was also no assumption of a level playing field. While opinions in the old days seem to have varied, the *OSR* norm is that low-level characters are considered quite disposable, and their stats should be randomly generated with little choice on the player's part. The most hardline players will insist on a method like '3d6, straight down the line'---in comparison to later methods like '4d6 drop 1, player assigns' or point-based systems. The result is that the outcome is highly 'swingy': some characters would have overwhelmingly high stats, others would be near-useless. And if you got unlucky and rolled a weak character, or even just lacked the stats to choose your preferred class, tough luck. Sooner or later your character would probably die and you'd get another chance to roll!

For the current of old-school gamers who put a great emphasis on player skill and overcoming challenges, at first glance this attitude seems quite strange---naively, you would think that they'd want to offer a 'balanced' start point for the player strategies to shine. But perhaps the skill valued is the flexibility to roll with what you're given, and make the best of an unusual build, similar to a 'draft' in <cite>Magic</cite>?

In this case, the unpredictability of the party would be part of the fun, along with the unpredictability of the dungeon---and large parties, high randomness in general, and the 'caller' system would all make the initial stat differences relatively unimportant.

On the narrative side, many modern OSR players like to lean into the humour of creating scrappy, near-useless characters. I played one game this year where we rolled a bunch of dice for equipment, and had to spend them to pick items from hidden tables. The tables were designed such that players would generally only get one or two useful items and the rest would be junk. The dungeon was also randomly generated using cards. I spent one of my high dice on a weapons table and ended up arming my frog person with two bombs.

In this approach, the set of possibilities are so varied and open-ended that there is little room for a metagame. You might figure out what's advantageous on the fly, but every game is going to be quite different. Instead of trying to balance the game through evaluating strategies and tweaking rules, the rules aim to create so much chaos that reasoning about optimal strategy on a purely formal level is very difficult, and instead the optimal strategy is to think imaginatively about the fictional scenario and how your tools might apply to it.

In that sense, this is a very unique solution to balance questions that could *only* apply in the medium of RPGs.

## so does this piece of game design theory work for RPGs?

This is a lot of words on game balance! I set out to try to see how one of the core pieces of traditional game design theory maps into the RPG design space. Like, what sort of conceptual realignments do you have to make? RPGs are games, but they're not like other games...

To the extent that any given RPG is like a constrained, Suitsian game where players are pursuing a predictable goal, it makes sense to balance the options presented to players just like other games.

But we've spent the last four articles arguing that there is a lot more to them than that...

I am a big fan of [System Shop](https://redcircle.com/shows/system-shop), a podcast about RPG design by my friends Violet and Freya. In each episode, they examine various subsystems, contextualising their history, explore the space of possible designs, and at the end of each episode, they'll try coming up with ideas for novel approaches to that subject.

In this last segment, one frequent lament is that the idea that they came up with is "a board game", not an RPG. This is usually because the idea is too focused on 'tokens->tokens' arrows in Vincent's typology, mechanical systems that interact purely with themselves. To repeat the recurring theme, it's the fact that RPGs have 'fiction->tokens' and 'fiction->fiction' mechanics is what makes them *RPGs*, as opposed to another type of game: the fiction has to be a consequential part of the mechanics.

The fiction is one of the hardest parts to address with traditional (i.e. non-RPG) design theory, precisely because it's so unconstrained! And this is where we might get back to Vi Huntsman's critique...