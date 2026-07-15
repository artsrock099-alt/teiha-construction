import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ContactOptionCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  contactMethod: string;
  delay?: number;
}

export function ContactOptionCard({
  icon: Icon,
  title,
  description,
  contactMethod,
  delay = 0,
}: ContactOptionCardProps) {
  return (
    <FadeUp delay={delay}>
      <Card className="h-full">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-lg mt-3">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-body mb-4">{description}</p>
          <p className="text-sm font-semibold text-primary">{contactMethod}</p>
        </CardContent>
      </Card>
    </FadeUp>
  );
}
