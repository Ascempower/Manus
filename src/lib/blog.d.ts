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
    excerpt: string;
    description?: string;
    image?: string;
    category?: string;
    tags?: string[];
    author: Author | string;
  };
  content: string;
}

export function getAllBlogSlugs(): string[];
export function getBlogPost(slug: string): BlogPost | null;
export function formatDate(date: string): string;