'use client';

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/constants/projects";
import { FadeUp } from "@/lib/animations";

const DESIGN_PHILOSOPHY = [
  { title: "Innovation", description: "Pushing boundaries with AI-assisted design and cutting-edge technologies" },
  { title: "Functionality", description: "Designing spaces that work perfectly for their intended purpose" },
  { title: "Sustainability", description: "Creating buildings that respect and harmonize with the environment" },
  { title: "Human-Centered", description: "Prioritizing the needs and experiences of the people who use our spaces" },
  { title: "AI-Assisted", description: "Leveraging artificial intelligence to optimize every aspect of our projects" }
];

const PROJECT_STATS = [
  { label: "Projects Completed", value: 42, suffix: "+" },
  { label: "Square Metres Designed", value: 250000, suffix: "" },
  { label: "Industries Served", value: 9, suffix: "" },
  { label: "Client Satisfaction", value: 98, suffix: "%" }
];

const FAQ = [
  { question: "What types of projects do you take on?", answer: "We work on a wide range of projects including residential, commercial, healthcare, education, hospitality, and industrial developments." },
  { question: "Do you work on projects outside Uganda?", answer: "Yes, we have experience working on projects across East Africa and are available for international projects." },
  { question: "What is your typical project timeline?", answer: "Timelines vary depending on project size and complexity, but we provide detailed schedules during the planning phase." }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/tei ha pics/vidd.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-800/60" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg mb-6">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              A showcase of our work, demonstrating our commitment to innovation, sustainability, and design excellence across East Africa and beyond.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filter */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-surface border border-border hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <FadeUp key={project.slug} delay={index * 0.05}>
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <Card hover className="h-full overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex gap-2 mb-2">
                        <span className="text-xs font-medium text-primary">{project.category}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{project.location}</span>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{project.year}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-body mb-4 line-clamp-2">{project.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* Design Philosophy */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our Design Philosophy"
            subtitle="The principles that guide every project we undertake"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESIGN_PHILOSOPHY.map((item, idx) => (
              <FadeUp key={item.title} delay={idx * 0.05}>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-body">{item.description}</p>
                  </CardContent>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* Project Statistics */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="By The Numbers"
            subtitle="Our impact measured in meaningful metrics"
            className="mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {PROJECT_STATS.map((stat, idx) => (
              <FadeUp key={stat.label} delay={idx * 0.05}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-body">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Common questions about our projects and process"
            className="mb-12"
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {FAQ.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-body">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-body mb-8">
              Let's discuss how we can bring your vision to life with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

