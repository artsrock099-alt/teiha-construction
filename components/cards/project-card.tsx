"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/lib/animations";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  summary: string;
  imageUrl?: string;
  delay?: number;
}

export function ProjectCard({
  title,
  category,
  location,
  summary,
  imageUrl,
  delay = 0,
}: ProjectCardProps) {
  return (
    <FadeUp delay={delay}>
      <Card hover className="overflow-hidden">
        <div className="aspect-video relative bg-muted">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">Project Image</p>
            </div>
          )}
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">{category}</Badge>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-body">{summary}</p>
        </CardContent>
      </Card>
    </FadeUp>
  );
}
