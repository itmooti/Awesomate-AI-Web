"""
NanoBanana Prompt Template Library
===================================
Best-practice prompt templates for Gemini 2.5 Flash Image generation.
Organized by image type with {placeholders} for customization.

Key principles (from Google's own guidance):
- Write narrative scene descriptions, NOT keyword lists
- Use specific camera/lens references (85mm f/1.4)
- Include imperfections for realism (pores, grain, asymmetry)
- Specify hex codes for exact colours
- Keep text under 400 words per image
- No keyword spam (4k, trending, masterpiece = unnecessary)
"""

# =============================================================================
# A. PHOTO-REALISTIC PEOPLE
# =============================================================================

MASTER_PORTRAIT = """Extreme macro close-up portrait of {subject} face, focusing on {key_facial_details} around {focal_areas}, against a plain {background} backdrop. Hyper-detailed skin texture with {skin_details}, {hair_details}, and a strong, {bone_structure} facial structure visible beneath natural skin. {expression} expression.

Natural {light_direction} ambient light grazing skin to enhance texture. Neutral color science, no crushed blacks, no artificial smoothing. Shot on {lens}, ultra-shallow depth. Documentary photographic realism, shot in a realistic {camera_feel} style at {camera_level}, with organic sharpness, slight digital grain, and natural color rendering. No heavy retouching, no beauty filters, no artificial smoothing. The image should feel effortless, unbothered, and authentic, like a casual everyday portrait captured naturally in available light."""

MASTER_PORTRAIT_DEFAULTS = {
    "subject": "a woman, approximately 30-35 years old",
    "key_facial_details": "fine smile lines around eyes and mouth, natural pores, faint sun freckles",
    "focal_areas": "eyes, cheeks",
    "background": "muted beige",
    "skin_details": "fine lines, natural hydration, minor sun damage",
    "hair_details": "individual eyebrow hairs, fine vellus hair on cheeks",
    "bone_structure": "soft yet defined cheekbone",
    "expression": "Warm, natural smiling",
    "light_direction": "soft side",
    "lens": "100mm macro",
    "camera_feel": "smartphone photography",
    "camera_level": "eye level",
}

LIFESTYLE_PERSON = """A {age_gender} {activity}, captured in {lighting} in a {setting}. They have {appearance_details}. {pose_description}. Shot with an {lens} lens at {aperture}, creating {bokeh_description}. {clothing_description}. The lighting creates {light_effect} on their skin. Natural skin texture with visible pores, slight asymmetry in features. {mood} atmosphere.

Documentary photographic realism with organic sharpness, slight digital grain, and natural color rendering. No heavy retouching, no beauty filters. The image should feel authentic, like a candid everyday photograph captured naturally in available light."""

LIFESTYLE_PERSON_DEFAULTS = {
    "age_gender": "woman in her early 30s",
    "activity": "working at a laptop in a bright cafe",
    "lighting": "warm natural afternoon light streaming through large windows",
    "setting": "modern cafe with exposed brick and plants",
    "appearance_details": "natural freckles, warm brown eyes, hair loosely tied back",
    "pose_description": "She's looking at her screen with a slight focused smile, one hand resting on the trackpad",
    "lens": "85mm",
    "aperture": "f/1.8",
    "bokeh_description": "a creamy bokeh background with blurred cafe patrons",
    "clothing_description": "Wearing a casual knit sweater and minimal jewellery",
    "light_effect": "soft subsurface scattering with a subtle warm glow",
    "mood": "Productive and comfortable",
}

OVER_SHOULDER = """An over-the-shoulder view of a {person_description} at a {workspace}. The shot is from behind and slightly above, looking over their {shoulder} shoulder. {device_description}. The person is slightly out of focus in the foreground with their {visible_details} visible. {ambient_details}. Shot with a {lens} lens at {aperture} creating natural perspective with moderate depth of field.

{lighting_description}. Photorealistic style with warm colour grading. {additional_context}. The mood is {mood}. Square format, 1024x1024 pixels. Photo-realistic, not illustrated."""

OVER_SHOULDER_DEFAULTS = {
    "person_description": "person in casual clothing",
    "workspace": "clean modern desk",
    "shoulder": "right",
    "device_description": "Their laptop screen is clearly visible showing a web application interface. They are also holding a smartphone in their right hand showing a mobile app",
    "visible_details": "hair and shoulder",
    "ambient_details": "A coffee mug and notebook sit nearby on the desk",
    "lens": "35mm",
    "aperture": "f/4",
    "lighting_description": "Warm natural light from a window to the left, soft shadows",
    "additional_context": "Professional product photography feel",
    "mood": "focused and productive",
}

