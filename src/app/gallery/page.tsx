"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { Navbar } from "@/app/components/Navbar";
import { CTASection } from "@/app/sections/CTASection";
import { PrimaryActionButtons } from "@/app/components/PrimaryActionButtons";
import { GalleryItem } from "@/app/gallery/components/GalleryItem";
import { FilterTabs, type GalleryCategory } from "@/app/gallery/components/FilterTabs";
import { SectionWrapper } from "@/app/gallery/components/SectionWrapper";

type GalleryEntry = {
  id: number;
  src: string;
  category: Exclude<GalleryCategory, "All">;
  title: string;
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Signature", href: "/signature" },
  { label: "Gallery", href: "/gallery" },
  { label: "Location", href: "/location" },
];

const categories: GalleryCategory[] = ["All", "Food", "Ambience", "Kitchen", "Guests"];

const galleryItems: GalleryEntry[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1200&q=80",
    category: "Food",
    title: "Lebanese Shawarma",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80",
    category: "Ambience",
    title: "Private Dining Glow",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&q=80",
    category: "Kitchen",
    title: "Open Flame Precision",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    category: "Food",
    title: "Mezze Selection",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80",
    category: "Guests",
    title: "Evening Gatherings",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    category: "Food",
    title: "Chef's Signature Plate",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200&q=80",
    category: "Ambience",
    title: "Candlelit Corners",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    category: "Guests",
    title: "Shared Celebrations",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=1200&q=80",
    category: "Food",
    title: "Chicken Shawaya",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?w=1200&q=80",
    category: "Kitchen",
    title: "Chef at the Pass",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&q=80",
    category: "Ambience",
    title: "Refined Table Setting",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=1200&q=80",
    category: "Guests",
    title: "Memorable Nights",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNavHref, setActiveNavHref] = useState("/gallery");
  const heroContentRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLUListElement | null>(null);
  const mobileMenuOverlayRef = useRef<HTMLButtonElement | null>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  useLayoutEffect(() => {
    if (!mobileMenuRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        gsap.set(mobileMenuRef.current, { x: "-100%" });
        if (mobileMenuOverlayRef.current) gsap.set(mobileMenuOverlayRef.current, { autoAlpha: 0 });
        gsap.set(".mobile-nav-item", { y: 20, opacity: 0 });

        menuTimelineRef.current = gsap
          .timeline({ paused: true })
          .to(mobileMenuRef.current, { x: "0%", duration: 0.45, ease: "power3.out" })
          .to(
            mobileMenuOverlayRef.current,
            { autoAlpha: 1, duration: 0.3, ease: "power2.out" },
            0
          )
          .to(
            ".mobile-nav-item",
            { y: 0, opacity: 1, stagger: 0.05, duration: 0.3, ease: "power3.out" },
            "-=0.2"
          );
      });

      mm.add("(min-width: 768px)", () => {
        setIsMobileMenuOpen(false);
        gsap.set(mobileMenuRef.current, { clearProps: "transform" });
        gsap.set(".mobile-nav-item", { clearProps: "transform,opacity" });
        if (mobileMenuOverlayRef.current) gsap.set(mobileMenuOverlayRef.current, { autoAlpha: 0 });
      });

      return () => mm.revert();
    });

    return () => {
      menuTimelineRef.current?.kill();
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (!menuTimelineRef.current) return;
    if (window.matchMedia("(min-width: 768px)").matches) return;
    if (isMobileMenuOpen) {
      menuTimelineRef.current.play();
      return;
    }
    menuTimelineRef.current.timeScale(1).reverse();
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!heroContentRef.current) return;
    gsap.fromTo(
      heroContentRef.current,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <main
        className="max-w-[100vw] overflow-x-hidden bg-[#F5F1EB] text-[#1A1A1A]"
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

        <section className="relative h-[60vh] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80"
            alt="Orchid gallery hero"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F3D2E]/70 to-black/60" />
          <SectionWrapper className="relative z-10 flex h-full items-center justify-center text-center">
            <div ref={heroContentRef}>
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#A44A2F]">Our Gallery</p>
              <h1 className="text-5xl font-light tracking-wide text-white md:text-7xl">Moments at Orchid</h1>
              <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-relaxed text-white/75 md:text-base">
                A glimpse into the flavors, ambiance, and experiences we craft daily.
              </p>
            </div>
          </SectionWrapper>
        </section>

        <section className="sticky top-[80px] z-30 border-b border-[#1A1A1A]/10 bg-[#F5F1EB]/95 py-5 backdrop-blur">
          <SectionWrapper>
            <FilterTabs
              categories={categories}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </SectionWrapper>
        </section>

        <section className="py-20 md:py-28">
          <SectionWrapper>
            <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
              {filteredItems.map((item) => (
                <div key={item.id} className="break-inside-avoid">
                  <GalleryItem src={item.src} title={item.title} category={item.category} />
                </div>
              ))}
            </div>
          </SectionWrapper>
        </section>

        <section className="bg-[#F5F1EB] py-20 md:py-28">
          <SectionWrapper>
            <div className="flex flex-col overflow-hidden rounded-xl bg-[#F5F1EB] md:flex-row">
              <div className="relative h-[340px] md:h-auto md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80"
                  alt="Featured dining experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center bg-[#F5F1EB] p-8 md:w-1/2 md:p-12">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#A44A2F]">
                    Featured Experience
                  </p>
                  <h2 className="text-4xl font-light leading-tight tracking-wide text-[#1A1A1A] md:text-5xl">
                    Crafted for the Senses
                  </h2>
                  <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-[#6B6B6B]">
                    Every corner, every plate, and every service moment at Orchid is curated to
                    create an immersive fine dining memory that lingers long after the evening.
                  </p>
                  <PrimaryActionButtons
                    className="mt-8"
                    secondaryLabel="Visit Us"
                    secondaryHref="/location"
                    secondaryExternal={false}
                  />
                </div>
              </div>
            </div>
          </SectionWrapper>
        </section>

        <section className="relative h-[52vh] overflow-hidden md:h-[62vh]">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
            alt="Orchid atmosphere"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-[#0F3D2E]/75" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <button
              type="button"
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/70 text-white transition hover:bg-white/20"
              aria-label="Play gallery atmosphere video"
            >
              ▶
            </button>
            <h3 className="text-3xl font-light tracking-wide text-white md:text-4xl">
              Experience the Atmosphere
            </h3>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <SectionWrapper>
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-light tracking-wide text-[#1A1A1A] md:text-5xl">
                From Our Guests
              </h2>
              <p className="mt-4 text-sm font-light text-[#6B6B6B]">
                Real moments captured at Orchid Grill House.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
              {galleryItems.slice(0, 10).map((item) => (
                <div key={`social-${item.id}`} className="group relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </SectionWrapper>
        </section>

        <section className="bg-[#0F3D2E] py-20 md:py-28">
          <SectionWrapper>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-light tracking-wide text-white md:text-5xl">
                Discover Orchid In Person.
              </h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-white/60">
                Call now or find your nearest branch in seconds.
              </p>
              <PrimaryActionButtons
                className="mt-10 justify-center"
                theme="dark"
                secondaryLabel="Explore Menu"
                secondaryHref="/menu"
                secondaryExternal={false}
              />
            </div>
          </SectionWrapper>
        </section>
      </main>
      <CTASection />
    </>
  );
}
