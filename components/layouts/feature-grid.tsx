import * as React from "react";
import { cn } from "@/lib/utils";

interface FeatureGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | 4 | 5;
}

export function FeatureGrid({
  children,
  columns = 3,
  className,
  ...props
}: FeatureGridProps) {
  const columnClasses = {
    2: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  };

  return (
    <div
      className={cn(
        "grid gap-4 md:gap-6 lg:gap-8",
        columnClasses[columns],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
