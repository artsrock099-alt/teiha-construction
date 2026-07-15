import { notFound } from "next/navigation";
import { ArticlePageClient } from "@/components/sections/blog/article-page-client";
import { BLOG_ARTICLES, getBlogArticleBySlug } from "@/lib/constants/blog";

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = getBlogArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return <ArticlePageClient article={article} />;
}
