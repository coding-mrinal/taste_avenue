// components/menu/MenuCard.tsx
import { MenuItem } from "@/types";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="bg-stone-800 rounded-2xl overflow-hidden border border-stone-700 hover:border-amber-500/50 transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        {item.isPopular && (
          <span className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-white">{item.name}</h3>
          <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            ${item.price.toFixed(2)}
          </span>
        </div>

        <p className="text-gray-400 mb-4">{item.description}</p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {item.isVegetarian && (
            <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/30">
              🥬 Vegetarian
            </span>
          )}
          {item.isSpicy && (
            <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-medium border border-red-500/30">
              🌶️ Spicy
            </span>
          )}
        </div>
      </div>
    </div>
  );
}