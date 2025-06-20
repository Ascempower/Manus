/**
 * Blog Images Configuration Constants
 * Centralized, deployment-resistant blog image management
 * This ensures images persist across deployments
 */

// Base64 encoded placeholder images for immediate fallback
export const PLACEHOLDER_IMAGES = {
  // Generic insurance placeholder (1200x630 - optimal for social sharing)
  default: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIHZpZXdCb3g9IjAgMCAxMjAwIDYzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjMwIiBmaWxsPSIjNDI2MTVBII8+CjxwYXRoIGQ9Ik02MDAgMjAwQzY2Mi4xMzIgMjAwIDcxMiAyNDkuODY4IDcxMiAzMTJDNzEyIDM3NC4xMzIgNjYyLjEzMiA0MjQgNjAwIDQyNEM1MzcuODY4IDQyNCA0ODggMzc0LjEzMiA0ODggMzEyQzQ4OCAyNDkuODY4IDUzNy44NjggMjAwIDYwMCAyMDBaIiBmaWxsPSIjREQ4QjY2Ii8+Cjx0ZXh0IHg9IjYwMCIgeT0iNTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjREQ4QjY2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSI2MDAiPkluc3VyYW5jZSBJbnNpZ2h0czwvdGV4dD4KPC9zdmc+',
  
  // Life insurance placeholder
  lifeInsurance: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIHZpZXdCb3g9IjAgMCAxMjAwIDYzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjMwIiBmaWxsPSIjNDI2MTVBII8+CjxwYXRoIGQ9Ik02MDAgMjAwQzY2Mi4xMzIgMjAwIDcxMiAyNDkuODY4IDcxMiAzMTJDNzEyIDM3NC4xMzIgNjYyLjEzMiA0MjQgNjAwIDQyNEM1MzcuODY4IDQyNCA0ODggMzc0LjEzMiA0ODggMzEyQzQ4OCAyNDkuODY4IDUzNy44NjggMjAwIDYwMCAyMDBaIiBmaWxsPSIjREQ4QjY2Ii8+Cjx0ZXh0IHg9IjYwMCIgeT0iNTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjREQ4QjY2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSI2MDAiPkxpZmUgSW5zdXJhbmNlPC90ZXh0Pgo8L3N2Zz4=',
  
  // Medicare placeholder
  medicare: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIHZpZXdCb3g9IjAgMCAxMjAwIDYzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjMwIiBmaWxsPSIjNDI2MTVBII8+CjxwYXRoIGQ9Ik02MDAgMjAwQzY2Mi4xMzIgMjAwIDcxMiAyNDkuODY4IDcxMiAzMTJDNzEyIDM3NC4xMzIgNjYyLjEzMiA0MjQgNjAwIDQyNEM1MzcuODY4IDQyNCA0ODggMzc0LjEzMiA0ODggMzEyQzQ4OCAyNDkuODY4IDUzNy44NjggMjAwIDYwMCAyMDBaIiBmaWxsPSIjREQ4QjY2Ii8+Cjx0ZXh0IHg9IjYwMCIgeT0iNTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjREQ4QjY2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSI2MDAiPk1lZGljYXJlPC90ZXh0Pgo8L3N2Zz4=',
  
  // Health insurance placeholder
  healthInsurance: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIHZpZXdCb3g9IjAgMCAxMjAwIDYzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjMwIiBmaWxsPSIjNDI2MTVBII8+CjxwYXRoIGQ9Ik02MDAgMjAwQzY2Mi4xMzIgMjAwIDcxMiAyNDkuODY4IDcxMiAzMTJDNzEyIDM3NC4xMzIgNjYyLjEzMiA0MjQgNjAwIDQyNEM1MzcuODY4IDQyNCA0ODggMzc0LjEzMiA0ODggMzEyQzQ4OCAyNDkuODY4IDUzNy44NjggMjAwIDYwMCAyMDBaIiBmaWxsPSIjREQ4QjY2Ii8+Cjx0ZXh0IHg9IjYwMCIgeT0iNTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjREQ4QjY2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSI2MDAiPkhlYWx0aCBJbnN1cmFuY2U8L3RleHQ+Cjwvc3ZnPg==',
} as const;

