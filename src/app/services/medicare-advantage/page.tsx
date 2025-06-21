import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medicare Advantage Plans - Choice Insurance',
  description:
    'Learn about Medicare Advantage Plans (Part C) offered by Choice Insurance Hub. All-in-one alternatives to Original Medicare with additional benefits.',
  alternates: {
    canonical: 'https://choiceinsurancehub.com/services/medicare-advantage',
  },
};

export default function MedicareAdvantagePage() {
  return (
    <div className="bg-brand-white text-brand-black">
      {/* Hero Section */}
      <section className="bg-brand-teal-blue/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins text-4xl font-bold text-brand-deep-forest-green md:text-5xl">
            Medicare Advantage Plans (Part C)
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-black/80">
            All-in-one alternatives to Original Medicare with additional benefits tailored to your
            needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p>
                Medicare Advantage Plans, also known as Medicare Part C, are all-in-one alternatives
                to Original Medicare. Offered by private insurance companies approved by Medicare,
                these plans combine hospital (Part A) and medical (Part B) coverage and often
                include additional benefits like prescription drug coverage, dental, vision, and
                wellness programs.
              </p>

              <h2 className="mt-8 font-poppins text-2xl font-bold text-brand-deep-forest-green">
                How Medicare Advantage Works
              </h2>
              <p>
                Medicare Advantage Plans are built on a cost-sharing model. While they often come
                with lower monthly premiums than Medicare Supplement Plans, you may be responsible
                for certain out-of-pocket costs such as copayments, coinsurance, and annual
                deductibles when receiving care. These plans typically use provider networks (like
                HMOs or PPOs), so understanding your network and coverage limits is key.
              </p>

              <h2 className="mt-8 font-poppins text-2xl font-bold text-brand-deep-forest-green">
                Benefits of Medicare Advantage
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>All-in-one coverage combining Medicare Parts A and B</li>
                <li>Often includes prescription drug coverage (Part D)</li>
                <li>May include additional benefits not covered by Original Medicare:</li>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Dental care</li>
                  <li>Vision services</li>
                  <li>Hearing aids</li>
                  <li>Fitness programs</li>
                  <li>Transportation to medical appointments</li>
                </ul>
                <li>Annual out-of-pocket maximum limits for financial protection</li>
                <li>Often lower monthly premiums than Medicare Supplement plans</li>
              </ul>

              <h2 className="mt-8 font-poppins text-2xl font-bold text-brand-deep-forest-green">
                Finding the Right Plan
              </h2>
              <p>
                At Choice Insurance Hub, we help you compare Medicare Advantage Plans based on your
                medical needs, preferred doctors, prescriptions, and budget. Our goal is to ensure
                you get comprehensive coverage without surprises—so you can stay focused on your
                health, not the fine print.
              </p>
            </div>

            <div className="mt-12 rounded-lg border border-brand-teal-blue/30 bg-brand-teal-blue/10 p-6">
              <h3 className="font-poppins text-xl font-bold text-brand-deep-forest-green">
                Ready to explore Medicare Advantage options?
              </h3>
              <p className="mb-4 mt-2">
                Our experienced agents can help you find the right Medicare Advantage Plan for peace
                of mind and smart savings.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact#book-a-call"
                  className="inline-block rounded-lg bg-brand-warm-beige-coral px-6 py-2 font-semibold text-brand-black transition duration-300 hover:bg-brand-warm-beige-coral/80"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  href="https://www.planenroll.com/?purl=kOW7ufSy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-brand-deep-forest-green px-6 py-2 font-semibold text-brand-white transition duration-300 hover:bg-brand-deep-forest-green/80"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
