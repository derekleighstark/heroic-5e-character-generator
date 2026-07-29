# Heroic 5e for Foundry VTT

A native Foundry Virtual Tabletop system for **Heroic 5e v2.4**, built for Foundry VTT **14.364**. System version **1.2.0**.

## Install locally

1. Close Foundry VTT.
2. Copy this entire folder into your Foundry user-data `Data/systems` directory.
3. Rename the copied folder to `heroic5e` (the folder name must match the manifest ID).
4. Start Foundry, create a new world, and select **Heroic 5e** as its game system.

For a hosted release, zip the folder contents so `system.json` is at the root of the archive, host both the zip and manifest, and add `url`, `manifest`, and `download` fields to `system.json`.

## Included

- Foundry VTT generation 14 manifest and ApplicationV2 Actor/Item sheets
- Typed data models for Heroes, NPCs, Powers, Features, and Equipment
- Dedicated GM-focused NPC sheet with Day Player through Cosmic tiers, minion and boss controls, static Attack/Effect/Defense Values, suggested HP, ability modifiers, powers, traits, conditions, and share-to-chat actions
- Eight Heroic abilities, all 17 skills, trained saves, and expertise
- Automated prowess, class/rank progression, HP, Edge, defenses, attacks, Effect Values, Power Die, and recovery math
- Clickable ability, save, skill, initiative, defense, and Power rolls
- Power attack and damage chat messages; formulas support `@powerDie` and `@powerMod`
- Resource tracking for HP, temporary HP, Edge, Burnout, and Recovery
- Embedded item creation, editing, rolling, and deletion
- Six native compendium packs containing every Talent, Merit, Flaw, Origin, Class, Power Set, Core Track, Power branch, Utility, Enhancement, and Limitation from the v2.4 catalogs
- Responsive comic-book-inspired sheet styling

## Power damage examples

- `2@powerDie + @powerMod`
- `1d8 + @powerMod`
- `3d6`

## Development validation

Run `node tests/validate.mjs` from this directory. This checks the manifest, required files, JSON, JavaScript syntax, document types, and Foundry 14 compatibility declaration.

Run `node tools/build-compendia.mjs` from the project root to regenerate all six LevelDB packs from `app.js`, `src/generator.js`, and `src/power-data.js`.

## Compendium contents

| Pack | Documents |
| --- | ---: |
| Talents | 57 (47 general + 10 Origin Talents) |
| Merits | 40 |
| Flaws | 45 |
| Powers | 888 |
| Origins | 10 |
| Classes | 8 |
| **Total** | **1,048** |
