"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { getServiceLinks, getMainNavLinks, type InternalLink } from '@/lib/internal-links';
import { cn } from '@/lib/utils';

interface InternalNavigationProps {
  className?: string;
  variant?: 'header' | 'sidebar' | 'footer';
}

export default function InternalNavigation({ 
  className = '', 
  variant = 'header' 
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
        'transition-colors duration-200 font-medium',
        isActivePath(link.href)
          ? 'text-brand-deep-forest-green'
          : 'text-brand-black hover:text-brand-deep-forest-green',
        mobile && 'block py-2 px-4 text-lg'
      )}
      onClick={() => mobile && setMobileMenuOpen(false)}
    >
      {link.text}
    </Link>
  );

  const ServiceDropdown = ({ mobile = false }: { mobile?: boolean }) => {
    if (mobile) {
      return (
        <div className="border-t border-brand-teal-blue/20 pt-4 mt-4">
          <h3 className="px-4 py-2 font-semibold text-brand-deep-forest-green">
            Insurance Services
          </h3>
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 px-6 text-brand-black hover:text-brand-deep-forest-green hover:bg-brand-teal-blue/10 transition-colors duration-200"
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
          {serviceLinks.map((link) => (
            <DropdownMenuItem key={link.href} asChild>
              <Link href={link.href} className="flex flex-col items-start">
                <span className="font-medium">{link.text}</span>
                {link.description && (
                  <span className="text-xs text-brand-black/60 mt-1">
                    {link.description}
                  </span>
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
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}>
        {/* Main Pages */}
        <div>
          <h3 className="font-semibold text-brand-white mb-4">Company</h3>
          <div className="space-y-2">
            {mainNavLinks.filter(link => link.href !== '/services').map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-brand-white/80 hover:text-brand-white transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-brand-white mb-4">Insurance Services</h3>
          <div className="space-y-2">
            {serviceLinks.slice(0, 6).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-brand-white/80 hover:text-brand-white transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="font-semibold text-brand-white mb-4">Additional Services</h3>
          <div className="space-y-2">
            {serviceLinks.slice(6).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-brand-white/80 hover:text-brand-white transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block text-brand-white/80 hover:text-brand-white transition-colors duration-200"
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
      <div className="hidden md:flex items-center space-x-8">
        {mainNavLinks.map((link) => {
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
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-brand-white border-t border-brand-teal-blue/20 shadow-lg z-50">
            <div className="container mx-auto px-4 py-4">
              {mainNavLinks.filter(link => link.href !== '/services').map((link) => (
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