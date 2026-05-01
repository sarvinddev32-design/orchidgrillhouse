"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PrimaryActionButtons } from "@/app/components/PrimaryActionButtons";
import { TeamMemberCard } from "@/app/components/TeamMemberCard";

const teamMembers = [
  {
    name: "Chef Karim Mansour",
    role: "Head Chef",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=1000&q=80",
    shortLine: "Crafting flavors with passion.",
  },
  {
    name: "Rayan Hameed",
    role: "Grill Master",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1000&q=80",
    shortLine: "Balancing fire, smoke, and precision.",
  },
  {
    name: "Aaliyah Noor",
    role: "Pastry Lead",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1000&q=80",
    shortLine: "Delicate finishes that complete every course.",
  },
  {
    name: "Yaseen Rahman",
    role: "Service Lead",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1000&q=80",
    shortLine: "Turning service into memorable hospitality.",
  },
  {
    name: "Mira K.",
    role: "Guest Relations",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1000&q=80",
    shortLine: "Welcoming every table with warmth.",
  },
  {
    name: "Fahad Ali",
    role: "Sous Chef",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=1000&q=80",
    shortLine: "Consistency in every plate that leaves the pass.",
  },
];

const trustItems = [
  "10+ Years Culinary Experience",
  "Authentic Lebanese Techniques",
  "Premium Ingredients Only",
  "Trained Hospitality Staff",
];

export function OurTeamSection() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-fade-item",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 75%",
          },
        }
      );
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="bg-[#F5F1EB] py-20 text-[#1A1A1A] md:py-28"
      style={{ fontFamily: '"bricolage-grotesque", "Bricolage Grotesque", sans-serif' }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <header className="team-fade-item mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#A44A2F]">Our Team</p>
          <h2 className="mt-4 text-4xl font-light tracking-wide text-[#1A1A1A] md:text-5xl">
            The People Behind the Experience
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#6B6B6B] md:text-base">
            From our chefs to our service team, every detail is crafted by passionate hands.
          </p>
        </header>

        <div className="team-fade-item mt-14 grid overflow-hidden rounded-xl bg-white shadow-[0_20px_45px_rgba(15,61,46,0.08)] md:grid-cols-2">
          <div className="relative min-h-[340px] md:min-h-[460px]">
            <Image
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1400&q=80"
              alt="Head chef preparing signature plate"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div className="flex items-center bg-[#F5F1EB] p-8 md:p-12">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#A44A2F]">Head Chef</p>
              <h3 className="mt-3 text-3xl font-light tracking-wide text-[#1A1A1A] md:text-4xl">
                Chef Karim Mansour
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-[#6B6B6B] md:text-base">
                With over a decade of culinary craft, Chef Karim blends authentic Lebanese
                traditions with modern refinement, guiding every kitchen detail from marinades to
                final plating.
              </p>
              <p className="mt-5 text-base italic text-[#0F3D2E] md:text-lg">
                &quot;Food is memory. Every dish tells a story.&quot;
              </p>
              <a
                href="/about"
                className="mt-8 inline-flex rounded-none border border-[#0F3D2E] px-7 py-2.5 text-xs uppercase tracking-[0.2em] text-[#0F3D2E] transition hover:bg-[#0F3D2E] hover:text-white"
              >
                Explore Our Story
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-fade-item">
              <TeamMemberCard {...member} />
            </div>
          ))}
        </div>


        <div className="team-fade-item mt-10 grid gap-3 md:mt-12 md:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-[#0F3D2E]/12 bg-white px-4 py-5 text-center text-sm tracking-wide text-[#1A1A1A]"
            >
              <p className="mb-2 text-[#A44A2F]">✦</p>
              {item}
            </div>
          ))}
        </div>

        <div className="team-fade-item mt-12 rounded-xl bg-[#0F3D2E] px-6 py-12 text-center md:mt-14 md:px-10">
          <h3 className="text-3xl font-light tracking-wide text-white md:text-4xl">
            Experience the People Behind the Plate.
          </h3>
          <PrimaryActionButtons
            className="mt-8 justify-center"
            theme="dark"
            secondaryLabel="View Menu"
            secondaryHref="/menu"
            secondaryExternal={false}
          />
        </div>
      </div>
    </section>
  );
}
