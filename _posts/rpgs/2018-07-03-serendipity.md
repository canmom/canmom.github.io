---
title: Serendipity
excerpt: A D&D character for the 'Sea of Storms' one-shot side adventure.
layout: article
categories:
 - rpgs
---

**Tiefling Bard 3**\\
**Story:** The Traveler\\
**Background:** Runaway\\
**Str:** 10 (+0)\\
**Dex:** 14 (+2)\\
**Con:** 12 (+1)\\
**Int:** 10 (+0)\\
**Wis:** 12 (+1)\\
**Cha:** 17 (+3)\\
**Proficiency bonus:** +2

## Description
### Brief background
Under her old name and gender, Serendipity was Nasim, the illegitimate "son" of a notable Drakyran House. She was treated as an object of shame by her family, for both her Tiefling heritage and her refusal to follow the gender norms of Drakyran society. Pushed to the sidelines of house affairs, she increasingly fell in with bohemian artists seeking noble patronage. So much is known.

The exact circumstances that lead to her abrupt disappearance are still shrouded in mystery, and she prefers it that way.

### Ideal
To turn the world on its head through speech and song.

### Bonds
tbd.

### Personality traits
tbd.

### Flaw
tbd.

## Combat stats
**max HP:** 21\\
**Armour class:** 13\\
**Initiative:** 12\\
**Passive perception:** 13\\
**Passive insight:** 13

### Attacks and abilities
 - **Rapier** +4 to hit melee, 1d8+2 damage.
 - **Bardic Inspiration** Once per turn, inspire someone rolling ability check, attack roll or saving throw to add 1d4 before the roll. 4 uses per short rest.
 - **Song of Rest** Roll Bardic Inspiration die to add to all allies' healing on short rest. On long rest, gain back one extra hit die.

## Spellcasting
**Spell slots:** 3 (1st-level)\\
**Spell save DC:** 13\\
**Spell attack modifier:** +5\\
**Spellcasting ability:** Cha

## Spells known
### First-level
{% capture healingword %}
*1st-level evocation*\\
**Casting Time:** 1 bonus action\\
**Range:** 60 feet\\
**Components:** V\\
**Duration:** Instantaneous

A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.
At Higher Levels.

When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.
{% endcapture %}

{% include hidden.html content=healingword id="healingword" title="Healing Word" %}

{% capture disguiseself %}
*1st-level illusion*
**Casting Time:** 1 action
**Range:** Self
**Components:** V, S
**Duration:** 1 hour

You make yourself, including your clothing, armor, weapons, and other belongings on your person, look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.

The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.

To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.
{% endcapture %}

{% include hidden.html content=disguiseself id="disguiseself" title="Disguise Self" %}

{% capture heroism %}
*1st-level enchantment*
**Casting Time:** 1 action
**Range:** Touch
**Components:** V, S
**Duration:** Concentration, 1 minute

A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell.
At Higher Levels.

When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.
{% endcapture %}

{% include hidden.html content=heroism id="heroism" title="Heroism" %}

## Features
### Class features
{% capture bardicinspiration %}
Bards inspire others through their music, words, and actions, and simply spending time in a bard’s presence is often enough to spur her allies to greater heights of heroism. When a creature other than yourself who can see or hear you makes an ability check, attack roll, or saving throw, you may roll your Bardic Inspiration die and add the number rolled to the result. You must invoke this ability before the roll, and you may only inspire allies in this manner once a turn.

You can use this feature a number of times equal to 1+ your Charisma modifier (minimum one use). When you finish a short rest, you regain all expended uses.

Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d6 at 5th level, a d8 at 9th level, a d10 at 13th level, and a d12 at 17th level.
{% endcapture %}

{% include hidden.html content=bardicinspiration id="bardicinspiration" title="bardicinspiration" %}

{% capture jillofalltrades %}
You can add half your proficiency bonus, rounded down, to any ability check you make that doesn’t already include your proficiency bonus.
{% endcapture %}

{% include hidden.html content=jillofalltrades id="jillofalltrades" title="Jill of All Trades" %}

{% capture songofrest %}
Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains extra hit points equal to a roll of your bardic inspiration die.

If you perform in this manner for at least an hour as light activity during a long rest, any allies who can hear your performance recover one additional hit die at the end of the long rest. 
{% endcapture %}

{% include hidden.html content=songofrest id="songofrest" title="Song of Rest" %}

{% capture naturalperformer %}
Whenever you make a charisma check as part of a performance, or while interacting with a creature who has witnessed an artistic performance of yours, your proficiency bonus is doubled if it applies to the check. 
{% endcapture %}

{% include hidden.html content=naturalperformer id="naturalperformer" title="Natural Performer" %}

{% capture songoftheroad %}
Starting at 3rd level, you can perform a song that bolsters the resolve and raises the spirits of your allies. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet who can hear you have advantage on Constitution checks and Constitution saving throws. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).
{% endcapture %}

{% include hidden.html content=songoftheroad id="songoftheroad" title="Song of the Road" %}

### Tiefling features
- **Darkvision** Thanks to the lingering gifts of your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.
- **Hellish Resistance** You have resistance to fire damage.
- **Infernal Wrath.** When you score a critical hit with a weapon or a spell, you can roll one of the damage dice one additional time and add it to the extra damage of the critical hit.
- **Will of Kings** You have advantage on saving throws against being charmed.

### Background features
**Secret Identity** You had an old life, perhaps even an old name, that you do not speak of. No one you meet who doesn’t already know this suspects it, nor do they have any means to discover the truth of your past. However, you have kept something from your old life that can prove your past is true, should you choose to reveal it.

## Languages
 - Trade-tongue (spoken)
 - Supernal (spoken)
 - Turathi (spoken, written, read)
 - Drakyran
 - two extra from background

## Equipment
 - Traveler's clothes
 - Practical fighting clothes
 - Memento of past life
 - Something from new life
 - One piece of Drakyran gold (2gp)
 - Five silver pieces (5sp)
 - Rapier
 - Flute

## Proficiencies
### Saves
 - Dexterity
 - Charisma

### Skills
 - Acrobatics
 - Deception
 - Insight
 - Perception
 - Performance
 - Persuasion

### Trades
 - Courtly Dancing
 - Etiquette
 - Flute
 - Disguises
 - Burglary
 - Calligraphy

### Equipment
 - Light armour
 - Simple weapons
 - Pistols
 - Rapiers
 - Scimitars
 - Shortswords