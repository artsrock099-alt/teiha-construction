export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  client: string;
  status: string;
  year: number;
  description: string;
  heroImage: string;
  gallery: string[];
  servicesUsed: string[];
  industry: string;
  projectSize: string;
  duration: string;
  designChallenges: string;
  designSolution: string;
  aiContribution: {
    title: string;
    description: string;
  }[];
  technologies: string[];
  sustainabilityHighlights: {
    title: string;
    value: string;
  }[];
  projectStats: {
    label: string;
    value: number;
    suffix?: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  relatedProjects: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "kampala-innovation-hub",
    title: "Kampala Innovation Hub",
    category: "Commercial",
    location: "Kampala, Uganda",
    client: "Uganda Tech Consortium",
    status: "Completed",
    year: 2024,
    description: "A cutting-edge commercial complex designed to foster innovation and collaboration in the heart of Kampala.",
    heroImage: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20commercial%20building%20glass%20facade%20kampala&image_size=landscape_16_9",
    gallery: [
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20office%20interior%20open%20space&image_size=landscape_16_9",
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=architectural%20render%20lobby%20reception&image_size=landscape_16_9",
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=exterior%20night%20view%20modern%20building&image_size=landscape_16_9",
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=conference%20room%20modern%20design&image_size=landscape_16_9",
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=rooftop%20garden%20commercial%20building&image_size=landscape_16_9"
    ],
    servicesUsed: ["Architecture", "Interior Design", "Construction Supervision", "Smart Building Consulting"],
    industry: "Commercial",
    projectSize: "12,000 m²",
    duration: "18 months",
    designChallenges: "The site presented significant topographical challenges, with a 15-meter elevation change across the property. Additionally, the client required the building to achieve net-zero energy consumption while maintaining a premium aesthetic.",
    designSolution: "Our design solution embraced the site's natural topography, creating a terraced structure that minimized earthworks. We incorporated passive solar design strategies, green roofs, and a photovoltaic system integrated into the building's facade.",
    aiContribution: [
      { title: "Design Optimization", description: "AI-powered generative design produced 50+ iterations, optimizing for solar gain and views." },
      { title: "Energy Modelling", description: "Machine learning predicted energy performance, reducing projected consumption by 35%." },
      { title: "Cost Forecasting", description: "AI algorithms analyzed material costs, providing accurate forecasts with ±5% accuracy." }
    ],
    technologies: ["BIM", "Revit", "AI Optimization", "Energy Simulation", "3D Visualization"],
    sustainabilityHighlights: [
      { title: "Energy Reduction", value: "40%" },
      { title: "Water Savings", value: "35%" },
      { title: "Recycled Materials", value: "25%" },
      { title: "Green Roof Area", value: "1,200 m²" }
    ],
    projectStats: [
      { label: "Square Metres", value: 12000 },
      { label: "Construction Duration", value: 18, suffix: " months" },
      { label: "Workers Employed", value: 250 },
      { label: "Sustainability Score", value: 92, suffix: "%" }
    ],
    testimonial: {
      quote: "TEI-HA delivered a building that exceeded all our expectations. Their innovative approach to the site's challenges and commitment to sustainability created a space that our tenants love.",
      author: "Sarah Nalubega",
      role: "CEO, Uganda Tech Consortium"
    },
    relatedProjects: ["lake-victoria-residences", "global-health-center"],
    seo: {
      title: "Kampala Innovation Hub | TEI-HA Construction Services",
      description: "A cutting-edge commercial complex in Kampala, Uganda. Sustainable design, AI-optimized architecture, and premium commercial space.",
      keywords: ["Kampala commercial building", "Uganda architecture", "sustainable design"]
    }
  },
  {
    id: "2",
    slug: "lake-victoria-residences",
    title: "Lake Victoria Residences",
    category: "Residential",
    location: "Entebbe, Uganda",
    client: "East African Properties",
    status: "Completed",
    year: 2023,
    description: "Luxury residential development featuring smart home technology and breathtaking views of Lake Victoria.",
    heroImage: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20residential%20building%20lake%20victoria&image_size=landscape_16_9",
    gallery: [
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20apartment%20interior%20living%20room&image_size=landscape_16_9",
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=penthouse%20terrace%20lake%20view&image_size=landscape_16_9",
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=swimming%20pool%20luxury%20residence&image_size=landscape_16_9"
    ],
    servicesUsed: ["Architecture", "Interior Design", "Smart Building Consulting"],
    industry: "Residential",
    projectSize: "8,500 m²",
    duration: "14 months",
    designChallenges: "Balancing privacy for residents with maximizing views of Lake Victoria, while ensuring the development blended with the natural landscape.",
    designSolution: "A staggered building orientation ensured both privacy and views, with extensive landscaping using native vegetation to integrate with the surroundings.",
    aiContribution: [
      { title: "View Optimization", description: "AI analyzed sight lines to ensure 90% of units had unobstructed lake views." },
      { title: "Material Selection", description: "AI recommended durable, low-maintenance materials suitable for the lakeside environment." }
    ],
    technologies: ["BIM", "3D Visualization", "Smart Home Technology"],
    sustainabilityHighlights: [
      { title: "Rainwater Harvesting", value: "100,000 L" },
      { title: "Solar Panels", value: "150 kW" },
      { title: "Native Landscaping", value: "80%" }
    ],
    projectStats: [
      { label: "Units", value: 45 },
      { label: "Storeys", value: 8 },
      { label: "Parking Spaces", value: 90 }
    ],
    testimonial: {
      quote: "Living in Lake Victoria Residences has been an absolute dream. The smart home features are seamless, and the views never get old.",
      author: "David Okello",
      role: "Resident"
    },
    relatedProjects: ["kampala-innovation-hub", "global-health-center"],
    seo: {
      title: "Lake Victoria Residences | TEI-HA Construction Services",
      description: "Luxury residential development in Entebbe with smart home technology and stunning lake views.",
      keywords: ["luxury homes Uganda", "smart homes Kampala", "lake view residences"]
    }
  },
  {
    id: "3",
    slug: "global-health-center",
    title: "Global Health Center",
    category: "Healthcare",
    location: "Nairobi, Kenya",
    client: "International Health Initiative",
    status: "Under Construction",
    year: 2025,
    description: "A state-of-the-art healthcare facility designed for optimal patient outcomes and operational efficiency.",
    heroImage: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20hospital%20building%20healthcare&image_size=landscape_16_9",
    gallery: [
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=hospital%20waiting%20area%20modern%20design&image_size=landscape_16_9",
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=operating%20room%20modern%20equipment&image_size=landscape_16_9",
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=hospital%20garden%20healing%20space&image_size=landscape_16_9"
    ],
    servicesUsed: ["Architecture", "Civil Engineering", "Project Management", "Sustainable Design"],
    industry: "Healthcare",
    projectSize: "25,000 m²",
    duration: "24 months",
    designChallenges: "Designing a facility that could adapt to evolving healthcare needs while maintaining strict infection control protocols and operational efficiency.",
    designSolution: "A modular design approach allows for easy reconfiguration of spaces. We incorporated natural daylight, healing gardens, and specialized ventilation systems.",
    aiContribution: [
      { title: "Flow Optimization", description: "AI modeled patient and staff flows to minimize travel distances and reduce bottlenecks." },
      { title: "Infection Control", description: "Simulations optimized air circulation patterns to reduce the spread of airborne pathogens." }
    ],
    technologies: ["BIM", "AutoCAD", "AI Optimization", "MEP Simulation"],
    sustainabilityHighlights: [
      { title: "Energy Efficiency", value: "50%" },
      { title: "Water Conservation", value: "45%" },
      { title: "Low-VOC Materials", value: "100%" }
    ],
    projectStats: [
      { label: "Beds", value: 300 },
      { label: "Operating Theaters", value: 12 },
      { label: "ICU Beds", value: 40 },
      { label: "Parking", value: 500 }
    ],
    testimonial: {
      quote: "The design of the Global Health Center is transformative. It will allow us to provide care at a scale and quality never before seen in the region.",
      author: "Dr. Amina Mwangi",
      role: "Medical Director"
    },
    relatedProjects: ["kampala-innovation-hub", "lake-victoria-residences"],
    seo: {
      title: "Global Health Center | TEI-HA Construction Services",
      description: "State-of-the-art healthcare facility under construction in Nairobi, Kenya.",
      keywords: ["healthcare architecture", "hospital design", "medical facility Kenya"]
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export const PROJECT_CATEGORIES = ["All", "Residential", "Commercial", "Education", "Healthcare", "Hospitality", "Industrial", "Government", "Mixed Use", "Master Planning", "Urban Development"];

