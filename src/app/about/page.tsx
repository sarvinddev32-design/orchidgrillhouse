"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Navbar } from "@/app/components/Navbar";
import { PrimaryActionButtons } from "@/app/components/PrimaryActionButtons";
import { CTASection } from "@/app/sections/CTASection";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Signature", href: "/signature" },
  { label: "Gallery", href: "/gallery" },
  { label: "Location", href: "/location" },
];

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNavHref, setActiveNavHref] = useState("/about");
  const mobileMenuRef = useRef<HTMLUListElement | null>(null);
  const mobileMenuOverlayRef = useRef<HTMLButtonElement | null>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);

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

        <section className="relative h-[55vh] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
            alt="About Orchid hero"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="pointer-events-none absolute inset-0 -rotate-180 bg-gradient-to-t from-[#09392d] to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#a54933]">Our Story</p>
              <h1 className="text-6xl font-light tracking-wide text-white md:text-7xl">About Orchid</h1>
              <div className="mx-auto mt-6 h-px w-12 bg-white opacity-40" />
            </div>
          </div>
        </section>

        <section className="px-5 py-28 sm:px-8 md:px-40">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-10 text-4xl font-light italic leading-tight tracking-wide text-[#1a3a2e] md:text-5xl">
              <span className="block">We don&apos;t just serve food -</span>
              <span className="block">we craft moments.</span>
            </h2>
            <div className="mx-auto mb-10 h-px w-12 bg-[#a54933]" />
            <p className="mx-auto max-w-2xl text-center text-sm font-light leading-relaxed text-[#1a3a2e] opacity-65">
              Born in the heart of Dubai, Orchid Grill House was founded on a single belief - that
              Lebanese cuisine deserves to be celebrated with the same reverence as the world&apos;s
              finest culinary traditions. Since 2018, we have brought together fire, spice, and
              tradition to create a dining experience unlike any other.
            </p>
          </div>
        </section>

        <section className="flex min-h-[580px] w-full flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80"
              alt="How Orchid Grill House began"
              width={1200}
              height={900}
              className="h-[300px] w-full object-cover md:min-h-[580px] md:h-full"
            />
          </div>
          <div className="flex flex-col justify-center bg-[#1a3a2e] p-16 md:w-1/2 md:p-24">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#a54933]">How It Began</p>
            <h2 className="mb-6 text-4xl font-light leading-tight tracking-wide text-white">
              <span className="block">A Passion Rooted</span>
              <span className="block">in Tradition.</span>
            </h2>
            <div className="mb-8 h-px w-10 bg-[#a54933]" />
            <p className="mb-4 max-w-sm text-sm font-light leading-relaxed text-white opacity-60">
              Our founder, Chef Karim Mansour, grew up in Beirut surrounded by the aromas of his
              grandmother&apos;s kitchen - slow-braised meats, hand-rolled kibbeh, and the
              unmistakable scent of saj bread fresh off the fire.
            </p>
            <p className="max-w-sm text-sm font-light leading-relaxed text-white opacity-60">
              After two decades honing his craft across Beirut, Paris, and Dubai, Karim opened
              Orchid Grill House with a vision: to bring the soul of Lebanese home cooking to a
              refined dining table - without losing a single drop of authenticity.
            </p>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8 md:px-20">
          <p className="mb-16 text-center text-xs uppercase tracking-[0.35em] text-[#a54933]">
            What We Stand For
          </p>
          <div className="grid grid-cols-1 divide-y divide-[#1a3a2e]/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="flex flex-col px-10 py-6 md:px-14">
              <p className="mb-4 text-[80px] font-light leading-none text-[#1a3a2e] opacity-[0.06]">01</p>
              <h3 className="mb-4 text-xl font-light tracking-wide text-[#1a3a2e]">
                Rooted in Authenticity
              </h3>
              <div className="mb-5 h-px w-8 bg-[#a54933]" />
              <p className="text-sm font-light leading-relaxed text-[#1a3a2e] opacity-60">
                Every recipe we serve carries the fingerprint of Lebanese tradition - sourced from
                family kitchens, perfected over generations, and served with pride.
              </p>
            </div>
            <div className="flex flex-col px-10 py-6 md:px-14">
              <p className="mb-4 text-[80px] font-light leading-none text-[#1a3a2e] opacity-[0.06]">02</p>
              <h3 className="mb-4 text-xl font-light tracking-wide text-[#1a3a2e]">Crafted With Fire</h3>
              <div className="mb-5 h-px w-8 bg-[#a54933]" />
              <p className="text-sm font-light leading-relaxed text-[#1a3a2e] opacity-60">
                From open-flame grills to wood-fired saj bread, our cooking methods are deliberate.
                Heat is not a tool - it is an ingredient.
              </p>
            </div>
            <div className="flex flex-col px-10 py-6 md:px-14">
              <p className="mb-4 text-[80px] font-light leading-none text-[#1a3a2e] opacity-[0.06]">03</p>
              <h3 className="mb-4 text-xl font-light tracking-wide text-[#1a3a2e]">Served With Warmth</h3>
              <div className="mb-5 h-px w-8 bg-[#a54933]" />
              <p className="text-sm font-light leading-relaxed text-[#1a3a2e] opacity-60">
                Lebanese hospitality is at the core of everything we do. Every guest is welcomed
                not as a customer, but as a family member at our table.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#1a3a2e] px-5 py-24 sm:px-8 md:px-20">
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
              alt="Chef Karim Mansour portrait"
              width={800}
              height={1000}
              className="h-[300px] w-full shrink-0 object-cover object-top md:h-[520px] md:w-[420px]"
            />
            <div className="max-w-lg">
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#a54933]">Meet the Chef</p>
              <h2 className="mb-2 text-4xl font-light tracking-wide text-white md:text-5xl">
                Chef Karim Mansour
              </h2>
              <p className="mb-8 text-sm font-light uppercase tracking-widest text-white opacity-40">
                Founder &amp; Executive Chef
              </p>
              <div className="mb-8 h-px w-10 bg-[#a54933]" />
              <p className="mb-8 text-xl font-light italic leading-relaxed text-white opacity-80">
                Food is memory. Every dish I create is a letter to the people and places that
                shaped me.
              </p>
              <p className="text-sm font-light leading-relaxed text-white opacity-55">
                With over 20 years of culinary experience spanning Beirut, Lyon, and Dubai, Chef
                Karim has earned recognition for his ability to honor tradition while embracing the
                precision of modern cuisine. His work at Orchid Grill House is widely regarded as
                the finest expression of Lebanese fine dining in the UAE.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f0e8] px-5 py-20 sm:px-8 md:px-20">
          <div className="grid grid-cols-2 divide-y divide-[#1a3a2e]/10 md:grid-cols-4 md:divide-x md:divide-y-0">
            <div className="px-6 py-6 text-center md:px-10">
              <p className="mb-2 text-5xl font-light tracking-tight text-[#1a3a2e] md:text-6xl">2018</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#1a3a2e] opacity-40">Est. Year</p>
            </div>
            <div className="px-6 py-6 text-center md:px-10">
              <p className="mb-2 text-5xl font-light tracking-tight text-[#1a3a2e] md:text-6xl">6+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#1a3a2e] opacity-40">
                Years of Craft
              </p>
            </div>
            <div className="px-6 py-6 text-center md:px-10">
              <p className="mb-2 text-5xl font-light tracking-tight text-[#1a3a2e] md:text-6xl">1,000+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#1a3a2e] opacity-40">
                Daily Guests
              </p>
            </div>
            <div className="px-6 py-6 text-center md:px-10">
              <p className="mb-2 text-5xl font-light tracking-tight text-[#1a3a2e] md:text-6xl">12+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#1a3a2e] opacity-40">Awards Won</p>
            </div>
          </div>
        </section>

        <section className="bg-[#1a3a2e] px-5 py-24 sm:px-8 md:px-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#a54933]">Come Dine With Us</p>
            <h2 className="mb-4 text-4xl font-light tracking-wide text-white md:text-5xl">
              Your Next Visit Starts Here.
            </h2>
            <p className="mb-10 text-sm font-light text-white opacity-50">
              Connect with Orchid Grill House in one tap and plan your visit instantly.
            </p>
            <PrimaryActionButtons theme="dark" />
          </div>
        </section>
      </main>
      <CTASection />
    </>
  );
}
