"use client";

import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureGrid } from "@/components/layouts/feature-grid";
import { FeatureCard } from "@/components/cards/feature-card";
import {
  Sparkles,
  TrendingUp,
  DollarSign,
  Leaf,
  Users,
  Brain,
} from "lucide-react";

export function WhyAI() {
  const features = [
    {
      icon: <Sparkles />,
      title: "Design Quality",
      description:
        "AI helps us explore more design options and optimize for aesthetics, functionality, and user experience.",
    },
    {
      icon: <TrendingUp />,
      title: "Planning & Efficiency",
      description:
        "AI-powered scheduling and resource planning reduce project timelines by up to 30%.",
    },
    {
      icon: <DollarSign />,
      title: "Cost Forecasting",
      description:
        "Machine learning models predict costs with 95% accuracy, preventing budget overruns.",
    },
    {
      icon: <Leaf />,
      title: "Sustainability",
      description:
        "AI optimizes for energy efficiency, material selection, and environmental impact.",
    },
    {
      icon: <Users />,
      title: "Collaboration",
      description:
        "Our AI tools enhance communication between architects, engineers, and clients.",
    },
    {
      icon: <Brain />,
      title: "Better Decisions",
      description:
        "Data-driven insights help us make informed choices at every stage of the project.",
    },
  ];

  return (
    <Section variant="muted">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Why AI is Part of Our DNA"
          subtitle="How artificial intelligence delivers real business value"
          className="mb-16"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center">
            <span className="text-body text-sm">AI Illustration Placeholder</span>
          </div>
          <FeatureGrid columns={2} className="lg:gap-8">
            {features.map((feature, idx) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={idx * 0.1}
              />
            ))}
          </FeatureGrid>
        </div>
      </div>
    </Section>
  );
}
