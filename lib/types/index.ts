export interface NavItem {
  name: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
}

export interface FooterLinks {
  company: NavItem[];
  services: NavItem[];
  resources: NavItem[];
  legal: NavItem[];
}
