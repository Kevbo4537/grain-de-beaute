import sharp from 'sharp';

const input = 'public/images/logo.png';
const output = 'public/images/logo-clean.png';
const meta = await sharp(input).metadata();
const size = Math.min(meta.width, meta.height);
const radius = Math.floor(size * 0.46);
const cx = Math.floor((meta.width || size) / 2);
const cy = Math.floor((meta.height || size) / 2);
const svg = `<svg width="${meta.width}px" height="${meta.height}px" viewBox="0 0 ${meta.width} ${meta.height}" xmlns="http://www.w3.org/2000/svg"><circle cx="${cx}" cy="${cy}" r="${radius}" fill="white"/></svg>`;
const mask = await sharp(Buffer.from(svg)).resize(meta.width, meta.height, { fit: 'fill' }).png().toBuffer();
const cut = await sharp(input).ensureAlpha().composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
await sharp(cut)
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 1 })
  .resize({ width: 512, height: 512, fit: 'inside' })
  .png({ compressionLevel: 9 })
  .toFile(output);
console.log(`Created ${output} from ${input}`);
