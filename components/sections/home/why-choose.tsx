import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureGrid } from "@/components/layouts/feature-grid";
import { FeatureCard } from "@/components/cards/feature-card";
import {
  Sparkles,
  Users,
  Globe,
  Leaf,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const REASONS = [
  {
    icon: <Sparkles />,
    title: "AI-Powered Workflows",
    description: "Cutting-edge AI for smarter, faster project delivery.",
  },
  {
    icon: <Users />,
    title: "Experienced Team",
    description: "Industry experts with decades of combined experience.",
  },
  {
    icon: <Globe />,
    title: "Global Standards",
    description: "We adhere to the highest international quality standards.",
  },
  {
    icon: <Leaf />,
    title: "Sustainable Design",
    description: "Eco-friendly practices for a greener future.",
  },
  {
    icon: <MessageSquare />,
    title: "Transparent Communication",
    description: "Clear, honest updates at every stage of your project.",
  },
  {
    icon: <CheckCircle />,
    title: "Quality Assurance",
    description: "Rigorous quality checks to ensure excellence.",
  },
];

export function WhyChooseTeiha() {
  return (
    <Section size="xl">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Why Choose TEI-HA"
          subtitle="Our commitment to excellence sets us apart in the industry."
          className="mb-12"
        />
        <FeatureGrid columns={3}>
          {REASONS.map((reason, idx) => (
            <FeatureCard
              key={reason.title}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
              delay={idx * 0.1}
            />
          ))}
        </FeatureGrid>
      </div>
    </Section>
  );
}
