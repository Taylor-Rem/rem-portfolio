# taylorremund.com — Operating Manual

Personal site for Taylor Remund. Two audiences, two surfaces:
- `/` (index.html) — Taylor the engineer: portfolio, projects, experience. Primary audience: employers/recruiters.
- `/ai/` (ai/index.html) — Taylor's AI services practice: pitch, packages with published prices, FAQ. Primary audience: small-business clients.
- `/privacy/` and `/terms/` — legal pages. They exist partly for carriers: the SMS ("Text Your Website") service needs a public privacy policy and terms with specific messaging language for A2P 10DLC registration.

This repo is also a sales exhibit: it is maintained exactly the way Taylor maintains client sites — plain files in git, edited by asking Claude, deployed on push. Keep it that way.

## Stack & deploy

- Plain HTML/CSS/JS. No build step, no framework, no dependencies. Keep it that way unless Taylor explicitly says otherwise.
- Hosted on GitHub Pages from `main` (root). `CNAME` pins the custom domain `taylorremund.com` — never delete or edit that file.
- A push to `main` is a production deploy. Preview locally first: `python3 -m http.server 8000` (needed for the `/ai/` links to resolve; plain file:// won't).
- Rollback: `git revert HEAD && git push`.
- **Claude may stage, commit, and push directly** (Taylor granted this 2026-08-28). Keep commits small with plain messages; remember a push to `main` is a production deploy.

## File map

- `index.html` — the whole homepage, section by section (icon sprite, nav, hero, about, Plateful product section, AI-services teaser, skills, projects, experience, contact).
- `ai/index.html` — the whole services page (nav, hero, how-it-works, packages, why-me, FAQ, contact).
- `privacy/index.html`, `terms/index.html`, `sms/index.html` — legal/compliance pages, same nav/footer, `.legal` wrapper. `/sms/` is the public opt-in page Twilio's 10DLC reviewer checks: it must show the service number, the consent/STOP/HELP/rates language, and link privacy + terms. Footer on every page links all three.
- `style.css` — all styles for every page. Shared design tokens live in `:root`; AI-page-specific classes are prefixed `svc-`, `pkg-`, `step-`, `faq-`; legal-page classes `legal-`; footer links `footer-links`.
- `script.js` — typewriter (homepage only, null-guarded), mobile nav, scroll reveal, active-nav highlighting. Shared by both pages.

## Design rules

- **Light theme only** (redesigned 2026-08-27): white bg, `#f7f9fc` alt sections, ink `#101828`, teal accent `#0d9488` (`--accent-ink` `#0f766e` for accent-colored text). Use the CSS variables in `:root`, never hardcode new colors. Plateful brand colors (`--plateful` `#069494`, `--plateful-red` `#b22222`) are reserved for the Plateful section.
- Cards share the `.card` base class (white, 1px border, soft shadow, hover lift). Simpleicons pills must use dark icon hexes — never `f0f0f0`/white (invisible on light).
- Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (code) — via Google Fonts. Don't add font weights or families.
- Section headers are `.section-eyebrow` + `.section-title` (+ optional `.section-subtitle`). Sections alternate white / `.section-alt`; the Plateful section uses `.section-plateful` (teal-tinted gradient).
- Shared SVG icons live in the sprite at the top of `index.html` (`<use href="#icon-github"/>` etc.); `ai/index.html` has no sprite and needs none today.
- New interactive elements get the `.reveal` class for scroll animation.
- No external JS libraries. No trackers or analytics without being explicitly asked.

## Content rules

- The Plateful section sells the real product at https://plateful.fyi — keep its claims in sync with the Plateful repo's README (pricing: 4% per order, capped monthly, no subscriptions; do not state the cap amount on this site without checking it).
- Prices on `/ai/` are real commitments: session $150 ($250 for 2h), computer install $500–$1,500 (+$79/mo care plan), AI-Run Website/Store from $1,500 + greater of $99/mo or 4% of store sales capped at $500/mo, Text Your Website from $2,500 + greater of $249/mo or 4% of store sales capped at $500/mo. Don't change them without Taylor saying so.
- There are two website tiers and the difference must stay explicit everywhere it's mentioned: **AI-Run Website** = client runs Claude on their own machine and account (they own everything, including the AI subscription). **Text Your Website** = client texts a number, Taylor's own systems and AI account do the work (client owns the site and code; the texting service is Taylor's and ends when the engagement ends). Never let copy claim "you own every piece" or "if we part ways everything keeps working" without that distinction — it's true of the site, not the texting pipe.
- The legal pages carry language carriers check during 10DLC review: the `legal-callout` blocks (the no-sharing-for-marketing clause in privacy, the consent/STOP/HELP/rates block in terms) must stay. The privacy policy names the three services that touch client messages (Twilio, Anthropic, GitHub) and says photos sent for the site become public — keep that honest and current if the pipeline changes. Don't claim anything about Anthropic's training or retention practices unless Taylor has verified it for his account.
- Never invent testimonials, client names, or metrics. Every claim on the site must be true (Plateful is live; the stats in About come from Taylor's resume).
- The honesty rule from Taylor's positioning applies: AI-assisted building is a feature told confidently, never a secret and never overstated.
- Contact email is `remundtaylor3@gmail.com` until a domain email exists; update everywhere at once when it changes (there are several mailto links on /ai/).

## The service behind `/ai/`

`~/projects/VISION.md` is the product picture (tiers, what's decided, what's
open) and `~/projects/sms-relay/plans/07-product-site.md` the plan for this
page. The every-claim-true rule above is why: the code that makes each claim
true is in `sms-relay/`.
