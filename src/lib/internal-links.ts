// Internal linking system for SEO optimization

export interface InternalLink {
  href: string;
  text: string;
  description?: string;
  category: 'service' | 'page' | 'blog' | 'legal';
  keywords?: string[];
  priority: 'high' | 'medium' | 'low';
}

export const INTERNAL_LINKS: Record<string, InternalLink> = {
  // Service Pages - High Priority
  medicare_advantage: {
    href: '/services/medicare-advantage',
    text: 'Medicare Advantage Plans',
    description: 'Comprehensive Medicare Advantage coverage options',
    category: 'service',
    keywords: ['medicare advantage', 'medicare plans', 'health insurance'],
    priority: 'high',
  },
  medicare_supplement: {
    href: '/services/medicare-supplement',
    text: 'Medicare Supplement Insurance',
    description: 'Medigap policies to cover Medicare gaps',
    category: 'service',
    keywords: ['medicare supplement', 'medigap', 'medicare coverage'],
    priority: 'high',
  },
  life_insurance: {
    href: '/services/life-insurance',
    text: 'Life Insurance',
    description: 'Term and permanent life insurance solutions',
    category: 'service',
    keywords: ['life insurance', 'term life', 'permanent life'],
    priority: 'high',
  },
  health_insurance: {
    href: '/services/health-insurance',
    text: 'Health Insurance',
    description: 'Individual and family health insurance plans',
    category: 'service',
    keywords: ['health insurance', 'medical coverage', 'health plans'],
    priority: 'high',
  },
  final_expense: {
    href: '/services/final-expense',
    text: 'Final Expense Insurance',
    description: 'Burial and funeral expense coverage',
    category: 'service',
    keywords: ['final expense', 'burial insurance', 'funeral coverage'],
    priority: 'high',
  },
  annuities: {
    href: '/services/annuities',
    text: 'Annuities',
    description: 'Retirement income and investment solutions',
    category: 'service',
    keywords: ['annuities', 'retirement income', 'investment'],
    priority: 'high',
  },
  hospital_indemnity: {
    href: '/services/hospital-indemnity',
    text: 'Hospital Indemnity Insurance',
    description: 'Coverage for hospital stays and medical expenses',
    category: 'service',
    keywords: ['hospital indemnity', 'hospital insurance', 'medical coverage'],
    priority: 'medium',
  },
  cancer_illness: {
    href: '/services/cancer-illness',
    text: 'Cancer & Critical Illness Insurance',
    description: 'Protection against cancer and critical illness costs',
    category: 'service',
    keywords: ['cancer insurance', 'critical illness', 'medical protection'],
    priority: 'medium',
  },

  // Main Pages - High Priority
  about: {
    href: '/about',
    text: 'About Choice Insurance Hub',
    description: 'Learn about our insurance agency and expertise',
    category: 'page',
    keywords: ['about us', 'insurance agency', 'insurance experts'],
    priority: 'high',
  },
  contact: {
    href: '/contact',
    text: 'Contact Us',
    description: 'Get in touch for insurance quotes and consultations',
    category: 'page',
    keywords: ['contact', 'insurance quote', 'consultation'],
    priority: 'high',
  },
  services: {
    href: '/services',
    text: 'Insurance Services',
    description: 'Complete overview of our insurance offerings',
    category: 'page',
    keywords: ['insurance services', 'insurance types', 'coverage options'],
    priority: 'high',
  },
  testimonials: {
    href: '/testimonials',
    text: 'Client Testimonials',
    description: 'Read what our satisfied clients have to say',
    category: 'page',
    keywords: ['testimonials', 'client reviews', 'customer feedback'],
    priority: 'medium',
  },
  faq: {
    href: '/faq',
    text: 'Frequently Asked Questions',
    description: 'Common questions about insurance coverage',
    category: 'page',
    keywords: ['faq', 'insurance questions', 'help'],
    priority: 'medium',
  },

  // Blog Posts - Medium Priority
  blog: {
    href: '/blog',
    text: 'Insurance Blog',
    description: 'Latest insights and tips on insurance',
    category: 'blog',
    keywords: ['insurance blog', 'insurance tips', 'insurance news'],
    priority: 'medium',
  },
  health_insurance_changes: {
    href: '/blog/posts/may-2025-health-insurance-changes',
    text: 'Health Insurance Changes 2025',
    description: 'Important updates to health insurance for 2025',
    category: 'blog',
    keywords: ['health insurance 2025', 'insurance changes', 'health coverage updates'],
    priority: 'medium',
  },
  understanding_life_insurance: {
    href: '/blog/posts/april-2025-understanding-life-insurance',
    text: 'Understanding Life Insurance',
    description: 'Complete guide to life insurance options',
    category: 'blog',
    keywords: ['life insurance guide', 'life insurance types', 'life coverage'],
    priority: 'medium',
  },
  medicare_comparison: {
    href: '/blog/posts/march-2025-medicare-advantage-vs-supplement',
    text: 'Medicare Advantage vs Supplement',
    description: 'Comparing Medicare Advantage and Supplement plans',
    category: 'blog',
    keywords: ['medicare comparison', 'medicare advantage vs supplement', 'medicare options'],
    priority: 'medium',
  },

  // Legal Pages - Low Priority
  privacy_policy: {
    href: '/privacy-policy',
    text: 'Privacy Policy',
    description: 'Our commitment to protecting your privacy',
    category: 'legal',
    keywords: ['privacy policy', 'data protection', 'privacy'],
    priority: 'low',
  },
  terms_of_service: {
    href: '/terms-of-service',
    text: 'Terms of Service',
    description: 'Terms and conditions for using our services',
    category: 'legal',
    keywords: ['terms of service', 'terms and conditions', 'legal'],
    priority: 'low',
  },
  hipaa_notice: {
    href: '/hipaa-notice',
    text: 'HIPAA Notice',
    description: 'Healthcare privacy and security information',
    category: 'legal',
    keywords: ['hipaa notice', 'healthcare privacy', 'medical privacy'],
    priority: 'low',
  },
  accessibility_statement: {
    href: '/accessibility-statement',
    text: 'Accessibility Statement',
    description: 'Our commitment to web accessibility',
    category: 'legal',
    keywords: ['accessibility', 'web accessibility', 'ada compliance'],
    priority: 'low',
  },
};

