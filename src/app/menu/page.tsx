"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { CTASection } from "@/app/sections/CTASection";
import { Navbar } from "@/app/components/Navbar";
import { PrimaryActionButtons } from "@/app/components/PrimaryActionButtons";

type MenuCategory = "Shawarma" | "Grills" | "Starters" | "Sides" | "Beverages" | "Desserts";
type TabCategory = "All" | MenuCategory;

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag: string;
  category: MenuCategory;
  image: string;
};

const categories: MenuCategory[] = [
  "Shawarma",
  "Grills",
  "Starters",
  "Sides",
  "Beverages",
  "Desserts",
];

const tabs: TabCategory[] = ["All", ...categories];
const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Signature", href: "/signature" },
  { label: "Gallery", href: "/gallery" },
  { label: "Location", href: "/location" },
];

const menuItems: MenuItem[] = [
  {
    name: "Lebanese Chicken Shawarma",
    description:
      "Tender marinated chicken, fire-roasted and wrapped in warm saj bread with garlic sauce and pickles.",
    price: "₹ 38",
    tag: "Chef's Pick",
    category: "Shawarma",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80",
  },
  {
    name: "Lamb Shawarma",
    description:
      "Slow-cooked spiced lamb layered with caramelized onions, tahini and fresh herbs.",
    price: "₹ 46",
    tag: "Spicy",
    category: "Shawarma",
    image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=600&q=80",
  },
  {
    name: "Mixed Shawarma Platter",
    description:
      "A generous spread of chicken and lamb shawarma served with house pickles, sauces, and fresh bread.",
    price: "₹ 72",
    tag: "",
    category: "Shawarma",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
  },
  {
    name: "Signature Shawarma Wrap",
    description:
      "Our house special - double-stacked with crispy chicken, pomegranate molasses glaze, and herb salad.",
    price: "₹ 52",
    tag: "Signature",
    category: "Shawarma",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80",
  },
  {
    name: "Chicken Shawaya",
    description:
      "Charcoal-grilled whole chicken marinated in a blend of 12 aromatic spices, served with garlic dip.",
    price: "₹ 85",
    tag: "Chef's Pick",
    category: "Grills",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&q=80",
  },
  {
    name: "Kofta Meshwi",
    description:
      "Hand-rolled spiced lamb kofta grilled over open flame, served with grilled vegetables and tahini.",
    price: "₹ 68",
    tag: "",
    category: "Grills",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
  },
  {
    name: "Mixed Grill Platter",
    description:
      "An abundance of grilled meats - kofta, shish tawook, lamb chops and chicken wings.",
    price: "₹ 145",
    tag: "For Two",
    category: "Grills",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
  },
  {
    name: "Lamb Chops",
    description:
      "Herb-marinated lamb chops grilled to perfection with a smoky finish, served with saffron rice.",
    price: "₹ 120",
    tag: "Spicy",
    category: "Grills",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&q=80",
  },
  {
    name: "Hummus Beiruti",
    description:
      "Silky smooth chickpea hummus topped with olive oil, paprika and toasted pine nuts.",
    price: "₹ 28",
    tag: "",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600&q=80",
  },
  {
    name: "Fattoush Salad",
    description:
      "Crisp garden vegetables with toasted pita, pomegranate seeds and a zesty sumac dressing.",
    price: "₹ 32",
    tag: "",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
  },
  {
    name: "Kibbeh Nayeh",
    description:
      "Traditional raw minced lamb mixed with bulgur wheat, onion and fresh mint. A Lebanese classic.",
    price: "₹ 48",
    tag: "Chef's Pick",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  },
  {
    name: "Mezze Platter",
    description:
      "A curated selection of six Lebanese mezze - hummus, baba ghanoush, tabbouleh, fattoush, kibbeh and warak.",
    price: "₹ 88",
    tag: "For Two",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
  {
    name: "Saffron Rice",
    description:
      "Fragrant basmati rice cooked with saffron, caramelized onions and toasted almonds.",
    price: "₹ 22",
    tag: "",
    category: "Sides",
    image: "https://images.unsplash.com/photo-1536304993881-ff86e0c9ef72?w=600&q=80",
  },
  {
    name: "Garlic Mashed Potato",
    description:
      "Creamy Levantine-style mashed potato with roasted garlic butter and fresh chives.",
    price: "₹ 20",
    tag: "",
    category: "Sides",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&q=80",
  },
  {
    name: "Grilled Vegetables",
    description:
      "Seasonal vegetables grilled over charcoal, drizzled with herb oil and lemon.",
    price: "₹ 24",
    tag: "",
    category: "Sides",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
  },
  {
    name: "Fresh Bread Basket",
    description: "Warm saj and pita bread baked fresh, served with house dips.",
    price: "₹ 16",
    tag: "",
    category: "Sides",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
  },
  {
    name: "Jallab",
    description:
      "Traditional Lebanese rose water, grape juice and grenadine drink topped with pine nuts and raisins.",
    price: "₹ 22",
    tag: "",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
  },
  {
    name: "Tamarind Cooler",
    description: "House-made chilled tamarind drink with a hint of ginger and fresh mint.",
    price: "₹ 20",
    tag: "New",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600&q=80",
  },
  {
    name: "Lebanese Lemonade",
    description: "Blended fresh lemon with orange blossom water and mint - served ice cold.",
    price: "₹ 18",
    tag: "",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80",
  },
  {
    name: "Arabic Coffee",
    description:
      "Traditional cardamom-infused qahwa served in a traditional dallah with dates.",
    price: "₹ 16",
    tag: "Chef's Pick",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1578374173703-64ea27f0d8cc?w=600&q=80",
  },
  {
    name: "Knafeh",
    description:
      "Warm shredded pastry layered with sweet cheese, soaked in rose water syrup, topped with crushed pistachios.",
    price: "₹ 38",
    tag: "Chef's Pick",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&q=80",
  },
  {
    name: "Baklawa Selection",
    description:
      "A curated box of five house-made baklawa - pistachio, walnut and cashew varieties.",
    price: "₹ 42",
    tag: "",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
  },
  {
    name: "Umm Ali",
    description:
      "A rich Egyptian bread pudding with cream, nuts and rose water - served warm.",
    price: "₹ 35",
    tag: "New",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
  },
  {
    name: "Mhalabiyeh",
    description:
      "Traditional Lebanese milk pudding scented with rose water, topped with pistachios and dried rose petals.",
    price: "₹ 30",
    tag: "",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
  },
];

export default function MenuPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNavHref, setActiveNavHref] = useState("/menu");
  const [activeItemName, setActiveItemName] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLUListElement | null>(null);
  const mobileMenuOverlayRef = useRef<HTMLButtonElement | null>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const [activeCategory, setActiveCategory] = useState<TabCategory>("All");

  const filteredCategories = useMemo(
    () =>
      activeCategory === "All"
        ? categories
        : categories.filter((category) => category === activeCategory),
    [activeCategory]
  );

  const isHoverDevice = () =>
    typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  const handleItemEnter = (itemName: string) => {
    if (!isHoverDevice()) {
      return;
    }
    setActiveItemName(itemName);
  };

  const handleItemLeave = () => {
    if (!isHoverDevice()) {
      return;
    }
    setActiveItemName(null);
  };

  const handleItemClick = (itemName: string) => {
    if (isHoverDevice()) {
      return;
    }
    setActiveItemName((prev) => (prev === itemName ? null : itemName));
  };

  useLayoutEffect(() => {
    if (!mobileMenuRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        gsap.set(mobileMenuRef.current, { x: "-100%" });
        if (mobileMenuOverlayRef.current) {
          gsap.set(mobileMenuOverlayRef.current, { autoAlpha: 0 });
        }
        gsap.set(".mobile-nav-item", { y: 20, opacity: 0 });

        menuTimelineRef.current = gsap
          .timeline({ paused: true })
          .to(mobileMenuRef.current, {
            x: "0%",
            duration: 0.45,
            ease: "power3.out",
          })
          .to(
            mobileMenuOverlayRef.current,
            {
              autoAlpha: 1,
              duration: 0.3,
              ease: "power2.out",
            },
            0
          )
          .to(
            ".mobile-nav-item",
            {
              y: 0,
              opacity: 1,
              stagger: 0.05,
              duration: 0.3,
              ease: "power3.out",
            },
            "-=0.2"
          );
      });

      mm.add("(min-width: 768px)", () => {
        setIsMobileMenuOpen(false);
        gsap.set(mobileMenuRef.current, { clearProps: "transform" });
        gsap.set(".mobile-nav-item", { clearProps: "transform,opacity" });
        if (mobileMenuOverlayRef.current) {
          gsap.set(mobileMenuOverlayRef.current, { autoAlpha: 0 });
        }
      });

      return () => {
        mm.revert();
      };
    });

    return () => {
      menuTimelineRef.current?.kill();
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (!menuTimelineRef.current) {
      return;
    }

    if (window.matchMedia("(min-width: 768px)").matches) {
      return;
    }

    if (isMobileMenuOpen) {
      menuTimelineRef.current.play();
      return;
    }

    menuTimelineRef.current.timeScale(1).reverse();
  }, [isMobileMenuOpen]);

  return (
    <>
      <main
        className="menu-page max-w-[100vw] overflow-x-hidden bg-[#f5f0e8] text-[#1a3a2e]"
        style={{ fontFamily: '"bricolage-grotesque", "Bricolage Grotesque", sans-serif' }}
      >
        <Navbar
          navItems={navItems}
          isScrolled={true}
          isMobileMenuOpen={isMobileMenuOpen}
          activeNavHref={activeNavHref}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          setActiveNavHref={setActiveNavHref}
          mobileMenuRef={mobileMenuRef}
          mobileMenuOverlayRef={mobileMenuOverlayRef}
          menuTimelineRef={menuTimelineRef}
        />
        <section className="relative h-[45vh] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80"
            alt="Orchid Grill House menu hero"
            fill
            className="object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 -rotate-180 bg-gradient-to-t from-[#09392d] to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center px-5 text-center md:px-0">
            <div className="mx-auto w-full max-w-4xl">
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#fff]">
                Explore Our Menu
              </p>
              <h1 className="text-6xl font-light tracking-wide text-white md:text-7xl">The Menu</h1>
              <div className="mx-auto mt-6 h-px w-12 bg-white opacity-40" />
            </div>
          </div>
        </section>

        <section className="sticky top-[80px] z-30 border-b border-[rgba(26,58,46,0.1)] bg-[#f5f0e8] px-5 py-5 sm:px-8 md:px-20">
          <div
            className="max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveCategory(tab)}
                  className={`whitespace-nowrap border-b-2 pb-1 text-sm uppercase tracking-[0.2em] transition-opacity duration-300 ${
                    activeCategory === tab
                      ? "border-[#a54933] font-medium text-[#1a3a2e] opacity-100"
                      : "border-transparent text-[#1a3a2e] opacity-40 hover:opacity-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 md:px-20">
            {filteredCategories.map((category) => {
            const items = menuItems.filter((item) => item.category === category);

            return (
              <div key={category} className="mb-16 last:mb-0">
                <div className="mb-10 flex items-center gap-6">
                  <h2 className="whitespace-nowrap text-xs uppercase tracking-[0.35em] text-[#a54933]">
                    {category}
                  </h2>
                  <div className="h-px flex-1 bg-[#1a3a2e] opacity-10" />
                </div>

                <div className="grid grid-cols-1 gap-x-0 gap-y-0 md:grid-cols-2 md:gap-x-16">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className={`group flex min-h-[90px] cursor-pointer flex-row items-center overflow-hidden border-b border-l-2 border-[#1a3a2e]/[0.08] border-l-transparent transition-colors duration-300 hover:bg-[#1a3a2e]/[0.02] ${
                        activeItemName === item.name ? "border-l-[#a54933]" : ""
                      }`}
                      onMouseEnter={() => handleItemEnter(item.name)}
                      onMouseLeave={handleItemLeave}
                      onClick={() => handleItemClick(item.name)}
                    >
                      <div
                        className={`hidden h-full min-h-[100px] w-0 shrink-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:block md:w-0 md:group-hover:w-[160px] ${
                          activeItemName === item.name ? "md:w-[160px]" : ""
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={600}
                          height={400}
                          className={`h-full w-full object-cover object-center transition-transform duration-700 ease-out ${
                            activeItemName === item.name ? "scale-100" : "scale-110"
                          }`}
                          draggable={false}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 py-6 sm:px-6">
                        <h3 className="mb-1 break-words text-base font-medium tracking-wide text-[#1a3a2e]">
                          {item.name}
                        </h3>
                        <p className="max-w-xs break-words text-sm font-light leading-relaxed text-[#1a3a2e] opacity-55">
                          {item.description}
                        </p>
                      </div>
                      <div className="shrink-0 py-6 pl-4 pr-0 text-right sm:pl-8">
                        <p className="text-base font-light tracking-wide text-[#1a3a2e]">{item.price}</p>
                        {item.tag ? (
                          <p className="mt-1 text-[10px] uppercase tracking-widest text-[#a54933] opacity-80">
                            {item.tag}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
            })}
        </section>

        <section className="bg-[#1a3a2e] px-5 py-20 sm:px-8 md:px-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-light tracking-wide text-white">Ready to Dine?</h2>
            <p className="mb-8 text-sm font-light text-white opacity-60">
              Call now or get directions to enjoy the full menu in person.
            </p>
            <PrimaryActionButtons theme="dark" />
          </div>
        </section>
      </main>
      <CTASection />
    </>
  );
}
