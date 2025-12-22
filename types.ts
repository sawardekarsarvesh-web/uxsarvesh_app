
export interface Project {
  id: string;
  title: string;
  description: string;
  tagline: string;
  image: string;
  category: string;
  link?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export type Theme = 'light' | 'dark';