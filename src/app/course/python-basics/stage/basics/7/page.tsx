"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Play, Copy, Check, BookOpen, Lightbulb, Target, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PythonBasicsLesson7() {
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
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Basic Functions</h1>
                  <p className="text-sm text-muted-foreground">Stage 1 • Lesson 7 of 8</p>
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
                <h2 className="text-2xl font-bold text-foreground m-0">Creating Your Own Functions!</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Functions are like mini-programs within your program. They help you organize code, avoid repetition, and make your programs more powerful!
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="glass-card p-4 bg-primary/5 border border-primary/20">
                  <BookOpen className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">What You'll Learn</h4>
                  <p className="text-xs text-muted-foreground">Creating and using functions</p>
                </div>
                <div className="glass-card p-4 bg-primary/5 border border-primary/20">
                  <Play className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">Estimated Time</h4>
                  <p className="text-xs text-muted-foreground">25 minutes</p>
                </div>
                <div className="glass-card p-4 bg-primary/5 border border-primary/20">
                  <Target className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">Difficulty</h4>
                  <p className="text-xs text-muted-foreground">Intermediate</p>
                </div>
              </div>
            </div>

            {/* What are Functions */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">What are Functions?</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Think of functions as recipes. You give them ingredients (inputs), they follow a set of instructions, and give you back a result (output). You've already used functions like <code className="text-primary">print()</code>, <code className="text-primary">len()</code>, and <code className="text-primary">input()</code>!
              </p>

              <CodeBlock
                id="function-concept"
                code={`# You've been using functions already!
print("Hello")        # print() is a function
length = len("Hello") # len() is a function
name = input("Name: ") # input() is a function

# Now let's create our own!
def greet():
    print("Hello, World!")
    print("Welcome to Python!")

# Call (use) the function
greet()  # This runs the code inside the function`}
              />

              <div className="glass-card p-6 bg-primary/5 border border-primary/20 mt-6">
                <h4 className="font-semibold text-primary mb-3">🔧 Function Anatomy</h4>
                <CodeBlock
                  id="function-anatomy"
                  code={`def function_name():    # 1. 'def' keyword
    # 2. Function body (indented)
    print("This is inside the function")
    return "Optional return value"  # 3. Optional return

# 4. Function call
function_name()`}
                />
              </div>
            </div>

            {/* Creating Simple Functions */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Creating Simple Functions</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Let's start with simple functions that don't take any inputs but perform useful tasks.
              </p>

              <CodeBlock
                id="simple-functions"
                code={`# Simple functions without parameters
def say_hello():
    print("Hello there!")
    print("How are you today?")

def draw_line():
    print("-" * 30)

def show_menu():
    print("=== MENU ===")
    print("1. Start Game")
    print("2. Settings")
    print("3. Quit")
    print("=" * 12)

# Using the functions
say_hello()
draw_line()
show_menu()
draw_line()

# Functions can be called multiple times
say_hello()
say_hello()  # Same function, called again!`}
              />

              <ExampleBox title="Create Your Own Functions">
                <p className="text-muted-foreground mb-3">Try creating these functions:</p>
                <CodeBlock
                  id="function-practice"
                  code={`# Your turn to create functions!
def introduce_yourself():
    print("Hi! My name is [Your Name]")
    print("I'm learning Python!")
    print("This is so exciting!")

def show_favorite_things():
    print("My favorite things:")
    print("🍕 Food: Pizza")
    print("🎵 Music: Pop")
    print("🎮 Game: Minecraft")

def motivational_quote():
    print("💪 'The only way to do great work is to love what you do.'")
    print("   - Steve Jobs")

# Call your functions
introduce_yourself()
print()  # Empty line
show_favorite_things()
print()
motivational_quote()`}
                />
              </ExampleBox>
            </div>

            {/* Functions with Parameters */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Functions with Parameters</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Parameters make functions more flexible. They're like variables that you pass into the function to customize what it does.
              </p>

              <CodeBlock
                id="functions-with-parameters"
                code={`# Functions with parameters (inputs)
def greet_person(name):
    print(f"Hello, {name}!")
    print(f"Nice to meet you, {name}!")

def calculate_age(birth_year):
    current_year = 2024
    age = current_year - birth_year
    print(f"You are {age} years old!")

def repeat_message(message, times):
    for i in range(times):
        print(f"{i+1}. {message}")

# Using functions with parameters
greet_person("Alice")
greet_person("Bob")

calculate_age(2000)
calculate_age(1995)

repeat_message("Python is awesome!", 3)
repeat_message("Keep learning!", 2)`}
              />

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="glass-card p-4 bg-blue-500/10 border border-blue-500/20">
                  <h4 className="font-semibold text-blue-400 mb-3">Single Parameter</h4>
                  <CodeBlock
                    id="single-param"
                    code={`def welcome(name):
    print(f"Welcome, {name}!")

welcome("Sarah")`}
                  />
                </div>
                <div className="glass-card p-4 bg-green-500/10 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-3">Multiple Parameters</h4>
                  <CodeBlock
                    id="multiple-params"
                    code={`def add_numbers(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")

add_numbers(5, 3)`}
                  />
                </div>
              </div>
            </div>

            {/* Return Values */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Functions that Return Values</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Functions can give back results using the <code className="text-primary">return</code> statement. This makes them even more powerful!
              </p>

              <CodeBlock
                id="return-values"
                code={`# Functions that return values
def add(a, b):
    result = a + b
    return result  # Give back the result

def get_full_name(first, last):
    full_name = first + " " + last
    return full_name

def is_adult(age):
    return age >= 18  # Returns True or False

def calculate_tip(bill, tip_percent):
    tip_amount = bill * (tip_percent / 100)
    total = bill + tip_amount
    return tip_amount, total  # Return multiple values!

# Using functions with return values
sum_result = add(10, 5)
print(f"10 + 5 = {sum_result}")

name = get_full_name("John", "Smith")
print(f"Full name: {name}")

adult_status = is_adult(20)
print(f"Is adult: {adult_status}")

# Getting multiple return values
tip_amount, total_bill = calculate_tip(50, 15)
print("Tip: $" + str(round(tip_amount, 2)))
print("Total: $" + str(round(total_bill, 2)))`}
              />

              <ExampleBox title="Build a Calculator Function">
                <p className="text-muted-foreground mb-3">Create calculator functions that return results:</p>
                <CodeBlock
                  id="calculator-functions"
                  code={`# Calculator functions
def multiply(x, y):
    return x * y

def divide(x, y):
    if y != 0:
        return x / y
    else:
        return "Cannot divide by zero!"

def power(base, exponent):
    return base ** exponent

def get_circle_area(radius):
    pi = 3.14159
    area = pi * radius * radius
    return area

# Using the calculator
print("Calculator Results:")
print(f"5 × 3 = {multiply(5, 3)}")
print(f"10 ÷ 2 = {divide(10, 2)}")
print(f"2³ = {power(2, 3)}")
print(f"Circle area (radius 5) = {round(get_circle_area(5), 2)}")

# Store results for later use
area = get_circle_area(10)
print(f"A circle with radius 10 has area {round(area, 2)}")`}
                />
              </ExampleBox>
            </div>

            {/* Real-World Function Examples */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Real-World Function Examples</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Let's see how functions are used in real programming scenarios!
              </p>

              <CodeBlock
                id="real-world-functions"
                code={`# User management functions
def create_username(first_name, last_name):
    username = (first_name + last_name).lower()
    return username

def validate_password(password):
    if len(password) < 8:
        return False, "Password too short"
    if not any(c.isdigit() for c in password):
        return False, "Password needs a number"
    return True, "Password is valid"

def format_phone(phone):
    # Remove all non-digits
    digits = ''.join(c for c in phone if c.isdigit())
    if len(digits) == 10:
        return f"({digits[:3]}) {digits[3:6]}-{digits[6:]}"
    return "Invalid phone number"

# E-commerce functions
def calculate_discount(price, discount_percent):
    discount_amount = price * (discount_percent / 100)
    final_price = price - discount_amount
    return final_price, discount_amount

def calculate_shipping(weight, distance):
    base_rate = 5.00
    weight_rate = weight * 0.50
    distance_rate = distance * 0.10
    total_shipping = base_rate + weight_rate + distance_rate
    return total_shipping

# Using real-world functions
username = create_username("John", "Doe")
print(f"Username: {username}")

is_valid, message = validate_password("mypass123")
print(f"Password check: {message}")

phone = format_phone("1234567890")
print(f"Formatted phone: {phone}")

final_price, savings = calculate_discount(100, 20)
print("Price after 20% discount: $" + str(round(final_price, 2)) + " (saved $" + str(round(savings, 2)) + ")")

shipping = calculate_shipping(2.5, 100)
print("Shipping cost: $" + str(round(shipping, 2)))`}
              />
            </div>

            {/* Function Best Practices */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Function Best Practices</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="glass-card p-4 bg-green-500/10 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-3">✅ Good Practices</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Use descriptive names: <code className="text-primary">calculate_total()</code></li>
                    <li>• Keep functions short and focused</li>
                    <li>• Use comments to explain complex logic</li>
                    <li>• Return values instead of just printing</li>
                    <li>• Test your functions with different inputs</li>
                  </ul>
                </div>
                <div className="glass-card p-4 bg-red-500/10 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">❌ Avoid These</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Vague names: <code className="text-muted-foreground">func1()</code>, <code className="text-muted-foreground">do_stuff()</code></li>
                    <li>• Functions that do too many things</li>
                    <li>• No comments for complex functions</li>
                    <li>• Functions that are too long</li>
                    <li>• Not handling edge cases</li>
                  </ul>
                </div>
              </div>

              <CodeBlock
                id="best-practices"
                code={`# Good function examples
def calculate_bmi(weight_kg, height_m):
    """Calculate Body Mass Index given weight and height."""
    if height_m <= 0:
        return None  # Handle invalid input
    
    bmi = weight_kg / (height_m ** 2)
    return round(bmi, 1)

def get_grade_letter(score):
    """Convert numeric score to letter grade."""
    if score >= 90:
        return 'A'
    elif score >= 80:
        return 'B'
    elif score >= 70:
        return 'C'
    elif score >= 60:
        return 'D'
    else:
        return 'F'

def format_currency(amount):
    """Format number as currency string."""
    return "$" + str(round(amount, 2))

# Using well-designed functions
bmi = calculate_bmi(70, 1.75)
if bmi:
    print(f"BMI: {bmi}")

grade = get_grade_letter(85)
print(f"Grade: {grade}")

price = format_currency(19.99)
print(f"Price: {price}")`}
              />
            </div>

            {/* Summary */}
            <div className="glass-card p-8 mb-8 bg-primary/5 border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-6">🎉 Function Master!</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Incredible! You now know how to create your own functions. This is a huge milestone - functions are the building blocks of all great programs!
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="glass-card p-4 bg-background/50">
                  <h4 className="font-semibold text-primary mb-2">✅ You Learned</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Creating simple functions</li>
                    <li>• Using parameters in functions</li>
                    <li>• Returning values from functions</li>
                    <li>• Function best practices</li>
                    <li>• Real-world function examples</li>
                  </ul>
                </div>
                <div className="glass-card p-4 bg-background/50">
                  <h4 className="font-semibold text-primary mb-2">🚀 Next Steps</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Practice creating your own functions</li>
                    <li>• Combine functions with loops and conditions</li>
                    <li>• Build small programs using functions</li>
                    <li>• Learn about advanced function features</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="./6">
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <ArrowLeft className="w-4 h-4" />
                    Previous Lesson
                  </Button>
                </Link>
                <Link href="./8">
                  <Button className="gap-2 bg-primary hover:bg-primary/90">
                    Final Challenge
                    <ArrowLeft className="w-4 h-4 rotate-180" />
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