# Awesomate n8n Hosting — Client Onboarding Flow

## Master Plan

---

## Overview

A standalone TypeScript app (Next.js or Vite + React) that serves as a multi-step onboarding wizard. Every plan selection ("Choose Essentials", "Choose Support Plus", "Choose Pro", "Inquire Now") redirects to the **same entry point**: `onboarding.awesomate.ai` (or `/onboarding` route).

The selected plan is passed as a query param (`?plan=essentials|support-plus|pro|embedded`) but the flow intelligently guides users toward the right package based on their actual needs — they may end up on a different plan than they initially clicked.

---

## Flow Architecture

### PHASE 1 — Business Discovery (Steps 1–3)
### PHASE 2 — Package Fit (Steps 4–6)
### PHASE 3 — Onboarding Add-ons (Steps 7–13)
### PHASE 4 — Business Profiling (Steps 14–15)
### PHASE 5 — Confirmation & Redirect (Step 16)

---

## PHASE 1: Business Discovery

### Step 1 — Welcome + Website URL
**Layout:** `[ Video | Form ]` split view

**Left Panel — Video (Wistia)**
A warm 15-second welcome video.

**Video Transcript:**
> "Hey! Welcome to Awesomate. In the next few minutes, we're going to set up your very own n8n automation environment. First, just pop in your website URL and we'll grab your business details automatically — saves you filling in a bunch of forms. Let's go!"

**Veo 3 / AI Video Prompt:**
```
Create a 15-second welcome video for a tech SaaS onboarding flow. Show a friendly, professional presenter (mid-30s, casual business attire) standing in a modern, clean office environment with subtle tech elements (screens showing workflow diagrams in the background). They speak directly to camera with energy and warmth. The tone is: "We've got this, let's make this easy." Style: warm lighting, shallow depth of field, brand colors are dark navy (#1a1a2e) and coral/salmon (#ff6b6b). End with a subtle animated Awesomate logo reveal.
```

**Right Panel — Form:**
- Heading: "Let's start with your website"
- Subtext: "We'll use this to auto-fill your business details so you don't have to."
- Input: `{website_url}` — URL field with validation
- Button: "Fetch My Details" (triggers AI scrape)
- Link below: "I don't have a website yet" → skips to Step 2 (manual form)

**Technical Logic:**
1. On submit, call AI endpoint to scrape the provided URL
2. Extract: logo image, primary color, secondary color, business name, contact email, phone, address, fonts
3. Store locally in state
4. If scrape fails → show toast: "We couldn't read your site, no worries — let's fill this in manually" → redirect to Step 2 manual mode

---

### Step 2 — Business Details Confirmation / Manual Entry
**Layout:** `[ Form ]` full-width, card-based

**If auto-scraped successfully:**
- Show extracted data in editable card format:
  - Logo preview (with "Change" upload button)
  - `{color1}` — color swatch + hex picker
  - `{color2}` — color swatch + hex picker
  - `{company_trading_name}` — pre-filled, editable
  - `{company_legal_name}` — blank (rarely on websites), editable
  - `{email}` — pre-filled, editable
  - `{sms_number}` — pre-filled or blank, editable (with country code selector)
  - `{contact_first_name}` — editable
  - `{contact_last_name}` — editable
- Heading: "We found these details — look right?"
- CTA: "Looks Good, Continue" / "I need to fix some things" (expand edit mode)

**If manual entry (no website or scrape failed):**
- Same fields, all blank
- Heading: "Tell us about your business"
- All fields required except `{company_legal_name}`

---

### Step 3 — Choose Your Subdomain (Slug)
**Layout:** `[ Video | Form ]` split view

**Left Panel — Video (Wistia, 12 seconds)**

**Video Transcript:**
> "Next up — your custom URL. This is where you and your team will access your n8n instance. We've suggested one based on your business name, but feel free to change it to whatever works for you."

**Veo 3 / AI Video Prompt:**
```
Create a 12-second explainer video showing a browser address bar with a URL being typed. The URL morphs from "yourname.awesomate.io" with the slug portion highlighted and glowing. Show a subtle animation of the slug changing between different options. Clean, modern UI aesthetic. Dark background, browser chrome visible. Brand colors: navy (#1a1a2e) and coral (#ff6b6b). No presenter, just screen recording style with gentle motion graphics.
```

**Right Panel — Form:**
- Heading: "Pick your workspace URL"
- Preview: `{slug}.awesomate.io` shown in a styled browser bar mockup
- AI-suggested slug pre-filled (derived from `{company_trading_name}`)
  - Algorithm: lowercase, remove common words (the, and, pty, ltd, inc), prefer single most distinctive word, fallback to hyphenated
  - Example: "Business Blueprint Pty Ltd" → suggested: `blueprint`
