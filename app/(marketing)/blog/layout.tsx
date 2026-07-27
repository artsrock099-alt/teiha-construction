import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog | Insights & Ideas | TEI-HA Construction Services Ltd",
  description:
    "Explore insights on architecture, construction, sustainability, and the future of building in East Africa. Expert articles from TEI-HA Construction Services Ltd.",
  keywords: [
    "Construction Blog Uganda",
    "Architecture Insights Africa",
    "Sustainable Construction",
    "AI in Construction",
    "Building Industry Uganda",
  ],
  openGraph: {
    title: "Blog | Insights & Ideas | TEI-HA Construction",
    description:
      "Expert insights on architecture, construction, sustainability, and AI-powered building in East Africa.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
