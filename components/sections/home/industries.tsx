"use client";

import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeUp, Stagger } from "@/lib/animations";

const INDUSTRIES = [
  "Residential",
  "Commercial",
  "Education",
  "Healthcare",
  "Hospitality",
  "Government",
  "Industrial",
  "Mixed-use Developments",
];

export function Industries() {
  return (
    <Section variant="muted" size="xl">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Industries We Serve"
          subtitle="Tailored solutions for every sector, from residential to industrial."
          className="mb-12"
        />
        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, idx) => (
            <FadeUp key={industry} delay={idx * 0.05} className="text-center py-8 border border-border rounded-xl bg-surface hover:shadow-md transition-all duration-300">
              <p className="font-semibold text-primary">{industry}</p>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