TEAM_PHOTO = """A {group_description} in a {setting}. They are {activity}. {composition_details}. Natural, candid energy — not stiffly posed. Shot with a {lens} lens at {aperture}. {lighting}. Genuine expressions with natural skin texture, visible pores, slight imperfections. {brand_elements}. The mood is {mood}.

Photorealistic documentary style, organic sharpness, slight grain. No artificial smoothing or beauty filters. Feels like a professional corporate photographer captured a real moment."""

TEAM_PHOTO_DEFAULTS = {
    "group_description": "diverse group of three professionals",
    "setting": "modern open-plan office with plants and natural light",
    "activity": "collaborating around a large monitor, mid-discussion",
    "composition_details": "One person standing, two seated, arranged naturally around a desk",
    "lens": "35mm",
    "aperture": "f/4",
    "lighting": "Large windows with soft diffused daylight, no harsh shadows",
    "brand_elements": "The workspace features accent colours of the brand",
    "mood": "collaborative and energetic",
}

CHARACTER_ANCHOR = """{name} is a {age} {gender} with {skin_tone}, {hair_description}, {eye_description}, {distinctive_feature_1}, {distinctive_feature_2}, and a {build} build. They are wearing {outfit_description}. Maintain exact consistency with the reference image(s) provided."""

CHARACTER_ANCHOR_DEFAULTS = {
    "name": "Character",
    "age": "mid-30s",
    "gender": "woman",
    "skin_tone": "warm medium skin tone",
    "hair_description": "shoulder-length dark brown wavy hair",
    "eye_description": "warm brown eyes with slight crow's feet",
    "distinctive_feature_1": "natural freckles across the nose and cheeks",
    "distinctive_feature_2": "a small dimple on the left cheek",
    "build": "medium",
    "outfit_description": "a casual navy blouse and minimal gold jewellery",
}

# =============================================================================
# B. DEVICE MOCKUPS
# =============================================================================

LAPTOP_DESK = """Take this exact screenshot and place it onto a modern {laptop_type} screen sitting on a {desk_description}. The laptop is angled {angle} toward the viewer. Keep the screenshot EXACTLY as it is — do not modify, redraw, or reimagine any part of the UI. The actual app interface must be clearly visible and readable on the laptop screen.

{scene_details}. {lighting}. {background_description}. Professional product photography style. {format}."""

LAPTOP_DESK_DEFAULTS = {
    "laptop_type": "MacBook Pro",
    "desk_description": "clean minimalist wooden desk",
    "angle": "slightly",
    "scene_details": "A ceramic coffee cup and small succulent plant are visible nearby, slightly out of focus",
    "lighting": "Soft natural light from a large window to the left creates gentle shadows",
    "background_description": "Bright, airy room with a blurred bookshelf in the background",
    "format": "Square format, 1024x1024 pixels",
}

PHONE_HAND = """Take this exact app screenshot and place it on a modern {phone_type} held naturally in a person's hand. Keep the app interface EXACTLY as it is — do not modify any UI elements. The phone screen should be clearly visible and readable.

The person is {person_context}. {scene_description}. {lighting}. Shot with {lens} lens, shallow depth of field focusing on the phone screen. Professional lifestyle photography style. {format}."""

PHONE_HAND_DEFAULTS = {
    "phone_type": "iPhone",
    "person_context": "sitting at a cafe table, casually browsing the app",
    "scene_description": "Warm cafe environment with blurred background showing other patrons and warm lighting",
    "lighting": "Soft ambient interior lighting with warm colour temperature",
    "lens": "50mm",
    "format": "Square format, 1024x1024 pixels",
}

MULTI_DEVICE = """A {person_description} at a {workspace}, using both a laptop and a smartphone. The laptop screen shows {desktop_content} and the smartphone shows {mobile_content}. Both screens should show interfaces with {brand_colour} as the primary accent colour.

The shot is from {angle}, with {depth_of_field}. {lighting}. {ambient_details}. The setting is {setting_description}. Professional lifestyle photography feel. {format}. Photo-realistic, not illustrated."""

