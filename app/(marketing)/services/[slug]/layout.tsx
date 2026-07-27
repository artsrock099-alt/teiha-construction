import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/constants/services";
import { SITE_CONFIG } from "@/lib/constants";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.seo.title || `${service.title} | ${SITE_CONFIG.name}`,
    description: service.seo.description || service.shortDescription,
    keywords: service.seo.keywords?.join(", "),
    openGraph: {
      title: service.seo.title || `${service.title} | ${SITE_CONFIG.name}`,
      description: service.seo.description || service.shortDescription,
      images: [{ url: service.imagePlaceholder, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/services/${service.slug}`,
    },
  };
}

export default function ServiceSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
