import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
    [key: string]: any;
  };
  content: string;
  excerpt?: string;
}

// Get the blog directory path
export function getBlogDirectory() {
  return path.join(process.cwd(), 'content/blog');
}

// Get all blog post slugs
export function getAllBlogSlugs(): string[] {
  const blogDirectory = getBlogDirectory();
  
  try {
    const filenames = fs.readdirSync(blogDirectory);
    return filenames
      .filter(name => name.endsWith('.md'))
      .map(name => name.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

// Get a single blog post by slug
export function getBlogPost(slug: string): BlogPost | null {
  const blogDirectory = getBlogDirectory();
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      frontmatter: data as BlogPost['frontmatter'],
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
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
  
  const slugs = getAllBlogSlugs();
  let posts = slugs
    .map(slug => getBlogPost(slug))
    .filter((post): post is BlogPost => post !== null);
  
  // Filter by featured status
  if (featured !== undefined) {
    posts = posts.filter(post => post.frontmatter.featured === featured);
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
      const dateA = new Date(a.frontmatter.date || '1970-01-01');
      const dateB = new Date(b.frontmatter.date || '1970-01-01');
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

// Generate excerpt from content
export function generateExcerpt(content: string, length: number = 200): string {
  // Remove markdown formatting for excerpt
  const plainText = content
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`(.*?)`/g, '$1') // Remove inline code
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();
  
  if (plainText.length <= length) {
    return plainText;
  }
  
  return plainText.substring(0, length).replace(/\s+\S*$/, '') + '...';
}

// Format date helper
export function formatDate(dateString: string, options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}): string {
  try {
    return new Date(dateString).toLocaleDateString('en-US', options);
  } catch {
    return dateString;
  }
}

// Get related posts based on tags and category
export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const allPosts = getAllBlogPosts();
  const currentTags = currentPost.frontmatter.tags || [];
  const currentCategory = currentPost.frontmatter.category;
  
  // Filter out the current post and calculate relevance scores
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => {
      let score = 0;
      
      // Same category gets higher score
      if (post.frontmatter.category === currentCategory) {
        score += 10;
      }
      
      // Shared tags get points
      const sharedTags = (post.frontmatter.tags || [])
        .filter(tag => currentTags.includes(tag));
      score += sharedTags.length * 5;
      
      return { post, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
  
  return relatedPosts;
}import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
    [key: string]: any;
  };
  content: string;
  excerpt?: string;
}

// Get the blog directory path
export function getBlogDirectory() {
  return path.join(process.cwd(), 'content/blog');
}

// Get all blog post slugs
export function getAllBlogSlugs(): string[] {
  const blogDirectory = getBlogDirectory();
  
  try {
    const filenames = fs.readdirSync(blogDirectory);
    return filenames
      .filter(name => name.endsWith('.md'))
      .map(name => name.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

// Get a single blog post by slug
export function getBlogPost(slug: string): BlogPost | null {
  const blogDirectory = getBlogDirectory();
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      frontmatter: data as BlogPost['frontmatter'],
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

