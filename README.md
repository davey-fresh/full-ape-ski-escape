# Full Ape Ski Escape

A web-based endless skiing game inspired by the classic *SkiFree*, reimagined with 90s Sega Genesis / Street Fighter-style chunky pixel art.

**Current version: v0.6** — Core fantasy + major polish pass complete.

## The Concept

You play as **Titus**, a cool, muscular gorilla wearing sunglasses. You’re trying to get away from family responsibilities for a bit by skiing down a long mountain.

After ~17 seconds, the **Mama Orangutan** appears from the side and starts chasing you. She gets progressively faster and more aggressive. Use light beer pickups for speed boosts, jumps for air + bursts, and good steering to stay ahead until you reach the bottom.

If she catches you, she drags you off the mountain to go watch the kids.

## Core Mechanics (v0.6)

- Left/Right steering (keyboard arrows / A-D or touch left/right half of screen)
- **Jump** (Space / W / ↑) — air time + speed burst, can clear some hazards
- Auto-pickup light beer → 5-second speed boost
- **Moguls** temporarily slow you
- Plow through puke, rocks, trash
- Wipeout on trees and other skiers (yard sale)
- Persistent side-chasing orangutan that homes in and predicts a bit
- Screen shake + particles on big events
- Win celebration with the three gorilla bros chest-pounding
- Run stats (beers, jumps, close calls, time)
- Simple Web Audio SFX

## Art Direction

Chunky pixel / limited-palette procedural drawing inspired by Sega Genesis 16-bit and Street Fighter energy:
- Bold blocky forms
- Strong silhouettes
- Expressive (sunglasses Titus, angry Mama)
- Clear readable hazards even at speed

## Tech

Single self-contained `full-ape-ski-escape.html` file (HTML5 Canvas + vanilla JS + Web Audio).  
No external dependencies. Easy to embed via iframe or direct link. Works offline.

## How to Play

1. Open `full-ape-ski-escape.html` in any modern browser
2. Click/tap the intro to transform into Titus
3. Steer with arrows / A-D or touch halves
4. Press **Space / W / ↑** to jump
5. Ski over yellow beers to chug
6. Reach the bottom before she gets you

## Project History

Built iteratively through deep planning (grill-me style).  
v0.3 established the vertical slice.  
v0.6 closed the major gaps: jumps, moguls, chase feedback, celebration, stats, audio, stronger pixel drawing.

See `ARCHITECTURE.md`, `DECISIONS.md`, and `ROADMAP.md` for details.
