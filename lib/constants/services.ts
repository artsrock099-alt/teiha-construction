import {
  Building2,
  Hammer,
  Compass,
  Paintbrush,
  RefreshCw,
  Briefcase,
  Zap,
  Leaf,
  Eye,
  Route,
  Mountain,
  Ruler,
  Droplets,
  Globe,
  Cpu,
  Truck,
  ClipboardList,
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
  // ── 1. Architectural Design ──
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
      "3D visualization and virtual tours",
    ],
    industries: ["Residential", "Commercial", "Healthcare", "Education", "Hospitality", "Institutional"],
    process: [
      { title: "Consultation", description: "Understanding your vision, budget, and requirements" },
      { title: "Site Analysis", description: "Evaluating site conditions, regulations, and opportunities" },
      { title: "Concept Design", description: "Developing initial design concepts with AI assistance" },
      { title: "Design Development", description: "Refining designs with detailed drawings and specifications" },
      { title: "Construction Documentation", description: "Preparing comprehensive documents for approvals and construction" },
    ],
    faq: [
      { question: "How long does the architectural design process take?", answer: "Timelines vary by project complexity, typically 8–16 weeks from concept to construction documentation." },
      { question: "Do you handle permit applications?", answer: "Yes, we assist with permit documentation and coordination with local authorities." },
    ],
    aiEnhancement: [
      { title: "AI Concept Generation", description: "Rapidly explore multiple design options using generative AI" },
      { title: "Performance Simulation", description: "Optimize for energy efficiency, daylight, and acoustics" },
      { title: "3D Visualization", description: "Create immersive 3D models and virtual tours" },
    ],
    relatedServices: ["interior-design", "construction", "project-management", "sustainable-design"],
    seo: {
      title: "Architectural Design Services | TEI-HA Construction Uganda",
      description: "Premium architectural design services in Uganda. AI-powered, sustainable designs for residential, commercial, and institutional projects.",
      keywords: ["Architectural Design Uganda", "Architecture Firm Africa", "Modern Architecture Uganda", "Sustainable Architecture"],
    },
  },

  // ── 2. Civil & Structural Engineering ──
  {
    slug: "civil-engineering",
    title: "Civil & Structural Engineering",
    shortDescription: "Safe, durable, and cost-effective engineering solutions for buildings and infrastructure.",
    heroDescription: "Professional structural analysis, design, and construction engineering that ensures every project is built on a foundation of safety and performance.",
    icon: Compass,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=civil%20structural%20engineering%20blueprint%20professional&image_size=landscape_16_9",
    benefits: [
      "Structural design and analysis",
      "Reinforced concrete and steel structures",
      "Foundation engineering",
      "Infrastructure engineering",
      "Structural inspections and assessments",
    ],
    industries: ["Residential", "Commercial", "Industrial", "Infrastructure", "Government", "Healthcare"],
    process: [
      { title: "Feasibility Study", description: "Assessing project viability, site conditions, and constraints" },
      { title: "Design & Analysis", description: "Structural design, load calculations, and engineering analysis" },
      { title: "Documentation", description: "Preparing detailed engineering drawings and specifications" },
      { title: "Construction Support", description: "On-site engineering support during construction" },
      { title: "Testing & Commissioning", description: "Structural testing, certification, and project handover" },
    ],
    faq: [
      { question: "What types of engineering projects do you handle?", answer: "We handle structural, geotechnical, transportation, water resources, and infrastructure projects of all scales." },
      { question: "Do you provide structural assessments for existing buildings?", answer: "Yes, we offer structural inspections, condition assessments, and retrofit recommendations for existing structures." },
    ],
    aiEnhancement: [
      { title: "AI Simulations", description: "Advanced structural and geotechnical simulations for optimal performance" },
      { title: "Design Optimization", description: "AI-assisted structural optimization for cost and material efficiency" },
    ],
    relatedServices: ["highway-engineering", "geotechnical-engineering", "construction", "project-management"],
    seo: {
      title: "Civil & Structural Engineering | TEI-HA Construction Uganda",
      description: "Professional civil and structural engineering services in Uganda. Structural analysis, foundation engineering, and infrastructure design.",
      keywords: ["Civil Engineering Uganda", "Structural Engineering Uganda", "Infrastructure Engineering Uganda"],
    },
  },

  // ── 3. Construction Services ──
  {
    slug: "construction",
    title: "Construction Services",
    shortDescription: "End-to-end construction delivery with international quality standards.",
    heroDescription: "Expert construction services that bring your designs to life with precision, quality, and efficiency — from ground-breaking to handover.",
    icon: Hammer,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20construction%20site%20modern%20building%20premium&image_size=landscape_16_9",
    benefits: [
      "Experienced construction team",
      "International quality standards",
      "Transparent pricing and timelines",
      "On-site project management",
      "Quality assurance at every stage",
    ],
    industries: ["Residential", "Commercial", "Industrial", "Institutional", "Healthcare", "Education"],
    process: [
      { title: "Pre-construction", description: "Mobilization, site preparation, and logistics planning" },
      { title: "Foundation", description: "Structural foundation and ground works" },
      { title: "Superstructure", description: "Building structure, envelope, and roofing" },
      { title: "MEP & Finishes", description: "Mechanical, electrical, plumbing, and interior finishes" },
      { title: "Final Inspection", description: "Quality checks, snagging, and project handover" },
    ],
    faq: [
      { question: "What is your approach to project pricing?", answer: "We provide transparent, detailed cost estimates with clear breakdowns of materials, labour, and contingencies." },
      { question: "Do you work with existing designs?", answer: "Yes, we can construct from existing architectural plans or collaborate with your chosen architect." },
    ],
    aiEnhancement: [
      { title: "AI Project Planning", description: "Optimize construction schedules and resource allocation" },
      { title: "Progress Monitoring", description: "AI-powered site monitoring and progress tracking" },
      { title: "Quality Control", description: "Computer vision-assisted quality inspections" },
    ],
    relatedServices: ["architecture", "project-management", "construction-supervision", "material-supply"],
    seo: {
      title: "Construction Services | TEI-HA Construction Uganda",
      description: "Professional construction services in Uganda. Residential, commercial, and industrial projects delivered to international standards.",
      keywords: ["Construction Company Uganda", "Building Contractors Uganda", "Commercial Construction Uganda"],
    },
  },

  // ── 4. Project Planning & Project Management ──
  {
    slug: "project-management",
    title: "Project Planning & Project Management",
    shortDescription: "Managing projects from concept through completion with quality, cost control, and timely delivery.",
    heroDescription: "Comprehensive project planning and management services that keep your project on time, on budget, and to the highest standards.",
    icon: ClipboardList,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=project%20management%20construction%20professional%20meeting&image_size=landscape_16_9",
    benefits: [
      "Project planning and scheduling",
      "Budget development and cost control",
      "Procurement coordination",
      "Contract administration",
      "Risk management and monitoring",
    ],
    industries: ["Residential", "Commercial", "Healthcare", "Education", "Industrial", "Government", "Infrastructure"],
    process: [
      { title: "Initiation", description: "Project planning, goal setting, and stakeholder alignment" },
      { title: "Planning", description: "Detailed scheduling, budgeting, and procurement planning" },
      { title: "Execution", description: "Coordinating resources and overseeing project delivery" },
      { title: "Monitoring", description: "Tracking progress, performance, and risk mitigation" },
      { title: "Closure", description: "Project handover, documentation, and lessons learned" },
    ],
    faq: [
      { question: "When should we involve project management?", answer: "Ideally from the very beginning to ensure proper planning and avoid costly changes later." },
      { question: "Do you manage subcontractors?", answer: "Yes, we coordinate all subcontractors, suppliers, and stakeholders throughout the project lifecycle." },
    ],
    aiEnhancement: [
      { title: "AI Scheduling", description: "Optimize project timelines and resource allocation" },
      { title: "Predictive Analytics", description: "Identify potential issues before they become problems" },
    ],
    relatedServices: ["construction", "architecture", "construction-supervision", "civil-engineering"],
    seo: {
      title: "Project Planning & Management | TEI-HA Uganda",
      description: "Professional project planning and management services in Uganda. Cost control, scheduling, and risk management for construction projects.",
      keywords: ["Project Management Uganda", "Construction Management Uganda", "Project Planning Uganda"],
    },
  },

  // ── 5. Highway Engineering ──
  {
    slug: "highway-engineering",
    title: "Highway Engineering",
    shortDescription: "Designing and supervising road infrastructure for safe and efficient transportation.",
    heroDescription: "Expert highway and road engineering services that support safe, sustainable, and efficient transportation systems across Uganda and East Africa.",
    icon: Route,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20highway%20road%20engineering%20infrastructure%20aerial&image_size=landscape_16_9",
    benefits: [
      "Road and highway design",
      "Pavement engineering",
      "Drainage system design",
      "Road rehabilitation and maintenance",
      "Traffic impact assessments",
    ],
    industries: ["Infrastructure", "Government", "Transportation", "Commercial", "Industrial"],
    process: [
      { title: "Route Study", description: "Feasibility study and route alignment assessment" },
      { title: "Geometric Design", description: "Horizontal and vertical alignment, junctions, and interchanges" },
      { title: "Pavement Design", description: "Structural pavement design and material selection" },
      { title: "Drainage & Utilities", description: "Stormwater drainage and utility coordination" },
      { title: "Construction Supervision", description: "On-site supervision and quality control during construction" },
    ],
    faq: [
      { question: "Do you handle both urban and rural roads?", answer: "Yes, we design and supervise roads for urban, peri-urban, and rural environments." },
      { question: "Can you design for heavy traffic loads?", answer: "Absolutely — we design pavements and structures to handle heavy commercial and industrial traffic loads." },
    ],
    aiEnhancement: [
      { title: "Traffic Simulation", description: "AI-powered traffic flow modelling and analysis" },
      { title: "Route Optimization", description: "Optimize alignments for cost, safety, and environmental impact" },
    ],
    relatedServices: ["civil-engineering", "geotechnical-engineering", "surveying", "environmental-engineering"],
    seo: {
      title: "Highway Engineering Services | TEI-HA Construction Uganda",
      description: "Professional highway and road engineering services in Uganda. Road design, pavement engineering, drainage, and rehabilitation.",
      keywords: ["Highway Engineering Uganda", "Road Design Uganda", "Pavement Engineering Uganda"],
    },
  },

  // ── 6. Geotechnical Engineering ──
  {
    slug: "geotechnical-engineering",
    title: "Geotechnical Engineering",
    shortDescription: "Geotechnical investigations and foundation recommendations for safe construction.",
    heroDescription: "Professional geotechnical services that ensure your structures are built on solid ground through thorough site investigation and analysis.",
    icon: Mountain,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=geotechnical%20soil%20investigation%20drilling%20professional&image_size=landscape_16_9",
    benefits: [
      "Soil and site investigations",
      "Foundation recommendations",
      "Slope stability analysis",
      "Ground improvement solutions",
      "Material testing and analysis",
    ],
    industries: ["Infrastructure", "Commercial", "Residential", "Industrial", "Government"],
    process: [
      { title: "Site Investigation", description: "Boreholes, sampling, and in-situ testing" },
      { title: "Laboratory Testing", description: "Soil classification, strength, and consolidation tests" },
      { title: "Analysis", description: "Bearing capacity, settlement, and slope stability analysis" },
      { title: "Recommendations", description: "Foundation type, depth, and ground improvement recommendations" },
      { title: "Reporting", description: "Comprehensive geotechnical report with design parameters" },
    ],
    faq: [
      { question: "When is a geotechnical investigation needed?", answer: "For any significant construction project — it's essential for safe and economical foundation design." },
      { question: "How deep do you typically drill?", answer: "Depths vary by project, typically 5–30 metres depending on the structure and soil conditions." },
    ],
    aiEnhancement: [
      { title: "Soil Data Analysis", description: "AI-enhanced interpretation of soil test data" },
      { title: "Risk Modelling", description: "Predictive modelling of settlement and slope behaviour" },
    ],
    relatedServices: ["civil-engineering", "highway-engineering", "surveying", "construction"],
    seo: {
      title: "Geotechnical Engineering | TEI-HA Construction Uganda",
      description: "Professional geotechnical engineering in Uganda. Soil investigations, foundation design, and ground improvement solutions.",
      keywords: ["Geotechnical Engineering Uganda", "Soil Investigation Uganda", "Foundation Engineering Uganda"],
    },
  },

  // ── 7. Surveying ──
  {
    slug: "surveying",
    title: "Surveying",
    shortDescription: "Accurate measurements and mapping for successful project planning and execution.",
    heroDescription: "Professional surveying services that provide the precise measurements, mapping, and geospatial data your project needs.",
    icon: Ruler,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20land%20surveying%20equipment%20total%20station&image_size=landscape_16_9",
    benefits: [
      "Topographical surveys",
      "Boundary surveys and cadastral mapping",
      "Engineering and construction surveys",
      "Construction setting out",
      "GPS and GIS mapping",
    ],
    industries: ["Infrastructure", "Residential", "Commercial", "Industrial", "Government", "Agriculture"],
    process: [
      { title: "Reconnaissance", description: "Site visit, control point establishment, and planning" },
      { title: "Field Data Collection", description: "Total station, GPS, and drone-based data capture" },
      { title: "Data Processing", description: "Adjustment, analysis, and digital terrain modelling" },
      { title: "Mapping & Drafting", description: "Preparation of survey plans, maps, and digital outputs" },
      { title: "Verification", description: "Quality control and field verification of deliverables" },
    ],
    faq: [
      { question: "What types of surveys do you offer?", answer: "Topographical, boundary, engineering, construction setting out, GPS, and GIS mapping surveys." },
      { question: "Do you use drone technology?", answer: "Yes, we use drone-based photogrammetry for large-scale topographical surveys." },
    ],
    aiEnhancement: [
      { title: "Drone Mapping", description: "AI-driven aerial photogrammetry and terrain modelling" },
      { title: "Data Integration", description: "Automated integration of survey data into BIM and CAD workflows" },
    ],
    relatedServices: ["civil-engineering", "highway-engineering", "geotechnical-engineering", "architecture"],
    seo: {
      title: "Surveying Services | TEI-HA Construction Uganda",
      description: "Professional surveying services in Uganda. Topographical, boundary, engineering, and GPS surveys for construction and land development.",
      keywords: ["Surveying Uganda", "Land Surveyors Uganda", "Topographical Survey Uganda"],
    },
  },

  // ── 8. Electrical & Mechanical Engineering ──
  {
    slug: "electrical-mechanical-engineering",
    title: "Electrical & Mechanical Engineering",
    shortDescription: "Efficient electrical and mechanical engineering solutions for modern buildings and facilities.",
    heroDescription: "Delivering reliable electrical and mechanical engineering services that power, condition, and automate modern buildings and industrial facilities.",
    icon: Zap,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=electrical%20mechanical%20engineering%20modern%20building%20systems&image_size=landscape_16_9",
    benefits: [
      "Electrical installations and power distribution",
      "HVAC system design and installation",
      "Mechanical installations and plumbing",
      "Fire protection systems",
      "Building automation and controls",
    ],
    industries: ["Commercial", "Residential", "Industrial", "Healthcare", "Education", "Hospitality"],
    process: [
      { title: "Requirements Analysis", description: "Assessing electrical and mechanical load requirements" },
      { title: "System Design", description: "Designing power, HVAC, plumbing, and fire protection systems" },
      { title: "Specification", description: "Equipment selection and technical specifications" },
      { title: "Installation Oversight", description: "Supervising installation and integration" },
      { title: "Testing & Commissioning", description: "System testing, balancing, and handover" },
    ],
    faq: [
      { question: "Do you handle both new builds and retrofits?", answer: "Yes, we design and install MEP systems for new construction and retrofit existing buildings." },
      { question: "Can you integrate renewable energy systems?", answer: "Absolutely — we design systems that integrate solar, backup generators, and energy storage." },
    ],
    aiEnhancement: [
      { title: "Energy Optimization", description: "AI-powered energy modelling and consumption optimization" },
      { title: "Predictive Maintenance", description: "Smart sensors and AI for predictive equipment maintenance" },
    ],
    relatedServices: ["smart-building-consulting", "construction", "sustainable-design", "architecture"],
    seo: {
      title: "Electrical & Mechanical Engineering | TEI-HA Uganda",
      description: "Professional electrical and mechanical engineering services in Uganda. MEP design, HVAC, power systems, and building automation.",
      keywords: ["MEP Engineering Uganda", "Electrical Engineering Uganda", "Mechanical Engineering Uganda", "HVAC Uganda"],
    },
  },

  // ── 9. Water Supply & Sanitation Engineering ──
  {
    slug: "water-supply-sanitation",
    title: "Water Supply & Sanitation Engineering",
    shortDescription: "Sustainable water supply and sanitation systems for public health and environmental protection.",
    heroDescription: "Designing and implementing sustainable water supply, sewerage, and sanitation systems that improve public health and protect the environment.",
    icon: Droplets,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=water%20supply%20sanitation%20engineering%20treatment%20plant&image_size=landscape_16_9",
    benefits: [
      "Water supply system design",
      "Sewerage and wastewater management",
      "Drainage design and stormwater management",
      "Plumbing engineering",
      "Water treatment and quality management",
    ],
    industries: ["Government", "Infrastructure", "Residential", "Commercial", "Industrial", "Healthcare"],
    process: [
      { title: "Needs Assessment", description: "Evaluating water demand and sanitation requirements" },
      { title: "System Design", description: "Designing water supply, sewerage, and drainage networks" },
      { title: "Hydraulic Modelling", description: "AI-assisted hydraulic analysis and network optimization" },
      { title: "Specification & Tendering", description: "Technical specifications and procurement support" },
      { title: "Supervision & Commissioning", description: "Construction supervision and system commissioning" },
    ],
    faq: [
      { question: "Do you design for rural and urban areas?", answer: "Yes, we design water and sanitation systems for urban, peri-urban, and rural settings." },
      { question: "What wastewater treatment solutions do you offer?", answer: "We design septic systems, package treatment plants, and centralized wastewater treatment facilities." },
    ],
    aiEnhancement: [
      { title: "Hydraulic Optimization", description: "AI-driven network analysis and pressure management" },
      { title: "Leak Detection", description: "Smart monitoring and AI-based leak detection systems" },
    ],
    relatedServices: ["civil-engineering", "environmental-engineering", "highway-engineering", "construction"],
    seo: {
      title: "Water Supply & Sanitation Engineering | TEI-HA Uganda",
      description: "Professional water and sanitation engineering in Uganda. Water supply systems, wastewater management, drainage, and treatment solutions.",
      keywords: ["Water Engineering Uganda", "Sanitation Engineering Uganda", "Water Supply Systems Uganda"],
    },
  },

  // ── 10. Environmental Engineering ──
  {
    slug: "environmental-engineering",
    title: "Environmental Engineering",
    shortDescription: "Environmentally responsible engineering solutions for sustainable infrastructure.",
    heroDescription: "Developing environmentally responsible engineering solutions that support sustainable development, regulatory compliance, and ecosystem protection.",
    icon: Globe,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=environmental%20engineering%20sustainable%20green%20infrastructure&image_size=landscape_16_9",
    benefits: [
      "Environmental impact assessments (EIA)",
      "Waste management planning",
      "Stormwater management",
      "Environmental monitoring",
      "Sustainable infrastructure planning",
    ],
    industries: ["Infrastructure", "Government", "Industrial", "Commercial", "Residential", "Energy"],
    process: [
      { title: "Screening", description: "Initial environmental screening and regulatory review" },
      { title: "Impact Assessment", description: "Comprehensive environmental and social impact assessment" },
      { title: "Mitigation Planning", description: "Developing environmental management and mitigation plans" },
      { title: "Permitting", description: "Regulatory permitting and stakeholder engagement" },
      { title: "Monitoring", description: "Post-construction environmental monitoring and compliance" },
    ],
    faq: [
      { question: "When is an environmental impact assessment required?", answer: "For most medium to large-scale developments, EIAs are legally required under Ugandan law." },
      { question: "Do you handle NEMA submissions?", answer: "Yes, we prepare and submit all documentation to the National Environment Management Authority (NEMA)." },
    ],
    aiEnhancement: [
      { title: "Impact Modelling", description: "AI-powered environmental impact modelling and prediction" },
      { title: "Compliance Tracking", description: "Automated regulatory compliance monitoring and reporting" },
    ],
    relatedServices: ["water-supply-sanitation", "sustainable-design", "civil-engineering", "highway-engineering"],
    seo: {
      title: "Environmental Engineering | TEI-HA Construction Uganda",
      description: "Professional environmental engineering in Uganda. Environmental impact assessments, waste management, and sustainable infrastructure planning.",
      keywords: ["Environmental Engineering Uganda", "EIA Uganda", "Environmental Impact Assessment Uganda"],
    },
  },

  // ── 11. Interior Design & Finishing ──
  {
    slug: "interior-design",
    title: "Interior Design & Finishing",
    shortDescription: "Elegant, functional interior spaces that enhance comfort, productivity, and aesthetics.",
    heroDescription: "Creating beautiful and functional interior spaces that reflect your personality and brand, from concept through to final finishing touches.",
    icon: Paintbrush,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20interior%20design%20luxury%20minimalist&image_size=landscape_16_9",
    benefits: [
      "Interior design and space planning",
      "Furniture layouts and lighting design",
      "Painting and decorative finishes",
      "Material and finish selection",
      "Coordination with construction team",
    ],
    industries: ["Residential", "Commercial", "Hospitality", "Healthcare", "Education"],
    process: [
      { title: "Concept Development", description: "Exploring design concepts, mood boards, and colour palettes" },
      { title: "Space Planning", description: "Optimizing layout and functionality for each space" },
      { title: "Design Development", description: "Detailed design, material selection, and specifications" },
      { title: "Implementation", description: "Overseeing installation, finishing, and joinery works" },
      { title: "Final Styling", description: "Adding furnishings, accessories, and final styling touches" },
    ],
    faq: [
      { question: "Can you work with my existing furniture?", answer: "Yes, we can incorporate your existing pieces into the design or create a cohesive plan that blends old and new." },
      { question: "Do you handle commercial interior design?", answer: "Absolutely — we design offices, retail spaces, hotels, restaurants, and healthcare interiors." },
    ],
    aiEnhancement: [
      { title: "AI Visualization", description: "Photorealistic 3D renderings of your interior design" },
      { title: "Material Selection", description: "AI-assisted material and finish recommendations" },
    ],
    relatedServices: ["architecture", "renovation", "smart-building-consulting", "construction"],
    seo: {
      title: "Interior Design & Finishing | TEI-HA Uganda",
      description: "Professional interior design and finishing services in Uganda. Residential, commercial, and hospitality interior design.",
      keywords: ["Interior Design Uganda", "Interior Finishing Uganda", "Commercial Interior Design Uganda"],
    },
  },

  // ── 12. Renovation & Remodeling ──
  {
    slug: "renovation",
    title: "Renovation & Remodeling",
    shortDescription: "Revitalize existing buildings with professional renovation and remodeling solutions.",
    heroDescription: "Expert renovation and remodeling services that breathe new life into existing spaces, increase property value, and extend building life.",
    icon: RefreshCw,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=home%20renovation%20modern%20before%20after%20premium&image_size=landscape_16_9",
    benefits: [
      "Full-scale building renovations",
      "Structural alterations and remodeling",
      "Restoration of historic buildings",
      "Interior and exterior upgrades",
      "Energy efficiency improvements",
    ],
    industries: ["Residential", "Commercial", "Hospitality", "Education", "Healthcare"],
    process: [
      { title: "Assessment", description: "Evaluating existing conditions, structure, and requirements" },
      { title: "Design", description: "Creating renovation plans, concepts, and approvals" },
      { title: "Demolition & Prep", description: "Careful demolition, stripping, and site preparation" },
      { title: "Construction", description: "Executing structural and finishing renovation works" },
      { title: "Completion", description: "Final finishes, cleaning, and handover" },
    ],
    faq: [
      { question: "Can you work around our existing operations?", answer: "Yes, we plan renovations to minimize disruption with phased approaches for occupied spaces." },
      { question: "Do you handle listed or historic buildings?", answer: "Yes, we have experience with sensitive restoration of historic and heritage buildings." },
    ],
    aiEnhancement: [
      { title: "AI Planning", description: "Optimize renovation phasing and minimize disruption" },
      { title: "Structural Analysis", description: "AI-assisted assessment of existing structural capacity" },
    ],
    relatedServices: ["interior-design", "architecture", "construction", "construction-supervision"],
    seo: {
      title: "Renovation & Remodeling | TEI-HA Construction Uganda",
      description: "Professional renovation and remodeling services in Uganda. Building renovations, structural alterations, and property upgrades.",
      keywords: ["Renovation Uganda", "Home Remodeling Uganda", "Building Renovation Uganda"],
    },
  },

  // ── 13. Construction Supervision & Quality Assurance ──
  {
    slug: "construction-supervision",
    title: "Construction Supervision & Quality Assurance",
    shortDescription: "Ensuring every project meets specifications, safety requirements, and quality standards.",
    heroDescription: "Comprehensive supervision and quality assurance services that ensure your project is built right — to specification, on time, and to the highest standards.",
    icon: Eye,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=construction%20supervision%20site%20inspection%20professional&image_size=landscape_16_9",
    benefits: [
      "Site supervision and inspections",
      "Quality control and material testing",
      "Compliance monitoring with plans and specs",
      "Safety supervision",
      "Progress reporting and documentation",
    ],
    industries: ["Residential", "Commercial", "Healthcare", "Education", "Industrial", "Infrastructure", "Government"],
    process: [
      { title: "Pre-construction Review", description: "Reviewing plans, specifications, and quality benchmarks" },
      { title: "Foundation Supervision", description: "Supervising foundation and ground works" },
      { title: "Structural Supervision", description: "Overseeing structural construction and reinforcement" },
      { title: "MEP & Finishes", description: "Supervising installations, finishes, and fit-out" },
      { title: "Final Inspection", description: "Final quality checks, snagging, and handover certification" },
    ],
    faq: [
      { question: "Can you supervise a project built by another contractor?", answer: "Yes, we offer independent construction supervision for projects where the contractor is a third party." },
      { question: "How often do you inspect the site?", answer: "Frequency depends on the project stage — daily during critical phases, weekly during routine works." },
    ],
    aiEnhancement: [
      { title: "AI Monitoring", description: "Computer vision and drone-based site monitoring" },
      { title: "Quality Analytics", description: "AI-driven analysis of inspection data and defect tracking" },
    ],
    relatedServices: ["project-management", "construction", "civil-engineering", "construction"],
    seo: {
      title: "Construction Supervision & Quality Assurance | TEI-HA Uganda",
      description: "Professional construction supervision and quality assurance in Uganda. Site inspections, quality control, and compliance monitoring.",
      keywords: ["Construction Supervision Uganda", "Quality Assurance Uganda", "Site Supervision Uganda"],
    },
  },

  // ── 14. Smart Building Consulting ──
  {
    slug: "smart-building-consulting",
    title: "Smart Building Consulting",
    shortDescription: "Integrating modern technologies for improved efficiency, automation, and sustainability.",
    heroDescription: "Helping you integrate cutting-edge smart technologies into your buildings for enhanced efficiency, automation, sustainability, and operational performance.",
    icon: Cpu,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=smart%20building%20technology%20home%20automation%20modern&image_size=landscape_16_9",
    benefits: [
      "Smart building and home automation",
      "IoT integration and sensors",
      "Energy management systems",
      "Security and access control",
      "Building management platforms",
    ],
    industries: ["Residential", "Commercial", "Healthcare", "Hospitality", "Industrial", "Education"],
    process: [
      { title: "Assessment", description: "Understanding your smart technology needs and goals" },
      { title: "System Design", description: "Designing integrated smart building systems" },
      { title: "Specification", description: "Selecting and specifying products and platforms" },
      { title: "Implementation", description: "Overseeing installation, integration, and configuration" },
      { title: "Commissioning", description: "System testing, user training, and handover" },
    ],
    faq: [
      { question: "Can smart systems be added to existing buildings?", answer: "Yes, many smart technologies can be retrofitted into existing buildings with minimal disruption." },
      { question: "What building management platforms do you support?", answer: "We work with leading platforms including KNX, BACnet, and IoT-based solutions." },
    ],
    aiEnhancement: [
      { title: "AI Optimization", description: "Continuous learning and optimization of building systems" },
      { title: "Predictive Maintenance", description: "AI-driven equipment monitoring and predictive maintenance" },
    ],
    relatedServices: ["electrical-mechanical-engineering", "sustainable-design", "architecture", "interior-design"],
    seo: {
      title: "Smart Building Consulting | TEI-HA Uganda",
      description: "Smart building and home automation consulting in Uganda. IoT, building management systems, and intelligent building solutions.",
      keywords: ["Smart Building Uganda", "Home Automation Uganda", "IoT Uganda", "Building Management Systems Uganda"],
    },
  },

  // ── 15. Sustainable Design ──
  {
    slug: "sustainable-design",
    title: "Sustainable Design",
    shortDescription: "Environmentally responsible buildings that minimize energy consumption and maximize efficiency.",
    heroDescription: "Designing environmentally responsible buildings that minimize energy consumption, reduce carbon footprint, and maximize long-term operational efficiency.",
    icon: Leaf,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=sustainable%20green%20building%20eco%20friendly%20design&image_size=landscape_16_9",
    benefits: [
      "Green building design and certification",
      "Energy-efficient planning and modelling",
      "Sustainable material selection",
      "Climate-responsive architecture",
      "Carbon reduction strategies",
    ],
    industries: ["Residential", "Commercial", "Healthcare", "Education", "Industrial", "Government"],
    process: [
      { title: "Sustainability Audit", description: "Assessing current and potential sustainability performance" },
      { title: "Strategy Development", description: "Setting sustainability goals and target metrics" },
      { title: "Design Integration", description: "Incorporating passive design, renewables, and efficient systems" },
      { title: "Implementation Support", description: "Overseeing sustainable construction practices and procurement" },
      { title: "Verification", description: "Testing, commissioning, and performance verification" },
    ],
    faq: [
      { question: "Do sustainable designs cost more?", answer: "While some features may have higher upfront costs, they deliver significant long-term savings through reduced energy and water usage." },
      { question: "What green building certifications do you pursue?", answer: "We design to international standards including EDGE, LEED, and local green building guidelines." },
    ],
    aiEnhancement: [
      { title: "Energy Simulation", description: "AI-powered energy performance simulation and optimization" },
      { title: "Carbon Analysis", description: "Lifecycle carbon assessment and reduction modelling" },
    ],
    relatedServices: ["architecture", "environmental-engineering", "smart-building-consulting", "electrical-mechanical-engineering"],
    seo: {
      title: "Sustainable Design | TEI-HA Construction Uganda",
      description: "Sustainable and green building design in Uganda. Energy-efficient, eco-friendly, and climate-responsive architectural solutions.",
      keywords: ["Sustainable Design Uganda", "Green Building Uganda", "Energy Efficient Design Uganda"],
    },
  },

  // ── 16. General Material Supply ──
  {
    slug: "material-supply",
    title: "General Material Supply",
    shortDescription: "Reliable sourcing and supply of quality construction materials for every project.",
    heroDescription: "Reliable sourcing and supply of quality construction materials, ensuring your project is built with durable, certified, and cost-effective products.",
    icon: Truck,
    imagePlaceholder: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=construction%20material%20supply%20warehouse%20logistics&image_size=landscape_16_9",
    benefits: [
      "Cement, steel, and aggregate supply",
      "Finishing and plumbing materials",
      "Electrical materials and fixtures",
      "Competitive pricing and bulk discounts",
      "Logistics and delivery management",
    ],
    industries: ["Residential", "Commercial", "Industrial", "Infrastructure", "Government"],
    process: [
      { title: "Needs Assessment", description: "Evaluating material requirements and specifications" },
      { title: "Sourcing", description: "Identifying quality suppliers and competitive pricing" },
      { title: "Procurement", description: "Order placement, contract negotiation, and purchasing" },
      { title: "Logistics", description: "Transportation coordination and delivery management" },
      { title: "Quality Verification", description: "Inspection and verification of delivered materials" },
    ],
    faq: [
      { question: "Do you supply materials for small projects?", answer: "Yes, we supply materials for projects of all sizes — from home renovations to large commercial developments." },
      { question: "Can you source specialized or imported materials?", answer: "Yes, we have established supply chains for both local and imported construction materials." },
    ],
    aiEnhancement: [
      { title: "Supply Chain Optimization", description: "AI-driven logistics planning and inventory management" },
      { title: "Price Forecasting", description: "Market analysis and price trend forecasting" },
    ],
    relatedServices: ["construction", "project-management", "construction-supervision"],
    seo: {
      title: "Construction Material Supply | TEI-HA Uganda",
      description: "Reliable construction material supply in Uganda. Cement, steel, aggregates, finishing, plumbing, and electrical materials with delivery.",
      keywords: ["Construction Materials Uganda", "Building Materials Supply Uganda", "Material Supply Kampala"],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
