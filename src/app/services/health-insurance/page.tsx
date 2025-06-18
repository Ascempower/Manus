import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Health Insurance Plans - Choice Insurance',
  description:
    'Find the right individual or family health insurance plan with expert guidance from Choice Insurance Hub. Serving IL, GA, TX, and more.',
  alternates: {
    canonical: 'https://choiceinsurancehub.com/services/health-insurance',
  },
};

export default function HealthInsurancePage() {
  return (
    <div className="bg-brand-white text-brand-black">
      {/* Page Header */}
      <section className="bg-brand-teal-blue/20 py-12">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-6 font-poppins text-sm text-brand-black/70">
            <ol className="inline-flex list-none p-0">
              <li className="flex items-center">
                <Link href="/" className="hover:text-brand-teal-blue">
                  Home
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <Link href="/services" className="hover:text-brand-teal-blue">
                  Services
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li className="text-brand-deep-forest-green">Health Insurance</li>
            </ol>
          </nav>
          <h1 className="text-center font-poppins text-4xl font-bold text-brand-deep-forest-green md:text-5xl">
            Individual & Family Health Insurance
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="mb-6 font-poppins text-3xl font-bold text-brand-deep-forest-green">
            What is Health Insurance?
          </h2>
          <div className="space-y-4 font-poppins text-lg leading-relaxed text-brand-black/80">
            <p>
              Health insurance is a type of insurance coverage that pays for medical, surgical,
              prescription drug, and sometimes dental expenses incurred by the insured. Health
              insurance can reimburse the insured for expenses incurred from illness or injury, or
              pay the care provider directly. It is crucial for protecting yourself and your family
              from potentially high medical costs and ensuring access to necessary healthcare
              services.
            </p>
            <p>
              Various types of health insurance plans are available, including Health Maintenance
              Organization (HMO) plans, Preferred Provider Organization (PPO) plans, Exclusive
              Provider Organization (EPO) plans, and Point of Service (POS) plans. Each has
              different structures for networks, costs, and coverage.
            </p>
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-brand-teal-blue/10 p-8">
          <h2 className="mb-6 font-poppins text-3xl font-bold text-brand-deep-forest-green">
            Why is Health Insurance Important?
          </h2>
          <ul className="list-inside list-disc space-y-3 font-poppins text-lg leading-relaxed text-brand-black/80">
            <li>
              <strong>Financial Protection:</strong> Shields you from high, unexpected medical costs
              that can lead to significant debt.
            </li>
            <li>
              <strong>Access to Care:</strong> Ensures you can receive routine check-ups, preventive
              care, and treatment for illnesses or injuries.
            </li>
            <li>
              <strong>Preventive Services:</strong> Most plans cover preventive services like
              vaccinations, screenings, and wellness visits at no additional cost.
            </li>
            <li>
              <strong>Management of Chronic Conditions:</strong> Provides coverage for ongoing care
              and medications if you have a chronic health condition.
            </li>
            <li>
              <strong>Peace of Mind:</strong> Knowing you have coverage can reduce stress and allow
              you to focus on your health and well-being.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 font-poppins text-3xl font-bold text-brand-deep-forest-green">
            Choosing the Right Health Insurance Plan
          </h2>
          <div className="space-y-4 font-poppins text-lg leading-relaxed text-brand-black/80">
            <p>
              Selecting the right health insurance plan depends on various factors, including your
              health status, budget, preferred doctors and hospitals, and the level of coverage you
              need. Key considerations include:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2">
              <li>
                <strong>Premiums:</strong> The monthly amount you pay for coverage.
              </li>
              <li>
                <strong>Deductibles:</strong> The amount you pay out-of-pocket before your insurance
                starts paying.
              </li>
              <li>
                <strong>Copayments and Coinsurance:</strong> Your share of costs for covered
                services after meeting your deductible.
              </li>
              <li>
                <strong>Out-of-Pocket Maximum:</strong> The most you’ll have to pay for covered
                services in a plan year.
              </li>
              <li>
                <strong>Provider Network:</strong> The list of doctors, hospitals, and other
                healthcare providers covered by your plan.
              </li>
              <li>
                <strong>Covered Services:</strong> Ensure the plan covers the services you
                anticipate needing, including prescription drugs.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-brand-teal-blue/10 p-8">
          <h2 className="mb-6 font-poppins text-3xl font-bold text-brand-deep-forest-green">
            How Choice Insurance Hub Can Assist You
          </h2>
          <div className="space-y-4 font-poppins text-lg leading-relaxed text-brand-black/80">
            <p>
              Finding the right health insurance plan can be a daunting task. At Choice Insurance
              Hub, we are here to simplify the process and help you make an informed decision. Our
              licensed agents will:
            </p>
            <ul className="list-inside list-disc space-y-3">
              <li>Assess your individual or family healthcare needs and budget.</li>
              <li>
                Explain the differences between various plan types (HMO, PPO, etc.) and their
                benefits.
              </li>
              <li>
                Help you compare plans from multiple insurance carriers, both on and off the Health
                Insurance Marketplace.
              </li>
              <li>Determine if you qualify for subsidies or tax credits to lower your premiums.</li>
              <li>Guide you through the enrollment process and answer all your questions.</li>
            </ul>
            <p className="mt-4">
              We are committed to helping you find affordable, quality health coverage that provides
              the protection and peace of mind you deserve.
            </p>
          </div>
        </section>

        <section className="rounded-lg bg-brand-deep-forest-green py-12 text-center text-brand-white">
          <h2 className="mb-4 font-poppins text-3xl font-bold">
            Find Your Ideal Health Plan Today
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-brand-white/90">
            Take the first step towards securing your health. Contact us for a personalized health
            insurance consultation and quote.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-brand-warm-beige-coral font-semibold text-brand-black hover:bg-brand-warm-beige-coral/80"
          >
            <Link href="/contact#book-a-call">Get a Free Health Insurance Quote</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
