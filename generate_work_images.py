#!/usr/bin/env python3
"""Generate project showcase images using Gemini Nano Banana (image generation)."""

import json
import base64
import urllib.request
import urllib.error
import os
import sys
import time

API_KEY = "AIzaSyB22OafIJptL05zYXqpB-mxO7UzEy6wZz0"
OUTPUT_DIR = "src/assets/images/work"

PROJECTS = [
    {
        "slug": "seed-northern-rivers",
        "name": "SEED Northern Rivers",
        "colors": "green (#289A47) and blue (#50A5DF)",
        "tags": "Website, CRM, Vibe-Coded App",
        "prompt": (
            "A modern, clean digital illustration of an environmental community platform interface. "
            "Show a dashboard with a map view of Northern Rivers Australia, community engagement metrics, "
            "and environmental project cards. Use a nature-inspired colour palette with green (#289A47) "
            "and blue (#50A5DF) as the dominant colours. Clean white background, rounded cards, "
            "modern sans-serif typography. Professional SaaS-style UI mockup. No text labels. "
            "Landscape orientation, 540x400 pixels."
        ),
    },
    {
        "slug": "phyx",
        "name": "PHYX",
        "colors": "teal (#27BAA6) and dark teal (#176A7A)",
        "tags": "Website, Magento, CRM, Automation, Mobile App",
        "prompt": (
            "A sleek mobile health and wellness app interface mockup displayed on a smartphone screen. "
            "Show a fitness/physiotherapy booking and tracking app with appointment cards, progress charts, "
            "and a clean navigation bar. Use teal (#27BAA6) and dark teal (#176A7A) as accent colours "
            "on a clean white background. Modern, minimal UI design with rounded corners and soft shadows. "
            "Professional product mockup style. No readable text. "
            "Landscape orientation showing the phone at an angle, 540x400 pixels."
        ),
    },
    {
        "slug": "awardee",
        "name": "Awardee",
        "colors": "blue (#0079FE) and dark navy (#212b45)",
        "tags": "Platform Build, SaaS, Startup to Live",
        "prompt": (
            "A professional SaaS platform dashboard mockup for an awards and recognition system. "
            "Show a clean interface with award nomination cards, QR code scanning feature, "
            "leaderboard rankings, and achievement badges. Use bright blue (#0079FE) as the primary "
            "accent colour with dark navy (#212b45) for headers. White background, modern card-based layout, "
            "subtle shadows, and rounded corners. Professional tech startup aesthetic. No readable text. "
            "Landscape orientation, 540x400 pixels."
        ),
    },
    {
        "slug": "australian-writers-centre",
        "name": "Australian Writers' Centre",
        "colors": "red (#E31B23) and coral (#FF6B6B)",
        "tags": "CRM, LMS Integration",
        "prompt": (
            "A warm, inviting digital workspace showing a creative learning management system interface. "
            "Show a writer's dashboard with course progress bars, upcoming workshop cards, "
            "and a content library view. Use red (#E31B23) and coral (#FF6B6B) as accent colours "
            "with warm cream and white backgrounds. Clean, editorial design style with generous whitespace. "
            "Feels like a premium creative education platform. No readable text. "
            "Landscape orientation, 540x400 pixels."
        ),
    },
    {
        "slug": "mcg",
        "name": "MCG Quantity Surveyors",
        "colors": "dark (#1a1a1a) with red accent (#E9484D)",
        "tags": "Business Automation, BI Dashboards, Apps, API Service",
        "prompt": (
            "A sophisticated business intelligence dashboard with dark theme showing construction and "
            "quantity surveying analytics. Display multiple data visualisation widgets: bar charts, "
            "pie charts, project timeline gantt chart, and KPI cards. Use a dark background (#1a1a1a) "
            "with red (#E9484D) as the primary accent colour for charts and highlights. "
            "Professional, data-rich but clean layout. Modern BI tool aesthetic. No readable text. "
            "Landscape orientation, 540x400 pixels."
        ),
    },
    {
        "slug": "real-estate-gym",
        "name": "Real Estate Gym",
        "colors": "dark (#1d1d20) with neon green (#19ffb4)",
        "tags": "Flutter App, CRM, Automation Platform",
        "prompt": (
            "A modern mobile app interface mockup for a real estate coaching and training platform. "
            "Show a Flutter-style app with agent performance metrics, training modules, "
            "goal tracking progress bars, and a coaching session scheduler. Use a dark theme (#1d1d20) "
            "with vibrant neon green (#19ffb4) accents for progress indicators and CTAs. "
            "Sleek, modern fitness-app-inspired design. No readable text. "
            "Landscape orientation showing the app on a phone with dark background, 540x400 pixels."
        ),
    },
    {
        "slug": "filtermax",
        "name": "FilterMax",
        "colors": "dark (#232323) with orange (#fd5b2a)",
        "tags": "Platform Build, Custom Application",
        "prompt": (
            "A clean industrial e-commerce and ordering platform interface mockup. "
            "Show a product catalogue view with filter product cards, an ordering workflow, "
            "and delivery tracking dashboard. Use dark (#232323) header with vibrant orange (#fd5b2a) "
            "as the accent colour for buttons and highlights. White content area with clean product grid. "
            "Professional B2B platform aesthetic. No readable text. "
            "Landscape orientation, 540x400 pixels."
        ),
    },
    {
        "slug": "resicert",
        "name": "ResiCert",
        "colors": "green (#4CAF50) and dark green (#2E7D32)",
        "tags": "CRM, Automation, Franchise Scale",
        "prompt": (
            "A professional property inspection management platform dashboard. "
            "Show a clean interface with inspection scheduling calendar, property cards with status badges, "
            "franchise location map, and automated report generation queue. Use green (#4CAF50) and "
            "dark green (#2E7D32) as accent colours on white background. Clean, trustworthy, "
            "corporate design. Feels like a scalable franchise management tool. No readable text. "
            "Landscape orientation, 540x400 pixels."
        ),
    },
    {
        "slug": "the-happy-clinic",
        "name": "The Happy Clinic",
        "colors": "cyan (#00BCD4) and dark cyan (#0097A7)",
        "tags": "Customer Portal, AI Chatbots, Automation, E-commerce",
        "prompt": (
            "A friendly, modern wellness clinic customer portal interface. "
            "Show a clean dashboard with appointment booking, an AI chatbot conversation widget, "
            "product shop cards, and patient wellness tracking. Use cyan (#00BCD4) and dark cyan (#0097A7) "
            "as accent colours with soft white and light grey backgrounds. Warm, approachable healthcare "
            "design with rounded elements and soft gradients. No readable text. "
            "Landscape orientation, 540x400 pixels."
        ),
    },
]


