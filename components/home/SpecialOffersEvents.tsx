// components/home/SpecialOffersEvents.tsx
"use client";

import { useState } from "react";
import { specialOffers, upcomingEvents } from "@/lib/data";
import { SpecialOffer, Event } from "@/types";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Link from "next/link";

// Offer Card Component
function OfferCard({ offer }: { offer: SpecialOffer }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const typeColors = {
    discount: "bg-red-500",
    combo: "bg-purple-500",
    seasonal: "bg-emerald-500",
    "happy-hour": "bg-amber-500",
  };

  return (
    <Card className="group h-full flex flex-col overflow-hidden">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${offer.image})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Badge */}
        {offer.badge && (
          <span
            className={`absolute top-4 left-4 ${typeColors[offer.type]} text-white px-3 py-1 rounded-full text-sm font-semibold`}
          >
            {offer.badge}
          </span>
        )}
        
        {/* Discount */}
        {offer.discount && (
          <span className="absolute top-4 right-4 bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            {offer.discount}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-stone-800 mb-2">{offer.title}</h3>
        <p className="text-stone-600 mb-4 flex-1 line-clamp-2">
          {offer.description}
        </p>

        {/* Pricing */}
        {offer.originalPrice && offer.offerPrice && (
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-amber-600">
              ${offer.offerPrice.toFixed(2)}
            </span>
            <span className="text-lg text-stone-400 line-through">
              ${offer.originalPrice.toFixed(2)}
            </span>
          </div>
        )}

        {/* Valid Until */}
        <div className="flex items-center text-sm text-stone-500 mb-4">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Valid until {formatDate(offer.validUntil)}
        </div>

        {/* CTA Button */}
        <Button className="w-full">Claim Offer</Button>
      </div>
    </Card>
  );
}

// Event Card Component
function EventCard({ event }: { event: Event }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString("en-US", { month: "short" }),
      weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
    };
  };

  const dateInfo = formatDate(event.date);

  return (
    <Card className="group h-full flex flex-col overflow-hidden">
      {/* Image with Date Badge */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${event.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Date Badge */}
        <div className="absolute top-4 left-4 bg-white rounded-lg p-2 text-center shadow-lg min-w-[60px]">
          <span className="block text-xs font-semibold text-amber-600 uppercase">
            {dateInfo.month}
          </span>
          <span className="block text-2xl font-bold text-stone-800">
            {dateInfo.day}
          </span>
          <span className="block text-xs text-stone-500">{dateInfo.weekday}</span>
        </div>

        {/* Spots Left Badge */}
        {event.spotsLeft && event.spotsLeft <= 10 && (
          <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
            Only {event.spotsLeft} spots left!
          </span>
        )}

        {/* Free Badge */}
        {event.isFree && (
          <span className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Free Entry
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-stone-800 mb-2">{event.title}</h3>
        
        {/* Time */}
        <div className="flex items-center text-sm text-stone-500 mb-3">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {event.time}
        </div>

        <p className="text-stone-600 mb-4 flex-1 line-clamp-2">
          {event.description}
        </p>

        {/* Tags */}
        {event.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="bg-stone-100 text-stone-600 px-2 py-1 rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          {event.price && !event.isFree && (
            <span className="text-xl font-bold text-amber-600">
              ${event.price}/person
            </span>
          )}
          {event.isFree && (
            <span className="text-lg font-semibold text-emerald-600">
              Free Entry
            </span>
          )}
          <Button size="sm">Book Now</Button>
        </div>
      </div>
    </Card>
  );
}

// Main Component
export default function SpecialOffersEvents() {
  const [activeTab, setActiveTab] = useState<"offers" | "events">("offers");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Special Offers & Events
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8">
            Dont miss out on our exclusive deals and exciting upcoming events
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex bg-stone-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab("offers")}
              className={`
                px-6 py-2 rounded-full font-semibold transition-all duration-300
                ${
                  activeTab === "offers"
                    ? "bg-amber-500 text-white shadow-md"
                    : "text-stone-600 hover:text-stone-800"
                }
              `}
            >
              🎁 Special Offers
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`
                px-6 py-2 rounded-full font-semibold transition-all duration-300
                ${
                  activeTab === "events"
                    ? "bg-amber-500 text-white shadow-md"
                    : "text-stone-600 hover:text-stone-800"
                }
              `}
            >
              🎉 Upcoming Events
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Offers Grid */}
          <div
            className={`
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
              transition-all duration-500
              ${activeTab === "offers" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"}
            `}
          >
            {specialOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>

          {/* Events Grid */}
          <div
            className={`
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
              transition-all duration-500
              ${activeTab === "events" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"}
            `}
          >
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link href={activeTab === "offers" ? "/offers" : "/events"}>
            <Button variant="outline" size="lg">
              View All {activeTab === "offers" ? "Offers" : "Events"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}