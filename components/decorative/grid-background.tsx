import * as React from "react";
import { cn } from "@/lib/utils";

interface GridBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "dark";
}

export function GridBackground({
  variant = "light",
  className,
  ...props
}: GridBackgroundProps) {
  const color = variant === "light" ? "#e2e8f0" : "#1e293b";

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10",
        className
      )}
      style={{
        backgroundImage: `
          linear-gradient(to right, ${color} 1px, transparent 1px),
          linear-gradient(to bottom, ${color} 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
      {...props}
    />
  );
}
