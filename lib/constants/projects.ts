export interface ConstructionMilestone {
  title: string;
  description: string;
  image: string;
  video?: string;
}

export interface ProjectVideo {
  title: string;
  thumbnail: string;
  src: string;
  duration?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  client: string;
  status: string;
  year: number;
  heroImage: string;
  heroVideo?: string;
  description: string;
  clientVision: string;
  theChallenge: string;
  ourSolution: string;
  designJourney: string;
  projectOutcome: string;
  gallery: string[];
  videos: ProjectVideo[];
  constructionMilestones: ConstructionMilestone[];
  servicesUsed: string[];
  aiContribution: { title: string; description: string }[];
  technologies: string[];
  sustainabilityHighlights: { title: string; value: string }[];
  projectStats: { label: string; value: number; suffix?: string }[];
  testimonial: { quote: string; author: string; role: string };
  relatedProjects: string[];
  seo: { title: string; description: string; keywords: string[] };
}

export const PROJECTS: Project[] = [
  {
    id: "zembo",
    slug: "zembo-national-battery-swap-network",
    title: "ZEMBO National Battery Swap Network",
    category: "Commercial",
    location: "Multiple Locations, Uganda",
    client: "ZEMBO Uganda",
    status: "Completed",
    year: 2024,
    heroImage: "/tei ha pics/Zembo2.jpeg",
    heroVideo: undefined,
    description: "Expanding ZEMBO's battery swap station network across Uganda to support electric mobility.",
    clientVision: "To construct modern, durable, and highly accessible battery swap stations capable of supporting Uganda's growing electric mobility ecosystem while maintaining consistent branding and quality standards across all locations.",
    theChallenge: "Delivering consistent, high-quality infrastructure across multiple sites while adhering to strict timelines and brand guidelines.",
    ourSolution: "TEI-HA provided comprehensive civil construction services, including site preparation, structural works, finishing, branding, and station upgrades.",
    designJourney: "Our team successfully delivered multiple outdoor battery swap stations including Nakawa Total Station, Mengo RUBIS, Nateete – Bairus Mall, Nakasero – Yujo, and additional locations across Uganda. Beyond new construction, TEI-HA also completed the branding and upgrading of approximately 50 indoor battery swap stations.",
    projectOutcome: "The successful completion of these projects strengthened ZEMBO's operational network and contributed to Uganda's transition toward cleaner and more sustainable urban mobility.",
    gallery: [
      "/tei ha pics/ZemboAfter.jpeg",
      "/tei ha pics/Zembo3.jpeg",
      "/tei ha pics/Zembo-Nakasero-at-Yujo1.jpeg",
    
  
    ],
    videos: [],
    constructionMilestones: [
      {
        title: "Site Preparation",
        description: "Clearing and preparing site location for construction.",
        image: "/tei ha pics/ZemboBefore.jpeg"
      },
      {
        title: "Structural Works",
        description: "Constructing durable station structures to withstand high traffic.",
        image: "/tei ha pics/Zembo3.jpeg"
      },
      {
        title: "Branding & Finishing",
        description: "Implementing consistent ZEMBO branding across all locations.",
        image: "/tei ha pics/ZemboAfter.jpeg"
      }
    ],
    servicesUsed: ["Civil Construction", "Site Preparation", "Branding & Upgrades"],
    aiContribution: [],
    technologies: [],
    sustainabilityHighlights: [],
    projectStats: [
      { label: "Stations Constructed", value: 10 },
      { label: "Indoor Upgrades", value: 50 }
    ],
    testimonial: { quote: "", author: "", role: "" },
    relatedProjects: ["g-a-commercial-complex", "soleil-power-experience-center"],
    seo: { title: "", description: "", keywords: [] }
  },
  {
    id: "ga-commercial",
    slug: "g-a-commercial-complex",
    title: "G.A Commercial Complex",
    category: "Commercial",
    location: "Gayaza–Zirobwe Road, Busukuma",
    client: "Mr. Gareeba Alosysious",
    status: "In Progress",
    year: 2024,
    heroImage: "/tei ha pics/hero17.jpeg",
    description: "A modern commercial development designed to support the growing business community in Busukuma.",
    clientVision: "To create a commercial building that would not only maximize the value of the property but also become a landmark business facility serving the expanding Busukuma Township.",
    theChallenge: "Designing and constructing a modern commercial building that meets both functional and aesthetic requirements for a growing area.",
    ourSolution: "The client entrusted TEI-HA Construction Services Ltd with the complete Design & Build responsibility. From architectural planning and engineering design through structural execution and construction supervision, our multidisciplinary team manages every phase of the project.",
    designJourney: "Architectural planning, engineering design, and structural execution with professional management ensuring quality and timeliness.",
    projectOutcome: "The project continues to progress under TEI-HA's professional management, ensuring quality workmanship, timely execution, and strict adherence to engineering standards.",
    gallery: [
      "/tei ha pics/Commercial-Building-3D.jpeg",
      "/tei ha pics/Commercial-Building-Busukuma.jpeg",
      "/tei ha pics/Commercial-Building-Busukuma1.jpeg",
      "/tei ha pics/Commercial-Building-Busukuma2.jpeg",
      "/tei ha pics/Commercial-Building-Busukuma4.jpeg",
      "/tei ha pics/Commercial-Building-Busukuma5.jpeg",
      "/tei ha pics/Commercial-Building-Busukuma6.jpeg",
      "/tei ha pics/Commercial-Building-Busukuma9.jpeg",
      "/tei ha pics/Commercial-Building-Busukuma3.jpeg"
    ],
    videos: [
      {
        title: "Construction Progress",
        thumbnail: "/tei ha pics/Commercial-Building-3D.jpeg",
        src: "/tei ha pics/ga-vid.mp4"
      }
    ],
    constructionMilestones: [
      {
        title: "Architectural Design",
        description: "Creating the initial design and 3D renderings for the complex.",
        image: "/tei ha pics/hero17.jpeg"
      }
    ],
    servicesUsed: ["Design & Build", "Architecture", "Engineering", "Construction Supervision"],
    aiContribution: [],
    technologies: [],
    sustainabilityHighlights: [],
    projectStats: [],
    testimonial: { quote: "", author: "", role: "" },
    relatedProjects: ["zembo-national-battery-swap-network", "k-a-business-center"],
    seo: { title: "", description: "", keywords: [] }
  },
  {
    id: "anaku-residence",
    slug: "namulonge-family-residence",
    title: "Namulonge Family Residence",
    category: "Residential",
    location: "Namulonge–Buso Trading Centre, Nansana Municipality",
    client: "Mr. Patrick Anaku",
    status: "Completed",
    year: 2024,
    heroImage: "/tei ha pics/AnakuREsidencePlan.jpeg",
    
    description: "A custom-designed modern family home tailored to both present needs and future expansion.",
    clientVision: "To have a comfortable, modern family residence tailored to both present needs and future expansion.",
    theChallenge: "Creating a custom home that perfectly balances current family needs with future growth potential.",
    ourSolution: "TEI-HA handled the project from the earliest planning stages through architectural design, engineering, approvals, construction, and final finishing. Our integrated Design & Build approach ensured consistency in quality while simplifying project coordination for the client.",
    designJourney: "From initial concept to final finishing with integrated design and build services.",
    projectOutcome: "The completed home reflects the client's vision while maintaining structural integrity, functionality, and aesthetic appeal.",
    gallery: [
      "/tei ha pics/Residential-house-of-MrAnaku2.jpeg",
      "/tei ha pics/Residential-house-of-MrAnaku3.jpeg",
      "/tei ha pics/Residential-house-of-MrAnakuPlan.jpeg",
      "/tei ha pics/Residential-house-of-MrAnaku4.jpeg"
    ],
    videos: [
      {
        title: "Construction Progress",
        thumbnail: "/tei ha pics/Residential-house-of-MrAnaku1.jpeg",
        src: "/tei ha pics/Residential-house-of-MrAnaku.mp4"
      }
    ],
    constructionMilestones: [
      {
        title: "Design Phase",
        description: "Creating custom architectural plans tailored to the family's needs.",
        image: "/tei ha pics/Residential-house-of-MrAnakuPlan1.jpeg"
      },
      {
        title: "Construction",
        description: "Building the home with attention to detail and quality.",
        image: "/tei ha pics/Residential-house-of-MrAnaku2.jpeg"
      }
    ],
    servicesUsed: ["Design & Build", "Architecture", "Engineering", "Construction"],
    aiContribution: [],
    technologies: [],
    sustainabilityHighlights: [],
    projectStats: [],
    testimonial: { quote: "", author: "", role: "" },
    relatedProjects: ["njovu-estate-residence", "bukalango-contemporary-residence"],
    seo: { title: "", description: "", keywords: [] }
  },
  {
    id: "kato-residence",
    slug: "njovu-estate-residence",
    title: "Njovu Estate Residence",
    category: "Residential",
    location: "Mabwombwe, Njovu Estate",
    client: "Mr. Kato Umar",
    status: "Completed",
    year: 2023,
    heroImage: "/tei ha pics/Kato's-site.jpeg",
    description: "A modern residence resulting from a complete redesign and project recovery.",
    clientVision: "To have a modern home that exceeded expectations after an initial project fell short.",
    theChallenge: "The client had initially contracted another construction company whose pre-construction services failed to meet expectations. The project required a complete redesign and renewed technical direction.",
    ourSolution: "TEI-HA was engaged to take over the project from concept through execution. Our architects and engineers redesigned the project, optimized the layout, and successfully supervised construction.",
    designJourney: "Complete redesign and project recovery from initial concept through construction supervision.",
    projectOutcome: "The result was a modern residence that exceeded the client's expectations and restored confidence in the project.",
    gallery: [
      "/tei ha pics/Kato's-site1.jpeg",
      "/tei ha pics/Kato's-site2.jpeg",
      "/tei ha pics/Kato's-site6.jpeg",
      "/tei ha pics/Kato's-site7.jpeg",
      "/tei ha pics/Kato's-site8.jpeg",
      "/tei ha pics/Kato's-site9.jpeg",
      "/tei ha pics/Kato's-site10.jpeg",
      "/tei ha pics/Kato's-site11.jpeg",
      "/tei ha pics/Kato's-site12.mp4"    
    ],
    videos: [
      {
        title: "Completed Home",
        thumbnail: "/tei ha pics/Kato's-site6.jpeg",
        src: "/tei ha pics/Kato's-site12.mp4"
      }
    ],
    constructionMilestones: [
      {
        title: "Project Recovery & Redesign",
        description: "Taking over and completely redesigning the project.",
        image: "/tei ha pics/Kato's-site7.jpeg"
      },
      {
        title: "Construction",
        description: "Building the redesigned home with quality craftsmanship.",
        image: "/tei ha pics/Kato's-site8.jpeg"
      }
    ],
    servicesUsed: ["Project Recovery", "Redesign", "Architecture", "Construction Supervision"],
    aiContribution: [],
    technologies: [],
    sustainabilityHighlights: [],
    projectStats: [],
    testimonial: { quote: "", author: "", role: "" },
    relatedProjects: ["namulonge-family-residence", "bukalango-contemporary-residence"],
    seo: { title: "", description: "", keywords: [] }
  },
  {
    id: "soleil-power",
    slug: "soleil-power-experience-center",
    title: "Soleil Power Experience Centre",
    category: "Commercial",
    location: "SMS House, 7th Street, Industrial Area, Kampala",
    client: "Soleil Power",
    status: "Completed",
    year: 2024,
    heroImage: "/tei ha pics/Upgrading-Soleil-Power2.jpeg",
   
    description: "Upgrading the Soleil Power showroom to enhance customer experience and brand presentation.",
    clientVision: "To create an enhanced showroom experience that reflects Soleil Power's brand identity.",
    theChallenge: "Renovating an existing space to improve customer experience while maintaining operations.",
    ourSolution: "TEI-HA upgraded the showroom focusing on improved finishes, optimized layouts, and modern branding elements aligned with Soleil Power's corporate identity.",
    designJourney: "Renovation focusing on finishes, layout optimization, and branding.",
    projectOutcome: "Enhanced showroom with improved customer experience and modern branding.",
    gallery: [
      "/tei ha pics/Upgrading-Soleil-Power1.jpeg",
      "/tei ha pics/Upgrading-Soleil-Power2.jpeg"
    ],
    videos: [
      {
        title: "Showroom Tour",
        thumbnail: "/tei ha pics/Upgrading-Soleil-Power2.jpeg",
        src: "/tei ha pics/Upgrading-Soleil-Power.mp4"
      }
    ],
    constructionMilestones: [
      {
        title: "Renovation & Upgrades",
        description: "Implementing new finishes and branding elements.",
        image: "/tei ha pics/Upgrading-Soleil-Power2.jpeg"
      }
    ],
    servicesUsed: ["Commercial Interior Renovation", "Branding", "Layout Optimization"],
    aiContribution: [],
    technologies: [],
    sustainabilityHighlights: [],
    projectStats: [],
    testimonial: { quote: "", author: "", role: "" },
    relatedProjects: ["zembo-national-battery-swap-network", "g-a-commercial-complex"],
    seo: { title: "", description: "", keywords: [] }
  },
  {
    id: "naume-residence",
    slug: "bukalango-contemporary-residence",
    title: "Bukalango Contemporary Residence",
    category: "Residential",
    location: "Bukalango–Kakiri",
    client: "Mr. & Mrs. Mukontanyi Didas and Atuhaire Naume",
    status: "Completed",
    year: 2024,
    heroImage: "/tei ha pics/Naume-Residential10plan.jpeg",
   
    description: "Complete Design & Build of a modern family residence in Bukalango–Kakiri.",
    clientVision: "To build a modern family home through a complete design and build service.",
    theChallenge: "Delivering a complete Design & Build project with seamless coordination from concept to completion.",
    ourSolution: "TEI-HA provided architectural design, engineering consultancy, project management, and full construction services from concept to completion.",
    designJourney: "From architectural design to final finishing with full project management.",
    projectOutcome: "A completed modern family residence in Bukalango–Kakiri.",
    gallery: [
      
      "/tei ha pics/Naume-Residential3.jpeg",
      "/tei ha pics/Naume-Residential8.jpeg",
      "/tei ha pics/Naume-Residential9.jpeg",
      "/tei ha pics/Naume-Residential10plan.jpeg",
      "/tei ha pics/Naume-ResidentialPlan6.jpeg",
      "/tei ha pics/Naume-Residential10.jpeg",
      "/tei ha pics/Naume-Residential9plan.jpeg"

    ],
    videos: [
      {
        title: "Construction Progress",
        thumbnail: "/tei ha pics/Naume-Residential5.jpeg",
        src: "/tei ha/Residential-houseBukalango-vid.mp4"
      }
    ],
    constructionMilestones: [
      {
        title: "Foundation Works",
        description: "Laying the foundation for the residence.",
        image: "/tei ha pics/Naume-Residential4.jpeg"
      },
      {
        title: "Structural Frame",
        description: "Building the structural frame of the home.",
        image: "/tei ha pics/Naume-Residential.jpeg"
      },
      {
        title: "Finishing",
        description: "Final finishes and completion of the residence.",
        image: "/tei ha pics/Naume-Residential7.jpeg"
      }
    ],
    servicesUsed: ["Design & Build", "Architecture", "Engineering", "Project Management", "Construction"],
    aiContribution: [],
    technologies: [],
    sustainabilityHighlights: [],
    projectStats: [],
    testimonial: { quote: "", author: "", role: "" },
    relatedProjects: ["namulonge-family-residence", "njovu-estate-residence"],
    seo: { title: "", description: "", keywords: [] }
  },
  {
    id: "material-supply",
    slug: "construction-materials-logistics-services",
    title: "Construction Materials & Logistics Services",
    category: "Commercial",
    location: "Uganda",
    client: "Multiple Clients",
    status: "Ongoing",
    year: 2024,
    heroImage: "/tei ha pics/MaterialSupply.jpeg",
    heroVideo: undefined,
    description: "Beyond construction, TEI-HA provides reliable procurement, logistics, and delivery of quality construction materials for projects of all sizes.",
    clientVision: "To have a reliable partner for quality construction materials and timely delivery.",
    theChallenge: "Ensuring timely delivery of quality materials while maintaining cost effectiveness.",
    ourSolution: "Our efficient supply chain ensures timely delivery while maintaining quality assurance and cost effectiveness.",
    designJourney: "Developing and maintaining an efficient supply chain for construction materials.",
    projectOutcome: "Reliable procurement, logistics, and delivery services for projects of all sizes.",
    gallery: [
      "/tei ha pics/MaterialSupply.jpeg",
      "/tei ha pics/Ntake-Oil-mills5.jpeg"
    ],
    videos: [],
    constructionMilestones: [],
    servicesUsed: ["Procurement", "Logistics", "Material Supply", "Delivery Services"],
    aiContribution: [],
    technologies: [],
    sustainabilityHighlights: [],
    projectStats: [],
    testimonial: { quote: "", author: "", role: "" },
    relatedProjects: ["zembo-national-battery-swap-network", "ntake-oil-mills-industrial-infrastructure"],
    seo: { title: "", description: "", keywords: [] }
  },
  {
    id: "ntake-oil",
    slug: "ntake-oil-mills-industrial-infrastructure",
    title: "Ntake Oil Mills Industrial Infrastructure",
    category: "Industrial",
    location: "Namanve Industrial Park",
    client: "Ntake Oil Mills",
    status: "Completed",
    year: 2023,
    heroImage: "/tei ha pics/Ntake-Oil-mills.jpeg",
    heroVideo: undefined,
    description: "TEI-HA's engineering team participated in the construction of the Ntake Oil Mills and Refinery Project.",
    clientVision: "To develop critical industrial infrastructure for one of Uganda's major industrial investments.",
    theChallenge: "Contributing to a large-scale industrial project with high standards and timelines.",
    ourSolution: "Our professionals contributed to civil works within the Road and Drainage Department.",
    designJourney: "Execution of civil works for road and drainage infrastructure.",
    projectOutcome: "The assigned works achieved approximately 98% successful completion, reflecting our team's technical competence and commitment to quality execution on large-scale industrial projects.",
    gallery: [
      "/tei ha pics/Ntake-Oil-mills1.jpeg",
      "/tei ha pics/Ntake-Oil-mills2.jpeg",
      "/tei ha pics/Ntake-Oil-mills10.jpeg",
      "/tei ha pics/Ntake-Oil-mills4.jpeg",
      "/tei ha pics/Ntake-Oil-mills6.jpeg"
    ],
    videos: [],
    constructionMilestones: [
      {
        title: "Site Works",
        description: "Initial site preparation and civil works.",
        image: "/tei ha pics/Ntake-Oil-mills3.jpeg"
      },
      {
        title: "Road & Drainage",
        description: "Construction of road and drainage infrastructure.",
        image: "/tei ha pics/Ntake-Oil-mills8.jpeg"
      }
    ],
    servicesUsed: ["Civil Works", "Road Construction", "Drainage Infrastructure", "Industrial Construction"],
    aiContribution: [],
    technologies: [],
    sustainabilityHighlights: [],
    projectStats: [
      { label: "Completion Rate", value: 98, suffix: "%" }
    ],
    testimonial: { quote: "", author: "", role: "" },
    relatedProjects: ["construction-materials-logistics-services"],
    seo: { title: "", description: "", keywords: [] }
  },
  {
    id: "gomba-residence",
    slug: "gomba-countryside-residence",
    title: "Gomba Countryside Residence",
    category: "Residential",
    location: "Gomba District, Maddu, Nakitembe",
    client: "Obed Ben Family",
    status: "Completed",
    year: 2024,
    heroImage: "/tei ha pics/Residential-Obed-BenPlan3.jpeg",
    heroVideo: undefined,
    description: "Design & Build project developed as a family residence for the parents of Mr. Obed Ben.",
    clientVision: "To build a family home in Gomba District.",
    theChallenge: "Delivering a quality home in a rural setting with proper project management.",
    ourSolution: "TEI-HA managed every project phase, delivering a home designed to meet the family's functional needs while ensuring quality construction and long-term durability.",
    designJourney: "From design to completion with full project management.",
    projectOutcome: "Completed family residence in Gomba District, Maddu, Nakitembe.",
    gallery: [
      "/tei ha pics/Residential-Obed-BenPlan.jpeg",
      "/tei ha pics/Residential-Obed-Ben.jpeg",
      "/tei ha pics/Residential-Obed-Ben1.jpeg",
      "/tei ha pics/Residential-Obed-Ben2.jpeg",
      "/tei ha pics/Residential-Obed-BenP3.jpeg"
    ],
    videos: [],
    constructionMilestones: [
      {
        title: "Design & Planning",
        description: "Creating the plans for the countryside residence.",
        image: "/tei ha pics/Residential-Obed-BenPlan3.jpeg"
      },
      {
        title: "Construction",
        description: "Building the family home.",
        image: "/tei ha pics/Residential-Obed-Ben3.jpeg"
      }
    ],
    servicesUsed: ["Design & Build", "Architecture", "Project Management", "Construction"],
    aiContribution: [],
    technologies: [],
    sustainabilityHighlights: [],
    projectStats: [],
    testimonial: { quote: "", author: "", role: "" },
    relatedProjects: ["busukuma-modern-residence", "namulonge-family-residence"],
    seo: { title: "", description: "", keywords: [] }
  },
  {
    id: "eyotre-residence",
    slug: "busukuma-modern-residence",
    title: "Busukuma Modern Residence",
    category: "Residential",
    location: "Busukuma Town, Plot 158, Block 834, Busukuma Division, Nansana Municipality",
    client: "Mr. Eyotre Julias",
    status: "Completed",
    year: 2024,
    heroImage: "/tei ha pics/Mr. Eyotre-JuliasPlan2.jpeg",
    heroVideo: undefined,
    description: "Complete Design & Build of a modern residential home in Busukuma Town.",
    clientVision: "To build a modern residential home through complete Design & Build services.",
    theChallenge: "Delivering a modern home with high engineering and architectural standards.",
    ourSolution: "From concept development through construction, TEI-HA ensured every phase reflected the client's vision while maintaining high engineering and architectural standards.",
    designJourney: "From concept through construction with full design and build services.",
    projectOutcome: "Completed modern residential home in Busukuma Town.",
    gallery: [
      "/tei ha pics/Residential-Obed-Ben.jpeg",
      "/tei ha pics/Residential-Obed-Ben1.jpeg",
      "/tei ha pics/Residential-Obed-Ben3.jpeg"
    ],
    videos: [],
    constructionMilestones: [
      {
        title: "Concept Development",
        description: "Creating the concept for the modern residence.",
        image: "/tei ha pics/Residential-Obed-BenPlan3.jpeg"
      },
      {
        title: "Construction",
        description: "Building the home to high standards.",
        image: "/tei ha pics/Residential-Obed-Ben2.jpeg"
      }
    ],
    servicesUsed: ["Design & Build", "Architecture", "Engineering", "Construction"],
    aiContribution: [],
    technologies: [],
    sustainabilityHighlights: [],
    projectStats: [],
    testimonial: { quote: "", author: "", role: "" },
    relatedProjects: ["gomba-countryside-residence", "bukalango-contemporary-residence"],
    seo: { title: "", description: "", keywords: [] }
  },
  {
    id: "ka-building",
    slug: "k-a-business-center",
    title: "K.A Business Center",
    category: "Commercial",
    location: "Nabweru South along Nabweru Road leading to the Nansana Division Offices",
    client: "Mr. Kitonsa Alexander",
    status: "Completed",
    year: 2024,
    heroImage: "/tei ha pics/Design-and-Build-of-KA-Building-of-MrKitonsa-Alexander.jpeg",
    heroVideo: undefined,
    description: "A commercial development designed to support the area's growing economic activity.",
    clientVision: "To create a commercial property that supports the growing economic activity in Nabweru South.",
    theChallenge: "Designing and constructing a commercial building for a growing area.",
    ourSolution: "TEI-HA delivered complete Design & Build services, transforming the client's vision into a modern commercial property through integrated architectural design, engineering, and construction management.",
    designJourney: "Complete Design & Build from architectural design through construction management.",
    projectOutcome: "Completed modern commercial property in Nabweru South.",
    gallery: [
      "/tei ha pics/Design-and-Build-of-KA-Building-of-MrKitonsa-Alexander.jpeg"
    ],
    videos: [],
    constructionMilestones: [
      {
        title: "Architectural Design",
        description: "Creating the design for the business center.",
        image: "/tei ha pics/Design-and-Build-of-KA-Building-of-MrKitonsa-Alexander1.jpeg"
      }
     
    ],
    servicesUsed: ["Design & Build", "Architecture", "Engineering", "Construction Management"],
    aiContribution: [],
    technologies: [],
    sustainabilityHighlights: [],
    projectStats: [],
    testimonial: { quote: "", author: "", role: "" },
    relatedProjects: ["g-a-commercial-complex", "soleil-power-experience-center"],
    seo: { title: "", description: "", keywords: [] }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export const PROJECT_CATEGORIES = ["All", "Residential", "Commercial", "Hospitality", "Industrial"];
