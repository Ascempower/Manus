// Client-safe utility functions for blog functionality
// These functions don't use Node.js modules and can be used in both server and client components

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

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
}

export function generateExcerpt(content: string, maxLength: number = 160): string {
  // Remove markdown syntax and get plain text
  const plainText = content
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links, keep text
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`(.*?)`/g, '$1') // Remove inline code
    .replace(/^\s*[-*+]\s+/gm, '') // Remove list markers
    .replace(/^\s*\d+\.\s+/gm, '') // Remove numbered list markers
    .replace(/\n\s*\n/g, ' ') // Replace multiple newlines with space
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  // Find the last complete word within the limit
  const truncated = plainText.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex) + '...';
  }
  
  return truncated + '...';
}

export function sortBlogPosts(
  posts: BlogPost[], 
  sortBy: 'date' | 'title' = 'date', 
  sortOrder: 'asc' | 'desc' = 'desc'
): BlogPost[] {
  return [...posts].sort((a, b) => {
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
}

export function filterBlogPosts(
  posts: BlogPost[],
  filters: {
    featured?: boolean;
    category?: string;
    tags?: string[];
    limit?: number;
  }
): BlogPost[] {
  let filteredPosts = [...posts];

  // Filter by featured status
  if (filters.featured !== undefined) {
    filteredPosts = filteredPosts.filter(post => 
      Boolean(post.frontmatter.featured) === filters.featured
    );
  }

  // Filter by category
  if (filters.category) {
    filteredPosts = filteredPosts.filter(post => 
      post.frontmatter.category?.toLowerCase() === filters.category?.toLowerCase()
    );
  }

  // Filter by tags
  if (filters.tags && filters.tags.length > 0) {
    filteredPosts = filteredPosts.filter(post => 
      filters.tags?.some(tag => 
        post.frontmatter.tags?.some(postTag => 
          postTag.toLowerCase() === tag.toLowerCase()
        )
      )
    );
  }

  // Limit results
  if (filters.limit && filters.limit > 0) {
    filteredPosts = filteredPosts.slice(0, filters.limit);
  }

  return filteredPosts;
}

export function searchBlogPosts(posts: BlogPost[], query: string): BlogPost[] {
  const searchTerm = query.toLowerCase();
  
  return posts.filter(post => {
    const titleMatch = post.frontmatter.title.toLowerCase().includes(searchTerm);
    const contentMatch = post.content.toLowerCase().includes(searchTerm);
    const descriptionMatch = post.frontmatter.description?.toLowerCase().includes(searchTerm);
    const tagMatch = post.frontmatter.tags?.some(tag => 
      tag.toLowerCase().includes(searchTerm)
    );
    
    return titleMatch || contentMatch || descriptionMatch || tagMatch;
  });
}

export function getUniqueCategories(posts: BlogPost[]): string[] {
  const categories = posts
    .map(post => post.frontmatter.category)
    .filter((category): category is string => Boolean(category));
  
  return Array.from(new Set(categories));
}

export function getUniqueTags(posts: BlogPost[]): string[] {
  const tags = posts
    .flatMap(post => post.frontmatter.tags || [])
    .filter(Boolean);
  
  return Array.from(new Set(tags));
}

export function getRelatedPosts(
  posts: BlogPost[], 
  currentPost: BlogPost, 
  limit: number = 3
): BlogPost[] {
  const otherPosts = posts.filter(post => post.slug !== currentPost.slug);
  
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
  return scoredPosts
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
}