"use client";
import * as React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Architecture", href: "/services/architecture" },
        { name: "Construction", href: "/services/construction" },
        { name: "Interior Design", href: "/services/interior-design" },
        { name: "Engineering", href: "/services/engineering" },
        { name: "Renovation", href: "/services/renovation" },
        { name: "Project Management", href: "/services/project-management" },
      ],
    },
    {
      title: "AI Studio",
      links: [
        { name: "Overview", href: "/ai-studio" },
        { name: "Budget Calculator", href: "/ai-studio/budget" },
        { name: "Site Assessment", href: "/ai-studio/assessment" },
        { name: "Design Generator", href: "/ai-studio/design" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Guides", href: "/resources/guides" },
        { name: "Case Studies", href: "/resources/case-studies" },
      ],
    },
  ];

  return (
    <footer className="bg-dark text-white pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="container mx-auto px-4 md:px-6">
        {/* Footer Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 mb-12 md:mb-16">
          {/* Company Overview */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="text-2xl md:text-3xl font-bold font-[Plus_Jakarta_Sans] mb-4 block">
              TEI-HA
            </Link>
            <p className="text-white/70 mb-6 max-w-md text-sm md:text-base">
              AI-powered architecture and construction services based in Uganda, serving clients worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.youtube.com/@Tei-haConstructionServices" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors text-red-600">
                <PlayCircle className="h-4.5 w-4.5 md:h-5 md:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className={`text-base md:text-lg font-semibold mb-3 md:mb-4`} style={{ color: "#d4a017" }}>{section.title}</h4>
              <ul className="space-y-1.5 md:space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm md:text-base text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter & Contact */}
        <div className="border-t border-white/10 pt-8 md:pt-10 pb-6 md:pb-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* Newsletter */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3" style={{ color: "#d4a017" }}>Stay Updated</h4>
            <p className="text-sm md:text-base text-white/70 mb-4">
              Get the latest news and updates from TEI-HA
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-1"
              />
              <Button variant="secondary" size="md" className="w-full sm:w-auto">Subscribe</Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="h-4.5 w-4.5 md:h-5 md:w-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium text-sm md:text-base">WhatsApp</p>
                <a href="https://wa.me/256741190078" className="text-sm md:text-base text-white/70 hover:text-white">
                  +256-741190078
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-4.5 w-4.5 md:h-5 md:w-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium text-sm md:text-base">Phone Number</p>
                <a href="tel:+256200911184" className="text-sm md:text-base text-white/70 hover:text-white">
                  +256 200911184
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-4.5 w-4.5 md:h-5 md:w-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium text-sm md:text-base">Email</p>
                <a href="mailto:teihaconstructionservices@gmail.com" className="text-sm md:text-base text-white/70 hover:text-white">
                  teihaconstructionservices@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-4.5 w-4.5 md:h-5 md:w-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium text-sm md:text-base">Business Details</p>
                <p className="text-sm md:text-base text-white/70">TIN: 1047520346</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-4.5 w-4.5 md:h-5 md:w-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium text-sm md:text-base">Location</p>
                <p className="text-sm md:text-base text-white/70">
                  Nansana Municipality, Hoima Rd, Kabumbi Rd; Nansana Eastern Ring Rd; East 1B
                </p>
                <p className="text-sm md:text-base text-white/70">
                  P. O. Box 115420, Wakiso
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-white/60 text-center md:text-left">
            © {new Date().getFullYear()} TEI-HA Construction Services. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-white/60">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
