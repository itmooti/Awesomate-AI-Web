# Awesomate.ai — Multi-Page Business Website Builder

## What This Project Is

This is a **preview and code-generation tool** for building HTML sections that deploy into Ontraport page blocks. It is **NOT a deployed React app**. The React + Vite environment is used purely for development — the actual deliverable is standalone HTML/CSS/JS that gets copy-pasted into Ontraport Custom HTML elements.

**Business:** Awesomate.ai — a complete business technology partner offering three core services (n8n Hosting, Buddzee, Vibe Coding).
**Target platform:** Ontraport page builder (Custom HTML blocks).
**Target audience:** Australian SMB owners (non-technical, growth-focused, time-poor).
**Spelling:** Australian English (organise, customise, colour, centre).

## Site Architecture

| Page | URL | Ontraport Page ID | Purpose |
|------|-----|--------------------|---------|
| **Home** | awesomate.ai/ | 207 | Company overview, three service pillars, trust signals |
| **n8n Hosting** | awesomate.ai/n8n-hosting | TBD | Managed n8n hosting (4 tiers) |
| **Buddzee** | awesomate.ai/buddzee | TBD | Business data buddy — unified data + AI assistant |
| **Vibe Coding** | awesomate.ai/vibe-coding | TBD | AI-powered app development + training |
| **About** | awesomate.ai/about | TBD | Company story, values, process |
| **Contact** | awesomate.ai/contact | TBD | Contact options, form, business info |

## Architecture: The Dual-Output Pattern

Every section component follows the same two-part structure:

```
ComponentName.tsx
├── const SectionCode = `<style>...</style><section>...</section>`   ← Ontraport HTML output
└── export const ComponentName = () =>
      <CopyWrapper blockName="Name" codeToCopy={SectionCode}>
        {/* React JSX preview */}
      </CopyWrapper>
```

1. **HTML template string** — Self-contained HTML/CSS with inline styles, Ontraport-compatible classes, and CSS variables. This is what gets pasted into Ontraport.
2. **React JSX preview** — A visual replica rendered in the dev server for design iteration. Uses Tailwind utility classes.
3. **CopyWrapper** — Wraps each section with a copy-to-clipboard button and stores the HTML in a hidden div for the DeploymentHub.

**Important:** When editing a section, you must update BOTH the HTML string AND the JSX preview to keep them in sync.

## Tech Stack

- **React 19** + **TypeScript 5.8** + **Vite 6** (dev/preview only)
- **Tailwind CSS via CDN** (not installed locally — configured in `index.html`)
- Hash-based page routing for dev preview (App.tsx)
- No external UI libraries — all custom components
- No global state management — only local `useState` where needed

## Dev Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run preview   # Preview production build
```

## File Structure

```
├── index.html                          # HTML entry, Tailwind CDN config, Ontraport simulation layer
├── index.tsx                           # React entry point
├── src/
│   ├── App.tsx                         # Page router with dev page switcher bar
│   ├── pages/
│   │   ├── Home.tsx                    # Home page layout
│   │   ├── N8nHosting.tsx              # n8n Hosting page layout
│   │   ├── Buddzee.tsx                 # Buddzee page layout
│   │   ├── VibeCoding.tsx              # Vibe Coding page layout
│   │   ├── About.tsx                   # About page layout
│   │   └── Contact.tsx                 # Contact page layout
│   └── components/
│       ├── shared/
│       │   ├── Header.tsx              # Sticky nav with services dropdown + About/Contact links
│       │   ├── Footer.tsx              # Footer + GlobalCode (fonts, CSS vars, Tailwind config)
│       │   ├── CopyWrapper.tsx         # Copy-to-clipboard utility wrapper
│       │   └── DeploymentHub.tsx       # Floating deployment widget (page-aware, 6 pages)
│       ├── home/                       # Home page sections (5 sections)
│       ├── n8n-hosting/                # n8n Hosting sections (8 sections)
│       ├── buddzee/                    # Buddzee sections (8 sections)
│       ├── vibe-coding/                # Vibe Coding sections (8 sections)
│       ├── about/                      # About page sections (5 sections)
│       │   ├── AboutHero.tsx
│       │   ├── AboutStory.tsx
│       │   ├── AboutValues.tsx
│       │   ├── AboutProcess.tsx
│       │   └── AboutCTA.tsx
│       └── contact/                    # Contact page sections (4 sections)
│           ├── ContactHero.tsx
│           ├── ContactOptions.tsx
│           ├── ContactForm.tsx
│           └── ContactInfo.tsx
├── vite.config.ts
├── tsconfig.json
├── package.json
└── metadata.json
```

## Brand Design System

### Colors

| Name    | Hex       | CSS Variable    | Tailwind Class     | Usage                     |
|---------|-----------|-----------------|--------------------|---------------------------|
| Navy    | `#0f1128` | `--color-1`     | `brand-navy`       | Primary text, dark BGs    |
| Red     | `#e9484d` | `--color-2`     | `brand-accent`     | CTAs, accents, highlights |
| Orange  | `#ef9563` | `--color-3`     | `brand-orange`     | Gradient endpoint         |
| Blue    | `#1e63e9` | `--color-4`     | `brand-blue`       | Links, info               |
| White   | `#ffffff` | `--color-5`     | (default)          | Backgrounds               |
| Alt BG  | `#f8f9fb` | `--color-bg-alt`| —                  | Alternating section BGs   |
| Dark BG | `#0a0e1a` | `--color-bg-dark`| —                 | Dark sections, CTAs       |

