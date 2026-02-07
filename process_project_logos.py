#!/usr/bin/env python3
"""
Project Logo Processor for Awesomate.ai ProjectShowcase
Processes client logos for use on project cards (colored, optimized for display on gradients).
"""

import os
from pathlib import Path
from PIL import Image, ImageEnhance

# Configuration
INPUT_DIR = "Client Logos"
OUTPUT_DIR = "src/assets/project-logos"
TARGET_HEIGHT = 80  # pixels - slightly larger for project cards
BRIGHTNESS_BOOST = 1.2  # Make logos brighter for better visibility on dark gradients

def ensure_output_dir():
    """Create output directory if it doesn't exist."""
    Path(OUTPUT_DIR).mkdir(parents=True, exist_ok=True)
    print(f"✓ Output directory ready: {OUTPUT_DIR}")

def process_logo(input_path):
    """
    Process a logo for project cards:
    1. Load image
    2. Keep original colors (not grayscale)
    3. Slightly boost brightness for dark gradient backgrounds
    4. Resize to target height while maintaining aspect ratio
    5. Save as optimized PNG
    """
    print(f"\n📄 Processing: {input_path.name}")

    # Skip SVG files
    if input_path.suffix.lower() == '.svg':
        print(f"  ⏭️  Skipping SVG (convert manually)")
        return False

    # Load image
    try:
        img = Image.open(input_path)
    except Exception as e:
        print(f"  ❌ Could not open: {e}")
        return False

    # Convert to RGBA if not already
    if img.mode != 'RGBA':
        img = img.convert('RGBA')

    # Boost brightness slightly for better visibility on dark backgrounds
    enhancer = ImageEnhance.Brightness(img)
    img = enhancer.enhance(BRIGHTNESS_BOOST)

    # Resize to target height while maintaining aspect ratio
    aspect_ratio = img.width / img.height
    new_width = int(TARGET_HEIGHT * aspect_ratio)
    resized = img.resize((new_width, TARGET_HEIGHT), Image.Resampling.LANCZOS)

    # Generate output filename
    output_name = input_path.stem.lower().replace(' ', '-') + '.png'
    output_path = Path(OUTPUT_DIR) / output_name

    # Save optimized PNG
    resized.save(output_path, 'PNG', optimize=True)

    print(f"  ✓ Saved: {output_name} ({resized.width}x{resized.height}px)")
    return True

def main():
    print("🎨 Awesomate.ai Project Logo Processor")
    print("=" * 50)

    ensure_output_dir()

    # Get all logo files
    logo_files = list(Path(INPUT_DIR).glob('*.*'))
    logo_files = [f for f in logo_files if f.suffix.lower() in ['.png', '.webp', '.jpg', '.jpeg']]

    if not logo_files:
        print(f"\n❌ No logo files found in '{INPUT_DIR}'")
        return

    print(f"\n📂 Found {len(logo_files)} logo(s) to process")

    # Process each logo
    success_count = 0
    for logo_path in sorted(logo_files):
        if process_logo(logo_path):
            success_count += 1

    # Summary
    print("\n" + "=" * 50)
    print(f"✅ Processing complete: {success_count}/{len(logo_files)} logos processed")
    print(f"📁 Output location: {OUTPUT_DIR}")
    print("\n💡 These logos are optimized for project cards (colored, 80px height)")

if __name__ == "__main__":
    try:
        import PIL
    except ImportError:
        print("❌ Missing Pillow. Install with: pip install Pillow")
        exit(1)

    main()
