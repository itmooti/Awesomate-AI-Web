# Image Usage Guide

## ✅ Optimized Images Ready

All 13 images have been optimized and organized. Total size reduced from **29.95 MB to 0.83 MB** (97.2% reduction).

---

## 📁 Image Locations & Usage

### About Page Images (3 images)

#### 1. About Hero - Team Photo
- **File**: `src/assets/images/about/about-hero.jpg` (171KB)
- **Component**: `AboutHero.tsx`
- **Usage**: Team photo placeholder in hero section
- **Original**: "1. About Hero.jpeg" (2.85 MB)
- **Dimensions**: Max width 1200px

#### 2. About Story - Story Illustration
- **File**: `src/assets/images/about/about-story.jpg` (99KB)
- **Component**: `AboutStory.tsx`
- **Usage**: Story illustration placeholder
- **Original**: "2. About Story.jpeg" (2.14 MB)
- **Dimensions**: Max width 1000px

#### 3. About Alternative
- **File**: `src/assets/images/about/about-alternative.jpg` (126KB)
- **Usage**: Alternative about page image (backup/future use)
- **Original**: "2. About Alternative.jpeg" (2.39 MB)
- **Dimensions**: Max width 1200px

---

### Contact Page Images (1 image)

#### 4. Contact Info - Map Illustration
- **File**: `src/assets/images/contact/contact-map.jpg` (21KB)
- **Component**: `ContactInfo.tsx`
- **Usage**: Map illustration placeholder
- **Original**: "3. Contact Info.jpg" (36KB - already optimized)
- **Dimensions**: Max width 800px

---

### Buddzee Page Images (6 UI mockups)

All Buddzee use case images are for the `BuddzeeUseCases.tsx` component showing product UI mockups.

#### 5. Campaigns UI Mockup
- **File**: `src/assets/images/buddzee/use-case-campaigns.jpg` (32KB)
- **Component**: `BuddzeeUseCases.tsx`
- **Usage**: Campaigns/Insights UI mockup
- **Original**: "4a. Campains.jpeg" (2.55 MB)

#### 6. Dashboard UI Mockup
- **File**: `src/assets/images/buddzee/use-case-dashboard.jpg` (33KB)
- **Component**: `BuddzeeUseCases.tsx`
- **Usage**: Client Dashboard UI mockup
- **Original**: "4a. Client Dashboards.jpeg" (2.29 MB)

#### 7. Custom App UI Mockup
- **File**: `src/assets/images/buddzee/use-case-custom-app.jpg` (18KB)
- **Component**: `BuddzeeUseCases.tsx`
- **Usage**: Custom App UI mockup
- **Original**: "4a. Custom App.jpeg" (2.12 MB)

#### 8. Sync Products UI Mockup
- **File**: `src/assets/images/buddzee/use-case-sync.jpg` (33KB)
- **Component**: `BuddzeeUseCases.tsx`
- **Usage**: Product Sync UI mockup
- **Original**: "4a. Sync Products.jpeg" (2.48 MB)

#### 9. Automated Report UI Mockup
- **File**: `src/assets/images/buddzee/use-case-report.jpg` (36KB)
- **Component**: `BuddzeeUseCases.tsx`
- **Usage**: Automated Report UI mockup
- **Original**: "4c. Automated Report.jpeg" (2.48 MB)

#### 10. Lookup Tool UI Mockup
- **File**: `src/assets/images/buddzee/use-case-lookup.jpg` (35KB)
- **Component**: `BuddzeeUseCases.tsx`
- **Usage**: Lookup Tool UI mockup
- **Original**: "4c. Lookup Tool.jpeg" (2.40 MB)

---

### Hero Background Images (3 images)

These are optional background images for hero sections. Can be used as background images or decorative elements.

#### 11. Home Hero Background
- **File**: `src/assets/images/backgrounds/home-hero-bg.jpg` (76KB)
- **Component**: `HomeHero.tsx` (optional)
- **Usage**: Background image for home hero
- **Original**: "6a. Home Hero Background.jpeg" (2.36 MB)
- **Dimensions**: Max width 1920px

#### 12. Buddzee Hero Background
- **File**: `src/assets/images/backgrounds/buddzee-hero-bg.jpg` (56KB)
- **Component**: `BuddzeeHero.tsx` (optional)
- **Usage**: Background image for Buddzee hero
- **Original**: "6c. Buddzee Dark Background.jpeg" (2.89 MB)
- **Dimensions**: Max width 1920px

#### 13. Vibe Coding Hero Background
- **File**: `src/assets/images/backgrounds/vibe-hero-bg.jpg` (113KB)
- **Component**: `VibeHero.tsx` (optional)
- **Usage**: Background image for Vibe Coding hero
- **Original**: "6d. Vibe Coding Background.jpeg" (2.96 MB)
- **Dimensions**: Max width 1920px

---

## 🔧 Component Update Priority

### High Priority (Currently Placeholder)

1. **AboutHero** - Replace team photo placeholder with `about-hero.jpg`
2. **AboutStory** - Replace story illustration placeholder with `about-story.jpg`
3. **ContactInfo** - Replace map placeholder with `contact-map.jpg`
4. **BuddzeeUseCases** - Replace 3 UI mockup placeholders with actual images

### Medium Priority (Optional Enhancement)

5. **Hero Backgrounds** - Add background images to hero sections (Home, Buddzee, Vibe Coding)

---

## 📝 Implementation Notes

### For GitHub Hosting
- All images are in `src/assets/images/`
- Use GitHub raw URLs for production (Ontraport):
  ```
  https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/[path]
  ```
- Use local paths for dev preview:
  ```
  /src/assets/images/[path]
  ```

### Buddzee Use Cases Mapping

The component currently shows 3 use case cards. Map the 6 UI mockups as follows:

**Current Placeholders:**
1. **Insight Dashboard** → use `use-case-dashboard.jpg` or `use-case-campaigns.jpg`
2. **Smart Automation** → use `use-case-sync.jpg` or `use-case-custom-app.jpg`
3. **Live Dashboard** → use `use-case-report.jpg` or `use-case-lookup.jpg`

**Alternative:** Update component to show all 6 mockups in a 2-row grid

---

## 🎨 Optimization Stats

| Category | Files | Original Size | Optimized Size | Reduction |
|----------|-------|--------------|----------------|-----------|
| About | 3 | 7.38 MB | 0.39 MB | 94.7% |
| Contact | 1 | 0.04 MB | 0.02 MB | 41.4% |
| Buddzee | 6 | 14.32 MB | 0.19 MB | 98.7% |
| Backgrounds | 3 | 8.21 MB | 0.25 MB | 97.0% |
| **TOTAL** | **13** | **29.95 MB** | **0.83 MB** | **97.2%** |

---

## 🚀 Next Steps

1. ✅ Images optimized and organized
2. ⏳ Update component code to reference images
3. ⏳ Commit images to repository
4. ⏳ Push to GitHub for raw URL access
5. ⏳ Test in dev environment
6. ⏳ Deploy updated components to Ontraport

---

**Generated**: 2026-02-07
**Script**: `optimize_images.py`
