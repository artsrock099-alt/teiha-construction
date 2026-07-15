import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { SplitSection } from "@/components/sections/split-section";
import { FadeUp } from "@/lib/animations";

export function OurStory() {
  return (
    <Section>
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Our Story"
          subtitle="Why we're building a different kind of construction company"
          className="mb-16"
        />
        <SplitSection
          leftContent={
            <div className="space-y-6">
              <FadeUp>
                <p className="text-body text-lg">
                  TEI-HA was born from a simple observation: the architecture and construction industry was ready for a revolution. Traditional methods were slow, costly, and often failed to leverage the power of modern technology.
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-body text-lg">
                  We set out to solve this by integrating artificial intelligence into every stage of the process—from initial design to final delivery. Our team of architects, engineers, and AI specialists work together to create spaces that are not just beautiful, but also smart, sustainable, and cost-effective.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-body text-lg">
                  Today, from our base in Uganda, we serve clients worldwide, bringing international standards of excellence to every project we undertake.
                </p>
              </FadeUp>
            </div>
          }
          rightContent={
            <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center">
              <span className="text-body text-sm">Architectural Imagery Placeholder</span>
            </div>
          }
        />
      </div>
    </Section>
  );
}
