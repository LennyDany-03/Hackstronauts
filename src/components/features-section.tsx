"use client"

import { motion } from "framer-motion"
import { Brain, Clock, Users, Target, BookOpen, Trophy, Zap, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Personalized study plans adapted to your learning style and pace using advanced AI algorithms.",
    image: "/",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Study at your own pace with 24/7 access to courses and materials that fit your busy lifestyle.",
    image: "/",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals and certified educators with years of teaching experience.",
    image: "/",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set and achieve your academic goals with our comprehensive progress tracking system.",
    image: "/",
  },
  {
    icon: BookOpen,
    title: "Interactive Content",
    description: "Engage with multimedia lessons, quizzes, and hands-on projects for better retention.",
    image: "/",
  },
  {
    icon: Trophy,
    title: "Achievements & Badges",
    description: "Earn certificates and badges as you complete courses and reach important milestones.",
    image: "/",
  },
]

const additionalFeatures = [
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Get immediate feedback on assignments and quizzes to improve faster.",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Your data and progress are protected with enterprise-grade security.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform provides all the tools and resources you need to excel in your studies and
            achieve your academic goals.
          </p>
        </motion.div>

        {/* Main features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full group hover:scale-105 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Feature image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-xl border border-primary/30">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Feature content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
