"use client"

import { motion } from "framer-motion"

interface TextProps {
  label: string
  /** Scale range for the breathing pulse (default: 1 to 1.15) */
  scaleRange?: [number, number]
  /** Opacity range (default: 0.7 to 1) */
  opacityRange?: [number, number]
  /** Duration of one breathe cycle (default: 2s) */
  duration?: number
  /** Stagger delay between letters (default: 0.08s) */
  staggerDuration?: number
  /** Where staggering starts from */
  staggerFrom?: "first" | "last" | "center" | number
  /** Delay between repeat cycles (default: 0.15s) */
  repeatDelay?: number
  className?: string
  onClick?: () => void
}

const BreathingText = ({
  label,
  scaleRange = [1, 1.15],
  opacityRange = [0.7, 1],
  duration = 2,
  staggerDuration = 0.08,
  staggerFrom = "first",
  repeatDelay = 0.15,
  className,
  onClick,
  ...props
}: TextProps) => {
  const getCustomIndex = (index: number, total: number) => {
    if (typeof staggerFrom === "number") {
      return Math.abs(index - staggerFrom)
    }
    switch (staggerFrom) {
      case "first":
        return index
      case "last":
        return total - 1 - index
      case "center":
      default:
        return Math.abs(index - Math.floor(total / 2))
    }
  }

  const letters = label.split("")

  return (
    <span className={className} onClick={onClick} {...props}>
      {letters.map((letter: string, i: number) => {
        const customIndex = getCustomIndex(i, letters.length)
        const delay = customIndex * staggerDuration

        return (
          <motion.span
            key={i}
            className="inline-block whitespace-pre origin-bottom"
            aria-hidden="true"
            animate={{
              scaleY: [scaleRange[0], scaleRange[1], scaleRange[0]],
              opacity: [opacityRange[0], opacityRange[1], opacityRange[0]],
            }}
            transition={{
              duration,
              ease: "easeInOut",
              repeat: Infinity,
              delay,
              repeatDelay,
            }}
          >
            {letter}
          </motion.span>
        )
      })}
      <span className="sr-only">{label}</span>
    </span>
  )
}

export { BreathingText }