// Get links by category
export function getLinksByCategory(category: InternalLink['category']): InternalLink[] {
  return Object.values(INTERNAL_LINKS).filter(link => link.category === category);
}

// Get links by priority
export function getLinksByPriority(priority: InternalLink['priority']): InternalLink[] {
  return Object.values(INTERNAL_LINKS).filter(link => link.priority === priority);
}

// Get related links based on keywords
export function getRelatedLinks(keywords: string[], currentPath?: string, limit = 5): InternalLink[] {
  const related = Object.values(INTERNAL_LINKS)
    .filter(link => {
      // Exclude current page
      if (currentPath && link.href === currentPath) return false;
      
      // Check if any keywords match
      return link.keywords?.some(keyword => 
        keywords.some(k => keyword.toLowerCase().includes(k.toLowerCase()))
      );
    })
    .sort((a, b) => {
      // Sort by priority (high > medium > low)
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    })
    .slice(0, limit);

  return related;
}

// Get service links for navigation
export function getServiceLinks(): InternalLink[] {
  return getLinksByCategory('service').sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });
}

// Get main navigation links
export function getMainNavLinks(): InternalLink[] {
  return [
    INTERNAL_LINKS.about,
    INTERNAL_LINKS.services,
    INTERNAL_LINKS.blog,
    INTERNAL_LINKS.testimonials,
    INTERNAL_LINKS.contact,
  ];
}

// Get footer links
export function getFooterLinks(): {
  services: InternalLink[];
  pages: InternalLink[];
  legal: InternalLink[];
} {
  return {
    services: getServiceLinks(),
    pages: [
      INTERNAL_LINKS.about,
      INTERNAL_LINKS.testimonials,
      INTERNAL_LINKS.faq,
      INTERNAL_LINKS.blog,
    ],
    legal: getLinksByCategory('legal'),
  };
}

// Generate contextual links for content
export function getContextualLinks(content: string, currentPath?: string): InternalLink[] {
  const words = content.toLowerCase().split(/\s+/);
  const relevantKeywords: string[] = [];

  // Extract relevant keywords from content
  Object.values(INTERNAL_LINKS).forEach(link => {
    link.keywords?.forEach(keyword => {
      if (words.some(word => word.includes(keyword.toLowerCase()))) {
        relevantKeywords.push(keyword);
      }
    });
  });

  return getRelatedLinks(relevantKeywords, currentPath, 3);
}

const internalLinksUtils = {
  INTERNAL_LINKS,
  getLinksByCategory,
  getLinksByPriority,
  getRelatedLinks,
  getServiceLinks,
  getMainNavLinks,
  getFooterLinks,
  getContextualLinks,
};

export default internalLinksUtils;