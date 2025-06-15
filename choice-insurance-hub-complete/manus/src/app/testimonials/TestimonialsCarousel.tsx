"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  service: string;
};

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = React.useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = React.useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = React.useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-brand-white border border-brand-teal-blue/20 rounded-lg p-8 mx-auto max-w-4xl shadow-lg">
                <blockquote className="text-lg md:text-xl text-brand-black/80 mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-brand-deep-forest-green text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-brand-black/60">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="inline-block bg-brand-teal-blue/10 text-brand-teal-blue-dark px-3 py-1 rounded-full text-sm font-medium">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-brand-white/90 hover:bg-brand-white border border-brand-teal-blue/20 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl"
        onClick={scrollPrev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-brand-white/90 hover:bg-brand-white border border-brand-teal-blue/20 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl"
        onClick={scrollNext}
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots Navigation - FIXED: Properly typed parameters */}
      <div className="flex justify-center mt-8">
        {scrollSnaps.map((_: number, index: number) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 transition-colors ${
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
