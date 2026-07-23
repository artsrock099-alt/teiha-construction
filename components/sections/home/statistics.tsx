import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureGrid } from "@/components/layouts/feature-grid";
import { StatisticCard } from "@/components/cards/statistic-card";
import { CheckCircle, Users, Globe, TrendingUp } from "lucide-react";

const STATS = [
  {
    icon: <CheckCircle />,
    value: 200,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: <Users />,
    value: 150,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: <TrendingUp />,
    value: 15,
    suffix: "+ Years",
    label: "Industry Experience",
  },
];

export function Statistics() {
  return (
    <Section variant="default" size="lg">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="By the Numbers"
          subtitle="Our track record speaks for itself."
          className="mb-12"
        />
        <FeatureGrid columns={3}>
          {STATS.map((stat, idx) => (
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
