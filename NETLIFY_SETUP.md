# HEROIC 5e Netlify Setup

## Deploy

1. Push this folder to a Git repository.
2. In Netlify, create/import a project from that repository.
3. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`

These are already defined in `netlify.toml`.

## Enable Login

1. In Netlify, open the project.
2. Go to **Project configuration > Security > Identity**.
3. Enable Identity.
4. Configure registration:
   - Open registration if anyone can create an account.
   - Invite-only if you want to approve users manually.
5. Optional: enable Google/GitHub/etc. external providers.

## Character Storage

- Logged-out users can save characters locally in their browser.
- Logged-in users can also sync characters to Netlify Blobs through `netlify/functions/characters.mjs`.
- Cloud saves are scoped to the authenticated Netlify Identity user.
- JSON export/import remains available for backups and sharing.
