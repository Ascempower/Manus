import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { generateExcerpt } from './blog-utils';

export interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    description?: string;
    date: string;
    author?: string;
    category?: string;
    tags?: string[];
    featured?: boolean;
    image?: string;
    [key: string]: unknown;
  };
  content: string;
  excerpt?: string;
}

const BLOG_POSTS_PATH = path.join(process.cwd(), 'content/blog');

// Utility function to read all blog post files
function getBlogPostFiles(): string[] {
  try {
    if (!fs.existsSync(BLOG_POSTS_PATH)) {
      console.warn(`Blog posts directory not found: ${BLOG_POSTS_PATH}`);
      return [];
    }
    return fs.readdirSync(BLOG_POSTS_PATH).filter(file => file.endsWith('.md'));
  } catch (error) {
    console.error('Error reading blog posts directory:', error);
    return [];
  }
}

// Read and parse a single blog post
function readBlogPost(filename: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_POSTS_PATH, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContents);
    
    const slug = filename.replace(/\.md$/, '');
    
    return {
      slug,
      frontmatter: frontmatter as BlogPost['frontmatter'],
      content,
      excerpt: generateExcerpt(content)
    };
  } catch (error) {
    console.error(`Error reading blog post ${filename}:`, error);
    return null;
  }
}

// Get all blog posts with optional sorting and filtering
export function getAllBlogPosts(options: {
  sortBy?: 'date' | 'title';
  sortOrder?: 'asc' | 'desc';
  featured?: boolean;
  category?: string;
  limit?: number;
} = {}): BlogPost[] {
  const {
    sortBy = 'date',
    sortOrder = 'desc',
    featured,
    category,
    limit
  } = options;

  const files = getBlogPostFiles();
  let posts = files
    .map(readBlogPost)
    .filter((post): post is BlogPost => post !== null);

  // Filter by featured status
  if (featured !== undefined) {
    posts = posts.filter(post => Boolean(post.frontmatter.featured) === featured);
  }

  // Filter by category
  if (category) {
    posts = posts.filter(post => 
      post.frontmatter.category?.toLowerCase() === category.toLowerCase()
    );
  }

  // Sort posts
  posts.sort((a, b) => {
    let comparison = 0;
    
    if (sortBy === 'date') {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      comparison = dateA.getTime() - dateB.getTime();
    } else if (sortBy === 'title') {
      comparison = a.frontmatter.title.localeCompare(b.frontmatter.title);
    }
    
    return sortOrder === 'desc' ? -comparison : comparison;
  });

  // Limit results
  if (limit && limit > 0) {
    posts = posts.slice(0, limit);
  }
  
  return posts;
}

// Get blog posts by category
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts({ category });
}

// Get featured blog posts
export function getFeaturedBlogPosts(limit?: number): BlogPost[] {
  return getAllBlogPosts({ featured: true, limit });
}

// Get recent blog posts
export function getRecentBlogPosts(limit: number = 5): BlogPost[] {
  return getAllBlogPosts({ limit });
}

// Get all blog post slugs (for static generation)
export function getAllBlogSlugs(): string[] {
  const posts = getAllBlogPosts();
  return posts.map(post => post.slug);
}

// Get all unique categories
export function getAllCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = posts
    .map(post => post.frontmatter.category)
    .filter((category): category is string => Boolean(category));
  
  return Array.from(new Set(categories));
}

// Get all unique tags
export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tags = posts
    .flatMap(post => post.frontmatter.tags || [])
    .filter(Boolean);
  
  return Array.from(new Set(tags));
}

// Search blog posts
export function searchBlogPosts(query: string, limit: number = 10): BlogPost[] {
  const posts = getAllBlogPosts();
  const searchTerm = query.toLowerCase();
  
  const matchingPosts = posts.filter(post => {
    const titleMatch = post.frontmatter.title.toLowerCase().includes(searchTerm);
    const contentMatch = post.content.toLowerCase().includes(searchTerm);
    const descriptionMatch = post.frontmatter.description?.toLowerCase().includes(searchTerm);
    const tagMatch = post.frontmatter.tags?.some(tag => 
      tag.toLowerCase().includes(searchTerm)
    );
    
    return titleMatch || contentMatch || descriptionMatch || tagMatch;
  });
  
  return matchingPosts.slice(0, limit);
}

// Get a single blog post by slug
export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filename = `${slug}.md`;
    const filePath = path.join(BLOG_POSTS_PATH, filename);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContents);
    
    return {
      slug,
      frontmatter: frontmatter as BlogPost['frontmatter'],
      content,
      excerpt: generateExcerpt(content)
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

// Get related blog posts based on tags and category
export function getRelatedBlogPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPost(currentSlug);
  if (!currentPost) return [];
  
  const allPosts = getAllBlogPosts();
  const otherPosts = allPosts.filter(post => post.slug !== currentSlug);
  
  // Score posts based on shared tags and category
  const scoredPosts = otherPosts.map(post => {
    let score = 0;
    
    // Same category gets higher score
    if (post.frontmatter.category === currentPost.frontmatter.category) {
      score += 3;
    }
    
    // Shared tags get points
    const currentTags = currentPost.frontmatter.tags || [];
    const postTags = post.frontmatter.tags || [];
    const sharedTags = currentTags.filter(tag => postTags.includes(tag));
    score += sharedTags.length;
    
    return { post, score };
  });
  
  // Return top scored posts
  const relatedPosts = scoredPosts
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
  
  return relatedPosts;
}

// Note: formatDate and generateExcerpt are now exported from blog-utils.ts to avoid duplication