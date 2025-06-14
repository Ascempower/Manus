import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Cancer & Catastrophic Illness Insurance - Choice Insurance Agency',
  description: 'Financial protection for cancer, heart attack, stroke, and other serious illnesses. Choice Insurance Agency offers specialized plans.',
};

export default function CancerIllnessPage() {
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
          <li className="text-gray-500">Cancer & Catastrophic Illness Insurance</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Cancer and Catastrophic Illness Insurance Plans</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">What is Cancer and Catastrophic Illness Insurance?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          A diagnosis of cancer or another serious illness like a heart attack, stroke, or organ failure can be life-altering, bringing not only emotional distress but also significant financial challenges. Even with good health insurance, out-of-pocket costs for treatment, medications, travel for specialized care, and lost income can quickly become overwhelming.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Cancer and Catastrophic Illness Insurance plans are designed to provide a financial safety net during these difficult times. These policies typically pay a lump-sum cash benefit directly to you upon diagnosis of a covered illness. This benefit can be used however you need it most, offering flexibility when you face unexpected expenses.
        </p>
      </section>

      <section className="mb-12 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">How These Plans Can Help</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
          <li><strong>Cover Medical Expenses:</strong> Help pay for deductibles, copayments, out-of-network specialists, and treatments not fully covered by your primary health insurance.</li>
          <li><strong>Manage Non-Medical Costs:</strong> Use the funds for everyday living expenses, mortgage or rent payments, utility bills, childcare, or travel and lodging for treatment.</li>
          <li><strong>Replace Lost Income:</strong> If you or a caregiver needs to take time off work, the benefit can help compensate for lost wages.</li>
          <li><strong>Access Experimental Treatments:</strong> Provides funds that could be used for treatments or clinical trials not covered by standard insurance.</li>
          <li><strong>Reduce Financial Stress:</strong> Allows you and your family to focus on recovery and well-being rather than worrying about mounting bills.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Who Benefits from This Coverage?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          This type of insurance can be particularly valuable for:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-4">
          <li>Individuals with a family history of cancer or other critical illnesses.</li>
          <li>Those with high-deductible health plans who could face significant out-of-pocket costs.</li>
          <li>Anyone concerned about the financial impact of a serious illness on their savings and family's stability.</li>
          <li>Primary income earners whose inability to work would severely affect household finances.</li>
        </ul>
      </section>

      <section className="mb-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Choice Insurance Agency: Your Partner in Protection</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          At Choice Insurance Agency, we understand the peace of mind that comes with knowing you have financial protection against life's most serious health challenges. Our dedicated agents will:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
          <li>Help you understand the different types of cancer and catastrophic illness policies available.</li>
          <li>Assess your risk factors and financial situation to determine appropriate coverage levels.</li>
          <li>Compare plans and quotes from leading insurance carriers to find a policy that fits your needs and budget.</li>
          <li>Explain policy terms, covered conditions, and benefit payout processes clearly.</li>
          <li>Assist you with the application and provide ongoing support.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          We are committed to helping you secure the coverage that allows you to face the future with greater confidence.
        </p>
      </section>

      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Secure Your Financial Well-being</h2>
        <p className="text-lg text-gray-700 mb-6">Protect yourself and your family from the financial strain of a serious illness. Contact us today for a free consultation.</p>
        <Button size="lg" asChild className="bg-orange-500 hover:bg-orange-600 text-white">
          <Link href="/contact#book-a-call">Discuss Your Options</Link>
        </Button>
      </section>
    </div>
  );
}

