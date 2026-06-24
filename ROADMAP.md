# Roadmap & Future Iterations

This document outlines planned and potential future work for *Full Ape Ski Escape*, prioritized roughly by impact and feasibility.

## High Priority (Next Milestones)

### 1. Core Gameplay Polish
- [ ] Add **jumps** that give strong forward speed boost (air time + landing)
- [ ] Add **moguls** that temporarily slow the player with bumpy animation
- [ ] Improve collision feedback (screen shake, particles, sound on wipeout/grab)
- [ ] Better "yard sale" wipeout animation and recovery

### 2. Chase & Tension
- [ ] More aggressive and fair orangutan AI (better prediction, slight telegraphing)
- [ ] Visual/audio warning when she gets very close
- [ ] Different "grab" animations or outcomes

### 3. Win / Celebration
- [ ] Proper win sequence when reaching the bottom
- [ ] Three gorilla bros appear and do chest-pounding + beer chugging animation
- [ ] Level complete screen with stats (distance, beers chugged, close calls, etc.)

### 4. Visual & Audio
- [ ] More 90s Sega Genesis / Street Fighter style assets (more frames for Titus, better obstacles, background layers)
- [ ] Simple sound effects (boost chug, wipeout, orangutan growl, chest pound)
- [ ] Background music loop (chiptune style)

## Medium Priority

- Multiple levels with increasing difficulty / different themes
- Character selection (Magma, Titus, Grok, Maurice) with unique abilities
- Power-ups beyond beer (temporary invincibility, bigger plow radius, etc.)
- Mobile optimizations and better touch controls
- High score / local leaderboard
- Simple particle system improvements

## Stretch / Nice to Have
- Full sprite sheet animations for Titus (skiing, chugging, chest pound, wipeout)
- Parallax background layers
- Screen shake and hit-stop on big events
- Procedural obstacle generation or hand-crafted level segments
- Online score sharing (lightweight)

## Technical Debt & Improvements
- Move from single HTML file to small modular structure when complexity grows (still keep easy single-file export option)
- Better asset pipeline for generating/updating pixel art sprites
- Performance profiling (especially with many obstacles + particles)
- Accessibility (colorblind modes, input remapping)

## Suggested Iteration Approach

1. **Polish current vertical slice** until it feels really good (core loop, chase tension, controls, visuals).
2. **Add one major feature at a time** (jumps/moguls → win celebration → audio).
3. **Expand scope only after the core 1-level experience is strong**.

This keeps the project fun to work on and avoids scope creep.