"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { FadeUp } from "@/lib/animations";

export function CompanyIntro() {
  return (
    <Section variant="muted" size="xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="rounded-2xl border border-border bg-surface aspect-video overflow-hidden">
              <video
                src="/tei ha pics/Home-about-vid.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-medium mb-2" style={{ color: "#d4a017" }}>About TEI-HA</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Redefining Construction.
            </h2>
            <p className="text-lg text-body mb-8">
              TEI-HA is a Ugandan-based, global construction firm that blends world-class architecture and 
              engineering to deliver smarter, more sustainable projects.
              Our mission is to earn trust of our clients through commitment and caring services
            </p>
            <Button size="lg" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </FadeUp>
        </div>
      </div>
    </Section>
  );
}
