import * as React from "react";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SplitSectionProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

export function SplitSection({
  leftContent,
  rightContent,
  reverse = false,
  className,
}: SplitSectionProps) {
  return (
    <section className={cn("py-24 md:py-32", className)}>
      <Container>
        <div
          className={cn(
            "grid gap-12 items-center",
            reverse ? "md:grid-cols-2 md:grid-flow-dense" : "md:grid-cols-2"
          )}
        >
          <div className={reverse ? "md:col-start-2" : ""}>
            <FadeUp>{leftContent}</FadeUp>
          </div>
          <div className={reverse ? "md:col-start-1" : ""}>
            <FadeUp delay={0.1}>{rightContent}</FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
