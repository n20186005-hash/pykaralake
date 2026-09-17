import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve('.');
const read = (file) => readFileSync(join(root, file), 'utf8');
const fail = (message) => {
  throw new Error(message);
};

/* 1. required files */
const required = [
  'package.json',
  'astro.config.mjs',
  'wrangler.jsonc',
  'src/pages/index.astro',
  'src/pages/privacy.astro',
  'src/pages/terms.astro',
  'src/pages/cookies.astro',
  'src/data/attraction.ts',
  'src/components/EntityGuide.astro',
  'src/components/RatingChip.astro',
  'src/components/ReviewsSection.astro',
  'src/components/SourcesSection.astro',
  'src/layouts/BaseLayout.astro',
  'public/brand/logo.svg',
  'public/brand/icon-192.png',
  'public/brand/icon-512.png',
  'public/brand/icon-maskable-512.png',
  'public/manifest.webmanifest',
  'public/sw.js',
  'public/offline.html',
  'public/robots.txt'
];
for (const file of required) if (!existsSync(join(root, file))) fail(`Missing required file: ${file}`);

/* 2. dependency pinning */
const pkg = JSON.parse(read('package.json'));
const specs = { ...pkg.dependencies, ...pkg.devDependencies };
for (const [name, version] of Object.entries(specs)) {
  if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(version)) fail(`Non-exact version: ${name}=${version}`);
}
if (existsSync(join(root, 'pnpm-workspace.yaml'))) {
  fail('pnpm-workspace.yaml should not exist for this single-package project.');
}

