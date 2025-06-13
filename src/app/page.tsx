export const metadata = {
  title: "Choice Insurance Agency - Home | Expert Health, Life & Medicare Insurance",
  description: "Choice Insurance provides personalized Medicare, Life & Health insurance solutions in IL, GA, TX, AL, OH, KY, MS, SC. Get expert guidance and affordable coverage tailored to your needs.",
  keywords: "Choice Insurance, insurance agency, Medicare plans, life insurance, health insurance, insurance solutions, affordable insurance, insurance consultation",
  alternates: {
    canonical: "https://insureyourchoices.com"
  }
};

"" // Add this line to make it a module, if not already
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, ShieldCheck, MessageSquare } from "lucide-react";
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-brand-deep-forest-green to-brand-teal-blue-dark text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
            Choice Insurance: Your Trusted Partner for Health, Life & Medicare Insurance
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-brand-white/90">
            Choice Insurance provides personalized plans and expert guidance for residents of Illinois, Alabama, Georgia, Ohio, Kentucky, Mississippi, South Carolina, and Texas.
          </p>
          <Button size="lg" asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral-dark text-brand-black font-semibold">
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
          <Button asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral-dark text-brand-black">
            <Link href="/about">Learn More About Choice Insurance</Link>
          </Button>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-brand-teal-blue-dark/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-deep-forest-green font-poppins">Insurance Services from Choice Insurance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Medicare Supplement", description: "Explore options for Medicare Supplement (Medigap) plans with Choice Insurance experts.", href: "/services/medicare-supplement" },
              { title: "Life Insurance", description: "Secure your family's future with various life insurance policies from Choice Insurance.", href: "/services/life-insurance" },
              { title: "Health Insurance", description: "Find individual and group health insurance plans through Choice Insurance Agency.", href: "/services/health-insurance" },
              { title: "Medicare Advantage", description: "Discover Medicare Advantage (Part C) options with guidance from Choice Insurance specialists.", href: "/services/medicare-advantage" },
              { title: "Final Expense", description: "Plan ahead with final expense insurance solutions from Choice Insurance.", href: "/services/final-expense" },
              { title: "Cancer & Critical Illness", description: "Get protection and help manage costs associated with critical illnesses through Choice Insurance.", href: "/services/cancer-illness" },
              { title: "Annuities", description: "Secure your retirement with reliable income streams through annuities from Choice Insurance.", href: "/services/annuities" },
            ].map((service) => (
              <Card key={service.title} className="bg-brand-white shadow-lg hover:shadow-xl transition-shadow duration-300 text-brand-black">
                <CardHeader>
                  <CardTitle className="text-brand-deep-forest-green font-poppins text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <p className="text-brand-black/80 mb-4 text-center">{service.description}</p>
                  <Button asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral-dark text-brand-black">
                    <Link href={service.href}>Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral-dark text-brand-black">
              <Link href="/services">Explore All Choice Insurance Services</Link>
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
      <section className="py-16 md:py-24 bg-brand-teal-blue-dark/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-deep-forest-green font-poppins">What Our Choice Insurance Clients Say</h2>
          <div className="max-w-2xl mx-auto bg-brand-white p-8 rounded-lg shadow-lg text-brand-black">
            <MessageSquare size={32} className="text-brand-deep-forest-green mb-4" aria-hidden="true" />
            <blockquote className="text-lg italic text-brand-black/80 mb-6">
              "Choice Insurance made finding the right Medicare plan so easy! Their agent was knowledgeable and patient, answering all my questions. Highly recommend!"
            </blockquote>
            <p className="text-right font-semibold text-brand-deep-forest-green">- Jane D., Illinois</p>
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral-dark text-brand-black">
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
          <Button size="lg" asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral-dark text-brand-black font-semibold">
            <Link href="/contact#get-a-quote">Get a Free Quote Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
