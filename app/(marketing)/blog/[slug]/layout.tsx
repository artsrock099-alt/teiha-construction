import type { Metadata } from "next";
import { getBlogArticleBySlug } from "@/lib/constants/blog";
import { SITE_CONFIG } from "@/lib/constants";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getBlogArticleBySlug(slug);
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

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