// External CDN URLs for blog images (deployment-resistant)
export const CDN_IMAGES = {
  // Life Insurance Images
  'family-life-insurance-2025.jpg': 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=630&fit=crop&crop=center',
  'term-vs-whole-life-insurance.jpg': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop&crop=center',
  'life-insurance-riders.jpg': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop&crop=center',
  'life-insurance-riders-2025.jpg': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop&crop=center',
  'understanding-life-insurance.jpg': 'https://images.unsplash.com/photo-1554224154-26032fced8bd?w=1200&h=630&fit=crop&crop=center',
  'business-life-insurance-2025.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop&crop=center',

  // Medicare Images
  'medicare-comparison-2025.jpg': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=630&fit=crop&crop=center',
  'medicare-prescription-coverage.jpg': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=630&fit=crop&crop=center',

  // Health Insurance Images
  'health-insurance-changes-2025.jpg': 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=630&fit=crop&crop=center',
  'preventive-care-expansion-2025.jpg': 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=630&fit=crop&crop=center',
  'mental-health-coverage-2025.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=630&fit=crop&crop=center',
  'digital-health-innovation-2025.jpg': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=630&fit=crop&crop=center',
  'telehealth-expansion-2025.jpg': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=630&fit=crop&crop=center',
  'provider-network-flexibility.jpg': 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=630&fit=crop&crop=center',
  'preventive-care-benefits-2025.jpg': 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=630&fit=crop&crop=center',
} as const;

// Local fallback images (if they exist)
export const LOCAL_IMAGES = {
  'family-life-insurance-2025.jpg': '/images/blog/family-life-insurance-2025.jpg',
  'term-vs-whole-life-insurance.jpg': '/images/blog/term-vs-whole-life-insurance.jpg',
  'life-insurance-riders.jpg': '/images/blog/life-insurance-riders.jpg',
  'life-insurance-riders-2025.jpg': '/images/blog/life-insurance-riders.jpg',
  'understanding-life-insurance.jpg': '/images/blog/understanding-life-insurance.jpg',
  'business-life-insurance-2025.jpg': '/images/blog/understanding-life-insurance.jpg',
  'medicare-comparison-2025.jpg': '/images/blog/medicare-comparison-2025.jpg',
  'medicare-prescription-coverage.jpg': '/images/blog/medicare-prescription-coverage.jpg',
  'health-insurance-changes-2025.jpg': '/images/blog/health-insurance-changes-2025.jpg',
  'preventive-care-expansion-2025.jpg': '/images/blog/preventive-care-benefits-2025.jpg',
  'mental-health-coverage-2025.jpg': '/images/blog/health-insurance-changes-2025.jpg',
  'digital-health-innovation-2025.jpg': '/images/blog/telehealth-expansion-2025.jpg',
  'telehealth-expansion-2025.jpg': '/images/blog/telehealth-expansion-2025.jpg',
  'provider-network-flexibility.jpg': '/images/blog/provider-network-flexibility.jpg',
  'preventive-care-benefits-2025.jpg': '/images/blog/preventive-care-benefits-2025.jpg',
} as const;

// Category-based image mapping
export const CATEGORY_IMAGE_MAP = {
  'life-insurance': {
    primary: CDN_IMAGES['family-life-insurance-2025.jpg'],
    fallback: PLACEHOLDER_IMAGES.lifeInsurance,
    local: LOCAL_IMAGES['family-life-insurance-2025.jpg'],
  },
  medicare: {
    primary: CDN_IMAGES['medicare-comparison-2025.jpg'],
    fallback: PLACEHOLDER_IMAGES.medicare,
    local: LOCAL_IMAGES['medicare-comparison-2025.jpg'],
  },
  'health-insurance': {
    primary: CDN_IMAGES['health-insurance-changes-2025.jpg'],
    fallback: PLACEHOLDER_IMAGES.healthInsurance,
    local: LOCAL_IMAGES['health-insurance-changes-2025.jpg'],
  },
  'insurance-tips': {
    primary: CDN_IMAGES['understanding-life-insurance.jpg'],
    fallback: PLACEHOLDER_IMAGES.default,
    local: LOCAL_IMAGES['understanding-life-insurance.jpg'],
  },
  'industry-news': {
    primary: CDN_IMAGES['health-insurance-changes-2025.jpg'],
    fallback: PLACEHOLDER_IMAGES.default,
    local: LOCAL_IMAGES['health-insurance-changes-2025.jpg'],
  },
} as const;

