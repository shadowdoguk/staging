# Studio System — Design Language Specification
**Version:** 1.0 | **Reference:** cabanana.pt | **Created:** 2026-04-16

---

## 1. Reference Analysis

### What Makes the Reference Feel Like It Does

The reference (Cabanana Atelier — interior design studio) is a warm, editorial, image-led single-page site with:
- **Warm neutral palette** — cream backgrounds, terracotta/stone accents, near-black text
- **Serif display type** — large, confident headlines that feel curated rather than corporate
- **Generous whitespace** — content breathes; nothing feels cramped
- **Full-bleed imagery** — hero and section images fill their containers edge-to-edge
- **Slow, deliberate pacing** — long-scroll sections with lots of negative space
- **Minimal navigation** — just 3–5 items; logo/name top-left, hamburger mobile
- **Overlay menu** — full-screen dark takeover on mobile nav open
- **Understated CTAs** — text links or small outlined buttons, never aggressive
- **Studio credibility** — short "about" paragraph, contact info as the conversion point

### Structural DNA (What to Extract)
```
Homepage flow:
  Hero (full-viewport image → studio name + tagline)
  → Intro statement (1–2 sentences, large type, centered)
  → Project showcase (asymmetric image grid, 2–4 items)
  → Services strip (horizontal scroll or 3-column icons)
  → About snippet (split: image left, text right)
  → Contact CTA (full-width warm background)
  → Footer (minimal: address, email, social placeholders)
```

---

## 2. Design Principles

1. **Image sovereignty** — images are first-class content, never decoration
2. **Warm minimalism** — every element earns its place; remove before adding
3. **Editorial pacing** — alternating dense/spacious sections create rhythm
4. **Type as texture** — large serif headlines become visual elements
5. **Trust through restraint** — quiet confidence > loud salesmanship
6. **Mobile-first but desktop-honouring** — same content, not different designs
7. **Performance默认值** — no heavy libraries; plain HTML+CSS+JS

---

## 3. Token System

### Colors
```
--color-bg:           #FAF7F2   /* warm off-white parchment */
--color-bg-alt:       #F0EBE3   /* slightly darker warm cream */
--color-surface:      #FFFFFF   /* pure white for cards/overlays */
--color-text:         #1A1A18   /* warm near-black */
--color-text-muted:   #6B6560   /* warm grey for secondary text */
--color-accent:       #C4956A   /* terracotta/stone — THE signature */
--color-accent-dark:  #A67850   /* hover state for accent */
--color-border:       #E2DDD6   /* subtle warm divider */
--color-dark:         #1A1A18   /* dark sections (menu overlay, footer) */
--color-dark-text:    #FAF7F2   /* text on dark backgrounds */
```

### Typography
```
--font-display:  'Cormorant Garamond', Georgia, serif
--font-body:     'DM Sans', system-ui, sans-serif

--text-xs:   0.75rem   /* 12px — captions */
--text-sm:   0.875rem  /* 14px — meta, labels */
--text-base: 1rem      /* 16px — body */
--text-lg:   1.125rem /* 18px — large body */
--text-xl:   1.5rem   /* 24px — sub-headings */
--text-2xl:  2rem      /* 32px — section titles */
--text-3xl:  3rem      /* 48px — page headings */
--text-4xl:  4.5rem    /* 72px — hero display */
--text-5xl:  6rem      /* 96px — maximum impact */

--leading-tight:  1.1
--leading-snug:   1.3
--leading-normal: 1.6
--leading-loose:  1.8

--tracking-tight:  -0.03em
--tracking-normal:  0
--tracking-wide:    0.08em
--tracking-widest:  0.15em
```

### Spacing (8px base unit)
```
--space-1:   0.25rem  /* 4px */
--space-2:   0.5rem   /* 8px */
--space-3:   0.75rem  /* 12px */
--space-4:   1rem      /* 16px */
--space-6:   1.5rem    /* 24px */
--space-8:   2rem      /* 32px */
--space-12:  3rem      /* 48px */
--space-16:  4rem      /* 64px */
--space-20:  5rem      /* 80px */
--space-24:  6rem      /* 96px */
--space-32:  8rem      /* 128px */
--space-40:  10rem     /* 160px */
```

