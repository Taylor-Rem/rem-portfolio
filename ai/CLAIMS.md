# Claims audit — /ai/

Rule (rem-portfolio CLAUDE.md, VISION.md rule 5): every sentence on `/ai/`
about what the service does must be literally true of the code. This file
maps each such claim to the line in `sms-relay/README.md` ("README"), the
relay code, or the plan that makes it true. Pricing claims map to
`sms-relay/plans/05-credits.md` ("plan 05") and VISION "Decided".
Written 2026-09-14 by the plan 07 session; update it when the sentence or
the code changes.

Status key: **true now** (running code), **priced** (a published price
commitment, not behaviour), **commitment** (a thing Taylor does by hand
today), **pending** (depends on an unshipped plan; the sentence is worded
so it is still true today).

## Hero / how it works

| Claim on the page | Source | Status |
|---|---|---|
| A number you text; SMS, Telegram, or Discord | README intro: "SMS via Twilio, Telegram, or Discord" | true now |
| Claude makes the change, checks that it's live, texts you back | README "How it behaves": "Claude never claims a change is live without curling the live URL"; `prompt.py` client block "confirm it is actually live"; reply on same channel | true now |
| Nothing to install, nothing to learn | README intro: "Nothing for them to install beyond a messaging app" | true now |
| "Mark the burger sold out" / Plateful menu changes | README project table: `client` type with `plateful: <sub>` via `pf`; `pf` scopes `menu:write` | true now |
| On SMS you get "Got it — working on this now" right away | README "Someone texts": immediate ack on SMS; `config.py` default `messages.ack` | true now |
| Works inside a walled-off folder holding only your things; can't reach another client | README project table: `client` cwd `~/projects/clients/<name>/`, stamped allowlist "nothing outside"; `templates/client/CLAUDE.md` "never read another client's workspace"; VISION rule 4 | true now |
| Photos are straightened, resized, and placed where they belong | README "Photos": auto-oriented, HEIC→JPG, 1200px, dropped in `incoming/`, Claude moves it with alt text or via `pf` (`relay/photos.py`) | true now |
| "Undo that last change" puts it back | README "Undo a bad change": "just text it — 'undo that last change' works" | true now |
| Every change is saved in your site's history | Sites are git repos on GitHub Pages; `templates/client/CLAUDE.md` "commit, push"; never rewrite history | true now |
| Out-of-scope asks: it says so and passes to me; you're told, I get a note | README "Feature requests become leads": `FORWARD-TO-TAYLOR` stripped from the reply and sent to the owner (`core.py` directives) | true now |

## Straight answers

