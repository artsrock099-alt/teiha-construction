"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { FadeUp } from "@/lib/animations";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal";
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, orientation = "vertical", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          orientation === "vertical"
            ? "relative space-y-12"
            : "relative flex overflow-x-auto pb-8",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Timeline.displayName = "Timeline";

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  date?: string;
  title?: string;
  description?: string;
  orientation?: "vertical" | "horizontal";
  delay?: number;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, icon, date, title, description, orientation = "vertical", delay = 0, children, ...props }, ref) => {
    return (
      <FadeUp delay={delay}>
        <div
          ref={ref}
          className={cn(
            orientation === "vertical"
              ? "relative pl-8 md:pl-12"
              : "relative flex-shrink-0 w-72 px-4 pt-8",
            className
          )}
          {...props}
        >
          {/* Connector line */}
          <div
            className={cn(
              "absolute bg-border",
              orientation === "vertical"
                ? "left-0 top-0 bottom-0 w-0.5 -translate-x-1/2"
                : "top-0 left-0 right-0 h-0.5 -translate-y-1/2"
            )}
          />

          {/* Icon */}
          <div
            className={cn(
              "absolute bg-primary text-white rounded-full flex items-center justify-center z-10",
              orientation === "vertical"
                ? "left-0 top-1 w-8 h-8 -translate-x-1/2"
                : "top-0 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2"
            )}
          >
            {icon}
          </div>

          {/* Date */}
          {date && (
            <p className="text-sm font-medium text-secondary mb-2">
              {date}
            </p>
          )}

          {/* Title & Description */}
          {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
          {description && <p className="text-body">{description}</p>}

          {/* Content */}
          {children}
        </div>
      </FadeUp>
    );
  }
);
TimelineItem.displayName = "TimelineItem";

export { Timeline, TimelineItem };
