"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbProps {
  className?: string;
  homeName?: string;
}

export function Breadcrumb({ className, homeName = "Home" }: BreadcrumbProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  // Capitalize each segment and replace hyphens with spaces
  const formatSegment = (segment: string) =>
    segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <nav className={cn("flex items-center text-sm text-body", className)} aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">{homeName}</span>
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          return (
            <li key={href} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              {isLast ? (
                <span className="text-primary font-medium">{formatSegment(segment)}</span>
              ) : (
                <Link href={href} className="hover:text-primary transition-colors">
                  {formatSegment(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
