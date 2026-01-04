// app/about/page.tsx
import { restaurantInfo } from "@/lib/data";

export default function AboutPage() {
  const team = [
    { name: "Marco Rossi", role: "Head Chef", image: "/images/chef1.jpg", emoji: "👨‍🍳" },
    { name: "Sofia Bianchi", role: "Pastry Chef", image: "/images/chef2.jpg", emoji: "👩‍🍳" },
    { name: "Luigi Romano", role: "Sommelier", image: "/images/sommelier.jpg", emoji: "🍷" },
  ];

  const stats = [
    { value: "25+", label: "Years of Experience" },
    { value: "50K+", label: "Happy Customers" },
    { value: "100+", label: "Signature Dishes" },
    { value: "15", label: "Awards Won" },
  ];

  return (
    <div className="pt-20 bg-stone-900 min-h-screen">
      {/* Header */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Our story, our passion, our commitment to excellence
        </p>
      </section>

      {/* Story Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-stone-800 rounded-2xl p-8">
              <h2 className="text-4xl font-bold text-white mb-6">
                A Tradition of Excellence
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  La Bella Cucina was founded with a simple mission: to bring the 
                  authentic flavors of Italy to our community. What started as a 
                  small family restaurant has grown into a beloved dining destination.
                </p>
                <p>
                  Our recipes have been passed down through four generations, 
                  preserving the traditions and techniques that make Italian 
                  cuisine so special. Every dish tells a story of family, love, 
                  and dedication to the culinary arts.
                </p>
                <p>
                  We believe that great food brings people together. That's why 
                  we create not just meals, but experiences that our guests will 
                  cherish for a lifetime.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-stone-800 border border-stone-700">
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: "url('/images/kitchen.jpg')" }}
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-stone-800 border border-stone-700 mt-8">
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: "url('/images/dining.jpg')" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-stone-800 rounded-2xl p-6 text-center border border-stone-700"
              >
                <p className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-400">
              The talented individuals behind your dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-stone-800 rounded-2xl p-6 text-center border border-stone-700 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 bg-gradient-to-r from-amber-500 to-orange-500 p-1">
                  <div className="w-full h-full rounded-full bg-stone-700 flex items-center justify-center text-5xl">
                    {member.emoji}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-amber-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}