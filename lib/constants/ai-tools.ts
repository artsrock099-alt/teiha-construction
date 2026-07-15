import {
  Calculator,
  LayoutTemplate,
  Warehouse,
  Leaf,
  Sparkles,
  CalendarCheck,
  MapPin,
  Maximize,
} from "lucide-react";

export type Status = "Available" | "Beta" | "Coming Soon";

export interface AITool {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  detailedDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  heroIllustration: string;
  supportedUseCases: string[];
  keyBenefits: string[];
  workflowSteps: {
    title: string;
    description: string;
  }[];
  exampleInputs: string[];
  exampleOutputs: string[];
  industries: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  status: Status;
  relatedTools: string[];
}

export const AI_TOOLS: AITool[] = [
  {
    slug: "building-cost-estimator",
    title: "AI Building Cost Estimator",
    category: "Planning & Costing",
    shortDescription: "Get accurate, AI-powered cost estimates in minutes instead of weeks.",
    detailedDescription:
      "Our AI Building Cost Estimator uses machine learning to analyze thousands of similar projects and provide accurate cost breakdowns tailored to your location, materials, and design requirements.",
    icon: Calculator,
    heroIllustration:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=architectural%20cost%20calculator%20interface%20modern%20minimal&image_size=landscape_16_9",
    supportedUseCases: [
      "Preliminary budgeting",
      "Material cost forecasting",
      "Labor cost estimation",
      "Value engineering",
      "Comparative analysis",
    ],
    keyBenefits: [
      "Faster decision-making",
      "More accurate budgets",
      "Reduced bid uncertainty",
      "Transparent cost breakdowns",
    ],
    workflowSteps: [
      {
        title: "Input Project Details",
        description: "Provide location, building type, size, and requirements.",
      },
      {
        title: "AI Analysis",
        description: "Our models analyze thousands of comparable projects.",
      },
      {
        title: "Get Detailed Estimate",
        description: "Receive a comprehensive cost breakdown in minutes.",
      },
      {
        title: "Expert Review",
        description: "Our team validates and refines the estimate.",
      },
    ],
    exampleInputs: [
      "Commercial office building, 5,000 sqm, Kampala, Uganda",
      "Residential home, 300 sqm, Entebbe, Uganda",
      "Healthcare clinic, 2,000 sqm, Nairobi, Kenya",
    ],
    exampleOutputs: [
      "Total estimated cost: $2,500,000 (±10%)",
      "Material breakdown: 55% materials, 30% labor, 15% other",
      "Suggested cost-saving recommendations",
      "Timeline estimate: 18 months",
    ],
    industries: ["Residential", "Commercial", "Healthcare", "Education"],
    faq: [
      {
        question: "How accurate are the cost estimates?",
        answer:
          "Our AI estimates are typically within ±10% accuracy for projects in regions we have data for. All estimates are reviewed by our expert team before being finalized.",
      },
      {
        question: "What data does the AI use?",
        answer:
          "We use anonymized historical project data from thousands of completed construction projects across East Africa.",
      },
    ],
    seo: {
      title: "AI Building Cost Estimator | TEI-HA AI Studio",
      description:
        "Get fast, accurate construction cost estimates using artificial intelligence. Preliminary budgeting, material forecasting, and value engineering.",
      keywords: [
        "construction cost estimator",
        "building cost calculator",
        "AI budgeting",
        "Uganda construction costs",
      ],
    },
    status: "Available",
    relatedTools: ["construction-planning-assistant", "material-advisor"],
  },
  {
    slug: "floor-plan-generator",
    title: "AI Floor Plan Generator",
    category: "Design",
    shortDescription: "Generate multiple floor plan concepts in seconds with AI.",
    detailedDescription:
      "Explore dozens of floor plan variations based on your requirements, from residential homes to commercial spaces.",
    icon: LayoutTemplate,
    heroIllustration:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=architectural%20floor%20plan%20design%20minimal&image_size=landscape_16_9",
    supportedUseCases: [
      "Concept exploration",
      "Space optimization",
      "Client presentations",
      "Design iteration",
    ],
    keyBenefits: [
      "Explore 50+ concepts quickly",
      "Optimize space utilization",
      "Test different layouts",
      "Inspire creative solutions",
    ],
    workflowSteps: [
      {
        title: "Define Requirements",
        description: "Rooms, sizes, adjacencies, and constraints.",
      },
      {
        title: "Generate Concepts",
        description: "AI creates multiple floor plan options.",
      },
      {
        title: "Refine & Iterate",
        description: "Select and refine the best concepts.",
      },
    ],
    exampleInputs: [
      "4-bedroom home, open plan kitchen, home office",
      "Small office with 8 workstations, meeting room, break area",
      "Clinic with 5 consulting rooms, waiting area, pharmacy",
    ],
    exampleOutputs: [
      "Multiple floor plan variations as 2D diagrams",
      "Area breakdowns per room",
      "Suggested furniture layouts",
      "Flow and circulation analysis",
    ],
    industries: ["Residential", "Commercial", "Healthcare"],
    faq: [
      {
        question: "Can I customize the floor plans?",
        answer:
          "Yes! The AI generates concepts which our architects then refine and customize based on your specific needs.",
      },
    ],
    seo: {
      title: "AI Floor Plan Generator | TEI-HA AI Studio",
      description:
        "Generate multiple floor plan concepts in seconds with AI. Explore designs for homes, offices, clinics, and more.",
      keywords: ["floor plan generator", "AI architecture", "space planning"],
    },
    status: "Beta",
    relatedTools: ["design-inspiration", "space-optimization"],
  },
  {
    slug: "material-advisor",
    title: "AI Material Advisor",
    category: "Materials & Sustainability",
    shortDescription: "Get AI-powered recommendations for sustainable, cost-effective materials.",
    detailedDescription:
      "Our AI Material Advisor analyzes your project requirements and recommends materials that balance cost, sustainability, durability, and aesthetics.",
    icon: Warehouse,
    heroIllustration:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=sustainable%20building%20materials%20modern%20minimal&image_size=landscape_16_9",
    supportedUseCases: [
      "Material selection",
      "Sustainability analysis",
      "Value engineering",
      "Lifecycle cost comparison",
    ],
    keyBenefits: [
      "More sustainable choices",
      "Cost-effective solutions",
      "Local material prioritization",
      "Lifecycle cost analysis",
    ],
    workflowSteps: [
      {
        title: "Define Material Needs",
        description: "Structure, finishes, budget, preferences.",
      },
      {
        title: "AI Recommendations",
        description: "Analyze options based on your criteria.",
      },
      {
        title: "Expert Review",
        description: "Our team validates and selects the best materials.",
      },
    ],
    exampleInputs: [
      "Exterior cladding, budget $50k, Kampala climate",
      "Flooring for healthcare clinic, low maintenance, antimicrobial",
      "Roofing material, high thermal resistance, 20-year lifespan",
    ],
    exampleOutputs: [
      "Top 3 material recommendations with pros and cons",
      "Cost comparison across options",
      "Environmental impact analysis",
      "Local supplier information",
    ],
    industries: ["Residential", "Commercial", "Industrial", "Healthcare"],
    faq: [
      {
        question: "Does the AI prioritize local materials?",
        answer:
          "Yes! Our Material Advisor prioritizes locally available materials to reduce costs and environmental impact.",
      },
    ],
    seo: {
      title: "AI Material Advisor | TEI-HA AI Studio",
      description:
        "Get AI-powered recommendations for sustainable, cost-effective building materials for your project.",
      keywords: [
        "building materials advisor",
        "sustainable materials",
        "construction materials Uganda",
      ],
    },
    status: "Coming Soon",
    relatedTools: ["sustainability-analyzer", "building-cost-estimator"],
  },
  {
    slug: "sustainability-analyzer",
    title: "AI Sustainability Analyzer",
    category: "Sustainability",
    shortDescription: "Optimize your building's environmental performance.",
    detailedDescription:
      "Analyze energy efficiency, water usage, carbon footprint, and sustainability metrics using AI-powered simulations.",
    icon: Leaf,
    heroIllustration:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=sustainability%20building%20analysis%20green%20minimal&image_size=landscape_16_9",
    supportedUseCases: [
      "Energy performance simulation",
      "Carbon footprint calculation",
      "Water efficiency analysis",
      "Green building certification support",
    ],
    keyBenefits: [
      "Reduce energy consumption",
      "Lower operational costs",
      "Meet sustainability targets",
      "Support green building certifications",
    ],
    workflowSteps: [
      {
        title: "Model Your Building",
        description: "Input design and location data.",
      },
      {
        title: "AI Simulation",
        description: "Run energy, water, and carbon simulations.",
      },
      {
        title: "Get Recommendations",
        description: "Receive actionable sustainability improvements.",
      },
    ],
    exampleInputs: [
      "Commercial building, 10,000 sqm, Kampala, glass facade",
      "Residential home, 350 sqm, solar potential",
      "School building, 5,000 sqm, natural ventilation priority",
    ],
    exampleOutputs: [
      "Annual energy consumption estimate",
      "Carbon footprint report",
      "Solar panel feasibility analysis",
      "Green building certification recommendations",
    ],
    industries: ["Residential", "Commercial", "Education"],
    faq: [
      {
        question: "Can the AI help with green building certifications?",
        answer:
          "Yes! Our analyzer provides recommendations aligned with leading green building standards.",
      },
    ],
    seo: {
      title: "AI Sustainability Analyzer | TEI-HA AI Studio",
      description:
        "Optimize your building's energy efficiency, water usage, and carbon footprint with AI-powered sustainability analysis.",
      keywords: ["sustainability analyzer", "green building", "energy efficiency"],
    },
    status: "Coming Soon",
    relatedTools: ["material-advisor", "site-analysis"],
  },
  {
    slug: "design-inspiration",
    title: "AI Design Inspiration",
    category: "Design",
    shortDescription: "Discover architectural design references tailored to your project.",
    detailedDescription:
      "Find inspiration from thousands of curated projects, filtered by style, location, building type, and more.",
    icon: Sparkles,
    heroIllustration:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=architectural%20design%20inspiration%20moodboard%20minimal&image_size=landscape_16_9",
    supportedUseCases: [
      "Style exploration",
      "Reference collection",
      "Client presentations",
      "Trend research",
    ],
    keyBenefits: [
      "Curated project references",
      "Tailored to your requirements",
      "Save time on research",
      "Discover new possibilities",
    ],
    workflowSteps: [
      {
        title: "Describe Your Project",
        description: "Style, type, location, and preferences.",
      },
      {
        title: "AI Curates References",
        description: "Find matching projects from our database.",
      },
      {
        title: "Explore & Save",
        description: "Save your favorite references.",
      },
    ],
    exampleInputs: [
      "Modern minimal home, tropical climate, Kampala",
      "Contemporary commercial building, mixed-use",
      "Biophilic hospital design, healthcare",
    ],
    exampleOutputs: [
      "Curated gallery of 20+ reference projects",
      "Key design elements from each reference",
      "Mood board with color and material palettes",
      "Design principles to apply",
    ],
    industries: ["Residential", "Commercial", "Hospitality"],
    faq: [
      {
        question: "Where do the design references come from?",
        answer:
          "Our database includes projects from TEI-HA and other leading firms, curated by our architects.",
      },
    ],
    seo: {
      title: "AI Design Inspiration | TEI-HA AI Studio",
      description:
        "Discover architectural design inspiration tailored to your project. Curated references, mood boards, and more.",
      keywords: ["design inspiration", "architecture references", "mood boards"],
    },
    status: "Coming Soon",
    relatedTools: ["floor-plan-generator", "space-optimization"],
  },
  {
    slug: "construction-planning-assistant",
    title: "AI Construction Planning Assistant",
    category: "Planning & Management",
    shortDescription: "Optimize construction schedules, resource allocation, and timelines.",
    detailedDescription:
      "Create realistic construction schedules, identify potential bottlenecks, and optimize resource allocation with AI.",
    icon: CalendarCheck,
    heroIllustration:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=construction%20schedule%20gantt%20chart%20minimal&image_size=landscape_16_9",
    supportedUseCases: [
      "Schedule optimization",
      "Resource planning",
      "Risk identification",
      "Timeline forecasting",
    ],
    keyBenefits: [
      "Faster project delivery",
      "Better resource allocation",
      "Reduced delays",
      "Proactive risk management",
    ],
    workflowSteps: [
      {
        title: "Define Project Scope",
        description: "Tasks, milestones, and constraints.",
      },
      {
        title: "AI Planning",
        description: "Generate optimized schedules and resource plans.",
      },
      {
        title: "Refine & Implement",
        description: "Work with our team to finalize the plan.",
      },
    ],
    exampleInputs: [
      "Office building construction, 18 months, Kampala",
      "Home renovation, 4 months, Entebbe",
      "School project, 12 months, rural Uganda",
    ],
    exampleOutputs: [
      "Optimized Gantt chart",
      "Resource allocation plan",
      "Critical path analysis",
      "Risk register with mitigation strategies",
    ],
    industries: ["Residential", "Commercial", "Education", "Government"],
    faq: [
      {
        question: "Can the AI account for local construction conditions?",
        answer:
          "Yes! Our models are trained on East African construction data, including weather patterns, supply chain, and local labor availability.",
      },
    ],
    seo: {
      title: "AI Construction Planning Assistant | TEI-HA AI Studio",
      description:
        "Optimize construction schedules, resource allocation, and timelines with artificial intelligence.",
      keywords: [
        "construction planning",
        "AI scheduling",
        "project management",
      ],
    },
    status: "Beta",
    relatedTools: ["building-cost-estimator", "site-analysis"],
  },
  {
    slug: "site-analysis",
    title: "AI Site Analysis",
    category: "Planning & Analysis",
    shortDescription: "AI-powered site analysis for better design decisions.",
    detailedDescription:
      "Analyze site conditions including topography, solar access, wind patterns, views, and regulatory constraints.",
    icon: MapPin,
    heroIllustration:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=site%20analysis%20map%20topography%20architectural&image_size=landscape_16_9",
    supportedUseCases: [
      "Site feasibility",
      "Solar access analysis",
      "Topography evaluation",
      "View analysis",
    ],
    keyBenefits: [
      "Better site utilization",
      "Optimize building orientation",
      "Identify opportunities and constraints",
      "Data-driven design decisions",
    ],
    workflowSteps: [
      {
        title: "Upload Site Data",
        description: "Location, surveys, maps, and constraints.",
      },
      {
        title: "AI Analysis",
        description: "Analyze topography, solar, wind, and more.",
      },
      {
        title: "Design Recommendations",
        description: "Get insights for optimal building placement.",
      },
    ],
    exampleInputs: [
      "1-acre plot, Entebbe, lake view, slope 10 degrees",
      "2-hectare site, Kampala, mixed-use development",
      "Rural site, Northern Uganda, school project",
    ],
    exampleOutputs: [
      "Site analysis report with maps and diagrams",
      "Optimal building orientation",
      "Solar potential analysis",
      "Design recommendations based on site conditions",
    ],
    industries: ["Residential", "Commercial", "Education", "Industrial"],
    faq: [
      {
        question: "Do I need a survey to use this tool?",
        answer:
          "While a detailed survey provides better results, we can start with publicly available data and refine as more information becomes available.",
      },
    ],
    seo: {
      title: "AI Site Analysis | TEI-HA AI Studio",
      description:
        "AI-powered site analysis for better design decisions. Topography, solar access, wind, views, and constraints.",
      keywords: ["site analysis", "site planning", "architectural analysis"],
    },
    status: "Coming Soon",
    relatedTools: ["sustainability-analyzer", "construction-planning-assistant"],
  },
  {
    slug: "space-optimization",
    title: "AI Space Optimization",
    category: "Design",
    shortDescription: "Maximize the efficiency and usability of your space.",
    detailedDescription:
      "AI-powered space optimization to maximize functionality, flow, and usability of any space.",
    icon: Maximize,
    heroIllustration:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=space%20optimization%20floor%20plan%20minimal&image_size=landscape_16_9",
    supportedUseCases: [
      "Office layout planning",
      "Residential space optimization",
      "Retail space planning",
      "Circulation flow analysis",
    ],
    keyBenefits: [
      "More efficient space utilization",
      "Better circulation and flow",
      "Improved user experience",
      "Maximize usable area",
    ],
    workflowSteps: [
      {
        title: "Define Space Requirements",
        description: "Rooms, functions, adjacencies.",
      },
      {
        title: "AI Optimization",
        description: "Analyze thousands of layout possibilities.",
      },
      {
        title: "Recommendations",
        description: "Present optimized layouts with pros and cons.",
      },
    ],
    exampleInputs: [
      "100-person office, open plan vs private offices",
      "Small retail space, 100 sqm, café",
      "Clinic waiting area, 50-person capacity",
    ],
    exampleOutputs: [
      "Top 3 optimized layout options",
      "Space utilization metrics",
      "Circulation flow diagrams",
      "Furniture layout suggestions",
    ],
    industries: ["Commercial", "Residential", "Healthcare", "Hospitality"],
    faq: [
      {
        question: "Can the AI optimize for accessibility?",
        answer:
          "Absolutely! Accessibility compliance is built into our optimization logic, including wheelchair access, door widths, and circulation paths.",
      },
    ],
    seo: {
      title: "AI Space Optimization | TEI-HA AI Studio",
      description:
        "Maximize efficiency and usability of your space with AI-powered layout optimization.",
      keywords: ["space planning", "office layout", "space optimization"],
    },
    status: "Coming Soon",
    relatedTools: ["floor-plan-generator", "design-inspiration"],
  },
];

export function getAIToolBySlug(slug: string): AITool | undefined {
  return AI_TOOLS.find((tool) => tool.slug === slug);
}
