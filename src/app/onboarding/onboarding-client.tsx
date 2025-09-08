"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MultiStepLoader } from "@/components/multi-step-loader"
import { ArrowRight, ArrowLeft, Code, Database, Cpu, Globe } from "lucide-react"
import { useRouter } from "next/navigation"

interface FormData {
  name: string
  dateOfBirth: string
  hobbies: string
  topicsInterested: string
  selectedLanguage: string
  experienceLevel: string
}

const languages = [
  {
    id: "python",
    name: "Python",
    icon: Code,
    description: "Versatile and beginner-friendly",
    color: "from-blue-500 to-yellow-500",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: Globe,
    description: "Web development powerhouse",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "c",
    name: "C",
    icon: Cpu,
    description: "System programming foundation",
    color: "from-gray-400 to-gray-600",
  },
  {
    id: "cpp",
    name: "C++",
    icon: Database,
    description: "Performance and object-oriented",
    color: "from-blue-600 to-purple-600",
  },
]

const experienceLevels = [
  {
    id: "beginner",
    name: "Beginner",
    description: "New to programming",
    icon: "🌱",
  },
  {
    id: "intermediate",
    name: "Intermediate",
    description: "Some coding experience",
    icon: "🚀",
  },
  {
    id: "advanced",
    name: "Advanced",
    description: "Experienced programmer",
    icon: "⚡",
  },
]

const loadingSteps = [
  { text: "Analyzing your preferences..." },
  { text: "Preparing your personalized course..." },
  { text: "Setting up your learning path..." },
  { text: "Configuring your dashboard..." },
  { text: "Almost ready! Finalizing setup..." },
]

export default function OnboardingClient() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    dateOfBirth: "",
    hobbies: "",
    topicsInterested: "",
    selectedLanguage: "",
    experienceLevel: "",
  })

  const router = useRouter()
  const totalSteps = 3
  const progress = (currentStep / totalSteps) * 100

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)

    // Simulate API call to create course
    // In real implementation, you would:
    // 1. Save user data to Supabase
    // 2. Create course record
    // 3. Get course ID
    // 4. Redirect to course page

    // For demo, we'll simulate with a timeout
    setTimeout(() => {
      // Simulate course ID (in real app, this would come from Supabase)
      const courseId = `${formData.selectedLanguage}-${formData.experienceLevel}-${Date.now()}`
      router.push(`/${courseId}/courses`)
    }, 6000)
  }

  const canProceedStep1 = formData.name && formData.dateOfBirth && formData.hobbies && formData.topicsInterested
  const canProceedStep2 = formData.selectedLanguage
  const canSubmit = formData.experienceLevel

  return (
    <>
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-foreground mb-2"
            >
              Welcome to Your Learning Journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              Let's personalize your programming education experience
            </motion.p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>
                Step {currentStep} of {totalSteps}
              </span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Content */}
          <Card className="glass-card">
            <CardContent className="p-8">
              <AnimatePresence mode="wait">
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-semibold text-foreground mb-2">Tell us about yourself</h2>
                      <p className="text-muted-foreground">Help us create a personalized learning experience</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="bg-background/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input
                          id="dob"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hobbies">Hobbies & Interests</Label>
                      <Textarea
                        id="hobbies"
                        placeholder="Tell us about your hobbies and interests..."
                        value={formData.hobbies}
                        onChange={(e) => handleInputChange("hobbies", e.target.value)}
                        className="bg-background/50 min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="topics">Topics You're Interested In</Label>
                      <Textarea
                        id="topics"
                        placeholder="What programming topics or areas would you like to explore?"
                        value={formData.topicsInterested}
                        onChange={(e) => handleInputChange("topicsInterested", e.target.value)}
                        className="bg-background/50 min-h-[100px]"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Language Selection */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-semibold text-foreground mb-2">Choose Your Programming Language</h2>
                      <p className="text-muted-foreground">Select the language you'd like to master first</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {languages.map((language) => {
                        const Icon = language.icon
                        const isSelected = formData.selectedLanguage === language.id

                        return (
                          <motion.div key={language.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Card
                              className={`cursor-pointer transition-all duration-300 ${
                                isSelected
                                  ? "ring-2 ring-primary bg-primary/5 border-primary/50"
                                  : "glass-card hover:border-primary/30"
                              }`}
                              onClick={() => handleInputChange("selectedLanguage", language.id)}
                            >
                              <CardContent className="p-6 text-center">
                                <div
                                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 bg-gradient-to-br ${language.color} bg-opacity-10`}
                                >
                                  <Icon className="w-8 h-8 text-foreground" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">{language.name}</h3>
                                <p className="text-muted-foreground text-sm">{language.description}</p>
                              </CardContent>
                            </Card>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Experience Level */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-semibold text-foreground mb-2">What's Your Experience Level?</h2>
                      <p className="text-muted-foreground">Help us tailor the course difficulty to your skill level</p>
                    </div>

                    <div className="space-y-4">
                      {experienceLevels.map((level) => {
                        const isSelected = formData.experienceLevel === level.id

                        return (
                          <motion.div key={level.id} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                            <Card
                              className={`cursor-pointer transition-all duration-300 ${
                                isSelected
                                  ? "ring-2 ring-primary bg-primary/5 border-primary/50"
                                  : "glass-card hover:border-primary/30"
                              }`}
                              onClick={() => handleInputChange("experienceLevel", level.id)}
                            >
                              <CardContent className="p-6 flex items-center gap-4">
                                <div className="text-3xl">{level.icon}</div>
                                <div className="flex-1">
                                  <h3 className="text-lg font-semibold text-foreground">{level.name}</h3>
                                  <p className="text-muted-foreground text-sm">{level.description}</p>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="glass bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    onClick={handleNext}
                    disabled={(currentStep === 1 && !canProceedStep1) || (currentStep === 2 && !canProceedStep2)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Start Learning
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Multi Step Loader */}
      <MultiStepLoader
        loadingSteps={loadingSteps}
        loading={isLoading}
        duration={5000}
        onComplete={() => {
          // This will be called when loading completes
          // The redirect is handled in handleSubmit
        }}
      />
    </>
  )
}
