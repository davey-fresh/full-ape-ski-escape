# Full Ape Ski Escape

A web-based endless skiing game inspired by the classic *SkiFree*, reimagined with 90s Sega Genesis / Street Fighter-style pixel art.

## The Concept

You play as **Titus**, a cool, muscular gorilla wearing sunglasses. You’re trying to get away from family responsibilities for a bit by skiing down a long mountain.

After ~18 seconds, the **Mama Orangutan** (your wife/girlfriend in the story) appears from the side and starts chasing you. She gets progressively faster over time. You must use light beer pickups for temporary speed boosts and good steering to stay ahead of her until you reach the bottom.

If she catches you, she drags you off the mountain to go watch the kids.

## Core Mechanics

- Only left/right steering (keyboard arrows or touch left/right half of screen)
- Auto-pickup light beer → 5-second speed boost
- Plow through puke, rocks, trash
- Wipeout on trees and other skiers (yard sale)
- Persistent side-chasing orangutan that homes in on you
- ~90 second run at normal speed

## Art Direction

Strong Sega Genesis 16-bit pixel art style with Street Fighter influences:
- Chunky pixels
- Bold outlines
- Vibrant limited color palette
- Expressive, dynamic character sprites

## Tech

Single self-contained `full-ape-ski-escape.html` file (HTML5 Canvas + vanilla JS). Easy to embed in any website via iframe or direct link. No external dependencies.

## Project History

This project was built iteratively through deep planning sessions (grill-me style) focusing on:
- Core gameplay loop and fun factor
- Character identity (Titus the strong gorilla)
- Chase mechanics inspired by SkiFree’s Abominable Snowman
- Mobile touch support
- Visual style direction
- Scope management (started as tight vertical slice: 1 character, 1 level)

Key decisions made during development:
- Player starts high on screen and slowly descends (classic scrolling perspective)
- Beer boosts are the main tool to create distance from the orangutan
- Orangutan appears from the side and homes in (persistent chaser, never leaves screen once active)
- Collision only triggers on actual shape overlap
- Art direction shifted to strong 90s Sega Genesis / Street Fighter pixel art

## How to Play

1. Open `full-ape-ski-escape.html` in any modern browser
2. On the intro screen, click/tap to transform from stressed human into Titus
3. Use Left/Right arrows or touch left/right side of screen to steer
4. Ski over yellow beers to chug for speed
5. Try to reach the bottom before the orangutan catches you

## Future Plans

- Jumps and moguls
- Multiple levels / character selection
- Win celebration animation with gorilla bros
- Sound effects
- More polish on 90s pixel art style

Built with Grok through iterative design and development sessions.