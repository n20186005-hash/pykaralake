# Delivery / QA status

## Completed in this delivery
- Astro + Tailwind CSS + TypeScript source created.
- Exact direct dependency versions are pinned in `package.json`.
- `packageManager` and Node.js versions are pinned.
- Single-package project; no `pnpm-workspace.yaml`.
- Cloudflare Workers Static Assets configuration is included (`wrangler.jsonc`).
- Tamil-language tourism page, Google Maps embed, FAQ, JSON-LD, legal pages, GA4 consent flow, logo/favicon and photo attribution are included.
- Source-level self-check script is included and can run without third-party packages.

## Sandbox limitation (important)
The current execution sandbox cannot resolve/download from the npm registry or Wikimedia binary endpoints. Therefore this ZIP **does not claim** that `pnpm install --frozen-lockfile`, `astro check`, or `astro build` was completed here, and it does **not** fabricate a transitive `pnpm-lock.yaml`.

The four local JPG binaries are also not fabricated. `scripts/fetch-images.mjs` resolves the exact Wikimedia Commons originals and writes them to `public/images/` on a normal network-enabled machine. Until then, the page has an `onerror` fallback to the same real Commons originals.

## Final release gate on a network-enabled machine
```bash
corepack enable
pnpm install
pnpm fetch:images
rm -rf node_modules dist .astro
CI=1 pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm selfcheck
```

After the first successful `pnpm install`, commit the pnpm-generated `pnpm-lock.yaml` before production deployment. Do not hand-write it.
