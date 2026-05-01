type GalleryCategory = "All" | "Food" | "Ambience" | "Kitchen" | "Guests";

type FilterTabsProps = {
  categories: GalleryCategory[];
  activeCategory: GalleryCategory;
  onChange: (category: GalleryCategory) => void;
};

export function FilterTabs({ categories, activeCategory, onChange }: FilterTabsProps) {
  return (
    <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex min-w-max items-center justify-center gap-8">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`whitespace-nowrap border-b-2 pb-1 text-sm uppercase tracking-[0.2em] transition-all duration-300 ${
              activeCategory === category
                ? "border-[#A44A2F] text-[#1A1A1A] opacity-100"
                : "border-transparent text-[#1A1A1A] opacity-40 hover:opacity-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export type { GalleryCategory };
