---
title: Sumi Sergrim
excerpt: A D&D character for 'Sea of Storms'.
layout: article
categories:
 - rpgs
---

**Orc Warlock 2**\\
**Patron:** Leviathan's curse\\
**Background:** Shrine Maiden\\
**Str:** 14 (+2)\\
**Dex:** 10 (+0)\\
**Con:** 14 (+2)\\
**Int:** 10 (0)\\
**Wis:** 12 (+1)\\
**Cha:** 16 (+3)

## Description
### Brief background
Sumi lived among a typical community of hardworking gay orcs in a clifftop village, dreaming of the Ancestors, flirting with other orc girls and dutifully attending to the small circle of stones. But after a spirit started causing trouble, she volunteered to deal with it - and a tense moment, discovered abilities she'd never imagined she'd had, and with them, manifested the Black Spot.

Which was kind of alarming.

Neither Sumi nor anyone else in the village had any idea what to make of these powers, but they recognised them as a curse. They pooled resources to send Sumi out to find out what had cursed her.

### Ideal
To live a bold, ingenious, romantic life like Grim, but also embody wisdom, care, and devotion like Seritha.

### Bonds
 - **Ariel:**
 - **Freya:** Freya was there when Sumi was born, and has known her all her life. She was the first person Sumi went to after discovering her curse.
 - **Minerva:** Minerva lived near Sumi's village, and she and Sumi set out on their journey together.
 - **Striven:**

### Personality traits
Sings constantly, and is quick to ask others to join her in dancing and music.

### Flaw
Naive, prone to acting without thinking.

## Combat stats
**Max hit points:** 17 (22 when Armor of Agathys is active)\\
**Armour class:** 11 (13 with Mage Armour)\\
**Initiative:** +0\\
**Passive perception:** 11

### Attacks and abilities
**Quarterstaff:** melee +4, 1d8+2 dmg\\
**Thunderclap:** everyone within 5ft must make Con save, DC 13, or take 1d6 dmg\\
**Mage Armour:** increase AC to 13.\\
**Gaze of Two Minds:** perceive through another creature's senses.\\
**Dissonant Whispers:** requires one spell slot. one creature within 60ft must make Wis save, DC 13, or take 3d6 damage and be forced to move away as far as possible. Successful save = half damage only.\\
**Arms of Hadar:** requires one spell slot. everyone within 10ft must make Str save, DC 13, or take 2d6 damage and not be able to take reactions for a turn. Successful save = half damage only.\\
**Armour of Agathys:** requires one spell slot. gain 5×spell level temporary HP and any creature that hits me in melee takes 5×spell level cold damage.

## Spellcasting
**Spell slots:** 2\\
**Spell level:** 1\\
**Spell save DC:** 13\\
**Spell attack modifier:** +5\\
**Spellcasting ability:** Cha

Can cast any known spell by spending one spell slot. Regain all spells after short or long rest.

## Invocations
### Armour of Shadows
You can cast mage armour on yourself at will, without expending a spell slot or material components.

{% capture magearmour %}
*1st-level abjuration*
**Casting Time:** 1 action
**Range:** Touch
**Components:** V, S
**Duration:** 8 hours

You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends it if the target dons armor or if you dismiss the spell as an action.
{% endcapture %}

{% include hidden.html content=magearmour id="magearmour" title="Mage Armour" %}

### Gaze of Two Minds
You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings.

## Spells known
### Cantrips

{% capture minorillusion %}
*Illusion cantrip* \\
**Casting Time:** 1 action \\
**Range:** 30 feet \\
**Components:** S, M (a bit of fleece) \\
**Duration:** 1 minute

You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.

If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.

If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.

If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.
{% endcapture %}
{% include hidden.html content=minorillusion id="minorillusion" title="Minor Illusion" %}

{% capture thunderclap %}
*Evocation cantrip* \\
**Casting Time:** 1 action \\
**Range:** 5 feet \\
**Components:** S \\
**Duration:** Instantaneous

You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within range, other than you, must make a Constitution saving throw or take 1d6 thunder damage.
{% endcapture %}
{% include hidden.html content=thunderclap id="thunderclap" title="Thunderclap" %}

### 1st level spells
{% capture dissonantwhispers %}
*1st-level enchantment* \\
**Casting Time:** 1 action \\
**Range:** 60 feet \\
**Components:** V \\
**Duration:** Instantaneous

You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn't move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn't have to move away. A deafened creature automatically succeeds on the save.

*At Higher Levels:* When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.
{% endcapture %}

{% include hidden.html content=dissonantwhispers id="dissonantwhispers" title="Dissonant Whispers" %}

{% capture armsofhadar %}
*1st-level conjuration*\\
**Casting Time:** 1 action\\
**Range:** Self (10-foot radius)\\
**Components:** V, S\\
**Duration:** Instantaneous

You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can't take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect.

*At Higher Levels:* When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.
{% endcapture %}

{% include hidden.html content=armsofhadar id="armsofhadar" title="Arms of Hadar" %}

{% capture armorofagathys %}
*1st-level abjuration*\\
**Casting Time:** 1 action\\
**Range:** Self\\
**Components:** V, S, M (a cup of water)\\
**Duration:** 1 hour

A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage.

*At Higher Levels:* When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot level above 1st.
{% endcapture %}

{% include hidden.html content=armorofagathys id="armorofagathys" title="Armor of Agathys" %}

## Features
### Class features
 - **Call of the Deep** You can breathe underwater and you have a swimming speed of 20 feet. Additionally, when immersed in water, your warlock spells no longer require verbal components.

### Orc features
- **Athletic** Ignore the effects of difficult terrain while climbing and swimming.
- **Brave** Advantage on saves vs frightened.
- **Swapping Stories** When making Int (History) check about lives, deeds etc. of dead orcs, get double proficiency.
- **Folly's Daughters** Can reroll a roll of 1 on attacks, ability checks or saves.

### Background features
 - **Intermediary** When you find yourself at a circle shrine, you can attempt to strike a deal with the Eternals. They will never ignore your calls to bargain, although you gain no special clemency on the price asked in exchange.  You may use this feature, at most, three times in your life.  You haven’t dared to do so before now. 

## Languages
 - Trade-tongue (spoken)
 - Orcish (spoken, read, written, signed)
 - Turathi (spoken, read, written)

## Equipment
 - Traveler's clothes
 - A stone from my shrine
 - Candle lantern
 - 14 shards of silver (14sp)
 - Practical fighting clothes
 - Quarterstaff
 - A delicately braided ring of Turathi white gold

### Dashing fighting clothes savings
 - new dress and gloves worth 3gp

## Proficiencies
### Saves
 - Wisdom
 - Charisma

### Skills
 - Insight
 - Intimidation
 - Religion

### Trades
 - Musical instrument - Bodhrán & singing
 - Beekeeping
 - Herbalism