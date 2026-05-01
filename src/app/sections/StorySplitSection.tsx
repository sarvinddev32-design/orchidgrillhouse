import Image from "next/image";
import { Award, Clock, Users, UtensilsCrossed } from "lucide-react";

export function StorySplitSection() {
  return (
    <section className="w-full my-10">
      <div className="flex min-h-[600px] flex-col md:flex-row mx-auto max-w-[1440px]">
        <div className="min-h-[300px] md:min-h-[600px] md:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80"
            alt="Lebanese dining table spread"
            width={1200}
            height={900}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex min-h-[600px] flex-col justify-center bg-[#f5f0e8] p-14 md:w-1/2 md:p-20">
          <p className="mb-6 mb-3 text-lg font-medium uppercase text-[#a54933]" style={{ fontFamily: '"bricolage-grotesque", "Bricolage Grotesque", sans-serif' }}>Our Story</p>

          <h2 className="mb-8 text-4xl font-light leading-tight tracking-wide text-[#1a3a2e] md:text-5xl">
            <span className="block">A Taste of Lebanon,</span>
            <span className="block">Refined for the</span>
            <span className="block">Modern Table.</span>
          </h2>

          <p className="mb-4 max-w-md text-sm font-medium leading-relaxed text-[#1a3a2e]/70">
            Born from a passion for authentic Lebanese flavors, Orchid Grill House has grown into
            one of Dubai&apos;s most beloved dining destinations - where heritage meets refinement on
            every plate.
          </p>
          <p className="max-w-md text-sm font-medium leading-relaxed text-[#1a3a2e]/70">
            From our signature shawarma to slow-charred grills, every dish is crafted with
            hand-selected ingredients and techniques passed down through generations, elevated for
            the discerning palate.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="bg-[#1a3a2e] p-5 text-center">
              <UtensilsCrossed size={22} className="mx-auto text-[#a54933]" />
              <p className="mt-2 text-sm font-light leading-snug tracking-wide text-white">
                Authentic Lebanese Recipes
              </p>
            </div>
            <div className="bg-[#1a3a2e] p-5 text-center">
              <Clock size={22} className="mx-auto text-[#a54933]" />
              <p className="mt-2 text-sm font-light leading-snug tracking-wide text-white">
                10+ Years of Craft
              </p>
            </div>
            <div className="bg-[#1a3a2e] p-5 text-center">
              <Users size={22} className="mx-auto text-[#a54933]" />
              <p className="mt-2 text-sm font-light leading-snug tracking-wide text-white">
                1,000+ Happy Guests Daily
              </p>
            </div>
            <div className="bg-[#1a3a2e] p-5 text-center">
              <Award size={22} className="mx-auto text-[#a54933]" />
              <p className="mt-2 text-sm font-light leading-snug tracking-wide text-white">
                Awarded Fine Dining, Dubai
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
