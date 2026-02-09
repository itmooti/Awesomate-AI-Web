#!/usr/bin/env python3
"""
NanoBanana Studio — Unified Image Generation Tool
====================================================
A command-line tool for generating images using Gemini 2.5 Flash Image.

Commands:
    generate   — Generate an image from a text prompt (+ optional reference images)
    mockup     — Place a screenshot onto a device in a lifestyle scene
    person     — Multi-step photo-realistic person generation
    vector     — Generate vector/illustration style images
    brand      — Research a brand's colours/fonts from their website URL
    templates  — List available prompt templates

Examples:
    python nanobana.py generate --prompt "A modern dashboard" --output work/test.png
    python nanobana.py generate --prompt "Place this on a laptop" --ref screenshot.png --output work/project.png
    python nanobana.py mockup --ref screenshot.png --device laptop --scene "home office" --output work/project.png
    python nanobana.py vector --subject "workflow diagram" --colors "#e9484d,#0f1128" --output illustration.png
    python nanobana.py brand --url https://example.com
    python nanobana.py templates --category mockup
"""

import argparse
import base64
import json
import os
import sys
import time
import urllib.request
import urllib.error

from prompt_templates import TEMPLATES, fill_template, list_templates
from brand_researcher import research_brand

# =============================================================================
# Configuration
# =============================================================================

API_KEY = "AIzaSyB22OafIJptL05zYXqpB-mxO7UzEy6wZz0"
MODEL = "gemini-2.5-flash-image"
ENDPOINT = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"
DEFAULT_OUTPUT_DIR = "src/assets/images"
DEFAULT_TIMEOUT = 180  # seconds
MAX_RETRIES = 2

SUPPORTED_ASPECTS = ["1:1", "3:2", "2:3", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9"]
SUPPORTED_SIZES = ["1K", "2K"]


# =============================================================================
# Core API
# =============================================================================

def generate_image(prompt, reference_images=None, aspect_ratio="1:1", image_size="1K", timeout=DEFAULT_TIMEOUT):
    """
    Generate an image using Gemini 2.5 Flash Image.

    Args:
        prompt: Text prompt describing the desired image
        reference_images: List of file paths to reference images (max 3)
        aspect_ratio: Aspect ratio (1:1, 16:9, 4:3, etc.)
        image_size: Size (1K or 2K)
        timeout: Request timeout in seconds

    Returns:
        (image_bytes, extension) tuple, or (None, None) on failure
    """
    if aspect_ratio not in SUPPORTED_ASPECTS:
        print(f"  Warning: '{aspect_ratio}' not in supported ratios {SUPPORTED_ASPECTS}. Using 1:1.")
        aspect_ratio = "1:1"

    if image_size not in SUPPORTED_SIZES:
        print(f"  Warning: '{image_size}' not in {SUPPORTED_SIZES}. Using 1K.")
        image_size = "1K"

    # Build content parts
    parts = []

    # Add reference images first (if any)
    if reference_images:
        for img_path in reference_images[:3]:  # Max 3 for Flash
            if not os.path.exists(img_path):
                print(f"  Warning: Reference image not found: {img_path}")
                continue

            with open(img_path, "rb") as f:
                img_bytes = f.read()
            img_b64 = base64.b64encode(img_bytes).decode("utf-8")

            # Detect MIME type
            mime = "image/png"
            if img_path.lower().endswith((".jpg", ".jpeg")):
                mime = "image/jpeg"
            elif img_path.lower().endswith(".webp"):
                mime = "image/webp"

            parts.append({"inlineData": {"mimeType": mime, "data": img_b64}})
            size_kb = len(img_bytes) / 1024
            print(f"  Loaded reference: {img_path} ({size_kb:.0f} KB)")

    # Add text prompt
    parts.append({"text": prompt})

    payload = {
        "contents": [{"parts": parts}],
        "generationConfig": {
            "responseModalities": ["TEXT", "IMAGE"],
            "imageConfig": {
                "aspectRatio": aspect_ratio,
            },
        },
    }

    url = f"{ENDPOINT}?key={API_KEY}"
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url, data=data, headers={"Content-Type": "application/json"}, method="POST"
    )

    for attempt in range(MAX_RETRIES + 1):
        try:
            if attempt > 0:
                wait = 5 * attempt
                print(f"  Retry {attempt}/{MAX_RETRIES} in {wait}s...")
                time.sleep(wait)

            print(f"  Sending request to Gemini API (timeout: {timeout}s)...")
            with urllib.request.urlopen(req, timeout=timeout) as response:
                result = json.loads(response.read().decode("utf-8"))

            candidates = result.get("candidates", [])
            if candidates:
                parts_out = candidates[0].get("content", {}).get("parts", [])
                for part in parts_out:
                    if "inlineData" in part:
                        mime = part["inlineData"].get("mimeType", "image/png")
                        ext = "png" if "png" in mime else "jpg"
                        image_data = base64.b64decode(part["inlineData"]["data"])
                        return image_data, ext
                    elif "text" in part:
                        print(f"  Model response: {part['text'][:150]}")

            print("  No image in response")
            debug_path = "/tmp/nanobana_debug.json"
            with open(debug_path, "w") as f:
                json.dump(result, f, indent=2)
            print(f"  Debug saved to {debug_path}")

            if attempt < MAX_RETRIES:
                continue
            return None, None

        except urllib.error.HTTPError as e:
            error_body = e.read().decode("utf-8") if e.fp else ""
            print(f"  HTTP {e.code}: {error_body[:300]}")
            if e.code == 429 and attempt < MAX_RETRIES:
                continue
            return None, None

        except Exception as e:
            print(f"  Error: {e}")
            if attempt < MAX_RETRIES:
                continue
            return None, None

    return None, None


