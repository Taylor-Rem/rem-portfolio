# Taylor Remund — Portfolio

Personal portfolio website. Dark, minimal, fully responsive single-page site built with plain HTML, CSS, and JavaScript.

## Project Structure

```
portfolio/
├── index.html    — Main page (all sections)
├── style.css     — All styles
├── script.js     — Typewriter, mobile nav, scroll animations
└── README.md
```

## Local Development

Open `index.html` in a browser — no build step or server required.

For live reload during development, you can use any static server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

## Deploy to GitHub Pages

### Option 1: Deploy from `main` branch (simplest)

1. Create a new GitHub repository (e.g., `taylor-rem.github.io` for a user site, or any name for a project site).

2. Push the code:
   ```bash
   cd portfolio
   git init
   git add -A
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Taylor-Rem/<repo-name>.git
   git push -u origin main
   ```

3. Go to **Settings → Pages** in your GitHub repo.

4. Under **Source**, select **Deploy from a branch**, choose `main` / `/ (root)`, and click **Save**.

5. Your site will be live at:
   - User site: `https://taylor-rem.github.io`
   - Project site: `https://taylor-rem.github.io/<repo-name>`

### Option 2: Using the `gh` CLI

```bash
cd portfolio
git init
git add -A
git commit -m "Initial portfolio"
gh repo create Taylor-Rem/taylor-rem.github.io --public --source=. --push
```

Then enable Pages in Settings as described above.

## Before Deploying

- Replace the profile photo placeholder in the About section with your real photo
- Update the email link in the Contact section (`mailto:your.email@example.com`) with your actual email
