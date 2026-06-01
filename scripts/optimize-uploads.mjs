/*
  Optimiza las imágenes subidas desde el panel /admin (Decap CMS).

  Decap guarda las imágenes tal cual en public/uploads/ y las referencia por su
  nombre (ej. /uploads/foto.jpeg). Para no romper esas referencias, este script
  comprime y redimensiona CADA imagen IN-PLACE: mismo nombre y misma extensión,
  pero mucho más liviana. Así Laura puede subir cualquier foto desde el celular
  y el sitio igual carga rápido (bueno para SEO / Core Web Vitals).

  Corre automáticamente antes de cada build (ver "prebuild" en package.json), o a
  mano con:  node scripts/optimize-uploads.mjs

  Usa sharp, que ya viene como dependencia de Astro.
*/
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');
const MAX_WIDTH = 1600; // ancho máximo razonable para una portada/foto del blog
const JPEG_QUALITY = 78;
const PNG_QUALITY = 80;

async function optimize() {
  let files;
  try {
    files = await readdir(UPLOADS_DIR);
  } catch {
    // La carpeta puede no existir aún si nadie subió imágenes. No es un error.
    return;
  }

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const filePath = path.join(UPLOADS_DIR, file);
    const before = (await stat(filePath)).size;

    try {
      const img = sharp(filePath, { failOn: 'none' });
      const meta = await img.metadata();

      // Redimensiona solo si es más ancha que el máximo (no agranda).
      if (meta.width && meta.width > MAX_WIDTH) {
        img.resize({ width: MAX_WIDTH });
      }

      if (ext === '.png') {
        img.png({ quality: PNG_QUALITY, compressionLevel: 9 });
      } else {
        img.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
      }

      // sharp no puede leer y escribir el mismo archivo a la vez: usamos un buffer.
      const buffer = await img.toBuffer();
      // Solo sobrescribe si efectivamente quedó más liviana.
      if (buffer.length < before) {
        const { writeFile } = await import('node:fs/promises');
        await writeFile(filePath, buffer);
        const saved = (((before - buffer.length) / before) * 100).toFixed(0);
        console.log(`  optimizada ${file}: ${(before / 1024).toFixed(0)}KB → ${(buffer.length / 1024).toFixed(0)}KB (-${saved}%)`);
      }
    } catch (err) {
      console.warn(`  ⚠️ no se pudo optimizar ${file}: ${err.message}`);
    }
  }
}

console.log('Optimizando imágenes de public/uploads/ ...');
await optimize();
console.log('Listo.');
