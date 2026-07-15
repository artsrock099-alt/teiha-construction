import * as React from "react";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureGrid } from "@/components/layouts/feature-grid";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/cards/service-card";
import { Layout, PenTool, Home, HardHat, Hammer, FolderTree } from "lucide-react";

const SERVICES = [
  {
    icon: <Layout />,
    title: "Architecture",
    description: "Premium architectural design with a focus on sustainability and innovation.",
    href: "/services/architecture",
  },
  {
    icon: <PenTool />,
    title: "Interior Design",
    description: "Elegant, functional interior spaces tailored to your lifestyle.",
    href: "/services/interior-design",
  },
  {
    icon: <HardHat />,
    title: "Engineering",
    description: "Structural and civil engineering with rigorous quality standards.",
    href: "/services/engineering",
  },
  {
    icon: <Hammer />,
    title: "Construction",
    description: "World-class construction using modern methods and materials.",
    href: "/services/construction",
  },
  {
    icon: <FolderTree />,
    title: "Project Management",
    description: "Comprehensive project management from concept to completion.",
    href: "/services/project-management",
  },
  {
    icon: <Home />,
    title: "Renovation",
    description: "Modern renovation services to transform existing spaces.",
    href: "/services/renovation",
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
