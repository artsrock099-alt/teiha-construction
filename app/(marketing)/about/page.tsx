import * as React from "react";
import { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/hero";
import { OurStory } from "@/components/sections/about/our-story";
import { MissionVisionValues } from "@/components/sections/about/mission-vision-values";
import { OurApproach } from "@/components/sections/about/our-approach";
import { WhyAI } from "@/components/sections/about/why-ai";
import { Capabilities } from "@/components/sections/about/capabilities";
import { SustainabilityCommitment } from "@/components/sections/about/sustainability";
import { CompanyStats } from "@/components/sections/about/company-stats";
import { AboutFAQ } from "@/components/sections/about/faq";
import { FinalCTA } from "@/components/sections/home/final-cta";

export const metadata: Metadata = {
  title: "About Us | TEI-HA Construction Services",
  description:
    "Learn about TEI-HA, our mission, vision, and how we're using AI to transform the architecture and construction industry.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVisionValues />
      <OurApproach />
      <WhyAI />
      <Capabilities />
      <SustainabilityCommitment />
      <CompanyStats />
      <AboutFAQ />
      <FinalCTA />
    </>
  );
}
