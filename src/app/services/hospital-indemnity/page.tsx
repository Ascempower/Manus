import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Hospital Indemnity Plans - Choice Insurance Agency',
  description: 'Learn how Hospital Indemnity Insurance provides financial protection for hospital stays. Choice Insurance Agency offers tailored plans.',
};

export default function HospitalIndemnityPage() {
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
          <li className="text-gray-500">Hospital Indemnity Plans</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Hospital Indemnity Insurance</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">What is Hospital Indemnity Insurance?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Hospital Indemnity Insurance is a type of supplemental health insurance designed to provide extra financial protection when you are hospitalized. Even with comprehensive health insurance like Medicare or a private plan, a hospital stay can lead to significant out-of-pocket expenses. These can include deductibles, copayments, coinsurance, and costs for services not fully covered by your primary insurance.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Unlike traditional health insurance that pays healthcare providers directly for specific medical services, Hospital Indemnity Plans pay a fixed cash benefit directly to you for each day you are confined to a hospital, or as a lump sum for a covered hospital stay. This money can be used however you see fit – to cover medical bills, transportation, childcare, lost income, or any other expenses incurred during your recovery.
        </p>
      </section>

      <section className="mb-12 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Key Benefits of Hospital Indemnity Plans</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
          <li><strong>Direct Cash Benefits:</strong> Receive payments directly, giving you control over how to use the funds.</li>
          <li><strong>Complements Existing Coverage:</strong> Works alongside your primary health insurance (including Medicare and Medicare Advantage) to help cover gaps.</li>
          <li><strong>Flexible Use of Funds:</strong> Use the benefits for medical or non-medical expenses related to your hospital stay.</li>
          <li><strong>Coverage for Various Stays:</strong> Benefits can be triggered by hospital confinement, intensive care unit (ICU) stays, emergency room visits, or observation stays, depending on the policy.</li>
          <li><strong>Affordable Premiums:</strong> Often available at a relatively low cost, providing significant value for the protection offered.</li>
          <li><strong>Peace of Mind:</strong> Reduces financial stress associated with unexpected hospitalizations, allowing you to focus on recovery.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Who Should Consider a Hospital Indemnity Plan?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Hospital Indemnity Insurance can be beneficial for a wide range of individuals, including:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-4">
          <li>Individuals with high-deductible health plans who could face substantial out-of-pocket costs for hospitalization.</li>
          <li>Seniors enrolled in Medicare or Medicare Advantage plans, as these plans may still have copayments or deductibles for hospital stays.</li>
          <li>Families who want an extra layer of financial protection against unexpected medical events.</li>
          <li>Self-employed individuals or those with limited sick leave who might experience income loss during a hospital stay.</li>
        </ul>
      </section>

      <section className="mb-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Expert Guidance from Choice Insurance Agency</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Understanding the nuances of Hospital Indemnity Plans and how they fit with your existing coverage is key. The team at Choice Insurance Agency is here to help you:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
          <li>Evaluate your current health insurance and identify potential gaps a Hospital Indemnity Plan could fill.</li>
          <li>Compare various plan options and benefit amounts from reputable insurance providers.</li>
          <li>Select a plan that aligns with your budget and provides meaningful financial support.</li>
          <li>Understand the terms, conditions, and claim process for your chosen policy.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          We aim to provide you with clear information and personalized advice so you can make a confident decision about your supplemental health coverage.
        </p>
      </section>

      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Strengthen Your Financial Safety Net</h2>
        <p className="text-lg text-gray-700 mb-6">Prepare for the unexpected. Contact Choice Insurance Agency today for a free consultation on Hospital Indemnity Plans.</p>
        <Button size="lg" asChild className="bg-orange-500 hover:bg-orange-600 text-white">
          <Link href="/contact#book-a-call">Get a Hospital Indemnity Quote</Link>
        </Button>
      </section>
    </div>
  );
}

