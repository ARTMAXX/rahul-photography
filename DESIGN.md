# Rahul Chanda Photography — Design System

## 1. Brand Essence

**Positioning:** High-end commercial product photographer based in Dehradun, India. The website IS the portfolio — design quality directly equals perceived photography quality.

**Design Ethos:** Cinematic precision luxe. Every pixel communicates that Rahul's photography is premium, deliberate, and technically flawless. The site itself is proof of craft.

---

## 2. Color System

### Primary Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#070707` | Page root, deepest black |
| `--foreground` | `#f0f0f0` | Primary text, near-white |
| `--gold` | `#c8a84b` | Brand accent, CTAs, highlights |
| `--gold-light` | `#f0cc70` | Hover states, secondary gold |
| `--red-accent` | `#e83b2c` | Rare accent, alerts |

### Surface Colors
| Token | Value | Usage |
|-------|-------|-------|
| Hero bg | `#0a0a0a` | Section backgrounds |
| Card bg | `#0f0f0f` | Elevated surfaces |
| Border | `rgba(255,255,255,0.06)` | Subtle dividers |
| Border hover | `rgba(255,255,255,0.1)` | Interactive states |
| Text muted | `rgba(255,255,255,0.4–0.6)` | Secondary text |

### Gradient Language
- **Hero background:** `from-[#0a0a0a] via-[#8c1c13] to-[#0a0a0a]` (dark red atmospheric wash)
- **Gold gradient borders:** `from-[#c8a84b]/30 via-white/10 to-transparent`
- **Service card expanded:** `from-[#c8a84b]/30 via-white/10 to-transparent`
- **Selection color:** `rgba(200, 168, 75, 0.25)` (gold tint)

---

## 3. Typography

### Font Families
| Role | Font | Fallback | CSS Variable |
|------|------|----------|--------------|
| Editorial / Headlines | Playfair Display | Georgia, serif | `--font-editorial` |
| Body / UI | Outfit | system-ui, sans-serif | `--font-sans` |
| Code / Mono | SF Mono, Fira Code | ui-monospace | `--font-mono` |

### Type Scale
| Element | Size | Weight | Style | Notes |
|---------|------|--------|-------|-------|
| Hero H1 | `12–13vw` | serif | normal + italic | "Rahul" normal, "Chanda" italic |
| Section H2 | `clamp(3rem, 10vw, 8rem)` | serif 700 | normal | Services, Contact |
| About H2 | `3–5xl` | serif 700 | normal | Word-by-word blur reveal |
| Body text | `sm–base` | sans 400 | normal | `leading-[1.6]` |
| Labels | `10–11px` | sans 500 | uppercase | `tracking-[0.25em]` |
| Nav links | `10px` | sans | uppercase | `tracking-widest` |
| Footer text | `11–12px` | sans | uppercase | `tracking-[0.2em]` |

### Typography Rules
- **Never wrap headlines beyond 6 lines** — editorial typography demands tight control
- **Serif for impact, sans for information** — hard separation
- **Italic for emphasis within headlines** — Playfair Display italic is a design element
- **`mix-blend-difference`** on hero text for cinematic overlay effect

---

## 4. Layout System

### Grid
- **Max width:** `1400px` (CSS variable `--max-width`)
- **Gutter:** `clamp(1.25rem, 4vw, 3rem)` (CSS variable `--gutter`)
- **Sections:** Full-width backgrounds, content max-width constrained

### Spacing Philosophy
- **Vertical rhythm:** Large section padding (`py-32 md:py-40`)
- **Asymmetric layouts:** About section uses `45vh 4rem 40vh` padding
- **Breathing room:** Services cards use `space-y-3 md:space-y-4`
- **Content blocks:** Contact section uses `px-6 md:px-16` with generous top padding

### Responsive Breakpoints
- Mobile: `< 768px`
- Tablet: `768px–1024px`
- Desktop: `> 1024px`

---

## 5. Animation System

### Core Principles
- **Scrub-based:** All animations tied to scroll position, not time
- **Blur-to-sharp:** Signature reveal pattern (blur 8–24px → 0px)
- **Staggered reveals:** Words and elements appear sequentially
- **No bounce/spring on scroll** — cinematic easing only

### GSAP Easings (Custom)
```javascript
CustomEase.create("cinematicSilk", "0.45, 0.05, 0.55, 0.95");
CustomEase.create("cinematicSmooth", "0.25, 0.1, 0.25, 1");
CustomEase.create("cinematicFlow", "0.33, 0, 0.2, 1");
CustomEase.create("cinematicLinear", "0.4, 0, 0.6, 1");
```

### Animation Patterns

**Hero Expand:**
- Video wrapper: `35vw × 22vh` → `100vw × 100vh` with `borderRadius: 12px → 0`
- Text slides outward (`x: ±25vw`) and fades
- Subtext fades in at 65% of timeline
- Plus marks fade out at 70%

**About Section:**
- Photo blur: `blur(20px) → blur(0px)` over full scroll range
- Words: `opacity: 0, blur(8px)` → `opacity: 1, blur(0px)` staggered at 0.02
- Sub-text: Reveals at 60% of timeline

**Services:**
- Heading: `opacity: 0, y: 80, blur(24px), rotateX: 12` → `opacity: 1, y: 0, blur(0), rotateX: 0`
- Cards: Staggered entrance with `delay: i * 0.08`
- Accordion: `height: 0 → auto` with `ease: [0.32, 0.72, 0, 1]`

**Cinematic Cylinder:**
- WebGL 3D cylinder with OGL
- Camera path: 5 waypoints with cinematic easing
- Particle system reacting to rotation velocity
- Text overlays fade in/out per perspective

