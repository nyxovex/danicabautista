# Danica Bautista — Static Portfolio

This repository contains Danica Bautista’s public visual portfolio as a **static React and Vite site**. It has no owner login, editor, database, API, cookies, visitor analytics, or server requirement. All public content lives in `client/src/content/portfolio.ts`.

## Local use

Install Node.js 22 and pnpm 10, then run the site locally.

```bash
pnpm install
pnpm dev
```

The standard validation and static production build are below.

```bash
pnpm test
pnpm check
pnpm build
```

The build output is written to `dist/` and can be hosted on GitHub Pages, Netlify, Cloudflare Pages, or any static file host.

Certificate previews use public HTTPS image URLs defined alongside their metadata in `client/src/content/portfolio.ts`, so the static site does not rely on a backend or database. Keep certificate previews public only when that is appropriate.

## Publish with GitHub Pages

Push this repository to GitHub, keeping the default branch named `main`. In the repository’s **Settings → Pages**, set **Source** to **GitHub Actions**. The included `.github/workflows/deploy.yml` installs dependencies, validates the static portfolio, builds it, and publishes `dist/` on each push to `main`.

> The portfolio is intentionally public. Use only contact details and credential previews you are comfortable sharing. Before publishing, check that the contact details and certificate content remain appropriate for public access.

## Update portfolio content

Edit `client/src/content/portfolio.ts` to update text, skills, experience, achievements, projects, email, telephone, or location. Certificate previews and motion behavior are in `client/src/pages/Home.tsx` and `client/src/index.css`.
