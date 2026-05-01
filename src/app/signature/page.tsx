"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/app/components/Navbar";
import { CTASection } from "@/app/sections/CTASection";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Signature", href: "/signature" },
  { label: "Gallery", href: "/gallery" },
  { label: "Location", href: "/location" },
];

const shawarmaIngredients = [
  "24hr Marinated Chicken",
  "Lebanese 7-Spice Blend",
  "House-Baked Saj Bread",
  "Signature Garlic Sauce",
  "Pomegranate Molasses",
  "Fresh Garden Pickles",
  "Herb & Onion Salad",
];

const shawayaIngredients = [
  "Free-Range Whole Chicken",
  "12-Spice Lebanese Marinade",
  "Sumac & Allspice Rub",
  "Charcoal Fire Roast",
  "Saffron Basmati Rice",
  "Charcoal Grilled Vegetables",
  "House Garlic Dip",
];

export default function SignaturePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNavHref, setActiveNavHref] = useState("/signature");
  const mobileMenuRef = useRef<HTMLUListElement | null>(null);
  const mobileMenuOverlayRef = useRef<HTMLButtonElement | null>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const pageRef = useRef<HTMLDivElement | null>(null);
  const imgRef1 = useRef<HTMLDivElement | null>(null);
  const imgRef2 = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!pageRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".sig-reveal-heading").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".sig-reveal-image").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.05, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".sig-ingredient-group").forEach((group) => {
        gsap.fromTo(
          group.querySelectorAll(".sig-ingredient-row"),
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 86%",
            },
          }
        );
      });

      if (imgRef1.current) {
        gsap.to(imgRef1.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: imgRef1.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (imgRef2.current) {
        gsap.to(imgRef2.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: imgRef2.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, pageRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <main
        ref={pageRef}
        className="max-w-[100vw] overflow-x-hidden bg-[#f5f0e8] text-[#1a3a2e]"
        style={{ fontFamily: '"bricolage-grotesque", "Bricolage Grotesque", sans-serif' }}
      >
        <Navbar
          navItems={navItems}
          isScrolled={true}
          activeNavHref={activeNavHref}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          setActiveNavHref={setActiveNavHref}
          mobileMenuRef={mobileMenuRef}
          mobileMenuOverlayRef={mobileMenuOverlayRef}
          menuTimelineRef={menuTimelineRef}
        />

        <section className="relative h-[60vh] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=80"
            alt="Signature hero"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="pointer-events-none absolute inset-0 -rotate-180 bg-gradient-to-t from-[#09392d] to-transparent" />
          <div className="absolute bottom-12 left-12 right-5 md:left-20">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#a54933]">Our Signature</p>
            <h1 className="sig-reveal-heading text-5xl font-light leading-tight tracking-wide text-white md:text-7xl">
              <span className="block">The Dishes That</span>
              <span className="block">Define Us.</span>
            </h1>
            <div className="mt-6 h-px w-12 bg-white opacity-40" />
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8 md:px-40">
          <div className="flex flex-col items-start gap-12 md:flex-row md:gap-20">
            <div className="md:w-[40%]">
              <h2 className="sig-reveal-heading text-3xl font-light italic leading-tight tracking-wide text-[#1a3a2e] md:text-4xl">
                <span className="block">Two dishes.</span>
                <span className="block">One obsession.</span>
              </h2>
            </div>
            <div className="md:w-[60%]">
              <p className="max-w-lg text-sm font-light leading-relaxed text-[#1a3a2e] opacity-65">
                Among our extensive menu, two dishes stand in a class of their own. Crafted with
                years of refinement and an unwavering commitment to authenticity, our Lebanese
                Shawarma and Chicken Shawaya are not just dishes - they are the heart and soul of
                Orchid Grill House.
              </p>
              <div className="mt-10 h-px w-full bg-[#1a3a2e] opacity-10" />
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="relative h-[50vw] min-h-[280px] overflow-hidden md:h-[70vh]">
            <div ref={imgRef1} className="sig-reveal-image h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1600&q=80"
                alt="Lebanese Shawarma"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute right-5 top-8 border border-white/40 px-4 py-2 text-[10px] uppercase tracking-[0.4em] text-white md:right-12 md:top-12">
              Signature Wrap
            </div>
          </div>

          <div className="bg-[#f5f0e8] px-5 py-20 sm:px-8 md:px-20">
            <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-16">
              <div className="relative md:w-[55%]">
                <p className="absolute -top-8 left-0 hidden text-[120px] font-light leading-none text-[#1a3a2e] opacity-[0.05] md:block">
                  01
                </p>
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#a54933]">
                  Lebanese Shawarma
                </p>
                <h2 className="sig-reveal-heading mb-8 text-5xl font-light leading-tight tracking-wide text-[#1a3a2e] md:text-6xl">
                  <span className="block">The Signature</span>
                  <span className="block">Wrap</span>
                </h2>
                <div className="mb-8 h-px w-12 bg-[#a54933]" />
                <p className="mb-6 max-w-md text-sm font-light leading-relaxed text-[#1a3a2e] opacity-65">
                  Our Lebanese Chicken Shawarma is the dish that started it all. Fire-kissed
                  chicken marinated for 24 hours in a blend of Lebanese spices, then slow-roasted
                  on the vertical spit until perfectly charred on the outside and impossibly tender
                  within.
                </p>
                <p className="mb-10 max-w-md text-sm font-light leading-relaxed text-[#1a3a2e] opacity-65">
                  Wrapped in house-baked saj bread with our signature garlic sauce, fresh pickles,
                  and a drizzle of pomegranate molasses - every bite is a balance of smokiness,
                  tang, and warmth.
                </p>
                <div className="mt-4 flex items-baseline gap-3">
                  <p className="text-xs uppercase tracking-widest text-[#1a3a2e] opacity-40">From</p>
                  <p className="text-3xl font-light text-[#1a3a2e]">₹ 38</p>
                </div>
              </div>

              <div className="sig-ingredient-group md:w-[45%]">
                <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#1a3a2e] opacity-40">
                  What&apos;s Inside
                </p>
                {shawarmaIngredients.map((ingredient) => (
                  <div
                    key={ingredient}
                    className="sig-ingredient-row flex items-center justify-between border-b border-[#1a3a2e]/[0.08] py-4"
                  >
                    <p className="text-sm font-light tracking-wide text-[#1a3a2e]">{ingredient}</p>
                    <span className="h-1 w-1 rounded-full bg-[#a54933] opacity-60" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div
          className="h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, #a54933, transparent)" }}
        />

        <section className="w-full">
          <div className="relative h-[50vw] min-h-[280px] overflow-hidden md:h-[70vh]">
            <div ref={imgRef2} className="sig-reveal-image h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=1600&q=80"
                alt="Chicken Shawaya"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute left-5 top-8 border border-white/40 px-4 py-2 text-[10px] uppercase tracking-[0.4em] text-white md:left-12 md:top-12">
              Chef Special
            </div>
          </div>

          <div className="bg-[#1a3a2e] px-5 py-20 sm:px-8 md:px-20">
            <div className="flex flex-col gap-12 md:flex-row-reverse md:items-start md:justify-between md:gap-16">
              <div className="relative md:w-[55%]">
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#a54933]">Chef Special</p>
                <h2 className="sig-reveal-heading mb-8 text-5xl font-light leading-tight tracking-wide text-white md:text-6xl">
                  <span className="block">Chicken</span>
                  <span className="block">Shawaya</span>
                </h2>
                <div className="mb-8 h-px w-12 bg-[#a54933]" />
                <p className="mb-6 max-w-md text-sm font-light leading-relaxed text-white opacity-60">
                  The Chicken Shawaya is a celebration of fire and spice. A whole free-range
                  chicken, marinated overnight in 12 aromatic spices including sumac, allspice, and
                  Lebanese cinnamon - then slow-roasted over charcoal until the skin blisters and
                  the meat falls effortlessly from the bone.
                </p>
                <p className="mb-10 max-w-md text-sm font-light leading-relaxed text-white opacity-60">
                  Served whole or half with saffron rice, grilled vegetables, and our house-made
                  garlic dip - this is the dish our guests return for, again and again.
                </p>
                <div className="mt-4 flex items-baseline gap-3">
                  <p className="text-xs uppercase tracking-widest text-white opacity-30">From</p>
                  <p className="text-3xl font-light text-white">₹ 85</p>
                </div>
              </div>

              <div className="sig-ingredient-group md:w-[45%]">
                <p className="mb-8 text-xs uppercase tracking-[0.35em] text-white opacity-30">
                  What&apos;s Inside
                </p>
                {shawayaIngredients.map((ingredient) => (
                  <div
                    key={ingredient}
                    className="sig-ingredient-row flex items-center justify-between border-b border-white/[0.08] py-4"
                  >
                    <p className="text-sm font-light tracking-wide text-white">{ingredient}</p>
                    <span className="h-1 w-1 rounded-full bg-[#a54933] opacity-60" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f0e8] px-5 py-24 sm:px-8 md:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#a54933]">Taste the Difference</p>
            <h2 className="mb-4 text-4xl font-light tracking-wide text-[#1a3a2e] md:text-5xl">
              Order Your Signature Tonight.
            </h2>
            <p className="mb-10 text-sm font-light text-[#1a3a2e] opacity-50">
              Available exclusively at Orchid Grill House, Al Wasl Road, Dubai.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/menu"
                className="inline-flex rounded-none border border-[#1a3a2e] px-8 py-3 text-sm uppercase tracking-widest text-[#1a3a2e] transition-all duration-300 hover:bg-[#1a3a2e] hover:text-white"
              >
                View Full Menu
              </a>
              <a
                href="tel:09847632600"
                className="inline-flex rounded-none bg-[#1a3a2e] px-8 py-3 text-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#a54933]"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <CTASection />
    </>
  );
}
