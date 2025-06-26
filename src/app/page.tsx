"" // Add this line to make it a module, if not already
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, ShieldCheck, MessageSquare } from "lucide-react";
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-brand-deep-forest-green text-brand-white overflow-hidden">
        {/* Background Pattern - CSS Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Hero Content */}
            <div className="md:w-3/5 text-left md:pr-8">
              <div className="inline-block px-4 py-1 rounded-full bg-brand-warm-beige-coral/20 text-brand-warm-beige-coral text-sm font-medium mb-6">
                Personalized Insurance Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins leading-tight">
                Your Trusted Partner for <span className="text-brand-warm-beige-coral">Health, Life & Medicare</span> Insurance
              </h1>
              <p className="text-lg md:text-xl mb-8 text-brand-white/90 max-w-2xl">
                We provide personalized plans and expert guidance for residents of Illinois, Alabama, Georgia, Ohio, Kentucky, Mississippi, South Carolina, and Texas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Button size="lg" asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold">
                  <Link href="/contact#book-a-call">Book a Free Consultation</Link>
                </Button>
                <Button size="lg" asChild variant="outline" className="border-brand-white text-brand-white hover:bg-brand-white/10">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-10 flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-brand-warm-beige-coral" />
                  <span className="text-sm font-medium">Licensed in 8 States</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-brand-warm-beige-coral" />
                  <span className="text-sm font-medium">Multiple Top Carriers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-brand-warm-beige-coral" />
                  <span className="text-sm font-medium">Personalized Service</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image/Card */}
            <div className="md:w-2/5 relative">
              <div className="bg-white rounded-lg shadow-xl p-6 text-brand-black">
                <h3 className="text-xl font-bold mb-4 text-brand-deep-forest-green">Get a Personalized Quote</h3>
                <p className="text-sm text-gray-600 mb-6">Our insurance experts are ready to help you find the perfect coverage for your needs.</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-brand-teal-blue/10">
                    <ShieldCheck className="text-brand-teal-blue flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-medium text-brand-deep-forest-green">Medicare Solutions</h4>
                      <p className="text-xs text-gray-600">Advantage, Supplement, and Part D plans</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-brand-teal-blue/10">
                    <ShieldCheck className="text-brand-teal-blue flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-medium text-brand-deep-forest-green">Life Insurance</h4>
                      <p className="text-xs text-gray-600">Term, Whole, and Universal Life options</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-brand-teal-blue/10">
                    <ShieldCheck className="text-brand-teal-blue flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-medium text-brand-deep-forest-green">Health Insurance</h4>
                      <p className="text-xs text-gray-600">Individual and family health plans</p>
                    </div>
                  </div>
                </div>
                
                <Button asChild className="w-full bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold">
                  <Link href="/contact#get-a-quote">Get Your Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Snippet */}
      <section className="py-16 md:py-24 bg-brand-white text-brand-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-deep-forest-green font-poppins">About Choice Insurance Agency</h2>
          <p className="text-lg text-brand-black/80 mb-10 max-w-3xl mx-auto">
            Choice Insurance is an independent insurance agency specializing in Medicare Benefits, Individual Health Insurance, Employee Benefits, and Life Insurance plans. We partner with major insurance carriers to provide clients with a wide range of coverage options. Our plans are designed with a focus on affordability and tailored benefits, combined with personalized guidance to help clients make well-informed decisions.
          </p>
          <Button asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black">
            <Link href="/about">Learn More About Choice Insurance</Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-brand-white text-brand-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-deep-forest-green font-poppins">Why Choose Choice Insurance?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <CheckCircle size={48} className="mx-auto mb-4 text-brand-deep-forest-green" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-2 text-brand-deep-forest-green font-poppins">Personalized Service</h3>
              <p className="text-brand-black/80">At Choice Insurance, we take the time to understand your unique needs and find the perfect plan for you.</p>
            </div>
            <div className="p-6">
              <Users size={48} className="mx-auto mb-4 text-brand-deep-forest-green" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-2 text-brand-deep-forest-green font-poppins">Independent Agency</h3>
              <p className="text-brand-black/80">As an independent agency, Choice Insurance offers a wide range of options from multiple top carriers.</p>
            </div>
            <div className="p-6">
              <ShieldCheck size={48} className="mx-auto mb-4 text-brand-deep-forest-green" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-2 text-brand-deep-forest-green font-poppins">Expert Guidance</h3>
              <p className="text-brand-black/80">Choice Insurance's experienced agents provide clear, unbiased advice to help you make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Snippet */}
      <section className="py-16 md:py-24 bg-brand-teal-blue/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-deep-forest-green font-poppins">What Our Choice Insurance Clients Say</h2>
          <div className="max-w-2xl mx-auto bg-brand-white p-8 rounded-lg shadow-lg text-brand-black">
            <MessageSquare size={32} className="text-brand-teal-blue mb-4" aria-hidden="true" />
            <blockquote className="text-lg italic text-brand-black/80 mb-6">
              "Choice Insurance made finding the right Medicare plan so easy! Their agent was knowledgeable and patient, answering all my questions. Highly recommend!"
            </blockquote>
            <p className="text-right font-semibold text-brand-deep-forest-green">- Jane D., Illinois</p>
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black">
              <Link href="/testimonials">Read More Choice Insurance Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-brand-deep-forest-green text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-poppins">Ready to Find Your Perfect Choice Insurance Plan?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-brand-white/90">
            Let Choice Insurance help you navigate the complexities of insurance. Contact us today for a free, no-obligation consultation.
          </p>
          <Button size="lg" asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold">
            <Link href="/contact#get-a-quote">Get a Free Quote Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
