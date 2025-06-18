// Type declarations for blog module
export interface Author {
  name: string;
  picture: string;
  toString(): string;
}

export interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt?: string;
    description?: string;
    image?: string;
    category?: string;
    tags?: string[];
    featured?: booleunknown;
    author?: string;
    [key: string]: unknown;
  };
  content: string;
  excerpt?: string;
}

// Server-side blog functions
export function getAllBlogPosts(options?: {
  sortBy?: 'date' | 'title';
  sortOrder?: 'asc' | 'desc';
  featured?: boolean;
  category?: string;
  limit?: number;
}): BlogPost[];

export function getBlogPostsByCategory(category: string): BlogPost[];
export function getFeaturedBlogPosts(limit?: number): BlogPost[];
export function getRecentBlogPosts(limit?: number): BlogPost[];
export function getAllBlogSlugs(): string[];
export function getAllCategories(): string[];
export function getAllTags(): string[];
export function searchBlogPosts(query: string, limit?: number): BlogPost[];
export function getBlogPost(slug: string): BlogPost | null;
export function getRelatedBlogPosts(currentSlug: string, limit?: number): BlogPost[];

// Utility functions
export function formatDate(dateString: string): string;
export function generateExcerpt(content: string, maxLength?: number): string;

// Server-side blog functions
export function getAllBlogPosts(options?: {
  sortBy?: 'date' | 'title';
  sortOrder?: 'asc' | 'desc';
  featured?: boolean;
  category?: string;
  limit?: number;
}): BlogPost[];

export function getBlogPostsByCategory(category: string): BlogPost[];
export function getFeaturedBlogPosts(limit?: number): BlogPost[];
export function getRecentBlogPosts(limit?: number): BlogPost[];
export function getAllBlogSlugs(): string[];
export function getAllCategories(): string[];
export function getAllTags(): string[];
export function searchBlogPosts(query: string, limit?: number): BlogPost[];
export function getBlogPost(slug: string): BlogPost | null;
export function getRelatedBlogPosts(currentSlug: string, limit?: number): BlogPost[];

// Utility functions
export function formatDate(dateString: string): string;
export function generateExcerpt(content: string, maxLength?: number): string;