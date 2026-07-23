"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";

interface TeamCardProps {
  name: string;
  position: string;
  bio: string;
  avatarSrc: string;
  avatarAdjustment?: string; // Optional CSS for avatar container
  imageStyle?: React.CSSProperties; // Optional inline styles for the image itself
  delay?: number;
}

export function TeamCard({
  name, position, bio, avatarSrc, avatarAdjustment, imageStyle, delay = 0 }: TeamCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  return (
    <FadeUp delay={delay}>
      <Card hover className="h-full flex flex-col">
        <CardHeader className="pb-3">
          <div className="relative mb-8">
            <div className={`w-32 h-32 mx-auto rounded-full overflow-hidden bg-muted border-2 border-border relative ${avatarAdjustment || ""}`}>
              <Image
                src={avatarSrc}
                alt={`${name} - ${position}`}
                fill
                className="object-cover"
                style={imageStyle}
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-semibold text-heading mb-1">{name}</h3>
            <p className="text-sm md:text-base text-primary font-medium mb-3">{position}</p>
          </div>
        </CardHeader>
        <CardContent className="pt-0 flex-grow flex flex-col">
          <p className={`text-sm md:text-base text-body text-center ${!isExpanded ? "line-clamp-3" : ""}`}>
            {bio}
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 mx-auto w-fit text-primary hover:text-primary/80"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </Button>
        </CardContent>
      </Card>
    </FadeUp>
  );
}
