"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-32 right-6 z-[1000] md:bottom-28">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-surface border border-border rounded-lg shadow-lg whitespace-nowrap"
          >
            <span className="text-sm font-medium text-heading">
              Chat with us on WhatsApp
            </span>
            <div className="absolute -bottom-1 right-5 w-2 h-2 bg-surface border-r border-b border-border rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/256707169796"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with TEI-HA Construction Services on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
      >
        <motion.button
          type="button"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="relative group flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full shadow-lg transition-all"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle className="h-7 w-7 md:h-8 md:w-8 text-white" strokeWidth={2.5} />
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
            className="absolute inset-0 rounded-full border-4 border-[#25D366] opacity-40 pointer-events-none"
          />
        </motion.button>
      </a>
    </div>
  );
}
