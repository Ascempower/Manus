import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getServiceLinks, getMainNavLinks, getLinksByCategory } from '@/lib/internal-links';
import { Home, FileText, Shield, Scale } from 'lucide-react';

export default function Sitemap() {
  const serviceLinks = getServiceLinks();
  const mainNavLinks = getMainNavLinks();
  const legalLinks = getLinksByCategory('legal');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <Link href="/" className="block text-brand-black hover:text-brand-deep-forest-green transition-colors">
              Home
            </Link>
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-brand-black hover:text-brand-deep-forest-green transition-colors"
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
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-brand-black hover:text-brand-deep-forest-green transition-colors text-sm"
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
            <Link href="/blog" className="block text-brand-black hover:text-brand-deep-forest-green transition-colors">
              Insurance Blog
            </Link>
            <Link href="/blog/posts/may-2025-health-insurance-changes" className="block text-brand-black hover:text-brand-deep-forest-green transition-colors text-sm">
              Health Insurance Changes 2025
            </Link>
            <Link href="/blog/posts/april-2025-understanding-life-insurance" className="block text-brand-black hover:text-brand-deep-forest-green transition-colors text-sm">
              Understanding Life Insurance
            </Link>
            <Link href="/blog/posts/march-2025-medicare-advantage-vs-supplement" className="block text-brand-black hover:text-brand-deep-forest-green transition-colors text-sm">
              Medicare Advantage vs Supplement
            </Link>
            <Link href="/faq" className="block text-brand-black hover:text-brand-deep-forest-green transition-colors">
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
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-brand-black hover:text-brand-deep-forest-green transition-colors text-sm"
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

// Compact sitemap for footer
export function CompactSitemap() {
  const serviceLinks = getServiceLinks().slice(0, 6); // Show only top 6 services
  const mainNavLinks = getMainNavLinks();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {/* Main Pages */}
      <div>
        <h3 className="font-semibold text-brand-white mb-4">Company</h3>
        <div className="space-y-2">
          <Link href="/" className="block text-brand-white/80 hover:text-brand-white transition-colors text-sm">
            Home
          </Link>
          {mainNavLinks.filter(link => link.href !== '/services').map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-brand-white/80 hover:text-brand-white transition-colors text-sm"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      {/* Top Services */}
      <div>
        <h3 className="font-semibold text-brand-white mb-4">Insurance Services</h3>
        <div className="space-y-2">
          <Link href="/services" className="block text-brand-white/80 hover:text-brand-white transition-colors text-sm font-medium">
            All Services
          </Link>
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-brand-white/80 hover:text-brand-white transition-colors text-sm"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div>
        <h3 className="font-semibold text-brand-white mb-4">Resources</h3>
        <div className="space-y-2">
          <Link href="/blog" className="block text-brand-white/80 hover:text-brand-white transition-colors text-sm">
            Insurance Blog
          </Link>
          <Link href="/faq" className="block text-brand-white/80 hover:text-brand-white transition-colors text-sm">
            FAQ
          </Link>
          <Link href="/testimonials" className="block text-brand-white/80 hover:text-brand-white transition-colors text-sm">
            Testimonials
          </Link>
          <Link href="/contact" className="block text-brand-white/80 hover:text-brand-white transition-colors text-sm">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}