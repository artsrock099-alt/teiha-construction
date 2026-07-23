"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/lib/animations";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  summary: string;
  imageUrl: string;
  slug: string;
  delay?: number;
}

export function ProjectCard({
  title,
  category,
  location,
  summary,
  imageUrl,
  slug,
  delay = 0,
}: ProjectCardProps) {
  return (
    <FadeUp delay={delay}>
      <Link href={`/projects/${slug}`} className="block group">
        <div className="relative overflow-hidden rounded-xl bg-muted aspect-[4/3] w-full transition-transform duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-1">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col gap-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <Badge className="w-fit bg-primary hover:bg-primary/90 text-white border-none">
              {category}
            </Badge>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                {title}
              </h3>
              <p className="text-white/80 text-sm mb-3">{location}</p>
              <p className="text-white/70 text-sm line-clamp-2 mb-4 group-hover:line-clamp-3 transition-all duration-300">
                {summary}
              </p>
              <Button 
                size="sm" 
                className="w-fit bg-white text-black hover:bg-white/90 transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              >
                View Case Study
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </FadeUp>
  );
}
