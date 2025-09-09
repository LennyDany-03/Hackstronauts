"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Play, Copy, Check, BookOpen, Lightbulb, Target, ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PythonBasicsLesson6() {
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
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Input & Output</h1>
                  <p className="text-sm text-muted-foreground">Stage 1 • Lesson 6 of 8</p>
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
                <h2 className="text-2xl font-bold text-foreground m-0">Talking to Your Programs!</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Learn how to make your programs interactive! We'll cover how to get input from users and display output
                in different ways.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="glass-card p-4 bg-primary/5 border border-primary/20">
                  <BookOpen className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">What You'll Learn</h4>
                  <p className="text-xs text-muted-foreground">Getting user input and displaying output</p>
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

            {/* Output with Print */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Output with print()</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                You've been using <code className="text-primary">print()</code> already! Let's explore all the cool
                things you can do with it.
              </p>

              <CodeBlock
                id="print-basics"
                code={`# Basic printing
print("Hello, World!")
print("Python is awesome!")

# Printing variables
name = "Alice"
age = 25
print(name)
print(age)

# Printing multiple things
print("Name:", name, "Age:", age)
print("I am", age, "years old")

# Print with different separators
print("apple", "banana", "cherry", sep=", ")  # apple, banana, cherry
print("2024", "12", "25", sep="-")            # 2024-12-25

# Print without newline (end parameter)
print("Loading", end="")
print(".", end="")
print(".", end="")
print(".")  # Loading...`}
              />

              <ExampleBox title="Fun with Print">
                <p className="text-muted-foreground mb-3">Create some fun output patterns:</p>
                <CodeBlock
                  id="fun-print"
                  code={`# Create patterns with print
print("*" * 20)  # Line of stars
print("Python is fun!")
print("*" * 20)

# Create a simple box
print("+" + "-" * 18 + "+")
print("|   Welcome to Python  |")
print("+" + "-" * 18 + "+")

# Print a countdown
print("Countdown:")
for i in range(5, 0, -1):
    print(i, end="... ")
print("Blast off! 🚀")`}
                />
              </ExampleBox>
            </div>

            {/* Getting Input */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Getting Input from Users</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                The <code className="text-primary">input()</code> function lets your program ask questions and get
                answers from users!
              </p>

              <CodeBlock
                id="input-basics"
                code={`# Basic input
name = input("What's your name? ")
print("Hello,", name)

# Input always returns a string
age_str = input("How old are you? ")
print("You entered:", age_str)
print("Type of input:", type(age_str))  # <class 'str'>

# Converting input to numbers
age = int(input("Enter your age: "))
height = float(input("Enter your height in feet: "))

print(f"You are {age} years old")
print(f"You are {height} feet tall")
print(f"Next year you'll be {age + 1}")

# Input with default prompts
favorite_color = input("What's your favorite color? ")
if favorite_color == "":
    favorite_color = "blue"  # default value
print(f"Your favorite color is {favorite_color}")`}
              />

              <div className="glass-card p-6 bg-yellow-500/10 border border-yellow-500/20 mt-6">
                <h4 className="font-semibold text-yellow-400 mb-3">⚠️ Important: Input is Always Text!</h4>
                <p className="text-muted-foreground text-sm">
                  The <code className="text-primary">input()</code> function always returns a string, even if the user
                  types numbers. You need to convert it using <code className="text-primary">int()</code> or{" "}
                  <code className="text-primary">float()</code> if you want to do math with it.
                </p>
              </div>
            </div>

            {/* Interactive Programs */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Building Interactive Programs</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Now let's combine input and output to create interactive programs that respond to users!
              </p>

              <CodeBlock
                id="interactive-programs"
                code={`# Simple calculator
print("=== Simple Calculator ===")
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print(f"{num1} + {num2} = {num1 + num2}")
print(f"{num1} - {num2} = {num1 - num2}")
print(f"{num1} * {num2} = {num1 * num2}")
print(f"{num1} / {num2} = {num1 / num2}")

# Personal information collector
print("\n=== Tell Me About Yourself ===")
name = input("Name: ")
age = int(input("Age: "))
city = input("City: ")
hobby = input("Favorite hobby: ")

print(f"\nNice to meet you, {name}!")
print(f"You're {age} years old and live in {city}")
print(f"I think {hobby} is a great hobby!")

# Quiz program
print("\n=== Python Quiz ===")
score = 0

answer1 = input("What symbol is used for comments in Python? ")
if answer1.lower() == "#":
    print("Correct! ✅")
    score += 1
else:
    print("Wrong! The answer is #")

answer2 = input("What function is used to get user input? ")
if answer2.lower() == "input":
    print("Correct! ✅")
    score += 1
else:
    print("Wrong! The answer is input()")

print(f"\nYour score: {score}/2")`}
              />

              <ExampleBox title="Build Your Own Program">
                <p className="text-muted-foreground mb-3">Create a personalized greeting program:</p>
                <CodeBlock
                  id="greeting-program"
                  code={`# Personalized greeting program
print("=== Welcome! ===")

# Get user information
first_name = input("What's your first name? ")
last_name = input("What's your last name? ")
birth_year = int(input("What year were you born? "))

# Calculate age (assuming current year is 2024)
current_year = 2024
age = current_year - birth_year

# Create personalized message
full_name = first_name + " " + last_name
print(f"\nHello, {full_name}!")
print(f"You are approximately {age} years old.")

if age < 18:
    print("You're still young! Enjoy learning Python!")
elif age < 65:
    print("Great age to be learning programming!")
else:
    print("It's never too late to learn something new!")

print(f"Welcome to the Python community, {first_name}! 🐍")`}
                />
              </ExampleBox>
            </div>

            {/* Input Validation */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Handling Input Safely</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Sometimes users enter unexpected input. Here's how to handle it gracefully!
              </p>

              <CodeBlock
                id="input-validation"
                code={`# Safe number input
def get_number(prompt):
    while True:
        try:
            return float(input(prompt))
        except ValueError:
            print("Please enter a valid number!")

# Safe age input
def get_age():
    while True:
        try:
            age = int(input("Enter your age: "))
            if age < 0:
                print("Age cannot be negative!")
            elif age > 150:
                print("That seems too old! Please enter a realistic age.")
            else:
                return age
        except ValueError:
            print("Please enter a whole number!")

# Using the safe functions
print("=== Safe Input Example ===")
name = input("What's your name? ")
age = get_age()
height = get_number("Enter your height in feet: ")

print(f"Hello {name}!")
print(f"You are {age} years old and {height} feet tall.")

# Simple yes/no input
def get_yes_no(question):
    while True:
        answer = input(question + " (yes/no): ").lower()
        if answer in ['yes', 'y', 'yeah', 'yep']:
            return True
        elif answer in ['no', 'n', 'nope']:
            return False
        else:
            print("Please answer yes or no!")

# Using yes/no function
likes_python = get_yes_no("Do you like Python?")
if likes_python:
    print("Awesome! Python is great! 🐍")
else:
    print("That's okay, maybe you'll like it more as you learn!")`}
              />
            </div>

            {/* Summary */}
            <div className="glass-card p-8 mb-8 bg-primary/5 border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-6">🎉 Interactive Programming Master!</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fantastic! You can now create programs that talk to users. This is where programming gets really
                exciting - your programs can be interactive and responsive!
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="glass-card p-4 bg-background/50">
                  <h4 className="font-semibold text-primary mb-2">✅ You Mastered</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Advanced print() techniques</li>
                    <li>• Getting user input with input()</li>
                    <li>• Converting input types</li>
                    <li>• Building interactive programs</li>
                    <li>• Safe input handling</li>
                  </ul>
                </div>
                <div className="glass-card p-4 bg-background/50">
                  <h4 className="font-semibold text-primary mb-2">🎯 Next Up</h4>
                  <p className="text-sm text-muted-foreground">Creating your own functions!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="./5">
                  <Button
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
                  >
                    Previous: Lists & Collections
                  </Button>
                </Link>
                <Link href="./7">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    Next: Basic Functions
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