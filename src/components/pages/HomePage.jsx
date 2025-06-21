import React from 'react';

import { CheckCircle, MessageSquare, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from './ui/button';

const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/choiceinsurancehub' });
  } else {
    window.open('https://calendly.com/choiceinsurancehub', '_blank');
  }
  return false;
};

const HomePage = () => {
  return (
    <div className="bg-brand-white">
      {/* Hero Section */}
      <section className="bg-brand-deep-forest-green py-20 text-brand-white md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-8 font-poppins text-4xl font-bold md:text-6xl">
            Choice Insurance: Your Trusted Partner for Health, Life & Medicare Insurance
          </h1>
          <p className="mx-auto mb-10 max-w-4xl text-lg text-brand-white/90 md:text-xl">
            Choice Insurance provides personalized plans and expert guidance for residents of
            Illinois, Alabama, Georgia, Ohio, Kentucky, Mississippi, South Carolina, and Texas.
          </p>
          <Button
            onClick={openCalendly}
            className="bg-brand-warm-beige-coral px-8 py-3 text-lg font-semibold text-brand-black hover:bg-brand-warm-beige-coral/80"
          >
            Book a Free Consultation
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-brand-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 font-poppins text-3xl font-bold text-brand-deep-forest-green md:text-4xl">
            About Choice Insurance Hub
          </h2>
          <p className="mx-auto mb-10 max-w-4xl text-lg text-brand-black/80">
            Choice Insurance is an independent insurance agency specializing in Medicare Benefits,
            Individual Health Insurance, Employee Benefits, and Life Insurance plans. We partner
            with major insurance carriers to provide clients with a wide range of coverage options.
            Our plans are designed with a focus on affordability and tailored benefits, combined
            with personalized guidance to help clients make well-informed decisions.
          </p>
          <Button className="bg-brand-warm-beige-coral text-brand-black hover:bg-brand-warm-beige-coral/80">
            Learn More About Choice Insurance
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center font-poppins text-3xl font-bold text-brand-deep-forest-green md:text-4xl">
            Insurance Services from Choice Insurance
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Medicare Supplement */}
            <div className="rounded-lg bg-brand-white p-8 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-brand-deep-forest-green">
                Medicare Supplement
              </h3>
              <p className="mb-6 text-brand-black/80">
                Explore options for Medicare Supplement (Medigap) plans with Choice Insurance
                experts.
              </p>
              <Button className="bg-brand-warm-beige-coral text-brand-black hover:bg-brand-warm-beige-coral/80">
                Learn More →
              </Button>
            </div>

            {/* Life Insurance */}
            <div className="rounded-lg bg-brand-white p-8 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-brand-deep-forest-green">
                Life Insurance
              </h3>
              <p className="mb-6 text-brand-black/80">
                Secure your family's future with various life insurance policies from Choice
                Insurance.
              </p>
              <Button className="bg-brand-warm-beige-coral text-brand-black hover:bg-brand-warm-beige-coral/80">
                Learn More →
              </Button>
            </div>

            {/* Health Insurance */}
            <div className="rounded-lg bg-brand-white p-8 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-brand-deep-forest-green">
                Health Insurance
              </h3>
              <p className="mb-6 text-brand-black/80">
                Find individual and group health insurance plans through Choice Insurance Hub.
              </p>
              <Button className="bg-brand-warm-beige-coral text-brand-black hover:bg-brand-warm-beige-coral/80">
                Learn More →
              </Button>
            </div>

            {/* Medicare Advantage */}
            <div className="rounded-lg bg-brand-white p-8 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-brand-deep-forest-green">
                Medicare Advantage
              </h3>
              <p className="mb-6 text-brand-black/80">
                Discover Medicare Advantage (Part C) options with guidance from Choice Insurance
                specialists.
              </p>
              <Button className="bg-brand-warm-beige-coral text-brand-black hover:bg-brand-warm-beige-coral/80">
                Learn More →
              </Button>
            </div>

            {/* Final Expense */}
            <div className="rounded-lg bg-brand-white p-8 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-brand-deep-forest-green">Final Expense</h3>
              <p className="mb-6 text-brand-black/80">
                Plan ahead with final expense insurance solutions from Choice Insurance.
              </p>
              <Button className="bg-brand-warm-beige-coral text-brand-black hover:bg-brand-warm-beige-coral/80">
                Learn More →
              </Button>
            </div>

            {/* Cancer & Critical Illness */}
            <div className="rounded-lg bg-brand-white p-8 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-brand-deep-forest-green">
                Cancer & Critical Illness
              </h3>
              <p className="mb-6 text-brand-black/80">
                Get protection and help manage costs associated with critical illnesses through
                Choice Insurance.
              </p>
              <Button className="bg-brand-warm-beige-coral text-brand-black hover:bg-brand-warm-beige-coral/80">
                Learn More →
              </Button>
            </div>

            {/* Annuities */}
            <div className="rounded-lg bg-brand-white p-8 shadow-lg md:col-span-2 lg:col-span-1">
              <h3 className="mb-4 text-xl font-bold text-brand-deep-forest-green">Annuities</h3>
              <p className="mb-6 text-brand-black/80">
                Secure your retirement with reliable income streams through annuities from Choice
                Insurance.
              </p>
              <Button className="bg-brand-warm-beige-coral text-brand-black hover:bg-brand-warm-beige-coral/80">
                Learn More →
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-brand-deep-forest-green text-brand-white hover:bg-brand-deep-forest-green/80">
              Explore All Choice Insurance Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-brand-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center font-poppins text-3xl font-bold text-brand-deep-forest-green md:text-4xl">
            Why Choose Choice Insurance?
          </h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="text-center">
              <CheckCircle className="mx-auto mb-6 h-16 w-16 text-brand-teal-blue" />
              <h3 className="mb-4 text-xl font-bold text-brand-deep-forest-green">
                Personalized Service
              </h3>
              <p className="text-brand-black/80">
                At Choice Insurance, we take the time to understand your unique needs and find the
                perfect plan for you.
              </p>
            </div>

            <div className="text-center">
              <Users className="mx-auto mb-6 h-16 w-16 text-brand-teal-blue" />
              <h3 className="mb-4 text-xl font-bold text-brand-deep-forest-green">
                Independent Agency
              </h3>
              <p className="text-brand-black/80">
                As an independent agency, Choice Insurance offers a wide range of options from
                multiple top carriers.
              </p>
            </div>

            <div className="text-center">
              <Shield className="mx-auto mb-6 h-16 w-16 text-brand-teal-blue" />
              <h3 className="mb-4 text-xl font-bold text-brand-deep-forest-green">
                Expert Guidance
              </h3>
              <p className="text-brand-black/80">
                Choice Insurance's experienced agents provide clear, unbiased advice to help you
                make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-poppins text-3xl font-bold text-brand-deep-forest-green md:text-4xl">
            What Our Choice Insurance Clients Say
          </h2>

          <div className="mx-auto max-w-2xl rounded-lg bg-brand-white p-8 text-brand-black shadow-lg">
            <MessageSquare className="mb-4 h-8 w-8 text-brand-teal-blue" />
            <blockquote className="mb-6 text-lg italic text-brand-black/80">
              "Choice Insurance made finding the right Medicare plan so easy! Their agent was
              knowledgeable and patient, answering all my questions. Highly recommend!"
            </blockquote>
            <p className="text-right font-semibold text-brand-deep-forest-green">
              - Jane D., Illinois
            </p>
          </div>

          <div className="mt-10 text-center">
            <Button className="bg-brand-warm-beige-coral text-brand-black hover:bg-brand-warm-beige-coral/80">
              Read More Choice Insurance Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-deep-forest-green py-20 text-brand-white md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 font-poppins text-3xl font-bold md:text-4xl">
            Ready to Find Your Perfect Choice Insurance Plan?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-brand-white/90 md:text-xl">
            Let Choice Insurance help you navigate the complexities of insurance. Contact us today
            for a free, no-obligation consultation.
          </p>
          <Button className="bg-brand-warm-beige-coral px-8 py-3 text-lg font-semibold text-brand-black hover:bg-brand-warm-beige-coral/80">
            <Link to="/contact#get-a-quote">Get a Free Quote Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
