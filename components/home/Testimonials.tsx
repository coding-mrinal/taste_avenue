// components/home/Testimonials.tsx
"use client";

import { useRef, useEffect } from "react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0;
      }
      carousel.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => {
      scrollPosition = carousel.scrollLeft;
      animationId = requestAnimationFrame(animate);
    };

    carousel.addEventListener("mouseenter", pause);
    carousel.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationId);
      carousel.removeEventListener("mouseenter", pause);
      carousel.removeEventListener("mouseleave", resume);
    };
  }, []);

  const items = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-stone-900 text-white">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold mb-4">What Our Guests Say</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Don't just take our word for it - hear from our satisfied customers
        </p>
      </div>

      <div ref={carouselRef} className="flex gap-6 overflow-hidden px-4">
        {items.map((t, i) => (
          <div key={`${t.id}-${i}`} className="flex-shrink-0 w-[350px] bg-stone-800 rounded-xl p-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, j) => (
                <svg
                  key={j}
                  className={`w-5 h-5 ${j < t.rating ? "text-amber-500" : "text-gray-600"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 mb-6 italic">"{t.comment}"</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center font-bold">
                {t.name[0]}
              </div>
              <div className="ml-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-gray-400 text-sm">Verified Customer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}