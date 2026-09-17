import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const items = [
  ['pykara-boat-house.jpg', 'Pykara-Boat-House-Ooty-Tamil-Nadu-India.jpg'],
  ['pykara-lake.jpg', 'Scenic View of Pykara Lake and Surroundings.jpg'],
  ['pykara-from-boat.jpg', 'Boating in Pykara Lake in Ooty, Tamil Nadu.JPG'],
  ['pykara-falls.jpg', 'Pykara Falls in the Nilgiris, Tamil Nadu - Front View.jpg']
];

const commonsOriginal = (name) => {
  const normalized = name.replaceAll(' ', '_');
  const md5 = createHash('md5').update(normalized).digest('hex');
  return `https://upload.wikimedia.org/wikipedia/commons/${md5[0]}/${md5.slice(0,2)}/${encodeURIComponent(normalized).replaceAll('%2F','/')}`;
};

const output = resolve('public/images');
await mkdir(output, { recursive: true });

for (const [local, commonsName] of items) {
  const url = commonsOriginal(commonsName);
  console.log(`Fetching ${local}...`);
  const response = await fetch(url, { headers: { 'User-Agent': 'PykaraTravelSite/1.0 (local asset vendoring)' } });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  const type = response.headers.get('content-type') || '';
  if (!type.startsWith('image/')) throw new Error(`Unexpected content-type ${type}: ${url}`);
  const bytes = new Uint8Array(await response.arrayBuffer());
  if (bytes.length < 50_000) throw new Error(`Image looks unexpectedly small (${bytes.length} bytes): ${url}`);
  await writeFile(resolve(output, local), bytes);
  console.log(`  ✓ ${local} (${(bytes.length/1024/1024).toFixed(2)} MiB)`);
}
console.log('All four real Pykara photos are now local in public/images/.');
