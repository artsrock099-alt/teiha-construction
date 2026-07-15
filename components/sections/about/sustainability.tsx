"use client";

import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureGrid } from "@/components/layouts/feature-grid";
import { StatisticCard } from "@/components/cards/statistic-card";
import { Leaf, Zap, Droplets, Recycle } from "lucide-react";

export function SustainabilityCommitment() {
  const stats = [
    {
      icon: <Leaf />,
      value: 85,
      suffix: "%",
      label: "Sustainable Materials Used",
    },
    {
      icon: <Zap />,
      value: 40,
      suffix: "%",
      label: "Energy Efficiency Improvement",
    },
    {
      icon: <Droplets />,
      value: 50,
      suffix: "%",
      label: "Water Usage Reduction",
    },
    {
      icon: <Recycle />,
      value: 90,
      suffix: "%",
      label: "Construction Waste Recycled",
    },
  ];

  return (
    <Section variant="muted">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Sustainability Commitment"
          subtitle="Building a better future for our planet"
          className="mb-16"
        />
        <FeatureGrid columns={4}>
          {stats.map((stat, idx) => (
            <StatisticCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={idx * 0.1}
            />
          ))}
        </FeatureGrid>
      </div>
    </Section>
  );
}
