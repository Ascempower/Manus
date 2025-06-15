import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { MessageSquare, CheckCircle, Users, Shield } from 'lucide-react';

const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({url: 'https://calendly.com/choiceinsurancehub'});
  } else {
    window.open('https://calendly.com/choiceinsurancehub', '_blank');
  }
  return false;
};

const HomePage = () => {
  return (
    <div className="bg-brand-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-brand-deep-forest-green text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 font-poppins">
            Choice Insurance: Your Trusted Partner for Health, Life & Medicare Insurance
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-4xl mx-auto text-brand-white/90">
            Choice Insurance provides personalized plans and expert guidance for residents of Illinois, Alabama, Georgia, Ohio, Kentucky, Mississippi, South Carolina, and Texas.
          </p>
          <Button 
            onClick={openCalendly}
            className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold text-lg px-8 py-3"
          >
            Book a Free Consultation
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-deep-forest-green font-poppins">
            About Choice Insurance Hub
          </h2>
          <p className="text-lg text-brand-black/80 max-w-4xl mx-auto mb-10">
            Choice Insurance is an independent insurance agency specializing in Medicare Benefits, Individual Health Insurance, Employee Benefits, and Life Insurance plans. We partner with major insurance carriers to provide clients with a wide range of coverage options. Our plans are designed with a focus on affordability and tailored benefits, combined with personalized guidance to help clients make well-informed decisions.
          </p>
          <Button className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black">
            Learn More About Choice Insurance
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-deep-forest-green font-poppins">
            Insurance Services from Choice Insurance
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Medicare Supplement */}
            <div className="bg-brand-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-brand-deep-forest-green">Medicare Supplement</h3>
              <p className="text-brand-black/80 mb-6">
                Explore options for Medicare Supplement (Medigap) plans with Choice Insurance experts.
              </p>
              <Button className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black">
                Learn More →
              </Button>
            </div>

            {/* Life Insurance */}
            <div className="bg-brand-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-brand-deep-forest-green">Life Insurance</h3>
              <p className="text-brand-black/80 mb-6">
                Secure your family's future with various life insurance policies from Choice Insurance.
              </p>
              <Button className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black">
                Learn More →
              </Button>
            </div>

            {/* Health Insurance */}
            <div className="bg-brand-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-brand-deep-forest-green">Health Insurance</h3>
              <p className="text-brand-black/80 mb-6">
                Find individual and group health insurance plans through Choice Insurance Hub.
              </p>
              <Button className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black">
                Learn More →
              </Button>
            </div>

            {/* Medicare Advantage */}
            <div className="bg-brand-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-brand-deep-forest-green">Medicare Advantage</h3>
              <p className="text-brand-black/80 mb-6">
                Discover Medicare Advantage (Part C) options with guidance from Choice Insurance specialists.
              </p>
              <Button className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black">
                Learn More →
              </Button>
            </div>

            {/* Final Expense */}
            <div className="bg-brand-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-brand-deep-forest-green">Final Expense</h3>
              <p className="text-brand-black/80 mb-6">
                Plan ahead with final expense insurance solutions from Choice Insurance.
              </p>
              <Button className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black">
                Learn More →
              </Button>
            </div>

            {/* Cancer & Critical Illness */}
            <div className="bg-brand-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-brand-deep-forest-green">Cancer & Critical Illness</h3>
              <p className="text-brand-black/80 mb-6">
                Get protection and help manage costs associated with critical illnesses through Choice Insurance.
              </p>
              <Button className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black">
                Learn More →
              </Button>
            </div>

            {/* Annuities */}
            <div className="bg-brand-white p-8 rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold mb-4 text-brand-deep-forest-green">Annuities</h3>
              <p className="text-brand-black/80 mb-6">
                Secure your retirement with reliable income streams through annuities from Choice Insurance.
              </p>
              <Button className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black">
                Learn More →
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-brand-deep-forest-green hover:bg-brand-deep-forest-green/80 text-brand-white">
              Explore All Choice Insurance Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-brand-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-deep-forest-green font-poppins">
            Why Choose Choice Insurance?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-brand-teal-blue mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-brand-deep-forest-green">Personalized Service</h3>
              <p className="text-brand-black/80">
                At Choice Insurance, we take the time to understand your unique needs and find the perfect plan for you.
              </p>
            </div>
            
            <div className="text-center">
              <Users className="w-16 h-16 text-brand-teal-blue mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-brand-deep-forest-green">Independent Agency</h3>
              <p className="text-brand-black/80">
                As an independent agency, Choice Insurance offers a wide range of options from multiple top carriers.
              </p>
            </div>
            
            <div className="text-center">
              <Shield className="w-16 h-16 text-brand-teal-blue mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-brand-deep-forest-green">Expert Guidance</h3>
              <p className="text-brand-black/80">
                Choice Insurance's experienced agents provide clear, unbiased advice to help you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-deep-forest-green font-poppins">
            What Our Choice Insurance Clients Say
          </h2>
          
          <div className="max-w-2xl mx-auto bg-brand-white p-8 rounded-lg shadow-lg text-brand-black">
            <MessageSquare className="w-8 h-8 text-brand-teal-blue mb-4" />
            <blockquote className="text-lg italic text-brand-black/80 mb-6">
              "Choice Insurance made finding the right Medicare plan so easy! Their agent was knowledgeable and patient, answering all my questions. Highly recommend!"
            </blockquote>
            <p className="text-right font-semibold text-brand-deep-forest-green">
              - Jane D., Illinois
            </p>
          </div>
          
          <div className="text-center mt-10">
            <Button className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black">
              Read More Choice Insurance Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-brand-deep-forest-green text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-poppins">
            Ready to Find Your Perfect Choice Insurance Plan?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-brand-white/90">
            Let Choice Insurance help you navigate the complexities of insurance. Contact us today for a free, no-obligation consultation.
          </p>
          <Button className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold text-lg px-8 py-3">
            <Link to="/contact#get-a-quote">Get a Free Quote Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

