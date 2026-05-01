export function MissionVisionSection() {
  return (
    <section className="w-full">
      <div className="flex min-h-[500px] flex-col md:flex-row">
        <div className="min-h-[300px] md:min-h-[500px] md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80"
            alt="Restaurant table setting"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-center bg-[#1a3a2e] p-16 md:w-1/2 md:p-24">
        <h2 className="text-4xl font-semibold text-[#fff] lg:text-5xl">Our Mission</h2>
          <p className="max-w-xl text-sm font-light leading-relaxed text-white opacity-60 mt-2">
            Our mission is to honor the soul of Lebanese cuisine - using fire, time, and the finest
            ingredients to create dishes that feel both familiar and extraordinary. Every plate that
            leaves our kitchen carries intention, warmth, and craft.
          </p>
        </div>
      </div>

      <div className="flex min-h-[500px] flex-col md:flex-row-reverse">
        <div className="min-h-[300px] md:min-h-[500px] md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80"
            alt="Lebanese dishes spread"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-center bg-[#f5f0e8] p-16 md:w-1/2 md:p-24">
        <h2 className="text-4xl font-semibold text-[#1a3a2e] lg:text-5xl">Our Vision</h2>
          <p className="max-w-xl text-sm font-medium leading-relaxed text-[#1a3a2e] opacity-70 mt-2">
            We envision Orchid Grill House as the defining Lebanese dining experience in the region
            - a place where every guest feels the weight of tradition and the ease of modern
            hospitality. We are building more than a restaurant; we are building a legacy.
          </p>
        </div>
      </div>
    </section>
  );
}
