# Awesomate.ai — Image Generation Prompts Reference

Brand palette for all prompts: navy (#0f1128), red (#e9484d), orange (#ef9563), blue (#1e63e9), white backgrounds.
Style: clean, modern, minimal, professional. Australian business context. No text in generated images (text is handled in HTML).

---

## 1. About Hero — Team/Founder Photo

**Placeholder location:** `src/components/about/AboutHero.tsx` (`.ab-hero-img`)
**Dimensions:** Full-width, ~400px tall, 16:9 or 3:1 aspect ratio
**Recommendation:** Use a real photo, not AI-generated. If generating a placeholder:

> Candid photo of a small creative technology team working together in a bright, modern Australian co-working space. Natural light, laptops and monitors visible, relaxed professional atmosphere. Shallow depth of field. Warm tones with subtle orange and navy accents in the environment. No text overlays. Shot from a slightly elevated angle. Clean, editorial style.

---

## 2. About Story — Illustration

**Placeholder location:** `src/components/about/AboutStory.tsx` (`.ab-story-img`)
**Dimensions:** ~50% width (grid column), 400px tall
**Style:** Flat illustration or isometric

> Flat vector illustration of a friendly technology consultant helping a small business owner understand their systems. The consultant gestures toward a simplified dashboard on a screen showing connected apps and data flows. Clean lines, minimal detail, warm colour palette using navy (#0f1128), coral red (#e9484d), soft orange (#ef9563), and white. No text. Geometric shapes, rounded corners, modern SaaS illustration style similar to Stripe or Linear marketing pages.

**Alternative (isometric):**

> Isometric illustration of interconnected business technology — a central hub connecting to automation workflows, data dashboards, and mobile apps. Navy base with red and orange accent elements. Clean white background. No text. Modern tech company illustration style with subtle shadows and depth.

---

## 3. Contact Info — Map Illustration

**Placeholder location:** `src/components/contact/ContactInfo.tsx` (`.ct-info-map`)
**Dimensions:** ~50% width (grid column), 320px tall

> Stylised minimal map illustration of Australia with a glowing pin marker on the east coast (Melbourne/Sydney region). Soft navy (#0f1128) landmass with subtle topographic line details. Pin marker uses a red-to-orange gradient (#e9484d to #ef9563). Light gray ocean. Clean white background. No text, no labels, no borders. Modern flat design style.

**Alternative (abstract):**

> Abstract geometric representation of Australia's outline using clean lines and dots. Navy blue wireframe continent shape on white background. A single glowing orange-red dot on the southeast coast. Minimal, modern, tech-company aesthetic. No text.

---

## 4. Sync Use Cases — Product UI Mockups

**Placeholder locations:** `src/components/sync/SyncUseCases.tsx` (`.syu-card-img`)
**Dimensions:** Full card width, 200px tall per card
**Style:** Clean UI mockup / screenshot style

### 4a. Custom Admin Dashboard

> Clean UI mockup of a modern business dashboard showing KPI cards, a line chart, and a data table. Navy sidebar navigation, white content area. Cards show metrics with red and orange accent colours. Minimal, no real data — use abstract chart shapes and placeholder bars. Rounded corners, subtle shadows. SaaS dashboard aesthetic. No text readable.

### 4b. Client Lookup Tool

> Clean UI mockup of a search interface with a prominent search bar at the top and client record cards below. Each card shows an avatar circle, horizontal lines representing text fields, and status indicator dots in blue and green. White background, navy text placeholders, subtle gray borders. Modern CRM-style interface. No readable text.

### 4c. Automated Report

> Clean UI mockup of an automated business report showing a bar chart, a donut/pie chart, and summary metric cards. Uses navy, red, and orange for chart colours. White background with subtle grid lines. Report header area with date range selector. Clean data visualisation style, no readable text — use abstract shapes and colour blocks.

---

## 5. Social Proof — Client Logos

**Placeholder location:** `src/components/home/SocialProof.tsx` (`.hm-trust-logos`)
**Recommendation:** Replace placeholder text with real client/partner logos once available. These should NOT be AI-generated — use actual brand assets from clients who have given permission.

If you need generic placeholder logos for development:

> Set of 5 minimal abstract logo marks in a single row. Each logo is a simple geometric shape (circle, hexagon, square, triangle, diamond) in navy (#0f1128) at 40% opacity on white background. Clean, uniform sizing, evenly spaced. No text.

---

## 6. Hero Section Visuals (Optional Enhancement)

These sections currently work without images (using decorative CSS elements), but could be enhanced with subtle background illustrations.

### 6a. Home Hero Background

> Abstract network of connected nodes and flowing lines, representing technology connections and automation. Very subtle, low opacity. Navy dots connected by thin gradient lines (red to orange). White background. Suitable for use as a background texture at 3-5% opacity. No text. Wide format, 1920x600px.

### 6b. n8n Hosting Hero Background

> Abstract server infrastructure illustration — stylised server rack with glowing connection lines radiating outward. Dark navy background (#0a0e1a) with green (#10b981) accent glow effects. Subtle, suitable for background use. No text. Wide format.

### 6c. AwesomateSync Hero Background

> Abstract data flow visualisation — streams of dots and lines converging into a central hub, then flowing out as organised channels. Blue (#1e63e9) accent on white background. Subtle, low opacity, suitable for background texture. No text. Wide format.

### 6d. Vibe Coding Hero Background

> Abstract code/development visualisation — floating code bracket symbols, curly braces, and geometric shapes arranged in a flowing pattern. Orange (#ef9563) and red (#e9484d) accents on white background. Subtle, low opacity, modern developer aesthetic. No text. Wide format.

---

## 7. Open Graph / Social Sharing Images

**Dimensions:** 1200x630px (standard OG image)
**Usage:** `<meta property="og:image">` in each Ontraport page's settings

### 7a. Home Page OG

> Professional social sharing card for a technology company. Navy (#0f1128) background. Awesomate logo mark (molecule shape) in centre with red-to-orange gradient glow behind it. Subtle grid pattern overlay. Text area below for "Awesomate.ai" and tagline (add text in post-processing). Clean, modern, high contrast. 1200x630px.

### 7b. n8n Hosting OG

> Social sharing card with dark navy background. Stylised server/cloud icon with green accent glow. Abstract network lines. Space for "Managed n8n Hosting" text (add in post-processing). 1200x630px.

### 7c. AwesomateSync OG

> Social sharing card with white background. Abstract data hub visualisation with blue (#1e63e9) accent colours. Connected nodes pattern. Space for "AwesomateSync" text (add in post-processing). 1200x630px.

### 7d. Vibe Coding OG

> Social sharing card with white background. Abstract code/development shapes with orange-to-red gradient accents. Floating geometric elements. Space for "Vibe Coding" text (add in post-processing). 1200x630px.

### 7e. About Page OG

> Social sharing card with navy background. Warm, approachable feel. Abstract people/connection shapes with red-orange gradient accents. Space for "About Awesomate" text (add in post-processing). 1200x630px.

### 7f. Contact Page OG

> Social sharing card with white background. Simplified Australia map outline with glowing pin marker. Red-orange gradient accent. Space for "Get in Touch" text (add in post-processing). 1200x630px.

---

## 8. n8n Hosting Page Images

**Generated with NanoBanana** (Gemini 2.5 Flash Image)
**Storage:** `src/assets/images/n8n/` (local dev paths) / GitHub raw URLs in HTML strings
**GitHub base URL:** `https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/n8n/`

### Style Consistency Rules

**Vector illustrations** — flat modern style, geometric shapes, rounded corners. ONLY brand colours: navy (#0f1128), red (#e9484d), orange (#ef9563), blue (#1e63e9), white. No text or labels. White or very light backgrounds. Stripe/Linear marketing illustration style.

**People photography** — natural, candid poses (never staged/stock). Warm colour temperature, natural lighting (window light). Shallow depth of field (f/2.0–f/2.8). Australian context (casual smart, modern offices, greenery visible). Real skin textures, natural expressions, slight imperfections. No text/logos/brand elements.

### 8a. Hero — Contextual Person Photo

**File:** `n8n-hero-person.png` (1443KB)
**Section:** `Hero.tsx` (right column, 2-column layout)
**NanoBanana command:** `nanobana generate` (raw prompt, not template — gives full framing control)
**Aspect:** 16:9

> A wide environmental portrait of a confident Australian man in his early 30s, sitting in a modern office chair at a light timber desk. He is leaning back slightly with a relaxed, satisfied smile, holding his phone in one hand and glancing at it. His laptop is open on the desk showing a colourful workflow dashboard with connected nodes and green status indicators. A large monstera plant sits to the right of the desk, warm natural golden-hour window light streams in from the left. A coffee mug and a few items on the desk. His sleeves are rolled up on a casual button-up shirt. The body language says everything runs smoothly on its own. Shot from a medium distance with a 35mm lens at f/4, showing the full desk, chair, plant, and person from roughly the waist up. Warm colour grading, natural skin texture with slight stubble, candid and authentic feeling. Documentary photographic realism with organic sharpness. No text, no logos.

**Design intent:** The image communicates *outcome* (automations running smoothly) rather than *activity* (person working). The relaxed lean-back posture, phone with success notifications, and open laptop with workflow dashboard all reinforce "your systems run themselves."

### 8b. WhyAwesomate #1 — Pricing Comparison Vector

**File:** `n8n-pricing-comparison.png` (715KB)
**Section:** `WhyAwesomate.tsx` (differentiator #1: Uncapped Executions)
**NanoBanana command:** `nanobana vector`
**Template:** `flat_vector`

> A simple comparison: on the left, a rising staircase of blocks representing escalating cloud costs with small dollar symbols; on the right, a single flat horizontal bar representing flat pricing, with a small checkmark. An abstract person figure stands confidently next to the flat bar. Use red (#e9484d) for the escalating blocks, and a blue-to-navy gradient (#1e63e9 to #0f1128) for the flat bar. White background. Clean geometric shapes with rounded corners, no text.

### 8c. WhyAwesomate #2 — Infrastructure/Uptime Vector

**File:** `n8n-infrastructure.png` (808KB)
**Section:** `WhyAwesomate.tsx` (differentiator #2: Kubernetes + Airplane Rule)
**NanoBanana command:** `nanobana vector`
**Template:** `flat_vector`

> Three interconnected server nodes arranged in a triangle pattern, connected by flowing gradient lines (red #e9484d to orange #ef9563). One node has a small warning indicator, while the other two glow brightly, showing automatic failover. Small shield icon in the centre of the triangle. Use navy (#0f1128) for the nodes, red-to-orange gradient for the connection lines. White background. Clean geometric shapes, no text.

### 8d. WhyAwesomate #3 — Australian Data Residency

**File:** `n8n-australia-data.png` (1547KB)
**Section:** `WhyAwesomate.tsx` (differentiator #3: Data Stays in Australia)
**NanoBanana command:** `nanobana generate`

> A wide photograph of Melbourne city skyline at golden hour, shot from an elevated viewpoint. Warm natural light, slightly hazy atmosphere. The city looks vibrant and modern with the Yarra River visible. Extremely realistic, no AI artifacts. Shot with a telephoto lens, natural colour grading. No text, no overlays.

### 8e. WhyAwesomate #4 — Support Team

**File:** `n8n-support-team.png` (1523KB)
**Section:** `WhyAwesomate.tsx` (differentiator #4: Real Support)
**NanoBanana command:** `nanobana person`
**Template:** `lifestyle_person`

> A friendly female tech support person in her late 20s, wearing casual smart attire, on a video call at her desk. She is smiling warmly and gesturing while explaining something. A dual monitor setup is visible, one screen showing a colourful workflow dashboard. Natural office lighting with slight bokeh background. The person looks completely natural and authentic with real skin texture, a natural warm expression, and slight natural imperfections. Australian casual office setting with a small plant visible. No stock photo feel.

---

## Recommended Tools

| Tool | Best For | Notes |
|------|----------|-------|
| **NanoBanana** | People photos, vector illustrations, brand assets | CLI: `nanobana`. Uses Gemini 2.5 Flash Image. See `/Users/andrewwadsworth/Projects/nanobana/README.md` |
| **Midjourney** | Hero backgrounds, abstract visuals, OG images | Use `--ar 16:9` or `--ar 1200:630` for OG images |
| **DALL-E 3** | UI mockups, illustrations, precise compositions | Better at following exact colour specifications |
| **Figma + AI plugins** | UI mockups for Sync Use Cases | Most control over layout and brand consistency |
| **Real photography** | About Hero team photo | Strongly recommended over AI generation |

## Image Integration Notes

- All images should be optimised (WebP format, <100KB where possible)
- Store in a `/images/` directory or host on a CDN
- In Ontraport HTML blocks, use absolute URLs for images (e.g., `https://awesomate.ai/images/...`)
- For dev preview, images can be placed in the project's `public/` directory
- Update both the HTML template string AND the JSX preview when adding images
