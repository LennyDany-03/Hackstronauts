"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Play, Copy, Check, BookOpen, Lightbulb, Target, ArrowRight, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PythonBasicsLesson5() {
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
                  <List className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Lists & Collections</h1>
                  <p className="text-sm text-muted-foreground">Stage 1 • Lesson 5 of 8</p>
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
                <h2 className="text-2xl font-bold text-foreground m-0">Organizing Data with Lists!</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Lists are like containers that can hold multiple items. Think of them as shopping lists, to-do lists, or
                any collection of related things!
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="glass-card p-4 bg-primary/5 border border-primary/20">
                  <BookOpen className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">What You'll Learn</h4>
                  <p className="text-xs text-muted-foreground">Creating and working with lists</p>
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

            {/* Creating Lists */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Creating Lists</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Lists are created using square brackets <code className="text-primary">[]</code> and can contain any
                type of data - numbers, strings, booleans, even other lists!
              </p>

              <CodeBlock
                id="creating-lists"
                code={`# Creating different types of lists
fruits = ["apple", "banana", "orange", "grape"]
numbers = [1, 2, 3, 4, 5]
mixed = ["Alice", 25, True, 3.14]
empty_list = []

print(fruits)    # ['apple', 'banana', 'orange', 'grape']
print(numbers)   # [1, 2, 3, 4, 5]
print(mixed)     # ['Alice', 25, True, 3.14]
print(empty_list)  # []

# Check the type and length
print(type(fruits))  # <class 'list'>
print(len(fruits))   # 4 (number of items)`}
              />

              <ExampleBox title="Create Your Own Lists">
                <p className="text-muted-foreground mb-3">Make lists for things you like:</p>
                <CodeBlock
                  id="personal-lists"
                  code={`# Your personal lists
favorite_colors = ["blue", "green", "purple"]
lucky_numbers = [7, 13, 21]
hobbies = ["reading", "gaming", "cooking"]
goals = ["learn Python", "build an app", "get a job"]

print("My favorite colors:", favorite_colors)
print("My lucky numbers:", lucky_numbers)
print("My hobbies:", hobbies)
print("My goals:", goals)

# How many goals do you have?
print(f"I have {len(goals)} goals!")`}
                />
              </ExampleBox>
            </div>

            {/* Accessing List Items */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Accessing List Items</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                You can access individual items in a list using their index (position). Python starts counting from 0!
              </p>

              <CodeBlock
                id="accessing-items"
                code={`# Accessing list items by index
colors = ["red", "green", "blue", "yellow", "purple"]

# Positive indexing (from the start)
print(colors[0])    # red (first item)
print(colors[1])    # green (second item)
print(colors[2])    # blue (third item)

# Negative indexing (from the end)
print(colors[-1])   # purple (last item)
print(colors[-2])   # yellow (second to last)

# Getting multiple items (slicing)
print(colors[1:4])  # ['green', 'blue', 'yellow'] (items 1, 2, 3)
print(colors[:3])   # ['red', 'green', 'blue'] (first 3 items)
print(colors[2:])   # ['blue', 'yellow', 'purple'] (from item 2 to end)`}
              />

              <div className="glass-card p-6 bg-primary/5 border border-primary/20 mt-6">
                <h4 className="font-semibold text-primary mb-3">📍 List Index Reference</h4>
                <div className="grid grid-cols-5 gap-2 text-center text-sm">
                  <div className="glass-card p-2 bg-background/50">
                    <div className="text-primary font-mono">"red"</div>
                    <div className="text-xs text-muted-foreground">Index: 0</div>
                  </div>
                  <div className="glass-card p-2 bg-background/50">
                    <div className="text-primary font-mono">"green"</div>
                    <div className="text-xs text-muted-foreground">Index: 1</div>
                  </div>
                  <div className="glass-card p-2 bg-background/50">
                    <div className="text-primary font-mono">"blue"</div>
                    <div className="text-xs text-muted-foreground">Index: 2</div>
                  </div>
                  <div className="glass-card p-2 bg-background/50">
                    <div className="text-primary font-mono">"yellow"</div>
                    <div className="text-xs text-muted-foreground">Index: 3</div>
                  </div>
                  <div className="glass-card p-2 bg-background/50">
                    <div className="text-primary font-mono">"purple"</div>
                    <div className="text-xs text-muted-foreground">Index: 4</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modifying Lists */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Modifying Lists</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Lists are mutable, which means you can change them after creating them. You can add, remove, and modify
                items!
              </p>

              <CodeBlock
                id="modifying-lists"
                code={`# Starting with a shopping list
shopping_list = ["milk", "bread", "eggs"]
print("Original list:", shopping_list)

# Adding items
shopping_list.append("cheese")        # Add to end
print("After append:", shopping_list)

shopping_list.insert(1, "butter")     # Insert at position 1
print("After insert:", shopping_list)

# Changing items
shopping_list[0] = "almond milk"      # Change first item
print("After change:", shopping_list)

# Removing items
shopping_list.remove("bread")         # Remove by value
print("After remove:", shopping_list)

removed_item = shopping_list.pop()    # Remove and return last item
print("Removed:", removed_item)
print("Final list:", shopping_list)`}
              />

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="glass-card p-4 bg-green-500/10 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-3">➕ Adding Items</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • <code className="text-primary">append(item)</code> - Add to end
                    </li>
                    <li>
                      • <code className="text-primary">insert(index, item)</code> - Add at position
                    </li>
                    <li>
                      • <code className="text-primary">extend(list)</code> - Add multiple items
                    </li>
                  </ul>
                </div>
                <div className="glass-card p-4 bg-red-500/10 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">➖ Removing Items</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • <code className="text-primary">remove(item)</code> - Remove by value
                    </li>
                    <li>
                      • <code className="text-primary">pop(index)</code> - Remove by position
                    </li>
                    <li>
                      • <code className="text-primary">clear()</code> - Remove all items
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* List Methods */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Useful List Methods</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Lists come with many built-in methods to help you work with your data efficiently.
              </p>

              <CodeBlock
                id="list-methods"
                code={`# Working with a list of scores
scores = [85, 92, 78, 96, 88, 92]
print("Scores:", scores)

# Finding information
print("Highest score:", max(scores))      # 96
print("Lowest score:", min(scores))       # 78
print("Average score:", sum(scores) / len(scores))  # 88.5

# Counting and finding
print("Number of 92s:", scores.count(92))  # 2
print("Position of 96:", scores.index(96)) # 3

# Sorting (changes the original list)
scores.sort()
print("Sorted scores:", scores)           # [78, 85, 88, 92, 92, 96]

# Reversing
scores.reverse()
print("Reversed scores:", scores)         # [96, 92, 92, 88, 85, 78]

# Creating a sorted copy (doesn't change original)
original = [3, 1, 4, 1, 5]
sorted_copy = sorted(original)
print("Original:", original)              # [3, 1, 4, 1, 5]
print("Sorted copy:", sorted_copy)        # [1, 1, 3, 4, 5]`}
              />

              <ExampleBox title="Practice: Grade Manager">
                <p className="text-muted-foreground mb-3">Create a grade management system:</p>
                <CodeBlock
                  id="grade-manager"
                  code={`# Grade manager
grades = [88, 92, 76, 95, 83]

print("=== Grade Report ===")
print("All grades:", grades)
print("Number of grades:", len(grades))
print("Highest grade:", max(grades))
print("Lowest grade:", min(grades))
print("Average grade:", sum(grades) / len(grades))

# Add a new grade
new_grade = 90
grades.append(new_grade)
print(f"Added grade {new_grade}:", grades)

# Remove the lowest grade
lowest = min(grades)
grades.remove(lowest)
print(f"Removed lowest grade ({lowest}):", grades)

# Sort grades from highest to lowest
grades.sort(reverse=True)
print("Sorted (high to low):", grades)`}
                />
              </ExampleBox>
            </div>

            {/* Lists in Real Life */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Lists in Real Programming</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Lists are everywhere in programming! Here are some real-world examples of how you might use them.
              </p>

              <CodeBlock
                id="real-world-lists"
                code={`# Real-world list examples

# User management system
users = ["alice", "bob", "charlie", "diana"]
online_users = ["alice", "charlie"]

# Check if user is online
username = "alice"
if username in online_users:
    print(f"{username} is online!")
else:
    print(f"{username} is offline")

# Todo list application
todo_list = [
    "Buy groceries",
    "Finish homework",
    "Call mom",
    "Exercise"
]

# Mark task as complete (remove it)
completed_task = "Buy groceries"
if completed_task in todo_list:
    todo_list.remove(completed_task)
    print(f"Completed: {completed_task}")

print("Remaining tasks:")
for i, task in enumerate(todo_list, 1):
    print(f"{i}. {task}")

# Inventory system
inventory = ["laptop", "mouse", "keyboard", "monitor"]
new_items = ["webcam", "speakers"]

# Add new items to inventory
inventory.extend(new_items)
print("Updated inventory:", inventory)

# Check stock
item_to_check = "laptop"
if item_to_check in inventory:
    print(f"✅ {item_to_check} is in stock")
else:
    print(f"❌ {item_to_check} is out of stock")`}
              />
            </div>

            {/* Summary */}
            <div className="glass-card p-8 mb-8 bg-primary/5 border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-6">🎉 List Expert!</h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Excellent work! Lists are one of the most important data structures in Python. You'll use them
                constantly in real programming projects!
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="glass-card p-4 bg-background/50">
                  <h4 className="font-semibold text-primary mb-2">✅ You Learned</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Creating and accessing lists</li>
                    <li>• Adding and removing items</li>
                    <li>• List methods and operations</li>
                    <li>• Real-world applications</li>
                  </ul>
                </div>
                <div className="glass-card p-4 bg-background/50">
                  <h4 className="font-semibold text-primary mb-2">🎯 Next Up</h4>
                  <p className="text-sm text-muted-foreground">Getting input from users!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="./4">
                  <Button
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
                  >
                    Previous: Booleans & Logic
                  </Button>
                </Link>
                <Link href="./6">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    Next: Input & Output
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