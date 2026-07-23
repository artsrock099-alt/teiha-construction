"use client";

import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureGrid } from "@/components/layouts/feature-grid";
import { StatisticCard } from "@/components/cards/statistic-card";
import { CheckCircle, Users, Globe, TrendingUp, Award } from "lucide-react";

export function CompanyStats() {
  const stats = [
    {
      icon: <CheckCircle />,
      value: 200,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      icon: <TrendingUp />,
      value: 15,
      suffix: "+",
      label: "Years of Experience",
    },
    {
      icon: <Users />,
      value: 50,
      suffix: "+",
      label: "Professionals",
    },
    {
      icon: <Award />,
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <Section>
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Company Statistics"
          subtitle="Our track record of excellence"
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
