# taylorremund.com — Operating Manual

Personal site for Taylor Remund. Two audiences, two surfaces:
- `/` (index.html) — Taylor the engineer: portfolio, projects, experience. Primary audience: employers/recruiters.
- `/ai/` (ai/index.html) — Taylor's AI services practice: pitch, packages with published prices, FAQ. Primary audience: small-business clients.

This repo is also a sales exhibit: it is maintained exactly the way Taylor maintains client sites — plain files in git, edited by asking Claude, deployed on push. Keep it that way.

## Stack & deploy

- Plain HTML/CSS/JS. No build step, no framework, no dependencies. Keep it that way unless Taylor explicitly says otherwise.
- Hosted on GitHub Pages from `main` (root). `CNAME` pins the custom domain `taylorremund.com` — never delete or edit that file.
- A push to `main` is a production deploy. Preview locally first: `python3 -m http.server 8000` (needed for the `/ai/` links to resolve; plain file:// won't).
- Rollback: `git revert HEAD && git push`.
- **Never run git commits or pushes on Taylor's behalf — stage the changes and let him review and commit.**

## File map

- `index.html` — the whole homepage, section by section (icon sprite, nav, hero, about, Plateful product section, AI-services teaser, skills, projects, experience, contact).
- `ai/index.html` — the whole services page (nav, hero, how-it-works, packages, why-me, FAQ, contact).
- `style.css` — all styles for both pages. Shared design tokens live in `:root`; AI-page-specific classes are prefixed `svc-`, `pkg-`, `step-`, `faq-`.
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
- Prices on `/ai/` are real commitments: session $150 ($250 for 2h), computer install $500–$1,500 (+$79/mo care plan), website/store from $1,500 + greater of $99/mo or 4% of store sales. Don't change them without Taylor saying so.
- Never invent testimonials, client names, or metrics. Every claim on the site must be true (Plateful is live; the stats in About come from Taylor's resume).
- The honesty rule from Taylor's positioning applies: AI-assisted building is a feature told confidently, never a secret and never overstated.
- Contact email is `remundtaylor3@gmail.com` until a domain email exists; update everywhere at once when it changes (there are several mailto links on /ai/).
