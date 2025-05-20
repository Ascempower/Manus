import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import TestimonialsCarousel from './TestimonialsCarousel';

export const metadata: Metadata = {
  title: 'Client Testimonials - Choice Insurance Agency',
  description: 'Read what our clients say about their experience with Choice Insurance Agency. We are committed to providing excellent service and tailored insurance solutions.',
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Choice Insurance made finding the right Medicare plan so easy! Their agent was knowledgeable and patient, answering all my questions. Highly recommend!",
      name: "Ada T.",
      location: "Illinois",
      service: "Medicare Planning"
    },
    {
      quote: "I was overwhelmed with life insurance options, but the team at Choice Insurance helped me understand everything and find an affordable policy that protects my family. Great service!",
      name: "Derek E.",
      location: "Georgia",
      service: "Life Insurance"
    },
    {
      quote: "Switching my health insurance was seamless thanks to Choice Insurance. They found me better coverage for a lower premium. I couldn't be happier.",
      name: "Pearl L.",
      location: "Texas",
      service: "Health Insurance"
    },
    {
      quote: "The peace of mind I have from my final expense plan is invaluable. The agent was compassionate and explained everything clearly. Thank you, Choice Insurance!",
      name: "Clarence S.",
      location: "Ohio",
      service: "Final Expense Planning"
    },
    {
      quote: "As a small business owner, finding the right employee benefits package was crucial. Choice Insurance provided expert advice and found us a great solution.",
      name: "Mason L.",
      location: "Kentucky",
      service: "Employee Benefits"
    }
  ];

  return (
    <div className="bg-brand-white text-brand-black">
      {/* Page Header */}
      <section className="py-12 bg-brand-teal-blue/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-deep-forest-green font-poppins">What Our Clients Say</h1>
          <p className="text-lg text-brand-black/80 mt-4 max-w-3xl mx-auto">
            At Choice Insurance Agency, client satisfaction is our top priority. We are proud to have helped numerous individuals and families secure the right insurance coverage for their needs. Read some of their experiences below.
          </p>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-deep-forest-green text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-poppins">Share Your Experience or Get in Touch!</h2>
          <p className="text-lg text-brand-white/90 mb-8 max-w-2xl mx-auto">
            We value your feedback and are always here to help. If you have a story to share or need assistance with your insurance needs, please don't hesitate to reach out.
          </p>
          <Button size="lg" asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
