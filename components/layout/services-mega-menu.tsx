import * as React from "react";
import Link from "next/link";
import {
  Layout,
  PenTool,
  Home,
  HardHat,
  Hammer,
  FolderTree,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    name: "Architecture",
    href: "/services/architecture",
    icon: <Layout className="h-5 w-5" />,
    description: "Premium architectural design and planning",
  },
  {
    name: "Construction",
    href: "/services/construction",
    icon: <PenTool className="h-5 w-5" />,
    description: "World-class construction services",
  },
  {
    name: "Interior Design",
    href: "/services/interior-design",
    icon: <Home className="h-5 w-5" />,
    description: "Elegant interior design solutions",
  },
  {
    name: "Engineering",
    href: "/services/engineering",
    icon: <HardHat className="h-5 w-5" />,
    description: "Structural and civil engineering",
  },
  {
    name: "Renovation",
    href: "/services/renovation",
    icon: <Hammer className="h-5 w-5" />,
    description: "Modern renovation and remodeling",
  },
  {
    name: "Project Management",
    href: "/services/project-management",
    icon: <FolderTree className="h-5 w-5" />,
    description: "Comprehensive project management",
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
