# HEROIC 5e v2.4 Roll20 Sheet

This folder contains a Roll20 custom character sheet package:

- `heroic5e.html` - Roll20 sheet markup, roll template, and sheet workers.
- `heroic5e.css` - Roll20-safe styling using `sheet-` classes.
- `sheet.json` - Metadata for a Roll20 sheet package or community-sheet submission.

## Install In Roll20

1. Create or open a Roll20 game with a Pro account.
2. Go to Game Settings, then Character Sheet Template.
3. Choose Custom.
4. Paste `heroic5e.html` into the HTML/Layout tab.
5. Paste `heroic5e.css` into the CSS Styling tab.
6. Save changes and launch the game.

If the sheet shows as plain text, Roll20 is stripping the sheet controls. First paste
`roll20-smoke-test.html` into the HTML/Layout tab with an empty CSS tab and save. If
that also shows plain text instead of two fields and a roll button, the game is not
actually applying a Custom sheet template or Roll20 is using the wrong sheet sandbox
setting for the game.

## Current Coverage

The sheet supports HEROIC 5e v2.4 live play basics:

- Eight HEROIC abilities: STR, DEX, CON, FIG, INT, WIS, CHA, PER.
- Campaign Rank automation for Power Die and starting Edge.
- Level-based Prowess automation.
- Class automation for Hit Die, primary ability, recovery, and default math.
- Ability modifiers, trained saves, skill training, expertise, defenses, initiative, class EV, power EV, HP maximum, and Edge cap.
- Roll buttons for abilities, skills, active defenses, initiative, burnout, and repeating powers.
- Repeating sections for power sets and powers.
- Text areas for features, talents, merits, flaws, triggers, gear, conditions, allies, enemies, and notes.

## Notes

Roll20 custom sheets do not use a full HTML document wrapper, external JavaScript, or local image assets. This package intentionally does not reuse the printable `Sheetv2.4/character-sheet.html` directly because that file is built for browser/PDF output rather than Roll20's sandbox.
