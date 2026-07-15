"use client";

import * as React from "react";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureGrid } from "@/components/layouts/feature-grid";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/lib/animations";

const BLOG_POSTS = [
  {
    title: "The Future of AI in Architecture",
    category: "AI",
    excerpt: "Exploring how artificial intelligence is reshaping the way we design buildings.",
    date: "Oct 20, 2026",
    featured: true,
  },
  {
    title: "Sustainable Building Materials of Tomorrow",
    category: "Sustainability",
    excerpt: "Discover the next generation of eco-friendly construction materials.",
    date: "Oct 15, 2026",
    featured: false,
  },
  {
    title: "Project Management in the Digital Age",
    category: "Construction",
    excerpt: "Modern tools and techniques for efficient project delivery.",
    date: "Oct 10, 2026",
    featured: false,
  },
  {
    title: "Designing for Climate Resilience",
    category: "Architecture",
    excerpt: "Building structures that can withstand the challenges of a changing climate.",
    date: "Oct 05, 2026",
    featured: false,
  },
];

export function LatestInsights() {
  return (
    <Section size="xl">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Latest Insights"
          subtitle="Stay informed with our latest news, articles and resources."
          className="mb-12"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <FadeUp>
              <Card hover className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Featured Image</p>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {BLOG_POSTS[0].category}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {BLOG_POSTS[0].date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {BLOG_POSTS[0].title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-body mb-4">{BLOG_POSTS[0].excerpt}</p>
                  <Button variant="ghost" className="px-0" asChild>
                    <Link href="/blog">Read Article →</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeUp>
          </div>
          {/* Other Posts */}
          <div className="space-y-6">
            {BLOG_POSTS.slice(1).map((post, idx) => (
              <FadeUp key={post.title} delay={idx * 0.1}>
                <Card hover>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body mb-4">{post.excerpt}</p>
                    <Button variant="ghost" className="px-0 py-0" asChild>
                      <Link href="/blog">Read More →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
