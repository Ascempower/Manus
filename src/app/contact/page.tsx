""
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, CalendarDays } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - Choice Insurance Agency',
  description: 'Get in touch with Choice Insurance Agency for expert advice on Medicare, life, and health insurance. Book a consultation or request a quote today.',
};

export default function ContactPage() {
  return (
    <div className="bg-brand-white text-brand-black">
      {/* Page Header */}
      <section className="py-12 bg-brand-teal-blue/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-deep-forest-green font-poppins">Contact Choice Insurance Agency</h1>
          <p className="text-lg text-brand-black/80 mt-4 max-w-3xl mx-auto">
            We are here to help you navigate your insurance options and find the best coverage for your needs. Reach out to us through any of the methods below, or use the form to send us a message directly.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12 mb-16">
            {/* Contact Form Section */}
            <div className="bg-brand-teal-blue/10 p-8 rounded-lg shadow-md" id="get-a-quote">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-deep-forest-green font-poppins mb-6">Send Us a Message</h2>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfdGFGTjJ6R8Gv0YxYxwQxCNpN9fNn7WZP7F-EjLxUGrQ7Y5A/viewform?embedded=true" 
                width="100%" 
                height={1200} 
                frameBorder={0} 
                style={{ margin: 0 }}
              > 
                Loading… 
              </iframe>
            </div>

            {/* Contact Information Section */}
            <div className="bg-brand-teal-blue/10 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-deep-forest-green font-poppins mb-6">Get in Touch Directly</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <MapPin size={28} className="text-brand-deep-forest-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-brand-deep-forest-green font-poppins">Our Office (By Appointment)</h3>
                    <p className="text-brand-black/80">200 E 3rd<br />Alton IL 62002</p>
                    <p className="text-sm text-brand-black/70 mt-1">(Please call to schedule an appointment)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={28} className="text-brand-deep-forest-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-brand-deep-forest-green font-poppins">Phone</h3>
                    <p className="text-brand-black/80"><a href="tel:6184784003" className="hover:text-brand-teal-blue underline">(618) 478-4003</a></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={28} className="text-brand-deep-forest-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-brand-deep-forest-green font-poppins">Email</h3>
                    <p className="text-brand-black/80"><a href="mailto:info@choiceinsurancehub.com" className="hover:text-brand-teal-blue underline">info@choiceinsurancehub.com</a></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CalendarDays size={28} className="text-brand-deep-forest-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-brand-deep-forest-green font-poppins">Business Hours</h3>
                    <p className="text-brand-black/80">Monday - Friday: 9:00 AM - 5:00 PM (CST)</p>
                    <p className="text-brand-black/80">Evenings & Weekends: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-a-call" className="py-16 bg-brand-deep-forest-green text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-poppins">Ready for a Personalized Consultation?</h2>
          <p className="text-lg text-brand-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a free, no-obligation consultation with one of our expert insurance advisors at your convenience. We can discuss your needs and help you find the perfect plan.
          </p>
          <Button size="lg" asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold">
            {/* Updated to the correct Calendly link */}
            <a href="https://calendly.com/choiceinsurancehub" target="_blank" rel="noopener noreferrer">Book Your Free Consultation Now</a>
          </Button>
          <p className="text-sm text-brand-white/70 mt-4">(You will be redirected to our scheduling partner)</p>
        </div>
      </section>
    </div>
  );
}
