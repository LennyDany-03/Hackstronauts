"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for trying out our platform",
    icon: Star,
    features: [
      "Access to 5 courses",
      "Basic progress tracking",
      "Community forum access",
      "Mobile app access",
      "Email support",
    ],
    buttonText: "Get Started",
    popular: false,
    color: "default",
  },
  {
    name: "Student",
    price: "₹399",
    period: "per month",
    description: "Ideal for serious learners",
    icon: Zap,
    features: [
      "Access to 100+ courses",
      "AI-powered study plans",
      "Progress analytics",
      "Priority support",
      "Offline content access",
      "Interactive assignments",
      "Certificate of completion",
    ],
    buttonText: "Start Learning",
    popular: true,
    color: "primary",
  },
  {
    name: "Premium",
    price: "₹1999",
    period: "per month",
    description: "For advanced learners and professionals",
    icon: Crown,
    features: [
      "Unlimited course access",
      "1-on-1 mentoring sessions",
      "Custom learning paths",
      "Advanced analytics",
      "Priority support",
      "Live workshops",
      "Industry certifications",
      "Career guidance",
    ],
    buttonText: "Go Premium",
    popular: false,
    color: "secondary",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-background to-muted/20">
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
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Learning Path
            </span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Start free and upgrade as you grow. All plans include our core features with no hidden fees.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card
                className={`glass-card h-full group hover:scale-105 transition-all duration-300 relative overflow-hidden ${
                  plan.popular ? "border-primary/50 shadow-primary/20 shadow-2xl" : ""
                }`}
              >
                <CardHeader className="text-center pb-8 pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <plan.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.price !== "Free" && <span className="text-muted-background ml-2">/{plan.period}</span>}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + featureIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="inline-flex items-center justify-center w-5 h-5 bg-primary/20 rounded-full flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-primary text-secondary-foreground hover:bg-secondary/90"
                      } shadow-lg`}
                      size="lg"
                    >
                      {plan.buttonText}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Money back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-6 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-muted-foreground">
              Not satisfied? Get a full refund within 30 days, no questions asked.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