### Primary Gradient

```css
background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%);
```
Tailwind: `bg-gradient-to-br from-brand-accent to-brand-orange`

### Fonts

| Font               | CSS Variable     | Tailwind       | Usage    |
|--------------------|------------------|----------------|----------|
| Inter              | `--font-main`    | `font-sans`    | Body text, buttons, labels |
| Bricolage Grotesque| `--font-heading` | `font-heading` | Headings (Ontraport only) |
| JetBrains Mono     | `--font-mono`    | `font-mono`    | Code elements |
| Manrope            | `--font-buddzee` | `font-buddzee` | Buddzee sections only |

### Spacing & Layout

- Container max-width: `1440px`, padding: `0 24px` (mobile) / `0 48px` (desktop)
- Section vertical padding: `80px` to `120px`
- Card padding: `32px` to `40px`
- Standard gaps: `16px`, `24px`, `32px`, `40px`
- Border radius: buttons `6-8px`, cards `12-16px`, large containers `20-40px`

### Section CSS Prefix Convention

Each section's CSS classes use a page+section prefix to avoid cross-block conflicts:
- Header: `hdr-*`
- Footer: `ft-*`
- Home: `hm-*` (e.g., `hm-hero`, `hm-services`)
- n8n Hosting: `n8-*` (e.g., `n8-hero`, `n8-infra`)
- Buddzee: `bz-*` (e.g., `bz-hero`, `bz-features`)
- Vibe Coding: `vc-*` (e.g., `vc-hero`, `vc-process`)
- About: `ab-*` (e.g., `ab-hero`, `ab-story`, `ab-val`, `ab-proc`, `ab-cta`)
- Contact: `ct-*` (e.g., `ct-hero`, `ct-opt`, `ct-form`, `ct-info`)

## Ontraport CSS Conventions

These conventions are critical when writing the HTML template strings:

### 4x Specificity Override
```css
.h1.h1.h1.h1 { font-family: var(--font-heading); font-weight: 800; }
.body-text.body-text.body-text.body-text { font-family: var(--font-main); font-size: 16px; }
.button.button.button.button { font-family: var(--font-main); font-weight: 800; }
.label.label.label.label { font-family: var(--font-main); font-size: 12px; }
```

### CSS Variables Over Hardcoded Colors
Always use `var(--color-1)` through `var(--color-5)` in HTML template strings.

### Use `!important` Where Ontraport Overrides
Use `!important` on properties that Ontraport is known to override (margins, padding, font styles on body/html).

## Ontraport Deployment Workflow

### Step 1: Global Settings
Copy the `GlobalCode` from `Footer.tsx` (or use the "COPY GLOBAL CODE" button) and paste into **Ontraport Page Settings > Custom Code > Header**.

### Step 2: Header Block
Copy the Header HTML into a Custom HTML element. Set block padding to 0.

### Step 3: Body Sections
Copy each section into separate Custom HTML elements, stacked vertically.

### Step 4: Footer Block
Copy the Footer HTML into a final Custom HTML element.

**Tips:**
- Each section is self-contained — it can be added/removed independently
- Keep sections in separate Ontraport blocks for modularity
- All code is mobile-responsive out of the box
- Set Ontraport block padding to 0 for sections that handle their own padding
- Each Ontraport page gets the same Header + Footer, different body sections

## How to Add a New Section

### Step 1: Create the Component File

Create `src/components/{page}/SectionName.tsx` using the dual-output pattern:
- Choose a unique 2-3 letter CSS prefix (check existing sections for conflicts)
- Write the HTML template string with Ontraport-compatible CSS
- Write the JSX preview with Tailwind classes
- Wrap in CopyWrapper

### Step 2: Register in the Page Component

Import and add to the appropriate page in `src/pages/`:
```tsx
import { NewSection } from '../components/{page}/NewSection';
```

### Step 3: Add to DeploymentHub

In `DeploymentHub.tsx`, add the section name to the page's `sections` array in `pageBlockMap`.

## Ontraport API Notes (for reference)

- API creds: Api-Appid: 2_20316_oulMCALkT, Api-Key: ljZBc2UE472ipjN
- objectID=0 Contacts, objectID=20 LandingPages, objectID=153 LandingPageVersionItem
- Page resource field (objectID=20) is READ-ONLY — cannot update directly via API
- DO NOT create/modify LandingPageVersionItems — it breaks the page editor
- **Safest deployment method: copy-paste HTML via CopyWrapper/DeploymentHub**
- Live pages: 207=HOME, 208=Pricing, 209=Test
