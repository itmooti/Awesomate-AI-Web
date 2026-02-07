#!/usr/bin/env python3
"""
Logo Processor for Awesomate.ai Social Proof Section
Converts all client logos to uniform grayscale PNGs with consistent styling.
"""

import os
from pathlib import Path
from PIL import Image, ImageOps, ImageEnhance
from io import BytesIO

# Configuration
INPUT_DIR = "Client Logos"
OUTPUT_DIR = "src/assets/client-logos"
TARGET_HEIGHT = 60  # pixels - standard height for all logos
OPACITY = 0.4  # 40% opacity for subtle, professional look
BACKGROUND = (255, 255, 255, 0)  # Transparent

def ensure_output_dir():
    """Create output directory if it doesn't exist."""
    Path(OUTPUT_DIR).mkdir(parents=True, exist_ok=True)
    print(f"✓ Output directory ready: {OUTPUT_DIR}")

def process_logo(input_path):
    """
    Process a single logo:
    1. Load image
    2. Convert to grayscale
    3. Apply opacity
    4. Resize to target height while maintaining aspect ratio
    5. Save as optimized PNG
    """
    print(f"\n📄 Processing: {input_path.name}")

    # Skip SVG files (require manual conversion)
    if input_path.suffix.lower() == '.svg':
        print(f"  ⏭️  Skipping SVG (convert manually or use online tool)")
        return False

    # Load raster image
    try:
        img = Image.open(input_path)
    except Exception as e:
        print(f"  ❌ Could not open: {e}")
        return False

    # Convert to RGBA if not already
    if img.mode != 'RGBA':
        img = img.convert('RGBA')

    # Convert to grayscale while preserving alpha channel
    # Split channels
    r, g, b, a = img.split()

    # Convert RGB to grayscale
    gray_img = Image.merge('RGB', (r, g, b)).convert('L')

    # Create new RGBA image with grayscale + original alpha
    gray_rgba = Image.merge('RGBA', (gray_img, gray_img, gray_img, a))

    # Apply opacity to entire image
    alpha = gray_rgba.split()[3]
    alpha = ImageEnhance.Brightness(alpha).enhance(OPACITY)
    gray_rgba.putalpha(alpha)

    # Resize to target height while maintaining aspect ratio
    aspect_ratio = img.width / img.height
    new_width = int(TARGET_HEIGHT * aspect_ratio)
    resized = gray_rgba.resize((new_width, TARGET_HEIGHT), Image.Resampling.LANCZOS)

    # Generate output filename (normalize to lowercase, replace spaces)
    output_name = input_path.stem.lower().replace(' ', '-') + '.png'
    output_path = Path(OUTPUT_DIR) / output_name

    # Save optimized PNG
    resized.save(output_path, 'PNG', optimize=True)

    print(f"  ✓ Saved: {output_name} ({resized.width}x{resized.height}px)")
    return True

def main():
    print("🎨 Awesomate.ai Logo Processor")
    print("=" * 50)

    # Ensure output directory exists
    ensure_output_dir()

    # Get all logo files
    logo_files = list(Path(INPUT_DIR).glob('*.*'))
    logo_files = [f for f in logo_files if f.suffix.lower() in ['.svg', '.png', '.webp', '.jpg', '.jpeg']]

    if not logo_files:
        print(f"\n❌ No logo files found in '{INPUT_DIR}'")
        return

    # Separate SVG and raster files
    svg_files = [f for f in logo_files if f.suffix.lower() == '.svg']
    raster_files = [f for f in logo_files if f.suffix.lower() in ['.png', '.webp', '.jpg', '.jpeg']]

    print(f"\n📂 Found {len(logo_files)} logo(s):")
    print(f"   - {len(raster_files)} raster image(s) (PNG/WEBP) - will process")
    print(f"   - {len(svg_files)} SVG file(s) - skipping (manual conversion needed)")

    # Process each raster logo
    success_count = 0
    for logo_path in sorted(raster_files):
        if process_logo(logo_path):
            success_count += 1

    # Summary
    print("\n" + "=" * 50)
    print(f"✅ Processing complete: {success_count}/{len(raster_files)} raster logos processed")
    print(f"📁 Output location: {OUTPUT_DIR}")

    if svg_files:
        print(f"\n📝 Note: {len(svg_files)} SVG file(s) need manual conversion:")
        for svg in svg_files:
            print(f"   - {svg.name}")
        print("\n   Options for SVG conversion:")
        print("   1. Use CloudConvert: https://cloudconvert.com/svg-to-png")
        print("   2. Open in browser > Right-click > Save as PNG")
        print("   3. Install Cairo: brew install cairo (then re-run this script)")

    print("\n💡 Next steps:")
    print("   1. Review processed logos in the output directory")
    print("   2. Manually convert SVGs to PNG (if needed)")
    print("   3. Update SocialProof.tsx to reference these new images")
    print("   4. Commit the processed logos to your repository")

if __name__ == "__main__":
    # Check dependencies
    try:
        import PIL
    except ImportError as e:
        print("❌ Missing required dependencies. Install with:")
        print("   pip install Pillow")
        exit(1)

    main()
