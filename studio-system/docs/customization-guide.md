# Studio System — Customization Guide

## What Makes the System Feel Like the Reference

The following elements are the non-negotiables — they are what creates the editorial, warm, studio feel:

| Element | Setting | Why |
|---------|---------|-----|
| Fonts | Cormorant Garamond + DM Sans | The serif/sans pairing is the emotional core |
| Accent | #C4956A (terracotta) | Single warm accent — never remove |
| Spacing | 8px base unit variables | Creates consistent rhythm |
| Animations | 300–600ms ease-out | Fast = loses luxury feel |
| Overlay menu | Full dark (#1A1A18) takeover | Creates drama against warm light pages |
| Image treatment | object-fit: cover, no border-radius | Editorial, not card-based |
| Form fields | Bottom border only | Minimal, not boxed |
| CTAs | Understated text links / outlined buttons | Never shout |

---

## What Can Be Customized Safely

### Colors
- Change `--color-accent` to any brand color (sage, charcoal, navy all work well)
- Adjust `--color-bg` for cooler/warmer whites
- Update dark section colors (`--color-dark`) for different brand contexts

### Typography Scale
- Display sizes use `clamp()` — already responsive
- Increase/decrease `--text-4xl` and `--text-5xl` root values for brand personality

### Brand Identity
- Replace the text wordmark (`.header__logo`) with an SVG logo
- Update footer brand name and tagline
- Swap placeholder contact details for real ones

### Content
- All images: replace Unsplash URLs with client-provided images
- All text: replace placeholder with real brand copy
- Services/descriptions: adapt to actual business offerings

### Layout
- Homepage section order: rearrange or remove sections as needed
- Project grid: adjust number of items or grid columns
- About split: change image/text ratio (currently 40/60)

### Form
- Add/remove fields
- Change endpoint to Formspree, Netlify Forms, or custom backend
- Add reCAPTCHA or similar if needed

---

## What Must Remain Consistent

1. **Font pairing** — always Cormorant Garamond (display) + DM Sans (body). Changing breaks the editorial character.
2. **Motion timing** — never go below 150ms transitions. Fast = cheap feel.
3. **Overlay menu** — always full dark takeover, never a side-drawer.
4. **Accent color usage** — use for labels, borders, underlines, quote marks. Never solid fills for large areas.
5. **Image sizing** — always `object-fit: cover` for showcase images. Never stretch or letterbox.
6. **Form style** — bottom border only. Never add box borders.
7. **CTA language** — keep it understated: "Get in Touch", "Start a conversation", "View all work". Never: "BUY NOW", "START NOW", "GET STARTED TODAY".

---

## Per-Brand Checklist

Before launching a new brand site:

- [ ] Replace `Studio` brand name across all pages
- [ ] Replace contact details (address, email, phone)
- [ ] Replace all Unsplash images with real client photography
- [ ] Set correct SEO meta tags (title, description, OG)
- [ ] Set correct `lang` attribute on `<html>`
- [ ] Update copyright year
- [ ] Add real favicon
- [ ] Connect enquiry form to real endpoint
- [ ] Check all navigation links point to correct pages
- [ ] Verify fonts load correctly (check for 404 on Google Fonts CDN)
- [ ] Test mobile: hamburger, overlay, scroll, all links
- [ ] Test form submission (success + error states)
- [ ] Check image alt text is descriptive (not default alt="" placeholder)
