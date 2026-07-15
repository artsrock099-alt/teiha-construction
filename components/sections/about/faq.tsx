"use client";

import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeUp } from "@/lib/animations";

export function AboutFAQ() {
  const faqs = [
    {
      question: "What makes TEI-HA different from other construction companies?",
      answer:
        "We integrate artificial intelligence into every stage of our process, from design to delivery. This allows us to deliver higher quality projects faster, more cost-effectively, and with better sustainability outcomes.",
    },
    {
      question: "Do you work internationally?",
      answer:
        "Yes! While we're based in Uganda, we have experience working on projects across Africa, the Middle East, and beyond. Our team is equipped to handle projects globally.",
    },
    {
      question: "How does your AI-driven design process work?",
      answer:
        "Our AI tools help us explore thousands of design options, optimize for various parameters (cost, sustainability, functionality), and make data-driven decisions at every stage.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Timelines vary by project scope, but our AI-powered process typically reduces timelines by 20-30% compared to traditional methods. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "How do you ensure project quality?",
      answer:
        "Quality is at the core of everything we do. We have rigorous quality control processes, use only premium materials, and our team of experienced professionals oversees every detail.",
    },
  ];

  return (
    <Section variant="muted">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Got questions? We've got answers"
          className="mb-16"
        />
        <FadeUp>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </Section>
  );
}