### Scroll System
- **Lenis** for smooth scroll (`lerp: 0.1, duration: 1.2`)
- **ScrollTrigger** proxy for Lenis integration
- **`pin: true`** on Hero section
- **`scrub: 1–1.2`** on all scroll-triggered animations

---

## 6. Component Architecture

### Layout Components
| Component | Purpose |
|-----------|---------|
| `SmoothScroll` | Lenis wrapper with ScrollTrigger sync |
| `Header` | Animated menu (100px → 480px), hides during cylinder section |
| `CustomCursor` | Dual-element cursor (dot + ring), 4 states |
| `LightRaysOverlay` | Fixed atmospheric effect, screen blend, scroll-linked opacity |

### Section Components
| Component | Animation | Key Feature |
|-----------|-----------|-------------|
| `Hero` | GSAP pin + scrub | Expanding video card, massive typography |
| `About` | Blur reveal | Word-by-word text animation, photo blur-in |
| `CinematicCylinder` | OGL + GSAP | 3D rotating cylinder with images, 500vh scroll |
| `ServicesShowcase` | Staggered reveal | Double-bezel accordion, gold accent |
| `Testimonials` | Auto-scroll marquee | 5-column infinite scroll, hover-to-pause |
| `ContactForm` | Blur reveal | Full-screen video background, CTA |
| `AnimatedFooter` | Canvas + GSAP | ASCII art hands, character reveal |

### UI Components
| Component | Purpose |
|-----------|---------|
| `SVGPart1/2` | Flowing gold SVG paths, scroll-linked `pathLength` |
| `TestimonialsColumn` | Infinite scroll with velocity physics |
| `LightRays` | WebGL shader-based light effect |

---

## 7. Interaction Patterns

### Custom Cursor
- **Default:** 28px ring, 1px border, transparent
- **Pointer:** 48px ring, 0.6 opacity border, inner dot shrinks to 40%
- **View:** 72px ring, backdrop blur, no inner dot
- **Close:** 48px ring, 50% inner dot
- **Spring config:** `damping: 40, stiffness: 300, mass: 0.4`

### Service Accordion
- **Double-bezel:** Outer `p-[2px]` gradient border + inner rounded card
- **Expand indicator:** Chevron rotates 180°
- **Gold glow on active:** `bg-[#c8a84b]/15 ring-2 ring-[#c8a84b]/30`
- **Pricing footer:** Gradient card with "Inquire Now" CTA

### Header Menu
- **Closed:** 100px × 40px pill
- **Open:** 480px × 650px card
- **Easing:** `[0.76, 0, 0.24, 1]` (aggressive ease-in-out)
- **Auto-hide:** When in CinematicCylinder section

---

## 8. Visual Effects

### LightRays Overlay
- **Position:** Fixed, full viewport, z-index 45
- **Blend mode:** `screen` (only shows on dark areas)
- **Opacity:** Scroll-linked (0 when hero visible → 1 when hero scrolled out)
- **Color:** Cyan (`#00ffff`)
- **Parameters:** `raysSpeed: 1.5, lightSpread: 0.8, rayLength: 1.2`

### SVG Path Drawing
- Two flowing paths in gold (`#c8a84b`)
- Primary: 6px stroke, full reveal 0→50% scroll
- Secondary: 3px stroke, 60% opacity, reveal 5→55% scroll
- `pathLength` transform driven by `scrollYProgress`

### Video Backgrounds
- **Hero:** Muted loop, `opacity: 70%`, `object-fit: cover`
- **Contact:** Full-screen background with `bg-black/50` overlay
- **Autoplay:** All videos `autoPlay muted loop playsInline`

---

## 9. Responsive Behavior

### Mobile (< 768px)
- Hero text: `12vw` (not `13vw`)
- About photo: Full width, no border-radius
- Services: Single column, reduced padding
- Cylinder: `cameraZ: 6`, `fov: 50`, smaller radius
- Header: Hamburger menu

### Tablet (768–1024px)
- Cylinder: `cameraZ: 7`, `fov: 45`, medium radius
- Services: 2-column grid for deliverables

### Desktop (> 1024px)
- Full layout with asymmetric spacing
- 5-column testimonials
- Cylinder: `cameraZ: 8`, `fov: 45`, full radius

---

## 10. Performance Notes

- **WebGL:** OGL renderer with `dpr: min(devicePixelRatio, 2)`
- **Images:** `priority` on above-fold, `will-change: clip-path` globally
- **Fonts:** Next.js font loader with `display: swap`
- **Scroll:** Lenis with `autoRaf: true` for smooth 60fps
- **Animations:** All scrub-based, no time-based loops (except testimonials)
- **Cleanup:** GSAP contexts with `ctx.revert()`, OGL resource disposal

---

## 11. SEO & Schema

- **Person schema:** Rahul Chanda, Commercial Product Photographer
- **LocalBusiness:** Dehradun, India, ₹12,000–₹2,00,000+ price range
- **ProfessionalService:** Full service catalog
- **FAQPage:** 5 common questions
- **ImageGallery:** Portfolio archive
- **Canonical:** `https://rahulchandaphotography.netlify.app`
- **OG/Twitter:** Summary large image

---

## 12. Design Tokens Summary

```css
:root {
  --background: #070707;
  --foreground: #f0f0f0;
  --font-editorial: var(--font-playfair), "Playfair Display", Georgia, serif;
  --font-sans: var(--font-outfit), "Outfit", system-ui, sans-serif;
  --gold: #c8a84b;
  --gold-light: #f0cc70;
  --red-accent: #e83b2c;
  --gutter: clamp(1.25rem, 4vw, 3rem);
  --max-width: 1400px;
}
```

---

*Design system documented from source analysis of `new-design` project.*
*Last updated: 2026-07-31*
