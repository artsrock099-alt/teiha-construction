import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPageClient } from "@/components/sections/ai-studio/tool-page-client";
import { AI_TOOLS, getAIToolBySlug } from "@/lib/constants/ai-tools";
import { SITE_CONFIG } from "@/lib/constants";

export async function generateStaticParams() {
  return AI_TOOLS.map((tool) => ({
    slug: tool.slug,
  }));
}

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

export default async function AIToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getAIToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                name: tool.title,
                description: tool.shortDescription,
                url: `${SITE_CONFIG.url}/ai-studio/${tool.slug}`,
                image: tool.heroIllustration,
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                author: {
                  "@type": "Organization",
                  name: SITE_CONFIG.name,
                  url: SITE_CONFIG.url,
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
                  { "@type": "ListItem", position: 2, name: "AI Studio", item: `${SITE_CONFIG.url}/ai-studio` },
                  { "@type": "ListItem", position: 3, name: tool.title, item: `${SITE_CONFIG.url}/ai-studio/${tool.slug}` },
                ],
              },
            ],
          }),
        }}
      />
      <ToolPageClient tool={tool} />
    </>
  );
}
