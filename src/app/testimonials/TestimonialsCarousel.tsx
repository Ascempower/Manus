"use client";

import { useState, useEffect, useCallback } from 'react';
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
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 pl-4">
              <div className="bg-brand-white p-8 rounded-lg shadow-lg flex flex-col border border-brand-teal-blue-dark/30 mx-4 h-full">
                <blockquote className="text-brand-black/80 italic mb-6 flex-grow text-lg">
                  <p className="before:content-[\'\\22\'] before:mr-1 before:text-3xl before:font-poppins after:content-[\'\\22\'] after:ml-1 after:text-3xl after:font-poppins">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <div className="mt-auto pt-4 border-t border-brand-teal-blue-dark/50">
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
