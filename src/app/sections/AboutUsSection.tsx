"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PrimaryActionButtons } from "@/app/components/PrimaryActionButtons";

gsap.registerPlugin(ScrollTrigger);

export function AboutUsSection() {
  const badgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!badgeRef.current) {
      return;
    }

    gsap.to(badgeRef.current, {
      rotation: 360,
      ease: "none",
      scrollTrigger: {
        trigger: badgeRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      className="bg-[#F5F1EA] px-12 py-20 md:px-20"
      style={{ fontFamily: '"bricolage-grotesque", "Bricolage Grotesque", sans-serif' }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="md:w-1/4">
            <h2 className="text-4xl font-semibold text-[#09392d] lg:text-5xl">About Us</h2>
          </div>
          <div className="md:w-3/4">
            <p className="max-w-xl text-sm font-medium leading-relaxed text-[#09392d]/75 md:text-base">
              At Orchid Grill House, we believe every meal is a celebration. Rooted in Lebanese
              tradition and refined with modern technique, we craft experiences that linger - in
              flavor, in warmth, and in memory.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-10 md:flex-row">
          <div className="relative md:w-3/5">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
              alt="Restaurant interior dining ambience"
              className="h-[480px] w-full object-cover object-center lg:h-[500px]"
            />
            <div
              ref={badgeRef}
              className="absolute bottom-6 right-6 h-28 w-28 cursor-pointer rounded-full"
              style={{ backgroundColor: "#a54933" }}
            >
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs>
                  <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                </defs>
                <text
                  fontSize="12"
                  fill="white"
                  fontFamily="inherit"
                  letterSpacing="1.5"
                  textAnchor="start"
                  fontWeight="400"
                >
                  <textPath href="#circlePath">
                    ORCHID GRILL HOUSE • ORCHID GRILL HOUSE •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-8 md:w-2/5 md:pl-12 lg:pl-16">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#09392d]">
                Open Hours
              </h3>
              <p className="mt-3 text-sm font-light leading-loose text-[#09392d]/80">
                Monday - Friday: 6:00 PM - 11:00 PM
                <br />
                Saturday - Sunday: 12:00 PM - 10:00 PM
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#09392d]">
                Address
              </h3>
              <p className="mt-3 text-sm font-light leading-loose text-[#09392d]/80">
                Orchid Grill House, Al Wasl Road, Jumeirah, Dubai
                <br />
                info@orchidgrillhouse.com
                <br />
                +971 4 123 4567
              </p>
            </div>

            <PrimaryActionButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