def save_image(image_data, output_path, ext="png"):
    """Save image data to file, creating directories as needed."""
    # Resolve output path
    if not output_path.startswith("/"):
        # Relative to default output dir
        if "/" in output_path:
            output_path = os.path.join(DEFAULT_OUTPUT_DIR, output_path)
        else:
            output_path = os.path.join(DEFAULT_OUTPUT_DIR, "work", output_path)

    # Ensure extension
    if not output_path.endswith(f".{ext}"):
        base = os.path.splitext(output_path)[0]
        output_path = f"{base}.{ext}"

    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    with open(output_path, "wb") as f:
        f.write(image_data)

    size_kb = len(image_data) / 1024
    print(f"  Saved: {output_path} ({size_kb:.0f} KB)")
    return output_path


# =============================================================================
# Commands
# =============================================================================

def cmd_generate(args):
    """Generate an image from a prompt (+ optional references)."""
    prompt = args.prompt

    # If a template is specified, use it
    if args.template:
        # Parse template kwargs from remaining args
        kwargs = {}
        if args.template_args:
            for pair in args.template_args:
                if "=" in pair:
                    k, v = pair.split("=", 1)
                    kwargs[k] = v
        prompt = fill_template(args.template, **kwargs)
        print(f"  Using template: {args.template}")

    # Prepend brand brief if provided
    if args.brand_url:
        print(f"  Researching brand: {args.brand_url}")
        brand = research_brand(args.brand_url)
        if brand and brand.get("brand_brief"):
            prompt = brand["brand_brief"] + prompt
            print(f"  Brand brief prepended to prompt")

    refs = args.ref if args.ref else None
    print(f"\n  Prompt ({len(prompt)} chars): {prompt[:100]}...")
    print(f"  Aspect: {args.aspect}  Size: {args.size}")

    image_data, ext = generate_image(
        prompt, reference_images=refs,
        aspect_ratio=args.aspect, image_size=args.size,
        timeout=args.timeout,
    )

    if image_data:
        save_image(image_data, args.output, ext)
        print("  Done!")
        return True
    else:
        print("  FAILED: Could not generate image")
        return False


