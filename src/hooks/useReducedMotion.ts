'use client'

// ═══════════════════════════════════════════════════════════════
// REDUCED MOTION HOOK
// Respects user's prefers-reduced-motion setting.
// All animation components MUST check this before creating animations.
// ═══════════════════════════════════════════════════════════════

import { useEffect, useState } from 'react'
import gsap from 'gsap'

export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mq.matches)

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReduced(e.matches)
      if (e.matches) {
        // Kill all active GSAP tweens when reduced motion is enabled
        gsap.globalTimeline.getChildren(true).forEach(t => {
          t.progress(1)
          t.kill()
        })
      }
    }

    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return prefersReduced
}
