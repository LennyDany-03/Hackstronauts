"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Play, Copy, Check, BookOpen, Lightbulb, Target, ArrowRight, ToggleLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PythonBasicsLesson4() {
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
                  <ToggleLeft className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Booleans & Logic</h1>
                  <p className="text-sm text-muted-foreground">Stage 1 • Lesson 4 of 8</p>
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
                <h2 className="text-2xl font-bold text-foreground m-0">True or False?</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Booleans are simple but powerful - they can only be True or False. They're the foundation of all
                decision-making in programming!
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="glass-card p-4 bg-primary/5 border border-primary/20">
                  <BookOpen className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">What You'll Learn</h4>
                  <p className="text-xs text-muted-foreground">Boolean values and logical operations</p>
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

            {/* Boolean Basics */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Boolean Basics</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Booleans represent truth values. In Python, they're written as{" "}
                <code className="text-primary">True</code> and <code className="text-primary">False</code> (notice the
                capital letters!).
              </p>

              <CodeBlock
                id="boolean-basics"
                code={`# Boolean values
is_sunny = True
is_raining = False
has_homework = True
is_weekend = False

print(is_sunny)     # True
print(is_raining)   # False
print(type(is_sunny))  # <class 'bool'>

# Booleans in action
if is_sunny:
    print("Great day for a walk!")
    
if not is_raining:
    print("No umbrella needed!")`}
              />

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="glass-card p-4 bg-green-500/10 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-2">✅ True Values</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • <code className="text-primary">True</code>
                    </li>
                    <li>• Any non-zero number</li>
                    <li>• Non-empty strings</li>
                    <li>• Non-empty lists</li>
                  </ul>
                </div>
                <div className="glass-card p-4 bg-red-500/10 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-2">❌ False Values</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • <code className="text-primary">False</code>
                    </li>
                    <li>• Zero (0, 0.0)</li>
                    <li>• Empty string ("")</li>
                    <li>• Empty list ([])</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Comparison Operators */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Comparison Operators</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Comparison operators let you compare values and get True or False as results.
              </p>

              <CodeBlock
                id="comparisons"
                code={`# Comparison operators
age = 18
height = 5.8
name = "Alice"

# Equality and inequality
print(age == 18)        # True (equal to)
print(age != 20)        # True (not equal to)
print(name == "Alice")  # True

# Numerical comparisons
print(age > 16)         # True (greater than)
print(age < 25)         # True (less than)
print(height >= 5.8)    # True (greater than or equal)
print(height <= 6.0)    # True (less than or equal)

# String comparisons (alphabetical order)
print("apple" < "banana")  # True
print("Alice" == "alice")  # False (case sensitive!)`}
              />

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="glass-card p-4 bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Equality</h4>
                  <p className="text-xs text-muted-foreground mb-2">== (equal), != (not equal)</p>
                  <code className="text-xs text-primary">5 == 5 # True</code>
                </div>
                <div className="glass-card p-4 bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Size</h4>
                  <p className="text-xs text-muted-foreground mb-2">&gt;, &lt;, &gt;=, &lt;=</p>
                  <code className="text-xs text-primary">10 &gt; 5 # True</code>
                </div>
                <div className="glass-card p-4 bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Membership</h4>
                  <p className="text-xs text-muted-foreground mb-2">in, not in</p>
                  <code className="text-xs text-primary">"a" in "cat" # True</code>
                </div>
              </div>

              <ExampleBox title="Practice Comparisons">
                <p className="text-muted-foreground mb-3">Try these comparisons:</p>
                <CodeBlock
                  id="comparison-practice"
                  code={`# Your turn to predict!
score = 85
passing_grade = 60
perfect_score = 100

# What will these return?
print(score >= passing_grade)    # ?
print(score == perfect_score)    # ?
print(score > 90)                # ?

# String comparisons
favorite_color = "blue"
print("blue" in favorite_color)  # ?
print(favorite_color.startswith("bl"))  # ?`}
                />
              </ExampleBox>
            </div>

            {/* Logical Operators */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Logical Operators</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Logical operators let you combine multiple boolean expressions. They're like the "and", "or", and "not"
                of programming!
              </p>

              <CodeBlock
                id="logical-operators"
                code={`# Logical operators
age = 20
has_license = True
has_car = False

# AND - both conditions must be True
can_drive_alone = age >= 18 and has_license
print(can_drive_alone)  # True

# OR - at least one condition must be True
can_get_somewhere = has_license or has_car
print(can_get_somewhere)  # True

# NOT - flips True to False and vice versa
is_minor = not (age >= 18)
print(is_minor)  # False

# Complex combinations
can_drive_to_store = (age >= 18 and has_license) and (has_car or "can borrow car")
print(can_drive_to_store)  # Depends on the conditions!`}
              />

              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="glass-card p-4 bg-blue-500/10 border border-blue-500/20">
                  <h4 className="font-semibold text-blue-400 mb-3">AND Operator</h4>
                  <p className="text-xs text-muted-foreground mb-2">Both must be True</p>
                  <div className="space-y-1 text-xs">
                    <div>
                      <code className="text-green-400">True and True = True</code>
                    </div>
                    <div>
                      <code className="text-red-400">True and False = False</code>
                    </div>
                    <div>
                      <code className="text-red-400">False and True = False</code>
                    </div>
                    <div>
                      <code className="text-red-400">False and False = False</code>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-4 bg-green-500/10 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-3">OR Operator</h4>
                  <p className="text-xs text-muted-foreground mb-2">At least one must be True</p>
                  <div className="space-y-1 text-xs">
                    <div>
                      <code className="text-green-400">True or True = True</code>
                    </div>
                    <div>
                      <code className="text-green-400">True or False = True</code>
                    </div>
                    <div>
                      <code className="text-green-400">False or True = True</code>
                    </div>
                    <div>
                      <code className="text-red-400">False or False = False</code>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-4 bg-purple-500/10 border border-purple-500/20">
                  <h4 className="font-semibold text-purple-400 mb-3">NOT Operator</h4>
                  <p className="text-xs text-muted-foreground mb-2">Flips the value</p>
                  <div className="space-y-1 text-xs">
                    <div>
                      <code className="text-green-400">not True = False</code>
                    </div>
                    <div>
                      <code className="text-green-400">not False = True</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-World Examples */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Real-World Boolean Logic</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Let's see how booleans work in practical scenarios you might encounter every day!
              </p>

              <CodeBlock
                id="real-world-booleans"
                code={`# Real-world boolean logic examples

# Student eligibility checker
age = 17
gpa = 3.5
has_application = True

# Can apply to college?
can_apply = age >= 16 and gpa >= 2.0 and has_application
print(f"Can apply to college: {can_apply}")

# Weather decision maker
is_sunny = True
temperature = 75
has_umbrella = False

# Good day for outdoor activities?
good_for_outdoors = is_sunny and temperature > 60
print(f"Good for outdoors: {good_for_outdoors}")

# Should bring umbrella?
might_rain = not is_sunny
should_bring_umbrella = might_rain and not has_umbrella
print(f"Bring umbrella: {should_bring_umbrella}")

# Online shopping cart
item_price = 25.99
has_coupon = True
free_shipping_threshold = 50

# Calculate final conditions
gets_discount = has_coupon and item_price > 20
gets_free_shipping = item_price >= free_shipping_threshold
is_good_deal = gets_discount or gets_free_shipping

print(f"Gets discount: {gets_discount}")
print(f"Free shipping: {gets_free_shipping}")
print(f"Good deal: {is_good_deal}")`}
              />

              <ExampleBox title="Build Your Own Logic">
                <p className="text-muted-foreground mb-3">Create a movie night decision maker:</p>
                <CodeBlock
                  id="movie-logic"
                  code={`# Movie night decision maker
have_time = True
have_snacks = False
good_movie_available = True
friends_available = True

# Should we have movie night?
# You decide the logic!
movie_night = have_time and (have_snacks or "can buy snacks") and good_movie_available

# Bonus: Should we invite friends?
invite_friends = movie_night and friends_available

print(f"Movie night: {movie_night}")
print(f"Invite friends: {invite_friends}")

# Try changing the variables and see what happens!`}
                />
              </ExampleBox>
            </div>

            {/* Summary */}
            <div className="glass-card p-8 mb-8 bg-primary/5 border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-6">🎉 Logic Master!</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fantastic! You now understand boolean logic - the foundation of all decision-making in programming. This
                will be crucial for if statements and loops!
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="glass-card p-4 bg-background/50">
                  <h4 className="font-semibold text-primary mb-2">✅ You Mastered</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Boolean values (True/False)</li>
                    <li>• Comparison operators</li>
                    <li>• Logical operators (and, or, not)</li>
                    <li>• Real-world boolean logic</li>
                  </ul>
                </div>
                <div className="glass-card p-4 bg-background/50">
                  <h4 className="font-semibold text-primary mb-2">🎯 Next Up</h4>
                  <p className="text-sm text-muted-foreground">Lists and collections of data!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="./3">
                  <Button
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
                  >
                    Previous: Strings & Text
                  </Button>
                </Link>
                <Link href="./5">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    Next: Lists & Collections
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
