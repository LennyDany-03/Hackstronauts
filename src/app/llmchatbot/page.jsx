"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, Bot, User, ArrowLeft, BookOpen, Code, HelpCircle, Lightbulb, Zap, Brain } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function LLMChatbotPage() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef(null)
  const router = useRouter()

  const suggestions = [
    { icon: Code, text: "Explain Python functions with examples", category: "Learn" },
    { icon: HelpCircle, text: "Help me debug my Python code", category: "Debug" },
    { icon: Lightbulb, text: "Python best practices for beginners", category: "Tips" },
    { icon: Brain, text: "Quiz me on Python concepts", category: "Practice" },
    { icon: Zap, text: "Advanced Python techniques", category: "Advanced" },
    { icon: BookOpen, text: "Python project ideas for practice", category: "Projects" },
  ]

  const sendMessageToAPI = async (conversationMessages) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: conversationMessages.map((msg) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.text,
          })),
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data.reply
    } catch (error) {
      console.error("Error calling chat API:", error)
      return "I'm sorry, I'm having trouble connecting to the server right now. Please try again later."
    }
  }

  const handleSuggestionClick = (suggestionText) => {
    setInputMessage(suggestionText)
    setShowWelcome(false)
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    setShowWelcome(false)

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInputMessage("")
    setIsTyping(true)

    try {
      const botReply = await sendMessageToAPI(updatedMessages)

      const botResponse = {
        id: Date.now() + 1,
        text: botReply,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botResponse])
    } catch (error) {
      console.error("Error getting bot response:", error)
      const errorResponse = {
        id: Date.now() + 1,
        text: "I'm sorry, I encountered an error. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorResponse])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages, isTyping])

  return (
    <div className="min-h-screen bg-background flex">
      <div className="hidden md:flex w-64 bg-card/50 backdrop-blur-sm border-r border-border/50 flex-col">
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <BookOpen className="h-8 w-8 text-primary" />
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-full blur-md"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">EduPlatform</h2>
              <p className="text-xs text-muted-foreground">AI Learning Assistant</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4">
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground mb-3">Learning Topics</div>
            {[
              "Python Basics",
              "Data Structures",
              "Functions",
              "OOP Concepts",
              "Error Handling",
              "File Operations",
              "Libraries",
            ].map((topic, index) => (
              <motion.button
                key={topic}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              >
                {topic}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-border/50">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="w-full justify-start">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Course
          </Button>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Mobile header */}
        <div className="md:hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="px-4 py-4">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" onClick={() => router.back()} className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center">
                <Bot className="h-6 w-6 text-primary mr-3" />
                <div>
                  <h1 className="text-lg font-bold text-foreground">Python Assistant</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col min-h-0">
          <AnimatePresence mode="wait">
            {showWelcome ? (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex-1 flex flex-col items-center justify-center px-4 py-8"
              >
                <div className="max-w-2xl mx-auto text-center space-y-8">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="relative inline-block mb-6">
                      <Bot className="h-16 w-16 text-primary mx-auto" />
                      <motion.div
                        className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What can I help with?</h1>
                    <p className="text-lg text-muted-foreground">
                      I'm your friendly Python learning companion. Ask me anything about Python programming!
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto"
                  >
                    {suggestions.map((suggestion, index) => (
                      <motion.button
                        key={suggestion.text}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        onClick={() => handleSuggestionClick(suggestion.text)}
                        className="glass-card p-4 rounded-xl text-left hover:bg-accent/50 transition-all duration-200 group"
                      >
                        <div className="flex items-start space-x-3">
                          <suggestion.icon className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                              {suggestion.text}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">{suggestion.category}</div>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 flex flex-col min-h-0"
              >
                <ScrollArea className="flex-1 px-4 py-4 sm:px-6 lg:px-8" ref={scrollAreaRef}>
                  <div className="max-w-4xl mx-auto">
                    <div className="space-y-4 pb-4">
                      {messages.map((message, index) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`flex items-start gap-2 sm:gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                        >
                          <Avatar className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0">
                            <AvatarFallback
                              className={message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-accent"}
                            >
                              {message.sender === "user" ? (
                                <User className="h-3 w-3 sm:h-4 sm:w-4" />
                              ) : (
                                <Bot className="h-3 w-3 sm:h-4 sm:w-4" />
                              )}
                            </AvatarFallback>
                          </Avatar>

                          <div
                            className={`max-w-[85%] sm:max-w-[80%] rounded-xl p-3 sm:p-4 ${
                              message.sender === "user" ? "bg-primary text-primary-foreground ml-auto" : "glass-card"
                            }`}
                          >
                            <div className="whitespace-pre-wrap text-sm break-words">{message.text}</div>
                            <div className="text-xs opacity-70 mt-2">
                              {message.timestamp.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </div>
                          </div>
                        </motion.div>
                      ))}

                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                            <AvatarFallback className="bg-accent">
                              <Bot className="h-3 w-3 sm:h-4 sm:w-4" />
                            </AvatarFallback>
                          </Avatar>
                          <div className="glass-card rounded-xl p-3 sm:p-4">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                              <div
                                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </ScrollArea>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="px-4 py-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about Python..."
                    className="pr-12 h-12 text-base glass-card border-border/50 focus:border-primary/50"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    size="sm"
                    className="absolute right-2 top-2 h-8 w-8 p-0 bg-primary hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-xs text-muted-foreground text-center mt-2">
                  Press Enter to send • Your friendly Python learning companion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
