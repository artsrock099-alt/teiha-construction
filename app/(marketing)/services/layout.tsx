import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services | Architecture, Engineering & Construction | TEI-HA",
  description:
    "Comprehensive architecture, civil engineering, construction, interior design, and project management services in Uganda. AI-powered solutions delivering international quality standards.",
  keywords: [
    "Construction Services Uganda",
    "Architecture Services Kampala",
    "Civil Engineering Uganda",
    "Interior Design Uganda",
    "Project Management Uganda",
    "Building Contractors Uganda",
  ],
  openGraph: {
    title: "Our Services | TEI-HA Construction Services Ltd",
    description:
      "Explore our full range of AI-powered architecture, engineering, and construction services across Uganda and East Africa.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
