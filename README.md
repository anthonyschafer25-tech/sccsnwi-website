# SCCS NWI Website

Next.js 16 + TypeScript + Tailwind v4 website for SCCS NWI — family-owned, 24/7 emergency restoration (water, fire, mold) serving Northwest Indiana since 2012.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deployment

Deployed on Vercel. Every push to `main` redeploys production; every pull request gets its own preview URL.

## Structure

- `src/lib/site.ts` — site-wide constants (phone, email, address, social) and LocalBusiness schema
- `src/lib/content.ts` — all service, city, and service+city page content
- `src/components/` — shared UI components (Navbar, Footer, hero, sections, icons)
- `src/app/` — routes (homepage, about, contact, services, service-area, reviews, legal)
- `vercel.json` — 301 redirect map for the sccsnwi.com domain migration
