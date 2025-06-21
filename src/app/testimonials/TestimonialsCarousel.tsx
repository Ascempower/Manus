'use client';

import React from 'react';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  service: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = React.useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) {
      return;
    }
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);

    // Auto-play functionality
    const autoplay = setInterval(() => {
      // Check if emblaApi is still available before using it
      if (emblaApi && emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else if (emblaApi) {
        emblaApi.scrollTo(0);
      }
    }, 5000); // Change slide every 5 seconds

    return () => {
      if (emblaApi) {
        emblaApi.off('select', onSelect);
      }
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-0 flex-[0_0_100%] pl-4">
              <div className="mx-4 flex h-full flex-col rounded-lg border border-brand-teal-blue-dark/30 bg-brand-white p-8 shadow-lg">
                <blockquote className="mb-6 flex-grow text-lg italic text-brand-black/80">
                  <p className="before:mr-1 before:font-poppins before:text-3xl before:content-[\\'\\\\22\\'] after:ml-1 after:font-poppins after:text-3xl after:content-[\\'\\\\22\\']">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <div className="mt-auto border-t border-brand-teal-blue-dark/50 pt-4">
                  <p className="font-poppins text-xl font-bold text-brand-deep-forest-green">
                    {testimonial.name}
                  </p>
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
        className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 transform rounded-full bg-brand-deep-forest-green p-2 text-white shadow-md transition-colors hover:bg-brand-deep-forest-green/80"
        onClick={scrollPrev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 transform rounded-full bg-brand-deep-forest-green p-2 text-white shadow-md transition-colors hover:bg-brand-deep-forest-green/80"
        onClick={scrollNext}
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="mt-8 flex justify-center">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`mx-1 h-3 w-3 rounded-full transition-colors ${
              index === selectedIndex
                ? 'bg-brand-deep-forest-green'
                : 'bg-brand-teal-blue-dark/40 hover:bg-brand-teal-blue-dark/60'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
