# Architecture & Technical Notes

## Current Architecture (v0.6)

- **Single-file HTML** (`full-ape-ski-escape.html`)
  - HTML5 `<canvas>` (image-smoothing disabled for chunky feel)
  - Vanilla JavaScript game loop (`requestAnimationFrame`)
  - Web Audio API for simple synthesized SFX
  - All logic, rendering, input, state, and audio in one file
- **Why this approach?**
  - Extremely easy to embed (drop the file or iframe)
  - No build step, no dependencies, works offline
  - Perfect for rapid iteration and sharing

## Key Systems

- **Game Loop**: `update(delta)` + `draw()` ~60fps
- **Player (Titus)**: Position, speed modifiers (beer / jump / mogul), airborne state, lean animation
- **World Scrolling**: Obstacles and beers move upward; player slowly descends on screen
- **Jump**: Space/W/↑ — vertical velocity + temporary invulnerability height + speed burst
- **Moguls**: New obstacle type that applies temporary slow
- **Collision**: Distance-based with generous hitboxes; airborne check skips some collisions
- **Chase (Mama Orangutan)**: Side-spawn + predictive homing on player X + progressive rage; close-call detection
- **Feedback**: Screen shake, particle bursts, SFX, HUD warnings that intensify when close
- **Win State**: `celebrating` mode with three procedural gorilla bros + chest-pound timing + stats panel
- **Input**: Keyboard + touch (steer). Jump primarily keyboard for precision
- **State Machine**: `intro` → `playing` → `celebrating` / `lose`

## Design Decisions & Rationale (v0.6 additions)

- Procedural chunky pixel drawing preferred over external images for reliability and style control
- Jump added as high-impact power fantasy tool that also creates skill expression
- Moguls introduce temporary tension without instant fail
- Predictive element on orangutan keeps pressure fair but threatening
- Celebration sequence fulfills the “bros at the chalet” fantasy promised in the vision
- Web Audio kept extremely lightweight (no assets) so the file stays self-contained

## Known Limitations / Technical Debt

- Drawing is procedural rather than full sprite sheets / multi-frame animation
- No background music loop yet (SFX only)
- Touch jump not implemented (steer only on mobile; jump is keyboard)
- Performance is fine for current object counts; heavy particle spam could be profiled later
- Still single-file; modular split remains future option when complexity grows further

## Suggested Future Structure (when ready to scale)

```
full-ape-ski-escape/
├── index.html
├── src/
│   ├── game.js
│   ├── player.js
│   ├── orangutan.js
│   ├── obstacles.js
│   ├── rendering.js
│   ├── audio.js
│   ├── input.js
├── assets/ (optional later)
├── README.md
├── ROADMAP.md
```

Still keep an easy single-file export path.
