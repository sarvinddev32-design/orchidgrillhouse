type LocationTabsProps = {
  items: { name: string; slug: string }[];
  activeSlug: string;
  onSelect: (slug: string) => void;
};

export function LocationTabs({ items, activeSlug, onSelect }: LocationTabsProps) {
  return (
    <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex min-w-max items-center justify-start gap-4 md:justify-center">
        {items.map(({ name, slug }) => {
          return (
            <button
              key={slug}
              type="button"
              onClick={() => onSelect(slug)}
              className={`whitespace-nowrap border-b-2 px-1 pb-2 text-sm uppercase tracking-[0.16em] transition-all duration-300 ${
                activeSlug === slug
                  ? "border-[#A44A2F] text-[#1A1A1A]"
                  : "border-transparent text-[#1A1A1A]/45 hover:text-[#1A1A1A]"
              }`}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
