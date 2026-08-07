# Key Design Decisions Log

This file records important choices made during development (grill-me sessions) and the reasoning behind them.

## Gameplay

- **Left/Right only controls**: Deliberate simplification to focus on dodging and timing boosts. Matches the "get away for a bit" escapist fantasy.
- **Auto beer pickup + instant chug**: Removes extra button press. Keeps controls minimal and satisfying.
- **Jump (Space/W/↑)**: Added in v0.6 as a high-impact tool. Gives air time (can clear hazards), speed burst, and skill expression without complicating the core left/right fantasy.
- **Moguls**: Temporary slow instead of instant fail. Creates tension and forces recovery decisions.
- **Persistent side-chasing orangutan**: Once she appears she stays on screen and keeps closing. Predictive aiming + rage scaling keep pressure rising fairly.
- **Generous collision + airborne safety**: Prioritized "feel" over strict simulation. Jumping high enough lets you clear some threats.

## Scope & Iteration

- Started as tight vertical slice (1 character, 1 level) to validate core fantasy quickly.
- v0.3 locked the loop and fantasy.
- v0.6 deliberately closed the biggest vision gaps (jumps, moguls, celebration, feedback, audio, stronger visuals) while staying single-file.

## Technical

- Single-file HTML chosen for maximum embeddability and zero-friction sharing.
- Vanilla JS + Canvas + Web Audio for simplicity and performance.
- Procedural chunky pixel drawing chosen in v0.6 over external image dependencies for reliability and consistent 16-bit-inspired look.
- Touch support for steering; jump kept keyboard-primary for precision on the current control scheme.

## Art & Tone

- Titus designed as strong, cool, sunglasses-wearing gorilla for clear power fantasy and bro-escapist humor.
- Mama Orangutan kept visually distinct and threatening (bright orange, aggressive pose, scale-up when close).
- Humor kept light but present ("time to go watch the kids", chest-pounding bros, beer chugging).
- Win celebration with three bros fulfills the fantasy promised early in the project.

These decisions were made iteratively. Future changes should be logged here with reasoning.
