"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { Badge } from "@/components/ui/badge";
import { BLOG_ARTICLES, CATEGORIES, getFeaturedBlogArticle, type BlogArticle } from "@/lib/constants/blog";
import { FadeUp } from "@/lib/animations";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import { format } from "date-fns";

export default function BlogLandingPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featuredArticle = getFeaturedBlogArticle();

  const filteredArticles = activeCategory === "All"
    ? BLOG_ARTICLES.filter((a) => !a.isFeatured)
    : BLOG_ARTICLES.filter((a) => !a.isFeatured && a.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb className="mb-8" />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-6">
              Insights & Ideas
            </h1>
            <p className="text-lg md:text-xl text-body mb-8 max-w-2xl">
              Explore our latest thoughts on architecture, construction, sustainability, and the future of building in East Africa and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/#newsletter">Subscribe</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <Section size="xl">
          <div className="container mx-auto px-6">
            <SectionHeader
              title="Featured Article"
              subtitle="Our latest and greatest"
              className="mb-12"
            />
            <Link href={`/blog/${featuredArticle.slug}`} className="block">
              <FadeUp>
                <Card hover className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
                      <img
                        src={featuredArticle.featuredImage}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-12">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary">{featuredArticle.category}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {format(new Date(featuredArticle.publishedDate), "MMMM d, yyyy")}
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredArticle.estimatedReadingTime} min read
                        </span>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl mb-4">
                        {featuredArticle.title}
                      </CardTitle>
                      <p className="text-body mb-6">{featuredArticle.excerpt}</p>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        Read Article <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeUp>
            </Link>
          </div>
        </Section>
      )}

      {/* Categories Filter */}
      <Section size="xl" variant="muted">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center mb-0">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-surface border border-border hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Articles Grid */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <FadeUp key={article.slug} delay={index * 0.05}>
                <ArticleCard article={article} />
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section variant="muted" size="xl">
        <NewsletterSection
          title="Subscribe for Insights"
          description="Stay up to date with the latest trends in architecture, construction, and AI from TEI-HA."
        />
      </Section>
    </>
  );
}

function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <Link href={`/blog/${article.slug}`} className="block h-full">
      <Card hover className="h-full overflow-hidden">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">{article.category}</Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.estimatedReadingTime} min read
            </span>
          </div>
          <CardTitle className="text-lg">{article.title}</CardTitle>
          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-2">
            <Calendar className="h-3 w-3" />
            {format(new Date(article.publishedDate), "MMMM d, yyyy")}
          </p>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-body mb-4 line-clamp-2">{article.excerpt}</p>
          <div className="flex items-center gap-2 text-primary font-medium">
            Read More <ArrowRight className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
