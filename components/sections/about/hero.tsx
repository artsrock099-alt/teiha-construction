"use client";

import * as React from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FadeUp } from "@/lib/animations";
import { GradientBlob } from "@/components/decorative/gradient-blob";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <GradientBlob className="top-20 -left-20 lg:left-0" />
      <GradientBlob color1="#10b981" color2="#3b82f6" color3="#60a5fa" className="bottom-0 -right-20 lg:right-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeUp>
          <Breadcrumb className="mb-8" />
        </FadeUp>
        <FadeUp delay={0.1} className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Building the Future of
            <span className="text-gradient-ai bg-clip-text text-transparent block mt-2">
              Architecture & Construction
            </span>
          </h1>
          <p className="text-lg md:text-xl text-body max-w-2xl mx-auto">
            At TEI-HA, we're redefining what's possible by combining timeless architectural principles with cutting-edge artificial intelligence.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
