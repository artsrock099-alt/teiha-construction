"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { FadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  delay?: number;
}

export function ServiceCard({
  icon,
  title,
  description,
  ctaText = "Learn More",
  ctaHref,
  delay = 0,
}: ServiceCardProps) {
  return (
    <FadeUp delay={delay}>
      <Card hover className="h-full">
        <CardHeader className="pb-3">
          <IconContainer variant="outline" size="lg">
            {icon}
          </IconContainer>
          <CardTitle className="mt-3 md:mt-4 text-base md:text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm md:text-base text-body mb-4 md:mb-6">{description}</p>
          {ctaHref && (
            <Button variant="ghost" className="px-0 text-sm md:text-base" asChild>
              <Link href={ctaHref}>{ctaText} →</Link>
            </Button>
          )}
        </CardContent>
      </Card>
    </FadeUp>
  );
}
