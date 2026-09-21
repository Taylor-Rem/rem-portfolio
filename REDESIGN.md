> **Superseded in part (2026-09-15, evening):** there are no longer "three
> website tiers" or "two website tiers" to restructure. Self-serve
> ("AI-Run Website or Store") and bring-your-own assistant are in cryo —
> Taylor handles the compute and Text Your Website is the only website
> plan. Read the tier passages below as the state of things when this plan
> was written. See VISION § Decided "Four tiers (2026-09-17)" and `patchlamp/plans/02-pricing-tiers.md`.

# REDESIGN — taylorremund.com, products first

**Executed and live 2026-09-17** (branch `redesign/products-first`, merged by Taylor). The Patchlamp price line says today's truth ("from $99 · Standard $250") rather than the three-tier line below; the old `/ai/` branch had already landed on `main` so step 1 was moot. Kept as the record of the decisions.

**Decided 2026-09-15.** The site was built to get Taylor hired. That's over:
the site exists to sell Plateful and Patchlamp, and to explain the services
around them. Taylor is who's behind the products, not the subject. The
employer material is kept, moved to its own page, and taken out of the
main flow.

This file is the plan a session executes. Rules in `CLAUDE.md` still apply
(plain HTML/CSS/JS, no build, every claim true, prices are commitments);
where this file changes a rule, it says so and the session updates
`CLAUDE.md` in the same PR.

## What exists

- `index.html` (491 lines): hero (Taylor, typewriter), about ("the short
  version", resume stats), Plateful section (`.section-plateful`), AI
  services teaser, skills, projects, experience, contact, footer.
- `ai/index.html`: the services page. On `main` it sells sessions,
  installs, and two website tiers; on the unmerged branch
  `claude/kind-germain-1f5814` it is the full "Text Your Website" pitch with
  a `{{SERVICE}}` token, `ai/CLAIMS.md`, and rewritten `/privacy` and
  `/terms`. That branch's *pitch* content moves to `patchlamp.com`
  (`~/projects/patchlamp/plans/01-site.md`); its legal rewrites and the
  claims audit are still wanted here.
- `/sms/`, `/privacy/`, `/terms/`: carrier-facing pages; the Twilio 10DLC
  campaign lists their URLs. They must stay live and keep their callouts.
- `style.css` (904 lines): light theme tokens in `:root`, `.card`,
  `.section-alt`, `.section-plateful`, `svc-`/`pkg-`/`faq-` classes.
- `script.js`: typewriter (null-guarded), mobile nav, scroll reveal,
  active-nav.

## Decisions (recommended answers; Taylor confirms)

1. **Homepage order — recommended:** hero (the studio and two products) →
   Plateful → Patchlamp → Services → About (short) → Contact. Plateful
   first because it's live and earning; Patchlamp second and visually
   loud so the contrast is the point.
2. **Employer content — recommended: move to `/resume/`**, intact
   (about stats, skills, projects, experience), titled for recruiters,
   linked from the footer and from About, not from the nav. Indexable.
   Deleting it throws away a working page for no gain; keeping it on the
   homepage keeps Taylor the subject.
3. **`/ai/` — recommended: keep the URL, retitle "Services".** It keeps
   the AI working session ($150 / $250 for 2h) and the computer install
   ($500–$1,500 + $79/mo care plan). The three website tiers leave; in
   their place one dark Patchlamp panel: "Websites and menus are
   Patchlamp" → patchlamp.com. Keeping the URL avoids breaking links the
   10DLC reviewer and clients already have; Pages can't redirect.
4. **Hero headline — recommended:** *Software that runs small businesses.*
   Sub: "Plateful takes the orders. Patchlamp changes the website when you
   text it. Built in Utah by Taylor Remund." Two product cards under it,
   each with its own accent. No typewriter (it was a developer flourish;
   remove it and its script).
5. **Fonts and theme — recommended: unchanged for the site** (light,
   Space Grotesk/Inter). The Patchlamp section is a dark band using the
   `--pl-*` tokens and IBM Plex, scoped to `.section-patchlamp`, so the
   band looks like it came from a different building — that's the
   intent. Load IBM Plex only on pages that have the band.
6. **Title and meta:** `Taylor Remund — Plateful and Patchlamp, software
   for small businesses`. Description leads with the products. OG image:
   a composed card with both marks (make it; `assets/og.png`).
7. **Legal pages stay here** until `patchlamp.com`'s copies are live and
   Twilio's campaign URLs are updated (TAYLOR-TODO); then `/privacy`,
   `/terms`, `/sms` keep their callouts and add one line: "Patchlamp's
   current policy lives at patchlamp.com/privacy" (don't remove content
   the reviewer may re-check).

## Changes

### `index.html`

1. **Nav:** Plateful · Patchlamp · Services · About · Contact. Brand mark
   at left stays "Taylor Remund" in small type (the studio name is Taylor's
   name; revisit if a studio brand ever appears).
2. **Hero:** replace `.hero-name` / typewriter / role lines with the
   headline in decision 4 and a two-card row (`.product-cards`): Plateful
   (teal, "Online ordering restaurants own", → `#plateful`) and Patchlamp
   (dark panel, amber lamp dot, "Text your website", → `#patchlamp`).
   Cards are `.card` variants; the Patchlamp one is the only dark card on
   the page.
3. **Plateful section:** keep as is (it works). Move it directly under the
   hero. Check the claims against `plateful/README.md` once more
   (pricing sentence: 4% per order, capped monthly, no subscriptions).
