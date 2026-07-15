import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientBlobProps extends React.HTMLAttributes<HTMLDivElement> {
  color1?: string;
  color2?: string;
  color3?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

export function GradientBlob({
  color1 = "#2563eb",
  color2 = "#7c3aed",
  color3 = "#0ea5e9",
  size = "lg",
  animate = true,
  className,
  ...props
}: GradientBlobProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]",
  };

  return (
    <div
      className={cn(
        "absolute -z-10 rounded-full blur-3xl opacity-30",
        sizeClasses[size],
        animate && "animate-pulse",
        className
      )}
      style={{
        background: `radial-gradient(circle at 30% 30%, ${color1}, transparent), 
                     radial-gradient(circle at 70% 70%, ${color2}, transparent), 
                     radial-gradient(circle at 40% 80%, ${color3}, transparent)`,
      }}
      {...props}
    />
  );
}
