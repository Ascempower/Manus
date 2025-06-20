/**
 * Blog Image Management System
 * DEPRECATED: Use src/constants/blog-images.ts for new robust system
 * This file is kept for backward compatibility - all functions re-exported from constants
 */

// Re-export everything from the new robust system
export {
  CDN_IMAGES, getBlogImageAlt, getBlogImageSrc, getImageSources,
  getPlaceholderImage, IMAGE_ALT_TEXTS,
  IMAGE_LOADING_CONFIG, LOCAL_IMAGES, PLACEHOLDER_IMAGES, validateBlogImage
} from '@/constants/blog-images';

// Import for legacy alias
import { getBlogImageSrc } from '@/constants/blog-images';

// Legacy constants for backward compatibility
export const DEFAULT_BLOG_IMAGE = '/images/blog/default-blog-image.jpg';

// Legacy function aliases
export const getBlogImage = getBlogImageSrc;