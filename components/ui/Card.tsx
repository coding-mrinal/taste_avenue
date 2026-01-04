// components/ui/Card.tsx
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-md overflow-hidden
        ${hover ? "hover:shadow-xl transition-shadow duration-300" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}