def try_models(project):
    """Try multiple model endpoints for image generation."""
    # Gemini models with native image generation
    gemini_models = [
        "gemini-2.5-flash-image",
        "gemini-2.0-flash-exp-image-generation",
    ]
    # Imagen models (different API format)
    imagen_models = [
        "imagen-4.0-fast-generate-001",
    ]

    # Try Gemini models first
    for model in gemini_models:
        print(f"  Trying model: {model}...")
        endpoint = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={API_KEY}"
        payload = {
            "contents": [
                {
                    "parts": [
                        {
                            "text": project["prompt"]
                            + " Generate this as a high-quality image."
                        }
                    ]
                }
            ],
            "generationConfig": {
                "responseModalities": ["TEXT", "IMAGE"],
            },
        }

        data = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(
            endpoint,
            data=data,
            headers={"Content-Type": "application/json"},
            method="POST",
        )

        try:
            with urllib.request.urlopen(req, timeout=120) as response:
                result = json.loads(response.read().decode("utf-8"))

            candidates = result.get("candidates", [])
            if candidates:
                parts = candidates[0].get("content", {}).get("parts", [])
                for part in parts:
                    if "inlineData" in part:
                        mime = part["inlineData"].get("mimeType", "image/png")
                        ext = "png" if "png" in mime else "jpg"
                        image_data = base64.b64decode(
                            part["inlineData"]["data"]
                        )
                        return image_data, ext

            print(f"    No image in response from {model}")
            with open(f"/tmp/gemini_debug_{project['slug']}_{model.replace('/', '_')}.json", "w") as f:
                json.dump(result, f, indent=2)

        except urllib.error.HTTPError as e:
            error_body = e.read().decode("utf-8") if e.read else ""
            print(f"    HTTP {e.code} from {model}: {error_body[:200]}")
        except Exception as e:
            print(f"    Error with {model}: {e}")

    # Try Imagen models as fallback
    for model in imagen_models:
        print(f"  Trying model: {model}...")
        endpoint = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:predict?key={API_KEY}"
        payload = {
            "instances": [{"prompt": project["prompt"]}],
            "parameters": {
                "sampleCount": 1,
                "aspectRatio": "4:3",
                "personGeneration": "dont_allow",
            },
        }

        data = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(
            endpoint,
            data=data,
            headers={"Content-Type": "application/json"},
            method="POST",
        )

        try:
            with urllib.request.urlopen(req, timeout=120) as response:
                result = json.loads(response.read().decode("utf-8"))

            if "predictions" in result and len(result["predictions"]) > 0:
                image_data = result["predictions"][0].get(
                    "bytesBase64Encoded", ""
                )
                if image_data:
                    return base64.b64decode(image_data), "png"

            print(f"    No image in response from {model}")

        except urllib.error.HTTPError as e:
            error_body = e.read().decode("utf-8") if e.read else ""
            print(f"    HTTP {e.code} from {model}: {error_body[:200]}")
        except Exception as e:
            print(f"    Error with {model}: {e}")

    return None, None


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    successful = 0
    failed = []

    for i, project in enumerate(PROJECTS):
        print(f"\n[{i+1}/9] Generating image for {project['name']}...")

        image_data, ext = try_models(project)

        if image_data:
            filename = f"{project['slug']}.{ext}"
            filepath = os.path.join(OUTPUT_DIR, filename)
            with open(filepath, "wb") as f:
                f.write(image_data)
            size_kb = len(image_data) / 1024
            print(f"  Saved: {filepath} ({size_kb:.0f} KB)")
            successful += 1
        else:
            print(f"  FAILED: Could not generate image for {project['name']}")
            failed.append(project["name"])

        # Rate limiting
        if i < len(PROJECTS) - 1:
            print("  Waiting 5s for rate limiting...")
            time.sleep(5)

    print(f"\n{'='*50}")
    print(f"Results: {successful}/9 images generated successfully")
    if failed:
        print(f"Failed: {', '.join(failed)}")
    print(f"Output directory: {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
