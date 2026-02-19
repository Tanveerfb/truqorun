/**
 * TestimonialCarousel Component
 *
 * An auto-playing testimonial slider built with Embla Carousel.
 * Displays client testimonials with smooth slide transitions.
 *
 * @example
 * ```tsx
 * <TestimonialCarousel
 *   testimonials={[
 *     { quote: "Incredible work!", author: "John Doe", role: "CEO", company: "Acme" },
 *   ]}
 * />
 * ```
 */

"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export interface Testimonial {
  /** The testimonial quote text */
  quote: string;
  /** Name of the person */
  author: string;
  /** Role or title */
  role?: string;
  /** Company or organisation name */
  company?: string;
}

export interface TestimonialCarouselProps {
  /** Array of testimonials to display */
  testimonials: Testimonial[];
  /** Auto-play interval in ms (0 to disable) */
  autoplayInterval?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * TestimonialCarousel component for displaying client testimonials
 */
export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  autoplayInterval = 5000,
  className = "",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi || autoplayInterval <= 0) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [emblaApi, autoplayInterval]);

  if (!testimonials.length) return null;

  return (
    <div className={`relative ${className}`}>
      {/* Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_80%] lg:flex-[0_0_60%]"
            >
              <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm md:p-10">
                {/* Quote Icon */}
                <svg
                  className="mx-auto mb-6 h-8 w-8 text-primary/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Quote */}
                <blockquote className="mb-6 text-lg leading-relaxed text-foreground md:text-xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  {(testimonial.role || testimonial.company) && (
                    <p className="text-sm text-foreground-secondary">
                      {testimonial.role}
                      {testimonial.role && testimonial.company && " at "}
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-card border border-border p-2 shadow-md transition-colors hover:bg-background-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary hidden md:flex items-center justify-center"
        aria-label="Previous testimonial"
      >
        <svg
          className="h-5 w-5 text-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-card border border-border p-2 shadow-md transition-colors hover:bg-background-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary hidden md:flex items-center justify-center"
        aria-label="Next testimonial"
      >
        <svg
          className="h-5 w-5 text-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-8 bg-primary"
                : "w-2 bg-border hover:bg-foreground-muted"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
