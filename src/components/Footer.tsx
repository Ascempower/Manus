import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const disclaimerText = "Not affiliated with or endorsed by any government agency. This is a solicitation for insurance. By contacting us by one of the methods above you are agreeing to discuss the insurance products listed. We do not offer every plan available in your area. Currently, we represent 10 organizations, which offer 72 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program to get information on all your options.";

  return (
    <footer className="bg-brand-deep-forest-green text-brand-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div>
            <Link href="/" className="mb-4 inline-block">
              <img src="/main-logo-white.png" alt="Choice Insurance Agency Logo" style={{ width: '150px', height: 'auto' }} />
            </Link>
            <p className="text-sm mb-4 text-brand-white/80">
              Your trusted partner for health, life, and Medicare insurance solutions. Helping you make informed choices for a secure future.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-brand-teal-blue hover:text-brand-white">
                <Facebook size={24} />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-brand-teal-blue hover:text-brand-white">
                <Instagram size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-brand-white mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-brand-white/80 hover:text-brand-teal-blue">Home</Link></li>
              <li><Link href="/about" className="text-brand-white/80 hover:text-brand-teal-blue">About Us</Link></li>
              <li><Link href="/services" className="text-brand-white/80 hover:text-brand-teal-blue">Services</Link></li>
              <li><Link href="/blog" className="text-brand-white/80 hover:text-brand-teal-blue">Blog</Link></li>
              <li><Link href="/faq" className="text-brand-white/80 hover:text-brand-teal-blue">FAQ</Link></li>
              <li><Link href="/contact" className="text-brand-white/80 hover:text-brand-teal-blue">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold text-brand-white mb-4 font-poppins">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/medicare-supplement" className="text-brand-white/80 hover:text-brand-teal-blue">Medicare Supplement</Link></li>
              <li><Link href="/services/life-insurance" className="text-brand-white/80 hover:text-brand-teal-blue">Life Insurance</Link></li>
              <li><Link href="/services/health-insurance" className="text-brand-white/80 hover:text-brand-teal-blue">Health Insurance</Link></li>
              <li><Link href="/services/final-expense" className="text-brand-white/80 hover:text-brand-teal-blue">Final Expense</Link></li>
              <li><Link href="/services/annuities" className="text-brand-white/80 hover:text-brand-teal-blue">Annuities</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-brand-white mb-4 font-poppins">Contact Information</h3>
            <address className="not-italic space-y-2 text-sm text-brand-white/80">
              <p>Choice Insurance Agency</p>
              <p>200 E 3rd<br />Alton IL 62002</p>
              <p>Phone: <a href="tel:8772049648" className="hover:text-brand-teal-blue">(877) 204-9648</a></p>
              <p>Email: <a href="mailto:a.campbell@insureyourchoices.com" className="hover:text-brand-teal-blue">a.campbell@insureyourchoices.com</a></p>
            </address>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-brand-teal-blue/50 pt-8 text-center md:flex md:justify-between items-center">
          <p className="text-sm mb-4 md:mb-0 text-brand-white/80">
            &copy; {currentYear} Choice Insurance Agency. All rights reserved.
          </p>
          <div className="space-x-4 text-sm">
            <Link href="/privacy-policy" className="text-brand-white/80 hover:text-brand-teal-blue">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-brand-white/80 hover:text-brand-teal-blue">Terms of Service</Link>
            <Link href="/accessibility-statement" className="text-brand-white/80 hover:text-brand-teal-blue">Accessibility</Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-brand-teal-blue/50 pt-8 mt-8 text-center">
          <p className="text-xs text-brand-white/70">
            {disclaimerText}
          </p>
        </div>
      </div>
    </footer>
  );
}

