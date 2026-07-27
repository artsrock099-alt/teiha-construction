import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePageClient } from "@/components/sections/blog/article-page-client";
import { BLOG_ARTICLES, getBlogArticleBySlug } from "@/lib/constants/blog";
import { SITE_CONFIG } from "@/lib/constants";

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getBlogArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.seo.title || `${article.title} | ${SITE_CONFIG.name}`,
    description: article.seo.description || article.excerpt,
    keywords: article.seo.keywords?.join(", "),
    openGraph: {
      title: article.openGraph.title || article.title,
      description: article.openGraph.description || article.excerpt,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: [article.author],
      images: [
        {
          url: article.openGraph.image || article.featuredImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${article.slug}`,
    },
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = getBlogArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: article.title,
                description: article.excerpt,
                image: article.featuredImage,
                url: `${SITE_CONFIG.url}/blog/${article.slug}`,
                datePublished: article.publishedDate,
                dateModified: article.updatedDate || article.publishedDate,
                author: {
                  "@type": "Person",
                  name: article.author,
                },
                publisher: {
                  "@type": "Organization",
                  name: SITE_CONFIG.name,
                  logo: {
                    "@type": "ImageObject",
                    url: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
                  },
                },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `${SITE_CONFIG.url}/blog/${article.slug}`,
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
                  { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_CONFIG.url}/blog` },
                  { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_CONFIG.url}/blog/${article.slug}` },
                ],
              },
            ],
          }),
        }}
      />
      <ArticlePageClient article={article} />
    </>
  );
}
