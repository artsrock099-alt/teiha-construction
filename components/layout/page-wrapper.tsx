import * as React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { AnnouncementBar } from "./announcement-bar";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PageTransition } from "./page-transition";
import { FloatingAIAdvisor } from "@/components/widgets/floating-ai-advisor";
import { FloatingWhatsAppButton } from "@/components/widgets/floating-whatsapp-button";

interface PageWrapperProps {
  children: React.ReactNode;
  showAnnouncement?: boolean;
  announcementMessage?: string;
  announcementType?: "info" | "promo" | "news" | "event";
}

export function PageWrapper({
  children,
  showAnnouncement = false,
  announcementMessage = "",
  announcementType = "info",
}: PageWrapperProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {showAnnouncement && (
        <AnnouncementBar
          message={announcementMessage}
          type={announcementType}
        />
      )}
      <Header />
      <main className="flex-1 pt-24">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingWhatsAppButton />
      <FloatingAIAdvisor />
    </div>
  );
}
