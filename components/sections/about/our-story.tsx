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
          className="mb-16"
        />
        <SplitSection
          leftContent={
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <video
                src="/tei ha pics/vid.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          }
          rightContent={
            <div className="space-y-6">
              <FadeUp>
                <p className="text-body text-lg">
                  TEI-HA Construction Services Ltd is a Ugandan private construction company and architectural consulting firm recognized for delivering technology-driven services for the built and natural environment. Our expertise includes project planning, architectural design, surveying, project management, quantity surveying, and complete project delivery.
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-body text-lg">
                  We are committed to providing innovative, sustainable, value-for-money solutions that are financially affordable, economically viable, socially responsible, and environmentally friendly. Through continuous improvement, we tailor every project to achieve complete customer satisfaction.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-body text-lg">
                  Headquartered in Nansana, Wakiso District, Uganda, TEI-HA Construction Services Ltd is a multidisciplinary engineering firm. Our team of professionally qualified and highly experienced experts delivers technology-driven intellectual services across planning, design, surveying, quantity surveying, engineering consultancy, and project management for the built environment.
                </p>
              </FadeUp>
            </div>
          }
        />
      </div>
    </Section>
  );
}
