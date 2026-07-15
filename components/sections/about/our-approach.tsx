"use client";

import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Ear, PenTool, Zap, Building2, CheckCircle2, Headphones } from "lucide-react";

export function OurApproach() {
  const steps = [
    {
      icon: <Ear />,
      title: "Listen",
      description:
        "We start by deeply understanding your needs, vision, and constraints. Your goals become our foundation.",
    },
    {
      icon: <PenTool />,
      title: "Design",
      description:
        "Our architects create initial concepts that balance aesthetics, functionality, and feasibility.",
    },
    {
      icon: <Zap />,
      title: "Optimize with AI",
      description:
        "Our AI models optimize designs for cost, sustainability, structural integrity, and energy efficiency.",
    },
    {
      icon: <Building2 />,
      title: "Build",
      description:
        "Our construction team executes with precision, using modern techniques and materials.",
    },
    {
      icon: <CheckCircle2 />,
      title: "Deliver",
      description:
        "We hand over a finished project that meets or exceeds every expectation, on time and on budget.",
    },
    {
      icon: <Headphones />,
      title: "Support",
      description:
        "Our relationship doesn't end at delivery. We're here to support you long after move-in.",
    },
  ];

  return (
    <Section>
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Our Approach"
          subtitle="A methodology designed for success"
          className="mb-16"
        />
        <Timeline>
          {steps.map((step, idx) => (
            <TimelineItem
              key={step.title}
              icon={step.icon}
              title={step.title}
              description={step.description}
              delay={idx * 0.1}
            />
          ))}
        </Timeline>
      </div>
    </Section>
  );
}
