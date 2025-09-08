"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

interface LoadingStep {
  text: string
}

interface MultiStepLoaderProps {
  loadingSteps: LoadingStep[]
  loading: boolean
  duration?: number
  onComplete?: () => void
}

export function MultiStepLoader({ loadingSteps, loading, duration = 2000, onComplete }: MultiStepLoaderProps) {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    if (!loading) {
      setCurrentStep(0)
      return
    }

    const stepDuration = duration / loadingSteps.length
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1
        } else {
          clearInterval(interval)
          setTimeout(() => {
            onComplete?.()
          }, 500)
          return prev
        }
      })
    }, stepDuration)

    return () => clearInterval(interval)
  }, [loading, loadingSteps.length, duration, onComplete])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="glass-card p-8 rounded-2xl max-w-md w-full mx-4">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
          >
            <Loader2 className="w-8 h-8 text-primary" />
          </motion.div>

          <div className="space-y-4">
            {loadingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: index <= currentStep ? 1 : 0.3,
                  x: 0,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0">
                  <AnimatePresence mode="wait">
                    {index < currentStep ? (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} key="check">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </motion.div>
                    ) : index === currentStep ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        key="loading"
                        className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"
                      />
                    ) : (
                      <div className="w-5 h-5 border-2 border-muted rounded-full" />
                    )}
                  </AnimatePresence>
                </div>
                <span className={`text-sm ${index <= currentStep ? "text-foreground" : "text-muted-foreground"}`}>
                  {step.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
