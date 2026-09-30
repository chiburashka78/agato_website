# Agato Website

React/Vite implementation of the Agato Security Solutions marketing site.

## Local development

```bash
npm install
npm run dev
```

Or with Docker:

```bash
docker compose up --build
```

The Vite development server is available at `http://localhost:5173` by default.

## Production build

```bash
npm run build
```

Vite writes the production site to `dist/`. The `postbuild` script also creates `dist/404.html` so client-side React Router routes can load directly on GitHub Pages.

Do not commit `dist/`; GitHub Actions builds it during deployment.

## Routes

- `/` — Home
- `/services` — Services
- `/about` — About
- `/signup` — Registration
- Any other route — Not Found

## Production deployment

The site is configured for GitHub Pages at `www.agato.ai`.

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for the production cutover, GitHub Pages configuration, verification checklist, and rollback procedure.
