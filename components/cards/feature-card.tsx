"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeUp } from "@/lib/animations";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <FadeUp delay={delay}>
      <Card hover className="h-full">
        <CardHeader className="pb-3">
          <div className="mb-3 md:mb-4 inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-muted">
            {icon}
          </div>
          <CardTitle className="text-base md:text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm md:text-base text-body">{description}</p>
        </CardContent>
      </Card>
    </FadeUp>
  );
}
