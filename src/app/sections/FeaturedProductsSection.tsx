import Image from "next/image";

export function FeaturedProductsSection() {
  return (
    <section className="bg-[#a54933] px-12 py-24 md:px-20" style={{ fontFamily: '"bricolage-grotesque", "Bricolage Grotesque", sans-serif' }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex items-center gap-4">
          <h2 className="text-4xl font-semibold text-[#fff] lg:text-5xl">Signature Dishes</h2>
          <div className="mt-3 h-px flex-1 bg-white opacity-10" />
        </div>

        <div className="group flex min-h-[420px] flex-col items-stretch md:min-h-[460px] md:flex-row">
          <div className="overflow-hidden md:w-[55%]">
            <Image
              src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1200&q=80"
              alt="Lebanese Shawarma"
              width={1200}
              height={900}
              className="h-[260px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 md:h-full"
            />
          </div>
          <div className="relative flex flex-col justify-center p-12 md:w-[45%] md:p-16">
            <span className="pointer-events-none absolute right-8 top-4 text-[120px] font-light leading-none text-white opacity-[0.06]">
              01
            </span>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#fff] bg-whi">Signature Wrap</p>
            <h3 className="text-5xl font-light leading-tight tracking-wide text-white transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
              <span className="block">Lebanese</span>
              <span className="block">Shawarma</span>
            </h3>
            <div className="my-6 h-px w-12 bg-[#a54933] transition-all duration-500 group-hover:w-24" />
            <p className="max-w-xs text-sm font-light leading-relaxed text-white opacity-60">
              Juicy, fire-kissed slices wrapped warm with crisp vegetables and house sauces for an
              indulgent, flavor-rich bite.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex text-sm uppercase tracking-widest text-white opacity-70 transition hover:opacity-100"
            >
              Explore Dish →
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-white opacity-10" />

        <div className="group flex min-h-[420px] flex-col items-stretch md:min-h-[460px] md:flex-row">
          <div className="relative order-2 flex flex-col justify-center p-12 md:order-1 md:w-[45%] md:p-16">
            <span className="pointer-events-none absolute right-8 top-4 text-[120px] font-light leading-none text-white opacity-[0.06]">
              02
            </span>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#fff]">Chef Special</p>
            <h3 className="text-5xl font-light leading-tight tracking-wide text-white transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
              <span className="block">Chicken</span>
              <span className="block">Shawaya</span>
            </h3>
            <div className="my-6 h-px w-12 bg-[#a54933] transition-all duration-500 group-hover:w-24" />
            <p className="max-w-xs text-sm font-light leading-relaxed text-white opacity-60">
              Charred to perfection with aromatic spices, then plated with premium sides to deliver
              a bold, smoky signature finish.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex text-sm uppercase tracking-widest text-white opacity-70 transition hover:opacity-100"
            >
              Explore Dish →
            </a>
          </div>
          <div className="order-1 overflow-hidden md:order-2 md:w-[55%]">
            <Image
              src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=1200&q=80"
              alt="Chicken Shawaya"
              width={1200}
              height={900}
              className="h-[260px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
