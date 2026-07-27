import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

// ─── Metadata Config ─────────────────────────────────────────────────────

interface SEOMetadataParams {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  type?: "website" | "article" | "profile";
}

export function constructMetadata({
  title,
  description,
  image,
  url,
  noIndex = false,
  keywords,
  publishedTime,
  modifiedTime,
  authors,
  type = "website",
}: SEOMetadataParams = {}): Metadata {
  const siteTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const siteDescription = description || SITE_CONFIG.description;
  const siteImage = image || SITE_CONFIG.ogImage;
  const siteUrl = url || SITE_CONFIG.url;

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: siteTitle,
    description: siteDescription,
    keywords: keywords?.join(", "),
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
          alt: siteTitle,
        },
      ],
      locale: "en_US",
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
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
    alternates: {
      canonical: siteUrl,
    },
    other: {
      "geo.region": "UG-WAK",
      "geo.placename": "Nansana",
      "geo.position": `${SITE_CONFIG.business.geo.latitude};${SITE_CONFIG.business.geo.longitude}`,
      ICBM: `${SITE_CONFIG.business.geo.latitude}, ${SITE_CONFIG.business.geo.longitude}`,
    },
  };
}

// ─── JSON-LD Schema Generators (Structured Data for SEO / GEO) ───────────

/**
 * Organization + LocalBusiness schema (Google My Business structured data).
 * This powers knowledge panels, local search results, and AI search engines.
 */
export function organizationSchema() {
  const { business } = SITE_CONFIG;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.shortName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    image: SITE_CONFIG.ogImage,
    foundingDate: business.foundingDate,
    telephone: business.telephone,
    email: business.email,
    taxID: business.tin,
    sameAs: SITE_CONFIG.sameAs,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: business.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: business.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction & Architecture Services",
      itemListElement: business.servicesOffered.map((service, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
        position: i + 1,
      })),
    },
  };
}

/**
 * LocalBusiness schema variant for Google My Business enhanced results.
 */
export function localBusinessSchema() {
  const { business } = SITE_CONFIG;

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: business.telephone,
    email: business.email,
    image: SITE_CONFIG.ogImage,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    priceRange: "$$",
    paymentAccepted: ["Cash", "Bank Transfer", "Mobile Money"],
    areaServed: business.areaServed.join(", "),
    sameAs: SITE_CONFIG.sameAs,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: business.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: business.telephone,
        contactType: "sales",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: business.whatsapp,
        contactType: "customer service",
        availableLanguage: ["English"],
      },
    ],
  };
}

/**
 * WebSite schema with SearchAction (for Google Sitelinks Search Box).
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * BreadcrumbList schema for pages.
 */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Article schema for blog posts.
 */
export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  publisher?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image || SITE_CONFIG.ogImage,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: article.publisher || SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}

/**
 * FAQPage schema for FAQ sections.
 */
export function faqSchema(questions: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

/**
 * Service schema for a specific service.
 */
export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    image: service.image || SITE_CONFIG.ogImage,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: SITE_CONFIG.business.areaServed.join(", "),
  };
}

/**
 * Product/Project schema for project pages.
 */
export function projectSchema(project: {
  name: string;
  description: string;
  url: string;
  image?: string;
  location?: string;
  status?: string;
  dateCompleted?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": project.status === "Completed" ? "LandmarksOrHistoricalBuildings" : "Construction",
    name: project.name,
    description: project.description,
    url: project.url,
    image: project.image || SITE_CONFIG.ogImage,
    ...(project.location && {
      location: {
        "@type": "Place",
        name: project.location,
      },
    }),
    ...(project.status && { status: project.status }),
    ...(project.dateCompleted && { dateCreated: project.dateCompleted }),
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };
}

/**
 * Review schema for testimonials (Google Seller Ratings / Rich Results).
 * Uses client quotes from the testimonials section.
 */
export function reviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Organization", name: SITE_CONFIG.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    itemReviewed: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      image: SITE_CONFIG.ogImage,
    },
    positiveNotes: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: { name: "Professionalism and attention to detail" },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: { name: "Quality workmanship and timely delivery" },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: { name: "Excellent communication throughout projects" },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: { name: "AI-powered innovative solutions" },
        },
      ],
    },
  };
}

/**
 * Generate all schemas combined into a single array for the root layout.
 */
export function generateRootSchemas() {
  return [
    organizationSchema(),
    localBusinessSchema(),
    websiteSchema(),
    breadcrumbSchema([
      { name: "Home", url: `${SITE_CONFIG.url}/` },
    ]),
    reviewSchema(),
  ];
}

/**
 * Render JSON-LD script tag as string for injection into layout/page.
 */
export function renderJsonLd(data: Record<string, unknown> | Record<string, unknown>[]): string {
  const json = JSON.stringify(data);
  return `<script type="application/ld+json">${json}</script>`;
}