MULTI_DEVICE_DEFAULTS = {
    "person_description": "person viewed from behind/over their shoulder",
    "workspace": "clean modern desk",
    "desktop_content": "a web application dashboard",
    "mobile_content": "the same app's mobile interface",
    "brand_colour": "teal (#009B9B)",
    "angle": "behind and slightly above, over the right shoulder",
    "depth_of_field": "shallow depth of field — both screens in focus, person slightly soft",
    "lighting": "Warm natural morning light from a window",
    "ambient_details": "A coffee mug and notebook nearby",
    "setting_description": "a bright, comfortable home office with warm natural light",
    "format": "Square format, 1024x1024 pixels",
}

FLAT_LAY = """A lifestyle flat-lay photograph from directly above of a workspace on a {surface}. A {device} displaying {screen_content} is centered in the composition. Surrounding items: {items}. {lighting}. {colour_grading}. Clean, editorial composition with intentional negative space. Professional product photography. {format}."""

FLAT_LAY_DEFAULTS = {
    "surface": "light oak desk",
    "device": "MacBook Pro with screen visible",
    "screen_content": "a modern web application interface",
    "items": "a ceramic latte cup, a leather notebook with a fountain pen, wireless earbuds, and a small plant",
    "lighting": "Natural light streaming diagonally across the scene creating soft shadows",
    "colour_grading": "Warm, muted tones with high contrast",
    "format": "Square format, 1024x1024 pixels",
}

# =============================================================================
# C. VECTOR / ILLUSTRATION
# =============================================================================

FLAT_VECTOR = """A flat vector illustration of {subject} in a clean minimalist style. Colour palette: {colours}. Smooth lines with no gradients or heavy textures. Simple geometric shapes and solid block colours. {background} background. {style_notes}. Suitable for modern web design. {format}."""

FLAT_VECTOR_DEFAULTS = {
    "subject": "a person working at a computer",
    "colours": "#e9484d (red), #0f1128 (navy), #ef9563 (orange), #1e63e9 (blue) on white",
    "background": "White or transparent",
    "style_notes": "Modern corporate illustration style with slightly elongated proportions",
    "format": "Square format, 1024x1024 pixels",
}

INFOGRAPHIC = """A professional infographic in {orientation} orientation about {topic}. Use a {style} visual style with a colour palette of {colours} on a {background_colour} background. Include a bold title "{title}" at the top. Layout: {layout_type}. Include {sections} sections with concise text labels and matching icons. Clean sans-serif typography with clear visual hierarchy. {additional_notes}. {format}."""

INFOGRAPHIC_DEFAULTS = {
    "orientation": "portrait (9:16)",
    "topic": "a step-by-step process",
    "style": "modern flat design",
    "colours": "#e9484d, #0f1128, #ef9563, #1e63e9",
    "background_colour": "white (#ffffff)",
    "title": "How It Works",
    "layout_type": "step-by-step vertical flow with numbered circles",
    "sections": "4-5",
    "additional_notes": "Each section has an icon, short heading, and one-line description",
    "format": "Aspect ratio 9:16",
}

ICON_SET = """A set of {count} flat minimalistic icons on a {background} background, arranged in a {arrangement}. Each icon represents: {items}. Vector style with colours {colours}. Consistent {line_weight} line weight, rounded corners, uniform padding. Each icon within a {container} container. Suitable for web/app use. {format}."""

ICON_SET_DEFAULTS = {
    "count": "6",
    "background": "white",
    "arrangement": "2x3 grid with equal spacing",
    "items": "dashboard, settings, users, analytics, notifications, search",
    "colours": "#e9484d (primary) with #0f1128 (dark accents)",
    "line_weight": "2px",
    "container": "rounded square",
    "format": "Square format, 1024x1024 pixels",
}

DECORATIVE_PATTERN = """A seamless decorative pattern of {elements} in a {style} style. Colour palette: {colours}. {density} density pattern. {additional_notes}. Suitable for use as a website background or section accent. Tileable. {format}."""

DECORATIVE_PATTERN_DEFAULTS = {
    "elements": "abstract geometric shapes and subtle dots",
    "style": "modern minimalist",
    "colours": "#e9484d at 10% opacity, #0f1128 at 5% opacity on white",
    "density": "Sparse, with generous whitespace",
    "additional_notes": "Subtle and non-distracting, works as a background texture",
    "format": "Square format, 1024x1024 pixels",
}

