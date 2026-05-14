# DigiBim Hub

Fully static marketing site: BIM **training**, Revit **software** add-ons, and **placement** support. No database or server APIs.

## Run locally

**Development (hot reload):**

```bash
npm install
npm run dev
```

Open [http://localhost:3100](http://localhost:3100).

**Production-style preview (serves the static `out/` folder):**

```bash
npm run preview
```

(`next start` is not used because this project uses `output: 'export'`.)

After `npm run preview`, the static site is at [http://localhost:3100](http://localhost:3100) as well.

## Static export

```bash
npm run build
```

HTML is emitted to `out/`. On **Vercel**, connect this repo and deploy with the default Next.js settings; Vercel runs `next build` and serves the export. No environment variables are required.

## Stack

Next.js (App Router), React, Tailwind CSS.