### Radius
```
--radius-sm:   2px
--radius-md:   4px
--radius-lg:   8px
--radius-xl:   16px
--radius-full: 9999px
```

### Borders
```
--border-width:  1px
--border:        var(--border-width) solid var(--color-border)
--border-accent: var(--border-width) solid var(--color-accent)
```

### Shadows
```
--shadow-sm:  0 1px 3px rgba(26,26,24,0.06)
--shadow-md:  0 4px 16px rgba(26,26,24,0.08)
--shadow-lg:  0 12px 40px rgba(26,26,24,0.12)
--shadow-xl:  0 24px 64px rgba(26,26,24,0.16)
```

### Motion
```
--ease-out:    cubic-bezier(0.16, 1, 0.3, 1)
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)

--duration-fast:   150ms
--duration-base:   300ms
--duration-slow:   600ms
--duration-slower: 1000ms

Fade in on scroll: opacity 0→1, translateY 24px→0, 600ms ease-out
Stagger children: 80ms delay between items
Image hover: scale 1→1.03, 400ms ease-out
Link underline: width 0→100%, 200ms ease-out from left
```

---

## 4. Navigation System

### Desktop (≥768px)
- Fixed or sticky header, 80px tall
- Logo/brand name: top-left (font-display, text-lg, letter-spacing wide)
- Nav links: right-aligned, font-body text-sm, tracking-wide, uppercase
- Active link: accent color + thin underline
- No background on header — transparent over hero, solid bg on scroll
- Transition: background 300ms ease when scrolled past hero

