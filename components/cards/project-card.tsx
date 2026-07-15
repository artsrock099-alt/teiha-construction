"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/lib/animations";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  summary: string;
  imageUrl?: string;
  ctaHref?: string;
  delay?: number;
}

export function ProjectCard({
  title,
  category,
  location,
  summary,
  ctaHref = "/projects",
  delay = 0,
}: ProjectCardProps) {
  return (
    <FadeUp delay={delay}>
      <Card hover className="overflow-hidden">
        <div className="aspect-video bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">Project Image</p>
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">{category}</Badge>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-body mb-4">{summary}</p>
          <Button variant="ghost" className="px-0" asChild>
            <Link href={ctaHref}>View Project →</Link>
          </Button>
        </CardContent>
      </Card>
    </FadeUp>
  );
}
