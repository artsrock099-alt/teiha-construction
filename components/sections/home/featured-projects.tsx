"use client";

import * as React from "react";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureGrid } from "@/components/layouts/feature-grid";
import { ProjectCard } from "@/components/cards/project-card";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    title: "Kampala Grand Hotel",
    category: "Hospitality",
    location: "Kampala, Uganda",
    summary: "Luxury hotel with modern amenities and sustainable design.",
    imageUrl: "/tei ha pics/hospitality3.jpeg",
  },
  {
    title: "Lake Victoria Residences",
    category: "Residential",
    location: "Kampala, Uganda",
    summary: "Luxury residential development with smart home technology.",
    imageUrl: "/tei ha pics/residential10.jpeg",
  },
  {
    title: "Kampala Innovation Hub",
    category: "Commercial",
    location: "Kampala, Uganda",
    summary: "A modern, commercial complex with sustainable features.",
    imageUrl: "/tei ha pics/commercial2.jpeg",
  },
  {
    title: "Zembo",
    category: "Industrial",
    location: "Kampala, Uganda",
    summary: "Modern industrial facility with state-of-the-art infrastructure.",
    imageUrl: "/tei ha pics/industrial.jpeg",
  },
];

const FILTERS = ["All", "Residential", "Commercial", "Hospitality", "Industrial"];

export function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = React.useState("All");

  const filteredProjects = activeFilter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeFilter);

  return (
    <Section size="xl">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Featured Projects"
          subtitle="Explore our portfolio of intelligent, sustainable spaces."
          className="mb-10"
        />
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-white"
                  : "bg-surface border border-border hover:bg-muted"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <FeatureGrid columns={3}>
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              location={project.location}
              summary={project.summary}
              imageUrl={project.imageUrl}
              delay={idx * 0.1}
            />
          ))}
        </FeatureGrid>
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
