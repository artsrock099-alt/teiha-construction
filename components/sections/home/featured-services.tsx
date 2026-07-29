import * as React from "react";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureGrid } from "@/components/layouts/feature-grid";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/cards/service-card";
import { Building2, Compass, Hammer, Route, Globe, Leaf } from "lucide-react";

const SERVICES = [
  {
    icon: <Building2 />,
    title: "Architectural Design",
    description: "Premium architectural design with a focus on sustainability and innovation.",
    href: "/services/architecture",
  },
  {
    icon: <Compass />,
    title: "Civil & Structural Engineering",
    description: "Structural analysis, foundation engineering, and infrastructure design.",
    href: "/services/civil-engineering",
  },
  {
    icon: <Hammer />,
    title: "Construction Services",
    description: "World-class construction using modern methods and materials.",
    href: "/services/construction",
  },
  {
    icon: <Route />,
    title: "Highway Engineering",
    description: "Road and highway infrastructure design and supervision.",
    href: "/services/highway-engineering",
  },
  {
    icon: <Globe />,
    title: "Environmental Engineering",
    description: "EIA, waste management, and sustainable infrastructure planning.",
    href: "/services/environmental-engineering",
  },
  {
    icon: <Leaf />,
    title: "Sustainable Design",
    description: "Eco-friendly, energy-efficient building design solutions.",
    href: "/services/sustainable-design",
  },
];

export function FeaturedServices() {
  return (
    <Section size="xl">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Our Premium Services"
          subtitle="Comprehensive solutions for every stage of your project."
          className="mb-12"
        />
        <FeatureGrid columns={3}>
          {SERVICES.map((service, idx) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={idx * 0.1}
            />
          ))}
        </FeatureGrid>
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
