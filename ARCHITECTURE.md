# Architecture & Technical Notes

## Current Architecture (v0.3+)

- **Single-file HTML** (`full-ape-ski-escape.html`)
  - HTML5 `<canvas>`
  - Vanilla JavaScript game loop (`requestAnimationFrame`)
  - All logic, rendering, input, and state in one file
- **Why this approach?**
  - Extremely easy to embed in any website (just drop the file or use an iframe)
  - No build step, no dependencies, works offline
  - Perfect for quick prototyping and sharing during early development

## Key Systems

- **Game Loop**: `update()` + `draw()` running at ~60fps
- **Player (Titus)**: Position (`titusX`, `titusY`), speed modifiers from beer/jumps/moguls
- **World Scrolling**: Obstacles and beers move upward; player slowly descends on screen
- **Collision**: Simple distance-based checks (generous hitboxes for feel)
- **Chase (Mama Orangutan)**: Side-spawn + homing on player X + progressive rage (speed increase over time)
- **Input**: Keyboard + touch (left/right half of screen)
- **State Machine**: `intro` → `playing` → `win` / `lose`

## Design Decisions & Rationale

- **Single file vs modular**: Chosen for maximum embeddability and simplicity in early stages. Can be refactored later.
- **No external libraries**: Keeps the barrier to entry extremely low.
- **Canvas over DOM/SVG**: Best performance for many moving objects + custom rendering.
- **Generous collision**: Feels better in a casual/fun game than pixel-perfect detection.
- **Orangutan as persistent chaser**: Once she appears she stays on screen and keeps closing — creates constant pressure similar to SkiFree’s Yeti.
- **Beer as main power fantasy tool**: Simple, thematic, and gives clear "escape" moments.

## Known Limitations / Technical Debt

- All assets are either procedurally drawn or loaded from generated image files (caching can be an issue during development).
- Collision is distance-based rather than proper bounding-box or pixel-perfect.
- No sprite animation system yet (single static images per character).
- Performance may degrade with very high obstacle counts on lower-end devices.
- Audio is not yet implemented.

## Suggested Future Structure (when ready to scale)

```
full-ape-ski-escape/
├── index.html                 # Main entry (or keep single-file export)
├── src/
│   ├── game.js                # Core loop, state, input
│   ├── player.js              # Titus logic
│   ├── orangutan.js           # Chase AI
│   ├── obstacles.js
│   ├── rendering.js
│   ├── input.js
├── assets/
│   ├── sprites/             # Generated or hand-made pixel art
│   ├── audio/
├── styles/
├── README.md
├── ROADMAP.md
├── package.json             # If using a light bundler later
```

This structure keeps things simple while allowing the project to grow without becoming a mess.