import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "dark";
  float?: boolean;
}

const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className, variant = "light", float = false, ...props }, ref) => {
    const variantClasses = {
      light: "bg-white/60 backdrop-blur-md border border-white/20 shadow-lg",
      dark: "bg-dark/60 backdrop-blur-md border border-white/10 shadow-lg",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl",
          variantClasses[variant],
          float && "animate-float",
          className
        )}
        {...props}
      />
    );
  }
);
GlassPanel.displayName = "GlassPanel";

export { GlassPanel };