- Input field: editable slug with real-time validation
  - Rules: lowercase alpha + hyphens only, no leading/trailing hyphens, min 3 chars
- Availability check: On blur/change, call VitalStats GraphQL API:
  ```
  POST https://vitalstats.app/api/v1/graphql?puid=WpIX2XO26C6eqIdM3OlF0&limit=50&offset=0
  Headers: { Content-Type: application/json, Accept: application/json, Api-Key: <key> }
  ```
  - ✅ Available → green checkmark + "This one's yours!"
  - ❌ Taken → red X + "Already taken, try another" + auto-suggest alternatives
- CTA: "Lock It In"

**On submit:** Save all Phase 1 data to VitalStats SDK (create client record).

---

## PHASE 2: Package Fit Assessment

### Step 4 — Technical Comfort Level
**Layout:** `[ Video | Interactive Cards ]` split view

**Left Panel — Video (Wistia, 18 seconds)**

**Video Transcript:**
> "Great, we've got your details locked in. Now let's figure out the best setup for you. Everyone's different — some of our clients are tech-savvy and want full control, others prefer us to handle everything. There's no wrong answer here, it just helps us give you exactly the right level of support."

**Veo 3 / AI Video Prompt:**
```
Create an 18-second video showing a split-screen metaphor: on the left, a confident developer typing code on a terminal; on the right, a business owner relaxing while automation workflows run on a screen behind them. The two scenes merge in the middle with a gradient blend. Communicate the message: "Whether you're hands-on or hands-off, we've got you covered." Modern, warm aesthetic. Brand colors: navy and coral. Subtle particle effects in the transition zone.
```

**Right Panel — Interactive Selection (3 cards):**

**Card 1: "I've Got This"** 🛠️
- "I'm technical (or I have a tech team) and I'm comfortable managing n8n myself."
- Maps to: **Essentials** ($75/mo)

**Card 2: "Some Help Please"** 🤝
- "I can do most things myself but I'd like expert support when I get stuck."
- Maps to: **Support Plus** ($150/mo)

**Card 3: "Handle It For Me"** ✨
- "I'm not technical and I want the Awesomate team to build and manage my automations."
- Maps to: **Automations Pro** ($370/mo) or **Embedded Team** ($3.5k/mo)

---

### Step 5 — Workflow Volume & Complexity
**Layout:** `[ Form ]` full-width

**Heading:** "How many automations are you thinking?"

**Options (radio/card select):**

1. **"Just getting started"** — 1–3 workflows, simple integrations
   - Stays at current tier
2. **"Growing fast"** — 5–10 workflows, some complex logic
   - Nudges toward Support Plus or Pro
3. **"Full automation engine"** — 10+ workflows, AI agents, complex multi-step
   - Nudges toward Pro or Embedded Team
4. **"I'm not sure yet"** — Need guidance
   - Nudges toward Pro (includes 1 built workflow/mo)

---

### Step 6 — Your Recommended Plan
**Layout:** Full-width reveal with animation

**Logic:** Based on Steps 4 + 5, calculate the best-fit plan. Show:

- **Recommended plan** (highlighted, branded)
- **Their initially selected plan** (if different, shown dimmed with note: "You originally selected X — based on your answers, we think Y is a better fit. Here's why:")
- Comparison mini-table showing what they get
- Running price total at bottom
- CTA: "Continue with [Plan Name]" or "Switch to [Other Plan]"

**No video here** — let the visual recommendation speak. Use animation to reveal the card.

---

## PHASE 3: Onboarding Add-Ons

### Step 7 — Credential Setup Assistance
**Layout:** `[ Video | Selection ]` split view

**Left Panel — Video (Wistia, 15 seconds)**

**Video Transcript:**
> "One of the trickiest parts of getting started with n8n is connecting all your apps — things like your email, CRM, Google accounts, and AI tools. Getting these credentials set up right the first time saves a lot of headaches. We can walk you through it in a one-hour session."

**Veo 3 / AI Video Prompt:**
```
Create a 15-second video showing a screen recording style view of an n8n credential setup screen. Show API keys being entered, OAuth popups appearing, green checkmarks confirming successful connections. Speed up the process to feel snappy and satisfying. Overlay text appears: "Get connected, the right way." Clean modern aesthetic, dark UI theme. Brand colors for accents.
```

**Right Panel — Two Options:**

