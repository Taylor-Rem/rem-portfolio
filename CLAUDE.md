# taylorremund.com — Operating Manual

The studio site, **Patchlamp first** (REDESIGN.md, executed 2026-09-17;
Plateful's section came down 2026-09-24 under ROADMAP B28 when Plateful was
retired — VISION § Decided). It sells Patchlamp and explains the services
around it; Taylor is who's behind the product, not the subject.
- `/` (index.html) — hero (a Patchlamp card and a Services card) → Patchlamp (a dark band) → Services → About (short) → Contact. Primary audience: small-business owners.
- `/ai/` (ai/index.html) — "Services": the AI working session and the computer install, with published prices; a Patchlamp panel points website asks at patchlamp.com.
- `/resume/` (resume/index.html) — the engineer's view: stats, skills, projects, experience, verbatim from the old homepage. Linked from About and the footer, not the nav. Primary audience: employers.
- `/privacy/`, `/terms/`, `/sms/` — legal pages, kept as published (Twilio's 10DLC campaign lists their URLs) plus one pointer line to patchlamp.com's current copy.

This repo is also a sales exhibit: it is maintained exactly the way Taylor maintains client sites — plain files in git, edited by asking Claude, deployed on push. Keep it that way.

## Stack & deploy

- Plain HTML/CSS/JS. No build step, no framework, no dependencies. Keep it that way unless Taylor explicitly says otherwise.
- Hosted on GitHub Pages from `main` (root). `CNAME` pins the custom domain `taylorremund.com` — never delete or edit that file.
- A push to `main` is a production deploy. Preview locally first: `python3 -m http.server 8000` (needed for the `/ai/` links to resolve; plain file:// won't).
- Rollback: `git revert HEAD && git push`.
- **Claude may stage, commit, and push directly** (Taylor granted this 2026-08-28). Keep commits small with plain messages; remember a push to `main` is a production deploy.

## File map

- `index.html` — the homepage: nav, hero with `.product-cards` (Patchlamp + Services), `.section-patchlamp` band, services teaser, short about, contact, footer.
- `ai/index.html` — the services page (nav, hero, how-it-works, packages, `.pl-panel` for Patchlamp, why-me, FAQ, contact).
- `resume/index.html` — the résumé page; its skills/projects/experience markup is the old homepage's, unchanged.
- `assets/icons.svg` — the shared icon sprite (`<use href="assets/icons.svg#icon-github">`; `../assets/...` from a subfolder). `assets/og.png` is the share card (Patchlamp only since 2026-09-24); `assets/exchange-room-*` are Patchlamp's brand images, copied from the patchlamp repo.
- `privacy/index.html`, `terms/index.html`, `sms/index.html` — legal/compliance pages, same nav/footer, `.legal` wrapper. `/sms/` is the public opt-in page Twilio's 10DLC reviewer checks: it must show the service number, the consent/STOP/HELP/rates language, and link privacy + terms. Footer on every page links all three.
- `style.css` — all styles for every page. Shared design tokens live in `:root`; the Patchlamp tokens (`--pl-*`) are scoped to `.section-patchlamp, .product-card--patchlamp, .pl-panel` and nowhere else. AI-page classes `svc-`, `pkg-`, `step-`, `faq-`; legal `legal-`; footer `footer-links`; the redesign's `product-card*`, `pl-*` block is at the end of the file.
- `script.js` — mobile nav, scroll reveal, active-nav highlighting. Shared by every page. (The typewriter is gone.)

## Design rules

- **Light theme** (redesigned 2026-08-27) everywhere except the scoped Patchlamp surfaces (the hero's Patchlamp card, the `#patchlamp` band, the `/ai/` panel), which use the `--pl-*` tokens and IBM Plex on purpose — the band should look like it came from a different building. White bg, `#f7f9fc` alt sections, ink `#101828`, teal accent `#0d9488` (`--accent-ink` `#0f766e` for accent-colored text). Use the CSS variables in `:root`, never hardcode new colors.
- Cards share the `.card` base class (white, 1px border, soft shadow, hover lift). Simpleicons pills must use dark icon hexes — never `f0f0f0`/white (invisible on light).
- Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (code) — via Google Fonts; IBM Plex Sans/Mono only on pages that have a Patchlamp surface (`/`, `/ai/`). Don't add other weights or families.
- Section headers are `.section-eyebrow` + `.section-title` (+ optional `.section-subtitle`). Sections alternate white / `.section-alt`.
- Shared SVG icons live in `assets/icons.svg`, referenced with `<use href="assets/icons.svg#icon-github"/>` (relative path from the page).
- New interactive elements get the `.reveal` class for scroll animation.
- No external JS libraries. No trackers or analytics without being explicitly asked.

## Content rules

- **Plateful is retired (2026-09-24).** No page sells it or ordering; the résumé keeps one past-tense project card (no links). "Plateful LLC" is the legal entity (dba Patchlamp) and may appear only as that.
- Prices on `/ai/` are real commitments: session $150 ($250 for 2h), computer install $500–$1,500 (+$79/mo care plan). Website plans are **Patchlamp's** and live on patchlamp.com/pricing (four tiers from $99/mo since 2026-09-17; Standard $250); this site says only "from $99/mo" and "Standard $250/mo" and links there — never a tier table here, so the two sites can't drift. The "4% of store sales, capped at $500/mo" line was retracted 2026-09-15 and must not come back. Don't change prices without Taylor saying so.
- **In cryo (2026-09-15, evening): "AI-Run Website or Store" (from $1,500 + $99/mo, you run Claude).** Self-serve is not offered — Taylor handles the compute, and Text Your Website is the only website plan. The card, the homepage teaser, the two-tiers FAQ and the self-serve terms sentence are gone; an HTML comment marks the spot in `ai/index.html`. Don't reinstate any of it without Taylor saying so. Same decision as patchlamp.com, where the numbers survive as `Prices::CRYO` and are tested to never render.
- Website plans are Patchlamp: client texts a number, Taylor's systems and AI account do the work. The client owns the site and code; the texting service is Taylor's and ends when the engagement ends. Never let copy claim "you own every piece" or "if we part ways everything keeps working" without that distinction — it's true of the site, not the texting pipe. (*AI on Your Computer* is a separate service — an assistant for the business, not a plan that runs the website.) Every Patchlamp sentence on this site must also be true of `~/projects/patchlamp/CLAIMS.md`.
- The legal pages carry language carriers check during 10DLC review: the `legal-callout` blocks (the no-sharing-for-marketing clause in privacy, the consent/STOP/HELP/rates block in terms) must stay. The privacy policy names the three services that touch client messages (Twilio, Anthropic, GitHub) and says photos sent for the site become public — keep that honest and current if the pipeline changes. Don't claim anything about Anthropic's training or retention practices unless Taylor has verified it for his account.
- Never invent testimonials, client names, or metrics. Every claim on the site must be true (the stats on `/resume/` come from Taylor's résumé).
- The honesty rule from Taylor's positioning applies: AI-assisted building is a feature told confidently, never a secret and never overstated.
- Contact email is `remundtaylor3@gmail.com` until a domain email exists; update everywhere at once when it changes (there are several mailto links on /ai/).

## The products behind the pages

`~/projects/VISION.md` is the product picture (tiers, what's decided, what's
open); the Patchlamp site itself is `~/projects/patchlamp`. The every-claim-
true rule above is why: the code that makes each Patchlamp claim true is in
`sms-relay/`.
