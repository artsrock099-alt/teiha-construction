import * as React from "react";
import { Container } from "@/components/ui/container";
import { FadeUp, Stagger } from "@/lib/animations";

interface HeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  align?: "left" | "center";
}

export function Hero({
  title,
  subtitle,
  children,
  align = "center",
}: HeroProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <section className="py-32 md:py-40 lg:py-48">
      <Container size="full">
        <Stagger className={alignClasses[align]}>
          <FadeUp className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              {title}
            </h1>
          </FadeUp>
          {subtitle && (
            <FadeUp className="max-w-2xl mx-auto mb-10" delay={0.1}>
              <p className="text-lg md:text-xl lg:text-2xl text-body">
                {subtitle}
              </p>
            </FadeUp>
          )}
          {children && (
            <FadeUp className="mt-8" delay={0.2}>
              {children}
            </FadeUp>
          )}
        </Stagger>
      </Container>
    </section>
  );
}
