"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Ripple {
  id: number
  x: number
  y: number
}

export function RippleEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([])

  useEffect(() => {
    const createRipple = () => {
      const newRipple: Ripple = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }

      setRipples((prev) => [...prev, newRipple])

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
      }, 4000)
    }

    // Create initial ripples
    const interval = setInterval(createRipple, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{
              x: ripple.x,
              y: ripple.y,
              scale: 0,
              opacity: 0.6,
            }}
            animate={{
              scale: [0, 1, 1.5],
              opacity: [0.6, 0.3, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 4,
              ease: "easeOut",
            }}
            className="absolute w-96 h-96 border border-primary/10 rounded-full"
            style={{
              background: `radial-gradient(circle, transparent 70%, rgba(255, 215, 0, 0.05) 100%)`,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Static background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>
    </div>
  )
}
