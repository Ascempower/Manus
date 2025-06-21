import Link from 'next/link';

import { CheckCircle, MessageSquare, ShieldCheck, Users } from 'lucide-react';

import { BookConsultationButton } from '@/components/ui/CTAButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Choice Insurance Hub - Home | Expert Health, Life & Medicare Insurance',
  description:
    'Choice Insurance provides personalized Medicare, Life & Health insurance solutions in IL, GA, TX, AL, OH, KY, MS, SC. Get expert guidance and affordable coverage tailored to your needs.',
  keywords:
    'Choice Insurance, insurance agency, Medicare plans, life insurance, health insurance, insurance solutions, affordable insurance, insurance consultation',
  alternates: {
    canonical: 'https://choiceinsurancehub.com',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-teal-blue to-brand-white py-20 text-brand-deep-forest-green md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 font-poppins text-4xl font-bold md:text-6xl">
            Choice Insurance: Your Trusted Partner for Health, Life & Medicare Insurance
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-brand-deep-forest-green/90 md:text-xl">
            Choice Insurance provides personalized plans and expert guidance for residents of
            Illinois, Alabama, Georgia, Ohio, Kentucky, Mississippi, South Carolina, and Texas.
          </p>
          <BookConsultationButton size="lg" trackingContext="homepage_hero" />
        </div>
      </section>
      {/* About Us Snippet */}
      <section className="bg-brand-white py-16 text-brand-black md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 font-poppins text-3xl font-bold text-brand-deep-forest-green md:text-4xl">
            About Choice Insurance Hub
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-brand-black/80">
            Choice Insurance is an independent insurance agency specializing in Medicare Benefits,
            Individual Health Insurance, Employee Benefits, and Life Insurance plans. We partner
            with major insurance carriers to provide clients with a wide range of coverage options.
            Our plans are designed with a focus on affordability and tailored benefits, combined
            with personalized guidance to help clients make well-informed decisions.
          </p>
          <Button
            asChild
            className="bg-brand-warm-beige-coral text-brand-black hover:bg-brand-warm-beige-coral-dark"
          >
            <Link href="/about">Learn More About Choice Insurance</Link>
          </Button>
        </div>
      </section>
      {/* Services Section */}
      <section className="bg-brand-teal-blue-dark/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-poppins text-3xl font-bold text-brand-deep-forest-green md:text-4xl">
            Insurance Services from Choice Insurance
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Medicare Supplement',
                description:
                  'Explore options for Medicare Supplement (Medigap) plans with Choice Insurance experts.',
                href: '/services/medicare-supplement',
              },
              {
                title: 'Life Insurance',
                description:
                  "Secure your family's future with various life insurance policies from Choice Insurance.",
                href: '/services/life-insurance',
              },
              {
                title: 'Health Insurance',
                description:
                  'Find individual and group health insurance plans through Choice Insurance Hub.',
                href: '/services/health-insurance',
              },
              {
                title: 'Medicare Advantage',
                description:
                  'Discover Medicare Advantage (Part C) options with guidance from Choice Insurance specialists.',
                href: '/services/medicare-advantage',
              },
              {
                title: 'Final Expense',
                description:
                  'Plan ahead with final expense insurance solutions from Choice Insurance.',
                href: '/services/final-expense',
              },
              {
                title: 'Cancer & Critical Illness',
                description:
                  'Get protection and help manage costs associated with critical illnesses through Choice Insurance.',
                href: '/services/cancer-illness',
              },
              {
                title: 'Annuities',
                description:
                  'Secure your retirement with reliable income streams through annuities from Choice Insurance.',
                href: '/services/annuities',
              },
            ].map(service => (
              <Card
                key={service.title}
                className="flex h-full flex-col bg-brand-white text-brand-black shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <CardTitle className="font-poppins text-2xl text-brand-deep-forest-green">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col items-center justify-between">
                  <p className="mb-4 text-center text-brand-black/80">{service.description}</p>
                  <Button
                    asChild
                    className="bg-brand-warm-beige-coral text-brand-black hover:bg-brand-warm-beige-coral-dark"
                  >
                    <Link href={service.href}>Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-brand-warm-beige-coral text-brand-black hover:bg-brand-warm-beige-coral-dark"
            >
              <Link href="/services">Explore All Choice Insurance Services</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="bg-brand-white py-16 text-brand-black md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-poppins text-3xl font-bold text-brand-deep-forest-green md:text-4xl">
            Why Choose Choice Insurance?
          </h2>
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div className="p-6">
              <CheckCircle
                size={48}
                className="mx-auto mb-4 text-brand-deep-forest-green"
                aria-hidden="true"
              />
              <h3 className="mb-2 font-poppins text-xl font-bold text-brand-deep-forest-green">
                Personalized Service
              </h3>
              <p className="text-brand-black/80">
                At Choice Insurance, we take the time to understand your unique needs and find the
                perfect plan for you.
              </p>
            </div>
            <div className="p-6">
              <Users
                size={48}
                className="mx-auto mb-4 text-brand-deep-forest-green"
                aria-hidden="true"
              />
              <h3 className="mb-2 font-poppins text-xl font-bold text-brand-deep-forest-green">
                Independent Agency
              </h3>
              <p className="text-brand-black/80">
                As an independent agency, Choice Insurance offers a wide range of options from
                multiple top carriers.
              </p>
            </div>
            <div className="p-6">
              <ShieldCheck
                size={48}
                className="mx-auto mb-4 text-brand-deep-forest-green"
                aria-hidden="true"
              />
              <h3 className="mb-2 font-poppins text-xl font-bold text-brand-deep-forest-green">
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
      {/* Testimonials Snippet */}
      <section className="bg-brand-teal-blue-dark/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-poppins text-3xl font-bold text-brand-deep-forest-green md:text-4xl">
            What Our Choice Insurance Clients Say
          </h2>
          <div className="mx-auto max-w-2xl rounded-lg bg-brand-white p-8 text-brand-black shadow-lg">
            <MessageSquare
              size={32}
              className="mb-4 text-brand-deep-forest-green"
              aria-hidden="true"
            />
            <blockquote className="mb-6 text-lg italic text-brand-black/80">
              "Choice Insurance made finding the right Medicare plan so easy! Their agent was
              knowledgeable and patient, answering all my questions. Highly recommend!"
            </blockquote>
            <p className="text-right font-semibold text-brand-deep-forest-green">
              - Jane D., Illinois
            </p>
          </div>
          <div className="mt-10 text-center">
            <Button
              asChild
              className="bg-brand-warm-beige-coral text-brand-black hover:bg-brand-warm-beige-coral-dark"
            >
              <Link href="/testimonials">Read More Choice Insurance Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="bg-brand-deep-forest-green py-20 text-brand-white md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 font-poppins text-3xl font-bold md:text-4xl">
            Ready to Find Your Perfect Choice Insurance Plan?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-brand-white/90 md:text-xl">
            Let Choice Insurance help you navigate the complexities of insurance. Contact us today
            for a free, no-obligation consultation.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-brand-warm-beige-coral font-semibold text-brand-black hover:bg-brand-warm-beige-coral-dark"
          >
            <Link href="/contact#get-a-quote">Get a Free Quote Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