### Mobile (<768px)
- Same header but nav links hidden
- Hamburger icon (3 lines → X animation), 24×24 touch target
- Menu: full-screen overlay, dark background (#1A1A18), centered links
- Mobile nav links: font-display text-3xl, staggered entrance
- Close: tap X, tap link, or tap outside

### Active States
- Current page link: `--color-accent` color
- Hover: accent color transition 150ms

### Open/Close Behavior
```
Open:  overlay opacity 0→1, links translateY(20px)→0, stagger 60ms
Close: reverse, faster (200ms)
Body scroll: locked while open
```

---

## 5. Component Inventory

### 5.1 Header
- Height: 80px desktop / 64px mobile
- Padding: 0 var(--space-8) vertical center
- Logo: brand name in font-display
- States: transparent (over hero), solid (scrolled), overlay-open (hidden)

### 5.2 Menu Overlay
- Full viewport coverage, z-index 1000
- Background: var(--color-dark)
- Links: centered, font-display, text-3xl, color var(--color-dark-text)
- Close button: top-right, X icon, 48px touch target
- Backdrop: none needed (solid fill)

### 5.3 Hero / Intro Block
- Full viewport height (100svh minimum)
- Image: full-bleed, object-fit cover, no border-radius
- Overlay (optional): subtle gradient bottom for text legibility
- Headline: font-display text-4xl–text-5xl, tracking-tight, color light/dark
- Sub-tagline: font-body text-lg, color muted
- Scroll indicator: small animated chevron or line

### 5.4 Section Header
- Eyebrow label: font-body text-xs, uppercase, tracking-widest, accent color
- Heading: font-display text-3xl–text-4xl, tracking-tight
- Optional intro paragraph: font-body text-lg, max-width 60ch
- Alignment: left or center (controlled by data attribute)

### 5.5 Project Showcase Block
- Asymmetric grid: 2 columns desktop, 1 mobile
- Alternating: large image left + 2 small right, then flip
- Image hover: scale 1.03, 400ms ease-out, overflow hidden
- Project meta: category label (accent), title (display), year (muted)
- Optional: short description text below title

### 5.6 Image Gallery / Carousel
- Horizontal scroll container with snap points
- Images: 16:9 or 4:3 ratio, full-height in viewport
- Navigation: subtle prev/next arrows or dot indicators
- Lightbox: click to open full-screen, swipe/arrow nav, close on X or outside click
- Desktop: keyboard accessible (arrow keys)

### 5.7 CTA Link / Button Styles
**Text Link (primary):**
- Font-body text-sm, uppercase, tracking-wide
- Accent color, no underline default
- Hover: underline slides in from left (200ms)
- Arrow icon optional (→)

**Outlined Button:**
- Padding: var(--space-3) var(--space-6)
- Border: 1px solid current color
- Border-radius: var(--radius-sm)
- Hover: background fills with accent, text inverts

**Solid Button:**
- Padding: var(--space-4) var(--space-8)
- Background: var(--color-accent)
- Text: var(--color-dark) or white
- Border-radius: var(--radius-sm)
- Hover: darken background 10%

### 5.8 Text Content Block
- Max-width: 65ch for readability
- Body: font-body text-base, leading-loose
- Blockquote: font-display text-xl, italic, left border accent
- Lists: custom bullets (small accent square)

### 5.9 Testimonial / Quote Block
- Large opening quote mark in accent (font-display, text-8xl)
- Quote text: font-display text-2xl, italic
- Attribution: font-body text-sm, muted, tracking-wide
- Centered layout, generous vertical padding

### 5.10 Contact Details Block
- Grid: address | email | phone (3 columns desktop, stacked mobile)
- Each: icon + label + value
- Icon: small, accent color, 20×20
- Value: font-body text-base, dark color

### 5.11 Enquiry Form
- Fields: Name, Email, Subject (optional), Message
- Style: minimal — bottom border only (no box)
- Label: above field, text-xs, uppercase, tracking-wide, muted
- Focus: border transitions to accent color
- Submit: solid accent button (see 5.7)
- States: loading (spinner in button), success (inline message), error (red border + message)
- No placeholder text (labels only) — accessibility best practice

### 5.12 Footer
- Background: var(--color-dark)
- Text: var(--color-dark-text)
- Layout: logo/tagline left, nav links center, social/legal right (3 columns)
- Bottom bar: copyright, minimal
- Padding: var(--space-16) top/bottom

---

## 6. Page Templates

### 6.1 Home
```
Sections in order:
  [Header]
  [Hero — full viewport, image + headline + tagline]
  [Intro Statement — centered, large text, 1-2 sentences]
  [Project Showcase — 4 projects in asymmetric grid]
  [Services Strip — 3 columns with icons + short descriptions]
  [About Snippet — image left 40%, text right 60%]
  [Contact CTA — full width, warm background, form or email link]
  [Footer]
```

### 6.2 About / Studio
```
  [Header]
  [Hero — shorter, ~60vh, image or split layout]
  [Studio Statement — large centered text block]
  [Team / Story — alternating image + text sections]
  [Values — 3 columns with icons]
  [Contact CTA]
  [Footer]
```

### 6.3 Project / Case-Study
```
  [Header]
  [Project Hero — full width image, title overlay bottom-left]
  [Project Meta — category, year, client, location in a row]
  [Challenge — 2-column text + image]
  [Solution — full width image or gallery]
  [Results — metrics or testimonial quote]
  [Next Project — full-bleed teaser with next project image]
  [Footer]
```

### 6.4 Services
```
  [Header]
  [Hero — short, headline + intro paragraph]
  [Service 1 — image left, description right]
  [Service 2 — flipped]
  [Service 3 — image left, description right]
  [Process Strip — numbered steps 01 02 03]
  [Contact CTA]
  [Footer]
```

### 6.5 Contact
```
  [Header]
  [Hero — short, headline "Let's Talk"]
  [Contact Details — 3 column grid]
  [Enquiry Form — full width]
  [Map or Studio Image — optional full-width]
  [Footer]
```

---

## 7. Documentation Notes

### What Makes the System Feel Like the Reference
- **Serif + sans pairing** — display serif for headings creates warmth and editorial authority
- **Terracotta accent** — the single warm accent color is the emotional signature
- **Generous section padding** — 96–160px between sections creates breathing room
- **Full-bleed images** — no bordered or card-contained images in showcase
- **Slow-motion feel** — scroll-driven fade-in animations make browsing feel luxurious
- **Dark overlay menu** — the contrast of a full dark menu against warm light pages creates drama

### What Can Be Customized Safely
- Brand name + logo (replaces top-left wordmark)
- Hero + showcase images (swap for client imagery)
- Color accent — can shift terracotta to sage/charcoal/navy as brand allows
- Typography scale — increase or decrease display size for brand personality
- Section order — homepage sections can be rearranged
- Number of projects in showcase grid
- Form fields — add/remove per business need
- Footer links — swap for actual nav/legal/social

### What Must Remain Consistent Across Future Sites
- Font pairing (Cormorant + DM Sans) — the contrast is the system identity
- Accent color treatment (borders, underlines, labels) — never replace with solid fills
- Spacing scale — always use the 8px base unit variables
- Animation timing — never speed up transitions (breaks the luxury feel)
- Image treatment — always object-fit: cover, no border-radius on showcase images
- Navigation overlay — always full dark takeover, never a drawer
- Form field style — minimal border-bottom only, never boxed fields
- CTA text — always understated ("Get in Touch" not "BUY NOW!")

---

## 8. Implementation Plan

### Phase 1 — Foundation
- [ ] `tokens/tokens.css` — all CSS custom properties
- [ ] `tokens/fonts.css` — Google Fonts import
- [ ] `tokens/reset.css` — minimal CSS reset
- [ ] `components/header/header.css + header.js`
- [ ] `components/menu-overlay/menu-overlay.css + menu-overlay.js`
- [ ] `components/footer/footer.css`

### Phase 2 — Core Components
- [ ] `components/hero/hero.css`
- [ ] `components/section-header/section-header.css`
- [ ] `components/project-showcase/project-showcase.css`
- [ ] `components/cta/cta.css`
- [ ] `components/text-block/text-block.css`
- [ ] `components/testimonial/testimonial.css`
- [ ] `components/contact-details/contact-details.css`
- [ ] `components/form/form.css + form.js`

### Phase 3 — Templates
- [ ] `pages/home/index.html` (full working page)
- [ ] `pages/about/index.html`
- [ ] `pages/project/index.html`
- [ ] `pages/services/index.html`
- [ ] `pages/contact/index.html`

### Phase 4 — Polish
- [ ] Scroll-driven entrance animations (IntersectionObserver)
- [ ] Smooth scroll behavior
- [ ] Lightbox for image gallery
- [ ] Form validation + submission handling
- [ ] Mobile menu keyboard accessibility

### Phase 5 — Documentation
- [ ] `docs/customization-guide.md`
- [ ] `docs/component-api.md`
- [ ] `docs/deployment-checklist.md`

---

## 9. Assumptions

1. Reference site is a warm interior design studio — extracted visual language applies
2. System ships as static HTML+CSS+JS (no framework) — maximum portability
3. Google Fonts loaded via CDN (Cormorant Garamond + DM Sans)
4. No CMS or backend — forms POST to a placeholder endpoint (Formspree or similar)
5. Images sourced externally (Unsplash placeholders) — must be replaced by client
6. Browser support: modern evergreen browsers (no IE11)
7. Favicon/manifest: left as placeholder for brand injection
8. SEO meta tags: placeholders to be filled per-project (title, description, OG)

---

## 10. Questions for Lancra

1. **Accent color** — keep terracotta (#C4956A) or switch to a different brand color?
2. **Logo** — text wordmark (current system) or SVG logo file to include?
3. **Form endpoint** — Formspree placeholder, or do you have a preferred form backend?
4. **Number of templates** — build all 5 now, or prioritize a subset?
5. **Animation library** — plain CSS + vanilla JS, or use a lightweight library (AOS, etc.)?
6. **Google Fonts** — are Cormorant Garamond + DM Sans approved, or different fonts preferred?
7. **Image source** — Unsplash placeholder URLs, or will client provide images upfront?
8. **Staging URL** — confirm `/studio-system/` path for this build?
