import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Resources | TEI-HA Construction Services Ltd",
  description:
    "Explore guides, case studies, whitepapers, and resources from TEI-HA Construction Services Ltd covering architecture, construction, engineering, and AI in the building industry.",
  keywords: [
    "Construction Resources Uganda",
    "Architecture Guides",
    "Building Case Studies",
    "Construction Whitepapers",
    "AI Construction Resources",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/resources`,
  },
};

export default function ResourcesPage() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-6">
      <h1 className="text-4xl font-bold mb-4">Resources</h1>
      <p className="text-lg text-slate-600">Coming soon...</p>
    </div>
  );
}
