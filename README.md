# Pykara Lake Boat House — தமிழ் சுற்றுலா தளம்

A custom, non-template tourism microsite for **Pykara Lake Boat House, Nilgiris, Tamil Nadu**.

## Stack
- Astro `7.3.2`
- Tailwind CSS `4.3.3` + `@tailwindcss/vite` `4.3.3`
- TypeScript `6.0.3`
- `@astrojs/check` `0.9.10`
- `@astrojs/sitemap` `3.7.4`
- Wrangler `4.129.1`
- Node.js `24.21.0`
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

## Development
```bash
corepack enable
pnpm install
pnpm fetch:images
pnpm check
pnpm dev
```

## Production domain
There is only one origin input: the `SITE_URL` environment variable consumed by `astro.config.mjs`.

```bash
SITE_URL=https://your-real-domain.tld pnpm build
```

If `SITE_URL` is empty, canonical / absolute OG URL / sitemap are omitted instead of inventing a placeholder domain.

## Cloudflare Workers Static Assets
```bash
SITE_URL=https://your-real-domain.tld pnpm deploy
```

`wrangler.jsonc` serves `./dist` through Workers Static Assets.

## GA4 and cookies
Measurement ID: `G-HXM22WWPKP`. Analytics loads only after explicit consent; the choice is stored in browser localStorage.

## Verification note
See `QA-STATUS.md`. The delivery sandbox could not access npm/Wikimedia binary endpoints, so no fake lockfile, fake JPGs, or fake “build passed” claim is included.
