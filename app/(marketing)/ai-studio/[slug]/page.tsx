import { notFound } from "next/navigation";
import { ToolPageClient } from "@/components/sections/ai-studio/tool-page-client";
import { AI_TOOLS, getAIToolBySlug } from "@/lib/constants/ai-tools";

export async function generateStaticParams() {
  return AI_TOOLS.map((tool) => ({
    slug: tool.slug,
  }));
}

export default function AIToolPage({ params }: { params: { slug: string } }) {
  const tool = getAIToolBySlug(params.slug);

  if (!tool) {
    notFound();
  }

  return <ToolPageClient tool={tool} />;
}
