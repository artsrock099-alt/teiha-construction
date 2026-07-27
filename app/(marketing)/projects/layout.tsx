import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Projects | Portfolio | TEI-HA Construction Services Ltd",
  description:
    "Explore our portfolio of completed construction and architecture projects across Uganda. Commercial buildings, residential developments, and infrastructure by TEI-HA.",
  keywords: [
    "Construction Projects Uganda",
    "Architecture Portfolio Kampala",
    "Building Projects East Africa",
    "TEI-HA Portfolio",
    "Commercial Construction Uganda",
  ],
  openGraph: {
    title: "Our Projects | TEI-HA Construction Services Ltd",
    description:
      "View our portfolio showcasing excellence in construction and design across East Africa.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
