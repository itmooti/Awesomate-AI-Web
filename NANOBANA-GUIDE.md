# NanoBanana Image Generation Guide

A formalized system for generating high-quality images for website sections using Gemini 2.5 Flash Image ("Nano Banana").

## Quick Start

```bash
# Generate from a text prompt
python nanobana.py generate --prompt "A modern dashboard on a laptop" --output work/project.png

# Place a screenshot on a device
python nanobana.py mockup --ref screenshot.png --device laptop --output work/project.png

# Generate a vector illustration
python nanobana.py vector --subject "workflow steps" --colors "#e9484d,#0f1128" --output illustration.png

# Research a brand
python nanobana.py brand --url https://example.com

# List all templates
python nanobana.py templates
```

## Tool Structure

| File | Purpose |
|------|---------|
| `nanobana.py` | Main CLI tool — all commands |
| `prompt_templates.py` | 18 prompt templates organized by category |
| `brand_researcher.py` | Website scraper for brand colours/fonts |
| `NANOBANA-GUIDE.md` | This documentation |

## Workflows

### Workflow 1: Device Mockup from Screenshot

**When to use:** Showcasing an app/website you built for a client on the Work page.

**Steps:**
1. Get a screenshot of the real app (save to project root or provide a URL)
2. Run the mockup command with the screenshot as reference
3. The tool places it on a device in a lifestyle scene

```bash
# Laptop on desk
python nanobana.py mockup --ref screenshot.png --device laptop --scene "bright home office with plants" --output work/project-name.png

# Phone in hand
python nanobana.py mockup --ref mobile-screenshot.png --device phone --output work/project-name.png

# Both laptop and phone
python nanobana.py mockup --ref screenshot.png --device both --brand-colours "teal (#009B9B)" --output work/project-name.png
```

**Clipboard shortcut (macOS):** If the user pastes a screenshot in VS Code chat, save it via:
```bash
osascript -e 'try
    set imageFile to (POSIX path of "/path/to/reference.png")
    set theClipboard to the clipboard as «class PNGf»
    set fileRef to open for access imageFile with write permission
    write theClipboard to fileRef
    close access fileRef
end try'
```
Note: This only works when the image was copied to the system clipboard. VS Code chat pastes don't update the clipboard.

### Workflow 2: Photo-Realistic Person (Multi-Step Refinement)

**When to use:** Creating realistic people for hero sections, testimonials, team photos.

**The 4-step process:**

```bash
# Step 1-2: Analyze reference + generate new portrait
python nanobana.py person --ref original-photo.png --output person-v1.png
# → Generates character description + realistic portrait
# → Saves character prompt to person-v1_character.txt

# Step 3: Refine with both images as reference
python nanobana.py person --ref original-photo.png person-v1.png --output person-v2.png
# Edit person-v1_character.txt to add: "Now show from another angle"

# Step 4: Keep iterating
# Edit character prompt to add variations:
# "with her squinting to read something"
# "ecstatically laughing"
# "looking down at a phone"
```

**Without a reference photo (from scratch):**
```bash
python nanobana.py person --template-args "subject=a woman, approximately 35-40 years old" "expression=confident smile" --output person.png
```

### Workflow 3: Vector/Illustration

**When to use:** Icons, infographics, decorative elements, section illustrations.

```bash
# Flat vector illustration
python nanobana.py vector --subject "team collaboration" --colors "#e9484d,#0f1128,#ef9563" --output illustration.png

# Infographic
python nanobana.py vector --style infographic --subject "3-step onboarding process" --title "How It Works" --output infographic.png

# Icon set
python nanobana.py vector --style icons --subject "dashboard, analytics, settings, users, notifications, search" --output icons.png

# Isometric
python nanobana.py vector --style isometric --subject "a modern SaaS workspace" --output isometric.png

# Decorative pattern
python nanobana.py vector --style pattern --subject "abstract tech nodes and connections" --output pattern.png
```

### Workflow 4: Brand Research + Image Generation

**When to use:** Creating images for a client whose brand colours/fonts you don't know.

```bash
# Step 1: Research the brand
python nanobana.py brand --url https://clientwebsite.com --save brand-data.json

# Step 2: Use brand brief in generation
python nanobana.py generate --brand-url https://clientwebsite.com --prompt "A professional hero image for the homepage" --output work/client.png
```

