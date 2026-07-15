import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "muted" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, variant = "default", size = "lg", ...props }, ref) => {
    const variantClasses = {
      default: "bg-background",
      muted: "bg-muted",
      dark: "bg-dark text-white",
    };

    const sizeClasses = {
      sm: "py-16",
      md: "py-24",
      lg: "py-32",
      xl: "py-40",
    };

    return (
      <section
        ref={ref}
        className={cn(variantClasses[variant], sizeClasses[size], className)}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

export { Section, SectionHeader };
