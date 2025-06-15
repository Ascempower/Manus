type NavItem = {
  href: string;
  label: string;
  hasDropdown: boolean;
};

export const MAIN_NAVIGATION: NavItem[] = [
  { href: "/", label: "Home", hasDropdown: false },
  { href: "/about", label: "About Us", hasDropdown: false },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/testimonials", label: "Testimonials", hasDropdown: false },
  { href: "/faq", label: "FAQ", hasDropdown: false },
  { href: "/contact", label: "Contact Us", hasDropdown: false },
  { href: "/blog", label: "Blog", hasDropdown: false },
];

export const FOOTER_LINKS = {
  quickLinks: MAIN_NAVIGATION.filter(item => !item.hasDropdown).map(item => ({
    href: item.href,
    label: item.label,
  })),
  services: [
    { href: "/services/medicare-supplement", label: "Medicare Supplement" },
    { href: "/services/hospital-indemnity", label: "Hospital Indemnity" },
    { href: "/services/cancer-illness", label: "Cancer & Illness" },
    { href: "/services/medicare-advantage", label: "Medicare Advantage" },
    { href: "/services/life-insurance", label: "Life Insurance" },
    { href: "/services/final-expense", label: "Final Expense" },
    { href: "/services/annuities", label: "Annuities" },
    { href: "/services/health-insurance", label: "Health Insurance" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/accessibility-statement", label: "Accessibility Statement" },
  ],
} as const;