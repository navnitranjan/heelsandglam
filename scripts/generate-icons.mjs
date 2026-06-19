/**
 * Generate Android Chrome, Apple Touch, maskable, shortcut, and favicon PNGs/SVGs.
 * Uses sharp to compile vectors to pixel-perfect transparent assets.
 * 
 * Usage: node scripts/generate-icons.mjs
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

function createIconSVG(size, isMaskable = false) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#AA7C11" />
      <stop offset="30%" stop-color="#F1E4C3" />
      <stop offset="50%" stop-color="#C5A059" />
      <stop offset="70%" stop-color="#F1E4C3" />
      <stop offset="100%" stop-color="#86610E" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="#0B0B0C"/>
  ${!isMaskable ? `
  <circle cx="256" cy="256" r="236" fill="none" stroke="url(#gold)" stroke-width="4" />
  <circle cx="256" cy="256" r="226" fill="none" stroke="url(#gold)" stroke-width="1.5" opacity="0.6" />
  ` : ''}
  
  <!-- Interlocking luxury serif H&G Monogram -->
  <text x="210" y="325" font-family="'Georgia', 'Times New Roman', serif" font-weight="300" font-size="260" text-anchor="middle" fill="url(#gold)">H</text>
  <text x="305" y="355" font-family="'Georgia', 'Times New Roman', serif" font-weight="300" font-size="260" text-anchor="middle" fill="url(#gold)">G</text>
  
  <!-- Sleek connection vector line -->
  <line x1="225" y1="240" x2="290" y2="240" stroke="url(#gold)" stroke-width="3.5" opacity="0.7" />
</svg>`;
}

async function generateIcon(size, outputName, isMaskable = false) {
  const svg = Buffer.from(createIconSVG(size, isMaskable));
  const outputPath = path.join(PUBLIC_DIR, outputName);
  
  await sharp(svg)
    .resize(size, size)
    .png()
    .toFile(outputPath);
  
  console.log(`✓ Generated ${outputName} (${size}×${size})`);
}

async function main() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  await generateIcon(192, 'android-chrome-192x192.png');
  await generateIcon(512, 'android-chrome-512x512.png');
  await generateIcon(180, 'apple-touch-icon.png');
  await generateIcon(32, 'favicon-32x32.png');
  await generateIcon(16, 'favicon-16x16.png');
  await generateIcon(512, 'maskable-icon.png', true);
  await generateIcon(192, 'shortcut-icon.png');

  // Copy favicon-32 to root favicon.ico
  const fav32 = path.join(PUBLIC_DIR, 'favicon-32x32.png');
  const favIco = path.join(PUBLIC_DIR, 'favicon.ico');
  fs.copyFileSync(fav32, favIco);
  console.log('✓ Copied favicon-32x32.png to favicon.ico');

  // Generate public/icon.svg
  const svgSource = createIconSVG(512);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'icon.svg'), svgSource);
  console.log('✓ Generated public/icon.svg');

  console.log('\n✓ All luxury monogram icons generated successfully in /public/');
}

main().catch(console.error);
