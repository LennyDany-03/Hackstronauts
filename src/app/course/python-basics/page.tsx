"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  CheckCircle,
  Lock,
  Play,
  Star,
  Trophy,
  Code,
  BookOpen,
  Zap,
  MessageCircle,
  Users,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

interface Stage {
  id: number
  title: string
  description: string
  lessons: number
  completed: number
  isUnlocked: boolean
  isCompleted: boolean
  isCurrent: boolean
  icon: any
  color: string
}

const pythonStages: Stage[] = [
  {
    id: 1,
    title: "Python Basics",
    description: "Variables, data types, and basic operations",
    lessons: 8,
    completed: 8,
    isUnlocked: true,
    isCompleted: true,
    isCurrent: false,
    icon: Code,
    color: "from-primary/20 to-primary/10",
  },
  {
    id: 2,
    title: "Control Flow",
    description: "If statements, loops, and decision making",
    lessons: 6,
    completed: 4,
    isUnlocked: true,
    isCompleted: false,
    isCurrent: true,
    icon: Zap,
    color: "from-primary/30 to-primary/15",
  },
  {
    id: 3,
    title: "Functions",
    description: "Creating reusable code with functions",
    lessons: 7,
    completed: 0,
    isUnlocked: true,
    isCompleted: false,
    isCurrent: false,
    icon: BookOpen,
    color: "from-muted/20 to-muted/10",
  },
  {
    id: 4,
    title: "Data Structures",
    description: "Lists, dictionaries, and tuples",
    lessons: 9,
    completed: 0,
    isUnlocked: false,
    isCompleted: false,
    isCurrent: false,
    icon: Trophy,
    color: "from-muted/10 to-muted/5",
  },
  {
    id: 5,
    title: "File Handling",
    description: "Reading and writing files",
    lessons: 5,
    completed: 0,
    isUnlocked: false,
    isCompleted: false,
    isCurrent: false,
    icon: Star,
    color: "from-muted/10 to-muted/5",
  },
]

export default function PythonBasicCourse() {
  const [userProgress, setUserProgress] = useState(0)
  const [totalLessons, setTotalLessons] = useState(0)
  const [completedLessons, setCompletedLessons] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const total = pythonStages.reduce((acc, stage) => acc + stage.lessons, 0)
    const completed = pythonStages.reduce((acc, stage) => acc + stage.completed, 0)
    setTotalLessons(total)
    setCompletedLessons(completed)
    setUserProgress((completed / total) * 100)
  }, [])

  const StageNode = ({ stage, index }: { stage: Stage; index: number }) => {
    const Icon = stage.icon
    const progressPercentage = (stage.completed / stage.lessons) * 100

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative w-full" // removed alternating positioning and made full width
      >
        {/* Connecting Line */}
        {index < pythonStages.length - 1 && (
          <div className="absolute top-20 left-1/2 w-0.5 h-16 bg-gradient-to-b from-border to-transparent transform -translate-x-1/2 z-0" />
        )}

        {/* Stage Card */}
        <div
          className={`glass-card p-6 w-full relative z-10 ${
            // changed from w-80 to w-full for full width
            stage.isCurrent ? "ring-2 ring-primary/50" : ""
          } ${!stage.isUnlocked ? "opacity-60" : ""}`}
        >
          {/* Stage Header */}
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${stage.color} border border-border/30`}>
              {stage.isCompleted ? (
                <CheckCircle className="w-6 h-6 text-primary" />
              ) : stage.isUnlocked ? (
                <Icon className={`w-6 h-6 ${stage.isCurrent ? "text-primary" : "text-muted-foreground"}`} />
              ) : (
                <Lock className="w-6 h-6 text-muted-foreground" />
              )}
            </div>

            <div className="flex items-center gap-2">
              {stage.isCompleted && (
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  <Trophy className="w-3 h-3 mr-1" />
                  Complete
                </Badge>
              )}
              {stage.isCurrent && (
                <Badge variant="outline" className="border-primary/50 text-primary">
                  Current
                </Badge>
              )}
            </div>
          </div>

          {/* Stage Content */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">{stage.title}</h3>
            <p className="text-muted-foreground text-sm">{stage.description}</p>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="text-foreground font-medium">
                  {stage.completed}/{stage.lessons} lessons
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2 bg-muted/30" />
            </div>

            {/* Action Button */}
            <Button
              className={`w-full mt-4 ${
                stage.isCompleted
                  ? "bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30"
                  : stage.isUnlocked
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
              disabled={!stage.isUnlocked}
              onClick={() => {
                if (stage.isUnlocked) {
                  // Navigate to first lesson of this stage
                  window.location.href = `/course/python-basics/stage/basics/${stage.id}`
                }
              }}
            >
              {stage.isCompleted ? (
                <>
                  <Trophy className="w-4 h-4 mr-2" />
                  Review Stage
                </>
              ) : stage.isUnlocked ? (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  {stage.isCurrent ? "Continue" : "Start Stage"}
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  Locked
                </>
              )}
            </Button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="glass border-b border-border/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Python Basics</h1>
                <p className="text-muted-foreground">Master the fundamentals of Python programming</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Overall Progress</p>
                <p className="text-lg font-semibold text-primary">{Math.round(userProgress)}% Complete</p>
              </div>
              <div className="w-16 h-16 relative">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-muted/30"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-primary"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${userProgress}, 100`}
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary">{Math.round(userProgress)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Course Path */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Your Learning Path</h2>
            <p className="text-muted-foreground">
              Complete each stage to unlock the next. You've completed {completedLessons} out of {totalLessons} lessons.
            </p>
          </div>

          {/* Stage Path */}
          <div className="space-y-8">
            {pythonStages.map((stage, index) => (
              <StageNode key={stage.id} stage={stage} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 mb-12"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              <div className="absolute top-4 right-4 opacity-10">
                <Sparkles className="w-16 h-16 text-primary" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    animate={{
                      scale: isHovering ? 1.1 : 1,
                      rotate: isHovering ? 5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30"
                  >
                    <Users className="w-8 h-8 text-primary" />
                  </motion.div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Stuck on Something?</h3>
                  <p className="text-muted-foreground text-lg mb-2">
                    Don't worry! Get instant help from your AI learning companion
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-primary/80">
                    <MessageCircle className="w-4 h-4" />
                    <span>Available 24/7 • Personalized Help • Interactive Learning</span>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                >
                  <Button
                    onClick={() => router.push("/llmchatbot")}
                    size="lg"
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <motion.div animate={{ x: isHovering ? 5 : 0 }} className="flex items-center gap-3">
                      <MessageCircle className="w-6 h-6" />
                      <span>Clear Your Doubt with Your Friend</span>
                      <motion.div animate={{ x: isHovering ? 3 : 0 }} transition={{ type: "spring", stiffness: 400 }}>
                        <Sparkles className="w-5 h-5" />
                      </motion.div>
                    </motion.div>
                  </Button>
                </motion.div>

                {/* Feature highlights */}
                <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="p-3 rounded-lg bg-primary/5 border border-primary/20"
                  >
                    <Code className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Code Help</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="p-3 rounded-lg bg-secondary/5 border border-secondary/20"
                  >
                    <BookOpen className="w-5 h-5 text-secondary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Concept Clarity</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="p-3 rounded-lg bg-primary/5 border border-primary/20"
                  >
                    <Zap className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Quick Solutions</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Completion Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-8 text-center mt-12"
          >
            <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Complete Your Python Journey</h3>
            <p className="text-muted-foreground mb-4">
              Finish all stages to earn your Python Basics certificate and unlock advanced courses.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-primary" />
              <span>Earn 500 XP upon completion</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
