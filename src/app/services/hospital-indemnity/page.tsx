import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Hospital Indemnity Plans - Choice Insurance',
  description: 'Learn how Hospital Indemnity Insurance provides financial protection for hospital stays. Choice Insurance Agency offers tailored plans.',
};

export default function HospitalIndemnityPage() {
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
              <li className="text-brand-deep-forest-green">Hospital Indemnity Plans</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-deep-forest-green font-poppins text-center">Hospital Indemnity Insurance</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-brand-deep-forest-green font-poppins">What is Hospital Indemnity Insurance?</h2>
          <div className="space-y-4 text-lg text-brand-black/80 leading-relaxed font-poppins">
            <p>
              Hospital Indemnity Insurance is a type of supplemental health insurance designed to provide extra financial protection when you are hospitalized. Even with comprehensive health insurance like Medicare or a private plan, a hospital stay can lead to significant out-of-pocket expenses. These can include deductibles, copayments, coinsurance, and costs for services not fully covered by your primary insurance.
            </p>
            <p>
              Unlike traditional health insurance that pays healthcare providers directly for specific medical services, Hospital Indemnity Plans pay a fixed cash benefit directly to you for each day you are confined to a hospital, or as a lump sum for a covered hospital stay. This money can be used however you see fit – to cover medical bills, transportation, childcare, lost income, or any other expenses incurred during your recovery.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-brand-teal-blue/10 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-brand-deep-forest-green font-poppins">Key Benefits of Hospital Indemnity Plans</h2>
          <ul className="list-disc list-inside text-lg text-brand-black/80 leading-relaxed space-y-3 font-poppins">
            <li><strong>Direct Cash Benefits:</strong> Receive payments directly, giving you control over how to use the funds.</li>
            <li><strong>Complements Existing Coverage:</strong> Works alongside your primary health insurance (including Medicare and Medicare Advantage) to help cover gaps.</li>
            <li><strong>Flexible Use of Funds:</strong> Use the benefits for medical or non-medical expenses related to your hospital stay.</li>
            <li><strong>Coverage for Various Stays:</strong> Benefits can be triggered by hospital confinement, intensive care unit (ICU) stays, emergency room visits, or observation stays, depending on the policy.</li>
            <li><strong>Affordable Premiums:</strong> Often available at a relatively low cost, providing significant value for the protection offered.</li>
            <li><strong>Peace of Mind:</strong> Reduces financial stress associated with unexpected hospitalizations, allowing you to focus on recovery.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-brand-deep-forest-green font-poppins">Who Should Consider a Hospital Indemnity Plan?</h2>
          <div className="space-y-4 text-lg text-brand-black/80 leading-relaxed font-poppins">
            <p>Hospital Indemnity Insurance can be beneficial for a wide range of individuals, including:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Individuals with high-deductible health plans who could face substantial out-of-pocket costs for hospitalization.</li>
              <li>Seniors enrolled in Medicare or Medicare Advantage plans, as these plans may still have copayments or deductibles for hospital stays.</li>
              <li>Families who want an extra layer of financial protection against unexpected medical events.</li>
              <li>Self-employed individuals or those with limited sick leave who might experience income loss during a hospital stay.</li>
            </ul>
          </div>
        </section>

        <section className="mb-12 bg-brand-teal-blue/10 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-brand-deep-forest-green font-poppins">Expert Guidance from Choice Insurance</h2>
          <div className="space-y-4 text-lg text-brand-black/80 leading-relaxed font-poppins">
            <p>Understanding the nuances of Hospital Indemnity Plans and how they fit with your existing coverage is key. The team at Choice Insurance is here to help you:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Evaluate your current health insurance and identify potential gaps a Hospital Indemnity Plan could fill.</li>
              <li>Compare various plan options and benefit amounts from reputable insurance providers.</li>
              <li>Select a plan that aligns with your budget and provides meaningful financial support.</li>
              <li>Understand the terms, conditions, and claim process for your chosen policy.</li>
            </ul>
            <p className="mt-4">
              We aim to provide you with clear information and personalized advice so you can make a confident decision about your supplemental health coverage.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 bg-brand-deep-forest-green text-brand-white rounded-lg">
          <h2 className="text-3xl font-bold mb-4 font-poppins">Strengthen Your Financial Safety Net</h2>
          <p className="text-lg text-brand-white/90 mb-8 max-w-xl mx-auto">
            Prepare for the unexpected. Contact Choice Insurance today for a free consultation on Hospital Indemnity Plans.
          </p>
          <Button size="lg" asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold">
            <Link href="/contact#book-a-call">Get a Hospital Indemnity Quote</Link>
          </Button>
        </section>
        </div>
      </section>
    </div>
  );
}

