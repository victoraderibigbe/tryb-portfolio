export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  isFeatured: boolean;
}

export interface Service {
  id: number;
  icon: any;
  title: string;
  image: string;
  description: string;
  features: string[];
}

export interface Contact {
  icon: any;
  label: string;
  value: string;
  href: string;
}
