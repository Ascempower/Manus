// Simple utility functions for static blog management
export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  category: string;
}

// Static blog post metadata - easy to maintain
// This will be populated with real blog posts in the future
export const blogPostsMetadata: BlogPostMeta[] = [];

// Helper function to get post metadata by slug
export function getPostMetadata(slug: string): BlogPostMeta | undefined {
  return blogPostsMetadata.find(post => post.slug === slug);
}

// Helper function to get all posts sorted by date (newest first)
export function getAllPostsMetadata(): BlogPostMeta[] {
  return [...blogPostsMetadata].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Helper function to get posts by category
export function getPostsByCategory(category: string): BlogPostMeta[] {
  return blogPostsMetadata
    .filter(post => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Helper function to get all categories
export function getAllCategories(): string[] {
  const categories = blogPostsMetadata.map(post => post.category);
  return [...new Set(categories)];
}