"" // Add this line to make it a module, if not already
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, ShieldCheck, MessageSquare } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-brand-deep-forest-green to-brand-teal-blue text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
            Your Trusted Partner for Health, Life & Medicare Insurance
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-brand-white/90">
            Personalized plans and expert guidance for residents of Illinois, Alabama, Georgia, Ohio, Kentucky, Mississippi, South Carolina, and Texas.
          </p>
          <Button size="lg" asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold">
            <Link href="/contact#book-a-call">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-16 md:py-24 bg-brand-white text-brand-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-deep-forest-green font-poppins">About Choice Insurance Agency</h2>
          <p className="text-lg text-brand-black/80 mb-10 max-w-3xl mx-auto">
            Choice Insurance is an independent insurance agency specializing in Medicare Benefits, Individual Health Insurance, Employee Benefits, and Life Insurance plans. We partner with major insurance carriers to provide clients with a wide range of coverage options. Our plans are designed with a focus on affordability and tailored benefits, combined with personalized guidance to help clients make well-informed decisions.
          </p>
          <Button variant="outline" asChild className="border-brand-deep-forest-green text-brand-deep-forest-green hover:bg-brand-teal-blue/20 hover:text-brand-deep-forest-green">
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-brand-teal-blue/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-deep-forest-green font-poppins">Our Insurance Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { title: "Medicare Solutions", description: "Navigate Medicare with confidence. We offer Supplement, Advantage, and Part D plans.", href: "/services/medicare-supplement" },
              { title: "Life Insurance", description: "Protect your loved ones with term, whole, and final expense life insurance.", href: "/services/life-insurance" },
              { title: "Health Coverage", description: "Find the right individual or family health insurance plan to meet your needs.", href: "/services/health-insurance" },
              { title: "Hospital Indemnity", description: "Get extra financial protection for hospital stays and related expenses.", href: "/services/hospital-indemnity" },
              { title: "Cancer & Illness Plans", description: "Specialized plans to help manage costs associated with critical illnesses.", href: "/services/cancer-illness" },
              { title: "Annuities", description: "Secure your retirement with reliable income streams through annuities.", href: "/services/annuities" },
            ].map((service) => (
              <Card key={service.title} className="bg-brand-white shadow-lg hover:shadow-xl transition-shadow duration-300 text-brand-black">
                <CardHeader>
                  <CardTitle className="text-brand-deep-forest-green font-poppins text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-black/80 mb-4">{service.description}</p>
                  <Button variant="link" asChild className="text-brand-deep-forest-green hover:text-brand-teal-blue px-0">
                    <Link href={service.href}>Learn More &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="bg-brand-deep-forest-green hover:bg-brand-teal-blue text-brand-white">
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-brand-white text-brand-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-deep-forest-green font-poppins">Why Choose Choice Insurance?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <CheckCircle size={48} className="mx-auto mb-4 text-brand-deep-forest-green" />
              <h3 className="text-xl font-bold mb-2 text-brand-deep-forest-green font-poppins">Personalized Service</h3>
              <p className="text-brand-black/80">We take the time to understand your unique needs and find the perfect plan for you.</p>
            </div>
            <div className="p-6">
              <Users size={48} className="mx-auto mb-4 text-brand-deep-forest-green" />
              <h3 className="text-xl font-bold mb-2 text-brand-deep-forest-green font-poppins">Independent Agency</h3>
              <p className="text-brand-black/80">As an independent agency, we offer a wide range of options from multiple top carriers.</p>
            </div>
            <div className="p-6">
              <ShieldCheck size={48} className="mx-auto mb-4 text-brand-deep-forest-green" />
              <h3 className="text-xl font-bold mb-2 text-brand-deep-forest-green font-poppins">Expert Guidance</h3>
              <p className="text-brand-black/80">Our experienced agents provide clear, unbiased advice to help you make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Snippet */}
      <section className="py-16 md:py-24 bg-brand-teal-blue/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-deep-forest-green font-poppins">What Our Clients Say</h2>
          <div className="max-w-2xl mx-auto bg-brand-white p-8 rounded-lg shadow-lg text-brand-black">
            <MessageSquare size={32} className="text-brand-teal-blue mb-4" />
            <blockquote className="text-lg italic text-brand-black/80 mb-6">
              "Choice Insurance made finding the right Medicare plan so easy! Their agent was knowledgeable and patient, answering all my questions. Highly recommend!"
            </blockquote>
            <p className="text-right font-semibold text-brand-deep-forest-green">- Jane D., Illinois</p>
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild className="border-brand-deep-forest-green text-brand-deep-forest-green hover:bg-brand-white hover:text-brand-deep-forest-green">
              <Link href="/testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-brand-deep-forest-green text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-poppins">Ready to Find Your Perfect Plan?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-brand-white/90">
            Let us help you navigate the complexities of insurance. Contact us today for a free, no-obligation consultation.
          </p>
          <Button size="lg" asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold">
            <Link href="/contact">Get a Free Quote Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}