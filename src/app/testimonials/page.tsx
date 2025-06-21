import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { LazyCarousel } from '@/lib/dynamic-imports';

export const metadata: Metadata = {
  title: 'Client Testimonials - Choice Insurance Hub',
  description:
    'Read what our clients say about their experience with Choice Insurance Hub. We are committed to providing excellent service and tailored insurance solutions.',
  keywords:
    'insurance testimonials, client reviews, Choice Insurance Hub reviews, insurance agency feedback, Medicare testimonials, life insurance testimonials',
  alternates: {
    canonical: 'https://choiceinsurancehub.com/testimonials',
  },
};

const testimonials = [
  {
    quote:
      'Choice Insurance made finding the right Medicare plan so easy! Their agent was knowledgeable and patient, answering all my questions. Highly recommend!',
    name: 'Jane D.',
    location: 'Illinois',
    service: 'Medicare Planning',
  },
  {
    quote:
      'I was overwhelmed with life insurance options, but the team at Choice Insurance helped me understand everything and find an affordable policy that protects my family. Great service!',
    name: 'John S.',
    location: 'Georgia',
    service: 'Life Insurance',
  },
  {
    quote:
      "Switching my health insurance was seamless thanks to Choice Insurance. They found me better coverage for a lower premium. I couldn't be happier.",
    name: 'Maria L.',
    location: 'Texas',
    service: 'Health Insurance',
  },
  {
    quote:
      'The peace of mind I have from my final expense plan is invaluable. The agent was compassionate and explained everything clearly. Thank you, Choice Insurance!',
    name: 'Robert P.',
    location: 'Ohio',
    service: 'Final Expense Planning',
  },
  {
    quote:
      'As a small business owner, finding the right employee benefits package was crucial. Choice Insurance provided expert advice and found us a great solution.',
    name: 'Susan B.',
    location: 'Kentucky',
    service: 'Employee Benefits',
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-brand-white text-brand-black">
      {/* Page Header */}
      <section className="bg-brand-teal-blue/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins text-4xl font-bold text-brand-deep-forest-green md:text-5xl">
            What Our Clients Say
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-brand-black/80">
            At Choice Insurance Hub, client satisfaction is our top priority. We are proud to have
            helped numerous individuals and families secure the right insurance coverage for their
            needs. Read some of their experiences below.
          </p>
        </div>
      </section>

      {/* LazyCarousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <LazyCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-deep-forest-green py-16 text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-poppins text-3xl font-bold">
            Share Your Experience or Get in Touch!
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-brand-white/90">
            We value your feedback and are always here to help. If you have a story to share or need
            assistance with your insurance needs, please don&apos;t hesitate to reach out.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-brand-warm-beige-coral font-semibold text-brand-black hover:bg-brand-warm-beige-coral/80"
          >
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
