import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({url: 'https://calendly.com/choiceinsurancehub'});
  } else {
    window.open('https://calendly.com/choiceinsurancehub', '_blank');
  }
  return false;
};

const Header = () => {
  return (
    <header className="bg-brand-deep-forest-green text-brand-white py-4">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-brand-white hover:text-brand-teal-blue transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-brand-white hover:text-brand-teal-blue transition-colors">
              About Us
            </Link>
            <button className="text-brand-white hover:text-brand-teal-blue transition-colors">
              Services
            </button>
            <Link to="/testimonials" className="text-brand-white hover:text-brand-teal-blue transition-colors">
              Testimonials
            </Link>
            <Link to="/faq" className="text-brand-white hover:text-brand-teal-blue transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-brand-white hover:text-brand-teal-blue transition-colors">
              Contact Us
            </Link>
            <Link to="/blog" className="text-brand-white hover:text-brand-teal-blue transition-colors">
              Blog
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black">
              Quote Now
            </Button>
            <Button 
              onClick={openCalendly}
              className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black"
            >
              Book a Free Consultation
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

