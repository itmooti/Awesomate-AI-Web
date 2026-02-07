"""
Image Optimizer for Awesomate.ai Web Images
Optimizes large images from AwesomateImages folder and places them in appropriate locations.
"""

import os
from pathlib import Path
from PIL import Image

# Configuration
INPUT_DIR = "AwesomateImages"
OUTPUT_DIR = "src/assets/images"

# Image specifications by type
IMAGE_SPECS = {
    # About page images
    "1. About Hero.jpeg": {
        "output": "about/about-hero.jpg",
        "max_width": 1200,
        "quality": 85,
        "description": "Team photo for About Hero section"
    },
    "2. About Alternative.jpeg": {
        "output": "about/about-alternative.jpg",
        "max_width": 1200,
        "quality": 85,
        "description": "Alternative about image"
    },
    "2. About Story.jpeg": {
        "output": "about/about-story.jpg",
        "max_width": 1000,
        "quality": 85,
        "description": "Story illustration for About Story section"
    },

    # Contact page image
    "3. Contact Info.jpg": {
        "output": "contact/contact-map.jpg",
        "max_width": 800,
        "quality": 85,
        "description": "Map illustration for Contact Info (already optimized)"
    },

    # Buddzee UI mockups (4a prefix)
    "4a. Campains.jpeg": {
        "output": "buddzee/use-case-campaigns.jpg",
        "max_width": 800,
        "quality": 85,
        "description": "Buddzee Campaigns UI mockup"
    },
    "4a. Client Dashboards.jpeg": {
        "output": "buddzee/use-case-dashboard.jpg",
        "max_width": 800,
        "quality": 85,
        "description": "Buddzee Client Dashboard UI mockup"
    },
    "4a. Custom App.jpeg": {
        "output": "buddzee/use-case-custom-app.jpg",
        "max_width": 800,
        "quality": 85,
        "description": "Buddzee Custom App UI mockup"
    },
    "4a. Sync Products.jpeg": {
        "output": "buddzee/use-case-sync.jpg",
        "max_width": 800,
        "quality": 85,
        "description": "Buddzee Sync Products UI mockup"
    },

    # Buddzee additional mockups (4c prefix)
    "4c. Automated Report.jpeg": {
        "output": "buddzee/use-case-report.jpg",
        "max_width": 800,
        "quality": 85,
        "description": "Buddzee Automated Report UI mockup"
    },
    "4c. Lookup Tool.jpeg": {
        "output": "buddzee/use-case-lookup.jpg",
        "max_width": 800,
        "quality": 85,
        "description": "Buddzee Lookup Tool UI mockup"
    },

    # Hero backgrounds (6 prefix)
    "6a. Home Hero Background.jpeg": {
        "output": "backgrounds/home-hero-bg.jpg",
        "max_width": 1920,
        "quality": 85,
        "description": "Background for Home Hero section"
    },
    "6c. Buddzee Dark Background.jpeg": {
        "output": "backgrounds/buddzee-hero-bg.jpg",
        "max_width": 1920,
        "quality": 85,
        "description": "Background for Buddzee Hero section"
    },
    "6d. Vibe Coding Background.jpeg": {
        "output": "backgrounds/vibe-hero-bg.jpg",
        "max_width": 1920,
        "quality": 85,
        "description": "Background for Vibe Coding Hero section"
    },
}

def ensure_output_dirs():
    """Create all necessary output directories."""
    dirs = set()
    for spec in IMAGE_SPECS.values():
        output_path = Path(OUTPUT_DIR) / spec["output"]
        dirs.add(output_path.parent)

    for dir_path in dirs:
        dir_path.mkdir(parents=True, exist_ok=True)
        print(f"✓ Directory ready: {dir_path}")

def get_file_size_mb(file_path):
    """Get file size in MB."""
    size_bytes = os.path.getsize(file_path)
    return size_bytes / (1024 * 1024)

def optimize_image(input_path, output_path, max_width, quality):
    """
    Optimize an image by resizing and compressing.

    Args:
        input_path: Path to input image
        output_path: Path to save optimized image
        max_width: Maximum width in pixels
        quality: JPEG quality (1-100)

    Returns:
        tuple: (original_size_mb, optimized_size_mb, reduction_percent)
    """
    # Get original size
    original_size = get_file_size_mb(input_path)

    # Open image
    img = Image.open(input_path)

    # Convert RGBA to RGB if necessary
    if img.mode == 'RGBA':
        # Create white background
        background = Image.new('RGB', img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[3])  # Use alpha channel as mask
        img = background
    elif img.mode != 'RGB':
        img = img.convert('RGB')

    # Resize if needed
    if img.width > max_width:
        ratio = max_width / img.width
        new_height = int(img.height * ratio)
        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)

    # Save optimized image
    img.save(output_path, 'JPEG', quality=quality, optimize=True)

    # Get optimized size
    optimized_size = get_file_size_mb(output_path)
    reduction = ((original_size - optimized_size) / original_size) * 100

    return original_size, optimized_size, reduction

def main():
    """Main optimization process."""
    print("\n🎨 Awesomate.ai Image Optimizer")
    print("=" * 60)

    # Create output directories
    print("\n📁 Setting up output directories...")
    ensure_output_dirs()

    # Process each image
    print(f"\n📸 Processing {len(IMAGE_SPECS)} images...")
    print("=" * 60)

    total_original = 0
    total_optimized = 0
    success_count = 0

    for filename, spec in IMAGE_SPECS.items():
        input_path = Path(INPUT_DIR) / filename
        output_path = Path(OUTPUT_DIR) / spec["output"]

        if not input_path.exists():
            print(f"\n❌ {filename}")
            print(f"   File not found: {input_path}")
            continue

        print(f"\n📄 {filename}")
        print(f"   {spec['description']}")

        try:
            original_size, optimized_size, reduction = optimize_image(
                input_path,
                output_path,
                spec["max_width"],
                spec["quality"]
            )

            total_original += original_size
            total_optimized += optimized_size
            success_count += 1

            print(f"   Original:  {original_size:.2f} MB")
            print(f"   Optimized: {optimized_size:.2f} MB")
            print(f"   Reduction: {reduction:.1f}%")
            print(f"   Max width: {spec['max_width']}px")
            print(f"   Output:    {output_path}")
            print(f"   ✓ Success!")

        except Exception as e:
            print(f"   ❌ Error: {str(e)}")

    # Summary
    print("\n" + "=" * 60)
    print("📊 SUMMARY")
    print("=" * 60)
    print(f"✅ Successfully optimized: {success_count}/{len(IMAGE_SPECS)} images")
    print(f"📦 Total original size:    {total_original:.2f} MB")
    print(f"📦 Total optimized size:   {total_optimized:.2f} MB")

    if total_original > 0:
        total_reduction = ((total_original - total_optimized) / total_original) * 100
        print(f"📉 Total size reduction:   {total_reduction:.1f}%")
        print(f"💾 Space saved:            {total_original - total_optimized:.2f} MB")

    print(f"\n📁 Output location: {OUTPUT_DIR}")

    print("\n💡 Next steps:")
    print("   1. Review optimized images in src/assets/images/")
    print("   2. Update component code to reference new image paths")
    print("   3. Upload images to hosting or commit to repository")
    print("   4. Test images in dev environment")

if __name__ == "__main__":
    try:
        from PIL import Image
    except ImportError:
        print("❌ Missing required dependency. Install with:")
        print("   pip install Pillow")
        exit(1)

    main()
