import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureGrid } from "@/components/layouts/feature-grid";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/cards/feature-card";
import { Sparkles, Zap, Calculator, Leaf, BarChart3, TrendingUp } from "lucide-react";

const AI_FEATURES = [
  {
    icon: <Sparkles />,
    title: "Smarter Building Design",
    description: "AI-assisted design optimization for better space utilization and aesthetics.",
  },
  {
    icon: <Zap />,
    title: "Faster Concept Generation",
    description: "Rapidly generate multiple design concepts in minutes, not weeks.",
  },
  {
    icon: <Calculator />,
    title: "Intelligent Cost Estimation",
    description: "Accurate, data-driven cost projections.",
  },
  {
    icon: <Leaf />,
    title: "Sustainable Material Recommendations",
    description: "AI suggests eco-friendly materials to reduce environmental impact.",
  },
  {
    icon: <BarChart3 />,
    title: "Optimized Construction Planning",
    description: "Smart scheduling and resource allocation for faster delivery.",
  },
  {
    icon: <TrendingUp />,
    title: "Data-Driven Decisions",
    description: "Leverage project data to make informed, confident choices.",
  },
];

export function AIAdvantage() {
  return (
    <Section variant="muted" size="xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-secondary font-medium mb-2">The AI Difference</p>
            <SectionHeader
              title="Why AI Matters for Your Project"
              className="text-left"
              align="left"
            />
          </div>
          <div className="rounded-2xl border border-border bg-surface aspect-video relative overflow-hidden">
            <Image
              src="/tei ha pics/ai-illustration.png"
              alt="AI Illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <FeatureGrid columns={3}>
          {AI_FEATURES.map((feature, idx) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={idx * 0.1}
            />
          ))}
        </FeatureGrid>
        <div className="mt-12 text-center">
          <Button variant="ai" size="lg" asChild>
            <Link href="/ai-studio">Explore AI Studio</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
