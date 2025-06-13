export const MAIN_NAVIGATION = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
  { href: "/blog", label: "Blog" },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
  ],
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