4. **Patchlamp section (new, `#patchlamp`, `.section-patchlamp`):** full-
   bleed dark band. Left: kicker `PATCHLAMP · TEXT YOUR WEBSITE` in brass
   mono, H2 *The lamp's on.*, three lines of what it does (from
   `patchlamp/CLAIMS.md` wording, true today), the from-price in mono
   ("from $99/mo self-serve · $249/mo + credits managed · free for
   Plateful restaurants with their own assistant"), amber button *See
   Patchlamp* → `https://patchlamp.com`, ghost link *How it works*. Right:
   `exchange-room.jpg` cropped, or on small screens the portrait as a
   round avatar beside the H2. Until patchlamp.com is live the button
   points at `/ai/#patchlamp` (the panel there) — the session checks which.
5. **Services section (`#services`, was `#ai-services`):** teaser for
   sessions and installs with prices, button → `/ai/`. Drop any website
   tier wording here.
6. **About (`#about`, short):** three sentences — who Taylor is, that both
   products are built and run by one person with Claude and that this is
   said plainly (the honesty rule), a line "Looking for the résumé? It's
   at /resume/". Remove the stats grid from here (it moves).
7. **Remove from the homepage:** skills, projects, experience, the
   typewriter. Contact stays; retitle "Talk to me" with the same email.
8. **Footer:** Plateful · Patchlamp · Services · Résumé · Privacy · Terms
   · SMS. Add "Patched by Patchlamp" only once patchlamp.com is live
   (every claim true: the site isn't edited by Patch today — it's edited
   by Taylor asking Claude, which is the self-serve model, so say that
   instead: "This site is run the self-serve way: plain files, edited by
   asking Claude").

### `resume/index.html` (new)

Title: `Taylor Remund — Résumé`. Nav: the site nav plus none extra. Content:
the removed about stats, skills, projects, experience, verbatim markup and
classes so `style.css` needs nothing new; a top line "I build and run
Plateful and Patchlamp; this page is the engineer's view." and the contact
block. The icon sprite it needs is copied in (the sprite lives in
`index.html`; either duplicate the needed symbols or move the sprite to a
tiny `assets/icons.svg` referenced from both — recommended: move it,
`<use href="assets/icons.svg#icon-github">`, and check it renders on
Pages).

### `ai/index.html`

Start from the branch version (it's better written), then: retitle
"Services" (kicker "Taylor Remund · Services"); delete the three website
tier cards and the credits box; insert the Patchlamp panel (dark, same
band styles, "Websites and menus are Patchlamp" with the three tiers as
one line and a button to patchlamp.com); keep sessions and installs as the
packages; keep FAQ entries that are about sessions/installs, move the rest
to Patchlamp; CTA stays a mailto until Patchlamp's wizard exists, then it
points at `patchlamp.com/start` for anything website-shaped. Replace
`{{SERVICE}}` with `Patchlamp` where a sentence survives. `ai/CLAIMS.md`
shrinks to the claims this page still makes; the rest moves to
`patchlamp/CLAIMS.md`.

### `style.css`

- Add the `--pl-*` tokens under a `.section-patchlamp, .pl-panel` scope
  (not `:root`, so the light theme rule in CLAUDE.md stays true for the
  rest of the site). IBM Plex loaded only on pages with the band.
- `.product-cards`, `.product-card`, `.product-card--patchlamp`.
- `.section-patchlamp` band: full-bleed, `--pl-room` background, panel
  card, `.pl-lamp` dot with the glow, `.pl-btn`.
- Nothing else changes; the branch's `svc-`/`pkg-` additions come in with
  the merge.

### `script.js`

Remove the typewriter. Keep mobile nav, reveal, active-nav (add
`#patchlamp` and `#services` to the id list if it's explicit).

### `CLAUDE.md` (this repo)

Update: purpose ("products first"), the file map (`resume/`, the sprite
location), design rules (light theme *except* the scoped Patchlamp band and
its tokens), content rules (website tiers live on patchlamp.com; keep the
two-tier ownership distinction there, drop it here), the contact email
line, the nav list.

## Order of work

1. Merge the existing branch `claude/kind-germain-1f5814` first (it's a
   production deploy; Taylor reads `/ai/`, `/privacy/`, `/terms/` once —
   TAYLOR-TODO). Everything below builds on it.
2. One session, one branch `redesign/products-first`, in this order:
   `resume/` (move, nothing lost) → `index.html` → `ai/index.html` →
   `style.css`/`script.js` → `CLAUDE.md` → OG image. Preview with
   `python3 -m http.server 8000` at 400 px and 1280 px. Commit small.
3. Taylor reviews at the preview URL of the branch (or a screenshot set in
   the PR), then merge = deploy.

## Acceptance

- Homepage at 400 px and 1280 px: products above the fold, no résumé
  content, the Patchlamp band is dark and reads as a different product,
  Plateful section unchanged.
- `/resume/` contains every stat, skill, project and job that was on the
  old homepage; icons render.
- `/ai/` sells sessions and installs only; every website mention points at
  Patchlamp; prices match `CLAUDE.md`.
- `/privacy/`, `/terms/`, `/sms/` unchanged apart from the pointer line;
  their `legal-callout` blocks intact.
- No console errors; Lighthouse accessibility 100 on `/` and `/resume/`;
  every internal link resolves on the Pages build.
