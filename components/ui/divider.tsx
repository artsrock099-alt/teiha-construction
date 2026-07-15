import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const dividerVariants = cva("w-full", {
  variants: {
    variant: {
      simple: "h-px bg-border",
      gradient: "h-px bg-gradient-to-r from-transparent via-primary to-transparent",
      animated: "h-px bg-gradient-to-r from-transparent via-secondary to-transparent bg-[length:200%_100%] animate-pulse",
      section: "h-px bg-border my-12 md:my-24",
    },
  },
  defaultVariants: {
    variant: "simple",
  },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(dividerVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Divider.displayName = "Divider";

export { Divider, dividerVariants };
