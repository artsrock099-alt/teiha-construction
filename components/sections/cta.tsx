import * as React from "react";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/lib/animations";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  variant?: "default" | "ai";
}

export function CTASection({
  title,
  subtitle,
  children,
  variant = "default",
}: CTASectionProps) {
  const bgClass = variant === "ai" ? "gradient-ai" : "bg-dark";

  return (
    <section className={`py-24 md:py-32 ${bgClass}`}>
      <Container>
        <FadeUp className="text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl mb-10 opacity-90">
              {subtitle}
            </p>
          )}
          {children}
        </FadeUp>
      </Container>
    </section>
  );
}
