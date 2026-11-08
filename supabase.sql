-- ===== Cartable Lumi : base de données (Supabase) =====
-- À coller une seule fois dans Supabase : SQL Editor → New query → Run.
-- Une ligne par enfant. Le parent (compte email) ne voit et ne modifie que ses propres enfants.
create table if not exists public.children (
  id uuid primary key default gen_random_uuid(),
  parent uuid not null default auth.uid() references auth.users(id) on delete cascade,
  name text not null,
  l1 text not null default 'ar',   -- langue des explications
  l2 text not null default 'fr',   -- 2e langue (mots techniques)
  state jsonb not null default '{}'::jsonb,  -- progression, étoiles, notes, journal des jours
  updated_at timestamptz not null default now()
);
alter table public.children enable row level security;
drop policy if exists "lire ses enfants" on public.children;
drop policy if exists "ajouter un enfant" on public.children;
drop policy if exists "modifier ses enfants" on public.children;
drop policy if exists "supprimer ses enfants" on public.children;
create policy "lire ses enfants" on public.children for select using (parent = auth.uid());
create policy "ajouter un enfant" on public.children for insert with check (parent = auth.uid());
create policy "modifier ses enfants" on public.children for update using (parent = auth.uid()) with check (parent = auth.uid());
create policy "supprimer ses enfants" on public.children for delete using (parent = auth.uid());
