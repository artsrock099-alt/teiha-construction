"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { Badge } from "@/components/ui/badge";
import { Quote } from "@/components/ui/quote";
import { BLOG_ARTICLES, type BlogArticle } from "@/lib/constants/blog";
import { FadeUp } from "@/lib/animations";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface ArticlePageClientProps {
  article: BlogArticle;
}

export function ArticlePageClient({ article }: ArticlePageClientProps) {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
      }
    );

    for (const id in sectionRefs.current) {
      const element = sectionRefs.current[id];
      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, []);

  const relatedArticles = article.relatedArticles
    .map((slug) => BLOG_ARTICLES.find((a) => a.slug === slug))
    .filter((a): a is BlogArticle => a !== undefined);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = sectionRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb className="mb-8" />
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{article.category}</Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {format(new Date(article.publishedDate), "MMMM d, yyyy")}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.estimatedReadingTime} min read
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                {article.authorImage ? (
                  <img
                    src={article.authorImage}
                    alt={article.author}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <User className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <div>
                <p className="font-medium text-heading">{article.author}</p>
                <p className="text-sm text-muted-foreground">{article.authorRole}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-auto max-h-[600px] object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-start">
            {/* Table of Contents - Sticky */}
            <div className="hidden lg:block sticky top-32 self-start">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Table of Contents</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <nav>
                    <ul className="space-y-2">
                      {article.tableOfContents.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            onClick={(e) => handleTocClick(e, item.id)}
                            className={cn(
                              "block text-sm py-1 transition-colors",
                              activeSection === item.id
                                ? "text-primary font-medium"
                                : "text-body hover:text-primary"
                            )}
                            style={{
                              paddingLeft: `${(item.level - 1) * 16}px`,
                            }}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="max-w-3xl">
              {article.sections.map((section, index) => (
                <FadeUp key={index} delay={index * 0.05}>
                  <ArticleSection
                    section={section}
                    ref={(el) => {
                      if (section.type === "heading") {
                        sectionRefs.current[section.id] = el;
                      }
                    }}
                  />
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <Section size="xl" variant="muted">
          <div className="container mx-auto px-6">
            <SectionHeader
              title="Related Articles"
              subtitle="More from our blog"
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, idx) => (
                <FadeUp key={relatedArticle.slug} delay={idx * 0.05}>
                  <Link href={`/blog/${relatedArticle.slug}`} className="block h-full">
                    <Card hover className="h-full overflow-hidden">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={relatedArticle.featuredImage}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary">{relatedArticle.category}</Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {relatedArticle.estimatedReadingTime} min read
                          </span>
                        </div>
                        <CardTitle className="text-lg">{relatedArticle.title}</CardTitle>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-2">
                          <Calendar className="h-3 w-3" />
                          {format(new Date(relatedArticle.publishedDate), "MMMM d, yyyy")}
                        </p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-body mb-4 line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          Read More <ArrowRight className="h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Author Card */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <Card>
            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center overflow-hidden shrink-0">
                {article.authorImage ? (
                  <img
                    src={article.authorImage}
                    alt={article.author}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <User className="h-12 w-12 text-muted-foreground" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-heading mb-1">{article.author}</h3>
                <p className="text-muted-foreground mb-3">{article.authorRole}</p>
                <p className="text-body">
                  {article.author} is a key member of the TEI-HA team, bringing years of
                  experience and expertise to our projects.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Newsletter */}
      <Section size="xl" variant="muted">
        <NewsletterSection
          title="Stay Updated"
          description="Get our latest articles and insights delivered straight to your inbox."
        />
      </Section>

      {/* Final CTA */}
      <Section size="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
              Ready to Build Something Great?
            </h2>
            <p className="text-lg text-body mb-8">
              Let's discuss how TEI-HA can help bring your next project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function ArticleSection({
  section,
  ref,
}: {
  section: any;
  ref?: React.Ref<HTMLDivElement>;
}) {
  switch (section.type) {
    case "heading":
      const HeadingTag = `h${section.level}` as React.ElementType;
      return (
        <div id={section.id} ref={ref} className="mb-6">
          <HeadingTag
            className={cn(
              "font-bold text-heading",
              section.level === 1 && "text-4xl md:text-5xl",
              section.level === 2 && "text-3xl md:text-4xl",
              section.level === 3 && "text-2xl md:text-3xl",
              section.level >= 4 && "text-xl md:text-2xl"
            )}
          >
            {section.text}
          </HeadingTag>
        </div>
      );

    case "paragraph":
      return <p className="text-body text-lg mb-6">{section.text}</p>;

    case "quote":
      return <Quote quote={section.content} author={section.author} className="mb-6" />;

    case "list":
      const ListTag = section.ordered ? "ol" : "ul";
      return (
        <ListTag
          className={cn(
            "text-body text-lg mb-6 pl-6",
            section.ordered ? "list-decimal" : "list-disc"
          )}
        >
          {section.items.map((item: string, i: number) => (
            <li key={i} className="mb-2">{item}</li>
          ))}
        </ListTag>
      );

    case "image":
      return (
        <figure className="mb-8">
          <img
            src={section.url}
            alt={section.alt}
            className="w-full rounded-lg"
          />
          {section.caption && (
            <figcaption className="text-center text-sm text-muted-foreground mt-2">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case "callout":
      const calloutColors: Record<string, string> = {
        info: "bg-blue-50 border-blue-200 text-blue-900",
        success: "bg-green-50 border-green-200 text-green-900",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
        error: "bg-red-50 border-red-200 text-red-900",
      };

      return (
        <div
          className={cn(
            "mb-6 p-6 rounded-lg border",
            calloutColors[section.style || "info"]
          )}
        >
          {section.title && (
            <h4 className="font-semibold mb-2">{section.title}</h4>
          )}
          <p>{section.text}</p>
        </div>
      );

    default:
      return null;
  }
}
