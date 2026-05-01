"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroImage from "@/app/assets/img/hero.jpg";
import { Navbar } from "@/app/components/Navbar";
import { PrimaryActionButtons } from "@/app/components/PrimaryActionButtons";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Signature", href: "/signature" },
  { label: "Gallery", href: "/gallery" },
  { label: "Location", href: "/location" },
];

export function HeroSection() {
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNavHref, setActiveNavHref] = useState("/");
  const mobileMenuRef = useRef<HTMLUListElement | null>(null);
  const mobileMenuOverlayRef = useRef<HTMLButtonElement | null>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const updateActiveNavFromHash = () => {
      setActiveNavHref(window.location.hash || "/");
    };

    updateActiveNavFromHash();
    window.addEventListener("hashchange", updateActiveNavFromHash);

    return () => {
      window.removeEventListener("hashchange", updateActiveNavFromHash);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!imageWrapRef.current || !imageRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: imageWrapRef.current,
            start: "top 85%",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, imageWrapRef);

    return () => {
      ctx.revert();
    };
  }, []);

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
    <section
      id="hero"
      aria-label="Orchid Grill House hero"
      className="overflow-hidden bg-[#F5F1EA] text-[#09392d]"
      style={{ fontFamily: '"bricolage-grotesque", "Bricolage Grotesque", sans-serif' }}
    >
      <div className="mx-auto">
        <Navbar
          navItems={navItems}
          isScrolled={isScrolled}
          activeNavHref={activeNavHref}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          setActiveNavHref={setActiveNavHref}
          mobileMenuRef={mobileMenuRef}
          mobileMenuOverlayRef={mobileMenuOverlayRef}
          menuTimelineRef={menuTimelineRef}
        />
        <div className="relative mt-12 w-[98%] mx-auto">
          <div
            ref={imageWrapRef}
            className="relative overflow-hidden shadow-[0_28px_70px_rgba(9,57,45,0.16)]"
          >
            <Image
              src={heroImage}
              alt="Warm premium casual dining interior at Orchid Grill House"
              priority
              className="h-[420px] w-full origin-center object-cover will-change-transform sm:h-[520px] lg:h-[910px]"
              ref={imageRef}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09392d] to-transparent" />
            <div className="absolute bottom-0 left-0 z-10 p-8 md:p-12 lg:p-16">
              <p className="text-xs uppercase tracking-[0.28em] text-white/60">
                ORCHID GRILL HOUSE · EST. 2022
              </p>
              <h1 className="mt-4 text-4xl font-normal leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl">
                <span className="block">Where Every Meal</span>
                <span className="block">Tells a Story</span>
              </h1>
              <p className="mt-4 text-sm tracking-wide text-white/80 sm:text-base">
                Orchid Grill House, Perod - Nadapuram
              </p>
              <PrimaryActionButtons
                className="mt-6"
                phone="098476 32600"
                secondaryLabel="View Menu"
                secondaryHref="/menu"
                secondaryExternal={false}
                theme="dark"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
