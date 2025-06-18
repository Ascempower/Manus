'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ChevronDown, Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { type InternalLink, getMainNavLinks, getServiceLinks } from '@/lib/internal-links';
import { cn } from '@/lib/utils';

interface InternalNavigationProps {
  className?: string;
  variant?: 'header' | 'sidebar' | 'footer';
}

export default function InternalNavigation({
  className = '',
  variant = 'header',
}: InternalNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const serviceLinks = getServiceLinks();
  const mainNavLinks = getMainNavLinks();

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const NavLink = ({ link, mobile = false }: { link: InternalLink; mobile?: boolean }) => (
    <Link
      href={link.href}
      className={cn(
        'font-medium transition-colors duration-200',
        isActivePath(link.href)
          ? 'text-brand-deep-forest-green'
          : 'text-brand-black hover:text-brand-deep-forest-green',
        mobile && 'block px-4 py-2 text-lg'
      )}
      onClick={() => mobile && setMobileMenuOpen(false)}
    >
      {link.text}
    </Link>
  );

  const ServiceDropdown = ({ mobile = false }: { mobile?: boolean }) => {
    if (mobile) {
      return (
        <div className="mt-4 border-t border-brand-teal-blue/20 pt-4">
          <h3 className="px-4 py-2 font-semibold text-brand-deep-forest-green">
            Insurance Services
          </h3>
          {serviceLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-6 py-2 text-brand-black transition-colors duration-200 hover:bg-brand-teal-blue/10 hover:text-brand-deep-forest-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      );
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              'font-medium transition-colors duration-200',
              isActivePath('/services')
                ? 'text-brand-deep-forest-green'
                : 'text-brand-black hover:text-brand-deep-forest-green'
            )}
          >
            Insurance Services
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-64">
          <DropdownMenuItem asChild>
            <Link href="/services" className="font-medium">
              All Services
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {serviceLinks.map(link => (
            <DropdownMenuItem key={link.href} asChild>
              <Link href={link.href} className="flex flex-col items-start">
                <span className="font-medium">{link.text}</span>
                {link.description && (
                  <span className="mt-1 text-xs text-brand-black/60">{link.description}</span>
                )}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  if (variant === 'footer') {
    return (
      <div className={`grid grid-cols-1 gap-8 md:grid-cols-3 ${className}`}>
        {/* Main Pages */}
        <div>
          <h3 className="mb-4 font-semibold text-brand-white">Company</h3>
          <div className="space-y-2">
            {mainNavLinks
              .filter(link => link.href !== '/services')
              .map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-brand-white/80 transition-colors duration-200 hover:text-brand-white"
                >
                  {link.text}
                </Link>
              ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-4 font-semibold text-brand-white">Insurance Services</h3>
          <div className="space-y-2">
            {serviceLinks.slice(0, 6).map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-brand-white/80 transition-colors duration-200 hover:text-brand-white"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="mb-4 font-semibold text-brand-white">Additional Services</h3>
          <div className="space-y-2">
            {serviceLinks.slice(6).map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-brand-white/80 transition-colors duration-200 hover:text-brand-white"
              >
                {link.text}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block text-brand-white/80 transition-colors duration-200 hover:text-brand-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <nav className={className}>
      {/* Desktop Navigation */}
      <div className="hidden items-center space-x-8 md:flex">
        {mainNavLinks.map(link => {
          if (link.href === '/services') {
            return <ServiceDropdown key={link.href} />;
          }
          return <NavLink key={link.href} link={link} />;
        })}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full z-50 border-t border-brand-teal-blue/20 bg-brand-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
              {mainNavLinks
                .filter(link => link.href !== '/services')
                .map(link => (
                  <NavLink key={link.href} link={link} mobile />
                ))}
              <ServiceDropdown mobile />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