| Claim | Source | Status |
|---|---|---|
| Runs on a machine in my office; on during working hours MT, off overnight | VISION rule 6 "The laptop is temporary"; README "Running": systemd user units on this machine | true now (hours are Taylor's; no code enforces them) |
| A text sent while it's off waits and is handled when it's back (SMS, Telegram) | SMS: `transports/sms.py` lists the last 50 inbound messages each tick, `state.processed` dedupes, so unprocessed ones run on the next tick; Telegram: `getUpdates` with a stored offset, Telegram queues updates | true now |
| Discord messages sent while it's off need resending | `transports/discord.py` handles Gateway events only; no catch-up fetch of missed DMs | true now |
| Moves to a server before the first monthly plan bills | VISION rule 6; TAYLOR-TODO §2 "A VPS for the relay" | commitment |
| Texts are picked up within a minute | README "Schedule it": tick every minute, "picked up within 60 seconds" | true now |
| Typical change confirmed live in a minute or two | README footer example `34s`; plans/README measurements; `limits.claude_timeout_seconds` 420 | true now (typical, not guaranteed) |
| If one can't be finished, you're told rather than left waiting | README "When something breaks"; `messages.client_failure` default in `config.py`; timeout path | true now |
| The exact failure text quoted | `config.py`: `client_failure` default string | true now |
| I get what you asked, the actual error, how long it ran | README "When something breaks": "You get a separate text with what she asked, the actual error, and how long it ran" | true now |
| Daily cap on messages; the bot stops and I'm told | README: `daily_limit` (40/day for `client` role in `config.example.json`), `rate_limited` reply + owner note | true now |
| Site is a GitHub repository under my account on Pages; transferred to you on exit | Bleu Grave remote is `Taylor-Rem/bleu-grave-site`; VISION "Decided" code ownership: `gh repo transfer` on exit; terms page | true now / commitment |
| A restaurant's menu lives in its Plateful account | Plateful is the backend; `pf` writes to the restaurant | true now |

## Demo transcript (sample, marked as such on the page)

| Patch's line | Source | Status |
|---|---|---|
| "you text me, i change your website … load the live page to make sure it's really there" | as above (curl-the-live-URL rule) | true now |
| "say 'undo that' and it goes back … taylor gets the error, not you" | README undo + "When something breaks" | true now |
| "a store, a login, a domain, is taylor's job. i say so and pass it to him" | `templates/client/CLAUDE.md` "What is Taylor's work" list + `FORWARD-TO-TAYLOR` | true now |
| "a small change is fifty cents, a big one costs more, every message is logged with what it cost" | plan 05 floor $0.50; README ledger: "Every billable event … is one line in state/ledger.jsonl" | priced / true now |
| "i'm claude wearing a name tag that says patch" | `bot_name: Patch` in config; VISION "Bot name" | true now |
| The public demo room itself | plan 03 (API backend) + plan 07 change 2 — **not live**; page says "on the way" | pending |

## Pricing

| Claim | Source | Status |
|---|---|---|
| Bring Your Own Assistant: free for Plateful restaurants | plan 06 "zero cost to Taylor"; VISION Decided | priced |
| Connect Claude (claude.ai / Claude Code) or any MCP-connector assistant to your restaurant | `plateful/todo.md` §16: MCP at `/mcp/platform`, restaurant-scoped keys (Phase 1 shipped 2026-09-14) | true now (Taylor mints the key by hand; the self-serve connect page is plan 06's remainder) |
| Read menu, mark items available/sold out, upload/remove photos, list orders and move them along, see customers and earnings | `plateful/app/Mcp/Tools/`: GetMenu, SetMenuItemAvailability, UploadImage, RemoveImage, ListGalleryPhotos, ListOrders, GetOrder, TransitionOrder, KitchenBoard, ListCustomers, Earnings* | true now. **Not claimed:** editing prices/descriptions (menu CRUD is §16 Phase 1b, unshipped) |
| Self-serve from $1,500 + $99/mo | VISION Decided; rem-portfolio CLAUDE.md | priced |
| Managed from $2,500 + $249/mo + credits | VISION Decided; plan 05 | priced |
| Message = 3× cost, rounded up to 25¢, floor 50¢ | plan 05 pricing table | priced (charging code is plan 05, unshipped) |
| Generated photo $1 flat; stock photo free; sent photo free | plan 05 table (`img gen` $1.00, `img stock` $0) | priced |
| Packs $25 / $100; don't expire; non-refundable | plan 05 "Packs … Credits don't expire"; plan 05 Open "credits are non-refundable" | priced |
| Runs out → bot tells you and stops; site stays up | plan 05 change 3 `out_of_credits` reply | pending (worded as policy; the refusal-at-zero code is plan 05) |
| Every message and generated photo is one ledger line with cost and charge | README ledger paragraph; `ledger.py` FIELDS incl. `charged_usd` | true now (`charged_usd` is 0 until plan 05) |
| Monthly statement comes from the ledger | plan 05 change 7 `relay.py statement` | commitment (by hand until plan 05) |
| BYO Anthropic key: $15/mo relay fee | plan 05 table; VISION rule 1 | priced |
| Nothing activates by itself; I approve every client | VISION rule 3 "Nothing activates itself"; README unknown senders refused | true now |
| Working session $150/$250; AI on Your Computer $500–1,500 + $79/mo | rem-portfolio CLAUDE.md content rules (unchanged) | priced |

## FAQ

| Claim | Source | Status |
|---|---|---|
| Replies in everyday language, never file names or commands | `config.example.json` client voice; `templates/client/CLAUDE.md` "Who you're talking to" | true now |
| Doesn't say a change is live until it has loaded the live site | README (curl rule) | true now |
| Code transferred to your account when we stop | VISION Decided; terms | commitment |
| Texting service runs on my systems and my AI account; ends with the engagement | VISION rule 1 (clients on our key at markup); terms "What you own" | true now |
| Credits at three times what it costs me | plan 05 `markup: 3` | priced |
| SMS with photos, Telegram, Discord; channel/group mapped to your project | README: MMS photos; Discord `channels` mapping with `project`; Telegram group mapped to a project | true now |
| Unknown senders get "I don't recognize you" and I'm notified | README "Unknown senders get a polite refusal and the owner is notified"; `messages.not_allowed` | true now |
| Tools/files outside the workspace are blocked, not discouraged | README: "if a message asks for something the workspace allowlist doesn't cover, Claude is refused the tool and says so"; VISION rule 4 denies | true now |
| Declines Taylor's-work asks and forwards | `templates/client/CLAUDE.md` + `FORWARD-TO-TAYLOR` | true now |
| Won't publish illegal/harmful/misleading content | terms "What I'll decline" | policy |
| Not 24/7; working hours; texts wait | see Straight answers | true now |
| Carriers, Anthropic, GitHub, Pexels, Google each handle a piece | Twilio/Telegram/Discord transports; `claude -p`; GitHub Pages; `bin/img` (Pexels stock, Gemini gen) | true now |
| Patch is Claude under rules I wrote with the project's permissions | `bot_name`; workspace CLAUDE.md + allowlist; README "The relay passes no permission overrides for client … projects" | true now |
| Patch will tell you it's an AI if you ask | Hangout CLAUDE.md: "never explain that you're an AI unless someone asks" (rooms); client prompt doesn't forbid it | true now (not enforced by code; the sample transcript shows it) |

## Not claimed on purpose

- "24/7", "always on", "replies in seconds".
- "Routine changes included" and "4% of store sales capped at $500/mo" (retracted pending TAYLOR-TODO §3; kept in an HTML comment on the page).
- Editing menu prices/descriptions through the free MCP tier.
- `/balance` or a self-serve top-up flow (plan 05 / 09).
- Anything about Anthropic's training or retention practices.
- Testimonials, client names, metrics.
