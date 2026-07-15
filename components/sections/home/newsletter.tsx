import * as React from "react";
import { Section } from "@/components/ui/section";
import { NewsletterSection as NewsletterComponent } from "@/components/sections/newsletter-section";

export function Newsletter() {
  return (
    <Section variant="muted" size="xl">
      <NewsletterComponent
        title="Subscribe to Our Newsletter"
        description="Get the latest updates on construction trends, AI innovations, and company news."
      />
    </Section>
  );
}
