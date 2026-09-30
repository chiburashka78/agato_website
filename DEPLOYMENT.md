# Agato Website Deployment

This React/Vite site is configured to deploy to **GitHub Pages** at **www.agato.ai** using GitHub Actions.

## Production architecture

```text
main branch
    |
    v
GitHub Actions
    |
    +-- npm install
    +-- npm run build
    |      +-- Vite builds dist/
    |      +-- postbuild creates dist/404.html
    |
    v
GitHub Pages
    |
    v
www.agato.ai
```

## Files that make deployment work

- `public/CNAME` contains `www.agato.ai`. Vite copies it into `dist/CNAME`.
- `.github/workflows/deploy-pages.yml` builds and deploys the site on pushes to `main`.
- `scripts/create-spa-fallback.mjs` copies `dist/index.html` to `dist/404.html` after every production build. This lets React Router render direct requests such as `/services`, `/about`, and `/signup` on GitHub Pages.
- `vite.config.js` uses the default `/` base path, which is correct because the site is served from the root of the custom domain.

## One-time GitHub configuration

In the repository that currently serves `www.agato.ai`:

1. Open **Settings -> Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Keep the existing custom domain as `www.agato.ai`.
4. Keep **Enforce HTTPS** enabled once GitHub reports the domain as configured correctly.

Do not change DNS merely to deploy this React build if the existing GitHub Pages site already resolves correctly at `www.agato.ai`.

## First deployment / replacing the old site

Back up the old repository first (a tag or branch is sufficient). Then replace the old site contents with this project and push to `main`.

Example from a clone of the existing production repository:

```bash
git checkout -b backup/pre-react-site
git push origin backup/pre-react-site
git checkout main
```

Copy this React project's contents into the repository root, remove obsolete old-site files that are no longer used (for example old standalone `services.html` and `about.html` pages), then commit and push:

```bash
git add -A
git commit -m "Deploy React website"
git push origin main
```

The **Deploy Agato Website** workflow will build and publish `dist/` automatically. Do not commit `dist/`; it is intentionally ignored.

## Local production verification

Install dependencies and build:

```bash
npm install
npm run build
```

A successful build should contain at least:

```text
dist/
├── 404.html
├── CNAME
├── index.html
├── assets/
└── images/
```

Preview locally:

```bash
npm run preview -- --host 0.0.0.0
```

Development with Docker remains available through:

```bash
docker compose up --build
```

## Production verification checklist

After the GitHub Actions deployment succeeds, verify:

- `https://www.agato.ai/`
- `https://www.agato.ai/services`
- `https://www.agato.ai/about`
- `https://www.agato.ai/signup`
- Refresh each non-root route directly in the browser.
- Navbar **Register** opens `/signup`.
- CSS and background images load correctly.
- Browser DevTools Console contains no runtime errors.
- HTTPS is active.
- `www.agato.ai` remains the configured custom domain in GitHub Pages.

## Rollback

If the React deployment has a production issue, restore the backup branch/tag contents to `main` and push. GitHub Actions will redeploy the restored version.
