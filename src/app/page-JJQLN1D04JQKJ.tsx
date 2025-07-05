"" // Add this line to make it a module, if not already
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, ShieldCheck, MessageSquare } from "lucide-react";
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        {/* Background Pattern - Softer Gradient Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-deeper-forest-green to-brand-deep-forest-green opacity-80"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[length:24px_24px] opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Hero Content */}
            <div className="hero-content text-left md:pr-8">
              <span className="tagline">
                Personalized Insurance Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins leading-tight">
                Your Trusted Partner for <span className="highlight">Health, Life & Medicare</span> Insurance
              </h1>
              <p className="text-lg md:text-xl mb-8 text-brand-white/95 max-w-2xl leading-relaxed">
                We provide personalized plans and expert guidance for residents of Illinois, Alabama, Georgia, Ohio, Kentucky, Mississippi, South Carolina, and Texas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Button size="lg" asChild className="bg-brand-warm-beige-coral-dark hover:bg-brand-warm-beige-coral-darker text-white font-semibold shadow-md min-w-[200px] text-base">
                  <Link href="/contact#book-a-call">Book a Free Consultation</Link>
                </Button>
                <Button size="lg" asChild className="bg-brand-teal-blue-dark border-2 border-brand-teal-blue-dark text-white font-semibold hover:bg-brand-teal-blue-dark/90 hover:border-brand-teal-blue min-w-[200px] text-base">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="badges">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-brand-warm-beige-coral-dark" />
                  <span className="text-sm font-medium">Licensed in 8 States</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-brand-warm-beige-coral-dark" />
                  <span className="text-sm font-medium">Multiple Top Carriers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-brand-warm-beige-coral-dark" />
                  <span className="text-sm font-medium">Personalized Service</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image/Card */}
            <div className="quote-card">
              <h2 className="text-xl font-bold mb-4">Get a Personalized Quote</h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">Our insurance experts are ready to help you find the perfect coverage for your needs.</p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-3 p-3 rounded-lg bg-brand-teal-blue/10 transition-all duration-300 hover:bg-brand-teal-blue/20 cursor-pointer group" title="Click to learn more about Medicare Solutions">
                  <ShieldCheck className="text-brand-teal-blue-dark flex-shrink-0 group-hover:text-brand-deep-forest-green transition-colors duration-300" size={24} />
                  <div>
                    <strong className="font-medium text-brand-deep-forest-green group-hover:text-brand-deeper-forest-green transition-colors duration-300">Medicare Solutions</strong><br />
                    <span className="text-sm text-gray-600">Advantage, Supplement, and Part D plans</span>
                  </div>
                </li>
                
                <li className="flex items-center gap-3 p-3 rounded-lg bg-brand-teal-blue/10 transition-all duration-300 hover:bg-brand-teal-blue/20 cursor-pointer group" title="Click to learn more about Life Insurance">
                  <ShieldCheck className="text-brand-teal-blue-dark flex-shrink-0 group-hover:text-brand-deep-forest-green transition-colors duration-300" size={24} />
                  <div>
                    <strong className="font-medium text-brand-deep-forest-green group-hover:text-brand-deeper-forest-green transition-colors duration-300">Life Insurance</strong><br />
                    <span className="text-sm text-gray-600">Term, Whole, and Universal Life options</span>
                  </div>
                </li>
                
                <li className="flex items-center gap-3 p-3 rounded-lg bg-brand-teal-blue/10 transition-all duration-300 hover:bg-brand-teal-blue/20 cursor-pointer group" title="Click to learn more about Health Insurance">
                  <ShieldCheck className="text-brand-teal-blue-dark flex-shrink-0 group-hover:text-brand-deep-forest-green transition-colors duration-300" size={24} />
                  <div>
                    <strong className="font-medium text-brand-deep-forest-green group-hover:text-brand-deeper-forest-green transition-colors duration-300">Health Insurance</strong><br />
                    <span className="text-sm text-gray-600">Individual and family health plans</span>
                  </div>
                </li>
              </ul>
              
              <Button asChild className="btn-full bg-brand-warm-beige-coral-dark hover:bg-brand-warm-beige-coral-darker text-white font-semibold shadow-md text-base">
                <Link href="/contact#get-a-quote">Get Your Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Snippet */}
      <section className="about-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-deeper-forest-green font-poppins">About Choice Insurance Agency</h2>
          <p className="text-lg text-brand-black/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Choice Insurance is an independent insurance agency specializing in Medicare Benefits, Individual Health Insurance, Employee Benefits, and Life Insurance plans. We partner with major insurance carriers to provide clients with a wide range of coverage options. Our plans are designed with a focus on affordability and tailored benefits, combined with personalized guidance to help clients make well-informed decisions.
          </p>
          <Button asChild className="btn-primary">
            <Link href="/about">Learn More About Choice Insurance</Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="features-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-deeper-forest-green font-poppins">Why Choose Choice Insurance?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="feature-card">
              <CheckCircle size={48} className="mx-auto mb-4 text-brand-deeper-forest-green" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3 text-brand-deeper-forest-green font-poppins">Personalized Service</h3>
              <p className="text-brand-black/80 leading-relaxed text-base">At Choice Insurance, we take the time to understand your unique needs and find the perfect plan for you.</p>
            </div>
            <div className="feature-card">
              <Users size={48} className="mx-auto mb-4 text-brand-deeper-forest-green" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3 text-brand-deeper-forest-green font-poppins">Independent Agency</h3>
              <p className="text-brand-black/80 leading-relaxed text-base">As an independent agency, Choice Insurance offers a wide range of options from multiple top carriers.</p>
            </div>
            <div className="feature-card">
              <ShieldCheck size={48} className="mx-auto mb-4 text-brand-deeper-forest-green" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3 text-brand-deeper-forest-green font-poppins">Expert Guidance</h3>
              <p className="text-brand-black/80 leading-relaxed text-base">Choice Insurance's experienced agents provide clear, unbiased advice to help you make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Snippet */}
      <section className="testimonial-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-deeper-forest-green font-poppins">What Our Choice Insurance Clients Say</h2>
          <div className="testimonial-card">
            <MessageSquare size={32} className="text-brand-teal-blue-dark mb-4" aria-hidden="true" />
            <blockquote className="text-lg italic text-brand-black/80 mb-6 leading-relaxed">
              "Choice Insurance made finding the right Medicare plan so easy! Their agent was knowledgeable and patient, answering all my questions. Highly recommend!"
            </blockquote>
            <p className="text-right font-semibold text-brand-deeper-forest-green">- Jane D., Illinois</p>
          </div>
          <div className="text-center mt-10">
            <Button asChild className="btn-primary">
              <Link href="/testimonials">Read More Choice Insurance Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="cta-section">
        {/* Background Pattern - Softer Gradient Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-deeper-forest-green to-brand-deep-forest-green opacity-80"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[length:24px_24px] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="cta-content">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-poppins">Ready to Find Your Perfect Choice Insurance Plan?</h2>
            <p className="text-lg md:text-xl mb-10 text-brand-white/95 leading-relaxed">
              Let Choice Insurance help you navigate the complexities of insurance. Contact us today for a free, no-obligation consultation.
            </p>
            <Button size="lg" asChild className="btn-primary min-w-[250px] text-base font-semibold">
              <Link href="/contact#get-a-quote">Get a Free Quote Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
