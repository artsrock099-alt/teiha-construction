import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, subtitle, align = "center", ...props }, ref) => {
    const alignClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    };

    return (
      <div
        ref={ref}
        className={cn("max-w-3xl", alignClasses[align], className)}
        {...props}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-body">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);
SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
