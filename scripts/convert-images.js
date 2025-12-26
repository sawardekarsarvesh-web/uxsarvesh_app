import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'public', 'images');

async function convert() {
  const files = fs.readdirSync(imagesDir).filter(f => /\.(jpe?g|png)$/i.test(f));
  console.log(`Found ${files.length} images to convert`);
  for (const file of files) {
    const inPath = path.join(imagesDir, file);
    const outName = file.replace(/\.(jpe?g|png)$/i, '.webp');
    const outPath = path.join(imagesDir, outName);
    try {
      await sharp(inPath)
        .webp({ quality: 80 })
        .toFile(outPath);
      console.log(`Converted ${file} -> ${outName}`);
    } catch (err) {
      console.error(`Failed to convert ${file}:`, err);
    }
  }
}

convert().catch(err => { console.error(err); process.exit(1); });
