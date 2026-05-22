// Convierte los SVG en `public/` a PNG (og-image, apple-touch-icon).
// Edita los SVG (fuente de verdad) y vuelve a correr: `npm run gen:og`.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const here = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(here, '..', 'public');

const targets = [
  { src: 'og-image.svg',         out: 'og-image.png',         width: 1200 },
  { src: 'apple-touch-icon.svg', out: 'apple-touch-icon.png', width: 180  },
];

for (const t of targets) {
  const svg = readFileSync(resolve(publicDir, t.src));
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: t.width },
    font: { loadSystemFonts: true },
  });
  const png = resvg.render().asPng();
  writeFileSync(resolve(publicDir, t.out), png);
  console.log(`✓ ${t.src} → ${t.out} (${png.byteLength.toLocaleString()} bytes)`);
}
