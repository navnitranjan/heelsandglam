/**
 * Generate Android Chrome & favicon PNGs for the web manifest.
 * Uses sharp (already bundled with Next.js) to create SVG-based icons.
 * 
 * Usage: node scripts/generate-icons.mjs
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const BRAND_BG = '#0B0B0C';
const BRAND_GOLD = '#C5A059';
const BRAND_SUB = '#C89E88';

function createIconSVG(size) {
  const mainFont = Math.round(size * 0.55);
  const subFont = Math.round(size * 0.16);
  const mainY = Math.round(size * 0.48);
  const subY = Math.round(size * 0.76);

  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="${BRAND_BG}"/>
  <text x="${size/2}" y="${mainY}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-weight="300" font-size="${mainFont}" fill="${BRAND_GOLD}">H</text>
  <text x="${size/2}" y="${subY}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-weight="300" font-size="${subFont}" fill="${BRAND_SUB}" letter-spacing="${Math.round(size * 0.02)}">G</text>
</svg>`;
}

async function generateIcon(size, outputName) {
  const svg = Buffer.from(createIconSVG(size));
  const outputPath = path.join(PUBLIC_DIR, outputName);
  
  await sharp(svg)
    .resize(size, size)
    .png()
    .toFile(outputPath);
  
  console.log(`✓ Generated ${outputName} (${size}×${size})`);
}

async function main() {
  // Ensure public dir exists
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  await generateIcon(192, 'android-chrome-192x192.png');
  await generateIcon(512, 'android-chrome-512x512.png');
  await generateIcon(180, 'apple-touch-icon.png');
  await generateIcon(32, 'favicon-32x32.png');
  await generateIcon(16, 'favicon-16x16.png');

  console.log('\n✓ All icons generated successfully in /public/');
}

main().catch(console.error);
