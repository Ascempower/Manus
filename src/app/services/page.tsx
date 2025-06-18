import type { Metadata } from 'next';
import Link from 'next/link';

import CustomBreadcrumb from '@/components/navigation/CustomBreadcrumb';
import { BookConsultationButton } from '@/components/ui/CTAButton';
import RelatedLinks from '@/components/ui/RelatedLinks';
import { Button } from '@/components/ui/button';
import { getRelatedLinks } from '@/lib/internal-links';

export const metadata: Metadata = {
  title: 'Insurance Services | Choice Insurance Hub - Medicare, Life & Health',
  description:
    'Explore comprehensive insurance solutions from Choice Insurance Hub including Medicare Supplement, Life Insurance, Health Coverage, Final Expense, and more. Expert guidance for IL, GA, TX, AL, OH, KY, MS, SC residents.',
  keywords:
    'Choice Insurance services, Medicare Supplement, Life Insurance, Health Insurance, Final Expense, Cancer Insurance, Annuities, Hospital Indemnity, insurance solutions',
  alternates: {
    canonical: 'https://choiceinsurancehub.com/services',
  },
};

const services = [
  {
    title: 'Medicare Supplement Plans (Medigap)',
    slug: 'medicare-supplement',
    excerpt:
      'Complement your Original Medicare with Medigap to cover out-of-pocket costs like deductibles, copayments, and coinsurance.',
    detailsLink: '/services/medicare-supplement',
  },
  {
    title: 'Hospital Indemnity Plans',
    slug: 'hospital-indemnity',
    excerpt:
      'Gain extra financial protection for hospital stays, covering costs not handled by your primary health insurance or Medicare.',
    detailsLink: '/services/hospital-indemnity',
  },
  {
    title: 'Cancer and Catastrophic Illness Insurance',
    slug: 'cancer-illness',
    excerpt:
      'Receive a lump-sum cash benefit upon diagnosis of cancer or other serious illnesses to cover treatment and other expenses.',
    detailsLink: '/services/cancer-illness',
  },
  // Medicare Advantage was removed as per previous instructions, keeping it out unless specified otherwise
  // {
  //   title: "Medicare Advantage Plans (Part C)",
  //   slug: "medicare-advantage",
  //   excerpt: "All-in-one alternatives to Original Medicare, often including prescription drug, dental, and vision coverage.",
  //   detailsLink: "/services/medicare-advantage"
  // },
  {
    title: 'Life Insurance',
    slug: 'life-insurance',
    excerpt:
      "Protect your family's financial future with term life, whole life, or final expense insurance plans tailored to your needs.",
    detailsLink: '/services/life-insurance',
  },
  {
    title: 'Final Expense Plans',
    slug: 'final-expense',
    excerpt:
      'Affordable life insurance policies designed to cover end-of-life costs, such as funeral services and medical bills.',
    detailsLink: '/services/final-expense',
  },
  {
    title: 'Annuities',
    slug: 'annuities',
    excerpt:
      'Secure a reliable income stream for your retirement with fixed and indexed annuity options.',
    detailsLink: '/services/annuities',
  },
  {
    title: 'Individual Health Insurance',
    slug: 'health-insurance',
    excerpt:
      'Find the right health insurance plan for you and your family, ensuring access to quality healthcare.',
    detailsLink: '/services/health-insurance',
  },
];

export default function ServicesPage() {
  const relatedLinks = getRelatedLinks(['insurance', 'coverage', 'protection'], '/services');

  return (
    <div className="bg-brand-white text-brand-black">
      {/* Breadcrumbs */}
      <section className="border-b border-brand-teal-blue/20 bg-brand-white py-4">
        <div className="container mx-auto px-4">
          <CustomBreadcrumb items={[{ label: 'Insurance Services' }]} />
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-brand-teal-blue/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins text-4xl font-bold text-brand-deep-forest-green md:text-5xl">
            Our Insurance Services
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-brand-black/80">
            At Choice Insurance Hub, we offer a comprehensive suite of insurance products designed
            to protect you, your family, and your future. Explore our services below to find the
            coverage that best meets your needs. Our experienced agents are here to guide you every
            step of the way.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map(service => (
              <div
                key={service.slug}
                className="flex flex-col rounded-lg border border-brand-teal-blue/30 bg-brand-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <h2 className="mb-3 font-poppins text-2xl font-bold text-brand-deep-forest-green">
                  {service.title}
                </h2>
                <p className="mb-6 flex-grow text-brand-black/80">{service.excerpt}</p>
                <Button
                  asChild
                  className="mt-auto bg-brand-warm-beige-coral font-semibold text-brand-black hover:bg-brand-warm-beige-coral/80"
                >
                  <Link href={service.detailsLink}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links Section */}
      <section className="bg-brand-white py-16">
        <div className="container mx-auto px-4">
          <RelatedLinks
            links={relatedLinks}
            title="Explore More"
            variant="grid"
            showDescriptions={true}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-deep-forest-green py-16 text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-poppins text-3xl font-bold">Not Sure Where to Start?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-brand-white/90">
            Choosing the right insurance can be complex. Let our experts help you navigate your
            options and find the perfect plan tailored to your unique situation and budget.
          </p>
          <BookConsultationButton size="lg" trackingContext="services_page" />
        </div>
      </section>
    </div>
  );
}
