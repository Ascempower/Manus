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
export const blogPostsMetadata: BlogPostMeta[] = [
  {
    slug: 'may-2025-health-insurance-changes',
    title: 'Key Health Insurance Changes to Watch for in 2025',
    date: 'May 7, 2025',
    description: 'Explore major health insurance developments in 2025 including telehealth expansion, preventive care benefits, prescription drug reforms, and mental health coverage improvements.',
    coverImage: '/images/blog/health-insurance-changes-2025.jpg',
    category: 'Health Insurance',
  },
  {
    slug: 'april-2025-understanding-life-insurance',
    title: 'Understanding Life Insurance Options in 2025: A Complete Guide',
    date: 'April 3, 2025',
    description: 'Explore life insurance options for 2025 including term vs. whole life, policy riders, and how to choose the right coverage for your family\'s financial security.',
    coverImage: '/images/blog/family-life-insurance-2025.jpg',
    category: 'Life Insurance',
  },
  {
    slug: 'march-2025-medicare-advantage-vs-supplement',
    title: 'Medicare Advantage vs. Medicare Supplement: Which is Right for You in 2025?',
    date: 'March 5, 2025',
    description: 'Compare Medicare Advantage and Medicare Supplement plans for 2025. Learn about costs, provider networks, prescription coverage, and which option might be best for your healthcare needs.',
    coverImage: '/images/blog/medicare-comparison-2025.jpg',
    category: 'Medicare',
  },
];

// Helper function to get post metadata by slug
export function getPostMetadata(slug: string): BlogPostMeta | undefined {
  return blogPostsMetadata.find(post => post.slug === slug);
}

// Helper function to get all posts sorted by date (newest first)
export function getAllPostsMetadata(): BlogPostMeta[] {
  return blogPostsMetadata.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}// Simple utility functions for static blog management
export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  category: string;
}

// Static blog post metadata - easy to maintain
export const blogPostsMetadata: BlogPostMeta[] = [
  {
    slug: 'may-2025-health-insurance-changes',
    title: 'Key Health Insurance Changes to Watch for in 2025',
    date: 'May 7, 2025',
    description: 'Explore major health insurance developments in 2025 including telehealth expansion, preventive care benefits, prescription drug reforms, and mental health coverage improvements.',
    coverImage: '/images/blog/health-insurance-changes-2025.jpg',
    category: 'Health Insurance',
  },
  {
    slug: 'april-2025-understanding-life-insurance',
    title: 'Understanding Life Insurance Options in 2025: A Complete Guide',
    date: 'April 3, 2025',
    description: 'Explore life insurance options for 2025 including term vs. whole life, policy riders, and how to choose the right coverage for your family\'s financial security.',
    coverImage: '/images/blog/family-life-insurance-2025.jpg',
    category: 'Life Insurance',
  },
  {
    slug: 'march-2025-medicare-advantage-vs-supplement',
    title: 'Medicare Advantage vs. Medicare Supplement: Which is Right for You in 2025?',
    date: 'March 5, 2025',
    description: 'Compare Medicare Advantage and Medicare Supplement plans for 2025. Learn about costs, provider networks, prescription coverage, and which option might be best for your healthcare needs.',
    coverImage: '/images/blog/medicare-comparison-2025.jpg',
    category: 'Medicare',
  },
];

// Helper function to get post metadata by slug
export function getPostMetadata(slug: string): BlogPostMeta | undefined {
  return blogPostsMetadata.find(post => post.slug === slug);
}

// Helper function to get all posts sorted by date (newest first)
export function getAllPostsMetadata(): BlogPostMeta[] {
  return blogPostsMetadata.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}