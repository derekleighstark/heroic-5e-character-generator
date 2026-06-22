-- HEROIC 5e cloud character storage.
-- Run this once in the Supabase SQL Editor for the target project.

create extension if not exists pgcrypto;

create table if not exists public.characters (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 120),
  character_data jsonb not null default '{}'::jsonb,
  portrait_path text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists characters_user_updated_idx
  on public.characters (user_id, updated_at desc);

alter table public.characters enable row level security;

drop policy if exists "Users can read their characters" on public.characters;
create policy "Users can read their characters"
  on public.characters for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can create their characters" on public.characters;
create policy "Users can create their characters"
  on public.characters for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their characters" on public.characters;
create policy "Users can update their characters"
  on public.characters for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can delete their characters" on public.characters;
create policy "Users can delete their characters"
  on public.characters for delete
  to authenticated
  using ((select auth.uid()) = user_id);

create or replace function public.set_character_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_character_updated_at on public.characters;
create trigger set_character_updated_at
before update on public.characters
for each row execute function public.set_character_updated_at();

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'character-portraits',
  'character-portraits',
  false,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Users can read their portraits" on storage.objects;
create policy "Users can read their portraits"
  on storage.objects for select
  to authenticated
  using (
    bucket_id = 'character-portraits'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

drop policy if exists "Users can upload their portraits" on storage.objects;
create policy "Users can upload their portraits"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'character-portraits'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

drop policy if exists "Users can update their portraits" on storage.objects;
create policy "Users can update their portraits"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'character-portraits'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  )
  with check (
    bucket_id = 'character-portraits'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

drop policy if exists "Users can delete their portraits" on storage.objects;
create policy "Users can delete their portraits"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'character-portraits'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );
