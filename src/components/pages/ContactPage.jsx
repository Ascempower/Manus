import React from 'react';

import { Clock, Mail, MapPin, Phone } from 'lucide-react';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-brand-white">
      {/* Hero Section */}
      <section className="bg-brand-teal-blue py-20 text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-8 font-poppins text-4xl font-bold md:text-5xl">
            Contact Choice Insurance Hub
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-brand-white/90 md:text-xl">
            We are here to help you navigate your insurance options and find the best coverage for
            your needs. Reach out to us through any of the methods below, or use the form to send us
            a message directly.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-12 font-poppins text-3xl font-bold text-brand-deep-forest-green">
                Get in Touch Directly
              </h2>

              {/* Office Location */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="mt-1 h-6 w-6 text-brand-teal-blue" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-brand-deep-forest-green">
                      Our Office (By Appointment)
                    </h3>
                    <p className="text-brand-black/80">200 E 3rd</p>
                    <p className="text-brand-black/80">Alton IL 62002</p>
                    <p className="mt-1 text-sm text-brand-black/60">
                      (Please call to schedule an appointment)
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <Phone className="mt-1 h-6 w-6 text-brand-teal-blue" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-brand-deep-forest-green">
                      Phone
                    </h3>
                    <p className="text-brand-black/80">
                      Toll-Free:
                      <a
                        href="tel:8774142319"
                        className="ml-2 font-semibold text-brand-teal-blue hover:underline"
                      >
                        (877) 414-2319
                      </a>
                    </p>
                    <p className="text-brand-black/80">
                      Local:
                      <a
                        href="tel:6182785927"
                        className="ml-2 font-semibold text-brand-teal-blue hover:underline"
                      >
                        (618) 278-5927
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <Mail className="mt-1 h-6 w-6 text-brand-teal-blue" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-brand-deep-forest-green">
                      Email
                    </h3>
                    <a
                      href="mailto:info@choiceinsurancehub.com"
                      className="text-lg text-brand-teal-blue hover:underline"
                    >
                      info@choiceinsurancehub.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <Clock className="mt-1 h-6 w-6 text-brand-teal-blue" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-brand-deep-forest-green">
                      Business Hours
                    </h3>
                    <p className="text-brand-black/80">Monday - Friday: 9:00 AM - 5:00 PM (CST)</p>
                    <p className="text-brand-black/80">Evenings & Weekends: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-12 font-poppins text-3xl font-bold text-brand-deep-forest-green">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="font-medium text-brand-deep-forest-green">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    className="mt-2 border-brand-teal-blue/30 focus:border-brand-teal-blue"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-medium text-brand-deep-forest-green">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="mt-2 border-brand-teal-blue/30 focus:border-brand-teal-blue"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-medium text-brand-deep-forest-green">
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="mt-2 border-brand-teal-blue/30 focus:border-brand-teal-blue"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="font-medium text-brand-deep-forest-green">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    className="mt-2 border-brand-teal-blue/30 focus:border-brand-teal-blue"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-medium text-brand-deep-forest-green">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    className="mt-2 border-brand-teal-blue/30 focus:border-brand-teal-blue"
                    placeholder="Tell us about your insurance needs or questions..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-warm-beige-coral py-3 font-semibold text-brand-black hover:bg-brand-warm-beige-coral/80"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-a-quote" className="bg-brand-deep-forest-green py-20 text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 font-poppins text-3xl font-bold md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-brand-white/90 md:text-xl">
            Contact Choice Insurance today for your free, no-obligation consultation. We're here to
            help you find the perfect insurance solution.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button className="bg-brand-warm-beige-coral px-8 py-3 font-semibold text-brand-black hover:bg-brand-warm-beige-coral/80">
              <a href="tel:8774142319">Call (877) 414-2319</a>
            </Button>
            <Button className="border-2 border-brand-white bg-transparent px-8 py-3 font-semibold text-brand-white hover:bg-brand-white hover:text-brand-deep-forest-green">
              <a href="mailto:info@choiceinsurancehub.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
