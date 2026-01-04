// app/menu/page.tsx
"use client";

import { useState } from "react";
import { menuItems, categories } from "@/lib/data";
import MenuCategory from "@/components/menu/MenuCategory";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory
    ? categories.filter((c) => c.name === activeCategory)
    : categories;

  return (
    <div className="pt-20 bg-stone-900 min-h-screen">
      {/* Header */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Our Menu</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto px-4">
          Explore our carefully crafted dishes, made with the freshest
          ingredients and authentic Italian recipes
        </p>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === null
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                  : "bg-stone-800 text-gray-300 hover:text-amber-400 border border-stone-700"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                    : "bg-stone-800 text-gray-300 hover:text-amber-400 border border-stone-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.map((category) => {
            const categoryItems = menuItems.filter(
              (item) => item.category === category.name
            );
            if (categoryItems.length === 0) return null;

            return (
              <MenuCategory
                key={category.id}
                name={category.name}
                description={category.description}
                items={categoryItems}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}