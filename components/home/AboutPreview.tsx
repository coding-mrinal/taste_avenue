// components/home/AboutPreview.tsx
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images/restaurant-interior.jpg')" }}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-stone-800 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-stone-600 mb-6">
              Founded in 2010, La Bella Cucina has been serving authentic Italian 
              cuisine made with love and tradition. Our recipes have been passed 
              down through generations, bringing the true taste of Italy to your table.
            </p>
            <p className="text-lg text-stone-600 mb-8">
              We source the freshest ingredients from local farms and import 
              specialty items directly from Italy to ensure an authentic 
              culinary experience.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-600">15+</p>
                <p className="text-stone-600">Years of Excellence</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-600">50+</p>
                <p className="text-stone-600">Signature Dishes</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-600">10K+</p>
                <p className="text-stone-600">Happy Customers</p>
              </div>
            </div>

            <Link href="/about">
              <Button>Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}