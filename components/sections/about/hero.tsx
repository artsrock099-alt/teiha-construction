"use client";

import * as React from "react";
import { FadeUp } from "@/lib/animations";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/tei ha pics/hero15.jpeg"
          alt="TEI-HA Construction Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeUp className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight [text-shadow:_0_2px_10px_rgb(0_0_0_/_1)]">
            <span className="text-blue-300">Building the Future of</span>
            <span className="text-gradient-ai bg-clip-text text-transparent block mt-2 font-extrabold">
              Architecture & Construction
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white font-bold max-w-2xl mx-auto [text-shadow:_0_2px_10px_rgb(0_0_0_/_1)]">
            At TEI-HA, we're redefining what's possible by combining timeless architectural principles with cutting-edge artificial intelligence.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
