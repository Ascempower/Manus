// src/app/contact/page.tsx
import type { Metadata } from 'next';

import { CalendarDays, Mail, MapPin, Phone } from 'lucide-react';

import ContactFormWrapper from '@/components/forms/ContactFormWrapper';
import ButtonLink from '@/components/ui/ButtonLink';
import { CalendlyInline } from '@/components/widgets/CalendlyWidget';

export const metadata: Metadata = {
  title: 'Contact Us - Choice Insurance Hub',
  description:
    'Get in touch with Choice Insurance Hub for expert advice on Medicare, life, and health insurance. Book a consultation or request a quote today.',
  keywords:
    'insurance contact, insurance consultation, insurance quote, Choice Insurance Hub contact, insurance agency phone number, insurance agency email',
  alternates: {
    canonical: 'https://choiceinsurancehub.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-brand-white text-brand-black">
      {/* Page Header */}
      <section className="bg-brand-teal-blue/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins text-4xl font-bold text-brand-deep-forest-green md:text-5xl">
            Contact Choice Insurance Hub
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-brand-black/80">
            We are here to help you navigate your insurance options and find the best coverage for
            your needs. Reach out to us through any of the methods below, or use the form to send us
            a message directly.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16 grid gap-12 md:grid-cols-2">
            {/* Contact Information Section */}
            <div className="rounded-lg bg-brand-teal-blue/10 p-8 shadow-md">
              <h2 className="mb-6 font-poppins text-2xl font-bold text-brand-deep-forest-green md:text-3xl">
                Get in Touch Directly
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin
                    size={28}
                    className="mr-4 mt-1 flex-shrink-0 text-brand-deep-forest-green"
                  />
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-brand-deep-forest-green">
                      Our Office (By Appointment)
                    </h3>
                    <p className="text-brand-black/80">
                      200 E 3rd
                      <br />
                      Alton IL 62002
                    </p>
                    <p className="mt-1 text-sm text-brand-black/70">
                      (Please call to schedule an appointment)
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone
                    size={28}
                    className="mr-4 mt-1 flex-shrink-0 text-brand-deep-forest-green"
                  />
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-brand-deep-forest-green">
                      Phone
                    </h3>
                    <p className="text-brand-black/80">
                      Toll-Free:{' '}
                      <a href="tel:8774142319" className="underline hover:text-brand-teal-blue">
                        {' '}
                        (877) 414-2319
                      </a>
                    </p>
                    <p className="text-brand-black/80">
                      Local:{' '}
                      <a href="tel:6182785927" className="underline hover:text-brand-teal-blue">
                        (618) 278-5927
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail
                    size={28}
                    className="mr-4 mt-1 flex-shrink-0 text-brand-deep-forest-green"
                  />
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-brand-deep-forest-green">
                      Email
                    </h3>
                    <p className="text-brand-black/80">
                      <a
                        href="mailto:info@choiceinsurancehub.com"
                        className="underline hover:text-brand-teal-blue"
                      >
                        info@choiceinsurancehub.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CalendarDays
                    size={28}
                    className="mr-4 mt-1 flex-shrink-0 text-brand-deep-forest-green"
                  />
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-brand-deep-forest-green">
                      Business Hours
                    </h3>
                    <p className="text-brand-black/80">Monday - Friday: 9:00 AM - 5:00 PM (CST)</p>
                    <p className="text-brand-black/80">Evenings & Weekends: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="rounded-lg bg-brand-teal-blue/10 p-8 shadow-md" id="get-a-quote">
              <h2 className="mb-6 font-poppins text-2xl font-bold text-brand-deep-forest-green md:text-3xl">
                Send Us a Message
              </h2>
              <ContactFormWrapper />
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-a-call" className="bg-brand-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-poppins text-3xl font-bold text-brand-deep-forest-green">
              Book Your Free Consultation
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-brand-black/80">
              Schedule a free, no-obligation consultation with one of our expert insurance advisors.
              Choose a time that works best for you.
            </p>
          </div>

          {/* Calendly Widget */}
          <div className="mx-auto max-w-4xl">
            <CalendlyInline className="shadow-lg" />
          </div>

          {/* Fallback Contact Options */}
          <div className="mt-8 text-center">
            <p className="mb-4 text-brand-black/60">
              Having trouble with the calendar? Contact us directly:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonLink
                href="tel:8774142319"
                className="bg-brand-deep-forest-green text-brand-white hover:bg-brand-deep-forest-green/80"
              >
                Call (877) 414-2319
              </ButtonLink>
              <ButtonLink
                href="mailto:info@choiceinsurancehub.com"
                className="bg-brand-teal-blue text-brand-black hover:bg-brand-teal-blue/80"
              >
                Email Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
