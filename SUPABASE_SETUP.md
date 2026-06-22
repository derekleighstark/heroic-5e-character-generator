# HEROIC 5e Supabase Setup

Project reference: `txgftxqggntjqrvgvfno`

## 1. Create the database objects

1. Open the Supabase project.
2. Open **SQL Editor** and create a new query.
3. Paste and run `supabase/schema.sql`.
4. Confirm that `public.characters` exists in Table Editor.
5. Confirm that the private `character-portraits` bucket exists in Storage.

The SQL enables Row Level Security. Signed-in users can only read and modify rows and portrait files that belong to their own user ID.

## 2. Copy the browser-safe project settings

Open the project's **Connect** panel or API settings and copy:

- Project URL
- Publishable key (or legacy anon key)

Never copy the secret key or service-role key into the app, GitHub, or Netlify browser configuration.

## 3. Add Netlify environment variables

In the Netlify site, add:

```text
SUPABASE_URL=https://txgftxqggntjqrvgvfno.supabase.co
SUPABASE_PUBLISHABLE_KEY=the-publishable-key
```

Apply them to production and deploy previews, then trigger a new deploy.

## 4. Configure authentication URLs

In Supabase Authentication URL settings:

- Set the Site URL to the production Netlify URL.
- Add the local development URL as an allowed redirect URL.
- Add the Netlify deploy-preview pattern if cloud login should work in previews.

The planned first login method is email magic link. Local character saves will continue to work without an account.