ISOMETRIC = """An isometric 3D illustration of {subject} in a {style} style. Colour palette: {colours}. {detail_level} detail with clean edges and consistent lighting from the upper left. {scene_description}. No perspective distortion — strict isometric projection. {format}."""

ISOMETRIC_DEFAULTS = {
    "subject": "a modern office workspace",
    "style": "clean, slightly rounded corporate",
    "colours": "#e9484d, #0f1128, #ef9563, #ffffff",
    "detail_level": "Medium",
    "scene_description": "Shows a desk with monitor, chair, plants, and decorative elements",
    "format": "Square format, 1024x1024 pixels",
}

# =============================================================================
# D. BRAND / PRODUCT
# =============================================================================

PRODUCT_HERO = """Take this exact product image and place it into a {scene_type} setting. Keep the product/branding EXACTLY as it is — do not modify, redraw, or reimagine any part of the branding, logos, or UI elements. {scene_description}. {lighting}. {background}. Professional product photography style. {format}."""

PRODUCT_HERO_DEFAULTS = {
    "scene_type": "professional lifestyle",
    "scene_description": "The product is shown in use in a realistic environment appropriate to its context",
    "lighting": "Soft natural lighting with gentle shadows, warm colour temperature",
    "background": "Blurred background with bokeh, creating depth",
    "format": "Square format, 1024x1024 pixels",
}

BRAND_LIFESTYLE = """A professional lifestyle photograph that embodies the brand identity of {brand_name}. {scene_description}. The colour palette prominently features {brand_colours}. {brand_elements}. {lighting}. {mood} mood. Photorealistic with natural colour rendering. {format}."""

BRAND_LIFESTYLE_DEFAULTS = {
    "brand_name": "the company",
    "scene_description": "A modern, aspirational scene showing the brand's product or service in use",
    "brand_colours": "the brand's primary and secondary colours",
    "brand_elements": "Brand colours appear naturally in the environment (decor, clothing accents, screen content)",
    "lighting": "Bright, natural lighting creating an optimistic atmosphere",
    "mood": "Professional, approachable, and aspirational",
    "format": "Square format, 1024x1024 pixels",
}

SOCIAL_MEDIA = """A {platform}-optimised image for {brand_name}. {content_description}. Brand colours: {brand_colours}. {style} style. {text_overlay}. Eye-catching composition with {focal_point} as the focal point. {mood} mood. {format}."""

SOCIAL_MEDIA_DEFAULTS = {
    "platform": "Instagram",
    "brand_name": "the company",
    "content_description": "Showcasing the brand's key value proposition",
    "brand_colours": "#e9484d, #0f1128",
    "style": "Clean, modern",
    "text_overlay": "Minimal text, let the image speak",
    "focal_point": "the product/service in action",
    "mood": "Energetic and professional",
    "format": "Square format, 1024x1024 pixels",
}

# =============================================================================
# E. BRAND BRIEF PREFIX
# =============================================================================

BRAND_BRIEF = """BRAND STYLE GUIDE:
- Brand name: {brand_name}
- Primary colour: {primary_colour}
- Secondary colour: {secondary_colour}
- Accent colour: {accent_colour}
- Background: {background_colour}
- Typography style: {typography_style}
- Overall aesthetic: {aesthetic}

Generate an image following the above brand guidelines: """

BRAND_BRIEF_DEFAULTS = {
    "brand_name": "Company",
    "primary_colour": "#e9484d (warm red)",
    "secondary_colour": "#0f1128 (deep navy)",
    "accent_colour": "#ef9563 (warm orange)",
    "background_colour": "#ffffff or #f8f9fb",
    "typography_style": "clean, modern sans-serif",
    "aesthetic": "professional, approachable, tech-forward",
}

# =============================================================================
# TEMPLATE REGISTRY — for programmatic access
# =============================================================================

