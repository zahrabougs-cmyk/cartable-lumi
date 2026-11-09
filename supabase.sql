-- ===== Cartable Lumi : base de données (Supabase) =====
-- À coller dans Supabase : SQL Editor → New query → Run. On peut le relancer sans danger après une mise à jour.
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

-- Vitesse : sans cet index, chaque requête parcourt les enfants de TOUTES les familles.
create index if not exists children_parent_idx on public.children (parent);

-- Limites : un compte ne peut pas remplir la base ni y écrire n'importe quoi.
alter table public.children drop constraint if exists children_name_ok;
alter table public.children add constraint children_name_ok check (char_length(name) between 1 and 60);
alter table public.children drop constraint if exists children_langs_ok;
alter table public.children add constraint children_langs_ok check (l1 in ('ar','fr','en') and l2 in ('ar','fr','en'));
alter table public.children drop constraint if exists children_state_ok;
alter table public.children add constraint children_state_ok check (jsonb_typeof(state) = 'object' and octet_length(state::text) <= 1048576);

-- Pas plus de 10 enfants par compte.
create or replace function public.children_limit() returns trigger
language plpgsql set search_path = '' as $$
begin
  if (select count(*) from public.children where parent = new.parent) >= 10 then
    raise exception 'Ce compte a déjà 10 enfants : c''est le maximum.';
  end if;
  return new;
end $$;
drop trigger if exists children_limit_trg on public.children;
create trigger children_limit_trg before insert on public.children
  for each row execute function public.children_limit();

-- Accès : seuls les parents connectés, et seulement pour leurs enfants.
-- « (select auth.uid()) » est la forme conseillée par Supabase : elle est calculée une seule fois par requête.
revoke all on public.children from anon;
alter table public.children enable row level security;
drop policy if exists "lire ses enfants" on public.children;
drop policy if exists "ajouter un enfant" on public.children;
drop policy if exists "modifier ses enfants" on public.children;
drop policy if exists "supprimer ses enfants" on public.children;
create policy "lire ses enfants" on public.children for select to authenticated using (parent = (select auth.uid()));
create policy "ajouter un enfant" on public.children for insert to authenticated with check (parent = (select auth.uid()));
create policy "modifier ses enfants" on public.children for update to authenticated using (parent = (select auth.uid())) with check (parent = (select auth.uid()));
create policy "supprimer ses enfants" on public.children for delete to authenticated using (parent = (select auth.uid()));
