---
name: tasteskills
description: Applies 'taste-skill' design rules: infer design language (vibe, page type), set dials (VARIANCE, MOTION, DENSITY), and avoid generic templated UI. Use for frontend coding tasks.
on_mention:
  brandkit: brandkit
  design-taste: design-taste-frontend
  design-taste-v1: design-taste-frontend-v1
  full-output: full-output-enforcement
  gpt-taste: gpt-taste
  high-end: high-end-visual-design
  image-to-code: image-to-code
  img-web: imagegen-frontend-web
  img-mobile: imagegen-frontend-mobile
  brutalist: industrial-brutalist-ui
  minimalist: minimalist-ui
  redesign: redesign-existing-projects
  stitch: stitch-design-taste
---

# Taste Skill

Apply these design principles to all frontend generation to ensure high-quality, premium UIs and avoid generic "slop".

## 0. Brief Inference (Read the room)
Before coding, always:
- Infer **Page Kind** (SaaS, portfolio, editorial, etc.)
- Identify **Vibe words** (minimalist, brutalist, premium, Linear-style, etc.)
- Analyze **Reference signals** (URLs, screenshots, named brands).

## 1. Dials
Set these parameters based on the inferred design language:
- **DESIGN_VARIANCE** (1-10): Layout experimentation (1=centered/clean, 10=asymmetric/modern).
- **MOTION_INTENSITY** (1-10): Animation depth (1=hover, 10=scroll/magnetic).
- **VISUAL_DENSITY** (1-10): Information per viewport (1=spacious, 10=dense dashboards).

## 2. Design Rules
- Avoid default aesthetics / "slop".
- Focus on strong typography, deliberate motion, and intentional spacing.
- Use real design systems when applicable.
- Do a strict pre-flight check on design hierarchy before generating code.
