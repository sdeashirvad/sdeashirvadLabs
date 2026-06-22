# SDEAshirvad Labs

Public website for [labs.sdeashirvad.com](https://labs.sdeashirvad.com) — the engineering studio behind PnLGuard, ChatLoom, GoForge, SentryAI, Transaction Guard, Bloom, and Veera.

This is **not** a personal portfolio. Career and resume content lives at [ashirvad.work](https://ashirvad.work/).

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy (Cloudflare Pages)

1. Connect the `sdeashirvad/sdeashirvadLabs` GitHub repository to Cloudflare Pages.
2. **Build command:** `npm run build`
3. **Build output directory:** `dist`
4. **Environment:** Node 20+
5. Add custom domain: `labs.sdeashirvad.com`
6. SPA routing is handled via `public/_redirects` (`/* /index.html 200`).

### DNS

| Record | Value |
|--------|-------|
| `labs` CNAME | Cloudflare Pages target |

## URL migration matrix

Labs product pages link to target `*.sdeashirvad.com` URLs. Configure redirects from legacy domains separately in Cloudflare:

| Product | Legacy URL | Target URL |
|---------|------------|------------|
| PnLGuard | pnlgaurd.ashirvad.work | pnlguard.sdeashirvad.com |
| ChatLoom | chatloom.ashirvad.work | chatloom.sdeashirvad.com |
| SentryAI | sentryai.ashirvad.work | sentryai.sdeashirvad.com |
| Bloom | bloom.ashirvad.work | bloom.sdeashirvad.com |
| GoForge | — | goforge.sdeashirvad.com (already live) |
| Veera | — | veera.sdeashirvad.com (already live) |

## Project structure

```
src/
  content/       # products, stories, insights, ecosystem — single source of truth
  components/    # UI + ecosystem visualization
  layouts/       # Navbar, Footer, RootLayout
  pages/         # Route pages
public/
  projects/      # Product screenshots
  og/            # Open Graph assets
```

## Content

Product metadata, origin stories, and ecosystem architecture are defined in `src/content/`. Update those files when product status or URLs change — the site renders from this layer.
