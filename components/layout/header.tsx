"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ServicesMegaMenu } from "./services-mega-menu";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasMegaMenu: true },
  { name: "Projects", href: "/projects" },
  { name: "AI Studio", href: "/ai-studio" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = React.useState(false);
  
  const handleCloseMobileMenu = React.useCallback(() => setIsMobileMenuOpen(false), []);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border py-2 md:py-3 shadow-sm"
          : "bg-transparent py-4 md:py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/tei ha pics/logo.png"
              alt="TEI-HA Construction Services Ltd Logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
              priority
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-primary font-[Plus_Jakarta_Sans] tracking-tight">
                TEI-HA Construction Services Ltd.
              </span>
              <span className="hidden md:block text-xs text-muted-foreground">
                Quality Is Our Priority
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative">
                <Link
                  href={link.href}
                  onMouseEnter={() => link.hasMegaMenu && setIsMegaMenuOpen(true)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-body"
                  )}
                >
                  {link.name}
                </Link>
                {link.hasMegaMenu && (
                  <ServicesMegaMenu
                    isOpen={isMegaMenuOpen}
                    onClose={() => setIsMegaMenuOpen(false)}
                  />
                )}
              </div>
            ))}
            <Button size="sm" asChild>
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileNav
          isOpen={isMobileMenuOpen}
          onClose={handleCloseMobileMenu}
        />
      )}
    </header>
  );
}

// Mobile Navigation Component
function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const ignoreNextClickRef = React.useRef(false);
  const previousPathnameRef = React.useRef(pathname);

  // Close menu when clicking outside or navigating
  React.useEffect(() => {
    if (!isOpen) return;

    // Set ignore flag first
    ignoreNextClickRef.current = true;

    const handleClickOutside = (e: MouseEvent) => {
      if (ignoreNextClickRef.current) {
        ignoreNextClickRef.current = false;
        return;
      }
      const target = e.target as HTMLElement;
      if (!target.closest("#mobile-nav")) onClose();
    };

    // Delay adding the event listener to avoid catching the click that opened the menu
    const timer = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 50);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  React.useEffect(() => {
    // Only close when pathname changes after initial mount
    if (previousPathnameRef.current !== pathname) {
      onClose();
    }
    previousPathnameRef.current = pathname;
  }, [pathname, onClose]);

  // Close on escape key
  React.useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [onClose]);

  return (
    <div id="mobile-nav" className="lg:hidden bg-white border-t border-border absolute top-full left-0 right-0 shadow-xl z-50">
      <div className="container mx-auto px-6 py-4 space-y-2">
        {NAV_LINKS.map((link) => (
          <div key={link.name} className="py-2">
            {link.hasMegaMenu ? (
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left flex items-center justify-between text-lg font-medium text-primary"
              >
                {link.name}
                <span>{isServicesOpen ? "-" : "+"}</span>
              </button>
            ) : (
              <Link
                href={link.href}
                onClick={onClose}
                className={cn(
                  "block text-lg font-medium transition-colors",
                  pathname === link.href ? "text-primary" : "text-body"
                )}
              >
                {link.name}
              </Link>
            )}
            {link.hasMegaMenu && isServicesOpen && (
              <div className="mt-3 pl-4 space-y-2 border-l-2 border-muted">
                {[
                  { name: "Architecture", href: "/services/architecture" },
                  { name: "Construction", href: "/services/construction" },
                  { name: "Interior Design", href: "/services/interior-design" },
                  { name: "Engineering", href: "/services/engineering" },
                  { name: "Renovation", href: "/services/renovation" },
                  { name: "Project Management", href: "/services/project-management" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className="block py-1 text-base text-body"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="pt-4">
          <Button className="w-full" asChild>
            <Link href="/contact" onClick={onClose}>
              Book Consultation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
