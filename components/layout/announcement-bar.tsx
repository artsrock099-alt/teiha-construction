"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnnouncementBarProps {
  message: string;
  type?: "info" | "promo" | "news" | "event";
  dismissible?: boolean;
  className?: string;
}

export function AnnouncementBar({
  message,
  type = "info",
  dismissible = true,
  className,
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  const typeClasses = {
    info: "bg-primary text-white",
    promo: "bg-accent text-white",
    news: "bg-secondary text-white",
    event: "bg-gradient-to-r from-secondary to-purple-600 text-white",
  };

  return (
    <div className={cn("w-full py-3 px-6 text-center text-sm font-medium", typeClasses[type], className)}>
      {message}
      {dismissible && (
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 inline-flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
