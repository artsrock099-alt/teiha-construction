import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Quote } from "@/components/ui/quote";
import { PROJECTS, getProjectBySlug } from "@/lib/constants/projects";
import { FadeUp } from "@/lib/animations";

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
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb className="mb-6" />
          <div className="max-w-4xl mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-muted text-sm font-medium">{project.category}</span>
              <span className="px-3 py-1 rounded-full bg-muted text-sm">{project.location}</span>
              <span className="px-3 py-1 rounded-full bg-muted text-sm">{project.year}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-4">
              {project.title}
            </h1>
          </div>
        </div>
        <div className="w-full">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Project Overview */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Project Overview"
            subtitle="High-level summary of the project"
            className="mb-12"
          />
          <FadeUp>
            <p className="text-lg md:text-xl text-body max-w-4xl mx-auto">
              {project.description}
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* Project Details */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Project Details"
            subtitle="Key information about the project"
            className="mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Location", value: project.location },
              { label: "Industry", value: project.industry },
              { label: "Project Size", value: project.projectSize },
              { label: "Duration", value: project.duration },
              { label: "Status", value: project.status },
              { label: "Year", value: project.year.toString() }
            ].map((detail, idx) => (
              <FadeUp key={detail.label} delay={idx * 0.05}>
                <Card>
                  <CardHeader className="pb-2">
                    <p className="text-sm text-muted-foreground">{detail.label}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-lg font-semibold text-heading">{detail.value}</p>
                  </CardContent>
                </Card>
              </FadeUp>
            ))}
          </div>
          <div className="mt-8">
            <FadeUp>
              <p className="text-sm text-muted-foreground mb-2">Services Used</p>
              <div className="flex flex-wrap gap-2">
                {project.servicesUsed.map((service, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {service}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* Challenge & Solution */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeUp>
              <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4">The Challenge</h3>
              <p className="text-body">{project.designChallenges}</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4">Our Solution</h3>
              <p className="text-body">{project.designSolution}</p>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* AI Contribution */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="AI Contribution"
            subtitle="How artificial intelligence enhanced this project"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.aiContribution.map((item, idx) => (
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

      {/* Sustainability */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Sustainability"
            subtitle="Our commitment to environmental responsibility"
            className="mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.sustainabilityHighlights.map((item, idx) => (
              <FadeUp key={item.title} delay={idx * 0.05}>
                <Card className="text-center">
                  <CardContent className="py-6">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{item.value}</p>
                    <p className="text-body">{item.title}</p>
                  </CardContent>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Project Gallery"
            subtitle="A visual journey through the project"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((image, idx) => (
              <FadeUp key={idx} delay={idx * 0.05}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* Technologies */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Technologies Used"
            subtitle="Tools and technologies that made this project possible"
            className="mb-12"
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {project.technologies.map((tech, idx) => (
              <FadeUp key={idx} delay={idx * 0.03}>
                <span className="px-4 py-2 rounded-full bg-muted text-heading font-medium">
                  {tech}
                </span>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <Quote
                quote={project.testimonial.quote}
                author={project.testimonial.author}
                role={project.testimonial.role}
              />
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* Related Projects */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Related Projects"
            subtitle="Similar projects you may be interested in"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject, idx) => {
              if (!relatedProject) return null;
              return (
                <FadeUp key={relatedProject.slug} delay={idx * 0.05}>
                  <Link href={`/projects/${relatedProject.slug}`} className="block h-full">
                    <Card hover className="h-full overflow-hidden">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={relatedProject.heroImage}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex gap-2 mb-2">
                          <span className="text-xs font-medium text-primary">{relatedProject.category}</span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{relatedProject.location}</span>
                        </div>
                        <CardTitle className="text-xl">{relatedProject.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{relatedProject.year}</p>
                      </CardHeader>
                    </Card>
                  </Link>
                </FadeUp>
              );
            })}
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
              Let's discuss how we can help with a project like {project.title}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Discuss Similar Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