def cmd_mockup(args):
    """Place a screenshot on a device in a lifestyle scene."""
    if not args.ref:
        print("Error: --ref is required for mockup mode (the screenshot to place)")
        return False

    # Choose template based on device type
    device = args.device.lower()
    if device in ("laptop", "macbook", "desktop"):
        template_name = "laptop_desk"
    elif device in ("phone", "mobile", "iphone"):
        template_name = "phone_hand"
    elif device in ("both", "multi", "dual"):
        template_name = "multi_device"
    elif device == "flatlay":
        template_name = "flat_lay"
    else:
        template_name = "laptop_desk"

    # Build kwargs from args
    kwargs = {}
    if args.scene:
        if template_name == "laptop_desk":
            kwargs["scene_details"] = args.scene
        elif template_name in ("phone_hand", "multi_device"):
            kwargs["scene_description"] = args.scene

    if args.brand_colours:
        if template_name == "multi_device":
            kwargs["brand_colour"] = args.brand_colours

    prompt = fill_template(template_name, **kwargs)
    print(f"\n  Template: {template_name}")
    print(f"  Device: {device}")
    print(f"  Prompt ({len(prompt)} chars): {prompt[:100]}...")

    image_data, ext = generate_image(
        prompt, reference_images=args.ref,
        aspect_ratio=args.aspect, image_size=args.size,
        timeout=args.timeout,
    )

    if image_data:
        save_image(image_data, args.output, ext)
        print("  Done!")
        return True
    else:
        print("  FAILED")
        return False


def cmd_person(args):
    """Multi-step photo-realistic person generation."""
    print("\n=== NanoBanana Person Generator ===")
    print("This uses the multi-step refinement workflow:\n")

    if args.ref:
        # Step 1: Analyze reference, generate character description
        print("STEP 1: Analyzing reference image for character description...")
        analyze_prompt = (
            "Analyze this person's face in detail. Describe their approximate age, gender, "
            "skin details (wrinkles, pores, scars, freckles), hair details (colour, texture, style), "
            "eye colour, bone structure (bony, soft, angular), and any distinctive features. "
            "Output ONLY the filled-in master portrait prompt using this template:\n\n"
            "Extreme macro close-up portrait of [SUBJECT: age, gender] face, focusing on "
            "[KEY FACIAL DETAILS] around [FOCAL AREAS], against a plain [muted beige] backdrop. "
            "Hyper-detailed skin texture with [SKIN DETAILS], [HAIR DETAILS], and a strong, "
            "[BONE STRUCTURE] facial structure visible beneath natural skin. [EXPRESSION] expression.\n\n"
            "Natural soft side ambient light grazing skin to enhance texture. Neutral color science, "
            "no crushed blacks, no artificial smoothing. Shot on 100mm macro, ultra-shallow depth. "
            "Documentary photographic realism, shot in a realistic smartphone photography style at "
            "eye level, with organic sharpness, slight digital grain, and natural color rendering. "
            "No heavy retouching, no beauty filters, no artificial smoothing."
        )

        # Use Gemini to analyze (text-only response)
        parts = []
        for img_path in args.ref[:1]:
            with open(img_path, "rb") as f:
                img_bytes = f.read()
            img_b64 = base64.b64encode(img_bytes).decode("utf-8")
            mime = "image/png" if img_path.lower().endswith(".png") else "image/jpeg"
            parts.append({"inlineData": {"mimeType": mime, "data": img_b64}})
            print(f"  Loaded reference: {img_path}")

        parts.append({"text": analyze_prompt})

        payload = {
            "contents": [{"parts": parts}],
            "generationConfig": {"responseModalities": ["TEXT"]},
        }

        url = f"{ENDPOINT}?key={API_KEY}"
        data = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"}, method="POST")

        try:
            with urllib.request.urlopen(req, timeout=60) as response:
                result = json.loads(response.read().decode("utf-8"))
            candidates = result.get("candidates", [])
            if candidates:
                parts_out = candidates[0].get("content", {}).get("parts", [])
                character_prompt = ""
                for part in parts_out:
                    if "text" in part:
                        character_prompt = part["text"]
                if character_prompt:
                    print(f"\n  Character description generated ({len(character_prompt)} chars)")
                    print(f"  Preview: {character_prompt[:200]}...")

                    # Save character prompt for reuse
                    char_file = os.path.splitext(args.output)[0] + "_character.txt"
                    with open(char_file, "w") as f:
                        f.write(character_prompt)
                    print(f"  Character prompt saved: {char_file}")
                else:
                    print("  Warning: No character description generated, using default")
                    character_prompt = fill_template("portrait")
            else:
                print("  Warning: No response, using default portrait template")
                character_prompt = fill_template("portrait")

        except Exception as e:
            print(f"  Error analyzing reference: {e}")
            character_prompt = fill_template("portrait")

        # Step 2: Generate new image using description + reference
        print("\nSTEP 2: Generating realistic portrait from description + reference...")
        gen_prompt = character_prompt + "\n\nGenerate this as a high-quality photorealistic image. Use the reference photo as a guide for the person's appearance."

        image_data, ext = generate_image(
            gen_prompt, reference_images=args.ref,
            aspect_ratio=args.aspect, image_size=args.size,
            timeout=args.timeout,
        )

        if image_data:
            output_path = save_image(image_data, args.output, ext)
            print(f"\n  Step 2 complete! Image saved to: {output_path}")

            # Step 3 hint
            print("\n  === NEXT STEPS ===")
            print(f"  To refine further, run again with both images as references:")
            print(f"  python nanobana.py person --ref {args.ref[0]} {output_path} --output {args.output}")
            print(f"  Add angle/expression modifications to the character prompt in: {char_file}")
            print(f"  e.g., append: 'Now show from another angle' or 'with an ecstatic laugh'")
            return True
        else:
            print("  FAILED at Step 2")
            return False

    else:
        # No reference — use template with provided kwargs
        print("  No reference image provided. Generating from template...")
        kwargs = {}
        if args.template_args:
            for pair in args.template_args:
                if "=" in pair:
                    k, v = pair.split("=", 1)
                    kwargs[k] = v

        prompt = fill_template("portrait", **kwargs)
        prompt += "\n\nGenerate this as a high-quality photorealistic image."

        image_data, ext = generate_image(
            prompt, aspect_ratio=args.aspect, image_size=args.size,
            timeout=args.timeout,
        )

        if image_data:
            save_image(image_data, args.output, ext)
            return True
        else:
            print("  FAILED")
            return False


