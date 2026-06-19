# HEROIC 5e Netlify Setup

## Deploy

1. Push this folder to GitHub.
2. In Netlify, create/import a project from that repository.
3. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

These are already defined in `netlify.toml`.

## Character Saves

- Characters are saved locally in each user's browser with `localStorage`.
- No login or server database is required.
- `Export JSON` and `Import JSON` let players back up, move, or share characters between devices.
- Browser-local saves do not automatically sync across devices.
