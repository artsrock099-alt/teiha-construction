import { ReactNode } from "react";
import { PageWrapper } from "@/components/layout/page-wrapper";

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