/* 3. no placeholder domains in sources */
const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
const sourceFiles = ['src', 'scripts', 'public'].flatMap((dir) => walk(join(root, dir)));
for (const file of sourceFiles) {
  if (!/\.(astro|mjs|js|ts|css|html|json|webmanifest|txt)$/i.test(file)) continue;
  const source = readFileSync(file, 'utf8');
  if (/example\.com|chrome-extension:\/\//i.test(source)) fail(`Forbidden placeholder in ${file}`);
}

/* 4. single-attraction entity binding values */
const entity = read('src/data/attraction.ts');
const entityValues = [
  ['domain', 'pykaralake.com'],
  ['full name', 'Pykara Lake Boat House'],
  ['short name', 'Pykara Lake'],
  ['city', 'Naduvattam'],
  ['state', 'Tamil Nadu'],
  ['country code', 'IN'],
  ['postal code', '643237'],
  ['latitude', '11.4548406'],
  ['longitude', '76.5974375'],
  ['maps share url', 'maps.app.goo.gl/R3VCpqVVNYmssjpU9'],
  ['govt tourism url', 'tamilnadutourism.tn.gov.in'],
  ['rating', '4.4'],
  ['review count', '15818'],
  ['sync month', 'September 2026']
];
for (const [label, value] of entityValues) {
  if (!entity.includes(value)) fail(`Entity binding value missing (${label}): ${value}`);
}

/* 5. Google review compliance: page copy only, never structured data */
const indexSource = read('src/pages/index.astro');
for (const token of ['aggregateRating', 'ratingValue', 'reviewCount', '"review"']) {
  if (indexSource.includes(token)) fail(`Google rating data must not reach JSON-LD: found "${token}" in index.astro`);
}
for (const token of ['<RatingChip', '<ReviewsSection', '<SourcesSection', '<EntityGuide']) {
  if (!indexSource.includes(token)) fail(`index.astro must render the entity/review building blocks (${token}).`);
}
for (const file of [
  'src/components/RatingChip.astro',
  'src/components/ReviewsSection.astro',
  'src/components/SourcesSection.astro'
]) {
  const source = read(file);
  if (!source.includes('googleReviewAttribution')) fail(`${file} must show the Google Maps review attribution.`);
  if (!source.includes('mapsListingUrl')) fail(`${file} must link back to the live Google Maps listing.`);
}
const layoutSource = read('src/layouts/BaseLayout.astro');
for (const token of ['manifest.webmanifest', 'serviceWorker', 'og:image:alt']) {
  if (!layoutSource.includes(token)) fail(`BaseLayout.astro missing PWA/OG requirement: ${token}`);
}

/* 6. web app manifest */
const manifest = JSON.parse(read('public/manifest.webmanifest'));
for (const key of ['name', 'short_name', 'start_url', 'scope', 'display', 'theme_color', 'background_color', 'icons']) {
  if (!manifest[key]) fail(`manifest.webmanifest missing "${key}"`);
}
const iconSizes = new Set(manifest.icons.map((icon) => `${icon.sizes}|${icon.purpose ?? 'any'}`));
for (const size of ['192x192|any', '512x512|any', '512x512|maskable']) {
  if (!iconSizes.has(size)) fail(`manifest.webmanifest missing icon entry: ${size}`);
}
for (const icon of manifest.icons) {
  if (icon.type === 'image/svg+xml') continue;
  if (!existsSync(join(root, 'public', icon.src.replace(/^\//, '')))) fail(`Manifest icon file missing: ${icon.src}`);
}

/* 7. service worker must never intercept third-party (Google) traffic */
const sw = read('public/sw.js');
if (!sw.includes('url.origin !== self.location.origin')) fail('sw.js must skip cross-origin (Google) requests.');
if (!sw.includes('/offline.html')) fail('sw.js must provide an offline fallback page.');

/* 8. built output checks */
if (existsSync(join(root, 'dist'))) {
  const distFiles = walk(join(root, 'dist'));
  for (const file of distFiles) {
    if (!/\.(html|xml|js|css|txt|webmanifest)$/i.test(file)) continue;
    const source = readFileSync(file, 'utf8');
    if (/example\.com|localhost|chrome-extension:\/\//i.test(source)) fail(`Forbidden token in dist: ${file}`);
  }

  const distIndexPath = join(root, 'dist', 'index.html');
  if (!existsSync(distIndexPath)) fail('dist/index.html was not generated.');
  const distIndex = readFileSync(distIndexPath, 'utf8');
  for (const token of [
    '<title>Pykara Lake Boat House (Naduvattam) - Visitor Guide &amp; Location</title>',
    'rel="canonical"',
    'og:image:alt',
    'manifest.webmanifest',
    'Pykara Lake Boat House (Naduvattam)',
    'Google Maps user reviews',
    'Google Maps-இல் அனைத்து மதிப்புரைகளையும் பார்க்க'
  ]) {
    if (!distIndex.includes(token)) fail(`dist/index.html missing: ${token}`);
  }

  /* page copy checks: rating / attribution / PWA / entity semantics */
  const copyChecks = [
    ['latest rating value', '4.4'],
    ['latest review count', '15,818'],
    ['hero attribution (English)', 'Rating and review count synced from Google Maps user reviews'],
    ['hero attribution (Tamil)', 'Google Maps (Google வரைபடம்) பயனர் மதிப்புரைகளிலிருந்து ஒத்திசைக்கப்பட்டது'],
    ['review block copyright note', 'Copyright remains with the original reviewers and Google Maps'],
    ['review block copyright note (Tamil)', 'பதிப்புரிமை அசல் மதிப்புரையாளர்கள்'],
    ['review button (English)', 'See all reviews on Google Maps'],
    ['sources row sync label', 'Reviews and rating · synced September 2026'],
    ['maps share link kept', 'maps.app.goo.gl/R3VCpqVVNYmssjpU9'],
    ['maps search link kept', 'google.com/maps/search/?api=1'],
    ['maps embed kept', 'output=embed'],
    ['manifest link', 'rel="manifest" href="/manifest.webmanifest"'],
    ['service worker registration', 'serviceWorker.register'],
    ['apple mobile web app meta', 'apple-mobile-web-app-capable'],
    ['canonical absolute url', 'rel="canonical" href="https://pykaralake.com/"'],
    ['H2 about entity', 'About Pykara Lake Boat House'],
    ['H2 location entity', 'Location &amp; How to Visit Pykara Lake in Naduvattam'],
    ['H2 landmarks entity', 'Landmarks &amp; Attractions Around Pykara Lake'],
    ['H2 history entity', 'History &amp; Significance of Pykara Lake Boat House'],
    ['breadcrumb entity chain', 'Pykara Lake Boat House'],
    ['government tourism portal', 'tamilnadutourism.tn.gov.in'],
    ['ttdc operator portal', 'ttdconline.com'],
    ['semantic alt (main view)', 'Pykara Lake Boat House - Main view in Naduvattam, India'],
    ['semantic alt (nearby landmark)', 'Pykara Falls near Pykara Lake']
  ];
  for (const [label, token] of copyChecks) {
    if (!distIndex.includes(token)) fail(`dist/index.html missing ${label}: ${token}`);
  }

  const ldBlocks = [...distIndex.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (ldBlocks.length < 4) fail(`Expected 4 JSON-LD blocks (attraction/website/breadcrumb/FAQ), found ${ldBlocks.length}.`);
  const types = new Set();
  for (const [, json] of ldBlocks) {
    let parsed;
    try {
      parsed = JSON.parse(json);
    } catch {
      fail(`Invalid JSON-LD in dist/index.html: ${json.slice(0, 80)}…`);
    }
    types.add(parsed['@type']);
    if (/aggregateRating|"review"|ratingValue|reviewCount/.test(json)) {
      fail(`JSON-LD must not contain Google review data: ${parsed['@type']}`);
    }
  }
  for (const type of ['TouristAttraction', 'WebSite', 'BreadcrumbList', 'FAQPage']) {
    if (!types.has(type)) fail(`Missing JSON-LD node: ${type}`);
  }
  const attraction = JSON.parse(ldBlocks.find(([, json]) => json.includes('TouristAttraction'))[1]);
  for (const key of ['@id', 'name', 'alternateName', 'image', 'address', 'geo', 'hasMap', 'sameAs']) {
    if (!attraction[key]) fail(`TouristAttraction JSON-LD missing "${key}"`);
  }
  if (attraction.geo.latitude !== 11.4548406 || attraction.geo.longitude !== 76.5974375) {
    fail('TouristAttraction JSON-LD geo coordinates are out of sync with src/data/attraction.ts');
  }
  for (const asset of ['manifest.webmanifest', 'sw.js', 'offline.html', 'robots.txt', 'brand/icon-192.png', 'brand/icon-512.png', 'brand/icon-maskable-512.png']) {
    if (!existsSync(join(root, 'dist', asset))) fail(`PWA asset not copied to dist: ${asset}`);
  }
  const distManifest = JSON.parse(readFileSync(join(root, 'dist', 'manifest.webmanifest'), 'utf8'));
  if (distManifest.icons.length !== manifest.icons.length) fail('dist manifest icons drifted from source manifest.');
}

/* 9. licence / photo notice */
const localPhotos = ['pykara-boat-house.jpg', 'pykara-lake.jpg', 'pykara-from-boat.jpg', 'pykara-falls.jpg'];
const missing = localPhotos.filter((file) => !existsSync(join(root, 'public/images', file)));
if (missing.length) {
  console.warn(`NOTICE: real local JPGs not yet vendored: ${missing.join(', ')}. Run pnpm fetch:images on a network-enabled machine.`);
}

console.log('Static source self-check: PASS');
