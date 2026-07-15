import { User } from "lucide-react";

type ArticleSection =
  | {
      type: "heading";
      id: string;
      text: string;
      level: 1 | 2 | 3 | 4 | 5 | 6;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "quote";
      content: string;
      author?: string;
    }
  | {
      type: "list";
      items: string[];
      ordered?: boolean;
    }
  | {
      type: "image";
      url: string;
      alt: string;
      caption?: string;
    }
  | {
      type: "callout";
      title?: string;
      text: string;
      style?: "info" | "success" | "warning" | "error";
    };

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  authorImage?: string;
  publishedDate: string;
  updatedDate?: string;
  estimatedReadingTime: number;
  featuredImage: string;
  tableOfContents: { id: string; text: string; level: number }[];
  sections: ArticleSection[];
  relatedArticles: string[];
  isFeatured: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  openGraph: {
    title: string;
    description: string;
    image?: string;
  };
}

export const CATEGORIES = [
  "All",
  "Architecture",
  "Construction",
  "Engineering",
  "Interior Design",
  "Sustainability",
  "AI",
  "Project Management",
  "Industry News",
  "Innovation",
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "ai-in-construction",
    title: "How AI is Transforming Construction Project Planning",
    excerpt:
      "Discover how artificial intelligence is revolutionizing how we plan and execute construction projects in East Africa and beyond.",
    category: "AI",
    tags: ["AI", "Construction", "Planning"],
    author: "Anand Chokis",
    authorRole: "Technical Director",
    authorImage: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20corporate%20headshot%20neutral%20background&image_size=square_hd",
    publishedDate: "2024-07-01",
    estimatedReadingTime: 6,
    featuredImage: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=construction%20site%20modern%20technology%20aerial%20view&image_size=landscape_16_9",
    tableOfContents: [
      { id: "introduction", text: "Introduction", level: 2 },
      { id: "planning", text: "AI in Project Planning", level: 2 },
      { id: "benefits", text: "Key Benefits", level: 2 },
      { id: "future", text: "The Future", level: 2 },
    ],
    sections: [
      { type: "heading", id: "introduction", text: "Introduction", level: 2 },
      {
        type: "paragraph",
        text: "The construction industry is undergoing a digital transformation, and artificial intelligence is at the forefront of this change. At TEI-HA, we've been exploring how AI can help us deliver better projects for our clients across East Africa.",
      },
      {
        type: "callout",
        style: "info",
        text: "AI doesn't replace our experts—it empowers them to make better decisions faster.",
      },
      {
        type: "heading",
        id: "planning",
        text: "AI in Project Planning",
        level: 2,
      },
      {
        type: "paragraph",
        text: "From optimizing site layouts to predicting potential delays, AI is helping us plan projects more efficiently than ever before. Our AI tools analyze historical data from similar projects to provide accurate estimates and identify potential risks.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Accurate cost estimation",
          "Optimized resource allocation",
          "Risk identification and mitigation",
          "Timeline optimization",
        ],
      },
      {
        type: "heading",
        id: "benefits",
        text: "Key Benefits",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The benefits of AI in construction are clear: faster project delivery, more accurate budgets, and better outcomes for our clients. But perhaps most importantly, AI helps us focus on what we do best—building great spaces for people.",
      },
      {
        type: "quote",
        content: "AI is not about replacing humans—it's about giving them superpowers.",
        author: "Anand Chokis",
      },
      {
        type: "heading",
        id: "future",
        text: "The Future",
        level: 2,
      },
      {
        type: "paragraph",
        text: "We're excited about the future of AI in construction. As our models get better and we collect more data from our projects, we'll be able to deliver even more value to our clients.",
      },
    ],
    relatedArticles: ["sustainable-construction", "building-cost-estimation"],
    isFeatured: true,
    seo: {
      title: "AI in Construction Project Planning | TEI-HA Blog",
      description:
        "How artificial intelligence is transforming construction project planning in East Africa and beyond.",
      keywords: ["AI in Construction", "Project Planning", "TEI-HA"],
    },
    openGraph: {
      title: "AI in Construction Project Planning",
      description:
        "How artificial intelligence is transforming construction project planning.",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=construction%20site%20modern%20technology%20aerial%20view&image_size=landscape_16_9",
    },
  },
  {
    slug: "sustainable-construction",
    title: "The Rise of Sustainable Construction in East Africa",
    excerpt:
      "Exploring how sustainable building practices are reshaping the construction industry in East Africa.",
    category: "Sustainability",
    tags: ["Sustainability", "Green Building", "Construction"],
    author: "Bayiga Daphine Ssambwa",
    authorRole: "Company Manager & Architect",
    authorImage: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20corporate%20headshot%20neutral%20background&image_size=square_hd",
    publishedDate: "2024-06-15",
    estimatedReadingTime: 5,
    featuredImage: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20green%20building%20solar%20panels&image_size=landscape_16_9",
    tableOfContents: [
      { id: "overview", text: "Overview", level: 2 },
      { id: "practices", text: "Key Sustainable Practices", level: 2 },
      { id: "benefits", text: "Why Go Sustainable?", level: 2 },
    ],
    sections: [
      { type: "heading", id: "overview", text: "Overview", level: 2 },
      {
        type: "paragraph",
        text: "Sustainability is no longer a niche consideration in construction—it's becoming the norm. In East Africa, we're seeing a growing demand for buildings that are environmentally responsible, energy efficient, and comfortable for their occupants.",
      },
      { type: "heading", id: "practices", text: "Key Sustainable Practices", level: 2 },
      {
        type: "list",
        ordered: false,
        items: [
          "Energy efficient design",
          "Water conservation measures",
          "Use of sustainable materials",
          "Waste reduction strategies",
        ],
      },
      { type: "heading", id: "benefits", text: "Why Go Sustainable?", level: 2 },
      {
        type: "paragraph",
        text: "Sustainable buildings are not just good for the planet—they're also good for business. They have lower operating costs, higher occupancy rates, and can command premium rents. Plus, they help us build a better future for the next generation.",
      },
    ],
    relatedArticles: ["ai-in-construction", "building-cost-estimation"],
    isFeatured: false,
    seo: {
      title: "Sustainable Construction in East Africa | TEI-HA Blog",
      description:
        "The rise of sustainable construction practices in East Africa and why it matters.",
      keywords: ["Sustainable Construction", "Green Building", "East Africa"],
    },
    openGraph: {
      title: "Sustainable Construction in East Africa",
      description: "Exploring sustainable building practices in East Africa.",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20green%20building%20solar%20panels&image_size=landscape_16_9",
    },
  },
  {
    slug: "building-cost-estimation",
    title: "5 Tips for Accurate Building Cost Estimation",
    excerpt:
      "Learn how to create more accurate construction cost estimates with these practical tips.",
    category: "Project Management",
    tags: ["Cost Estimation", "Construction", "Project Management"],
    author: "Bwanika Shafiiki",
    authorRole: "Managing Director & Civil Engineer",
    authorImage: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20corporate%20headshot%20neutral%20background&image_size=square_hd",
    publishedDate: "2024-06-01",
    estimatedReadingTime: 4,
    featuredImage: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=architectural%20blueprint%20cost%20calculation&image_size=landscape_16_9",
    tableOfContents: [
      { id: "importance", text: "Why Accuracy Matters", level: 2 },
      { id: "tips", text: "5 Tips", level: 2 },
      { id: "conclusion", text: "Conclusion", level: 2 },
    ],
    sections: [
      { type: "heading", id: "importance", text: "Why Accuracy Matters", level: 2 },
      {
        type: "paragraph",
        text: "Accurate cost estimation is the foundation of any successful construction project. It helps set realistic budgets, manage expectations, and avoid costly surprises down the line.",
      },
      { type: "heading", id: "tips", text: "5 Tips", level: 2 },
      {
        type: "list",
        ordered: true,
        items: [
          "Start with detailed project plans and specifications",
          "Use historical data from similar projects",
          "Account for local material costs and availability",
          "Include contingency funds for unexpected expenses",
          "Review and update estimates regularly",
        ],
      },
      {
        type: "callout",
        style: "success",
        title: "Pro Tip",
        text: "AI tools can help you analyze historical data to create more accurate estimates in a fraction of the time.",
      },
      { type: "heading", id: "conclusion", text: "Conclusion", level: 2 },
      {
        type: "paragraph",
        text: "By following these tips, you'll be able to create more accurate cost estimates, leading to better projects and happier clients.",
      },
    ],
    relatedArticles: ["ai-in-construction", "sustainable-construction"],
    isFeatured: false,
    seo: {
      title: "5 Tips for Accurate Building Cost Estimation | TEI-HA Blog",
      description:
        "Learn how to create more accurate construction cost estimates.",
      keywords: ["Cost Estimation", "Construction Tips", "Budgeting"],
    },
    openGraph: {
      title: "5 Tips for Accurate Building Cost Estimation",
      description: "Practical tips for better construction cost estimation.",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=architectural%20blueprint%20cost%20calculation&image_size=landscape_16_9",
    },
  },
];

export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}

export function getFeaturedBlogArticle(): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.isFeatured);
}

export function getRelatedArticles(slug: string, limit: number = 3): BlogArticle[] {
  const currentArticle = getBlogArticleBySlug(slug);
  if (!currentArticle) return [];
  return currentArticle.relatedArticles
    .map((s) => getBlogArticleBySlug(s))
    .filter((a): a is BlogArticle => a !== undefined)
    .slice(0, limit);
}
