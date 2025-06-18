import type { Metadata } from 'next';
import Link from 'next/link';

import ButtonLink from '@/components/ui/ButtonLink';

export const metadata: Metadata = {
  title: 'Annuities for Retirement Income - Choice Insurance',
  description:
    'Secure your retirement with a reliable income stream through fixed and indexed annuities. Choice Insurance Hub can help you plan.',
};

export default function AnnuitiesPage() {
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
              <li className="text-brand-deep-forest-green">Annuities</li>
            </ol>
          </nav>
          <h1 className="text-center font-poppins text-4xl font-bold text-brand-deep-forest-green md:text-5xl">
            Annuities: Secure Your Retirement Income
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <section className="mb-12">
            <h2 className="mb-6 font-poppins text-3xl font-bold text-brand-deep-forest-green">
              What is an Annuity?
            </h2>
            <div className="space-y-4 font-poppins text-lg leading-relaxed text-brand-black/80">
              <p>
                An annuity is a long-term investment product issued by an insurance company,
                designed to help protect you from outliving your money. You make a lump-sum payment
                or a series of payments, and in return, the insurer agrees to make periodic payments
                to you, either immediately or at some point in the future. Annuities can provide a
                reliable stream of income during retirement, supplementing other sources like Social
                Security and pensions.
              </p>
              <p>
                There are several types of annuities, including fixed, variable, and indexed
                annuities, each with different features, risk levels, and potential returns.
                Understanding these differences is key to choosing an annuity that aligns with your
                retirement goals.
              </p>
            </div>
          </section>

          <section className="mb-12 rounded-lg bg-gray-100 p-8">
            <h2 className="mb-4 text-3xl font-semibold text-gray-800">
              Types of Annuities We Can Discuss
            </h2>
            <div className="grid gap-8 md:grid-cols-1">
              <div>
                <h3 className="mb-2 text-2xl font-semibold text-blue-600">Fixed Annuities</h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  Fixed annuities offer a guaranteed interest rate for a specific period. This means
                  your principal investment is protected, and you know exactly how much your annuity
                  will earn. They are generally considered a conservative option, suitable for
                  individuals seeking predictable income and capital preservation.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="mb-2 text-2xl font-semibold text-blue-600">
                  Indexed Annuities (Fixed Indexed Annuities)
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  Indexed annuities, also known as fixed indexed annuities (FIAs), offer the
                  potential for higher returns based on the performance of a specific market index
                  (like the S&P 500), while still providing a level of protection against market
                  downturns. Your principal is typically protected from losses, but your upside
                  potential may be capped or limited by participation rates. These can be a good
                  option for those who want market-linked growth potential without direct market
                  risk.
                </p>
              </div>
              {/* Note: Variable annuities are more complex and involve investment risk, often sold by financial advisors with securities licenses. Confirm if this is within scope. */}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-3xl font-semibold text-gray-800">Benefits of Annuities</h2>
            <ul className="mb-4 list-inside list-disc space-y-2 text-lg leading-relaxed text-gray-700">
              <li>
                <strong>Guaranteed Income for Life:</strong> Many annuities offer options for
                lifetime income payments, ensuring you don’t outlive your savings.
              </li>
              <li>
                <strong>Tax-Deferred Growth:</strong> Your earnings within an annuity grow
                tax-deferred, meaning you don’t pay taxes on them until you start receiving payments
                or make withdrawals.
              </li>
              <li>
                <strong>Principal Protection:</strong> Fixed and indexed annuities can offer
                protection for your principal investment against market losses.
              </li>
              <li>
                <strong>Death Benefits:</strong> Annuities often include a death benefit feature,
                allowing you to pass on remaining assets to your beneficiaries.
              </li>
              <li>
                <strong>Customizable Payout Options:</strong> Choose from various payout options to
                suit your income needs in retirement.
              </li>
            </ul>
          </section>

          <section className="mb-12 rounded-lg bg-blue-50 p-8">
            <h2 className="mb-4 text-3xl font-semibold text-gray-800">
              Is an Annuity Right for You? Choice Insurance Can Help.
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              Deciding if an annuity fits into your retirement plan requires careful consideration
              of your financial situation, risk tolerance, and income goals. The experts at Choice
              Insurance Hub can help you:
            </p>
            <ul className="list-inside list-disc space-y-2 text-lg leading-relaxed text-gray-700">
              <li>Understand the pros and cons of different annuity types.</li>
              <li>
                Assess how an annuity could complement your existing retirement savings and income
                sources.
              </li>
              <li>Compare annuity products from reputable insurance companies.</li>
              <li>
                Navigate the complexities of annuity contracts, including fees, surrender charges,
                and payout options.
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Our objective is to provide you with clear, unbiased information so you can make an
              informed decision about incorporating annuities into your long-term financial
              strategy.
            </p>
          </section>

          <section className="py-8 text-center">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">
              Plan for a Secure Retirement
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              Explore how annuities can provide you with a reliable income stream in retirement.
              Contact us for a free consultation.
            </p>
            <ButtonLink
              href="/contact#book-a-call"
              className="bg-orange-500 text-white hover:bg-orange-600"
            >
              Discuss Annuity Options
            </ButtonLink>
          </section>
        </div>
      </section>
    </div>
  );
}
