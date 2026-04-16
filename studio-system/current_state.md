# Studio System — Current State

## Overview
Reusable website system based on cabanana.pt visual language. Captures warm, editorial, minimal, studio-style feel while removing business-specific content.

## Status
✅ Complete and live on staging

## Staging
- URL: http://100.84.172.30/studio-system/
- All 5 pages serving HTTP 200

## Workspace
- `~/.openclaw/workspace-spidey/projects/studio-system/`

## Reference
- cabanana.pt (interior design studio — Portuguese)

## Design Language
- Warm neutral palette: #FAF7F2 background, #C4956A terracotta accent, #1A1A18 near-black text
- Fonts: Montserrat (300,400,500,600,700) — single font, matching cabanana.pt canonical design system
- Motion: 300–600ms ease-out — luxury feel, NOT snappy
- Full dark overlay menu for mobile drama

## What's Built
- Tokens: colors, typography, spacing, radius, borders, shadows, motion
- Components: 13 components (header, menu overlay, hero, section header, project showcase, CTA, text block, testimonial, contact details, enquiry form, about snippet, services strip, footer)
- Pages: Home, About, Work, Services, Contact
- Docs: SYSTEM.md, docs/customization-guide.md

## Assumptions Made
- Static HTML+CSS+JS (no framework) for max portability
- Google Fonts CDN (Montserrat)
- Form endpoint = Formspree placeholder (needs real ID per client)
- Unsplash placeholder images — must be replaced with real client photography
- Favicon/SEO meta = placeholder

## Open Questions
- Accent color — keep terracotta or shift per brand?
- Logo — text wordmark or SVG?
- Form endpoint — Formspree or other?
- Build all 5 templates or prioritize subset?

## Design Non-Negotiables (What Makes It Work)
1. Font pairing never changes — IS the system identity
2. Transitions never speed up — breaks luxury feel
3. Accent used only for labels/borders/underlines — never solid fills on large areas
4. Image treatment always object-fit: cover, no border-radius
5. Navigation always full dark takeover — never a side drawer
6. Form fields always bottom-border only — never boxed
7. CTA language always understated — "Get in Touch", not "BUY NOW"

## Next Steps (if requested)
- Add lightbox for image gallery
- Add `docs/component-api.md` and `docs/deployment-checklist.md`
- Per-brand customization (color swap, real images, actual copy)
- Integration into a specific domain