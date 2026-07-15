import {
  Building2,
  Hammer,
  Compass,
  Layout,
  Paintbrush,
  RefreshCw,
  Briefcase,
  Zap,
  Leaf,
  Eye,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  imagePlaceholder: string;
  benefits: string[];
  industries: string[];
  process: {
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  aiEnhancement: {
    title: string;
    description: string;
  }[];
  relatedServices: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const SERVICES: Service[] = [
  {
    slug: "architecture",
    title: "Architectural Design",
    shortDescription: "Innovative, AI-powered architectural solutions tailored to your vision and site.",
    heroDescription: "Transform your ideas into stunning, functional architectural designs that blend innovation, sustainability, and timeless aesthetics.",
    icon: Building2,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20architectural%20design%20rendering%20minimalist%20premium&image_size=landscape_16_9",
    benefits: [
      "AI-driven concept generation and optimization",
      "Site-specific design solutions",
      "Sustainable and energy-efficient designs",
      "Regulatory compliance expertise",
      "3D visualization and virtual tours"
    ],
    industries: ["Residential", "Commercial", "Healthcare", "Education", "Hospitality"],
    process: [
      {
        title: "Consultation",
        description: "Understanding your vision, budget, and requirements"
      },
      {
        title: "Site Analysis",
        description: "Evaluating site conditions, regulations, and opportunities"
      },
      {
        title: "Concept Design",
        description: "Developing initial design concepts with AI assistance"
      },
      {
        title: "Design Development",
        description: "Refining designs with detailed drawings and specifications"
      },
      {
        title: "Construction Documentation",
        description: "Preparing comprehensive documents for construction"
      }
    ],
    faq: [
      {
        question: "How long does the architectural design process take?",
        answer: "Timelines vary by project complexity, typically 8-16 weeks from concept to construction documentation."
      },
      {
        question: "Do you handle permit applications?",
        answer: "Yes, we can assist with permit documentation and coordination with local authorities."
      }
    ],
    aiEnhancement: [
      {
        title: "AI Concept Generation",
        description: "Rapidly explore multiple design options using generative AI"
      },
      {
        title: "Performance Simulation",
        description: "Optimize for energy efficiency, daylight, and acoustics using AI-powered simulations"
      },
      {
        title: "3D Visualization",
        description: "Create immersive 3D models and virtual tours with AI assistance"
      }
    ],
    relatedServices: ["interior-design", "construction", "project-management"],
    seo: {
      title: "Architectural Design Services | TEI-HA Construction Uganda",
      description: "Premium architectural design services in Uganda. AI-powered, sustainable designs for residential, commercial, and institutional projects.",
      keywords: ["Architectural Design Uganda", "Architecture Firm Africa", "Modern Architecture Uganda", "Sustainable Architecture"]
    }
  },
  {
    slug: "construction",
    title: "Construction Services",
    shortDescription: "End-to-end construction delivery with international quality standards.",
    heroDescription: "Expert construction services that bring your architectural designs to life with precision, quality, and efficiency.",
    icon: Hammer,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20construction%20site%20modern%20building%20premium&image_size=landscape_16_9",
    benefits: [
      "Experienced construction team",
      "International quality standards",
      "Transparent pricing and timelines",
      "On-site project management",
      "Quality assurance at every stage"
    ],
    industries: ["Residential", "Commercial", "Healthcare", "Education", "Industrial"],
    process: [
      {
        title: "Pre-construction",
        description: "Mobilization, site preparation, and logistics planning"
      },
      {
        title: "Foundation",
        description: "Structural foundation and site work"
      },
      {
        title: "Superstructure",
        description: "Building structure and envelope"
      },
      {
        title: "MEP & Finishes",
        description: "Mechanical, electrical, plumbing, and interior finishes"
      },
      {
        title: "Final Inspection",
        description: "Quality checks and handover"
      }
    ],
    faq: [
      {
        question: "What is your approach to project pricing?",
        answer: "We provide transparent, detailed cost estimates with clear breakdowns of materials, labor, and contingencies."
      },
      {
        question: "Do you work with existing designs?",
        answer: "Yes, we can construct from existing architectural plans or work with your chosen architect."
      }
    ],
    aiEnhancement: [
      {
        title: "AI Project Planning",
        description: "Optimize construction schedules and resource allocation"
      },
      {
        title: "Progress Monitoring",
        description: "AI-powered site monitoring and progress tracking"
      },
      {
        title: "Quality Control",
        description: "Computer vision-assisted quality inspections"
      }
    ],
    relatedServices: ["architecture", "civil-engineering", "project-management"],
    seo: {
      title: "Construction Services | TEI-HA Construction Uganda",
      description: "Professional construction services in Uganda. Residential, commercial, and industrial projects with international standards.",
      keywords: ["Construction Company Uganda", "Building Contractors Uganda", "Commercial Construction Uganda"]
    }
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    shortDescription: "Comprehensive civil engineering solutions for infrastructure projects.",
    heroDescription: "Expert civil engineering services that ensure your projects are safe, efficient, and built to last.",
    icon: Compass,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=civil%20engineering%20infrastructure%20project%20professional&image_size=landscape_16_9",
    benefits: [
      "Licensed professional engineers",
      "Advanced design software",
      "Structural analysis and optimization",
      "Infrastructure expertise",
      "Compliance with international codes"
    ],
    industries: ["Infrastructure", "Commercial", "Industrial", "Government"],
    process: [
      {
        title: "Feasibility Study",
        description: "Assessing project viability and constraints"
      },
      {
        title: "Design & Analysis",
        description: "Structural design and engineering analysis"
      },
      {
        title: "Documentation",
        description: "Preparing engineering drawings and specifications"
      },
      {
        title: "Construction Support",
        description: "On-site engineering support during construction"
      },
      {
        title: "Testing & Commissioning",
        description: "Final testing and project handover"
      }
    ],
    faq: [
      {
        question: "What types of civil engineering projects do you handle?",
        answer: "We handle a wide range including structural, geotechnical, transportation, and water resources engineering projects."
      }
    ],
    aiEnhancement: [
      {
        title: "AI Simulations",
        description: "Advanced structural and geotechnical simulations"
      },
      {
        title: "Design Optimization",
        description: "AI-assisted structural optimization for cost and performance"
      }
    ],
    relatedServices: ["structural-engineering", "construction", "project-management"],
    seo: {
      title: "Civil Engineering Services | TEI-HA Construction Uganda",
      description: "Professional civil engineering services in Uganda. Structural, geotechnical, and infrastructure engineering expertise.",
      keywords: ["Civil Engineering Uganda", "Structural Engineering Uganda", "Infrastructure Engineering"]
    }
  },
  {
    slug: "structural-engineering",
    title: "Structural Engineering",
    shortDescription: "Specialized structural engineering for safe and efficient buildings.",
    heroDescription: "Precision structural engineering services that ensure your buildings are safe, durable, and optimized for performance.",
    icon: Layout,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=structural%20engineering%20design%20blueprint%20professional&image_size=landscape_16_9",
    benefits: [
      "Structural analysis and design",
      "Seismic and wind engineering",
      "Foundation design",
      "Retrofit and renovation engineering",
      "Construction phase support"
    ],
    industries: ["Residential", "Commercial", "Healthcare", "Education", "Industrial"],
    process: [
      {
        title: "Structural Assessment",
        description: "Evaluating structural requirements and constraints"
      },
      {
        title: "Design Development",
        description: "Creating structural designs and calculations"
      },
      {
        title: "Documentation",
        description: "Preparing structural drawings and specifications"
      },
      {
        title: "Construction Review",
        description: "Reviewing shop drawings and construction methods"
      },
      {
        title: "Final Sign-off",
        description: "Structural certification and project completion"
      }
    ],
    faq: [
      {
        question: "Do you provide structural assessments for existing buildings?",
        answer: "Yes, we offer structural assessments, inspections, and retrofit recommendations for existing structures."
      }
    ],
    aiEnhancement: [
      {
        title: "AI Structural Optimization",
        description: "Optimize structural designs for material efficiency and performance"
      }
    ],
    relatedServices: ["civil-engineering", "construction", "renovation"],
    seo: {
      title: "Structural Engineering | TEI-HA Construction Uganda",
      description: "Specialized structural engineering services in Uganda. Safe, efficient designs for all building types.",
      keywords: ["Structural Engineering Uganda", "Building Structure Design", "Seismic Engineering"]
    }
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    shortDescription: "Elegant, functional interior designs that enhance your space.",
    heroDescription: "Transform your interiors into beautiful, functional spaces that reflect your style and support your lifestyle.",
    icon: Paintbrush,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20interior%20design%20luxury%20minimalist&image_size=landscape_16_9",
    benefits: [
      "Space planning and optimization",
      "Material and finish selection",
      "Furniture and lighting design",
      "AI-powered visualization",
      "Coordination with construction team"
    ],
    industries: ["Residential", "Commercial", "Hospitality", "Healthcare"],
    process: [
      {
        title: "Concept Development",
        description: "Exploring design concepts and mood boards"
      },
      {
        title: "Space Planning",
        description: "Optimizing layout and functionality"
      },
      {
        title: "Design Development",
        description: "Detailed design, materials, and specifications"
      },
      {
        title: "Implementation",
        description: "Overseeing installation and finishing"
      },
      {
        title: "Final Styling",
        description: "Adding finishing touches and styling"
      }
    ],
    faq: [
      {
        question: "Can you work with my existing furniture?",
        answer: "Yes, we can incorporate your existing pieces into the design or create a cohesive plan that blends old and new."
      }
    ],
    aiEnhancement: [
      {
        title: "AI Visualization",
        description: "Photorealistic 3D renderings of your interior design"
      },
      {
        title: "Material Selection",
        description: "AI-assisted material and finish recommendations"
      }
    ],
    relatedServices: ["architecture", "renovation", "smart-building-consulting"],
    seo: {
      title: "Interior Design Services | TEI-HA Construction Uganda",
      description: "Professional interior design in Uganda. Residential, commercial, and hospitality interior design services.",
      keywords: ["Interior Design Uganda", "Interior Decorators Uganda", "Commercial Interior Design"]
    }
  },
  {
    slug: "renovation",
    title: "Renovation",
    shortDescription: "Transform existing spaces with modern, sustainable renovations.",
    heroDescription: "Expert renovation services that breathe new life into your existing spaces while preserving what matters.",
    icon: RefreshCw,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=home%20renovation%20modern%20before%20after%20premium&image_size=landscape_16_9",
    benefits: [
      "Full-scale renovations",
      "Kitchen and bathroom remodeling",
      "Space reconfiguration",
      "Energy efficiency upgrades",
      "Preservation of historic elements"
    ],
    industries: ["Residential", "Commercial", "Hospitality", "Education"],
    process: [
      {
        title: "Assessment",
        description: "Evaluating existing conditions and requirements"
      },
      {
        title: "Design",
        description: "Creating renovation plans and concepts"
      },
      {
        title: "Demolition & Prep",
        description: "Careful demolition and site preparation"
      },
      {
        title: "Construction",
        description: "Executing renovation works"
      },
      {
        title: "Finishes",
        description: "Final touches and completion"
      }
    ],
    faq: [
      {
        question: "Can you work around our existing operations?",
        answer: "Yes, we plan renovations to minimize disruption, with phased approaches for occupied spaces."
      }
    ],
    aiEnhancement: [
      {
        title: "AI Planning",
        description: "Optimize renovation phasing and minimize disruption"
      }
    ],
    relatedServices: ["interior-design", "architecture", "construction"],
    seo: {
      title: "Renovation Services | TEI-HA Construction Uganda",
      description: "Professional home and office renovation in Uganda. Kitchen, bathroom, and full property renovations.",
      keywords: ["Renovation Uganda", "Home Remodeling Uganda", "Office Renovation Uganda"]
    }
  },
  {
    slug: "project-management",
    title: "Project Management",
    shortDescription: "Expert project management to ensure successful delivery.",
    heroDescription: "Comprehensive project management services that keep your project on time, on budget, and to the highest standards.",
    icon: Briefcase,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=project%20management%20construction%20professional%20meeting&image_size=landscape_16_9",
    benefits: [
      "Budget management and tracking",
      "Schedule planning and control",
      "Quality management",
      "Stakeholder coordination",
      "Risk management"
    ],
    industries: ["Residential", "Commercial", "Healthcare", "Education", "Industrial", "Government"],
    process: [
      {
        title: "Initiation",
        description: "Project planning and goal setting"
      },
      {
        title: "Planning",
        description: "Detailed scheduling and budgeting"
      },
      {
        title: "Execution",
        description: "Overseeing project delivery"
      },
      {
        title: "Monitoring",
        description: "Tracking progress and performance"
      },
      {
        title: "Closure",
        description: "Project handover and lessons learned"
      }
    ],
    faq: [
      {
        question: "When should we involve project management?",
        answer: "Ideally from the very beginning of the project to ensure proper planning and avoid costly changes later."
      }
    ],
    aiEnhancement: [
      {
        title: "AI Scheduling",
        description: "Optimize project timelines and resource allocation"
      },
      {
        title: "Predictive Analytics",
        description: "Identify potential issues before they become problems"
      }
    ],
    relatedServices: ["construction", "architecture", "civil-engineering"],
    seo: {
      title: "Construction Project Management | TEI-HA Uganda",
      description: "Professional construction project management in Uganda. Keep your project on time, on budget, and to quality standards.",
      keywords: ["Project Management Uganda", "Construction Management Uganda"]
    }
  },
  {
    slug: "smart-building-consulting",
    title: "Smart Building Consulting",
    shortDescription: "Intelligent building solutions for the future.",
    heroDescription: "Transform your buildings into intelligent, efficient, and sustainable smart buildings of the future.",
    icon: Zap,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=smart%20building%20technology%20home%20automation%20modern&image_size=landscape_16_9",
    benefits: [
      "Smart home/building automation",
      "IoT integration",
      "Energy management systems",
      "Security and access control",
      "Future-proof designs"
    ],
    industries: ["Residential", "Commercial", "Healthcare", "Hospitality", "Industrial"],
    process: [
      {
        title: "Assessment",
        description: "Understanding your smart technology needs"
      },
      {
        title: "Design",
        description: "Designing smart building systems"
      },
      {
        title: "Specification",
        description: "Selecting and specifying products"
      },
      {
        title: "Implementation",
        description: "Overseeing installation and integration"
      },
      {
        title: "Commissioning",
        description: "Testing and user training"
      }
    ],
    faq: [
      {
        question: "Can smart systems be added to existing buildings?",
        answer: "Yes, many smart technologies can be retrofitted into existing buildings with minimal disruption."
      }
    ],
    aiEnhancement: [
      {
        title: "AI Optimization",
        description: "Continuous learning and optimization of building systems"
      }
    ],
    relatedServices: ["architecture", "interior-design", "sustainable-design"],
    seo: {
      title: "Smart Building Consulting | TEI-HA Uganda",
      description: "Smart building and home automation consulting in Uganda. IoT integration and intelligent building solutions.",
      keywords: ["Smart Building Uganda", "Home Automation Uganda", "IoT Integration Uganda"]
    }
  },
  {
    slug: "sustainable-design",
    title: "Sustainable Design",
    shortDescription: "Eco-friendly, sustainable design solutions.",
    heroDescription: "Sustainable design solutions that minimize environmental impact while maximizing comfort and efficiency.",
    icon: Leaf,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=sustainable%20green%20building%20eco%20friendly%20design&image_size=landscape_16_9",
    benefits: [
      "Energy-efficient designs",
      "Sustainable material selection",
      "Water conservation strategies",
      "Renewable energy integration",
      "Green building certification guidance"
    ],
    industries: ["Residential", "Commercial", "Healthcare", "Education", "Industrial"],
    process: [
      {
        title: "Sustainability Audit",
        description: "Assessing current and potential sustainability"
      },
      {
        title: "Strategy",
        description: "Developing sustainability goals and strategies"
      },
      {
        title: "Design Integration",
        description: "Incorporating sustainable features into design"
      },
      {
        title: "Implementation",
        description: "Overseeing sustainable construction practices"
      },
      {
        title: "Verification",
        description: "Testing and verifying performance"
      }
    ],
    faq: [
      {
        question: "Do sustainable designs cost more?",
        answer: "While some sustainable features may have higher upfront costs, they typically result in significant long-term savings through reduced energy and water usage."
      }
    ],
    aiEnhancement: [
      {
        title: "Energy Simulation",
        description: "AI-powered energy performance simulation and optimization"
      }
    ],
    relatedServices: ["architecture", "smart-building-consulting", "construction"],
    seo: {
      title: "Sustainable Design | TEI-HA Construction Uganda",
      description: "Sustainable and green building design in Uganda. Eco-friendly, energy-efficient architectural solutions.",
      keywords: ["Sustainable Design Uganda", "Green Building Uganda", "Eco Architecture"]
    }
  },
  {
    slug: "construction-supervision",
    title: "Construction Supervision",
    shortDescription: "Expert supervision to ensure quality and compliance.",
    heroDescription: "Professional construction supervision services to ensure your project is built to specifications, standards, and timelines.",
    icon: Eye,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=construction%20supervision%20site%20inspection%20professional&image_size=landscape_16_9",
    benefits: [
      "Quality control and inspections",
      "Progress monitoring",
      "Compliance with plans and specs",
      "Safety supervision",
      "Documentation and reporting"
    ],
    industries: ["Residential", "Commercial", "Healthcare", "Education", "Industrial"],
    process: [
      {
        title: "Pre-construction",
        description: "Reviewing plans and preparations"
      },
      {
        title: "Foundation",
        description: "Supervising foundation works"
      },
      {
        title: "Superstructure",
        description: "Overseeing structural construction"
      },
      {
        title: "MEP & Finishes",
        description: "Supervising installations and finishes"
      },
      {
        title: "Final Inspection",
        description: "Final quality checks and handover"
      }
    ],
    faq: [
      {
        question: "Can you supervise a project built by another contractor?",
        answer: "Yes, we offer independent construction supervision services for projects with other contractors."
      }
    ],
    aiEnhancement: [
      {
        title: "AI Monitoring",
        description: "Computer vision and drone-based site monitoring"
      }
    ],
    relatedServices: ["project-management", "construction", "civil-engineering"],
    seo: {
      title: "Construction Supervision | TEI-HA Uganda",
      description: "Professional construction supervision in Uganda. Quality control and project monitoring services.",
      keywords: ["Construction Supervision Uganda", "Site Supervision Uganda", "Quality Control Construction"]
    }
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
