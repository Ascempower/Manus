import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Medicare Supplement (Medigap) Plans - Choice Insurance',
  description:
    'Learn about Medicare Supplement (Medigap) plans and how they cover out-of-pocket costs not paid by Original Medicare. Choice Insurance Hub offers expert guidance.',
  keywords:
    'Medicare Supplement, Medigap, Medicare Plan G, Medicare Plan N, Medicare coverage gaps, Medicare deductibles, Medicare copayments, Medicare insurance, senior health insurance',
  alternates: {
    canonical: 'https://choiceinsurancehub.com/services/medicare-supplement',
  },
};

export default function MedicareSupplementPage() {
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
              <li className="text-brand-deep-forest-green">Medicare Supplement Plans</li>
            </ol>
          </nav>
          <h1 className="text-center font-poppins text-4xl font-bold text-brand-deep-forest-green md:text-5xl">
            Medicare Supplement Plans (Medigap)
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="mb-6 font-poppins text-3xl font-bold text-brand-deep-forest-green">
            What are Medicare Supplement (Medigap) Plans?
          </h2>
          <div className="space-y-4 font-poppins text-lg leading-relaxed text-brand-black/80">
            <p>
              Original Medicare (Parts A and B) provides essential health coverage, but it doesn't
              cover all healthcare costs. Medicare Supplement Insurance, commonly known as Medigap,
              is private insurance designed to help pay for some of the out-of-pocket costs that
              Original Medicare doesn't cover. These can include deductibles, copayments, and
              coinsurance for Medicare-covered services.
            </p>
            <p>
              Medigap policies are standardized by federal and state laws, meaning the benefits for
              each lettered plan (e.g., Plan G, Plan N) are the same regardless of the insurance
              company selling it. However, premiums can vary between companies. These plans
              generally don't cover long-term care, vision or dental care, hearing aids, eyeglasses,
              or private-duty nursing.
            </p>
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-brand-teal-blue/10 p-8">
          <h2 className="mb-6 font-poppins text-3xl font-bold text-brand-deep-forest-green">
            Benefits of Medigap Plans
          </h2>
          <ul className="list-inside list-disc space-y-3 font-poppins text-lg leading-relaxed text-brand-black/80">
            <li>
              <strong>Predictable Costs:</strong> Helps manage out-of-pocket expenses, making
              healthcare costs more predictable.
            </li>
            <li>
              <strong>Coverage Gaps Filled:</strong> Covers costs like Medicare Part A and B
              deductibles, copayments, and coinsurance.
            </li>
            <li>
              <strong>Choice of Doctors:</strong> Generally, you can see any doctor or specialist
              who accepts Medicare patients, without needing a referral.
            </li>
            <li>
              <strong>Nationwide Coverage:</strong> Medigap policies are usually usable nationwide,
              offering flexibility if you travel.
            </li>
            <li>
              <strong>Guaranteed Renewable:</strong> Your Medigap policy is guaranteed renewable as
              long as you pay your premiums, regardless of your health status.
            </li>
            <li>
              <strong>Foreign Travel Emergency Care:</strong> Some Medigap plans offer coverage for
              emergency medical care when traveling outside the U.S.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 font-poppins text-3xl font-bold text-brand-deep-forest-green">
            Who Needs a Medigap Plan?
          </h2>
          <div className="space-y-4 font-poppins text-lg leading-relaxed text-brand-black/80">
            <p>
              Medigap plans are suitable for individuals enrolled in Original Medicare (Parts A and
              B) who want more predictable healthcare costs and protection against significant
              out-of-pocket expenses. If you anticipate needing frequent medical services or want
              peace of mind knowing that most of your Medicare-approved costs will be covered, a
              Medigap plan might be a good choice.
            </p>
            <p>
              The best time to enroll in a Medigap policy is during your 6-month Medigap Open
              Enrollment Period, which starts the month you turn 65 and are enrolled in Medicare
              Part B. During this period, insurance companies cannot deny you coverage or charge you
              more due to pre-existing health conditions.
            </p>
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-brand-teal-blue/10 p-8">
          <h2 className="mb-6 font-poppins text-3xl font-bold text-brand-deep-forest-green">
            How Choice Insurance Hub Can Help
          </h2>
          <div className="space-y-4 font-poppins text-lg leading-relaxed text-brand-black/80">
            <p>
              Navigating the different Medigap plans and choosing the one that best fits your needs
              and budget can be challenging. At Choice Insurance Hub, our experienced agents
              specialize in Medicare solutions. We will:
            </p>
            <ul className="list-inside list-disc space-y-3">
              <li>
                Explain the differences between the various Medigap plans (e.g., Plan F, Plan G,
                Plan N).
              </li>
              <li>Compare quotes from multiple top-rated insurance carriers.</li>
              <li>Help you understand enrollment periods and eligibility requirements.</li>
              <li>
                Provide personalized recommendations based on your healthcare needs, lifestyle, and
                financial situation.
              </li>
              <li>
                Assist you with the application process and answer any questions you have along the
                way.
              </li>
            </ul>
            <p className="mt-4">
              Our goal is to ensure you have the right coverage for peace of mind and financial
              security in your retirement years.
            </p>
          </div>
        </section>

        <section className="rounded-lg bg-brand-deep-forest-green py-12 text-center text-brand-white">
          <h2 className="mb-4 font-poppins text-3xl font-bold">
            Get Your Personalized Medigap Quote
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-brand-white/90">
            Let us help you find the best Medicare Supplement plan. Contact us today for a free,
            no-obligation consultation and quote.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-brand-warm-beige-coral font-semibold text-brand-black hover:bg-brand-warm-beige-coral/80"
          >
            <Link href="/contact#book-a-call">Book a Free Consultation</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
