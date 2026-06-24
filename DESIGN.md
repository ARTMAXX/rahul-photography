---
name: Rahul Chanda Photography
description: Cinematic portfolio for a high-end commercial product photographer
colors:
  primary: "#c8a84b"
  primary-light: "#f0cc70"
  accent: "#e83b2c"
  ambient: "rgba(140,28,19,0.5)"
  neutral-bg: "#070707"
  neutral-text: "#f0f0f0"
  neutral-muted: "#888888"
  editorial-bg: "#F4EFE7"
  editorial-ink: "#111111"
  editorial-muted: "#666666"
  editorial-accent: "#9D8B74"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.5rem, 8vw, 7rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: -0.02em
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.75rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.01em
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(0.625rem, 0.8vw, 0.75rem)"
    fontWeight: 500
    letterSpacing: 0.2em
    textTransform: uppercase
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
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
    backgroundColor: "rgba(255,255,255,0.1)"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    height: "auto"
  button-primary-hover:
    backgroundColor: "rgba(255,255,255,0.15)"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  input-field:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
  input-field-focus:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
  card:
    backgroundColor: "rgba(255,255,255,0.03)"
    textColor: "#ffffff"
    rounded: "{rounded.xl}"
    padding: "24px 32px"
  navigation-pill:
    backgroundColor: "rgba(0,0,0,0.4)"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "8px 16px"
---

# Design System: Rahul Chanda Photography

## 1. Overview

**Creative North Star: "The Darkroom Portfolio"**

This design system treats every page view as a contact sheet in a master printer's darkroom. Deep black fields hold the viewer's eye prisoner; typography emerges with the precision of a large-format enlarger. Gold appears not as decoration but as the chemical glow of fixer under safelight — rare, intentional, luminous.

The system explicitly rejects: generic AI-generated templates, SaaS-cream backgrounds, glassmorphism-as-default, gradient text, loud or cluttered compositions, and the kind of flat dark mode that feels like a cheap tech startup. This is not a "dark theme UI." This is a cinematographer's frame, built to make the photography the sole subject.

