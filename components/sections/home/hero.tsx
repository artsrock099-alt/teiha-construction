"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconContainer } from "@/components/ui/icon-container";
import { FadeUp, Stagger } from "@/lib/animations";
import { GridBackground } from "@/components/decorative/grid-background";
import { GradientBlob } from "@/components/decorative/gradient-blob";
import { Sparkles, Zap, Leaf, Globe, CheckCircle } from "lucide-react";

const HERO_IMAGES = [
  "/tei ha pics/hero1.jpeg",
  "/tei ha pics/hero2.jpeg",
  "/tei ha pics/hero3.jpeg",
  "/tei ha pics/hero4.jpeg",
  "/tei ha pics/hero5.jpeg",
  "/tei ha pics/hero6.jpeg",
  "/tei ha pics/hero7.jpeg",
  "/tei ha pics/hero8.jpeg",
  "/tei ha pics/hero9.jpeg",
  "/tei ha pics/hero10.jpeg",
];

export function Hero() {
  const trustMetrics = [
    { label: "Projects Completed", value: 200, suffix: "+" },
    { label: "Years Experience", value: 15, suffix: "+" },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
  ];

  const glassCards = [
    { icon: <Leaf />, title: "Sustainable Construction" },
    { icon: <Globe />, title: "Global Projects" },
    { icon: <Zap />, title: "Smart Planning" },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="TEI-HA Construction Services Hero"
            fill
            className="object-cover"
            priority={index === 0}
            style={{
              opacity: index === currentSlide ? 1 : 0,
              transition: "opacity 1000ms ease-in-out",
              position: "absolute",
              inset: 0,
            }}
          />
        ))}
        {/* Subtle Navy Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Stagger>
          <FadeUp className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 leading-tight text-white" 
                style={{ 
                  textShadow: "0 2px 4px rgba(0,0,0,0.9), 0 4px 12px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4)",
                  WebkitTextStroke: "1px rgba(0,0,0,0.15)",
                }}>
              <span style={{ color: "#d4a017" }}>Building Tomorrow's</span>{" "}
              <span className="text-cyan-300" style={{ 
                textShadow: "0 2px 4px rgba(0,0,0,0.9), 0 4px 12px rgba(34,211,238,0.4), 0 8px 24px rgba(0,0,0,0.4)",
                WebkitTextStroke: "1px rgba(0,0,0,0.12)",
              }}>
                Intelligent Spaces.
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white font-medium mb-8 md:mb-10 max-w-2xl mx-auto"
               style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
              We Transform visions into reality by combining architecture and engineering to deliver
              smarter, faster and more sustainable projects worldwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-10 md:mb-12">
              <Button size="md" className="w-full sm:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-xl border-slate-700" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button variant="outline" size="md" className="w-full sm:w-auto border-white text-white hover:bg-white/25 shadow-xl" asChild>
                <Link href="/projects">Explore Projects</Link>
              </Button>
            </div>
          </FadeUp>

          {/* Trust Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto mb-12 md:mb-16">
            {trustMetrics.map((metric, idx) => (
              <FadeUp key={metric.label} delay={idx * 0.1} className="text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-1 text-white"
                   style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
                  {metric.value}
                  {metric.suffix}
                </p>
                <p className="text-xs md:text-sm lg:text-base text-white font-medium"
                   style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
                  {metric.label}
                </p>
              </FadeUp>
            ))}
          </div>

          {/* Glass Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
            {glassCards.map((card, idx) => (
              <FadeUp key={card.title} delay={idx * 0.1}>
                <div className="bg-white/35 backdrop-blur-lg border border-white/40 rounded-xl p-4 md:p-6 text-center shadow-xl hover:shadow-2xl hover:bg-white/45 transition-all duration-300">
                  <IconContainer variant="gradient" size="sm" className="mx-auto mb-3 md:mb-4">
                    {card.icon}
                  </IconContainer>
                  <p className="text-sm md:text-base font-semibold text-white"
                     style={{ textShadow: "0 2px 6px rgba(0,0,0,0.3)" }}>
                    {card.title}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