**Option A: "I'll set them up myself"** — Free
- Subtext: "You'll have access to our documentation and knowledge base."

**Option B: "Book a setup session with our specialist"** — 
- If on **Pro or Embedded Team**: Show as ✅ **Included free with your plan**
- If on **Essentials or Support Plus**: Show as **+ AU$100 one-time** (1-hour session)
- Subtext: "A 1-hour video call where we connect all your tools together. Most clients find this saves them hours of trial and error."

---

### Step 8 — OpenRouter Account
**Layout:** `[ Explainer | Action ]` split view

**Left Panel — Gemini NotebookLM Explainer Prompt:**
```
Create a 20-second educational explainer about OpenRouter for small business owners who are new to AI. Explain that OpenRouter is like a universal remote control for AI — it lets you access many different AI models (like ChatGPT, Claude, Gemini) through one single account. Explain that n8n uses OpenRouter to power AI features in workflows, so having an account is essential. Keep it simple, friendly, no jargon. Use a metaphor of a "key that unlocks all AI doors." Visual style: animated whiteboard or simple motion graphics.
```

**Video Transcript (for manual recording alternative):**
> "To use AI inside your n8n workflows, you'll need an OpenRouter account. Think of it as a universal key that gives you access to all the major AI models — ChatGPT, Claude, Gemini, and more — through one simple account. It takes about two minutes to set up and it's essential for any AI-powered automation."

**Right Panel:**
- Heading: "Do you have an OpenRouter account?"
- **"Yes, I'm all set"** → Continue (record: `has_openrouter: true`)
- **"No, what's that?"** → Show brief explainer card + button: "Set Up OpenRouter (opens new tab)" → link to openrouter.ai/sign-up opens in `_blank`
  - After clicking, show: "Once you've created your account, click continue"
  - CTA: "I've set it up, continue" (record: `has_openrouter: false, openrouter_guided: true`)

---

### Step 9 — AI Chat Agent Templates
**Layout:** `[ Video | Selection ]` split view

**Left Panel — Video (Wistia, 15 seconds)**

**Video Transcript:**
> "Want to hit the ground running with AI? We've built a library of ready-to-go chat agent templates — things like customer support bots, lead qualification agents, and internal Q&A assistants. We can pre-install these in your account and train you on how to customise them."

**Veo 3 / AI Video Prompt:**
```
Create a 15-second video showing a chat interface with an AI agent responding to customer questions in real-time. Show the conversation flowing naturally — customer asks a question, AI responds helpfully, then seamlessly hands off to a human agent when needed. Split to show multiple chat windows representing different use cases (support, sales, internal). Modern, clean design. Brand colors. End with text: "Your AI team, ready on day one."
```

**Right Panel — Two Options:**

**Option A: "I'll explore on my own"** — Free
- Subtext: "You'll have access to our full template library."

**Option B: "Set up my AI agents for me"**
- If on **Pro or Embedded Team**: ✅ **Included free** (1-hour training session)
- If on **Essentials or Support Plus**: **+ AU$100 one-time** (1-hour session)
- Subtext: "We'll install the right templates for your business and train you on how to use and customise them."

---

### Step 10 — Workflow Setup Assistance
**Layout:** `[ Video | Selection ]` split view

**Left Panel — Video (Wistia, 15 seconds)**

**Video Transcript:**
> "Same goes for your automation workflows. If you want to start seeing results from day one, we can set up your first few workflows for you. We'll pick the best templates for your business and configure them so they're ready to go live."

**Right Panel — Two Options:**

**Option A: "I'll build my own workflows"** — Free
- Subtext: "Full access to 900+ community templates."

**Option B: "Set up my first workflows for me"**
- If on **Pro or Embedded Team**: ✅ **Included free**
- If on **Essentials or Support Plus**: **+ AU$100 one-time** (1-hour session)
- Subtext: "We'll configure your top-priority workflows and make sure they're running perfectly."

---

### Step 11 — Local Hosting Option
**Layout:** `[ Explainer | Selection ]` split view

**Left Panel — Gemini NotebookLM Explainer Prompt:**
```
Create a 15-second explainer about data sovereignty and local hosting for business owners. Explain that by default, their n8n instance runs on secure cloud servers, but some businesses (especially those in regulated industries or specific countries) prefer their data to be hosted in their own country. Use a simple visual metaphor of a server with a country flag on it. Keep it reassuring — their data is secure either way, this is just an extra option for businesses that need it. Modern animated style, brand colors navy and coral.
```

