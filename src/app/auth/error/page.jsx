"use client"

import { motion } from "framer-motion"
import { BookOpen, AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"

export default function ErrorPage({ searchParams }) {
  const [params, setParams] = React.useState({ error: null })

  React.useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await searchParams
      setParams(resolvedParams)
    }
    getParams()
  }, [searchParams])

  const handleRetry = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-background/95 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-destructive/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.7,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">EduPlatform</span>
          </div>

          <h1 className="text-3xl font-bold text-balance mb-2">
            Oops!{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-destructive to-orange-500">
              Something went wrong
            </span>
          </h1>
          <p className="text-muted-foreground">We encountered an unexpected error</p>
        </motion.div>

        {/* Error Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-xl bg-card/50 border border-border/50 rounded-2xl p-8 shadow-2xl"
        >
          <div className="text-center space-y-6">
            <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Authentication Error</h2>
              {params.error ? (
                <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 font-mono">{params.error}</p>
              ) : (
                <p className="text-sm text-muted-foreground">An unspecified error occurred during authentication.</p>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <Button onClick={handleRetry} className="w-full">
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>

              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/auth/login">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Login
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Support Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">
            Need help? Contact our{" "}
            <Link href="/support" className="text-primary hover:underline">
              support team
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
