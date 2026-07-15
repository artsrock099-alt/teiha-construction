"use client";

import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureGrid } from "@/components/layouts/feature-grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import {
  Building,
  Cpu,
  Home,
  Layers,
  RefreshCw,
  Users2,
  Trees,
  Zap,
} from "lucide-react";
import { FadeUp } from "@/lib/animations";

export function Capabilities() {
  const capabilities = [
    {
      icon: <Building />,
      title: "Architecture",
      description: "Full architectural design from concept to detailed plans.",
    },
    {
      icon: <Cpu />,
      title: "Engineering",
      description: "Structural, mechanical, and electrical engineering services.",
    },
    {
      icon: <Home />,
      title: "Construction",
      description: "Turnkey construction solutions with quality craftsmanship.",
    },
    {
      icon: <Layers />,
      title: "Interior Design",
      description: "Thoughtful interior spaces that complement the architecture.",
    },
    {
      icon: <RefreshCw />,
      title: "Renovation",
      description: "Modernizing existing structures while preserving their character.",
    },
    {
      icon: <Users2 />,
      title: "Project Management",
      description: "End-to-end project coordination and management.",
    },
    {
      icon: <Trees />,
      title: "Sustainable Design",
      description: "Eco-conscious design and green building certifications.",
    },
    {
      icon: <Zap />,
      title: "Smart Building Consulting",
      description: "Integrating IoT and smart technologies into your space.",
    },
  ];

  return (
    <Section>
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Our Capabilities"
          subtitle="Comprehensive services to bring your vision to life"
          className="mb-16"
        />
        <FeatureGrid columns={4}>
          {capabilities.map((capability, idx) => (
            <FadeUp key={capability.title} delay={idx * 0.1}>
              <Card hover className="h-full">
                <CardHeader>
                  <IconContainer variant="outline" size="lg" className="mb-3">
                    {capability.icon}
                  </IconContainer>
                  <CardTitle className="text-lg">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-sm">{capability.description}</p>
                </CardContent>
              </Card>
            </FadeUp>
          ))}
        </FeatureGrid>
      </div>
    </Section>
  );
}
