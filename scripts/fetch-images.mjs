import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {mkdir} from 'node:fs/promises';
const require=createRequire(import.meta.url);
const astroRequire=createRequire(require.resolve('astro/package.json'));
const sharp=astroRequire('sharp'); // Already locked Astro image dependency; no dependency added.
const items=[
 ['pykara-lake','Scenic View of Pykara Lake and Surroundings.jpg','b4bf5d79a90a82169db4819be7fe20a7f622adfc'],
 ['pykara-from-boat','Boating in Pykara Lake in Ooty, Tamil Nadu.JPG','7d60ea2e68a7fe36d16b7a4895f2ad09fd75dce9'],
 ['pykara-falls','Pykara Falls in the Nilgiris, Tamil Nadu - Front View.jpg','7bd8e156eea67f751c94bb72e1b9ff0367f5b1c9']
];
await mkdir('public/images',{recursive:true});
for(const [local,name,expected]of items){
 const normalized=name.replaceAll(' ','_');const md5=createHash('md5').update(normalized).digest('hex');
 const url=`https://upload.wikimedia.org/wikipedia/commons/${md5[0]}/${md5.slice(0,2)}/${encodeURIComponent(normalized)}`;
 const response=await fetch(url,{signal:AbortSignal.timeout(30000)});
 if(!response.ok)throw Error(`Image download failed: ${response.status}`);
 const bytes=Buffer.from(await response.arrayBuffer());
 if(createHash('sha1').update(bytes).digest('hex')!==expected)throw Error(`Original changed; review provenance before replacing ${local}`);
 for(const width of [800,1600])await sharp(bytes).rotate().resize({width,withoutEnlargement:true}).jpeg({quality:80,mozjpeg:true}).toFile(`public/images/${local}${width===800?'-800':''}.jpg`);
 if(local==='pykara-from-boat')await sharp(bytes).rotate().resize(1200,630,{fit:'cover'}).jpeg({quality:82}).toFile('public/images/pykara-social.jpg');
 console.log(`Verified and optimized ${local}`);
}
