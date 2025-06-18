// Centralized link management for consistent routing

export const EXTERNAL_LINKS = {
  calendly: 'https://calendly.com/choiceinsuranceagency/30-minute-meeting',
  planenroll: 'https://www.planenroll.com/?purl=kOW7ufSy',
  facebook: 'https://www.facebook.com/profile.php?id=100093359186285',
  instagram: 'https://www.instagram.com/choice2day/',
  medicare_gov: 'https://www.medicare.gov',
  phone_toll: 'tel:8774142319',
  phone_local: 'tel:6182785927',
  email: 'mailto:info@choiceinsurancehub.com',
} as const;

export const INTERNAL_ANCHORS = {
  contact_form: '/contact#get-a-quote',
  book_consultation: '/contact#book-a-call',
  services_overview: '/services#overview',
  about_team: '/about#team',
  about_mission: '/about#mission',
} as const;

export const CTA_LINKS = {
  // Primary CTAs
  book_consultation: {
    text: 'Book a Free Consultation',
    href: EXTERNAL_LINKS.calendly,
    external: true,
    primary: true,
  },
  get_quote: {
    text: 'Get a Quote',
    href: EXTERNAL_LINKS.planenroll,
    external: true,
    primary: true,
  },
  contact_us: {
    text: 'Contact Us',
    href: '/contact',
    external: false,
    primary: true,
  },
  
  // Secondary CTAs
  learn_more_services: {
    text: 'Learn More About Our Services',
    href: '/services',
    external: false,
    primary: false,
  },
  read_testimonials: {
    text: 'Read Client Testimonials',
    href: '/testimonials',
    external: false,
    primary: false,
  },
  view_blog: {
    text: 'Read Our Blog',
    href: '/blog',
    external: false,
    primary: false,
  },
  
  // Service-specific CTAs
  medicare_quote: {
    text: 'Get Medicare Quote',
    href: EXTERNAL_LINKS.planenroll,
    external: true,
    primary: true,
  },
  life_insurance_quote: {
    text: 'Get Life Insurance Quote',
    href: INTERNAL_ANCHORS.contact_form,
    external: false,
    primary: true,
  },
  health_insurance_quote: {
    text: 'Get Health Insurance Quote',
    href: INTERNAL_ANCHORS.contact_form,
    external: false,
    primary: true,
  },
} as const;

// Helper function to get CTA link
export function getCTALink(key: keyof typeof CTA_LINKS) {
  return CTA_LINKS[key];
}

// Helper function to get external link
export function getExternalLink(key: keyof typeof EXTERNAL_LINKS) {
  return EXTERNAL_LINKS[key];
}

// Helper function to get internal anchor
export function getInternalAnchor(key: keyof typeof INTERNAL_ANCHORS) {
  return INTERNAL_ANCHORS[key];
}

// Validate internal links (for development)
export function validateInternalLinks() {
  const internalPaths = [
    '/',
    '/about',
    '/services',
    '/contact',
    '/blog',
    '/testimonials',
    '/faq',
    '/services/medicare-advantage',
    '/services/medicare-supplement',
    '/services/life-insurance',
    '/services/health-insurance',
    '/services/final-expense',
    '/services/annuities',
    '/services/hospital-indemnity',
    '/services/cancer-illness',
    '/privacy-policy',
    '/terms-of-service',
    '/hipaa-notice',
    '/accessibility-statement',
  ];

  return internalPaths;
}

const linkManager = {
  EXTERNAL_LINKS,
  INTERNAL_ANCHORS,
  CTA_LINKS,
  getCTALink,
  getExternalLink,
  getInternalAnchor,
  validateInternalLinks,
};

export default linkManager; 