"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Play, Copy, Check, BookOpen, Lightbulb, Target, ArrowRight, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PythonBasicsLesson2() {
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
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Numbers & Math Operations</h1>
                  <p className="text-sm text-muted-foreground">Stage 1 • Lesson 2 of 8</p>
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
                <h2 className="text-2xl font-bold text-foreground m-0">Let's Do Some Math!</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Python is like a super-powered calculator! You can work with whole numbers, decimals, and perform all
                kinds of mathematical operations.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="glass-card p-4 bg-primary/5 border border-primary/20">
                  <BookOpen className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">What You'll Learn</h4>
                  <p className="text-xs text-muted-foreground">Numbers and math operations</p>
                </div>
                <div className="glass-card p-4 bg-primary/5 border border-primary/20">
                  <Play className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">Estimated Time</h4>
                  <p className="text-xs text-muted-foreground">15 minutes</p>
                </div>
                <div className="glass-card p-4 bg-primary/5 border border-primary/20">
                  <Target className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">Difficulty</h4>
                  <p className="text-xs text-muted-foreground">Easy</p>
                </div>
              </div>
            </div>

            {/* Number Types */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Types of Numbers in Python</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="glass-card p-6 bg-blue-500/10 border border-blue-500/20">
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">Integers (int)</h3>
                  <p className="text-muted-foreground mb-4">Whole numbers without decimals</p>
                  <CodeBlock
                    id="integers"
                    code={`# Integers - whole numbers
age = 25
year = 2024
temperature = -5
big_number = 1000000

print(age)         # 25
print(type(age))   # <class 'int'>`}
                  />
                </div>
                <div className="glass-card p-6 bg-green-500/10 border border-green-500/20">
                  <h3 className="text-xl font-semibold text-green-400 mb-4">Floats (float)</h3>
                  <p className="text-muted-foreground mb-4">Numbers with decimal points</p>
                  <CodeBlock
                    id="floats"
                    code={`# Floats - decimal numbers
price = 19.99
pi = 3.14159
height = 5.8
negative = -2.5

print(price)       # 19.99
print(type(price)) # <class 'float'>`}
                  />
                </div>
              </div>
            </div>

            {/* Basic Math Operations */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Basic Math Operations</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Python supports all the math operations you know, plus some special ones!
              </p>

              <CodeBlock
                id="basic-math"
                code={`# Basic arithmetic operations
a = 10
b = 3

# Addition
sum_result = a + b
print(f"{a} + {b} = {sum_result}")  # 10 + 3 = 13

# Subtraction
difference = a - b
print(f"{a} - {b} = {difference}")  # 10 - 3 = 7

# Multiplication
product = a * b
print(f"{a} * {b} = {product}")     # 10 * 3 = 30

# Division (always gives a float)
quotient = a / b
print(f"{a} / {b} = {quotient}")    # 10 / 3 = 3.333...`}
              />

              <ExampleBox title="Try This Calculator!">
                <p className="text-muted-foreground mb-3">Create your own calculator with different numbers:</p>
                <CodeBlock
                  id="calculator-practice"
                  code={`# Your calculator
num1 = 15
num2 = 4

print("=== My Calculator ===")
print(f"{num1} + {num2} = {num1 + num2}")
print(f"{num1} - {num2} = {num1 - num2}")
print(f"{num1} * {num2} = {num1 * num2}")
print(f"{num1} / {num2} = {num1 / num2}")

# Try with your own numbers!`}
                />
              </ExampleBox>
            </div>

            {/* Special Operations */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Special Math Operations</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Python has some cool math operations that you might not know about!
              </p>

              <CodeBlock
                id="special-math"
                code={`# Special operations
a = 17
b = 5

# Floor division (rounds down to nearest whole number)
floor_div = a // b
print(f"{a} // {b} = {floor_div}")  # 17 // 5 = 3

# Modulus (remainder after division)
remainder = a % b
print(f"{a} % {b} = {remainder}")   # 17 % 5 = 2

# Exponentiation (power)
power = a ** 2
print(f"{a} ** 2 = {power}")        # 17 ** 2 = 289

# Square root (using ** 0.5)
sqrt = 16 ** 0.5
print(f"Square root of 16 = {sqrt}")  # 4.0`}
              />

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="glass-card p-4 bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Floor Division //</h4>
                  <p className="text-xs text-muted-foreground">Divides and rounds down</p>
                  <code className="text-xs text-primary">17 // 5 = 3</code>
                </div>
                <div className="glass-card p-4 bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Modulus %</h4>
                  <p className="text-xs text-muted-foreground">Gets the remainder</p>
                  <code className="text-xs text-primary">17 % 5 = 2</code>
                </div>
                <div className="glass-card p-4 bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Power **</h4>
                  <p className="text-xs text-muted-foreground">Raises to a power</p>
                  <code className="text-xs text-primary">3 ** 2 = 9</code>
                </div>
              </div>
            </div>

            {/* Order of Operations */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Order of Operations</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Just like in math class, Python follows the order of operations: Parentheses, Exponents,
                Multiplication/Division, Addition/Subtraction (PEMDAS).
              </p>

              <CodeBlock
                id="order-operations"
                code={`# Order of operations matters!
result1 = 2 + 3 * 4
print(result1)  # 14 (not 20!)

# Use parentheses to change the order
result2 = (2 + 3) * 4
print(result2)  # 20

# Complex example
result3 = 2 ** 3 + 4 * 5 - 6 / 2
print(result3)  # 8 + 20 - 3 = 25

# With parentheses for clarity
result4 = (2 ** 3) + (4 * 5) - (6 / 2)
print(result4)  # Same result, but clearer!`}
              />

              <ExampleBox title="Practice: Order Matters!">
                <p className="text-muted-foreground mb-3">Predict the results before running:</p>
                <CodeBlock
                  id="order-practice"
                  code={`# What will these equal?
mystery1 = 10 + 2 * 3
mystery2 = (10 + 2) * 3
mystery3 = 2 ** 3 * 4
mystery4 = 2 ** (3 * 4)

print("Mystery 1:", mystery1)  # ?
print("Mystery 2:", mystery2)  # ?
print("Mystery 3:", mystery3)  # ?
print("Mystery 4:", mystery4)  # ?`}
                />
              </ExampleBox>
            </div>

            {/* Summary */}
            <div className="glass-card p-8 mb-8 bg-primary/5 border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-6">🎉 Math Master!</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Awesome! You now know how to work with numbers in Python. You can build calculators, solve math
                problems, and much more!
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="glass-card p-4 bg-background/50">
                  <h4 className="font-semibold text-primary mb-2">✅ You Mastered</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Integers and floats</li>
                    <li>• Basic math operations</li>
                    <li>• Special operations (%, //, **)</li>
                    <li>• Order of operations</li>
                  </ul>
                </div>
                <div className="glass-card p-4 bg-background/50">
                  <h4 className="font-semibold text-primary mb-2">🎯 Next Up</h4>
                  <p className="text-sm text-muted-foreground">Working with text and strings!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="./1">
                  <Button
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
                  >
                    Previous: Variables
                  </Button>
                </Link>
                <Link href="./3">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    Next: Strings & Text
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
