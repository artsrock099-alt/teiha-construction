import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SERVICES, getServiceBySlug } from "@/lib/constants/services";
import { SITE_CONFIG } from "@/lib/constants";
import { FadeUp } from "@/lib/animations";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.seo.title || `${service.title} | ${SITE_CONFIG.name}`,
    description: service.seo.description || service.shortDescription,
    keywords: service.seo.keywords?.join(", "),
    openGraph: {
      title: service.seo.title || `${service.title} | ${SITE_CONFIG.name}`,
      description: service.seo.description || service.shortDescription,
      images: [{ url: service.imagePlaceholder, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedServices
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean);

  const Icon = service.icon;

  // JSON-LD for Service + FAQ
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.shortDescription,
        url: `${SITE_CONFIG.url}/services/${service.slug}`,
        image: service.imagePlaceholder,
        provider: {
          "@type": "Organization",
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
        },
        areaServed: SITE_CONFIG.business.areaServed.join(", "),
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faq.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_CONFIG.url}/services` },
          { "@type": "ListItem", position: 3, name: service.title, item: `${SITE_CONFIG.url}/services/${service.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-muted/50" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb className="mb-8" />
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading">
                {service.title}
              </h1>
            </div>
            <p className="text-lg md:text-xl text-body mb-8 max-w-2xl">
              {service.heroDescription}
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Overview"
            subtitle="Learn more about our approach to this service"
            className="mb-12"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <img
                src={service.imagePlaceholder}
                alt={service.title}
                className="rounded-xl w-full h-auto object-cover"
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg text-body mb-8">
                {service.shortDescription}
              </p>
              <h3 className="text-xl font-semibold text-heading mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-body">
                    <span className="text-primary mt-1">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold text-heading mb-4">Industries Served</h3>
              <div className="flex flex-wrap gap-2">
                {service.industries.map((industry, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-muted text-sm text-heading">
                    {industry}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* Our Process */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our Process"
            subtitle="How we deliver exceptional results"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, idx) => (
              <FadeUp key={step.title} delay={idx * 0.05}>
                <Card>
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-3">
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

      {/* AI Enhancement */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="AI-Powered Enhancement"
            subtitle="How artificial intelligence elevates this service"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.aiEnhancement.map((item, idx) => (
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

      {/* FAQ */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Common questions about this service"
            className="mb-12"
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {service.faq.map((faq, idx) => (
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

      {/* Related Services */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Related Services"
            subtitle="Other services you might be interested in"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((relatedService, idx) => {
              if (!relatedService) return null;
              const RelatedIcon = relatedService.icon;
              return (
                <FadeUp key={relatedService.slug} delay={idx * 0.05}>
                  <Link href={`/services/${relatedService.slug}`} className="block h-full">
                    <Card hover className="h-full">
                      <CardHeader className="pb-3">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                          <RelatedIcon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{relatedService.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-body">{relatedService.shortDescription}</p>
                      </CardContent>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-body mb-8">
              Let's discuss how we can help with your {service.title.toLowerCase()} needs.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
