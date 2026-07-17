import { Hero } from "@/components/sections/home/hero";
import { TrustedBy } from "@/components/sections/home/trusted-by";
import { CompanyIntro } from "@/components/sections/home/company-intro";
import { FeaturedServices } from "@/components/sections/home/featured-services";
import { AIAdvantage } from "@/components/sections/home/ai-advantage";
import { FeaturedProjects } from "@/components/sections/home/featured-projects";
import { LeadershipTeam } from "@/components/sections/home/leadership-team";
import { Industries } from "@/components/sections/home/industries";
import { WhyChooseTeiha } from "@/components/sections/home/why-choose";
import { ConstructionProcess } from "@/components/sections/home/construction-process";
import { Sustainability } from "@/components/sections/home/sustainability";
import { Testimonials } from "@/components/sections/home/testimonials";
// import { LatestInsights } from "@/components/sections/home/latest-insights";
import { Statistics } from "@/components/sections/home/statistics";
import { FAQ } from "@/components/sections/home/faq";
import { Newsletter } from "@/components/sections/home/newsletter";
import { FinalCTA } from "@/components/sections/home/final-cta";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <CompanyIntro />
      <LeadershipTeam />
      <FeaturedServices />
      <AIAdvantage />
      <FeaturedProjects />
      <WhyChooseTeiha />
      <ConstructionProcess />
      <Industries />
      <Sustainability />
      <Statistics />
      <Testimonials />
      {/* <LatestInsights /> */}
      <FAQ />
      <Newsletter />
      <FinalCTA />
      <ScrollToTop />
    </>
  );
}
