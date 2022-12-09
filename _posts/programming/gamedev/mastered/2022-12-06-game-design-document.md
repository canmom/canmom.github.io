---
title: THRUST//DOLL design spec
excerpt: A design plan for the project I will be undertaking during the Mastered game development course.
layout: article
categories:
 - programming
 - gamedev
 - mastered
---
{% include hiddentoc.md %}

## Game overview

<article class="film">
    <h1>THRUST//DOLL</h1>
    <dl>
        <dt>Platform</dt>
        <dd>Linux and Windows native, maybe browser</dd>
        <dt>Genre</dt>
        <dd>Third-person speedrunning game</dd>
        <dt>Target</dt>
        <dd>ESRB M; genre enthusiasts for movement shooters and shmups.</dd>
        <dt>Release date</dt>
        <dd>April 2023 (est.)</dd>
    </dl>
</article>

The player is a disposable transhuman 'doll' navigating zero-G 3D environments to evade obstacles and attack target point.

Their principal means of movement is a thruster, which rapidly pushes them towards a surface targeted by the mouse, combined with a grappling hook which lets them anchor themselves on a surface and 'orbit' that point. This is a full six-degrees-of-freedom movement system.

While the player is soaring about, they must avoid being destroyed by obstacles. Over the course of the game these obstacles increase in difficulty from static bombs and walls to seeking missiles and enormous arms.

Their target is located in a dangerous biomechanical space. To successfully navigate it, the player character's body must be upgraded with augmentations which improve their capacity for movement and grant cooldown abilities like slowing down time or an iframe dash.

## Narrative concept

A distant future where the line between technology and biology has blurred to nonexistence. The player controls a disposable THRUST//DOLL, injected into the heart of a vast machine intelligence to destroy its core. Only their modified, superhuman body can move and react fast enough penetrate the machine's defences. As the missions get more dangerous, it must evolve to match. But the more time it spends in this alien world, the less clear the THRUST//DOLL's cause becomes...

## Inspirations

