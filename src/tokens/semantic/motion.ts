'use client'

// ═══════════════════════════════════════════════════════════════
// MOTION TOKENS — Semantic Animation Configuration
// All components import from here. Never hardcode duration/ease/stagger.
// ═══════════════════════════════════════════════════════════════

import { EASE, DURATION } from '@/lib/easing'

interface MotionConfig {
  duration: number
  ease: string
  stagger?: number
  delay?: number
}

export const MOTION = {
  hero: {
    enter:        { duration: DURATION.cinematic, ease: EASE.outExpo },
    titleReveal:  { duration: 1.4, ease: EASE.outExpo, stagger: 0.035 },
    subtitle:     { duration: DURATION.slow, ease: EASE.outQuart },
    cta:          { duration: DURATION.moderate, ease: EASE.outQuart, stagger: 0.12 },
    exit:         { duration: DURATION.deliberate, ease: EASE.inOutExpo },
    parallaxBg:   { duration: 1, ease: 'none' },
  },
  ribbon: {
    /** Camera entrance — discovery phase */
    cameraEnter:   { duration: DURATION.cinematic, ease: EASE.heavyInOut },
    /** Camera orbit — cinematic arc around the sculpture */
    cameraOrbit:   { duration: 1, ease: 'none' },
    /** Ribbon opacity entrance */
    ribbonReveal:  { duration: DURATION.slow, ease: EASE.outQuart },
    /** Typography slide-in from edges */
    typeSlide:     { duration: DURATION.deliberate, ease: EASE.heavyOut },
    /** Subtitle fade */
    subtitleFade:  { duration: DURATION.slow, ease: EASE.outQuart },
    /** Gallery flatten transition */
    galleryFlatten:{ duration: DURATION.cinematic, ease: EASE.inOutExpo },
    /** Ambient float — continuous subtle motion */
    ambientFloat:  { duration: DURATION.ambient, ease: EASE.sineInOut },
    /** Glow pulse on focused card */
    glowPulse:     { duration: 3, ease: EASE.sineInOut },
    /** Scroll inertia lerp factor */
    scrollInertia: 0.045,
  },
  card: {
    enter:       { duration: DURATION.moderate, ease: EASE.outQuart },
    hover:       { duration: DURATION.fast, ease: EASE.outBack },
    hoverGlow:   { duration: DURATION.quick, ease: EASE.smooth },
    exit:        { duration: DURATION.quick, ease: EASE.inOutQuart },
    staggerIn:   { stagger: 0.08, duration: DURATION.moderate, ease: EASE.outQuart },
    focus:       { duration: DURATION.quick, ease: EASE.outBack },
  },
  scroll: {
    parallaxFast: { duration: 1, ease: 'none' },
    ribbonDolly:  { duration: 1, ease: 'none' },
    scrub:        { scrub: 1.5, duration: 1, ease: 'none' } as any,
    scrubTight:   { scrub: 0.8, duration: 1, ease: 'none' } as any,
  },
  ui: {
    fadeIn:  { duration: DURATION.quick, ease: EASE.smooth },
    slideUp: { duration: DURATION.quick, ease: EASE.outQuart },
    scaleIn: { duration: DURATION.quick, ease: EASE.outBack },
  },
  atmosphere: {
    gradient: { duration: 10, ease: EASE.sineInOut },
    particle: { duration: 6, ease: EASE.sineInOut },
    cloud:    { duration: 20, ease: EASE.sineInOut },
  },
} as const
