"use client";

import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureGrid } from "@/components/layouts/feature-grid";
import { FeatureCard } from "@/components/cards/feature-card";
import {
  CheckCircle2,
  Briefcase,
  Sparkles,
  Clock,
  ShieldCheck,
  HandHeart,
} from "lucide-react";

export function OurCoreValues() {
  const values = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "Quality",
      description:
        "Maintaining the highest standards through quality materials and skilled professionals.",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Professionalism",
      description:
        "Qualified, skilled, and professional in every aspect of our work.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "Innovation",
      description:
        "Continuously improving our services through modern technologies, digital transformation, and AI-powered engineering solutions.",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Timely Delivery",
      description:
        "Completing every project within agreed timelines without compromising quality.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Safety",
      description:
        "Creating safe working environments for our employees, clients, and surrounding communities.",
    },
    {
      icon: <HandHeart className="h-6 w-6 text-primary" />,
      title: "Responsibility",
      description:
        "Taking full responsibility across every stage of project planning, execution, delivery, and long-term client success.",
    },
  ];

  return (
    <Section>
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Our Core Values"
          className="mb-16"
        />
        <FeatureGrid columns={3}>
          {values.map((value, idx) => (
            <FeatureCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={idx * 0.1}
            />
          ))}
        </FeatureGrid>
      </div>
    </Section>
  );
}
