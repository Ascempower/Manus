"use client";

import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Client Testimonials - Choice Insurance Agency',
  description: 'Read what our clients say about their experience with Choice Insurance Agency. We are committed to providing excellent service and tailored insurance solutions.',
};

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

export default function TestimonialsPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    
    // Auto-play functionality
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000); // Change slide every 5 seconds
    
    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect]);

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
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 pl-4">
                    <div className="bg-brand-white p-8 rounded-lg shadow-lg flex flex-col border border-brand-teal-blue/30 mx-4 h-full">
                      <blockquote className="text-brand-black/80 italic mb-6 flex-grow text-lg">
                        <p className="before:content-[\'\\22\'] before:mr-1 before:text-3xl before:font-poppins after:content-[\'\\22\'] after:ml-1 after:text-3xl after:font-poppins">
                          {testimonial.quote}
                        </p>
                      </blockquote>
                      <div className="mt-auto pt-4 border-t border-brand-teal-blue/50">
                        <p className="font-bold text-xl text-brand-deep-forest-green font-poppins">{testimonial.name}</p>
                        <p className="text-sm text-brand-black/70">{testimonial.location}</p>
                        <p className="text-sm text-brand-black/70">Service: {testimonial.service}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-brand-deep-forest-green text-white p-2 rounded-full shadow-md hover:bg-brand-deep-forest-green/80 transition-colors z-10"
              onClick={scrollPrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-brand-deep-forest-green text-white p-2 rounded-full shadow-md hover:bg-brand-deep-forest-green/80 transition-colors z-10"
              onClick={scrollNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Dots Navigation */}
            <div className="flex justify-center mt-8">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                    index === selectedIndex 
                      ? 'bg-brand-deep-forest-green' 
                      : 'bg-brand-teal-blue/30 hover:bg-brand-teal-blue/50'
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
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
