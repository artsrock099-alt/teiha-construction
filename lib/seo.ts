import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface SEOMetadataParams {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  image,
  url,
  noIndex = false,
}: SEOMetadataParams = {}): Metadata {
  const siteTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const siteDescription = description || SITE_CONFIG.description;
  const siteImage = image || SITE_CONFIG.ogImage;
  const siteUrl = url || SITE_CONFIG.url;

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: siteTitle,
    description: siteDescription,
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: siteUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: siteImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [siteImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