### Key Characteristics:
- **Cinematic blacks** — the background is near-black (#070707), not dark gray. Space feels infinite.
- **Restrained accent** — Antique Gold is the single color voice, used at ≤5% of any screen. Its rarity is its power.
- **Serif authority** — large Playfair Display headings carry editorial weight. Sans-serif (Outfit) body stays clean and unobtrusive.
- **Atmospheric depth** — no hard shadows. Depth comes from blurred ambient orbs, gradient overlays, and mix-blend-difference layering.
- **Scroll-driven narrative** — every section reveals with deliberate pacing (blur-in, word-by-word, pinned sequences). No uniform stagger; each entrance fits what it reveals.

## 2. Colors

A restrained, dark-editorial palette with two accent notes. The deep black body is the stage; Antique Gold is the spotlight.

### Primary
- **Antique Gold** (#c8a84b): The single accent voice. Used for selection highlights, hover glow accents, section transitions, and the custom cursor ring. Never for body copy. Use sparingly — ≤5% of any viewport.

### Secondary (Gold Light)
- **Burnished Gold** (#f0cc70): The warm highlight variant of Antique Gold. Used for hover intensifications, cursor active states, and golden-hour thematic treatments.

### Tertiary
- **Signature Red** (#e83b2c): Reserved for critical attention — error states, urgent CTAs, or the hero's ambient gradient bleed (8c1c13). Not a general-purpose accent.
- **Ambient Crimson** (rgba(140,28,19, 0.5)): Full-opacity pinned value for the blurred gradient orbs (blur-3xl, 800-1000px) positioned behind sections. Renders as a warm atmosphere halo. The `0.5` is the full intensity; rendered opacity is 0.10-0.15 via CSS opacity on the orb element.

### Neutral
- **Pitch Black** (#070707): The primary background. Contains nearly no light. Not a dark gray — this is the paper stock of a master print.
- **Silver Fox** (#f0f0f0): Primary text color. High-contrast against the black body, but not pure white (which would glare).
- **Muted Silver** (#888888): Secondary text, labels, metadata. Low presence; never used for body copy.
- **Editorial Warmth** (#F4EFE7): A cream accent for the editorial palette (used sparingly, e.g. hero name text).
- **Muted Bronze** (#9D8B74): Editorial muted accent.

### Named Rules
**The One Voice Rule.** Antique Gold is the only accent. Signature Red may appear only in specific functional contexts. If a screen uses both gold and red, the design is over-accrued — remove one.

## 3. Typography

**Display Font:** Playfair Display (with Georgia, serif fallback)
**Body Font:** Outfit (with system-ui, sans-serif fallback)

**Character:** An editorial pairing with cinematic gravitas. Playfair Display provides old-world authority with its high contrast and elegant italics; Outfit grounds it with clean, modern geometry. Together they read as "heritage brand meets contemporary craft."

### Hierarchy
- **Display** (700, clamp(2.5rem, 8vw, 7rem), 0.9): Hero names, section titles. Always serif. Never more than 3 per page. Max clamp ceiling of 6rem (~96px). Use `text-wrap: balance`.
- **Headline** (700, clamp(1.75rem, 5vw, 3.5rem), 1.15): Section headings, featured quotes. Serif. Italic for emphasis on key phrases.
- **Title** (600, clamp(1.25rem, 2.5vw, 1.75rem), 1.3): Service names, testimonial author names. Serif.
- **Body** (400, clamp(0.875rem, 1.2vw, 1.125rem), 1.6): Paragraphs, descriptions. Sans-serif. Cap line length at 65–75ch. Use `text-wrap: pretty`.
- **Label** (500, clamp(0.625rem, 0.8vw, 0.75rem), 0.2em uppercase): Eyebrow tags, form labels, metadata, navigation links. Always uppercase with wide tracking.

### Named Rules
**The Serif Authority Rule.** All major headings use Playfair Display. Switching to Outfit for a heading creates confusion — the reader loses the editorial signal. Exception: the navigation pill may use Outfit labels.

**The Italic Emphasis Rule.** Only one italic phrase per heading. Multiple italic words in a single heading read as nervous, not designed.

## 4. Elevation

Depth is conveyed through **tonal layering and atmospheric glow**, not box-shadows. The system has a hard ban on hard cast shadows (no `box-shadow` on containers). Instead:

- **Ambient gradient orbs** — large (800-1000px), heavily blurred (`blur-3xl`), low-opacity (0.10-0.15) radial gradients positioned behind sections. Color: deep crimson-to-transparent (rgba(140,28,19, X)). These create a warm atmospheric halo without structural shadow.
- **Tonal surface layers** — inner card surfaces use `background: linear-gradient(to bottom right, rgba(255,255,255,0.03-0.04), transparent)` to create a subtle light-wrap on dark surfaces.
- **Ring edges** — instead of shadows, containers use `ring-1 ring-white/10` (or /20 for emphasis). On hover, the ring brightens (`ring-white/15` to /20) for a glow effect.
- **Mix-blend-difference** — hero text overlays use `mix-blend-difference` against the video/image layer for a self-luminous text effect.

## 5. Components

### Buttons
- **Shape:** Fully rounded (`border-radius: 9999px`). Double-bezel construction: an outer ring wrapper (p-1.5 to p-2) with a full-width inner button element.
- **Primary CTA:** Outer ring `bg-white/[0.05] ring-1 ring-white/20`. Inner button `bg-white/10`. Hover: outer ring brightens, inner `bg-white/15`. Active: `scale-95`.
- **Arrow icon:** Inner circle (w-6 h-6, `bg-white/20`, rounded-full) containing "→". On hover: translates right and up slightly.
- **Loading state:** Spinning border animation replaces arrow. Disabled state reduces opacity.
- **Success state:** Checkmark replaces arrow, text changes to "Message Sent Successfully!"

### Inputs / Fields
- **Shape:** Rounded-xl (12px). Double-bezel construction: outer ring wrapper (p-1) with inner input field.
- **Default:** Outer `bg-white/[0.02] ring-1 ring-white/10`. Inner input is transparent with white text.
- **Focus:** Outer ring grows to `ring-2 ring-white/20` with brighter background (`bg-white/10`).
- **Placeholder:** `color: rgba(255,255,255,0.3)` — white at 30% opacity.
- **Select dropdowns:** Same visual treatment as inputs. Dropdown options use black background.
- **Textareas:** Same treatment. `resize-none` by default.

### Cards / Containers
- **Corner Style:** Rounded-2xl (16px) to rounded-[2.5rem] (40px) depending on prominence.
- **Background:** `rgba(255,255,255,0.02-0.04)` with subtle gradient wrap (`from-white/[0.03] to-transparent`).
- **Shadow Strategy:** None — see Elevation section. Depth from ring-1 white/10 and the gradient overlay.
- **Border:** No visible borders. Ring edges serve as border.
- **Internal Padding:** Scale from p-6 (24px) to p-12 (48px) depending on content density.

### Navigation
- **Style:** Floating centered pill at top of viewport. Fixed position, z-50.
- **Background:** `rgba(0,0,0,0.4)` with `backdrop-filter: blur(24px)`. ring-1 white/10.
- **Typography:** Outfit, 14px (desktop), uppercase, tracking-wider. Active link has `bg-white/20` background.
- **Desktop:** Inline horizontal links. **Mobile:** Hamburger menu triggers full-screen overlay (bg-black/95, backdrop-blur-3xl) with staggered animated links.
- **Hover:** Links transition to italic (a deliberate editorial micro-interaction).

### Gallery (Pinned Scroll)
- **Full-viewport height**, pinned for the scroll duration. Images fade/scale in sequence over 300% scroll distance.
- **Title overlay:** `position: absolute`, centered, `18vw` serif italic, `mix-blend-difference` white.

### Custom Cursor
- Default cursor is visible on non-interactive elements. The native cursor shows by default (`cursor: auto` on html).
- Interactive elements (`a, button, [role="button"], input, select, textarea, label, [data-cursor]`) get `cursor: none`, hiding the native cursor so the custom cursor is the sole pointer.
- A custom pointer element (Framer Motion spring, `damping: 45, stiffness: 350, mass: 0.5`) tracks mouse movement. Interactive elements get state-based changes (ring expansion, color shift to Antique Gold, view/explore/close variants).
- On mobile, standard touch behavior applies.

### Accordion (Services)
- Double-bezel rounded-[2rem] containers. Expand/collapse with Framer Motion height animation.
- Expanded state: outer ring brightens to `ring-2 ring-white/20`, icon button rotates 180°.
- Content: Two-column grid (Description + Deliverables) with a Pricing footer strip.

## 6. Do's and Don'ts

### Do:
- **Do** let the photography dominate every section. Layout frames the image; the image is never decorative filler.
- **Do** use Antique Gold sparingly — one accent element per viewport is the ceiling.
- **Do** use Playfair Display for all major headings. Its serif authority is the brand.
- **Do** use `mix-blend-difference` for text overlays on full-bleed images/video.
- **Do** animate reveals with intentional pacing — blur-in, word-by-word entrances, pinned sequences. Each section gets its own rhythm.
- **Do** respect `prefers-reduced-motion`: all animations should degrade gracefully to crossfades or instant reveals.
- **Do** keep the navigation accessible and clickable despite the custom cursor.
- **Do** use `text-wrap: balance` on h1–h3; `text-wrap: pretty` on body paragraphs.

### Don't:
- **Don't** use box-shadows on containers. Depth comes from tonal layering, gradient orbs, and ring edges.
- **Don't** use glassmorphism as a default decorative effect.
- **Don't** use gradient text (`background-clip: text` + gradient).
- **Don't** use side-stripe borders (colored `border-left`/`border-right` greater than 1px).
- **Don't** put an uppercase tracking eyebrow above every section — one or two per page max.
- **Don't** use numbered section markers (01/02/03) as default scaffolding.
- **Don't** use more than one italic phrase per heading.
- **Don't** use card grids with identical icon+heading+text patterns.
- **Don't** use generic cream/beige/sand backgrounds — this isn't a SaaS product.
- **Don't** use loud, cluttered compositions. Every element must earn its place.
- **Don't** overflow text — test heading clamp values at all breakpoints.
- **Don't** nest cards. Cards inside cards are always wrong.
- **Don't** use flat, utilitarian dark mode. The dark here must feel cinematic and intentional.
