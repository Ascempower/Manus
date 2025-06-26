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
export const blogPostsMetadata: BlogPostMeta[] = [
  {
    slug: 'march-2025-medicare-advantage-vs-supplement',
    title: 'Medicare Advantage vs. Medicare Supplement: Which is Right for You?',
    date: '2025-03-15',
    description: 'A comprehensive comparison of Medicare Advantage and Medicare Supplement plans to help you make an informed decision about your healthcare coverage.',
    coverImage: '/images/blog/medicare-comparison-2025.jpg',
    category: 'Medicare',
  },
  {
    slug: 'april-2025-understanding-life-insurance',
    title: 'Understanding the Different Types of Life Insurance Policies',
    date: '2025-04-10',
    description: 'Explore the differences between term life, whole life, and universal life insurance to find the best protection for your loved ones.',
    coverImage: '/images/blog/term-vs-whole-life-insurance.jpg',
    category: 'Life Insurance',
  },
  {
    slug: 'may-2025-health-insurance-changes',
    title: 'Important Health Insurance Changes for 2025',
    date: '2025-05-05',
    description: 'Stay informed about the latest changes to health insurance regulations and how they might affect your coverage and benefits.',
    coverImage: '/images/blog/health-insurance-changes-2025.jpg',
    category: 'Health Insurance',
  },
];

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