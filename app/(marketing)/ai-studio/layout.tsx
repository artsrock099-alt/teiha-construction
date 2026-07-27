import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Studio | AI-Powered Construction Tools | TEI-HA",
  description:
    "Discover TEI-HA's AI-powered construction tools. Building cost estimator, floor plan generator, material advisor, and more. Transform your construction projects with AI.",
  keywords: [
    "AI Construction Tools Uganda",
    "Building Cost Estimator AI",
    "Floor Plan Generator",
    "Construction AI",
    "Smart Building Tools",
  ],
  openGraph: {
    title: "AI Studio | TEI-HA Construction Services Ltd",
    description:
      "Explore our suite of AI-powered construction and architecture tools designed to transform your building projects.",
  },
};

export default function AIStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