**Video Transcript:**
> "By default, your instance runs on our secure cloud. But if your business needs your data hosted locally in [their country] — for compliance or preference — we can set that up for you too."

**Right Panel:**
- Heading: "Do you need hosting in {country}?"
  - `{country}` is auto-populated from their business address in Phase 1
- **"Standard hosting is fine"** → Continue (no extra cost)
- **"Yes, I need local hosting"** → Reveal pricing:
  - **AU$1,000 one-time setup fee + AU$50/month additional**
  - Brief explainer: "We'll provision a dedicated instance in {country} and migrate your environment. This includes ongoing local infrastructure management."
  - CTA: "Add Local Hosting" / "Maybe Later"

---

### Step 12 — Website Hosting (Bonus Offer)
**Layout:** `[ Form ]` full-width

**Heading:** "Want us to host your website too? No extra cost."

**Subtext:** "If you're running a WordPress site, we can host it alongside your n8n instance at no additional charge. One less thing to manage."

- **"Yes, I'm interested!"** → Show:
  - Pre-filled website URL from Step 1
  - "Confirm this is your main website:" `{website_url}`
  - On confirm → **API call to BuiltWith** (or similar) to detect CMS
  - **If WordPress:** ✅ "Great news — your site is WordPress and we can host it for you! We'll be in touch to arrange the migration."
  - **If not WordPress:** ⚠️ "Your site appears to be built with {detected_platform}. We currently support WordPress hosting only, but we're expanding soon. We'll let you know when your platform is supported."
  - Record: `website_hosting_interest: true, cms: {detected}`
- **"No thanks"** → Continue

---

### Step 13 — Running Total & Add-On Summary
**Layout:** Full-width summary card

**No video** — clean visual summary.

- Selected plan with monthly price
- Billing frequency (Monthly / Yearly with 2 months free)
- Add-ons itemised:
  - Credential setup session: AU$100 (if applicable)
  - AI agent setup: AU$100 (if applicable)
  - Workflow setup: AU$100 (if applicable)
  - Local hosting setup: AU$1,000 (if applicable)
  - Local hosting monthly: AU$50/mo (if applicable)
- **Total one-time costs**
- **Total monthly cost**
- Toggle: Monthly ↔ Yearly billing
- CTA: "Continue to Business Profile"

---

## PHASE 4: Business Profiling

### Step 14 — About Your Business
**Layout:** `[ Video | Form ]` split view

**Left Panel — Video (Wistia, 18 seconds)**

**Video Transcript:**
> "Almost there! This last bit helps us understand your business better so we can recommend the right automations for you. If we found info from your website earlier, we've put together a quick summary — just check it over and tweak anything that's off."

**Right Panel:**
- **If website was scraped in Phase 1:**
  - AI-generated business summary (2–3 sentences) shown in an editable text area
  - Heading: "Here's what we understand about your business"
  - Subtext: "Edit anything that doesn't look right."
- **If no website / scrape failed:**
  - Open text area: "Tell us briefly what your business does, who your customers are, and what services or products you offer."
- Additional fields:
  - "How many people are on your team?" (dropdown: Just me / 2–5 / 6–20 / 20+)
  - "What roles need automation support?" (multi-select checkboxes):
    - Sales / Marketing / Operations / Customer Support / Finance / HR / IT / Executive / Other

---

### Step 15 — Automation Interest Areas
**Layout:** Full-width, checkbox grid

**Heading:** "What areas of your business could use some automation magic?"
**Subtext:** "Select all that apply — this helps us prioritise your setup and recommend the right templates."

**Checkbox grid (multi-select, icon + label for each):**

| | | |
|---|---|---|
| 📧 Email & Communications | 📱 Social Media Management | 🤖 AI Chat Agents |
| 📊 Reporting & Analytics | 💰 Invoicing & Payments | 👥 Lead Management & CRM |
| 📝 Document Processing | 🔄 Data Sync Between Apps | 📅 Scheduling & Calendars |
| 🛒 E-Commerce & Orders | 🎯 Marketing Campaigns | 📞 Customer Support |
| 👨‍💼 HR & Onboarding | 🔒 Compliance & Approvals | 📦 Inventory & Supply Chain |
| 🧠 AI Content Creation | 🔗 API & Integration Management | 💬 Internal Team Notifications |

---

## PHASE 5: Confirmation & Redirect

### Step 16 — Thank You & Next Steps
**Layout:** Full-width celebration page

**Logic-based redirect:**

