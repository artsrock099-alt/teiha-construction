import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What services does TEI-HA offer?",
    answer:
      "We offer comprehensive architecture, engineering, construction, interior design, renovation, and project management services.",
  },
  {
    question: "How does AI improve the construction process?",
    answer:
      "Our AI tools help with faster concept generation, accurate cost estimation, sustainable material recommendations, optimized scheduling, and data-driven decision making.",
  },
  {
    question: "Do you work internationally?",
    answer:
      "Yes! While we are based in Uganda, we serve clients globally and have experience working on projects across multiple continents.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on size and complexity. Our AI-powered planning helps us deliver projects faster than traditional methods while maintaining high quality.",
  },
  {
    question: "How do I get started with a consultation?",
    answer:
      "Simply click the 'Book Consultation' button, fill out the form, and our team will get back to you within 24 hours to discuss your project needs.",
  },
];

export function FAQ() {
  return (
    <Section size="xl">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Get answers to common questions about our services and process."
          className="mb-12"
        />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {FAQS.map((faq, idx) => (
              <AccordionItem key={faq.question} value={`item-${idx}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
}
