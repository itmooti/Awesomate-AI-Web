# Awesomate.ai — Branding Guidelines

> **Company:** Awesomate.ai — Complete Business Technology Partner
> **Website:** [awesomate.ai](https://awesomate.ai)
> **Locale:** Australian English (organise, customise, colour, centre)

---

## Logo

The Awesomate logo consists of a **gradient molecular emblem** (three interconnected circles forming a triangular molecule) and the **"Awesomate" wordmark**.

All logo PNGs below are **tightly cropped with transparent backgrounds** — no oversized canvases. Hosted publicly on GitHub (repo: `itmooti/Awesomate-AI-Web`).

### Logo Variants

| Asset | Description | Use On |
|-------|-------------|--------|
| **Asset 6** | **Primary logo** — gradient emblem + navy wordmark | Light/white backgrounds |
| **Asset 5** | Gradient emblem + white wordmark | Dark backgrounds (gradient emblem visible) |
| **Asset 4** | All white (emblem + wordmark) | Dark backgrounds, overlays |
| **Asset 7** | All black (emblem + wordmark) | Single-colour / print |

### Primary Logo (gradient emblem + navy text — for light backgrounds)

| Resolution | URL |
|------------|-----|
| 1x (2602×401) | `https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/Logos/1x/Asset%206-8.png` |
| 2x (5204×801) | `https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/Logos/2x/Asset%206%402x-8.png` |
| 3x (7806×1200) | `https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/Logos/3x/Asset%206%403x-8.png` |

### White Logo (gradient emblem + white text — for dark backgrounds)

| Resolution | URL |
|------------|-----|
| 1x | `https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/Logos/1x/Asset%205-8.png` |
| 2x | `https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/Logos/2x/Asset%205%402x-8.png` |
| 3x | `https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/Logos/3x/Asset%205%403x-8.png` |

### All-White Logo (for dark backgrounds / overlays)

| Resolution | URL |
|------------|-----|
| 1x | `https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/Logos/1x/Asset%204-8.png` |
| 2x | `https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/Logos/2x/Asset%204%402x-8.png` |
| 3x | `https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/Logos/3x/Asset%204%403x-8.png` |

### All-Black Logo (single-colour / print)

| Resolution | URL |
|------------|-----|
| 1x | `https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/Logos/1x/Asset%207-8.png` |
| 2x | `https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/Logos/2x/Asset%207%402x-8.png` |
| 3x | `https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/Logos/3x/Asset%207%403x-8.png` |

### Favicon

| Size | URL |
|------|-----|
| 32×32 | `https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/Logos/Favicon/32x32/1-01.png` |
| 16×16 | `https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/Logos/Favicon/16x16/1-01.png` |

### SVG Logos (available but oversized canvas)

SVG versions exist at `Logos/SVG/Logo.svg` through `Logo_4.svg` but have a 1920×1080 artboard with padding. Use the PNGs above for direct embedding, or crop the SVGs' `viewBox` if you need vector format.

---

## Colour Palette

| Name | Hex | CSS Variable | Tailwind Class | Usage |
|------|-----|-------------|----------------|-------|
| **Navy** | `#0f1128` | `--color-1` | `brand-navy` | Primary text, dark backgrounds |
| **Red** | `#e9484d` | `--color-2` | `brand-accent` | CTAs, accents, highlights |
| **Orange** | `#ef9563` | `--color-3` | `brand-orange` | Secondary accent, gradient endpoint |
| **Blue** | `#1e63e9` | `--color-4` | `brand-blue` | Links, info, interactive elements |
| **White** | `#ffffff` | `--color-5` | — | Backgrounds |
| **Alt Background** | `#f8f9fb` | `--color-bg-alt` | — | Alternating section backgrounds |
| **Dark Background** | `#0a0e1a` | `--color-bg-dark` | — | Dark sections, CTA blocks |

### Primary Gradient

```css
background: linear-gradient(135deg, #e9484d 0%, #ef9563 100%);
```

The red-to-orange gradient is the signature brand element — used on CTAs, the logo emblem, accent text, and decorative glows. This is the primary "brand colour" — think of it as a single warm gradient rather than two separate colours.

### Logo Gradient (exact values from SVG)

```css
background: linear-gradient(135deg, #fe3346 0%, #ff9257 100%);
```

The logo emblem uses slightly more vivid red/orange stops than the CSS palette.

---

## Typography

| Font | Variable | Tailwind | Usage |
|------|----------|----------|-------|
| **Inter** | `--font-main` | `font-sans` | Body text, buttons, labels, UI |
| **Bricolage Grotesque** | `--font-heading` | `font-heading` | All headings |
| **JetBrains Mono** | `--font-mono` | `font-mono` | Code elements, technical text |

### Google Fonts Import

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Bricolage+Grotesque:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
```

### Heading Styles

- **H1:** Bricolage Grotesque, weight 800, line-height 1.1
- **H2:** Bricolage Grotesque, weight 700–800, line-height 1.2
- **H3:** Bricolage Grotesque, weight 600–700
- **Body:** Inter, 16px, weight 400, line-height 1.6, colour `#4b5563`
- **Buttons:** Inter, uppercase, letter-spacing 0.05em, weight 800
- **Labels/Tags:** Inter, 12px, uppercase, letter-spacing 0.1em

---

## Spacing & Layout

| Property | Value |
|----------|-------|
| Container max-width | `1440px` |
| Container padding | `0 24px` (mobile), `0 48px` (desktop) |
| Section vertical padding | `80px` to `120px` |
| Card padding | `32px` to `40px` |
| Standard gaps | `16px`, `24px`, `32px`, `40px` |
| Button border-radius | `6–8px` |
| Card border-radius | `12–16px` |
| Large container radius | `20–40px` |

---

## Button Styles

### Primary CTA (gradient)

```css
background: linear-gradient(135deg, #e9484d 0%, #ef9563 100%);
color: #ffffff;
font-family: 'Inter', sans-serif;
font-weight: 800;
text-transform: uppercase;
letter-spacing: 0.05em;
padding: 14px 32px;
border-radius: 8px;
border: none;
```

### Secondary / Outline

```css
background: transparent;
color: #0f1128;
border: 2px solid #e9484d;
/* same font/spacing as primary */
```

---

## Decorative Brand Elements

The Awesomate visual identity uses recurring decorative motifs:

- **Gradient glows** — soft radial gradients (red-to-orange, low opacity) behind hero sections and key elements
- **Dot grids** — subtle repeating dot patterns as background texture
- **SVG molecular watermarks** — the interconnected-circles motif from the logo, used as large subtle background decorations on dark CTA sections
- **Animated accent borders** — gradient-traced borders on cards and containers
- **Hover effects** — scale transforms and shadow lifts on interactive cards

---

## Accent Gradient Text

For text that uses the brand gradient:

```css
.accent-gradient-text {
  background: linear-gradient(135deg, #e9484d 0%, #ef9563 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## Tailwind CSS Configuration

If using Tailwind in your project:

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f1128',
          accent: '#e9484d',
          orange: '#ef9563',
          blue: '#1e63e9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Bricolage Grotesque', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
}
```

---

## CSS Variables (copy-paste ready)

```css
:root {
  --color-1: #0f1128;   /* Navy */
  --color-2: #e9484d;   /* Red */
  --color-3: #ef9563;   /* Orange */
  --color-4: #1e63e9;   /* Blue */
  --color-5: #ffffff;   /* White */
  --color-bg-alt: #f8f9fb;
  --color-bg-dark: #0a0e1a;

  --font-main: 'Inter', sans-serif;
  --font-heading: 'Bricolage Grotesque', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## Brand Voice & Tone

- **Audience:** Australian SMB owners — non-technical, growth-focused, time-poor
- **Spelling:** Australian English (organise, customise, colour, centre, honour)
- **Tone:** Confident and warm, not corporate. Approachable tech partner, not vendor.
- **Positioning:** "Your complete business technology partner" — automation, data intelligence, custom apps
