"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { FadeUp } from "@/lib/animations";

interface StatisticCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

export function StatisticCard({
  icon,
  value,
  label,
  suffix,
  prefix,
  delay = 0,
}: StatisticCardProps) {
  return (
    <FadeUp delay={delay}>
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <IconContainer variant="gradient" size="lg">
              {icon}
            </IconContainer>
            <div>
              <p className="text-3xl md:text-4xl font-bold mb-1 text-heading">
                <AnimatedCounter
                  target={value}
                  suffix={suffix}
                  prefix={prefix}
                />
              </p>
              <p className="text-heading text-sm md:text-base opacity-80">{label}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </FadeUp>
  );
}
