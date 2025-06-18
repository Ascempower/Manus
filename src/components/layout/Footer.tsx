import Image from 'next/image';
import Link from 'next/link';

import { Facebook, Instagram } from 'lucide-react';

import { CompactSitemap } from '@/components/navigation/Sitemap';

export default function Footer({ className = '' }: { className?: string }) {
  const currentYear = new Date().getFullYear();
  const disclaimerText =
    'Not affiliated with or endorsed by any government agency. This is a solicitation for insurance. By contacting us by one of the methods above you are agreeing to discuss the insurance products listed. We do not offer every plan available in your area. Currently, we represent 10 organizations, which offer 72 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program to get information on all your options.';

  return (
    <footer className={`bg-brand-deep-forest-green py-12 text-brand-white ${className}`}>
      <div className="container mx-auto px-4">
        {/* Main footer grid */}
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          {/* Logo and About */}
          <div>
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/assets/logos/main-logo-orange.png"
                alt="Choice Insurance Hub Logo"
                width={150}
                height={50}
                className="h-auto w-[150px]"
                priority
              />
            </Link>
            <p className="mb-4 text-sm text-brand-white/80">
              Your trusted partner for health, life, and Medicare insurance solutions. Helping you
              make informed choices for a secure future.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=100093359186285"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-teal-blue-dark hover:text-brand-white"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={24} aria-hidden="true" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/choice2day/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-teal-blue-dark hover:text-brand-white"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={24} aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Internal Navigation Links */}
          <CompactSitemap />

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-poppins text-lg font-bold text-brand-white">
              Contact Information
            </h3>
            <address className="space-y-2 text-sm not-italic text-brand-white/80">
              <p>Choice Insurance Hub</p>
              <p>
                200 E 3rd
                <br />
                Alton IL 62002
              </p>
              <p>
                Toll:{' '}
                <a href="tel:8774142319" className="hover:text-brand-teal-blue">
                  (877) 414-2319
                </a>
              </p>
              <p>
                Local:{' '}
                <a href="tel:6182785927" className="hover:text-brand-teal-blue">
                  (618) 278-5927
                </a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:info@choiceinsurancehub.com" className="hover:text-brand-teal-blue">
                  info@choiceinsurancehub.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="items-center border-t border-brand-teal-blue/50 pt-8 text-center md:flex md:justify-between">
          <p className="mb-4 text-sm text-brand-white/80 md:mb-0">
            &copy; {currentYear} Choice Insurance Hub. All rights reserved.
          </p>
          <div className="space-x-4 text-sm">
            <Link
              href="/privacy-policy"
              className="text-brand-white/80 transition-colors hover:text-brand-teal-blue"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-brand-white/80 transition-colors hover:text-brand-teal-blue"
            >
              Terms of Service
            </Link>
            <Link
              href="/accessibility-statement"
              className="text-brand-white/80 transition-colors hover:text-brand-teal-blue"
            >
              Accessibility
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 border-t border-brand-teal-blue/50 pt-8 text-center">
          <p className="text-lg text-brand-white/70">{disclaimerText}</p>
        </div>
      </div>
    </footer>
  );
}
