import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services | Architecture, Engineering & Construction | TEI-HA",
  description:
    "Explore TEI-HA Construction Services Ltd's full portfolio of 16 professional services: architectural design, civil & structural engineering, construction, project management, highway engineering, geotechnical engineering, surveying, MEP, water supply, environmental engineering, interior design, renovation, supervision, smart building, sustainable design, and material supply.",
  keywords: [
    "Construction Services Uganda",
    "Architecture Services Kampala",
    "Civil Engineering Uganda",
    "Interior Design Uganda",
    "Project Management Uganda",
    "Building Contractors Uganda",
    "Highway Engineering Uganda",
    "Geotechnical Engineering Uganda",
    "Surveying Uganda",
    "MEP Engineering Uganda",
    "Water Supply Uganda",
    "Environmental Engineering Uganda",
    "Renovation Uganda",
    "Smart Building Uganda",
    "Sustainable Design Uganda",
    "Construction Materials Uganda",
  ],
  openGraph: {
    title: "Our Services | TEI-HA Construction Services Ltd",
    description:
      "TEI-HA offers 16 comprehensive professional services spanning architecture, engineering, construction, consultancy, and material supply across Uganda and East Africa.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