<details markdown="1">
<summary>Inspirations</summary>

 - <cite>Mirror's Edge</cite>, [<cite>Neon White</cite>](https://store.steampowered.com/app/1533420/Neon_White/)---movement/speedrunning games with an emphasis on momentum 
 - [<cite>Warframe</cite>](https://www.warframe.com/landing)---aesthetic inspiration, fast parkour movement system with mouse-directional 'bullet jumps' and wallrunning
- <cite>NieR Automata</cite>---narrative and aesthetic influence, 3D 'bullet hell' gameplay, flags-based combat animations, particle effects
 - [<cite>Dandara</cite>](https://store.steampowered.com/app/612390/Dandara_Trials_of_Fear_Edition/), <cite>Deep Rock Galactic</cite>'s Scout class---examples of games whose movement system is based on targeting a surface and moving towards it
 - recent <cite>Spider-Man</cite> games for PS4/PS5---aerial grappling hook movement system
 - Arifumi Imai et al.'s animation in <cite>Shingeki no Kyōjin</cite> ([example 1](https://www.sakugabooru.com/post/show/198240), [example 2](https://www.sakugabooru.com/post/show/88098), [example 3](https://www.sakugabooru.com/post/show/162121))---media which portrays a web/grappling hook-based movement system to create an exhilarating sense of movement through 3D space
 - [<cite>Cyberqueen</cite>](https://xrafstar.monster/games/twine/cyberqueen/)---narrative influences
 - <cite>Superhot</cite>---game which alternates between very slow and very fast movement. 'shattering' visual
 - [<cite>Jet Lancer</cite>](https://store.steampowered.com/app/913060/Jet_Lancer/)---gameplay loop, general feeling of gameplay (high speed, asteroids-like, many threats on screen)
 - [<cite>Ship of Theseus</cite>](https://ramheadedgirl.com/games/shipoftheseus/), [<cite>Chernobyl Fairy Pool</cite>](https://ocias.com/works/chernobyl-fairy-pool/) and [<cite>Girljail</cite>](https://ocias.com/works/girljail/) by Ramheadedgirl/Alcopopstar and Alex Ocias---aesthetic influence
 - animations of [Tojo Kanno](https://www.youtube.com/user/tannokojo)---aesthetic influence
 - [<cite>Hyperdemon</cite>](https://store.steampowered.com/app/1743850/HYPER_DEMON/)---striking nonphotorealistic shader-based aesthetic, optimisation-focused high difficulty gameplay
</details>

## Game Objectives

Avoid dying, hit the machine core at high speed. Attempt to complete levels as quickly as possible.

## Gameplay loop

The player appears at one end of a level filled with obstacles. A minimap shows the layout of the whole level. Time is frozen until the player starts moving.

The player navigates through the level, avoiding obstacles until they hit the core. Depending on the speed they hit it, they do more or less damage.

If the player dies, they instantly return to the starting point. Dying is very quick and has no penalty, but the player's deceased bodies (or just bloodstains) remain floating in the level.

When the core is destroyed, the level ends. The player is awarded a score based on speed of completion (potentially other secondary objectives). It does not matter how many times they died, only the final run counts. The player has the choice to replay the level for a better time, or continue.

After completing a level, the player sees a brief visual novel-style story segment. They then get a preview of the shape and types of obstacle in the next level, or the option to return to a previous level and try for a better time.

The player then has the option to access an upgrade screen, where they have the option to add new abilities or improve the handling of their DOLL. Once they are satisfied with their build, the player may begin the next level, or replay a previous level. In the first pass, the story will be linear and the levels handcrafted, but future upgrades may add branching choices or a procedural generation system.

## Aesthetic

Cyborgs in biomechanical environments. Levels are a hazy amniotic space filled with floating particles. Masamune Shirow cyborgs and ball-jointed dolls. Low poly models with elaborate shader effects. Frequent body horror.

## Control scheme and mechanics

The game's mechanics are tightly coupled with the control scheme, so they're presented together here.

### Basic controls

The game can be played using a mouse or a standard XBox/Playstation-style controller with two analogue sticks. What follows is the default control scheme, but it can be modified by the player.

The control scheme is designed on the assumption that the player has one hand on the mouse and the other hand over the WASD keys in the mouse and keyboard setup, or that they keep their thumbs on the control sticks with a controller.

**Mouse** or **right analogue stick** movement controls the camera, which can orbit to view the doll from any angle. If there is level geometry between the camera and the DOLL, it becomes transparent. The 'up' direction for the camera is always dorsal to the doll. The player can roll or pitch the doll to change this angle (see below).

The doll's model is slightly off-centre, so that the player has a clear view along the targeting reticule. Usually the doll will be below and to the right of the centre of the screen, but if the camera would intersect with a wall, it may shift so that the doll is instead on the left or above.

After a few seconds with no camera adjustment (configurable by the player), the camera will start to move back to point in the direction of travel.

The **left mouse button** or **L2 trigger** creates a powerful thrust towards the mouse cursor. The thrust will automatically stop after a brief period, and has a short cooldown, creating a rhythm of alternating thrusts and inertial movement. If the player releases the button early, thrust ends immediately. After thrusting, player continues moving with their current velocity. While thrusting, the camera is aligned to the direction of thrust, and does not respond to mouse movement.

There is a drag force that imposes an effective terminal velocity on the player, and causes them to gradually slow to a halt if they don't thrust. I'll need to experiment a bit to figure out the right feeling---realistic drag is proportional to $$v^2$$ but we don't want the drag to feel too strong, since the emphasis is on intense speed.

{% include figure.html src="embed/gamedev/thrustdoll/concept/grapple.png" alt="Rough sketch of how the grappling hook works." %}

The **right mouse button** or **R2 trigger** launches the grappling hook. This attaches to a wall within range, and limits the distance the player can move from the point of attachment to the distance when they launched the grappling hook. This allows the player to make circular orbits using the thruster. Depending on preference, this can be set to a toggle system, or a hold and release system. The origin of the orbit is slightly raised from the target surface in the normal direction. The grappling hook is automatically released if the line collides with other level geometry.

The **WASD keys** or **left analogue stick** may be used to make small course adjustments. The faster the player is moving, the more control they have. The direction of these adjustments is based on the orientation of the doll, so W and A always control pitch (which affects the camera's 'up' vector), and A and S always control yaw.

The **Q and E keys** or **R1 and L1 buttons** allow the player to roll the doll, changing the camera's 'up' vector and the orientation of the previous controls.

The **R key** and the **Start** button immediately kill the current doll and restart the level.

If the player enters a small sphere around the core, the camera pulls back to a brief slow-motion cinematic shot in which they slice through it, creating a cascade of fragments.

{% include figure.html src="embed/gamedev/thrustdoll/concept/corestrike.png" alt="A sketch of hitting the boss." %}

If this is the end of the level, this animation lasts longer; the camera then flies to frame both the player and the destroyed core as the level lighting fades, while a results screen displays statistics such as total time, number of grapples, total thruster time, hits taken, etc.

If the player collides with a wall, the behaviour depends on upgrades. At first, the player simply stops and attaches to the wall---this allows players to get used to the control scheme. With an upgrade, the player will instead bounce off a wall in the surface normal direction, maintaining their momentum.

### Upgrade abilities

These upgrades are permanent and do not compete with other abilities. They are added over the first few tutorial missions. They can still be disabled if the player prefers.

ADRENAL HYPERPROCESSOR
: Location: brain.
: The **space bar**, **mouse 3 button** or **L3 button** can be used to slow down time. This also slows down the score timer, so there is no drawback to using this ability. This ability has a meter which depletes while active, and replenishes when inactive. An upgrade causes it to replenish rapidly after a brief period.

HELICAL TENSION ROD
: Location: grappling hook (right arm).
: The **control** key, **mouse 5 button** or **R3 button** can be used to cause the grappling hook to wind inwards, reducing the radius of the orbit.

SPACETIME LACUNAE
: Location: replaces stomach.
: The **shift** key, **mouse 4 button** or **X (Xbox)/Square (Playstation)** can be tapped to briefly become intangible (if the WASD/left stick is neutral) or rapidly move a short distance if a movement key is pressed. Either way, player is briefly invulnerable (i.e. this is an iframe dodge), and attacks will pass through harmlessly. Once used, the player has a cooldown before they can use it again. With additional upgrades, the player may hold multiple charges.

DIGITIGRADE ELASTICATION
: Location: replaces legs.
: Causes the player to bounce off walls, retaining momentum.

### Slotted upgrades

The DOLL has limited energy for upgrades, so they have to choose which upgrades to assign. The amount of energy grows over the course of the game. Initially all options will cost the same, but if necessary for balance reasons, it may be necessary to adjust.

ABLATIVE MUCOSA
: Equippable in shoulders.
: A shield that absorbs one enemy attack. (See 'Getting hit', below). Can be equipped twice, once per shoulder.

THRUST MEMBRANCE
: Equippable in thrusters.
: Increase the amount of force applied by the thruster. Can be equipped twice.

ATTITUDE VANES
: Equippable around sternum area.
: Increase the turning speed when using the WASD keys/left stick.

PANIC HORMONES
: Upgrade equippable in Adrenal Hyperprocessor.
: Automatically initiates the Adrenal Hyperprocessor (if ready) when an enemy attack comes within a certain radius of the player, and ends it when the danger is no longer near. Can be equipped once.

TRYPOPHILIA
: Upgrade equippable in Spacetime Lacunae.
: Gives an extra charge of Spacetime Lacunae. The lacunae start replenishing as soon as at least one charge is used to dodge. Can be equipped twice.

GLUTEAL HYPERTROPHY
: Upgrade equippable in Digitigrade Elastication.
: Increases the player's speed when bouncing off a wall by a factor of about 20%.

More will be added if I think of them.

### Enemies and death

Obstacle types include:

 - static obstacles:
     + deadly walls (indicated by spikes and mouths and shader effects)
     + floating spherical mines. if the player passes too close to them, they will create a spherical explosion with a 'void' effect.
 - predictable moving obstacles:
     + bullets, flying in geometric 'bullet hell' patterns (c.f. <cite>Nier</cite> series). bullets fly in straight lines until they hit a wall
     + moving walls
 - seeking obstacles:
     + arms have three joints, and when the player's doll is in range, they pivot to attempt to grab the doll in a massive human hand. The player's options are to move quickly through the arm's reach, or if caught, button mash to escape the grab.
     + sniper turrets create a warning laser which becomes dangerous after a second. it is dangerous to fly directly towards them, but they can't lead their target, so the player is safe if moving tangentially.
     + missiles fly towards the player at a steady speed. Their turning rate is limited, so they are likely to overshoot if the player is moving quickly at a short distance, and they can be left behind. However, if the player passes through a zone in front of them, they will make a warning flash followed by a sudden dash forwards.
 - enemy dolls:
     + a stretch goal, if development of everything else goes well!
     + late in the story, the player will encounter an enemy type that uses the same movement system as the player. this will have a smarter AI, and will attempt to get close to the player by projecting their movement forwards and thrusting to get as close as possible to intercepting the player.
     + Since this can be solved mathematically, as long as the level is finite, it is all but certain the enemy doll will collide with the player. To reduce difficulty, the enemy doll can have an increased cooldown between thrusts.
     + when an enemy doll gets close to the player's doll, the outcome depends on relative speeds.
         * If relative speed is high and the player is moving faster than the enemy doll, they will simply damage the enemy and remove one of its shields.
         * If the dolls have low relative speed, the camera will adjust to frame both dolls. The player must succeed in at least two of a series of three quicktime events using the WASD keys. If they succeed, the enemy doll takes a hit, otherwise the player will take a hit.
         * If the relative speed is high and the enemy doll is moving faster than the player, the player must succeed on a single quicktime event to parry their attack. If they succeed, the enemy doll receives a force in the direction of movement and has control briefly disabled, giving the player an opportunity to thrust towards them and get a free hit.

The player's hitbox is a sphere, regardless of the pose of the doll. Similar to many 'bullet hell' shooters, it is smaller than the player's visible model. We can potentially use an IK rig to make it look more natural when the player dodges an attack.

At the start, when the player's DOLL is hit by an enemy, they die and restart the level. Previous DOLLs appear floating in the level as static objects that do not interact with the grappling hook. If the player collides with one, it will be destroyed, turning into a bloodstain, without affecting the momentum of the player.

The ABLATIVE MUCOSA upgrade adds a shield which can absorb a hit. In this case, when the player is hit, any grappling hooks disengage and a strong force is applied in the direction of the attack. The player is briefly invulnerable, indicated by the shield growing brightly, and then it disappears. Once all ABLATIVE MUCOSA are stripped, the player will die on the next hit.

## User interface UI

### Upgrade screen UI

{% include figure.html src="embed/gamedev/thrustdoll/concept/configurator.png" alt="A sketch of the configurator screen." %}

The player's DOLL floats gently up and down, slightly offset from the centre of the screen to make room for the menu. Circular nodes indicate where upgrades can be applied. These may be selected using either the mouse (left click opens up a submenu, right clicking or clicking outside the submenu area closes it) or using the left analogue stick (A or X selects a node, B exits).

When selected, the camera adjusts to better frame the upgrade slot. Possible upgrades appear in a radial menu, along with their costs if not yet unlocked. Hovering over an upgrade shows a preview on the character model.

The player may also modify cosmetic aspects of their DOLL, such as skin colour and bioluminescence, which just involves changing material parameters. Additional purely cosmetic options may be added but this is a lower priority.

### Gameplay UI

{% include figure.html src="embed/gamedev/thrustdoll/concept/hud.png" alt="A sketch of the ingame HUD." %}

The UI is minimal and embedded in the 3D world. The player should be able to keep their eyes close to the centre of the screen when moving and use their peripheral vision to detect threats.

- the player has a laser running from the Doll to the first piece of level geometry in the target direction, and the point where their grappling hook will attach is brightly lit, fading with distance to give an intuitive feeling of how far away it is. The targeting raycast is performed directly along the line of sight, but the laser originates at the Doll's head so that it's actually visible.
- when the player is attached to a grapple, the radius of the grapple is visible as a faint sphere. If the player is at maximum grapple length, their course (great circle) is shown as well.
- the time slowdown resource meter is shown close to the targeting cursor as a short circular arc in the top right quadrant. It is not visible when fully charged.
- the iframe dodge charges appear at one end of the time slowdown resource meter.
- for each shield, a faint circle is drawn around the targeting reticule. When a mucosa breaks, a brief animation shows this line turning into fragments.
- when the core is visible, its health bar is represented by a circular arc around it, and the colour changes from white through to red.
- when the core is not onscreen, an indicator shows the easiest way to turn to face it.

## Player animation system

The doll's body is divided into 'soft' and 'hard' components. 'Soft' components are deformed by the skeleton. 'Hard' components are rigidly parented to a single bone.

All animation is procedural, using inverse kinematics. Each limb will have an IK target. Specifics will be determined during implementation, but some initial concepts:

- The thruster runs through the doll's chest. When the doll is moving, it points in the direction of movement. When a thrust is initiated, the doll rapidly orients the thruster to the right direction before thrusting.
- The doll's right arm is replaced with the grappling hook. When grappling a surface, this shakes with the force.
- The doll's left arm ends in an integrated sword. This is used when attacking the core, and when fighting another doll. When moving quickly, it dangles behind the doll.
- When the player moves the camera, the doll's head turns as far as possible to follow the camera direction.
- If the player is close to a wall and moving slowly, the doll will place its legs on the wall and run along it.
- When the player acquires the digitigrade legs upgrade, bouncing off the wall involves a kicking-off animation.

The doll's arms will float aimlessly when the doll is not moving for a long period.

## Visual effects

The amniotic fluid is thick enough to create a mist effect. Walls have a glowing effect when viewed tangentially, but they're dark when viewed face on.

Inside the fluid there are small floating particles or bubbles, which are visible when near the camera. They are repelled by the player's collision sphere and by mobile enemies, but their motion is highly damped. So everything leaves trails as it moves.

The player's model will have many coloured lights which shine on both the player and the nearby environment. These may or may not cast shadows depending on performance.

Missiles and other dangers will also glow brightly to separate them from the backdrop. Missiles will leave motion trails which will gradually fade.

Bombs create a spherical 'void' effect with a blueish glow around the fringes.

The Core glows very brightly, casting shadows on the nearby environment.

Post-processing effects such as lens flares will add to the look.

When the player is closer to their grappling hook than the maximum radius, it will be distorted using multiple frequences of sinusoid to ensure the total rope length remains correct. (Realistic rope simulation is not necessary.)

When the player is moving very fast, the camera will pull back and the FOV will get wider.

## Sound effects

Powerful 'boost' effect when thrusting. Increases in pitch before shutting off. Engine hum when idling, and 'spinning up' sound when the next boost is ready.

Grappling-hook launch effect and grappling-hook contact effect.

Beeping sound based on missile proximity?

Sharp 'shattering' sound when impacting the core.

Music: something sinister and industrial, but with a strong beat that matches the rhythm of thrusting. (Alternative idea: procedural music with a note associated with each player action?)