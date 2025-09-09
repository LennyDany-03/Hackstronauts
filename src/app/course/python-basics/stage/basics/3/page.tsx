"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Play, Copy, Check, BookOpen, Lightbulb, Target, ArrowRight, Type } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PythonBasicsLesson3() {
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
                  <Type className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Strings & Text</h1>
                  <p className="text-sm text-muted-foreground">Stage 1 • Lesson 3 of 8</p>
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
                <h2 className="text-2xl font-bold text-foreground m-0">Working with Text!</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Strings are how Python handles text - from single letters to entire books! Let's learn how to create, modify, and work with text in Python.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="glass-card p-4 bg-primary/5 border border-primary/20">
                  <BookOpen className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">What You'll Learn</h4>
                  <p className="text-xs text-muted-foreground">Creating and manipulating strings</p>
                </div>
                <div className="glass-card p-4 bg-primary/5 border border-primary/20">
                  <Play className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">Estimated Time</h4>
                  <p className="text-xs text-muted-foreground">20 minutes</p>
                </div>
                <div className="glass-card p-4 bg-primary/5 border border-primary/20">
                  <Target className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">Difficulty</h4>
                  <p className="text-xs text-muted-foreground">Easy</p>
                </div>
              </div>
            </div>

            {/* Creating Strings */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Creating Strings</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                In Python, you can create strings using single quotes, double quotes, or triple quotes for longer text.
              </p>

              <CodeBlock
                id="creating-strings"
                code={`# Different ways to create strings
name = "Alice"
message = 'Hello, World!'
quote = "She said, 'Python is awesome!'"

# Multi-line strings with triple quotes
story = """Once upon a time,
there was a programmer
who loved Python."""

print(name)     # Alice
print(message)  # Hello, World!
print(quote)    # She said, 'Python is awesome!'
print(story)    # Multi-line output`}
              />

              <ExampleBox title="Try This!">
                <p className="text-muted-foreground mb-3">Create strings about yourself:</p>
                <CodeBlock
                  id="personal-strings"
                  code={`# Create your own strings
favorite_food = "Pizza"
hobby = 'Reading books'
dream = """I want to become
a great programmer!"""

print("I love eating", favorite_food)
print("My hobby is", hobby)
print("My dream:")
print(dream)`}
                />
              </ExampleBox>
            </div>

            {/* String Operations */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">String Operations</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                You can combine strings, repeat them, and even do "math" with text!
              </p>

              <CodeBlock
                id="string-operations"
                code={`# String concatenation (joining)
first_name = "John"
last_name = "Smith"
full_name = first_name + " " + last_name
print(full_name)  # John Smith

# String repetition
laugh = "Ha" * 5
print(laugh)      # HaHaHaHaHa

# String length
message = "Hello, Python!"
length = len(message)
print(f"'{message}' has {length} characters")

# Checking if text is in a string
text = "I love programming"
print("love" in text)        # True
print("hate" in text)        # False`}
              />

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="glass-card p-4 bg-blue-500/10 border border-blue-500/20">
                  <h4 className="font-semibold text-blue-400 mb-2">Concatenation (+)</h4>
                  <p className="text-xs text-muted-foreground mb-2">Joins strings together</p>
                  <code className="text-xs text-primary">"Hello" + " " + "World"</code>
                </div>
                <div className="glass-card p-4 bg-green-500/10 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-2">Repetition (*)</h4>
                  <p className="text-xs text-muted-foreground mb-2">Repeats strings</p>
                  <code className="text-xs text-primary">"Python! " * 3</code>
                </div>
              </div>
            </div>

            {/* String Methods */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Useful String Methods</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Python strings come with built-in methods (functions) that can transform and analyze text.
              </p>

              <CodeBlock
                id="string-methods"
                code={`# String methods
text = "Hello, Python World!"

# Case methods
print(text.upper())      # HELLO, PYTHON WORLD!
print(text.lower())      # hello, python world!
print(text.title())      # Hello, Python World!

# Checking string properties
print(text.startswith("Hello"))  # True
print(text.endswith("World!"))   # True
print("123".isdigit())           # True
print("abc".isalpha())           # True

# Finding and replacing
print(text.find("Python"))       # 7 (position of "Python")
print(text.replace("World", "Universe"))  # Hello, Python Universe!

# Splitting strings
words = text.split(" ")
print(words)  # ['Hello,', 'Python', 'World!']`}
              />

              <ExampleBox title="String Method Practice">
                <p className="text-muted-foreground mb-3">Try these string transformations:</p>
                <CodeBlock
                  id="string-practice"
                  code={`# Practice with string methods
sentence = "python is amazing"

# Make it title case
title_case = sentence.title()
print(title_case)

# Make it uppercase
upper_case = sentence.upper()
print(upper_case)

# Replace a word
new_sentence = sentence.replace("amazing", "fantastic")
print(new_sentence)

# Split into words
words = sentence.split()
print(words)
print(f"This sentence has {len(words)} words")`}
                />
              </ExampleBox>
            </div>

            {/* String Formatting */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">String Formatting (F-Strings)</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                F-strings are the modern way to insert variables into strings. They're super easy and readable!
              </p>

              <CodeBlock
                id="f-strings"
                code={`# F-string formatting (the best way!)
name = "Alice"
age = 25
height = 5.6

# Basic f-string
greeting = f"Hi, I'm {name}!"
print(greeting)  # Hi, I'm Alice!

# Multiple variables
info = f"I'm {name}, I'm {age} years old and {height} feet tall"
print(info)

# With expressions
next_year = f"Next year I'll be {age + 1} years old"
print(next_year)

# Formatting numbers
price = 19.99
formatted = f\"The price is {price:.2f}\"\
print(formatted)  # The price is $19.99`}
              />

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="glass-card p-4 bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Old Way (avoid)</h4>
                  <CodeBlock
                    id="old-formatting"
                    code={`# Don't use these anymore
name = "Bob"
age = 30

# Old string formatting
old1 = "Hi " + name + "!"
old2 = "Hi %s!" % name
old3 = "Hi {}!".format(name)`}
                  />
                </div>
                <div className="glass-card p-4 bg-green-500/10 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-2">New Way (use this!)</h4>
                  <CodeBlock
                    id="new-formatting"
                    code={`# Modern f-string formatting
name = "Bob"
age = 30

# Clean and readable
new = f"Hi {name}!"
info = f"Hi {name}, you're {age}!"
calc = f"In 5 years: {age + 5}"`}
                  />
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="glass-card p-8 mb-8 bg-primary/5 border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-6">🎉 String Master!</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Excellent! You now know how to work with text in Python. Strings are everywhere in programming - from user interfaces to data processing!
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="glass-card p-4 bg-background/50">
                  <h4 className="font-semibold text-primary mb-2">✅ You Learned</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Creating strings with quotes</li>
                    <li>• String operations (+, *, len)</li>
                    <li>• Useful string methods</li>
                    <li>• F-string formatting</li>
                  </ul>
                </div>
                <div className="glass-card p-4 bg-background/50">
                  <h4 className="font-semibold text-primary mb-2">🎯 Next Up</h4>
                  <p className="text-sm text-muted-foreground">Boolean logic and comparisons!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="./2">
                  <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent">
                    Previous: Numbers & Math
                  </Button>
                </Link>
                <Link href="./4">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    Next: Booleans & Logic
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
