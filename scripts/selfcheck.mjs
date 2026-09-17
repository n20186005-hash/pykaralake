import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve('.');
const required = ['package.json','astro.config.mjs','wrangler.jsonc','src/pages/index.astro','src/pages/privacy.astro','src/pages/terms.astro','src/pages/cookies.astro','public/brand/logo.svg'];
for (const f of required) if (!existsSync(join(root,f))) throw new Error(`Missing required file: ${f}`);

const pkg = JSON.parse(readFileSync(join(root,'package.json'),'utf8'));
const specs = {...pkg.dependencies, ...pkg.devDependencies};
for (const [name,v] of Object.entries(specs)) if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(v)) throw new Error(`Non-exact version: ${name}=${v}`);
if (existsSync(join(root,'pnpm-workspace.yaml'))) throw new Error('pnpm-workspace.yaml should not exist for this single-package project.');

const walk = (dir) => readdirSync(dir).flatMap(name => { const p=join(dir,name); return statSync(p).isDirectory()?walk(p):[p]; });
const sourceFiles = ['src','scripts'].flatMap(d=>walk(join(root,d))).filter(f=>/\.(astro|mjs|js|ts|css)$/.test(f));
for (const f of sourceFiles) {
  const s=readFileSync(f,'utf8');
  if (/example\.com|chrome-extension:\/\//i.test(s)) throw new Error(`Forbidden placeholder in ${f}`);
}

const localPhotos = ['pykara-boat-house.jpg','pykara-lake.jpg','pykara-from-boat.jpg','pykara-falls.jpg'];
const missing = localPhotos.filter(f=>!existsSync(join(root,'public/images',f)));
if (missing.length) console.warn(`NOTICE: real local JPGs not yet vendored: ${missing.join(', ')}. Run pnpm fetch:images on a network-enabled machine.`);

if (existsSync(join(root,'dist'))) {
  for (const f of walk(join(root,'dist'))) {
    if (!/\.(html|xml|js|css|txt)$/i.test(f)) continue;
    const s=readFileSync(f,'utf8');
    if (/example\.com|localhost|chrome-extension:\/\//i.test(s)) throw new Error(`Forbidden token in dist: ${f}`);
  }
}
console.log('Static source self-check: PASS');