TEMPLATES = {
    # Photo-realistic people
    "portrait": {"template": MASTER_PORTRAIT, "defaults": MASTER_PORTRAIT_DEFAULTS, "aspect": "1:1", "size": "1K", "category": "people"},
    "lifestyle_person": {"template": LIFESTYLE_PERSON, "defaults": LIFESTYLE_PERSON_DEFAULTS, "aspect": "1:1", "size": "1K", "category": "people"},
    "over_shoulder": {"template": OVER_SHOULDER, "defaults": OVER_SHOULDER_DEFAULTS, "aspect": "1:1", "size": "1K", "category": "people"},
    "team_photo": {"template": TEAM_PHOTO, "defaults": TEAM_PHOTO_DEFAULTS, "aspect": "16:9", "size": "1K", "category": "people"},
    "character_anchor": {"template": CHARACTER_ANCHOR, "defaults": CHARACTER_ANCHOR_DEFAULTS, "aspect": "1:1", "size": "1K", "category": "people"},
    # Device mockups
    "laptop_desk": {"template": LAPTOP_DESK, "defaults": LAPTOP_DESK_DEFAULTS, "aspect": "1:1", "size": "1K", "category": "mockup"},
    "phone_hand": {"template": PHONE_HAND, "defaults": PHONE_HAND_DEFAULTS, "aspect": "1:1", "size": "1K", "category": "mockup"},
    "multi_device": {"template": MULTI_DEVICE, "defaults": MULTI_DEVICE_DEFAULTS, "aspect": "1:1", "size": "1K", "category": "mockup"},
    "flat_lay": {"template": FLAT_LAY, "defaults": FLAT_LAY_DEFAULTS, "aspect": "1:1", "size": "1K", "category": "mockup"},
    # Vector / illustration
    "flat_vector": {"template": FLAT_VECTOR, "defaults": FLAT_VECTOR_DEFAULTS, "aspect": "1:1", "size": "1K", "category": "vector"},
    "infographic": {"template": INFOGRAPHIC, "defaults": INFOGRAPHIC_DEFAULTS, "aspect": "9:16", "size": "1K", "category": "vector"},
    "icon_set": {"template": ICON_SET, "defaults": ICON_SET_DEFAULTS, "aspect": "1:1", "size": "1K", "category": "vector"},
    "decorative_pattern": {"template": DECORATIVE_PATTERN, "defaults": DECORATIVE_PATTERN_DEFAULTS, "aspect": "1:1", "size": "1K", "category": "vector"},
    "isometric": {"template": ISOMETRIC, "defaults": ISOMETRIC_DEFAULTS, "aspect": "1:1", "size": "1K", "category": "vector"},
    # Brand / product
    "product_hero": {"template": PRODUCT_HERO, "defaults": PRODUCT_HERO_DEFAULTS, "aspect": "1:1", "size": "1K", "category": "brand"},
    "brand_lifestyle": {"template": BRAND_LIFESTYLE, "defaults": BRAND_LIFESTYLE_DEFAULTS, "aspect": "1:1", "size": "1K", "category": "brand"},
    "social_media": {"template": SOCIAL_MEDIA, "defaults": SOCIAL_MEDIA_DEFAULTS, "aspect": "1:1", "size": "1K", "category": "brand"},
    # Brand brief prefix
    "brand_brief": {"template": BRAND_BRIEF, "defaults": BRAND_BRIEF_DEFAULTS, "aspect": None, "size": None, "category": "utility"},
}


def fill_template(template_name, **kwargs):
    """Fill a template with provided values, falling back to defaults."""
    entry = TEMPLATES.get(template_name)
    if not entry:
        raise ValueError(f"Unknown template: {template_name}. Available: {list(TEMPLATES.keys())}")

    values = dict(entry["defaults"])
    values.update(kwargs)

    try:
        return entry["template"].format(**values)
    except KeyError as e:
        raise ValueError(f"Missing placeholder {e} for template '{template_name}'. Available: {list(entry['defaults'].keys())}")


def list_templates(category=None):
    """List available templates, optionally filtered by category."""
    result = {}
    for name, entry in TEMPLATES.items():
        if category is None or entry["category"] == category:
            result[name] = {
                "category": entry["category"],
                "aspect": entry["aspect"],
                "placeholders": list(entry["defaults"].keys()),
            }
    return result


if __name__ == "__main__":
    print("=== NanoBanana Prompt Template Library ===\n")
    for cat in ["people", "mockup", "vector", "brand", "utility"]:
        templates = list_templates(cat)
        if templates:
            print(f"\n{'=' * 40}")
            print(f"  {cat.upper()}")
            print(f"{'=' * 40}")
            for name, info in templates.items():
                placeholders = ", ".join(info["placeholders"][:4])
                if len(info["placeholders"]) > 4:
                    placeholders += f" (+{len(info['placeholders']) - 4} more)"
                print(f"  {name:20s} aspect={info['aspect']:5s}  [{placeholders}]")
