# Key Design Decisions Log

This file records important choices made during development (grill-me sessions) and the reasoning behind them.

## Gameplay

- **Left/Right only controls**: Deliberate simplification to focus on dodging and timing boosts. Matches the "get away for a bit" escapist fantasy.
- **Auto beer pickup + instant chug**: Removes extra button press. Keeps controls minimal and satisfying.
- **Persistent side-chasing orangutan**: Once she appears she stays on screen and keeps closing. Creates tension without feeling unfair if the player manages boosts.
- **Generous collision**: Prioritized "feel" over strict simulation. Makes grabs and wipeouts more satisfying.

## Scope & Iteration

- Started as tight vertical slice (1 character, 1 level) to validate core fantasy quickly.
- Chose to expand the hill length and orangutan timing before adding new features so the chase actually matters.
- Art direction was iterated: moved from basic shapes → generated cartoon → strong Sega Genesis / Street Fighter 16-bit pixel art.

## Technical

- Single-file HTML chosen for maximum embeddability and zero-friction sharing during early development.
- Vanilla JS + Canvas for simplicity and performance on a wide range of devices.
- Touch support added early because mobile play was considered important for this type of casual action game.

## Art & Tone

- Titus designed as strong, cool, sunglasses-wearing gorilla to give clear power fantasy and bro-escapist humor.
- Mama Orangutan kept visually distinct and threatening (bright orange, aggressive pose) so she reads clearly even on small screens.
- Humor kept light but present ("time to go watch the kids", chest-pounding bros, beer chugging).

These decisions were made iteratively through discussion and testing. Future changes should be logged here with reasoning.