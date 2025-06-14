import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-brand-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-brand-teal-blue text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-poppins">
            Contact Choice Insurance Agency
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-brand-white/90">
            We are here to help you navigate your insurance options and find the best coverage for your needs. Reach out to us through any of the methods below, or use the form to send us a message directly.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-12 text-brand-deep-forest-green font-poppins">
                Get in Touch Directly
              </h2>
              
              {/* Office Location */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-brand-teal-blue mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-deep-forest-green mb-2">
                      Our Office (By Appointment)
                    </h3>
                    <p className="text-brand-black/80">200 E 3rd</p>
                    <p className="text-brand-black/80">Alton IL 62002</p>
                    <p className="text-brand-black/60 text-sm mt-1">
                      (Please call to schedule an appointment)
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-brand-teal-blue mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-deep-forest-green mb-2">Phone</h3>
                    <p className="text-brand-black/80">
                      Toll-Free: 
                      <a href="tel:8774142319" className="text-brand-teal-blue hover:underline ml-2 font-semibold">
                        (877) 414-2319
                      </a>
                    </p>
                    <p className="text-brand-black/80">
                      Local: 
                      <a href="tel:6182785927" className="text-brand-teal-blue hover:underline ml-2 font-semibold">
                        (618) 278-5927
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-brand-teal-blue mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-deep-forest-green mb-2">Email</h3>
                    <a 
                      href="mailto:info@choiceinsurancehub.com" 
                      className="text-brand-teal-blue hover:underline text-lg"
                    >
                      info@choiceinsurancehub.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-brand-teal-blue mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-deep-forest-green mb-2">Business Hours</h3>
                    <p className="text-brand-black/80">Monday - Friday: 9:00 AM - 5:00 PM (CST)</p>
                    <p className="text-brand-black/80">Evenings & Weekends: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-12 text-brand-deep-forest-green font-poppins">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-brand-deep-forest-green font-medium">
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
                  <Label htmlFor="email" className="text-brand-deep-forest-green font-medium">
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
                  <Label htmlFor="phone" className="text-brand-deep-forest-green font-medium">
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
                  <Label htmlFor="subject" className="text-brand-deep-forest-green font-medium">
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
                  <Label htmlFor="message" className="text-brand-deep-forest-green font-medium">
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
                  className="w-full bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-a-quote" className="py-20 bg-brand-deep-forest-green text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-poppins">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-brand-white/90">
            Contact Choice Insurance today for your free, no-obligation consultation. We're here to help you find the perfect insurance solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold px-8 py-3">
              <a href="tel:8774142319">Call (877) 414-2319</a>
            </Button>
            <Button className="bg-transparent border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-deep-forest-green font-semibold px-8 py-3">
              <a href="mailto:info@choiceinsurancehub.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

