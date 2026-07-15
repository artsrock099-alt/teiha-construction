"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { FadeUp } from "@/lib/animations";

interface QuoteProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string | null;
  delay?: number;
}

export function Quote({
  quote,
  author,
  role,
  company,
  avatar,
  delay = 0,
  className,
  ...props
}: QuoteProps) {
  return (
    <FadeUp delay={delay}>
      <div className={cn("max-w-2xl", className)} {...props}>
        <div className="text-5xl text-secondary mb-4 leading-none">"</div>
        <p className="text-xl md:text-2xl mb-8">{quote}</p>
        <div className="flex items-center gap-4">
          {avatar && (
            <div className="h-14 w-14 rounded-full bg-muted overflow-hidden">
              <img src={avatar} alt={author} className="h-full w-full object-cover" />
            </div>
          )}
          <div>
            <p className="font-semibold text-lg">{author}</p>
            <div className="flex items-center gap-2 text-body text-sm">
              {role && <span>{role}</span>}
              {role && company && <span>•</span>}
              {company && <span>{company}</span>}
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
