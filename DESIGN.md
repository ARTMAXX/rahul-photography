---
name: TRIONN
description: AI-Powered Creative Design & Development Studio — dark, minimal, editorial with extreme typographic scale
colors:
  primary: "#ffffff"
  primary-light: "#d8d8d8"
  accent: "#ffffff"
  neutral-bg: "#040508"
  neutral-text: "#d8d8d8"
  neutral-muted: "#434343"
  neutral-line: "#434343"
  surface-dark: "#0c0c0c"
  surface-card: "#111111"
  cream: "#e6e4e2"
  panel-gray: "#c8c8c8"
  grey-light: "#9c9c9c"
  glass-line: "rgba(255,255,255,0.18)"
typography:
  display:
    fontFamily: "Familjen Grotesk, familjen, sans-serif"
    fontSize: "clamp(4rem, 12vw, 12.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.03em
  headline:
    fontFamily: "Familjen Grotesk, familjen, sans-serif"
    fontSize: "clamp(2.5rem, 8vw, 7.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -0.02em
  title:
    fontFamily: "Familjen Grotesk, familjen, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.1rem)"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "Neue Haas Grotesk, neueHaas, Helvetica, Arial, sans-serif"
    fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
    color: "#d8d8d8"
  label:
    fontFamily: "Neue Haas Grotesk, neueHaas, Helvetica, Arial, sans-serif"
    fontSize: "clamp(0.75rem, 0.9vw, 0.875rem)"
    fontWeight: 500
    letterSpacing: 0.05em
    textTransform: uppercase
    color: "#9c9c9c"
  mono:
    fontFamily: "Martian Mono, martianMono, Space Mono, monospace"
    fontSize: "clamp(0.75rem, 0.9vw, 0.875rem)"
  nav:
    fontFamily: "Familjen Grotesk, familjen, sans-serif"
    fontSize: "clamp(0.875rem, 1.2vw, 1.175rem)"
    fontWeight: 400
    letterSpacing: -0.04em
    textTransform: uppercase
    color: "#ffffff"
rounded:
  sm: "4px"
  md: "6px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
  5xl: "128px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "#d8d8d8"
    rounded: "{rounded.full}"
    padding: "6px 15px"
    borderColor: "rgba(216,216,216,0.5)"
    borderWidth: "1px"
    fontFamily: "Familjen Grotesk, familjen, sans-serif"
    fontSize: "1rem"
    textTransform: uppercase
    letterSpacing: -0.02em
  button-primary-hover:
    borderColor: "#ffffff"
    textColor: "#ffffff"
  nav-link:
    fontFamily: "Familjen Grotesk, familjen, sans-serif"
    fontSize: "1.175rem"
    textTransform: uppercase
    letterSpacing: -0.04em
    color: "#ffffff"
    padding: "0"
  card:
    backgroundColor: "rgba(255,255,255,0.03)"
    textColor: "#d8d8d8"
    rounded: "{rounded.lg}"
    padding: "24px 32px"
  input-field:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    borderColor: "rgba(255,255,255,0.1)"
    borderWidth: "1px"
---

# Design System: TRIONN

## 1. Overview

**Creative North Star: "The Monochrome Atelier"**

A radically restrained, dark-editorial design language built for a creative digital studio. The canvas is near-black — not dark gray — allowing typography to become the primary visual element. There is no traditional accent color. Hierarchy is achieved through extreme size contrast, weight, tracking, and transparency. The palette is intentionally achromatic: black, white, and every gray in between.

The system explicitly rejects: colorful accents, gradients, heavy shadows, decorative elements, stock photography, and any visual that competes with typography. This is design as typographic craft — quiet, confident, uncompromising.

### Key Characteristics:
- **Extreme typographic scale** — display text reaches 150px (12.5rem). Sections titles sit at 89-94px. The size itself creates drama.
- **Achromatic palette** — the only "colors" are white, near-black, and carefully calibrated grays. No accent color exists.
- **Two-type-family system** — Familjen Grotesk for all headings (clean, geometric, understated). Neue Haas Grotesk for body (Swiss precision). Martian Mono for technical data.
- **12-column grid** — everything aligns to a disciplined 12-column grid with 22.5px gaps.
- **Transparency as depth** — depth comes from layered opacity, not shadows. Surfaces use `rgba(255,255,255, 0.03-0.06)` backgrounds.
- **Uppercase navigation** — nav links are always uppercase with tight negative tracking (-0.04em).
- **Generous whitespace** — sections breathe. The dark canvas is not filled; it's composed.

## 2. Colors

A strictly monochrome/achromatic palette. The full range is black → white through ~6 stops of gray. No hues.

