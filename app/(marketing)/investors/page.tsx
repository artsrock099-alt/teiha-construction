import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Investors | TEI-HA Construction Services Ltd",
  description:
    "Investment opportunities with TEI-HA Construction Services Ltd. Join us in shaping the future of AI-powered construction and architecture in East Africa.",
  keywords: [
    "TEI-HA Investors",
    "Construction Investment Uganda",
    "Architecture Investment Africa",
    "Real Estate Development Investment",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/investors`,
  },
};

export default function InvestorsPage() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-6">
      <h1 className="text-4xl font-bold mb-4">Investors</h1>
      <p className="text-lg text-slate-600">Coming soon...</p>
    </div>
  );
}
