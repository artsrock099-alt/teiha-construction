import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeUp } from "@/lib/animations";
import { PROJECTS, getProjectBySlug } from "@/lib/constants/projects";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ProjectVideos } from "@/components/sections/ProjectVideos";
import { ProjectCard } from "@/components/cards/project-card";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = project.relatedProjects
    .map((slug) => PROJECTS.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24">
        <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
          {project.heroVideo ? (
            <video
              src={project.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
        </div>
        <div className="container mx-auto px-4 md:px-6 -mt-40 md:-mt-52 relative z-10 pb-12">
          <FadeUp>
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-primary text-white border-none">{project.category}</Badge>
                <Badge variant="secondary">{project.location}</Badge>
                <Badge variant="secondary">{project.year}</Badge>
                <Badge variant="secondary">{project.status}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Narrative Sections */}
      <Section size="xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {project.description && (
              <FadeUp>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Project Overview</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
                </div>
              </FadeUp>
            )}

            {project.clientVision && (
              <FadeUp delay={0.1}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Client Vision</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{project.clientVision}</p>
                </div>
              </FadeUp>
            )}

            {project.theChallenge && (
              <FadeUp delay={0.2}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">The Challenge</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{project.theChallenge}</p>
                </div>
              </FadeUp>
            )}

            {project.ourSolution && (
              <FadeUp delay={0.3}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Our Solution</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{project.ourSolution}</p>
                </div>
              </FadeUp>
            )}

            {project.designJourney && (
              <FadeUp delay={0.4}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Design & Construction Journey</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{project.designJourney}</p>
                </div>
              </FadeUp>
            )}

            {project.projectOutcome && (
              <FadeUp delay={0.5}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Project Outcome</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{project.projectOutcome}</p>
                </div>
              </FadeUp>
            )}

            {project.servicesUsed.length > 0 && (
              <FadeUp delay={0.6}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Services Delivered</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.servicesUsed.map((service, index) => (
                      <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </FadeUp>
            )}
          </div>
        </div>
      </Section>

      {/* Image Gallery */}
      {project.gallery.length > 0 && (
        <Section size="xl" variant="muted">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
              title="Project Gallery"
              subtitle="A visual journey through the project"
              className="mb-12"
            />
            <FadeUp>
              <ProjectGallery images={project.gallery} projectTitle={project.title} />
            </FadeUp>
          </div>
        </Section>
      )}

      {/* Videos */}
      {project.videos.length > 0 && (
        <Section size="xl">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
              title="Project Videos"
              subtitle="Watch the project come to life"
              className="mb-12"
            />
            <FadeUp>
              <ProjectVideos videos={project.videos} projectTitle={project.title} />
            </FadeUp>
          </div>
        </Section>
      )}

      {/* Construction Journey */}
      {project.constructionMilestones.length > 0 && (
        <Section size="xl" variant="muted">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
              title="Construction Journey"
              subtitle="Milestones that built this project"
              className="mb-12"
            />
            <div className="max-w-5xl mx-auto space-y-12">
              {project.constructionMilestones.map((milestone, index) => (
                <FadeUp key={index} delay={index * 0.1}>
                  <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                    <div className="w-full md:w-1/2">
                      <div className="relative aspect-video rounded-xl overflow-hidden">
                        <Image
                          src={milestone.image}
                          alt={milestone.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section size="xl">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
              title="Related Projects"
              subtitle="Explore more of our work"
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => {
                if (!relatedProject) return null;
                return (
                  <ProjectCard
                    key={relatedProject.id}
                    title={relatedProject.title}
                    category={relatedProject.category}
                    location={relatedProject.location}
                    summary={relatedProject.description}
                    imageUrl={relatedProject.heroImage}
                    slug={relatedProject.slug}
                    delay={index * 0.1}
                  />
                );
              })}
            </div>
          </div>
        </Section>
      )}
    </div>
  );
}
