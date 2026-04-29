import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
const inputDir = '/opt/data/cache/images';
const outDir = 'public/images/galerie';
await fs.mkdir(outDir, { recursive: true });
const files = ['img_7b2938c9a273.jpg','img_7ce740f907b3.jpg','img_ccaa68a7cc92.jpg','img_e83e47dc2889.jpg','img_c57d5c82c16b.jpg','img_3c69a104f1d3.jpg','img_fba6e5e73728.jpg'];
for (let i=0; i<files.length; i++) {
  const n = String(i+1).padStart(2,'0');
  const src = path.join(inputDir, files[i]);
  const dest = path.join(outDir, `technique-mixte-sourcils-monnaie-tours-avant-apres-${n}.webp`);
  await sharp(src)
    .rotate()
    .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(dest);
  console.log(dest);
}