**If any bookings are needed** (credential setup, AI agent setup, workflow setup):
- Heading: "You're all set! Let's book your first session."
- Subtext: "Click below to choose a time that works for you."
- CTA button → Redirect to **calendar booking system** (URL to be configured)
- Also show: "We'll send a confirmation email to {email} with everything we discussed."

**If no bookings needed:**
- Heading: "Welcome to Awesomate! 🎉"
- Subtext: "Your n8n instance is being provisioned at `{slug}.awesomate.io` — you'll receive an email at `{email}` when it's ready (usually within the hour)."
- CTA button → Redirect to **thank you page** (where success/conversion pixel fires)
- URL to be configured

**Both paths:**
- Summary card showing: Plan, monthly cost, add-ons, subdomain, next steps
- "Share your setup" — optional referral/share link

---

## Data Model Summary

```typescript
interface OnboardingData {
  // Phase 1 — Business Discovery
  website_url: string | null;
  slug: string;
  logo_url: string | null;
  color1: string;
  color2: string;
  company_trading_name: string;
  company_legal_name: string;
  email: string;
  sms_number: string;
  contact_first_name: string;
  contact_last_name: string;
  country: string;

  // Phase 2 — Package Fit
  initial_plan: 'essentials' | 'support-plus' | 'pro' | 'embedded';
  technical_level: 'self-sufficient' | 'some-help' | 'full-service';
  workflow_volume: 'starter' | 'growing' | 'full-engine' | 'unsure';
  recommended_plan: 'essentials' | 'support-plus' | 'pro' | 'embedded';
  final_plan: 'essentials' | 'support-plus' | 'pro' | 'embedded';
  billing_frequency: 'monthly' | 'yearly';

  // Phase 3 — Add-ons
  credential_setup: 'self' | 'assisted';
  has_openrouter: boolean;
  openrouter_guided: boolean;
  ai_agent_setup: 'self' | 'assisted';
  workflow_setup: 'self' | 'assisted';
  local_hosting: boolean;
  website_hosting_interest: boolean;
  detected_cms: string | null;
  
  // Phase 4 — Business Profile
  business_summary: string;
  team_size: 'solo' | '2-5' | '6-20' | '20+';
  roles_needing_automation: string[];
  automation_interests: string[];

  // Computed
  total_one_time_cost: number;
  total_monthly_cost: number;
  needs_booking: boolean;
}
```

---

## Technical Implementation Notes

### Stack Recommendation
- **Framework:** Vite + React + TypeScript
- **Styling:** Tailwind CSS + custom design system matching Awesomate brand
- **State Management:** Zustand (lightweight, persists to sessionStorage)
- **Routing:** React Router (each step = route for back/forward browser support)
- **Video:** Wistia embed SDK
- **API Integration:** 
  - VitalStats GraphQL for slug checking + data persistence
  - BuiltWith API for CMS detection
  - Custom AI endpoint for website scraping
- **Deployment:** Standalone app at `onboarding.awesomate.ai`

### Brand Design Tokens
Based on the pricing page screenshot:
- **Primary Dark:** `#1a1a2e` (navy/dark)
- **Primary Accent:** `#ff6b6b` → coral/salmon gradient on CTAs
- **Secondary Accent:** `#e8464e` (red ticks)
- **Background:** `#f8f9fa` (light gray)
- **Card Background:** `#ffffff`
- **Text Primary:** `#1a1a2e`
- **Text Secondary:** `#6b7280`
- **Success:** `#22c55e`
- **CTA Gradient:** `linear-gradient(135deg, #ff6b6b, #e8464e)`

### Progress Indicator
- Horizontal stepped progress bar at top
- 5 phases shown as dots/segments
- Active phase highlighted with brand gradient
- Step count within phase shown as fraction (e.g., "Step 2 of 3")

---

## Video Production Summary

| Step | Duration | Type | Notes |
|------|----------|------|-------|
| 1 | 15s | Presenter (Veo 3) | Welcome + website URL prompt |
| 3 | 12s | Screen recording style (Veo 3) | Subdomain explainer |
| 4 | 18s | Split-screen metaphor (Veo 3) | Technical comfort level |
| 7 | 15s | Screen recording style (Veo 3) | Credential setup |
| 8 | 20s | Animated explainer (NotebookLM) | OpenRouter explainer |
| 9 | 15s | Chat UI showcase (Veo 3) | AI agent templates |
| 10 | 15s | Presenter or screen (Veo 3) | Workflow setup |
| 11 | 15s | Animated explainer (NotebookLM) | Local hosting / data sovereignty |
| 14 | 18s | Presenter (Veo 3) | Business profiling intro |

**Total: 9 videos, ~2.5 minutes of content**
