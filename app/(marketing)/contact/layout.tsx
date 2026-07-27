import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact TEI-HA Construction Services Ltd | Get in Touch",
  description:
    "Contact TEI-HA Construction Services Ltd for consultations, project enquiries, and partnerships. Call +256200911184 or email teihaconstructionservices@gmail.com. Based in Nansana, Uganda.",
  keywords: [
    "Contact TEI-HA Construction",
    "Construction Company Uganda Contact",
    "Architecture Firm Kampala",
    "Book Consultation Uganda",
  ],
  openGraph: {
    title: "Contact TEI-HA Construction Services Ltd",
    description:
      "Get in touch with Uganda's premier AI-powered construction company. Schedule a consultation or discuss your project.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
