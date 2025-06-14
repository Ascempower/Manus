import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Life Insurance Plans - Choice Insurance Agency',
  description: 'Protect your loved ones with tailored life insurance solutions including term life, whole life, and final expense plans from Choice Insurance Agency.',
  keywords: 'life insurance, term life insurance, whole life insurance, final expense insurance, burial insurance, family protection, life insurance quotes, affordable life insurance, life insurance policy',
  alternates: {
    canonical: 'https://choiceins.netlify.app/services/life-insurance',
  },
};

export default function LifeInsurancePage() {
  return (
    <div className="bg-brand-white text-brand-black">
      {/* Page Header */}
      <section className="py-12 bg-brand-teal-blue/20">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-brand-black/70 font-poppins">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href="/" className="hover:text-brand-teal-blue">Home</Link>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <Link href="/services" className="hover:text-brand-teal-blue">Services</Link>
                <span className="mx-2">/</span>
              </li>
              <li className="text-brand-deep-forest-green">Life Insurance</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-deep-forest-green font-poppins text-center">Life Insurance Solutions</h1>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto py-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-brand-deep-forest-green font-poppins">What is Life Insurance?</h2>
          <div className="space-y-4 text-lg text-brand-black/80 leading-relaxed font-poppins">
            <p>
              Life insurance is a contract between you and an insurer, where the insurer promises to pay a designated beneficiary a sum of money (the "death benefit") upon the death of the insured person. In return, you agree to pay premiums over a specified period. Life insurance provides financial security for your loved ones, helping them cover expenses like funeral costs, mortgage payments, daily living expenses, and future educational needs.
            </p>
            <p>
              There are various types of life insurance policies, primarily categorized into term life and permanent life (such as whole life or universal life). Choosing the right type depends on your individual financial goals, family needs, and budget.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-brand-teal-blue/10 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-brand-deep-forest-green font-poppins">Types of Life Insurance We Offer</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-deep-forest-green font-poppins mb-3">Term Life Insurance</h3>
              <p className="text-lg text-brand-black/80 leading-relaxed font-poppins">
                Term life insurance provides coverage for a specific period (the "term"), such as 10, 20, or 30 years. It is often the most affordable type of life insurance, designed to provide financial protection during critical years, like when you have young children or a mortgage. If you pass away during the term, your beneficiaries receive the death benefit. If the term expires and you are still living, the coverage ends unless you renew it (often at a higher premium) or convert it to a permanent policy.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-deep-forest-green font-poppins mb-3">Whole Life Insurance</h3>
              <p className="text-lg text-brand-black/80 leading-relaxed font-poppins">
                Whole life insurance is a type of permanent life insurance that provides lifelong coverage as long as premiums are paid. It includes a death benefit and a cash value component that grows over time on a tax-deferred basis. You can borrow against the cash value or surrender the policy for its cash value. Premiums for whole life are typically higher than term life but remain level throughout the policy's life.
              </p>
            </div>
          </div>
          <div className="mt-8">
              <h3 className="text-2xl font-bold text-brand-deep-forest-green font-poppins mb-3">Final Expense Insurance</h3>
              <p className="text-lg text-brand-black/80 leading-relaxed font-poppins">
               Final expense insurance, also known as burial insurance, is a type of whole life insurance with smaller death benefits, typically ranging from $5,000 to $25,000 or more. It's designed to cover end-of-life expenses such as funeral costs, medical bills, and other outstanding debts, so your loved ones aren't burdened with these costs. These policies often have simplified underwriting, making them easier to qualify for, especially for seniors.
              </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-brand-deep-forest-green font-poppins">Who Needs Life Insurance?</h2>
          <div className="space-y-4 text-lg text-brand-black/80 leading-relaxed font-poppins">
            <p>
              Life insurance is a valuable tool for anyone whose death would cause financial hardship for others. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Parents with dependent children.</li>
              <li>Individuals with a spouse or partner who relies on their income.</li>
              <li>Business owners needing to cover business debts or fund buy-sell agreements.</li>
              <li>Individuals with significant personal debt, like a mortgage or student loans.</li>
              <li>Anyone wishing to leave a financial legacy or cover final expenses.</li>
            </ul>
            <p>
              The amount of life insurance you need depends on your financial obligations, income, and long-term goals. It's wise to regularly review your coverage as your life circumstances change.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-brand-teal-blue/10 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-brand-deep-forest-green font-poppins">Your Life Insurance Partner: Choice Insurance Agency</h2>
          <div className="space-y-4 text-lg text-brand-black/80 leading-relaxed font-poppins">
            <p>
              Choosing the right life insurance policy is a critical decision. At Choice Insurance Agency, we simplify the process and help you secure the protection your family deserves. We offer:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li><strong>Personalized Needs Analysis:</strong> We help you determine the appropriate type and amount of coverage.</li>
              <li><strong>Access to Multiple Carriers:</strong> We compare plans and rates from various reputable insurers to find you the best value.</li>
              <li><strong>Clear Explanations:</strong> We break down complex policy details into easy-to-understand terms.</li>
              <li><strong>Ongoing Support:</strong> We are here for policy reviews and to assist with any changes or questions throughout the life of your policy.</li>
            </ul>
          </div>
        </section>

        <section className="text-center py-12 bg-brand-deep-forest-green text-brand-white rounded-lg">
          <h2 className="text-3xl font-bold mb-4 font-poppins">Secure Your Family's Future Today</h2>
          <p className="text-lg text-brand-white/90 mb-8 max-w-xl mx-auto">
            Don't wait to protect the ones you love. Contact us for a complimentary life insurance consultation and quote.
          </p>
          <Button size="lg" asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold">
            <Link href="/contact#book-a-call">Request a Consultation</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
