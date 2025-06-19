/**
 * Blog Image Management System
 * Centralized mapping and fallback system for blog images
 */

// Available blog images mapping
export const BLOG_IMAGES = {
  // Life Insurance Images
  'family-life-insurance-2025.jpg': '/images/blog/family-life-insurance-2025.jpg',
  'term-vs-whole-life-insurance.jpg': '/images/blog/term-vs-whole-life-insurance.jpg',
  'life-insurance-riders-2025.jpg': '/images/blog/life-insurance-riders.jpg', // Map to existing file
  'business-life-insurance-2025.jpg': '/images/blog/understanding-life-insurance.jpg', // Fallback
  'understanding-life-insurance.jpg': '/images/blog/understanding-life-insurance.jpg',

  // Medicare Images
  'medicare-comparison-2025.jpg': '/images/blog/medicare-comparison-2025.jpg',
  'medicare-prescription-coverage.jpg': '/images/blog/medicare-prescription-coverage.jpg',

  // Health Insurance Images
  'health-insurance-changes-2025.jpg': '/images/blog/health-insurance-changes-2025.jpg',
  'preventive-care-expansion-2025.jpg': '/images/blog/preventive-care-benefits-2025.jpg', // Map to existing
  'mental-health-coverage-2025.jpg': '/images/blog/health-insurance-changes-2025.jpg', // Fallback
  'digital-health-innovation-2025.jpg': '/images/blog/telehealth-expansion-2025.jpg', // Map to existing
  'telehealth-expansion-2025.jpg': '/images/blog/telehealth-expansion-2025.jpg',
  'provider-network-flexibility.jpg': '/images/blog/provider-network-flexibility.jpg',
  'preventive-care-benefits-2025.jpg': '/images/blog/preventive-care-benefits-2025.jpg',
} as const;

// Default fallback image for blog posts
export const DEFAULT_BLOG_IMAGE = '/images/og-image.jpg';

// Blog categories and their default images
export const CATEGORY_IMAGES = {
  'life-insurance': '/images/blog/family-life-insurance-2025.jpg',
  medicare: '/images/blog/medicare-comparison-2025.jpg',
  'health-insurance': '/images/blog/health-insurance-changes-2025.jpg',
  'insurance-tips': '/images/og-image.jpg',
  'industry-news': '/images/og-image.jpg',
} as const;

/**
 * Get the correct image path for a blog image
 * @param imageName - The image name from the blog post
 * @param category - Optional category for fallback
 * @returns The correct image path or fallback
 */
export function getBlogImage(imageName: string, category?: string): string {
  // Extract filename from full path if provided
  const filename = imageName.includes('/') ? imageName.split('/').pop() || imageName : imageName;

  // Check if we have a mapping for this image
  if (filename in BLOG_IMAGES) {
    return BLOG_IMAGES[filename as keyof typeof BLOG_IMAGES];
  }

  // Try category fallback
  if (category && category in CATEGORY_IMAGES) {
    return CATEGORY_IMAGES[category as keyof typeof CATEGORY_IMAGES];
  }

  // Return default fallback
  return DEFAULT_BLOG_IMAGE;
}

/**
 * Get alt text for blog images
 * @param imageName - The image name
 * @param title - Blog post title for context
 * @returns Descriptive alt text
 */
export function getBlogImageAlt(imageName: string, title?: string): string {
  const filename = imageName.includes('/') ? imageName.split('/').pop() || imageName : imageName;

  const altTexts: Record<string, string> = {
    'family-life-insurance-2025.jpg':
      'Family discussing life insurance options with a financial advisor',
    'term-vs-whole-life-insurance.jpg':
      'Comparison chart showing term vs whole life insurance benefits',
    'life-insurance-riders.jpg': 'Life insurance policy riders and additional coverage options',
    'life-insurance-riders-2025.jpg':
      'Life insurance policy riders and additional coverage options',
    'understanding-life-insurance.jpg': 'Guide to understanding different life insurance types',
    'business-life-insurance-2025.jpg': 'Business owners discussing key person life insurance',

    'medicare-comparison-2025.jpg': 'Medicare Advantage vs Medicare Supplement comparison chart',
    'medicare-prescription-coverage.jpg':
      'Medicare prescription drug coverage options and benefits',

    'health-insurance-changes-2025.jpg': 'Health insurance policy changes and updates for 2025',
    'preventive-care-benefits-2025.jpg': 'Preventive care benefits covered by health insurance',
    'preventive-care-expansion-2025.jpg':
      'Expanded preventive care coverage in health insurance plans',
    'mental-health-coverage-2025.jpg': 'Mental health coverage improvements in health insurance',
    'digital-health-innovation-2025.jpg': 'Digital health innovations and telemedicine coverage',
    'telehealth-expansion-2025.jpg': 'Telehealth services expansion in health insurance coverage',
    'provider-network-flexibility.jpg': 'Health insurance provider network flexibility options',
  };

  return altTexts[filename] || `${title || 'Blog post'} - Insurance insights and guidance`;
}

/**
 * Validate if a blog image exists
 * @param imagePath - The image path to validate
 * @returns boolean indicating if image exists in our mapping
 */
export function validateBlogImage(imagePath: string): boolean {
  const filename = imagePath.includes('/') ? imagePath.split('/').pop() || imagePath : imagePath;
  return filename in BLOG_IMAGES;
}

/**
 * Get all available blog images
 * @returns Array of all available blog image paths
 */
export function getAllBlogImages(): string[] {
  return Object.values(BLOG_IMAGES);
}

/**
 * Get blog images by category
 * @param category - The category to filter by
 * @returns Array of image paths for the category
 */
export function getBlogImagesByCategory(category: string): string[] {
  const categoryMap: Record<string, string[]> = {
    'life-insurance': [
      BLOG_IMAGES['family-life-insurance-2025.jpg'],
      BLOG_IMAGES['term-vs-whole-life-insurance.jpg'],
      BLOG_IMAGES['life-insurance-riders.jpg'],
      BLOG_IMAGES['understanding-life-insurance.jpg'],
    ],
    medicare: [
      BLOG_IMAGES['medicare-comparison-2025.jpg'],
      BLOG_IMAGES['medicare-prescription-coverage.jpg'],
    ],
    'health-insurance': [
      BLOG_IMAGES['health-insurance-changes-2025.jpg'],
      BLOG_IMAGES['preventive-care-benefits-2025.jpg'],
      BLOG_IMAGES['telehealth-expansion-2025.jpg'],
      BLOG_IMAGES['provider-network-flexibility.jpg'],
    ],
  };

  return categoryMap[category] || [DEFAULT_BLOG_IMAGE];
}
