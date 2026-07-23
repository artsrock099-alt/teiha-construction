"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/cards/project-card";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/constants/projects";

const ITEMS_PER_PAGE = 6;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [visibleCount, setVisibleCount] = React.useState(ITEMS_PER_PAGE);

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const visibleProjects = React.useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  React.useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeCategory]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <video
          src="/tei ha pics/vid.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-800/60" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg mb-6">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              A curated portfolio of our work, showcasing excellence in construction and design across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Filter */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-muted hover:bg-muted/80 text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                location={project.location}
                summary={project.description}
                imageUrl={project.heroImage}
                slug={project.slug}
                delay={index * 0.1}
              />
            ))}
          </div>

          {hasMore && (
            <div className="mt-12 text-center">
              <Button size="lg" onClick={loadMore}>
                Load More Projects
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
