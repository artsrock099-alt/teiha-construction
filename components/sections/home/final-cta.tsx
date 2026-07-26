"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/lib/animations";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 gradient-ai opacity-90" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeUp>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's work together to build something amazing. Book a free consultation today and discover how <span style={{ color: "#d4a017" }}>TEI-HA</span> can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Book Consultation</Link>
            </Button>
            <Button size="xl" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
