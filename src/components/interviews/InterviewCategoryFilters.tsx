"use client";

interface Props {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export default function InterviewCategoryFilters({
  categories,
  selectedCategory,
  onSelectCategory,
}: Props) {
  return (
    <div className="flex items-center gap-3 my-12 overflow-x-auto no-scrollbar px-6 -mx-6 sm:px-0 sm:mx-0 sm:flex-wrap sm:justify-center snap-x snap-mandatory sm:snap-none">
      {categories.map((cat) => {
        const isActive = selectedCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`shrink-0 whitespace-nowrap snap-start px-5 py-2 text-xs tracking-[0.2em] font-sans uppercase transition-all duration-300 border cursor-pointer ${
              isActive
                ? "bg-royal-gold text-luxury-black font-bold border-royal-gold shadow-md shadow-royal-gold/20"
                : "bg-luxury-card text-cream/80 border-royal-gold/25 hover:border-royal-gold/60 hover:text-ivory"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
