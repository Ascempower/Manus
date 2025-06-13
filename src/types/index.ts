export interface Service {
  title: string;
  href: string;
  description: string;
}

export interface NavigationItem {
  href: string;
  label: string;
  hasDropdown?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: string;
}

export interface TestimonialData {
  id: string;
  name: string;
  location?: string;
  rating: number;
  content: string;
  date?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  featured?: boolean;
}export interface Service {
  title: string;
  href: string;
  description: string;
}

export interface NavigationItem {
  href: string;
  label: string;
  hasDropdown?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: string;
}

export interface TestimonialData {
  id: string;
  name: string;
  location?: string;
  rating: number;
  content: string;
  date?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  featured?: boolean;
}