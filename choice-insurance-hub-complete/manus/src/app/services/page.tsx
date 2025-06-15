import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Insurance Services | Choice Insurance Hub - Medicare, Life & Health',
  description: 'Explore comprehensive insurance solutions from Choice Insurance Hub including Medicare Supplement, Life Insurance, Health Coverage, Final Expense, and more. Expert guidance for IL, GA, TX, AL, OH, KY, MS, SC residents.',
  keywords: 'Choice Insurance services, Medicare Supplement, Life Insurance, Health Insurance, Final Expense, Cancer Insurance, Annuities, Hospital Indemnity, insurance solutions',
  alternates: {
    canonical: "https://choiceinsurancehub.com/services"
  }
};

const services = [
  {
    title: "Medicare Supplement Plans (Medigap)",
    slug: "medicare-supplement",
    excerpt: "Complement your Original Medicare with Medigap to cover out-of-pocket costs like deductibles, copayments, and coinsurance.",
    detailsLink: "/services/medicare-supplement"
  },
  {
    title: "Hospital Indemnity Plans",
    slug: "hospital-indemnity",
    excerpt: "Gain extra financial protection for hospital stays, covering costs not handled by your primary health insurance or Medicare.",
    detailsLink: "/services/hospital-indemnity"
  },
  {
    title: "Cancer and Catastrophic Illness Insurance",
    slug: "cancer-illness",
    excerpt: "Receive a lump-sum cash benefit upon diagnosis of cancer or other serious illnesses to cover treatment and other expenses.",
    detailsLink: "/services/cancer-illness"
  },
  // Medicare Advantage was removed as per previous instructions, keeping it out unless specified otherwise
  // {
  //   title: "Medicare Advantage Plans (Part C)",
  //   slug: "medicare-advantage",
  //   excerpt: "All-in-one alternatives to Original Medicare, often including prescription drug, dental, and vision coverage.",
  //   detailsLink: "/services/medicare-advantage"
  // },
  {
    title: "Life Insurance",
    slug: "life-insurance",
    excerpt: "Protect your family's financial future with term life, whole life, or final expense insurance plans tailored to your needs.",
    detailsLink: "/services/life-insurance"
  },
  {
    title: "Final Expense Plans",
    slug: "final-expense",
    excerpt: "Affordable life insurance policies designed to cover end-of-life costs, such as funeral services and medical bills.",
    detailsLink: "/services/final-expense"
  },
  {
    title: "Annuities",
    slug: "annuities",
    excerpt: "Secure a reliable income stream for your retirement with fixed and indexed annuity options.",
    detailsLink: "/services/annuities"
  },
  {
    title: "Individual Health Insurance",
    slug: "health-insurance",
    excerpt: "Find the right health insurance plan for you and your family, ensuring access to quality healthcare.",
    detailsLink: "/services/health-insurance"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-brand-white text-brand-black">
      {/* Page Header */}
      <section className="py-12 bg-brand-teal-blue/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-deep-forest-green font-poppins">Our Insurance Services</h1>
          <p className="text-lg text-brand-black/80 mt-4 max-w-3xl mx-auto">
            At Choice Insurance Hub, we offer a comprehensive suite of insurance products designed to protect you, your family, and your future. Explore our services below to find the coverage that best meets your needs. Our experienced agents are here to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.slug} className="bg-brand-white p-6 rounded-lg shadow-lg flex flex-col border border-brand-teal-blue/30 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-3 text-brand-deep-forest-green font-poppins">{service.title}</h2>
                <p className="text-brand-black/80 mb-6 flex-grow">{service.excerpt}</p>
                <Button asChild className="mt-auto bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold">
                  <Link href={service.detailsLink}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-deep-forest-green text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-poppins">Not Sure Where to Start?</h2>
          <p className="text-lg text-brand-white/90 mb-8 max-w-2xl mx-auto">
            Choosing the right insurance can be complex. Let our experts help you navigate your options and find the perfect plan tailored to your unique situation and budget.
          </p>
          <Button size="lg" asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold">
            <Link href="/contact#book-a-call">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
