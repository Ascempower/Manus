// src/app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Choice Insurance Hub',
  description:
    'Learn about Choice Insurance Hub, our mission, values, and commitment to providing expert insurance guidance.',
  alternates: {
    canonical: 'https://choiceinsurancehub.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-brand-white text-brand-black">
      {/* Page Header */}
      <section className="bg-brand-teal-blue/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins text-4xl font-bold text-brand-deep-forest-green md:text-5xl">
            About Choice Insurance Hub
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        {/* Our Story */}
        <section className="mb-12">
          <h2 className="mb-6 font-poppins text-3xl font-bold text-brand-deep-forest-green">
            Our Story
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-brand-black/80">
            <p>
              Choice Insurance Hub is an independent insurance agency with a longstanding commitment
              to serving the diverse insurance needs of individuals, families, and businesses.
              Founded on the principles of integrity, transparency, and client-focused service, we
              have grown by consistently putting our clients first. We specialize in Medicare
              Benefits, Individual Health Insurance, Employee Benefits, and Life Insurance plans,
              partnering with a wide array of major insurance carriers. This independence allows us
              to offer a broad spectrum of coverage options, ensuring that our clients receive plans
              tailored to their specific circumstances and budgets.
            </p>
            <p>
              Our reach extends across Illinois and several other states, including Alabama,
              Georgia, Ohio, Kentucky, Mississippi, South Carolina, and Texas. This multi-state
              presence provides us with valuable insights into diverse insurance landscapes,
              enabling us to offer informed and comprehensive advice. We are dedicated to preparing
              you for tomorrow by closing today&apos;s healthcare and financial gaps with smart,
              affordable, and personalized insurance solutions.
            </p>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="mb-12 rounded-lg bg-brand-teal-blue/10 p-8">
          <h2 className="mb-6 font-poppins text-3xl font-bold text-brand-deep-forest-green">
            Our Mission and Values
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-brand-black/80">
            <strong>Mission:</strong> To empower our clients to make informed insurance decisions by
            providing expert guidance, personalized service, and a comprehensive range of
            high-quality, affordable insurance products. We strive to build long-term relationships
            based on trust and a deep understanding of our clients&apos; evolving needs.
          </p>
          <ul className="list-inside list-disc space-y-2 text-lg leading-relaxed text-brand-black/80">
            <li>
              <strong>Integrity:</strong> We conduct our business with the utmost honesty and
              ethical standards.
            </li>
            <li>
              <strong>Client-Centricity:</strong> Our clients&apos; needs and best interests are at
              the heart of everything we do.
            </li>
            <li>
              <strong>Expertise:</strong> We are committed to continuous learning and staying
              abreast of industry changes to provide knowledgeable advice.
            </li>
            <li>
              <strong>Choice:</strong> As an independent agency, we offer a wide selection of plans
              to ensure the best fit for each client.
            </li>
            <li>
              <strong>Advocacy:</strong> We stand by our clients, especially during challenging
              times like claims processing or navigating complex coverage issues.
            </li>
          </ul>
        </section>

        {/* Commitment Section */}
        <section className="mb-12">
          <h2 className="mb-6 font-poppins text-3xl font-bold text-brand-deep-forest-green">
            Our Commitment to You
          </h2>
          <p className="text-lg leading-relaxed text-brand-black/80">
            At Choice Insurance Hub, we understand that navigating the world of insurance can be
            complex and overwhelming. That&apos;s why we are committed to providing a client-first
            approach. We listen to your concerns, analyze your needs, and explain your options in
            clear, understandable language. Our goal is not just to sell you a policy, but to build
            a lasting relationship as your trusted insurance advisor. We are here to support you
            every step of the way, from selecting the right plan to assisting with claims and policy
            reviews. Your peace of mind is our priority.
          </p>
        </section>

        {/* CTA Section */}
        <section className="rounded-lg bg-brand-deep-forest-green py-12 text-center text-brand-white">
          <h2 className="mb-4 font-poppins text-3xl font-bold">
            Ready to Discuss Your Insurance Needs?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-brand-white/90">
            Let us help you find the perfect coverage. Contact us today for a no-obligation
            consultation.
          </p>
          <a
            href="/contact#book-a-call"
            className="inline-block transform rounded-lg bg-brand-warm-beige-coral px-8 py-3 text-lg font-semibold text-brand-black transition duration-300 ease-in-out hover:scale-105 hover:bg-brand-warm-beige-coral/80"
          >
            Book a Free Consultation
          </a>
        </section>
      </div>
    </div>
  );
}