def cmd_vector(args):
    """Generate vector/illustration style images."""
    # Choose template
    style = args.style.lower() if args.style else "flat"

    template_map = {
        "flat": "flat_vector",
        "infographic": "infographic",
        "icons": "icon_set",
        "pattern": "decorative_pattern",
        "isometric": "isometric",
    }
    template_name = template_map.get(style, "flat_vector")

    kwargs = {}
    if args.subject:
        kwargs["subject"] = args.subject
    if args.colors:
        kwargs["colours"] = args.colors
    if args.title:
        kwargs["title"] = args.title

    prompt = fill_template(template_name, **kwargs)
    print(f"\n  Template: {template_name} (style: {style})")
    print(f"  Prompt ({len(prompt)} chars): {prompt[:100]}...")

    image_data, ext = generate_image(
        prompt, reference_images=args.ref if args.ref else None,
        aspect_ratio=args.aspect, image_size=args.size,
        timeout=args.timeout,
    )

    if image_data:
        save_image(image_data, args.output, ext)
        print("  Done!")
        return True
    else:
        print("  FAILED")
        return False


def cmd_brand(args):
    """Research a brand from its website URL."""
    result = research_brand(args.url)
    if result and args.save:
        brand_file = args.save
        with open(brand_file, "w") as f:
            json.dump(result, f, indent=2)
        print(f"\n  Brand data saved to: {brand_file}")
    return result is not None


def cmd_templates(args):
    """List available prompt templates."""
    templates = list_templates(args.category)
    if not templates:
        print(f"No templates found for category: {args.category}")
        return

    print("\n=== NanoBanana Prompt Templates ===\n")
    current_cat = None
    for name, info in sorted(templates.items(), key=lambda x: x[1]["category"]):
        if info["category"] != current_cat:
            current_cat = info["category"]
            print(f"\n  {current_cat.upper()}")
            print(f"  {'─' * 40}")
        placeholders = ", ".join(info["placeholders"][:4])
        if len(info["placeholders"]) > 4:
            placeholders += f" (+{len(info['placeholders']) - 4} more)"
        print(f"    {name:22s} aspect={str(info['aspect']):5s}  [{placeholders}]")

    print(f"\n  Total: {len(templates)} templates")
    print(f"\n  Usage: python nanobana.py generate --template <name> --template-args key=value ...")
    return True


# =============================================================================
# CLI
# =============================================================================