// Alt text mapping for accessibility
export const IMAGE_ALT_TEXTS = {
  'family-life-insurance-2025.jpg': 'Family discussing life insurance options with a financial advisor',
  'term-vs-whole-life-insurance.jpg': 'Comparison chart showing term vs whole life insurance benefits',
  'life-insurance-riders.jpg': 'Life insurance policy riders and additional coverage options',
  'life-insurance-riders-2025.jpg': 'Life insurance policy riders and additional coverage options',
  'understanding-life-insurance.jpg': 'Guide to understanding different life insurance types',
  'business-life-insurance-2025.jpg': 'Business owners discussing key person life insurance',
  'medicare-comparison-2025.jpg': 'Medicare Advantage vs Medicare Supplement comparison chart',
  'medicare-prescription-coverage.jpg': 'Medicare prescription drug coverage options and benefits',
  'health-insurance-changes-2025.jpg': 'Health insurance policy changes and updates for 2025',
  'preventive-care-benefits-2025.jpg': 'Preventive care benefits covered by health insurance',
  'preventive-care-expansion-2025.jpg': 'Expanded preventive care coverage in health insurance plans',
  'mental-health-coverage-2025.jpg': 'Mental health coverage improvements in health insurance',
  'digital-health-innovation-2025.jpg': 'Digital health innovations and telemedicine coverage',
  'telehealth-expansion-2025.jpg': 'Telehealth services expansion in health insurance coverage',
  'provider-network-flexibility.jpg': 'Health insurance provider network flexibility options',
} as const;

/**
 * Image loading strategy configuration
 */
export const IMAGE_LOADING_CONFIG = {
  // Loading strategy priority
  strategy: ['local', 'cdn', 'placeholder'] as const,
  
  // Timeout for image loading attempts
  loadTimeout: 5000, // 5 seconds
  
  // Retry configuration
  maxRetries: 2,
  retryDelay: 1000, // 1 second
  
  // Image optimization settings
  optimization: {
    quality: 85,
    format: 'webp',
    fallbackFormat: 'jpg',
  },
  
  // Lazy loading settings
  lazyLoading: {
    enabled: true,
    rootMargin: '50px',
    threshold: 0.1,
  },
} as const;

/**
 * Get the best available image source for a blog image
 * Uses a fallback strategy: Local -> CDN -> Placeholder
 */
export function getBlogImageSrc(imageName: string, category?: string): string {
  // Extract filename from full path if provided
  const filename = imageName.includes('/') ? imageName.split('/').pop() || imageName : imageName;
  
  // Try to get from CDN first (most reliable)
  if (filename in CDN_IMAGES) {
    return CDN_IMAGES[filename as keyof typeof CDN_IMAGES];
  }
  
  // Try category-based fallback
  if (category && category in CATEGORY_IMAGE_MAP) {
    return CATEGORY_IMAGE_MAP[category as keyof typeof CATEGORY_IMAGE_MAP].primary;
  }
  
  // Ultimate fallback to placeholder
  return PLACEHOLDER_IMAGES.default;
}

/**
 * Get local image path (for preloading or optimization)
 */
export function getLocalImageSrc(imageName: string): string | null {
  const filename = imageName.includes('/') ? imageName.split('/').pop() || imageName : imageName;
  
  if (filename in LOCAL_IMAGES) {
    return LOCAL_IMAGES[filename as keyof typeof LOCAL_IMAGES];
  }
  
  return null;
}

/**
 * Get placeholder image for immediate display
 */
export function getPlaceholderImage(category?: string): string {
  if (category && category in CATEGORY_IMAGE_MAP) {
    return CATEGORY_IMAGE_MAP[category as keyof typeof CATEGORY_IMAGE_MAP].fallback;
  }
  
  return PLACEHOLDER_IMAGES.default;
}

/**
 * Get alt text for blog images
 */
export function getBlogImageAlt(imageName: string, title?: string): string {
  const filename = imageName.includes('/') ? imageName.split('/').pop() || imageName : imageName;
  
  if (filename in IMAGE_ALT_TEXTS) {
    return IMAGE_ALT_TEXTS[filename as keyof typeof IMAGE_ALT_TEXTS];
  }
  
  return `${title || 'Blog post'} - Insurance insights and guidance from Choice Insurance Hub`;
}

/**
 * Get all available image sources for an image (for srcset)
 */
export function getImageSources(imageName: string, category?: string) {
  const filename = imageName.includes('/') ? imageName.split('/').pop() || imageName : imageName;
  
  const sources = {
    local: getLocalImageSrc(filename),
    cdn: filename in CDN_IMAGES ? CDN_IMAGES[filename as keyof typeof CDN_IMAGES] : null,
    placeholder: getPlaceholderImage(category),
  };
  
  return sources;
}

/**
 * Validate if an image name exists in our system
 */
export function validateBlogImage(imageName: string): boolean {
  const filename = imageName.includes('/') ? imageName.split('/').pop() || imageName : imageName;
  return filename in CDN_IMAGES || filename in LOCAL_IMAGES;
}