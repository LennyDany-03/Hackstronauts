"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Computer Science Student",
    university: "MIT",
    image: "/",
    rating: 5,
    content:
      "EduPlatform completely transformed my study routine. The AI-powered recommendations helped me focus on my weak areas, and I improved my GPA from 3.2 to 3.8 in just one semester!",
  },
  {
    name: "Marcus Chen",
    role: "Medical Student",
    university: "Harvard Medical School",
    image: "/",
    rating: 5,
    content:
      "The interactive content and expert instructors made complex medical concepts so much easier to understand. I passed my MCAT with a score in the 95th percentile thanks to this platform.",
  },
  {
    name: "Emily Rodriguez",
    role: "Business Major",
    university: "Stanford University",
    image: "/",
    rating: 5,
    content:
      "I love how flexible the platform is. Being able to study at my own pace while working part-time was crucial. The goal tracking feature kept me motivated throughout my degree.",
  },
  {
    name: "David Kim",
    role: "Engineering Student",
    university: "UC Berkeley",
    image: "/",
    rating: 5,
    content:
      "The hands-on projects and real-world applications helped me land internships at top tech companies. The platform's approach to learning is exactly what modern education should be.",
  },
  {
    name: "Aisha Patel",
    role: "Psychology Major",
    university: "Yale University",
    image: "/",
    rating: 5,
    content:
      "The community aspect and peer collaboration features made studying feel less isolating. I formed study groups that became lifelong friendships, and we all improved together.",
  },
  {
    name: "James Wilson",
    role: "Mathematics Student",
    university: "Princeton University",
    image: "/",
    rating: 5,
    content:
      "The instant feedback on problem sets was a game-changer. Instead of waiting days for graded assignments, I could immediately see where I went wrong and learn from my mistakes.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-muted/20 to-background">
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
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Students</span>{" "}
            Say
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful students who have transformed their academic journey with our platform.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full group hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <CardContent className="p-6">
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground leading-relaxed mb-6 relative z-10">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 border-2 border-primary/20">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.university}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Them?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Start your journey to academic excellence today and become our next success story.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg"
            >
              Get Started Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
