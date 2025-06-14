import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Final Expense Insurance - Choice Insurance',
  description: 'Cover end-of-life costs with affordable Final Expense insurance. Choice Insurance Agency helps you plan with dignity.',
};

export default function FinalExpensePage() {
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
              <li className="text-brand-deep-forest-green">Final Expense Insurance</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-deep-forest-green font-poppins text-center">Final Expense Insurance Plans</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-brand-deep-forest-green font-poppins">What is Final Expense Insurance?</h2>
          <div className="space-y-4 text-lg text-brand-black/80 leading-relaxed font-poppins">
            <p>
              Final Expense Insurance, often referred to as burial insurance or funeral insurance, is a type of whole life insurance policy specifically designed to cover end-of-life expenses. These policies typically have smaller death benefits compared to traditional life insurance, ranging from a few thousand dollars up to $25,000 or $50,000, making them an affordable way to plan for these specific costs.
            </p>
            <p>
              The primary purpose of final expense insurance is to alleviate the financial burden on loved ones by providing funds for funeral and burial costs, outstanding medical bills, credit card debt, or other expenses that may arise after death. These policies often feature simplified underwriting, meaning they are easier to qualify for, even for seniors or individuals with some health conditions.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-brand-teal-blue/10 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-brand-deep-forest-green font-poppins">Key Features and Benefits</h2>
          <ul className="list-disc list-inside text-lg text-brand-black/80 leading-relaxed space-y-3 font-poppins">
            <li><strong>Covers End-of-Life Costs:</strong> Specifically designed to pay for funeral services, cremation, caskets, headstones, and other final arrangements.</li>
            <li><strong>Affordable Premiums:</strong> Smaller death benefits usually mean lower, manageable premiums, often fixed for life.</li>
            <li><strong>Simplified Underwriting:</strong> Many policies require no medical exam, only answers to health questions, making them accessible.</li>
            <li><strong>Cash Value Growth:</strong> As a type of whole life insurance, these policies can build cash value over time on a tax-deferred basis.</li>
            <li><strong>Peace of Mind:</strong> Ensures your loved ones are not left with unexpected financial burdens during a difficult time.</li>
            <li><strong>Quick Payout:</strong> Benefits are typically paid out quickly to beneficiaries, allowing for timely settlement of expenses.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-brand-deep-forest-green font-poppins">Who Should Consider Final Expense Insurance?</h2>
          <div className="space-y-4 text-lg text-brand-black/80 leading-relaxed font-poppins">
            <p>Final expense insurance is a practical solution for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Seniors who want to ensure their funeral costs are covered without burdening their family.</li>
              <li>Individuals with limited savings who want a dedicated fund for final expenses.</li>
              <li>Those who may not qualify for larger traditional life insurance policies due to age or health.</li>
              <li>Anyone wishing to pre-plan and pre-fund their final arrangements to protect their loved ones.</li>
            </ul>
          </div>
        </section>

        <section className="mb-12 bg-brand-teal-blue/10 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-brand-deep-forest-green font-poppins">Choice Insurance: Planning with Dignity</h2>
          <div className="space-y-4 text-lg text-brand-black/80 leading-relaxed font-poppins">
            <p>At Choice Insurance, we understand the importance of planning for final expenses with sensitivity and care. Our knowledgeable agents can help you:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Determine the appropriate amount of coverage based on average funeral costs and your specific wishes.</li>
              <li>Compare final expense policies from various trusted insurance providers.</li>
              <li>Navigate the application process, even with simplified underwriting.</li>
              <li>Ensure your plan aligns with your budget and provides the peace of mind you seek.</li>
            </ul>
            <p className="mt-4">
              We are here to provide compassionate guidance, helping you make informed decisions to protect your family from financial stress during a time of grief.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 bg-brand-deep-forest-green text-brand-white rounded-lg">
          <h2 className="text-3xl font-bold mb-4 font-poppins">Secure Your Final Wishes</h2>
          <p className="text-lg text-brand-white/90 mb-8 max-w-xl mx-auto">
            Ensure your end-of-life expenses are covered. Contact us today for a free, no-obligation quote on Final Expense Insurance.
          </p>
          <Button size="lg" asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold">
            <Link href="/contact#book-a-call">Get a Final Expense Quote</Link>
          </Button>
        </section>
        </div>
      </section>
    </div>
  );
}

