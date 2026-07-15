import * as React from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  size?: number;
  spacing?: number;
}

export function DotPattern({
  color = "#e2e8f0",
  size = 2,
  spacing = 24,
  className,
  ...props
}: DotPatternProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
      style={{
        backgroundImage: `radial-gradient(${color} ${size}px, transparent ${size}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
      }}
      {...props}
    />
  );
}
