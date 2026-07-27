import type { Metadata } from "next";
import { getAIToolBySlug } from "@/lib/constants/ai-tools";
import { SITE_CONFIG } from "@/lib/constants";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const tool = getAIToolBySlug(slug);
  if (!tool) return {};

  return {
    title: tool.seo?.title || `${tool.title} | AI Studio | ${SITE_CONFIG.name}`,
    description: tool.seo?.description || tool.shortDescription,
    keywords: tool.seo?.keywords?.join(", "),
    openGraph: {
      title: tool.seo?.title || `${tool.title} | ${SITE_CONFIG.name}`,
      description: tool.seo?.description || tool.shortDescription,
      images: [{ url: tool.heroIllustration, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/ai-studio/${tool.slug}`,
    },
  };
}

export default function AIToolSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
