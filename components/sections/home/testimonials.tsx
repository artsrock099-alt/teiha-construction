import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Quote } from "@/components/ui/quote";
import { FeatureGrid } from "@/components/layouts/feature-grid";

const TESTIMONIALS = [
  {
    quote:
      "TEI-HA transformed our vision into reality with their innovative AI-powered design approach. The process was smooth and the result exceeded our expectations!",
    author: "Sarah Johnson",
    role: "CEO",
    company: "Future Tech Inc.",
    avatar: null,
  },
  {
    quote:
      "Working with TEI-HA was a game-changer. Their sustainability focus and attention to detail made our project stand out.",
    author: "Michael Chen",
    role: "Director",
    company: "Green Developments",
    avatar: null,
  },
  {
    quote:
      "From concept to completion, TEI-HA delivered excellence. Their AI tools made the design process incredibly efficient.",
    author: "Amina Nkrumah",
    role: "Founder",
    company: "Urban Living",
    avatar: null,
  },
];

export function Testimonials() {
  return (
    <Section variant="muted" size="xl">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Real feedback from real people who've worked with us."
          className="mb-12"
        />
        <FeatureGrid columns={3}>
          {TESTIMONIALS.map((testimonial, idx) => (
            <Quote
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatar={testimonial.avatar}
              delay={idx * 0.1}
            />
          ))}
        </FeatureGrid>
      </div>
    </Section>
  );
}
