import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-deep-forest-green text-brand-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-brand-teal-blue text-lg font-semibold mb-4">Choice Insurance Agency</h3>
              <p className="text-brand-white/90 text-sm">
                Your trusted partner for health, life, and Medicare insurance solutions. Helping you make informed choices for a secure future.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-brand-white/80 hover:text-brand-teal-blue transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-brand-white/80 hover:text-brand-teal-blue transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="block text-brand-white/80 hover:text-brand-teal-blue transition-colors text-sm">
                Services
              </Link>
              <Link to="/blog" className="block text-brand-white/80 hover:text-brand-teal-blue transition-colors text-sm">
                Blog
              </Link>
              <Link to="/faq" className="block text-brand-white/80 hover:text-brand-teal-blue transition-colors text-sm">
                FAQ
              </Link>
              <Link to="/contact" className="block text-brand-white/80 hover:text-brand-teal-blue transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-brand-white font-semibold mb-4">Our Services</h4>
            <div className="space-y-2">
              <Link to="/services/medicare-supplement" className="block text-brand-white/80 hover:text-brand-teal-blue transition-colors text-sm">
                Medicare Supplement
              </Link>
              <Link to="/services/life-insurance" className="block text-brand-white/80 hover:text-brand-teal-blue transition-colors text-sm">
                Life Insurance
              </Link>
              <Link to="/services/health-insurance" className="block text-brand-white/80 hover:text-brand-teal-blue transition-colors text-sm">
                Health Insurance
              </Link>
              <Link to="/services/final-expense" className="block text-brand-white/80 hover:text-brand-teal-blue transition-colors text-sm">
                Final Expense
              </Link>
              <Link to="/services/annuities" className="block text-brand-white/80 hover:text-brand-teal-blue transition-colors text-sm">
                Annuities
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-brand-white font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div>
                <p className="text-brand-white font-medium">Choice Insurance Agency</p>
                <p className="text-brand-white/80 text-sm">200 E 3rd</p>
                <p className="text-brand-white/80 text-sm">Alton IL 62002</p>
              </div>
              <div>
                <p className="text-brand-white/80 text-sm">Phone: 
                  <a href="tel:8774142319" className="text-brand-teal-blue hover:underline ml-1">
                    (877) 414-2319
                  </a>
                </p>
                <p className="text-brand-white/80 text-sm">Local: 
                  <a href="tel:6182785927" className="text-brand-teal-blue hover:underline ml-1">
                    (618) 278-5927
                  </a>
                </p>
              </div>
              <div>
                <p className="text-brand-white/80 text-sm">Email: 
                  <a href="mailto:info@choiceinsurancehub.com" className="text-brand-teal-blue hover:underline ml-1">
                    info@choiceinsurancehub.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-white/60 text-sm">
              © 2025 Choice Insurance Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-brand-white/60 hover:text-brand-teal-blue transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-brand-white/60 hover:text-brand-teal-blue transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-brand-white/60 hover:text-brand-teal-blue transition-colors text-sm">
                Accessibility
              </Link>
            </div>
          </div>
        </div>

        {/* Large Disclaimer */}
        <div className="mt-12 pt-8 border-t border-brand-white/20">
          <div className="disclaimer-large text-brand-white/80 text-center leading-relaxed">
            Not affiliated with or endorsed by any government agency. This is a solicitation for insurance. By contacting us by one of the methods above you are agreeing to discuss the insurance products listed. We do not offer every plan available in your area. Currently, we represent 10 organizations, which offer 72 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program to get information on all your options.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

