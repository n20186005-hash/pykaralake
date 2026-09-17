# Pykara Lake Boat House — தமிழ் சுற்றுலா தளம்

A custom, non-template tourism microsite for **Pykara Lake Boat House, Naduvattam, The Nilgiris, Tamil Nadu, India**.

Single-attraction SEO entity site: `pykaralake.com` ↔ Google Maps entity *Pykara Lake Boat House*.

## Stack
- Astro `7.3.2`
- Tailwind CSS `4.3.3` + `@tailwindcss/vite` `4.3.3`
- TypeScript `6.0.3`
- `@astrojs/check` `0.9.10`
- `@astrojs/sitemap` `3.7.4`
- Wrangler `4.129.1`
- Node.js `24.21.0` (Node 22+ also works)
- pnpm `10.34.5`

All direct versions are exact. This is intentionally a single-package project without `pnpm-workspace.yaml`.

## Install local real photos
```bash
pnpm fetch:images
```
Creates:
- `public/images/pykara-boat-house.jpg`
- `public/images/pykara-lake.jpg`
- `public/images/pykara-from-boat.jpg`
- `public/images/pykara-falls.jpg`

Sources and licenses: `docs/IMAGE_SOURCES.md`.

## Single-attraction SEO entity binding
Every entity value lives in one file — `src/data/attraction.ts` (domain, official name, short name,
city, state, country, postal code, coordinates, Google Maps share/embed URLs, nearby landmarks,
government tourism URL, Google rating + review count and sync month).

The instantiated variable table and the requirement → file mapping are documented in
`docs/SEO-ENTITY-BINDING.md`. Page output:

- `TouristAttraction` JSON-LD with `@id`, `alternateName`, `image[]`, `isAccessibleForFree`, full
  `PostalAddress`, `GeoCoordinates`, `hasMap` and `sameAs`.
- `WebSite` node with `@id` anchoring `about` to `#attraction`, plus `BreadcrumbList` and `FAQPage`.
- TDK / Open Graph / Twitter tags, `canonical`, `og:image:alt`, `robots.txt`, sitemap.

### Google rating & reviews (compliance)
- Latest synced values: **4.4** from **15,818** Google Maps reviews (synced **September 2026**).
- Displayed on the page in three places: hero rating chip (with the "synced from Google Maps user
  reviews · September 2026 · see all reviews" line), the reviews section, and the sources section.
- Attribution + copyright line: *“Synced from Google Maps user reviews; last synced September 2026.
  Copyright remains with the original reviewers and Google Maps.”*
- **Never** written to JSON-LD: no `aggregateRating`, no `review`. `pnpm selfcheck` fails the build
  if any rating/review token leaks into structured data.
- All Google links are kept (`maps/app.goo.gl` share link, `google.com/maps/search` listing link and
  the Maps embed iframe).

## PWA
- `public/manifest.webmanifest` — standalone display, theme `#183f33`, shortcuts to
  `/#boating`, `/#map`, `/#reviews`.
- `public/sw.js` — offline app shell. Same-origin only, so Google Maps embeds and gtag are never
  intercepted; navigations are network-first with a cached shell + `public/offline.html` fallback.
- `public/brand/icon-192.png`, `icon-512.png`, `icon-maskable-512.png` — generated from
  `public/brand/logo.svg` with `pnpm make:icons` (no third-party dependency, no network).
- Registration + `beforeinstallprompt` install button are wired in `src/layouts/BaseLayout.astro`
  and the site header (HTTPS only, progressive enhancement).

## Development
```bash
pnpm install
pnpm fetch:images
pnpm make:icons
pnpm check
pnpm dev
```

If `corepack` fails with `Cannot find matching keyid`, run
`$env:COREPACK_INTEGRITY_KEYS="0"` (PowerShell) before `pnpm install`.

On Windows without symlink privileges install with a hoisted node linker:
```bash
pnpm install --config.node-linker=hoisted
```

## Production domain
There is only one origin input: the `SITE_URL` environment variable consumed by `astro.config.mjs`.
It defaults to `https://pykaralake.com`, so canonical / OG / JSON-LD / sitemap are always absolute.

```bash
SITE_URL=https://your-real-domain.tld pnpm build
```

## Cloudflare Workers Static Assets
```bash
SITE_URL=https://pykaralake.com pnpm deploy
```

`wrangler.jsonc` serves `./dist` through Workers Static Assets.

## GA4 and cookies
Measurement ID: `G-HXM22WWPKP`. Analytics loads only after explicit consent; the choice is stored in browser localStorage.

## Verification
`pnpm build` runs `astro build` followed by `node scripts/selfcheck.mjs`, which asserts the entity
values, the manifest/service-worker wiring, the presence of the four JSON-LD nodes, and that no
Google rating/review data reached structured data. Current status: `QA-STATUS.md`.
