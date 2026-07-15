import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconContainerVariants = cva(
  "inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        square: "rounded-lg",
        circle: "rounded-full",
        gradient: "rounded-lg gradient-ai text-white",
        glass: "rounded-xl bg-white/60 backdrop-blur-md border border-white/20",
        filled: "rounded-lg bg-muted",
        outline: "rounded-lg border border-border",
      },
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  }
);

export interface IconContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconContainerVariants> {
  children: React.ReactNode;
}

const IconContainer = React.forwardRef<HTMLDivElement, IconContainerProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(iconContainerVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
IconContainer.displayName = "IconContainer";

export { IconContainer, iconContainerVariants };
