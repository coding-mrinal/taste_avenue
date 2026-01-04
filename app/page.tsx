// app/page.tsx
import Hero from "@/components/home/Hero";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import SpecialOffersEvents from "@/components/home/SpecialOffersEvents";
// Or use alternative designs:
// import SpecialOffersEventsSideBySide from "@/components/home/SpecialOffersEventsSideBySide";
// import SpecialOffersEventsFeatured from "@/components/home/SpecialOffersEventsFeatured";
import AboutPreview from "@/components/home/AboutPreview";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <SpecialOffersEvents />
      {/* Or use: <SpecialOffersEventsSideBySide /> */}
      {/* Or use: <SpecialOffersEventsFeatured /> */}
      {/* <AboutPreview /> */}
      <Testimonials />
    </>
  );
}