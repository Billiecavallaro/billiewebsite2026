# billiecavallaro.com

Static site, no build step. Built for GitHub Pages + SEO/crawlability.

## Deploy to GitHub Pages

1. Create a repo (e.g. `billiecavallaro/billiecavallaro.github.io`, or any public repo with Pages enabled).
2. Push the contents of this `site/` folder to the repo root:
   ```
   git init
   git add .
   git commit -m "Launch new site"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. In repo Settings → Pages, set source to the `main` branch, root folder.
4. Custom domain: the `CNAME` file is already set to `www.billiecavallaro.com`. In Settings → Pages, enter the same domain and check "Enforce HTTPS" once DNS propagates.
5. DNS (at your domain registrar):
   - `www` CNAME record → `<your-github-username>.github.io`
   - Root domain (`billiecavallaro.com`) → either an ALIAS/ANAME to the same target, or A records pointing to GitHub Pages IPs (185.199.108.153, .109.153, .110.153, .111.153), with a redirect from root to `www`.
6. Wait for DNS propagation (up to 24h), then confirm HTTPS is enforced.

## What's included for SEO

- Real, crawlable HTML — no JS-rendered content (the old site had `<meta name="robots" content="noindex">`, which blocked all indexing — fixed here)
- Title + meta description tuned for search
- Open Graph + Twitter Card tags (swap `assets/images/og-cover.png` for a real 1200×630 image)
- JSON-LD `Person` schema in `<head>`
- `sitemap.xml` and `robots.txt` at root
- `llms.txt` at root for AI crawlers/agents
- Semantic HTML structure (`header`, `main`, `section`, `article`, proper heading hierarchy)

## To finish before launch

- Replace placeholder copy for Discover and Stealth Startup work cards with real specifics — I filled those in generically since I didn't have detail beyond the company names.
- Add a real Open Graph image at `assets/images/og-cover.png` (1200×630px).
- Add a favicon (currently a blank data URI placeholder).
- Optional: add real photography/headshot — the design intentionally works without one, but a portrait in the hero would help personal-brand recognition in search and social previews.
