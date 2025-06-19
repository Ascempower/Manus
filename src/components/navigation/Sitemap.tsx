import Link from 'next/link';

import { FileText, Home, Scale, Shield } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getLinksByCategory, getMainNavLinks, getServiceLinks } from '@/lib/internal-links';

export default function Sitemap() {
  const serviceLinks = getServiceLinks();
  const mainNavLinks = getMainNavLinks();
  const legalLinks = getLinksByCategory('legal');

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Main Pages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-brand-deep-forest-green">
            <Home className="h-5 w-5" />
            Main Pages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Link
              href="/"
              className="block text-brand-black transition-colors hover:text-brand-deep-forest-green"
            >
              Home
            </Link>
            {mainNavLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-brand-black transition-colors hover:text-brand-deep-forest-green"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Insurance Services */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-brand-deep-forest-green">
            <Shield className="h-5 w-5" />
            Insurance Services
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {serviceLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-brand-black transition-colors hover:text-brand-deep-forest-green"
                title={link.description}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Blog & Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-brand-deep-forest-green">
            <FileText className="h-5 w-5" />
            Blog & Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Link
              href="/blog"
              className="block text-brand-black transition-colors hover:text-brand-deep-forest-green"
            >
              Insurance Blog
            </Link>
            <Link
              href="/blog/posts/may-2025-health-insurance-changes"
              className="block text-sm text-brand-black transition-colors hover:text-brand-deep-forest-green"
            >
              Health Insurance Changes 2025
            </Link>
            <Link
              href="/blog/posts/april-2025-understanding-life-insurance"
              className="block text-sm text-brand-black transition-colors hover:text-brand-deep-forest-green"
            >
              Understanding Life Insurance
            </Link>
            <Link
              href="/blog/posts/march-2025-medicare-advantage-vs-supplement"
              className="block text-sm text-brand-black transition-colors hover:text-brand-deep-forest-green"
            >
              Medicare Advantage vs Supplement
            </Link>
            <Link
              href="/faq"
              className="block text-brand-black transition-colors hover:text-brand-deep-forest-green"
            >
              Frequently Asked Questions
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Legal & Compliance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-brand-deep-forest-green">
            <Scale className="h-5 w-5" />
            Legal & Compliance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {legalLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-brand-black transition-colors hover:text-brand-deep-forest-green"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Compact sitemap for footer - designed to fit in 2 columns of a 4-column footer grid
export function CompactSitemap() {
  const serviceLinks = getServiceLinks().slice(0, 5); // Show only top 5 services
  const mainNavLinks = getMainNavLinks();

  return (
    <>
      {/* Company Links - Column 2 */}
      <div>
        <h3 className="mb-4 font-poppins text-lg font-bold text-brand-white">Company</h3>
        <div className="space-y-2">
          <Link
            href="/"
            className="block text-sm text-brand-white/80 transition-colors hover:text-brand-white"
          >
            Home
          </Link>
          {mainNavLinks
            .filter(link => link.href !== '/services')
            .map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-brand-white/80 transition-colors hover:text-brand-white"
              >
                {link.text}
              </Link>
            ))}
          <Link
            href="/blog"
            className="block text-sm text-brand-white/80 transition-colors hover:text-brand-white"
          >
            Insurance Blog
          </Link>
        </div>
      </div>

      {/* Services & Resources - Column 3 */}
      <div>
        <h3 className="mb-4 font-poppins text-lg font-bold text-brand-white">
          Services & Resources
        </h3>
        <div className="space-y-2">
          <Link
            href="/services"
            className="block text-sm font-medium text-brand-white/80 transition-colors hover:text-brand-white"
          >
            All Services
          </Link>
          {serviceLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm text-brand-white/80 transition-colors hover:text-brand-white"
            >
              {link.text}
            </Link>
          ))}
          <Link
            href="/faq"
            className="block text-sm text-brand-white/80 transition-colors hover:text-brand-white"
          >
            FAQ
          </Link>
          <Link
            href="/testimonials"
            className="block text-sm text-brand-white/80 transition-colors hover:text-brand-white"
          >
            Testimonials
          </Link>
        </div>
      </div>
    </>
  );
}
