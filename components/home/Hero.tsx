// components/home/Hero.tsx
import Link from "next/link";
import Button from "@/components/ui/Button";
import { restaurantInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('images/hero.jpg')",
        }}
      >
        {/* <div className="absolute inset-0 bg-black/60" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-16">
  {/* Tagline with a colored border badge */}
  <div className="inline-block border-2 border-amber-500/50 px-6 py-2 rounded-sm mb-6 bg-emerald-950/40 backdrop-blur-md">
    <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-amber-400">
      {restaurantInfo.tagline}
    </p>
  </div>

  {/* Main Heading in a warm cream/off-white (not pure white) */}
  <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 tracking-tight text-rose-50 italic
                [text-shadow:3px_3px_0_#7f1d1d,1px_1px_0_#881337]">
  {restaurantInfo.name}
</h1>

{/* <p className="text-lg md:text-xl text-amber-50/80 mb-10 max-w-2xl mx-auto leading-relaxed
               bg-gradient-to-r from-gray-900/40 to-gray-800/30 p-4 
               border-t border-amber-700/30 border-b border-amber-700/20">
  {restaurantInfo.description}
</p> */}

  <div className="flex flex-col sm:flex-row gap-6 justify-center">
    <Link href="/menu">
      <Button 
        size="lg" 
        className="bg-amber-600 hover:bg-amber-700 text-emerald-950 font-bold border-b-4 border-amber-800 active:border-b-0 transition-all px-10"
      >
        VIEW OUR MENU
      </Button>
    </Link>
    
    <Link href="/reservations">
      <Button 
        variant="outline" 
        size="lg" 
        className="bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-emerald-950 font-bold px-10 transition-colors"
      >
        RESERVE A TABLE
      </Button>
    </Link>
  </div>
</div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
