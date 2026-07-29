"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AI_TOOLS, type AITool, type Status } from "@/lib/constants/ai-tools";
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

interface ToolPageClientProps {
  tool: Omit<AITool, "icon"> & { slug: string };
}

export function ToolPageClient({ tool }: ToolPageClientProps) {
  const toolData = AI_TOOLS.find((t) => t.slug === tool.slug);
  const Icon = toolData?.icon;
  const relatedTools = tool.relatedTools
    .map((slug) => AI_TOOLS.find((t) => t.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb className="mb-8" />
          <div className="max-w-4xl mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                {Icon ? <Icon className="h-7 w-7 text-primary" /> : <div className="h-7 w-7" />}
              </div>
              <Badge variant={statusToVariant(tool.status)}>{tool.status}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-4">
              {tool.title}
            </h1>
            <p className="text-lg md:text-xl text-body max-w-2xl">{tool.shortDescription}</p>
          </div>
          <img
            src={tool.heroIllustration}
            alt={tool.title}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </section>

      {/* Overview */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Overview"
            subtitle="What this tool does and how it can help you"
            className="mb-12"
          />
          <FadeUp>
            <p className="text-lg md:text-xl text-body max-w-4xl mx-auto">
              {tool.detailedDescription}
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* How It Works */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="How It Works"
            subtitle="The workflow for this tool"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tool.workflowSteps.map((step, idx) => (
              <FadeUp key={step.title} delay={idx * 0.05}>
                <Card className="h-full">
                  <CardHeader className="pb-3">
                    <div className="flex h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-3">
                      {idx + 1}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-body">{step.description}</p>
                  </CardContent>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Key Benefits"
            subtitle="Why clients love this tool"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tool.keyBenefits.map((benefit, idx) => (
              <FadeUp key={benefit} delay={idx * 0.05}>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-body">{benefit}</p>
                  </CardContent>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* Example Inputs and Outputs */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                title="Example Inputs"
                subtitle="What you would provide to use this tool"
                className="mb-8"
              />
              <div className="space-y-4">
                {tool.exampleInputs.map((input, idx) => (
                  <FadeUp key={idx} delay={idx * 0.05}>
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-sm text-body">{input}</p>
                      </CardContent>
                    </Card>
                  </FadeUp>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader
                title="Example Outputs"
                subtitle="What the AI can produce (illustrative examples)"
                className="mb-8"
              />
              <div className="space-y-4">
                {tool.exampleOutputs.map((output, idx) => (
                  <FadeUp key={idx} delay={idx * 0.05}>
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-sm text-body">{output}</p>
                      </CardContent>
                    </Card>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Industries Supported */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Industries Supported"
            subtitle="This tool works great for these sectors"
            className="mb-12"
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {tool.industries.map((industry, idx) => (
              <FadeUp key={industry} delay={idx * 0.03}>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  {industry}
                </Badge>
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
            subtitle="Questions specific to this tool"
            className="mb-12"
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {tool.faq.map((faq, idx) => (
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

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <Section size="xl">
          <div className="container mx-auto px-6">
            <SectionHeader
              title="Related Tools"
              subtitle="Other AI capabilities you might find useful"
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTools.map((relatedTool, idx) => {
                if (!relatedTool) return null;
                const RelatedIcon = relatedTool.icon;
                return (
                  <FadeUp key={relatedTool.slug} delay={idx * 0.05}>
                    <Link href={`/ai-studio/${relatedTool.slug}`} className="block h-full">
                      <Card hover className="h-full">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-3">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                              <RelatedIcon className="h-6 w-6 text-primary" />
                            </div>
                            <Badge variant={statusToVariant(relatedTool.status)}>
                              {relatedTool.status}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg">{relatedTool.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-body mb-4 line-clamp-2">
                            {relatedTool.shortDescription}
                          </p>
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
      )}

      {/* Final CTA */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
              Ready to Try This Tool?
            </h2>
            <p className="text-lg text-body mb-8">
              Book a consultation and see how this AI tool can help with your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Speak With Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
