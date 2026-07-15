"use client";

import * as React from "react";
import Image from "next/image";
import { FadeUp } from "@/lib/animations";

const COMPANY_LOGOS = [
  {
    name: "Soleil Power",
    src: "/tei ha pics/soleil power.jpeg",
  },
  {
    name: "Zembo",
    src: "/tei ha pics/zembo.jpeg",
  },
];

export function TrustedBy() {
  return (
    <section className="py-16 border-y border-border">
      <div className="container mx-auto px-6">
        <FadeUp className="text-center mb-10">
          <p className="text-lg font-medium text-primary">
            Trusted by forward-thinking organizations.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {COMPANY_LOGOS.map((logo, idx) => (
            <FadeUp
              key={logo.name}
              delay={idx * 0.1}
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                <div className="relative w-full max-w-xs h-24 md:h-32">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                    priority={idx === 0}
                  />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