The brand researcher extracts:
- Hex colours (ranked by frequency → primary, secondary, accent)
- Font families (Google Fonts + CSS declarations)
- CSS colour variables
- Logo image URLs
- A ready-to-use "brand brief" to prepend to prompts

## Prompt Engineering Best Practices

### DO:
- **Write narrative descriptions**, not keyword lists
- **Specify camera optics:** "Shot with 85mm lens at f/1.4" (creates natural proportions)
- **Add imperfections:** "natural pores, slight asymmetry, film grain" (avoids AI look)
- **Use hex codes:** "#e9484d for accent elements" (exact colour control)
- **Describe genuine moments:** "mid-laugh", "focused on screen" (not stiff poses)
- **Control lighting precisely:** "golden hour side-lighting from the left"

### DON'T:
- **No keyword spam:** "4k, trending, masterpiece, ultra-realistic" = unnecessary
- **No negative prompts:** Instead of "no artifacts", describe what you DO want
- **No vague colours:** "brand colours" fails; "#289A47 green accents" works
- **No listing attributes:** Write a scene, not a tag list

### Key Style Keywords

| Keyword | Effect |
|---------|--------|
| "Shot on 85mm f/1.4" | Natural portrait proportions, creamy bokeh |
| "subsurface scattering on skin" | Realistic skin glow, avoids plastic look |
| "slight digital grain" | Authentic camera feel |
| "shallow depth of field" | Professional photography focus |
| "Documentary photographic realism" | Candid, authentic aesthetic |
| "flat vector illustration" | Clean, modern web graphics |
| "isometric 3D illustration" | Trendy tech/SaaS aesthetic |

## Available Templates (18)

### People (5)
| Template | Use Case |
|----------|----------|
| `portrait` | Extreme macro close-up with skin detail |
| `lifestyle_person` | Person in context (working, studying) |
| `over_shoulder` | Over-the-shoulder device demonstration |
| `team_photo` | Group in professional setting |
| `character_anchor` | Consistency description for multi-image series |

### Device Mockups (4)
| Template | Use Case |
|----------|----------|
| `laptop_desk` | Screenshot on laptop at desk |
| `phone_hand` | App on phone held by person |
| `multi_device` | Both laptop and phone showing app |
| `flat_lay` | Overhead desk scene with device |

### Vector/Illustration (5)
| Template | Use Case |
|----------|----------|
| `flat_vector` | Clean minimalist illustrations |
| `infographic` | Data-driven visuals with charts |
| `icon_set` | Consistent icon grid |
| `decorative_pattern` | Tileable backgrounds |
| `isometric` | 3D isometric scenes |

### Brand/Product (3)
| Template | Use Case |
|----------|----------|
| `product_hero` | Product in lifestyle setting |
| `brand_lifestyle` | Brand-consistent marketing image |
| `social_media` | Platform-optimized social content |

### Utility (1)
| Template | Use Case |
|----------|----------|
| `brand_brief` | Colour/font prefix for any prompt |

## API Reference

- **Model:** `gemini-2.5-flash-image`
- **Max reference images:** 3 (for Flash)
- **Supported aspect ratios:** 1:1, 3:2, 2:3, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9
- **Image sizes:** 1K (default, up to 1024px), 2K (higher quality)
- **Cost:** ~$0.039 per image
- **Timeout:** 180s default (configurable with --timeout)
- **Retries:** 2 automatic retries on failure/rate-limit

## Output Conventions

Images are saved relative to `src/assets/images/`:
- Work project images: `src/assets/images/work/{slug}.png`
- About images: `src/assets/images/about/{name}.jpg`
- Buddzee images: `src/assets/images/buddzee/{name}.jpg`
- Backgrounds: `src/assets/images/backgrounds/{name}.jpg`
- Custom: any path relative to `src/assets/images/`

**Naming:** lowercase with hyphens (e.g., `seed-northern-rivers.png`)

## Asking the User for Input

When an image is needed for a website section, ask for:

1. **Image type:** photo / mockup / vector / illustration
2. **Reference images:** screenshots, brand assets, or "research from URL"
3. **Scene/setting:** where and how (desk, cafe, office, abstract background)
4. **People:** any specific poses, angles, or demographics needed
5. **Brand colours:** hex codes, or a URL to research from
6. **Aspect ratio:** square (1:1) for most web, 16:9 for hero banners, 9:16 for mobile
