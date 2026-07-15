import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "text" | "content" | "full";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "content", ...props }, ref) => {
    const sizeClasses = {
      text: "max-w-[720px]",
      content: "max-w-[1280px]",
      full: "max-w-[1440px]",
    };

    return (
      <div
        ref={ref}
        className={cn("mx-auto w-full px-6", sizeClasses[size], className)}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export { Container };
