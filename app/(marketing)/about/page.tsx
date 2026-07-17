import * as React from "react";
import { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/hero";
import { OurStory } from "@/components/sections/about/our-story";
import { MissionVisionValues } from "@/components/sections/about/mission-vision-values";
import { OurCoreValues } from "@/components/sections/about/our-core-values";
import { OurApproach } from "@/components/sections/about/our-approach";
// import { WhyAI } from "@/components/sections/about/why-ai";
import { Capabilities } from "@/components/sections/about/capabilities";
import { SustainabilityCommitment } from "@/components/sections/about/sustainability";
import { CompanyStats } from "@/components/sections/about/company-stats";
import { AboutFAQ } from "@/components/sections/about/faq";
import { FinalCTA } from "@/components/sections/home/final-cta";

export const metadata: Metadata = {
  title: "About TEI-HA Construction Services Ltd | Architecture & Construction Company Uganda",
  description: "TEI-HA Construction Services Ltd is a leading Ugandan construction company and architectural consulting firm delivering technology-driven services. Specializing in project planning, design, surveying, and AI construction solutions in Africa.",
  keywords: ["About TEI-HA Construction Services Ltd", "Architecture Company Uganda", "Construction Company Uganda", "Engineering Consultancy Uganda", "AI Construction Solutions Africa"],
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVisionValues />
      <OurCoreValues />
      <OurApproach />
      {/* <WhyAI /> */}
      <Capabilities />
      <SustainabilityCommitment />
      <CompanyStats />
      <AboutFAQ />
      <FinalCTA />
    </>
  );
}
