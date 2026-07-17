"use client";

import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureGrid } from "@/components/layouts/feature-grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassPanel } from "@/components/ui/glass-panel";
import { IconContainer } from "@/components/ui/icon-container";
import { Target, Eye, Compass } from "lucide-react";
import { FadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function MissionVisionValues() {
  const cards = [
    {
      icon: <Target />,
      title: "Mission",
      description:
        "To earn the trust of our clients through commitment and caring services.",
    },
    {
      icon: <Eye />,
      title: "Vision",
      description:
        "To provide the highest-quality workmanship possible with clarity and precision.",
    },
    {
      icon: <Compass />,
      title: "Aim",
      description:
        "To become a leading construction company in the global market.",
    },
  ];

  return (
    <Section variant="muted">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Mission, Vision & Aim"
          className="mb-16"
        />
        <FeatureGrid columns={3}>
          {cards.map((card, idx) => (
            <FadeUp key={card.title} delay={idx * 0.1}>
              <GlassPanel className="h-full group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <CardHeader>
                  <IconContainer variant="gradient" size="xl" className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </IconContainer>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body">{card.description}</p>
                </CardContent>
              </GlassPanel>
            </FadeUp>
          ))}
        </FeatureGrid>
      </div>
    </Section>
  );
}
