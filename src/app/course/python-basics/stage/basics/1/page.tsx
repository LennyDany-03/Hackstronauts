"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Play, Copy, Check, BookOpen, Code, Lightbulb, Target, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PythonBasicsLesson1() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const CodeBlock = ({ code, language = "python", id }: { code: string; language?: string; id: string }) => (
    <div className="relative glass-card p-4 bg-muted/20 border border-border/30 rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <Badge variant="outline" className="text-xs">
          {language}
        </Badge>
        <Button variant="ghost" size="sm" onClick={() => copyToClipboard(code, id)} className="h-8 w-8 p-0">
          {copiedCode === id ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </Button>
      </div>
      <pre className="text-sm overflow-x-auto">
        <code className="text-foreground font-mono">{code}</code>
      </pre>
    </div>
  )

  const ExampleBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="glass-card p-6 border-l-4 border-l-primary/50 bg-primary/5">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-5 h-5 text-primary" />
        <h4 className="font-semibold text-foreground">{title}</h4>
      </div>
      {children}
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="glass border-b border-border/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/course/python-basics">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Course
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Variables & Assignment</h1>
                  <p className="text-sm text-muted-foreground">Stage 1 • Lesson 1 of 8</p>
                </div>
              </div>
            </div>
            <Badge variant="outline" className="border-primary/50 text-primary">
              Beginner
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-invert max-w-none"
          >
            {/* Introduction */}
            <div className="glass-card p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground m-0">Your First Python Variables!</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Variables are like labeled boxes where you can store information. In Python, creating variables is
                incredibly simple - just give something a name and assign it a value!
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="glass-card p-4 bg-primary/5 border border-primary/20">
                  <BookOpen className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">What You'll Learn</h4>
                  <p className="text-xs text-muted-foreground">Creating and using variables</p>
                </div>
                <div className="glass-card p-4 bg-primary/5 border border-primary/20">
                  <Play className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">Estimated Time</h4>
                  <p className="text-xs text-muted-foreground">10-15 minutes</p>
                </div>
                <div className="glass-card p-4 bg-primary/5 border border-primary/20">
                  <Target className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">Difficulty</h4>
                  <p className="text-xs text-muted-foreground">Super Easy</p>
                </div>
              </div>
            </div>

            {/* Variables Section */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Creating Your First Variables</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                In Python, you create a variable by simply writing a name, an equals sign, and a value. Python
                automatically figures out what type of data you're storing!
              </p>

              <CodeBlock
                id="first-variables"
                code={`# Your first variables!
name = "Alex"
age = 20
favorite_number = 7

# Let's see what we stored
print(name)           # Alex
print(age)            # 20
print(favorite_number) # 7`}
              />

              <ExampleBox title="Try This!">
                <p className="text-muted-foreground mb-3">Create variables about yourself:</p>
                <CodeBlock
                  id="personal-variables"
                  code={`# Replace with your information
my_name = "Your Name Here"
my_age = 18
my_city = "Your City"
my_hobby = "Your Favorite Hobby"

print("Hi! My name is", my_name)
print("I am", my_age, "years old")
print("I live in", my_city)
print("I love", my_hobby)`}
                />
              </ExampleBox>
            </div>

            {/* Variable Rules */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Variable Naming Rules</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="glass-card p-4 bg-green-500/10 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-3">✅ Good Variable Names</h4>
                  <CodeBlock
                    id="good-names"
                    code={`# Clear and descriptive
student_name = "Sarah"
total_score = 95
is_passing = True
user_email = "sarah@email.com"`}
                  />
                </div>
                <div className="glass-card p-4 bg-red-500/10 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">❌ Avoid These</h4>
                  <CodeBlock
                    id="bad-names"
                    code={`# Too short or confusing
x = "Sarah"
n = 95
2name = "Invalid"  # Can't start with number
my-email = "Invalid"  # No dashes allowed`}
                  />
                </div>
              </div>

              <div className="glass-card p-6 bg-primary/5 border border-primary/20">
                <h4 className="font-semibold text-primary mb-3">📝 Naming Best Practices</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>
                    • Use lowercase letters with underscores: <code className="text-primary">first_name</code>
                  </li>
                  <li>
                    • Make names descriptive: <code className="text-primary">student_grade</code> not{" "}
                    <code className="text-muted-foreground">sg</code>
                  </li>
                  <li>• Start with a letter or underscore, never a number</li>
                  <li>• No spaces or special characters (except underscore)</li>
                </ul>
              </div>
            </div>

            {/* Changing Variables */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Changing Variable Values</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Variables can change! That's why they're called "variables". You can assign new values anytime.
              </p>

              <CodeBlock
                id="changing-variables"
                code={`# Start with one value
score = 0
print("Starting score:", score)  # 0

# Change the value
score = 10
print("New score:", score)       # 10

# Change it again
score = score + 5
print("Updated score:", score)   # 15

# Even change the type!
score = "Excellent!"
print("Final score:", score)     # Excellent!`}
              />

              <ExampleBox title="Practice: Counter">
                <p className="text-muted-foreground mb-3">Let's create a simple counter:</p>
                <CodeBlock
                  id="counter-practice"
                  code={`# Start counting
count = 0
print("Count:", count)

# Add one
count = count + 1
print("Count:", count)

# Add five more
count = count + 5
print("Count:", count)

# What's the final count?`}
                />
              </ExampleBox>
            </div>

            {/* Summary */}
            <div className="glass-card p-8 mb-8 bg-primary/5 border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-6">🎉 Great Job!</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                You've learned the foundation of Python programming - variables! You now know how to store and change
                data in your programs.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="glass-card p-4 bg-background/50">
                  <h4 className="font-semibold text-primary mb-2">✅ You Learned</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• How to create variables</li>
                    <li>• Variable naming rules</li>
                    <li>• Changing variable values</li>
                  </ul>
                </div>
                <div className="glass-card p-4 bg-background/50">
                  <h4 className="font-semibold text-primary mb-2">🎯 Next Up</h4>
                  <p className="text-sm text-muted-foreground">Numbers and math operations in Python!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="./2">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    Next: Numbers & Math
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  )
}