def main():
    parser = argparse.ArgumentParser(
        description="NanoBanana Studio — Image Generation Tool",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    subparsers = parser.add_subparsers(dest="command", help="Command to run")

    # --- generate ---
    gen = subparsers.add_parser("generate", help="Generate image from prompt")
    gen.add_argument("--prompt", "-p", default="", help="Text prompt")
    gen.add_argument("--template", "-t", help="Use a named template")
    gen.add_argument("--template-args", nargs="*", dest="template_args", help="Template args: key=value ...")
    gen.add_argument("--ref", "-r", nargs="*", help="Reference image paths (max 3)")
    gen.add_argument("--output", "-o", required=True, help="Output path (relative to src/assets/images/)")
    gen.add_argument("--aspect", "-a", default="1:1", choices=SUPPORTED_ASPECTS, help="Aspect ratio")
    gen.add_argument("--size", "-s", default="1K", choices=SUPPORTED_SIZES, help="Image size")
    gen.add_argument("--brand-url", help="Research brand from URL and prepend brief")
    gen.add_argument("--timeout", type=int, default=DEFAULT_TIMEOUT, help="Timeout seconds")

    # --- mockup ---
    mock = subparsers.add_parser("mockup", help="Place screenshot on device")
    mock.add_argument("--ref", "-r", nargs="*", required=True, help="Screenshot image path(s)")
    mock.add_argument("--device", "-d", default="laptop", choices=["laptop", "phone", "both", "flatlay"], help="Device type")
    mock.add_argument("--scene", help="Scene description override")
    mock.add_argument("--brand-colours", help="Brand colour(s) for screens")
    mock.add_argument("--output", "-o", required=True, help="Output path")
    mock.add_argument("--aspect", "-a", default="1:1", choices=SUPPORTED_ASPECTS)
    mock.add_argument("--size", "-s", default="1K", choices=SUPPORTED_SIZES)
    mock.add_argument("--timeout", type=int, default=DEFAULT_TIMEOUT)

    # --- person ---
    per = subparsers.add_parser("person", help="Photo-realistic person (multi-step)")
    per.add_argument("--ref", "-r", nargs="*", help="Reference photo(s)")
    per.add_argument("--template-args", nargs="*", dest="template_args", help="Portrait template overrides: key=value")
    per.add_argument("--output", "-o", required=True, help="Output path")
    per.add_argument("--aspect", "-a", default="1:1", choices=SUPPORTED_ASPECTS)
    per.add_argument("--size", "-s", default="1K", choices=SUPPORTED_SIZES)
    per.add_argument("--timeout", type=int, default=DEFAULT_TIMEOUT)

    # --- vector ---
    vec = subparsers.add_parser("vector", help="Vector/illustration image")
    vec.add_argument("--subject", help="What to illustrate")
    vec.add_argument("--style", default="flat", choices=["flat", "infographic", "icons", "pattern", "isometric"])
    vec.add_argument("--colors", help="Comma-separated hex colours")
    vec.add_argument("--title", help="Title text (for infographics)")
    vec.add_argument("--ref", "-r", nargs="*", help="Style reference image(s)")
    vec.add_argument("--output", "-o", required=True, help="Output path")
    vec.add_argument("--aspect", "-a", default="1:1", choices=SUPPORTED_ASPECTS)
    vec.add_argument("--size", "-s", default="1K", choices=SUPPORTED_SIZES)
    vec.add_argument("--timeout", type=int, default=DEFAULT_TIMEOUT)

    # --- brand ---
    brd = subparsers.add_parser("brand", help="Research brand from website URL")
    brd.add_argument("--url", "-u", required=True, help="Website URL to research")
    brd.add_argument("--save", help="Save brand data to JSON file")

    # --- templates ---
    tpl = subparsers.add_parser("templates", help="List available templates")
    tpl.add_argument("--category", "-c", choices=["people", "mockup", "vector", "brand", "utility"], help="Filter by category")

    args = parser.parse_args()

    if not args.command:
        parser.print_help()
        return

    commands = {
        "generate": cmd_generate,
        "mockup": cmd_mockup,
        "person": cmd_person,
        "vector": cmd_vector,
        "brand": cmd_brand,
        "templates": cmd_templates,
    }

    print(f"\n{'=' * 50}")
    print(f"  NanoBanana Studio — {args.command}")
    print(f"{'=' * 50}")

    success = commands[args.command](args)
    if not success:
        sys.exit(1)


if __name__ == "__main__":
    main()
