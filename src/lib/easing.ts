'use client'

// ═══════════════════════════════════════════════════════════════
// EASING TOKENS — Single Source of Truth
// All animation values MUST come from here. Never hardcode.
// ═══════════════════════════════════════════════════════════════

export const EASE = {
  outExpo:    'power4.out',
  inOutExpo:  'power4.inOut',
  outQuart:   'power3.out',
  inOutQuart: 'power3.inOut',
  outBack:    'back.out(1.7)',
  inOutBack:  'back.inOut(1.7)',
  smooth:     'power2.out',
  snappy:     'power1.out',
  /** Cinematic ease — very slow start, very fast middle, slow end */
  cinematic:  'power4.inOut',
  /** Organic sine-based ease for ambient/atmospheric motion */
  sineInOut:  'sine.inOut',
  /** Heavy quintic ease — extremely deliberate movement */
  heavyInOut: 'power5.inOut',
  heavyOut:   'power5.out',
} as const

export const DURATION = {
  instant:     0.05,  // 3 frames — micro-interaction feedback
  fast:        0.2,   // 12 frames — hover states, button presses
  quick:       0.4,   // 24 frames — small UI transitions
  moderate:    0.6,   // 36 frames — panel reveals, card entrance
  slow:        0.9,   // 54 frames — section transitions, hero reveals
  deliberate:  1.2,   // 72 frames — major scene changes
  cinematic:   1.8,   // 108 frames — full-screen reveals, logo animations
  /** Extra-long duration for ambient/atmospheric ribbon motion */
  ambient:     8.0,
  /** Ribbon scroll-dolly duration — tied to scroll progress */
  ribbonDolly: 1.0,
} as const

export const STAGGER = {
  web:     { base: 0.04, power: 1.5 },
  precise: { base: 0.08, power: 2.0 },
  fast:    { base: 0.02, power: 1.2 },
  wave:    { base: 0.06, power: 1.8 },
} as const

export type EaseToken = keyof typeof EASE
export type DurationToken = keyof typeof DURATION
