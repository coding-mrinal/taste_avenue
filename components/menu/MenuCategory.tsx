// components/menu/MenuCategory.tsx
import { MenuItem } from "@/types";
import MenuCard from "./MenuCard";

interface MenuCategoryProps {
  name: string;
  description: string;
  items: MenuItem[];
}

export default function MenuCategory({ name, description, items }: MenuCategoryProps) {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">{name}</h2>
        <p className="text-gray-400">{description}</p>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}