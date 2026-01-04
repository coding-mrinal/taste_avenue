// components/home/FeaturedDishes.tsx
"use client";

import { useRef, useEffect } from "react";
import { menuItems } from "@/lib/data";
import MenuCard from "@/components/menu/MenuCard";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function FeaturedDishes() {
  const featuredItems = menuItems.filter((item) => item.isPopular).slice(0, 6);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPosition += speed;

      // Reset to start when reaching halfway (the duplicated content)
      if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0;
      }

      carousel.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      scrollPosition = carousel.scrollLeft;
      animationId = requestAnimationFrame(animate);
    };

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate items for seamless loop
  const duplicatedItems = [...featuredItems, ...featuredItems];

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Our Signature Dishes
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Discover our most loved dishes, crafted with passion and the finest
            ingredients
          </p>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-hidden"
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[320px] sm:w-[350px]"
            >
              <MenuCard item={item} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/menu">
            <Button size="lg">View Full Menu</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}