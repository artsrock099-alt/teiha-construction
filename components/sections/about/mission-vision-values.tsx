"use client";

import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureGrid } from "@/components/layouts/feature-grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { Target, Eye, Heart } from "lucide-react";
import { FadeUp } from "@/lib/animations";

export function MissionVisionValues() {
  const cards = [
    {
      icon: <Target />,
      title: "Our Mission",
      description:
        "To transform the architecture and construction industry through AI-powered innovation, delivering exceptional spaces that inspire, endure, and respect our planet.",
    },
    {
      icon: <Eye />,
      title: "Our Vision",
      description:
        "To be the global leader in AI-driven construction, setting new standards for quality, efficiency, and sustainability in every project we touch.",
    },
    {
      icon: <Heart />,
      title: "Core Values",
      description:
        "Innovation, Excellence, Integrity, Sustainability, Collaboration, and Client Success guide everything we do.",
    },
  ];

  return (
    <Section variant="muted">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Mission, Vision & Core Values"
          subtitle="The principles that guide every decision we make"
          className="mb-16"
        />
        <FeatureGrid columns={3}>
          {cards.map((card, idx) => (
            <FadeUp key={card.title} delay={idx * 0.1}>
              <Card className="h-full">
                <CardHeader>
                  <IconContainer variant="gradient" size="xl" className="mb-4">
                    {card.icon}
                  </IconContainer>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body">{card.description}</p>
                </CardContent>
              </Card>
            </FadeUp>
          ))}
        </FeatureGrid>
      </div>
    </Section>
  );
}
