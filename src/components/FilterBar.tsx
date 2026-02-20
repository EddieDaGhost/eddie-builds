"use client";

import { categories } from "@/lib/projects";

type FilterBarProps = {
  active: string;
  onChange: (category: string) => void;
};

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 ${
            active === cat
              ? "bg-gradient-to-r from-primary to-accent text-white glow-primary"
              : "glass glass-hover text-muted hover:text-foreground"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
