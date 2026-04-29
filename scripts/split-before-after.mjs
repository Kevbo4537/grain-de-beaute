import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const inputDir = '/opt/data/cache/images';
const outDir = 'public/images/galerie/split';
await fs.mkdir(outDir, { recursive: true });

const specs = [
  { f:'img_7b2938c9a273.jpg', top:0, bottom:0.80, gutter:16 },
  { f:'img_7ce740f907b3.jpg', top:0, bottom:0.78, gutter:14 },
  { f:'img_ccaa68a7cc92.jpg', top:0, bottom:0.78, gutter:16 },
  { f:'img_e83e47dc2889.jpg', top:0, bottom:0.78, gutter:14 },
  { f:'img_c57d5c82c16b.jpg', top:0, bottom:0.78, gutter:14 },
  // Polaroid-style montage: keep the photo cards, not the full beige background.
  { f:'img_3c69a104f1d3.jpg', custom: { avant:{left:40, top:165, width:500, height:620}, apres:{left:500, top:230, width:485, height:620} } },
  // White design montage with logo top and labels bottom: crop the two central panels.
  { f:'img_fba6e5e73728.jpg', custom: { avant:{left:55, top:210, width:485, height:635}, apres:{left:540, top:210, width:485, height:635} } },
];

const items = [];
for (let i=0; i<specs.length; i++) {
  const spec = specs[i];
  const src = path.join(inputDir, spec.f);
  const meta = await sharp(src).metadata();
  const n = String(i+1).padStart(2,'0');
  let crops;
  if (spec.custom) {
    crops = spec.custom;
  } else {
    const h = Math.floor(meta.height * spec.bottom);
    const half = Math.floor(meta.width / 2);
    const gutter = spec.gutter || 0;
    crops = {
      avant: { left:0, top:0, width:half - Math.floor(gutter/2), height:h },
      apres: { left:half + Math.ceil(gutter/2), top:0, width:meta.width - half - Math.ceil(gutter/2), height:h }
    };
  }
  for (const side of ['avant','apres']) {
    const filename = `technique-mixte-sourcils-monnaie-tours-${side}-${n}.webp`;
    const dest = path.join(outDir, filename);
    const c = crops[side];
    await sharp(src)
      .rotate()
      .extract(c)
      .resize({ width: 900, height: 900, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 84, effort: 6 })
      .toFile(dest);
    items.push({ side, n, file:`images/galerie/split/${filename}` });
    console.log(dest);
  }
}

// Contact sheet for visual QA
const thumbs = [];
for (const item of items) {
  const input = path.join('public', item.file);
  const buf = await sharp(input).resize({ width: 220, height: 220, fit: 'contain', background: '#15110f' }).png().toBuffer();
  thumbs.push({ input: buf, left: ((thumbs.length) % 4) * 240, top: Math.floor((thumbs.length)/4) * 260 });
}
await sharp({ create: { width: 960, height: Math.ceil(items.length/4)*260, channels: 4, background: '#f8f0e8' } })
  .composite(thumbs)
  .png()
  .toFile('public/images/galerie/split/contact-sheet.png');
