# Roadmap & Future Iterations

This document outlines planned and potential future work for *Full Ape Ski Escape*.

## Completed in v0.6 (Gap-Closing Pass)

- [x] Jumps with air time + speed burst
- [x] Moguls that temporarily slow the player
- [x] Improved collision feedback (screen shake, richer particles)
- [x] Better yard-sale / grab feedback
- [x] More aggressive + predictive orangutan AI
- [x] Visual intensity when she is very close
- [x] Proper win sequence with three gorilla bros + chest-pounding
- [x] Level / run stats (beers, jumps, close calls, time)
- [x] Stronger procedural 16-bit-inspired pixel drawing
- [x] Basic Web Audio SFX (chug, jump, wipeout, land, close, win, pound)

## High Priority (Next)

- [ ] Multi-frame / lean animation polish for Titus and orangutan
- [ ] Background music (simple chiptune-style loop)
- [ ] Touch jump gesture (or on-screen jump button)
- [ ] More distinct "yard sale" recovery / ragdoll feel
- [ ] Slightly more variety in obstacle placement / patterns

## Medium Priority

- Multiple levels or increasing difficulty segments
- Character selection (extra gorilla variants with small ability differences)
- Additional power-ups
- High score / local leaderboard
- Parallax background layers
- Better particle system (snow, impact, beer foam variants)

## Stretch / Nice to Have

- Full sprite sheet support (optional external assets while keeping procedural fallback)
- Screen hit-stop on big events
- Procedural or hand-crafted longer mountain segments
- Lightweight online score sharing
- Accessibility options (colorblind-friendly palette, remapping)

## Technical Debt & Improvements

- Consider light modular split when adding music + more animation systems (still export single-file)
- Performance pass if particle or obstacle counts grow significantly
- Mobile polish (safe areas, better touch targets)

## Suggested Iteration Approach

1. Polish the current v0.6 vertical slice until it feels excellent on both desktop and mobile.
2. Add one major feature at a time (music → animation frames → second level concept).
3. Expand scope only after the core 1-level experience is consistently fun.

The core fantasy is now fully playable and closer to the original vision.
