import * as React from "react";
import Link from "next/link";
import {
  Building2,
  Compass,
  Hammer,
  ClipboardList,
  Route,
  Mountain,
  Ruler,
  Zap,
  Droplets,
  Globe,
  Paintbrush,
  RefreshCw,
  Eye,
  Cpu,
  Leaf,
  Truck,
} from "lucide-react";

const SERVICES = [
  {
    name: "Architecture",
    href: "/services/architecture",
    icon: <Building2 className="h-5 w-5" />,
    description: "Premium architectural design and planning",
  },
  {
    name: "Civil & Structural Engineering",
    href: "/services/civil-engineering",
    icon: <Compass className="h-5 w-5" />,
    description: "Structural analysis and infrastructure engineering",
  },
  {
    name: "Construction",
    href: "/services/construction",
    icon: <Hammer className="h-5 w-5" />,
    description: "End-to-end construction delivery",
  },
  {
    name: "Project Planning & Management",
    href: "/services/project-management",
    icon: <ClipboardList className="h-5 w-5" />,
    description: "Comprehensive project management",
  },
  {
    name: "Highway Engineering",
    href: "/services/highway-engineering",
    icon: <Route className="h-5 w-5" />,
    description: "Road and highway infrastructure",
  },
  {
    name: "Geotechnical Engineering",
    href: "/services/geotechnical-engineering",
    icon: <Mountain className="h-5 w-5" />,
    description: "Soil investigation and foundation design",
  },
  {
    name: "Surveying",
    href: "/services/surveying",
    icon: <Ruler className="h-5 w-5" />,
    description: "Accurate measurements and mapping",
  },
  {
    name: "Electrical & Mechanical Eng.",
    href: "/services/electrical-mechanical-engineering",
    icon: <Zap className="h-5 w-5" />,
    description: "MEP design and building systems",
  },
  {
    name: "Water Supply & Sanitation",
    href: "/services/water-supply-sanitation",
    icon: <Droplets className="h-5 w-5" />,
    description: "Water and wastewater engineering",
  },
  {
    name: "Environmental Engineering",
    href: "/services/environmental-engineering",
    icon: <Globe className="h-5 w-5" />,
    description: "EIA and sustainable infrastructure",
  },
  {
    name: "Interior Design & Finishing",
    href: "/services/interior-design",
    icon: <Paintbrush className="h-5 w-5" />,
    description: "Elegant interior design solutions",
  },
  {
    name: "Renovation & Remodeling",
    href: "/services/renovation",
    icon: <RefreshCw className="h-5 w-5" />,
    description: "Modern renovation and remodeling",
  },
  {
    name: "Supervision & Quality Assurance",
    href: "/services/construction-supervision",
    icon: <Eye className="h-5 w-5" />,
    description: "Site supervision and quality control",
  },
  {
    name: "Smart Building Consulting",
    href: "/services/smart-building-consulting",
    icon: <Cpu className="h-5 w-5" />,
    description: "Intelligent building solutions",
  },
  {
    name: "Sustainable Design",
    href: "/services/sustainable-design",
    icon: <Leaf className="h-5 w-5" />,
    description: "Eco-friendly and green building design",
  },
  {
    name: "Material Supply",
    href: "/services/material-supply",
    icon: <Truck className="h-5 w-5" />,
    description: "Quality construction material supply",
  },
];

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ServicesMegaMenu({ isOpen, onClose }: ServicesMegaMenuProps) {
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(onClose, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] pt-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="p-6 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {SERVICES.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              onClick={onClose}
              className="group flex items-start gap-3 p-4 rounded-lg hover:bg-muted transition-colors"
            >
              <div className="mt-1 flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                {service.icon}
              </div>
              <div>
                <p className="font-semibold text-primary group-hover:text-primary-hover transition-colors">
                  {service.name}
                </p>
                <p className="text-sm text-body mt-1">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
}
