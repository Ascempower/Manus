import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Final Expense Insurance - Choice Insurance Agency',
  description: 'Cover end-of-life costs with affordable Final Expense insurance. Choice Insurance Agency helps you plan with dignity.',
};

export default function FinalExpensePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-600">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <Link href="/services" className="hover:text-blue-700">Services</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-500">Final Expense Insurance</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Final Expense Insurance Plans</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">What is Final Expense Insurance?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Final Expense Insurance, often referred to as burial insurance or funeral insurance, is a type of whole life insurance policy specifically designed to cover end-of-life expenses. These policies typically have smaller death benefits compared to traditional life insurance, ranging from a few thousand dollars up to $25,000 or $50,000, making them an affordable way to plan for these specific costs.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          The primary purpose of final expense insurance is to alleviate the financial burden on loved ones by providing funds for funeral and burial costs, outstanding medical bills, credit card debt, or other expenses that may arise after death. These policies often feature simplified underwriting, meaning they are easier to qualify for, even for seniors or individuals with some health conditions.
        </p>
      </section>

      <section className="mb-12 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Key Features and Benefits</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
          <li><strong>Covers End-of-Life Costs:</strong> Specifically designed to pay for funeral services, cremation, caskets, headstones, and other final arrangements.</li>
          <li><strong>Affordable Premiums:</strong> Smaller death benefits usually mean lower, manageable premiums, often fixed for life.</li>
          <li><strong>Simplified Underwriting:</strong> Many policies require no medical exam, only answers to health questions, making them accessible.</li>
          <li><strong>Cash Value Growth:</strong> As a type of whole life insurance, these policies can build cash value over time on a tax-deferred basis.</li>
          <li><strong>Peace of Mind:</strong> Ensures your loved ones are not left with unexpected financial burdens during a difficult time.</li>
          <li><strong>Quick Payout:</strong> Benefits are typically paid out quickly to beneficiaries, allowing for timely settlement of expenses.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Who Should Consider Final Expense Insurance?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Final expense insurance is a practical solution for:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-4">
          <li>Seniors who want to ensure their funeral costs are covered without burdening their family.</li>
          <li>Individuals with limited savings who want a dedicated fund for final expenses.</li>
          <li>Those who may not qualify for larger traditional life insurance policies due to age or health.</li>
          <li>Anyone wishing to pre-plan and pre-fund their final arrangements to protect their loved ones.</li>
        </ul>
      </section>

      <section className="mb-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Choice Insurance Agency: Planning with Dignity</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          At Choice Insurance Agency, we understand the importance of planning for final expenses with sensitivity and care. Our knowledgeable agents can help you:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
          <li>Determine the appropriate amount of coverage based on average funeral costs and your specific wishes.</li>
          <li>Compare final expense policies from various trusted insurance providers.</li>
          <li>Navigate the application process, even with simplified underwriting.</li>
          <li>Ensure your plan aligns with your budget and provides the peace of mind you seek.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          We are here to provide compassionate guidance, helping you make informed decisions to protect your family from financial stress during a time of grief.
        </p>
      </section>

      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Secure Your Final Wishes</h2>
        <p className="text-lg text-gray-700 mb-6">Ensure your end-of-life expenses are covered. Contact us today for a free, no-obligation quote on Final Expense Insurance.</p>
        <Button size="lg" asChild className="bg-orange-500 hover:bg-orange-600 text-white">
          <Link href="/contact#book-a-call">Get a Final Expense Quote</Link>
        </Button>
      </section>
    </div>
  );
}

