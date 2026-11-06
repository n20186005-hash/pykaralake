import {existsSync,readFileSync,readdirSync,statSync} from 'node:fs';
import assert from 'node:assert/strict';
import {join} from 'node:path';
/** @param {string} directory @returns {string[]} */
const walk=directory=>readdirSync(directory).flatMap(name=>{const p=join(directory,name);return statSync(p).isDirectory()?walk(p):[p];});
const pkg=JSON.parse(readFileSync('package.json','utf8'));
for(const version of Object.values({...pkg.dependencies,...pkg.devDependencies}))assert.match(String(version),/^\d+\.\d+\.\d+$/);
for(const p of ['dist/index.html','dist/404.html','dist/privacy/index.html','dist/cookies/index.html','dist/terms/index.html'])assert.ok(existsSync(p),p);
assert.ok(!existsSync('dist/__pykara_404_document__'));
const home=readFileSync('dist/index.html','utf8');
assert.match(home,/15,922/);assert.doesNotMatch(home,/15,839|15,915|08:30|₹700|₹1,000|<iframe/);
const schema=[...home.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(x=>JSON.parse(x[1]));
assert.ok(schema.some(x=>x['@type']==='TouristAttraction'));
for(const x of schema)assert.doesNotMatch(JSON.stringify(x),/aggregateRating|openingHoursSpecification|isAccessibleForFree|"review"/);
for(const file of walk('dist')){
 if(!/\.(html|xml|js|txt|css|webmanifest)$/.test(file))continue;
 const s=readFileSync(file,'utf8');assert.doesNotMatch(s,/example\.com|localhost|chrome-extension:\/\//,file);
 if(file.endsWith('.html')){
  assert.equal([...s.matchAll(/<h1(?:\s|>)/g)].length,1,file);
  const ids=[...s.matchAll(/\sid="([^"]+)"/g)].map(x=>x[1]);assert.equal(ids.length,new Set(ids).size,file);
  for(const match of s.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)){const path=match[1];if(path.startsWith('/'))assert.ok(existsSync(join('dist',path)),`${file}: ${path}`);}
 }
}
for(const route of ['privacy','cookies','terms'])assert.match(readFileSync(`dist/${route}/index.html`,'utf8'),/noindex,follow/);
assert.match(readFileSync('dist/404.html','utf8'),/noindex,follow/);
const sitemap=readFileSync('dist/sitemap-0.xml','utf8');const locs=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>x[1]);assert.ok(locs.includes('https://pykaralake.com/'),'home in sitemap');for(const s of ['timings','ticket-price','boating-status','boating-rules','how-to-reach','ooty-to-pykara','parking','pykara-falls','pine-forest','wenlock-downs','upper-bhawani','emerald-lake','avalanche','half-day-tour','ooty-day-trip','two-day-tour','family-trip','restaurants','hotels','best-season','weather','photography','accessibility'])assert.ok(locs.includes(`https://pykaralake.com/${s}/`),`topic ${s} in sitemap`);assert.ok(locs.length>=24,'topic pages present in sitemap');
for(const name of ['pykara-lake','pykara-from-boat','pykara-falls']){
 const b=readFileSync(`dist/images/${name}.jpg`);assert.equal(b[0],255);assert.equal(b[1],216);assert.ok(b.length>10000,`${name}: suspicious size`);
}
console.log('Built content, image signatures, unique IDs, sitemap and indexing self-check: PASS');
