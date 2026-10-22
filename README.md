# taylorremund.com

The studio site, products first: it sells Patchlamp and explains the services around it
(the products-first redesign, live since 2026-09-17; `REDESIGN.md` is its record). Plain
HTML, CSS and JavaScript, no build step, hosted on GitHub Pages from `main`, so a push to
`main` is a production deploy. `CLAUDE.md` is the operating manual: the pages, the file map,
the design and content rules.

- `/` — the Patchlamp and Services cards, the Patchlamp band, services, a short about, contact.
- `/ai/` — the services page: the AI working session and the computer install, with prices.
- `/resume/` — the employer material (stats, skills, projects, experience).
- `/privacy/`, `/terms/`, `/sms/` — the legal pages Twilio's 10DLC campaign lists.

Preview locally with `python3 -m http.server 8000` (the subfolder links need a server).

## Custom domain: taylorremund.com

The repo contains a `CNAME` file with `taylorremund.com`, so GitHub Pages will claim the domain automatically once DNS points at it. At the domain registrar:

1. Add four **A records** for the apex (`@`) pointing to GitHub Pages:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
2. Add a **CNAME record** for `www` pointing to `<github-username>.github.io`.
3. In the repo: **Settings → Pages → Custom domain** — enter `taylorremund.com`, wait for the DNS check, then tick **Enforce HTTPS** (the certificate takes a few minutes to issue).

DNS changes can take up to a few hours to propagate. Verify with `dig taylorremund.com +noall +answer`.
