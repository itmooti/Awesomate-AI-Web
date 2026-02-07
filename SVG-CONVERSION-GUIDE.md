# SVG Logo Conversion Guide

You have 2 SVG logos that need to be converted to PNG and processed:

## Files to Convert
- `Client Logos/awardee.svg` (2KB - dark blue "AWARDEE" text logo)
- `Client Logos/seednorthernrivers.svg` (168KB - large file, may need optimization)

## Quick Online Conversion (Recommended)

### Option 1: CloudConvert (Best Quality)
1. Go to https://cloudconvert.com/svg-to-png
2. Upload both SVG files
3. Click "Convert"
4. Download the PNG files
5. Move them to `Client Logos/` folder (overwrite or rename to .png)
6. Re-run the Python script: `python3 process_logos.py`

### Option 2: Convertio
1. Go to https://convertio.co/svg-png/
2. Upload both SVG files
3. Convert and download
4. Move to `Client Logos/` folder
5. Re-run: `python3 process_logos.py`

### Option 3: Manual Browser Method
1. Open the SVG file in Chrome/Firefox
2. Right-click > "Save as..." > Change format to PNG
3. Save at ~300px height (will be resized by script)
4. Move to `Client Logos/` folder
5. Re-run: `python3 process_logos.py`

## Alternative: Install Cairo (Advanced)

If you want to automate SVG conversion in the future:

```bash
# Install Homebrew (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Cairo
brew install cairo

# Re-install cairosvg
pip3 install cairosvg

# Run the original Python script
# (You'd need to update it to use cairosvg again)
```

## After Conversion

Once you have the 2 SVG files converted to PNG and placed in `Client Logos/`:

```bash
python3 process_logos.py
```

This will process all 7 logos into uniform grayscale PNGs at 60px height with 40% opacity.

## Current Status

✅ **5 logos processed** (PNG/WEBP files):
- awc.png
- filtermax.png
- mcgqs.png
- phyx.png
- resicert.png

⏳ **2 logos pending** (SVG files):
- awardee.svg → needs conversion
- seednorthernrivers.svg → needs conversion

## Next Steps

1. Convert the 2 SVG files using one of the methods above
2. Run `python3 process_logos.py` again
3. All 7 logos will be ready in `src/assets/client-logos/`
4. Update `SocialProof.tsx` to use the new logo paths
