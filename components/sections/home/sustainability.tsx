import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { StatisticCard } from "@/components/cards/statistic-card";
import { FeatureGrid } from "@/components/layouts/feature-grid";
import { Leaf, Zap, Droplets, Globe, TrendingUp } from "lucide-react";

const SUSTAINABILITY_STATS = [
  {
    icon: <Leaf />,
    value: 40,
    suffix: "%",
    label: "Reduced Carbon Emissions",
  },
  {
    icon: <Zap />,
    value: 50,
    suffix: "%",
    label: "Energy Efficiency",
  },
  {
    icon: <Droplets />,
    value: 30,
    suffix: "%",
    label: "Water Conservation",
  },
];

const SUSTAINABILITY_FEATURES = [
  "Green Building Practices",
  "Energy-Efficient Materials",
  "Waste Reduction",
  "Smart Sustainability",
];

export function Sustainability() {
  return (
    <Section size="xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-secondary font-medium mb-2">Our Commitment</p>
            <SectionHeader
              title="Building a Greener Future"
              className="text-left"
              align="left"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUSTAINABILITY_STATS.map((stat, idx) => (
              <StatisticCard
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SUSTAINABILITY_FEATURES.map((feature, idx) => (
            <div
              key={feature}
              className="border border-border rounded-xl p-6 text-center bg-surface hover:shadow-md transition-all duration-300"
            >
              <p className="font-semibold text-primary">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
