"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SERVICES } from "@/lib/constants/services";
import { getIcon } from "@/lib/constants/services";
import { FadeUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

const WHY_CHOOSE_ITEMS = [
  { title: "AI-powered Workflows", description: "Leverage AI to deliver projects faster and more efficiently" },
  { title: "International Standards", description: "Quality that meets global best practices and standards" },
  { title: "Experienced Professionals", description: "Team of seasoned experts with decades of experience" },
  { title: "Sustainable Solutions", description: "Eco-friendly designs and construction methods" },
  { title: "Client-first Approach", description: "Your needs and satisfaction are our top priority" },
  { title: "End-to-end Delivery", description: "From concept to completion, we handle it all" },
];

const INDUSTRIES = [
  "Residential",
  "Commercial",
  "Healthcare",
  "Education",
  "Hospitality",
  "Government",
  "Industrial",
  "Mixed Use",
  "Infrastructure"
];

const SERVICE_PROCESS = [
  { title: "Consultation", description: "Understanding your needs and goals" },
  { title: "Planning", description: "Developing detailed project plans" },
  { title: "Design", description: "Creating innovative designs" },
  { title: "AI Optimization", description: "Enhancing with AI-powered tools" },
  { title: "Construction", description: "Bringing designs to life" },
  { title: "Quality Assurance", description: "Ensuring top quality" },
  { title: "Delivery", description: "Successful project handover" },
];

export default function ServicesPage() {
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
          <source src="/tei ha pics/services-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-800/60" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Comprehensive architecture, engineering, and construction services powered by AI innovation, delivering international quality standards to Uganda and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="What We Offer"
            subtitle="Comprehensive services tailored to your project needs"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = getIcon(service.icon);
              if (!Icon) return null;
              return (
                <FadeUp key={service.slug} delay={index * 0.05}>
                  <Link href={`/services/${service.slug}`} className="block h-full">
                    <Card hover className="h-full">
                      <CardHeader className="pb-3">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm md:text-base text-body mb-4">
                          {service.shortDescription}
                        </p>
                        <ul className="space-y-2 mb-0">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="text-sm text-body flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Why Choose TEI-HA */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Why Choose TEI-HA Services"
            subtitle="What sets us apart and makes us your ideal partner"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item, idx) => (
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

      {/* Our Process */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our Service Process"
            subtitle="A structured approach to delivering exceptional results"
            className="mb-12"
          />
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {SERVICE_PROCESS.map((step, idx) => (
                <FadeUp key={step.title} delay={idx * 0.05}>
                  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold z-10">
                      {idx + 1}
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-lg md:text-xl font-semibold text-heading mb-2">
                        {step.title}
                      </h3>
                      <p className="text-body">{step.description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Industries We Support */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Industries We Support"
            subtitle="Serving diverse sectors with tailored solutions"
            className="mb-12"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {INDUSTRIES.map((industry, idx) => (
              <FadeUp key={industry} delay={idx * 0.05}>
                <Card className="text-center">
                  <CardContent className="py-6">
                    <p className="font-medium text-heading">{industry}</p>
                  </CardContent>
                </Card>
              </FadeUp>
            ))}
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
              Let's discuss how we can bring your vision to life with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Request Proposal</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
