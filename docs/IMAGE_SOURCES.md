# Pykara photo provenance

The site is designed to use **real Pykara photographs** locally from `public/images/`. Run `pnpm fetch:images` on a network-enabled machine to vendor the originals.

| Local file | Wikimedia Commons work | Author | License | Source page |
|---|---|---|---|---|
| `public/images/pykara-boat-house.jpg` | Pykara-Boat-House-Ooty-Tamil-Nadu-India.jpg | N. Vivekananthamoorthy | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Pykara-Boat-House-Ooty-Tamil-Nadu-India.jpg |
| `public/images/pykara-lake.jpg` | Scenic View of Pykara Lake and Surroundings.jpg | Prasannakamble25 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Scenic_View_of_Pykara_Lake_and_Surroundings.jpg |
| `public/images/pykara-from-boat.jpg` | Boating in Pykara Lake in Ooty, Tamil Nadu.JPG | KARTY JazZ | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Boating_in_Pykara_Lake_in_Ooty,_Tamil_Nadu.JPG |
| `public/images/pykara-falls.jpg` | Pykara Falls in the Nilgiris, Tamil Nadu - Front View.jpg | Prasannakamble25 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Pykara_Falls_in_the_Nilgiris,_Tamil_Nadu_-_Front_View.jpg |

Keep attribution visible when publishing. For CC BY-SA works, follow the share-alike terms if you distribute adaptations.

Credits are rendered in the page footer and in the *Sources & references* section (`SourcesSection.astro`).

## PWA icons (generated, not downloaded)

| File | Origin | How to regenerate |
|---|---|---|
| `public/brand/icon-192.png` | `public/brand/logo.svg` (project's own artwork) | `pnpm make:icons` |
| `public/brand/icon-512.png` | idem | `pnpm make:icons` |
| `public/brand/icon-maskable-512.png` | idem (full-bleed brand background, 78% safe-zone foreground) | `pnpm make:icons` |

`scripts/make-icons.mjs` rasterises the SVG with an internal scanline renderer and PNG encoder — no
third-party dependency and no network access. Re-run it whenever `logo.svg` changes.

No Google imagery is copied or re-hosted: Google Maps content appears only as an embed/link, and the
rating/review snapshot is quoted with attribution in
`docs/SEO-ENTITY-BINDING.md` style wording on the page.
