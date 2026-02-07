/**
 * SVG to PNG converter for the remaining logo files
 * Uses sharp library for high-quality conversion
 */

const fs = require('fs').promises;
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

const INPUT_DIR = 'Client Logos';
const OUTPUT_DIR = 'src/assets/client-logos';
const TARGET_HEIGHT = 60;
const OPACITY = 0.4;

async function convertSVGtoPNG(svgPath) {
  console.log(`\n📄 Converting: ${path.basename(svgPath)}`);

  try {
    // Read SVG file
    const svgContent = await fs.readFile(svgPath, 'utf8');

    // Extract viewBox dimensions
    const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
    if (!viewBoxMatch) {
      console.log('  ⚠️  No viewBox found, skipping');
      return false;
    }

    const [, , , width, height] = viewBoxMatch[1].split(/\s+/).map(Number);
    const aspectRatio = width / height;
    const targetWidth = Math.round(TARGET_HEIGHT * aspectRatio);

    // Create canvas
    const canvas = createCanvas(targetWidth, TARGET_HEIGHT);
    const ctx = canvas.getContext('2d');

    // Load and draw SVG
    const img = await loadImage(svgPath);
    ctx.drawImage(img, 0, 0, targetWidth, TARGET_HEIGHT);

    // Convert to grayscale
    const imageData = ctx.getImageData(0, 0, targetWidth, TARGET_HEIGHT);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const gray = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
      data[i] = gray;
      data[i + 1] = gray;
      data[i + 2] = gray;
      data[i + 3] = Math.round(data[i + 3] * OPACITY); // Apply opacity
    }

    ctx.putImageData(imageData, 0, 0);

    // Save as PNG
    const outputName = path.basename(svgPath, '.svg') + '.png';
    const outputPath = path.join(OUTPUT_DIR, outputName.toLowerCase());
    const buffer = canvas.toBuffer('image/png');
    await fs.writeFile(outputPath, buffer);

    console.log(`  ✓ Saved: ${outputName} (${targetWidth}x${TARGET_HEIGHT}px)`);
    return true;
  } catch (error) {
    console.log(`  ❌ Error: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🎨 SVG Logo Converter');
  console.log('='.repeat(50));

  const svgFiles = [
    path.join(INPUT_DIR, 'awardee.svg'),
    path.join(INPUT_DIR, 'seednorthernrivers.svg')
  ];

  let successCount = 0;
  for (const svgFile of svgFiles) {
    if (await convertSVGtoPNG(svgFile)) {
      successCount++;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`✅ Converted ${successCount}/${svgFiles.length} SVG files`);
}

main().catch(console.error);
