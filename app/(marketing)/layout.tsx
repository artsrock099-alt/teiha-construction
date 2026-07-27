import { ReactNode } from "react";
import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
};

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <PageWrapper showAnnouncement={false}>
      {children}
    </PageWrapper>
  );
}
