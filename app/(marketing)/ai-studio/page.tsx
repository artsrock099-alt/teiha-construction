"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AI_TOOLS, type Status } from "@/lib/constants/ai-tools";
import { FadeUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

const statusToVariant = (status: Status) => {
  switch (status) {
    case "Available":
      return "available";
    case "Beta":
      return "beta";
    case "Coming Soon":
      return "comingsoon";
  }
};

const WHAT_MAKES_OUR_AI_DIFFERENT = [
  {
    title: "Faster Planning",
    description: "Reduce planning time from weeks to days.",
  },
  {
    title: "Better Decision-Making",
    description: "Data-driven insights reduce uncertainty.",
  },
  {
    title: "Reduced Project Risk",
    description: "Identify issues early before they become problems.",
  },
  {
    title: "Improved Collaboration",
    description: "Visualize concepts and align stakeholders.",
  },
  {
    title: "Sustainable Recommendations",
    description: "AI prioritizes environmentally friendly options.",
  },
];

const HOW_AI_FITS_INTO_EVERY_PROJECT = [
  "Client Consultation",
  "Data Collection",
  "AI Analysis",
  "Expert Review",
  "Design Refinement",
  "Construction Planning",
  "Project Delivery",
];

const BENEFITS_FOR_CLIENTS = [
  {
    title: "Smarter Decisions",
    description: "Data-driven insights for better choices.",
  },
  {
    title: "Faster Concepts",
    description: "Explore more options in less time.",
  },
  {
    title: "Cost Transparency",
    description: "Understand costs early.",
  },
  {
    title: "Improved Sustainability",
    description: "Greener, more efficient buildings.",
  },
  {
    title: "Reduced Risk",
    description: "Identify problems before they arise.",
  },
  {
    title: "Better Collaboration",
    description: "Align stakeholders with visualizations.",
  },
];

const FAQ = [
  {
    question: "How accurate is your AI?",
    answer: "Our AI models are trained on thousands of completed projects in East Africa. All AI outputs are reviewed by our expert team before delivery.",
  },
  {
    question: "What about data privacy?",
    answer: "Your data is protected. We never share or sell client project details with third parties.",
  },
  {
    question: "Do architects and engineers still matter?",
    answer: "Absolutely! AI assists our professionals, making them more efficient and effective at delivering great projects.",
  },
];

export default function AIStudioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-muted/50">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb className="mb-8" />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-6">
              TEI-HA AI Studio
            </h1>
            <p className="text-lg md:text-xl text-body mb-8 max-w-2xl">
              AI-powered tools to help you make better construction decisions. Our AI supports our experts,
              so you get better results, faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Talk to AI Assistant</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Our AI Different */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="What Makes Our AI Different"
            subtitle="AI supports our experts—it doesn't replace them."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {WHAT_MAKES_OUR_AI_DIFFERENT.map((item, idx) => (
              <FadeUp key={item.title} delay={idx * 0.05}>
                <Card className="h-full">
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

      {/* AI Tools Grid */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our AI Tools"
            subtitle="Explore our AI-powered capabilities"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AI_TOOLS.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <FadeUp key={tool.slug} delay={idx * 0.05}>
                  <Link href={`/ai-studio/${tool.slug}`} className="block h-full">
                    <Card hover className="h-full">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <Badge variant={statusToVariant(tool.status)}>
                            {tool.status}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{tool.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-body mb-4 line-clamp-2">{tool.shortDescription}</p>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          Learn More <ArrowRight className="h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </Section>

      {/* How AI Fits Into Every Project */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="How AI Fits Into Every Project"
            subtitle="AI assists at every step of the process."
            className="mb-12"
          />
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {HOW_AI_FITS_INTO_EVERY_PROJECT.map((step, idx) => (
              <FadeUp key={step} delay={idx * 0.05}>
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-sm md:text-base text-heading font-medium">{step}</p>
                  {idx < HOW_AI_FITS_INTO_EVERY_PROJECT.length - 1 && (
                    <div className="hidden md:block h-px w-8 bg-border" />
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits for Clients */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Benefits for Clients"
            subtitle="Why clients love our AI-powered approach"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS_FOR_CLIENTS.map((item, idx) => (
              <FadeUp key={item.title} delay={idx * 0.05}>
                <Card className="h-full">
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

      {/* FAQ */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Common questions about our AI"
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
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
              Ready to See AI in Action?
            </h2>
            <p className="text-lg text-body mb-8">
              Book a consultation and see how our AI can help with your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
