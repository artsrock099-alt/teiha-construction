"use client";

import React, { useState, useRef, useEffect, type KeyboardEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, ArrowRight, MessageCircle, Briefcase, Compass, TrendingUp, Zap, BookOpen, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const quickActions = [
  { icon: Briefcase, label: "Explore Services", href: "/services" },
  { icon: Compass, label: "View Projects", href: "/projects" },
  { icon: Zap, label: "Learn About AI Studio", href: "/ai-studio" },
  { icon: MapPin, label: "Book Consultation", href: "/contact" },
  { icon: Users, label: "Contact Us", href: "/contact" },
];

const suggestedQuestions = [
  { question: "What services do you offer?", href: "/services" },
  { question: "How can AI improve my project?", href: "/ai-studio" },
  { question: "Do you work internationally?", href: "/contact" },
  { question: "How do I start a project?", href: "/contact" },
  { question: "What industries do you serve?", href: "/services" },
];

const placeholderResponses: Record<string, string> = {
  "What services do you offer?": "We offer architectural design, construction, civil engineering, structural engineering, interior design, renovation, project management, smart building consulting, sustainable design, and construction supervision services. You can learn more about each service by visiting our Services page!",
  "How can AI improve my project?": "AI helps us optimize project planning, provide accurate cost estimates, generate design concepts, analyze site conditions, and improve sustainability. You can explore our AI capabilities in the AI Studio!",
  "Do you work internationally?": "Yes! We are based in Uganda and work on projects across East Africa and internationally. Please contact us to discuss your specific needs!",
  "How do I start a project?": "Great question! The best way to get started is to book a consultation with our team. We'll discuss your requirements, answer your questions, and outline the next steps.",
  "What industries do you serve?": "We serve residential, commercial, healthcare, education, hospitality, government, industrial, mixed-use, and infrastructure sectors. Explore our projects to see our work across these industries!",
  "default": "Thanks for reaching out! Our AI Project Advisor is here to help. For personalized assistance, we recommend booking a consultation with our team of experts!",
};

export function FloatingAIAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Handle ESC key to close panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent | globalThis.KeyboardEvent) => {
      if ("key" in e && e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown as EventListener);
    return () => document.removeEventListener("keydown", handleKeyDown as EventListener);
  }, []);

  // Scroll chat to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false);
    if (!isOpen && messages.length === 0) {
      addWelcomeMessage();
    }
  };

  const addWelcomeMessage = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: "assistant",
        content: "Hi there! I'm TEI-HA's AI Project Advisor. I can help you explore our services, view our projects, learn about our AI capabilities, or guide you toward booking a consultation. How can I assist you today?",
        timestamp: new Date(),
      },
    ]);
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMessageId = Date.now().toString();
    setMessages((prev) => [
      ...prev,
      {
        id: userMessageId,
        role: "user",
        content: text,
        timestamp: new Date(),
      },
    ]);
    setInput("");
    // Simulate AI response
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let response = placeholderResponses["default"];
      for (const [q, a] of Object.entries(placeholderResponses)) {
        if (lowerText.includes(q.toLowerCase().split(" ").slice(0, 3).join(" "))) {
          response = a;
          break;
        }
      }
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response,
          timestamp: new Date(),
        },
      ]);
    }, 800);
  };

  const handleQuickQuestion = (q: string, href: string) => {
    handleSendMessage(q);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[90vw] max-w-[450px] h-[70vh] md:h-[600px] bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-surface/80 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-heading">AI Project Advisor</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Close AI Project Advisor"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6" ref={chatContainerRef}>
              {/* Quick Actions (only visible if no messages yet) */}
              {messages.length === 0 && (
                <>
                  <div className="space-y-4">
                    <p className="text-body">
                      I can help you explore our services, view our projects, learn about our AI capabilities, or guide you toward booking a consultation.
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                      {quickActions.map((action, idx) => (
                        <Link href={action.href} key={action.label} className="w-full" onClick={() => setIsOpen(false)}>
                          <Button variant="ghost" className="w-full justify-start gap-3 px-4 py-3">
                            <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                              <action.icon className="h-4 w-4 text-primary" />
                            </div>
                            <div className="text-left">
                              <p className="font-medium text-heading text-sm">{action.label}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground" />
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <p className="text-sm font-medium text-heading">Suggested questions</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((q, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuickQuestion(q.question, q.href)}
                          className="px-3 py-2 rounded-full text-sm border border-border hover:bg-muted text-left"
                        >
                          {q.question}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Messages */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex gap-3 items-start",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {msg.role === "assistant" && (
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-3",
                    msg.role === "user"
                      ? "bg-primary text-white"
                      : "bg-muted text-heading"
                  )}>
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                  {msg.role === "user" && (
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-surface">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(input);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about your project..."
                  className="flex-1 px-4 py-3 rounded-full border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="rounded-full"
                  disabled={!input.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <AnimatePresence>
        {!isOpen && showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-surface border border-border rounded-lg shadow-lg whitespace-nowrap"
          >
            <span className="text-sm font-medium text-heading">
              Need help planning your project?
            </span>
            <div className="absolute -bottom-1 right-5 w-2 h-2 bg-surface border-r border-b border-border rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        type="button"
        onClick={handleOpenClose}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-indigo-600"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-label={isOpen ? "Close AI Project Advisor" : "Open AI Project Advisor"}
      >
        {isOpen ? (
          <X className="h-7 w-7 md:h-8 md:w-8 text-white" />
        ) : (
          <Sparkles className="h-7 w-7 md:h-8 md:w-8 text-white" />
        )}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-40 pointer-events-none"
        />
      </motion.button>
    </div>
  );
}
