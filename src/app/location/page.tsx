"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { Navbar } from "@/app/components/Navbar";
import { PrimaryActionButtons } from "@/app/components/PrimaryActionButtons";
import { CTASection } from "@/app/sections/CTASection";
import { LocationCard, type LocationItem } from "@/app/location/components/LocationCard";
import { LocationTabs } from "@/app/location/components/LocationTabs";
import { SectionWrapper } from "@/app/location/components/SectionWrapper";
import { orchidLocations } from "@/data/locations";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Signature", href: "/signature" },
  { label: "Gallery", href: "/gallery" },
  { label: "Location", href: "/location" },
];

const locations: LocationItem[] = orchidLocations.map((location) => ({
  ...location,
  mapUrl: location.mapUrl,
}));

const visitHighlights = [
  {
    title: "Authentic Lebanese Flavors",
    text: "Recipes rooted in tradition with a signature Orchid finish.",
  },
  {
    title: "Premium Dining Ambience",
    text: "Elegant interiors and attentive service for every occasion.",
  },
  {
    title: "Family-Friendly Experience",
    text: "Comfortable spaces designed for gatherings of all sizes.",
  },
  {
    title: "Consistent Quality",
    text: "A trusted Orchid standard across all our locations.",
  },
];

const testimonials = [
  {
    name: "akhil Jm",
    review: "Nice atmosphere awesome food and friendly service must visit.",
    stars: 4,
  },
  {
    name: "Afthab Kazim",
    review: "Very less quantity of chicken in plate shawarma for the price of 140.",
    stars: 3,
  },
  {
    name: "Ahla Np",
    review: "The grilled dishes were perfectly cooked and full of flavor.",
    stars: 4,
  },
];

export default function LocationPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNavHref, setActiveNavHref] = useState("/location");
  const [activeLocationSlug, setActiveLocationSlug] = useState(locations[0].slug);
  const heroContentRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLUListElement | null>(null);
  const mobileMenuOverlayRef = useRef<HTMLButtonElement | null>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const cardsWrapRef = useRef<HTMLDivElement | null>(null);

  const activeLocation = useMemo(
    () => locations.find((item) => item.slug === activeLocationSlug) ?? locations[0],
    [activeLocationSlug]
  );

  const scrollToLocation = (slug: string) => {
    setActiveLocationSlug(slug);
    const element = document.getElementById(slug);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
    if (heroContentRef.current) {
      gsap.fromTo(
        heroContentRef.current,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
      );
    }

    if (cardsWrapRef.current) {
      gsap.fromTo(
        cardsWrapRef.current.querySelectorAll(".location-card"),
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.65, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <>
      <main
        className="max-w-[100vw] overflow-x-hidden bg-[#F5F1EB] pb-24 text-[#1A1A1A] md:pb-0"
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

        <section className="relative h-[62vh] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1600&q=80"
            alt="Orchid Grill House location hero"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F3D2E]/70 to-black/60" />
          <SectionWrapper className="relative z-10 flex h-full items-center justify-center text-center">
            <div ref={heroContentRef}>
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#A44A2F]">Our Locations</p>
              <h1 className="text-5xl font-light tracking-wide text-white md:text-7xl">
                Find Orchid Near You
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-relaxed text-white/75 md:text-base">
                Four locations. One unforgettable dining experience.
              </p>
              <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-white/65 md:text-xs">
                Dine-In • Family Friendly • Premium Dining
              </p>
            </div>
          </SectionWrapper>
        </section>

        <section className="sticky top-[80px] z-30 border-b border-[#1A1A1A]/10 bg-[#F5F1EB]/95 py-5 backdrop-blur">
          <SectionWrapper>
            <LocationTabs
              items={locations.map((item) => ({ name: item.name, slug: item.slug }))}
              activeSlug={activeLocationSlug}
              onSelect={scrollToLocation}
            />
          </SectionWrapper>
        </section>

        <section className="py-20 md:py-28">
          <SectionWrapper>
            <div ref={cardsWrapRef} className="space-y-8 md:space-y-10">
              {locations.map((item, index) => (
                <div key={item.slug} className="location-card">
                  <LocationCard item={item} reversed={index % 2 === 1} />
                </div>
              ))}
            </div>
          </SectionWrapper>
        </section>

        <section className="pb-20 md:pb-28">
          <SectionWrapper>
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-light tracking-wide text-[#1A1A1A] md:text-5xl">
                Visit Us Today
              </h2>
              <p className="mt-4 text-sm font-light text-[#6B6B6B]">
                Conveniently located across Kerala to serve you better.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#0F3D2E]/10 bg-white shadow-[0_14px_35px_rgba(15,61,46,0.08)]">
              <iframe
                key={activeLocation.slug}
                src={activeLocation.embedUrl}
                title={`Map for ${activeLocation.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0 md:h-[520px]"
              />
            </div>
          </SectionWrapper>
        </section>

        <section className="py-20 md:py-28">
          <SectionWrapper>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {visitHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-[#0F3D2E]/12 bg-white p-6 shadow-[0_10px_22px_rgba(15,61,46,0.06)]"
                >
                  <div className="mb-4 h-9 w-9 rounded-full bg-[#A44A2F]/12 text-center text-lg leading-9 text-[#A44A2F]">
                    ✦
                  </div>
                  <h3 className="text-lg font-medium tracking-wide text-[#1A1A1A]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">{item.text}</p>
                </article>
              ))}
            </div>
          </SectionWrapper>
        </section>

        <section className="pb-20 md:pb-28">
          <SectionWrapper>
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-xl border border-[#0F3D2E]/12 bg-white p-6 shadow-[0_10px_22px_rgba(15,61,46,0.06)]"
                >
                  <p className="text-[#A44A2F]">{"★".repeat(item.stars)}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B]">{item.review}</p>
                  <p className="mt-5 text-sm font-medium text-[#1A1A1A]">{item.name}</p>
                </article>
              ))}
            </div>
          </SectionWrapper>
        </section>

        <section className="bg-[#0F3D2E] py-20 md:py-28">
          <SectionWrapper>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-light tracking-wide text-white md:text-5xl">
                Your Nearest Orchid Is Ready.
              </h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-white/65">
                Call your nearest branch or get directions instantly.
              </p>
              <PrimaryActionButtons
                className="mt-10 justify-center"
                phone={activeLocation.phone}
                theme="dark"
                secondaryLabel="Get Directions"
                secondaryHref={activeLocation.mapUrl}
                secondaryExternal
              />
            </div>
          </SectionWrapper>
        </section>
      </main>

      <CTASection />
    </>
  );
}