### Primary
- **Pure White** (#ffffff): Used for the logo, top-level navigation text, and primary CTAs. Highest emphasis.
- **Light Gray** (#d8d8d8): Primary body text, headings, footer content. The default "on-dark" color.

### Neutral
- **Void Black** (#040508): Primary background. Near-black with a faint cool cast. The canvas.
- **Absolute Black** (#000000): Used for full-screen overlays/menus at varying opacities.
- **Deep Surface** (#0c0c0c): Secondary surface backgrounds, card containers.
- **Dark Card** (#111111): Inner card surfaces.
- **Line Gray** (#434343): Dividers, borders, muted structural lines, subdued heading text.
- **Mid Gray** (#9c9c9c): Secondary text, labels, metadata, hints. Low presence.
- **Panel Gray** (#c8c8c8): Accent surface elements, panel backgrounds.
- **Cream** (#e6e4e2): The only off-white variant, used sparingly for warmth in specific sections.

### Functional
- **Glass Line** (rgba(255,255,255, 0.18)): Subtle border/ring on glass surfaces.
- **Ink Soft** (rgba(10,10,10, 0.55)): Overlay scrim for modal/tooltip backgrounds.
- **Faint White** (rgba(255,255,255, 0.03-0.06)): Surface background for cards and elevated containers.

### Named Rules
**The No-Accent Rule.** There is no accent color. Never introduce a hue. If emphasis is needed, use size, weight, tracking, or opacity — not color.

## 3. Typography

**Display Font:** Familjen Grotesk (with sans-serif fallback)
**Body Font:** Neue Haas Grotesk (with Helvetica, Arial, sans-serif fallback)
**Mono Font:** Martian Mono (with Space Mono, monospace fallback)

**Character:** A Swiss-modernist pairing with extreme editorial confidence. Familjen Grotesk brings clean geometric proportions with subtle personality; Neue Haas Grotesk provides the precision of classic Swiss typography. Together they read as "design studio that knows what it's doing."

### Hierarchy
- **Display** (400, clamp(4rem, 12vw, 12.5rem), 0.95, -0.03em): Hero statements, brand-defining text. Never more than 2 per page. Use `text-wrap: balance`. Massive size is the point.
- **Headline** (400, clamp(2.5rem, 8vw, 7.5rem), 1, -0.02em): Section titles, key facts, impactful statements. Familjen Grotesk. Can be subdued to `color: #434343` for depth.
- **Title** (400, clamp(1.5rem, 3vw, 2.1rem), 1.2): Project titles, service names, testimonial text. Familjen Grotesk.
- **Body** (400, clamp(0.875rem, 1.2vw, 1.125rem), 1.6): Paragraphs, descriptions. Neue Haas Grotesk. Color: #d8d8d8. Cap line length at 65-75ch. `text-wrap: pretty`.
- **Label** (500, clamp(0.75rem, 0.9vw, 0.875rem), 0.05em uppercase): Metadata, tags, small print. Color: #9c9c9c. Always uppercase.
- **Nav** (400, clamp(0.875rem, 1.2vw, 1.175rem), -0.04em uppercase): Navigation links. Familjen Grotesk. Color: #ffffff.
- **Mono** (clamp(0.75rem, 0.9vw, 0.875rem)): Technical data, code, metrics. Martian Mono.

### Named Rules
**The Extreme Scale Rule.** Display text at 150px is intentional. Do not reduce it for "readability" — it's meant to overwhelm slightly. Balance with `text-wrap: balance`.

**The Uppercase Navigation Rule.** All primary nav links are uppercase. Never use sentence case in navigation. Negative tracking (-0.04em) is required for uppercase to feel intentional.

**The Mono Technical Rule.** Use Martian Mono for statistics, numbers, technical specs, and code snippets. It signals precision and engineering craft.

## 4. Elevation & Depth

Depth is conveyed through **tonal layering and transparency**, never box-shadows. No hard cast shadows on any container.

- **Surface tiers**: Void Black (#040508) → Absolute Black (overlay) → Deep Surface (#0c0c0c) → Dark Card (#111111) → Faint White (rgba(255,255,255, 0.03-0.06)). Each step up the hierarchy gets lighter.
- **Glass effect**: `backdrop-filter: blur(12px)` with `background: rgba(0,0,0,0.4)` for overlay menus and floating elements. Glass line: `rgba(255,255,255, 0.18)` border.
- **No shadows**: Zero box-shadow anywhere. Depth = opacity + blur, never shadow.
- **Text as depth**: Headings can be dropped to `color: #434343` to recede into the background, creating a layered text effect without opacity.

## 5. Components

### Buttons
- **Shape**: Fully rounded (9999px). Simple border with transparent background.
- **Primary CTA**: `border: 1px solid rgba(216,216,216,0.5)`, `background: transparent`, `color: #d8d8d8`, uppercase, Familjen Grotesk. Padding: 6px 15px.
- **Hover**: Border brightens to white, text to white.
- **No fill buttons**: All buttons are outlined. The studio ethos rejects heavy filled buttons.

### Navigation
- **Desktop**: Horizontal inline links. Uppercase, Familjen Grotesk, 1.175rem, -0.04em tracking, white on dark bg.
- **Mobile**: Full-screen overlay (bg: Absolute Black, `backdrop-filter: blur`). Links in body copy style.
- **Position**: Fixed top, transparent background.

### Cards / Containers
- **Background**: `rgba(255,255,255,0.03)` or `#111111` for darker cards.
- **Radius**: 8-12px.
- **Border**: No visible borders. Use background layering instead.
- **Padding**: 24-32px depending on content.

### Pill / Chip Elements
- **Style**: `border-radius: 9999px`, `border: 1px solid rgba(216,216,216,0.5)`, transparent bg.
- **Typography**: Familjen Grotesk, uppercase, tight tracking.
- **Hover**: Border to white.

### Grid
- **12-column grid** with `gap: 22.5px` (standard) or `37.5px` (wider spacing).
- Consistent column structure across all sections.

### Logo
- SVG wordmark in white. Clean geometric sans. Width: 94px, Height: 25px. Placed top-left in nav.

## 6. Section Patterns

### Hero
- Full-viewport height. Monochromatic. Massive display text (93.75px).
- Subtitle line: "Inspire·Innovate·Impact" with interpunct separators.
- "Start a Project" CTA + interactive element ("blast" animation).
- Est. 2012 + "14+ years shaping digital direction" as secondary text.

### About Section (Key Facts)
- Large headline (89px) with subdued color (#434343) for an elegant ghost-text effect.
- Fact grid with large numbers + labels.
- Award logos in horizontal scroll/row.
- Partner logos in scrolling marquee.

### Work / Projects
- Grid of project cards. Each has a large project title.
- "Explore project" link in subdued style.

### Services
- Service cards with Familjen Grotesk titles in white on dark.
- 6 service categories listed.

### Testimonials / Client Stories
- Large quotation-style text in Familjen Grotesk.
- Author attribution below.

### Footer
- Large heading: "Ready to build something bold?" (90px).
- Contact information (email, phone).
- Social links (LinkedIn, Facebook, Dribbble, Instagram).
- "start a collaboration" CTA.

## 7. Layout Principles

- **12-column grid** with 22.5px column gap. Column widths scale fluidly.
- **Whitespace is a design element** — generous spacing between sections (75px-112px+).
- **Content width**: max-width around 1280px, centered.
- **Typography-first**: text is the primary visual. Images are secondary.
- **No decorative illustrations** — no icons, no abstract shapes, no ornamentation.

## 8. Do's and Don'ts

### Do:
- **Do** let typography be the dominant visual element. The design is type-driven.
- **Do** use extreme size contrast — display text at 150px next to 16px body creates drama.
- **Do** keep the palette strictly monochrome. No hues, no accent colors.
- **Do** use uppercase with tight negative tracking for navigation and pills.
- **Do** use Familjen Grotesk for all headings — never Neue Haas for headings.
- **Do** use transparency and surface layering instead of shadows for depth.
- **Do** respect the 12-column grid with consistent 22.5px gaps.
- **Do** keep whitespace generous. Don't crowd the void.

### Don't:
- **Don't** introduce an accent color. No blue, red, green, gold — nothing. If something needs emphasis, make it bigger or bolder.
- **Don't** use box-shadows on any container. Depth comes from tonal layering.
- **Don't** use filled buttons. All CTAs are outlined with transparent backgrounds.
- **Don't** use icons, emojis, or decorative illustrations. The typography is the decoration.
- **Don't** use gradients, gradient text, or colorful backgrounds.
- **Don't** use sentence case for navigation links — always uppercase.
- **Don't** use images as decorative filler. If an image appears, it's content.
- **Don't** use glassmorphism as a default effect — use only for overlay menus.
- **Don't** use numbered section markers (01/02/03).
- **Don't** use card grids with identical icon+heading+text patterns.
- **Don't** use side-stripe borders or colored left/right borders.

## 9. Responsive Behavior

- **Desktop (1280px+)**: 12-column grid, full typographic scale, fixed nav.
- **Tablet (768-1280px)**: Typography scales down via clamp values. Grid maintains 12 columns with reduced gap.
- **Mobile (<768px)**: Typography reduces significantly (display text ~4rem). Navigation collapses to hamburger → full-screen overlay. Single-column layout for cards. Grid reduces to 2 or 1 columns.

## 10. Agent Prompt Guide

```
You are designing for TRIONN, a creative digital studio. Follow these rules:
- Background: near-black (#040508). NEVER use dark gray.
- Text: #d8d8d8 body, white for emphasis.
- NO accent colors. NO gradients. NO shadows. Monochrome only.
- Headings: Familjen Grotesk. Body: Neue Haas Grotesk.
- Display text can be very large (up to 12.5rem).
- Navigation is always uppercase with tight letter-spacing.
- Buttons are outlined (border, transparent bg), never filled.
- Use a 12-column grid with 22.5px gaps.
- No icons, no emojis, no decorative elements.
- Generous whitespace between sections.
```
