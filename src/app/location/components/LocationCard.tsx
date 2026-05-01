import Image from "next/image";

export type LocationItem = {
  name: string;
  slug: string;
  image: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
  embedUrl: string;
  coordinates: { lat: number; lng: number };
  description: string;
};

type LocationCardProps = {
  item: LocationItem;
  reversed?: boolean;
};

export function LocationCard({ item, reversed = false }: LocationCardProps) {
  return (
    <article
      id={item.slug}
      className={`group grid overflow-hidden rounded-xl border border-[#0F3D2E]/10 bg-white shadow-[0_18px_40px_rgba(15,61,46,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,61,46,0.14)] md:grid-cols-2 ${
        reversed ? "" : ""
      }`}
    >
      <div className={`relative min-h-[280px] ${reversed ? "md:order-2" : ""}`}>
        <Image
          src={item.image}
          alt={`${item.name} branch`}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      </div>
      <div className={`flex flex-col justify-center p-7 md:p-10 ${reversed ? "md:order-1" : ""}`}>
        <h2 className="text-3xl font-light tracking-wide text-[#1A1A1A] md:text-4xl">{item.name}</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">{item.description}</p>

        <div className="mt-6 space-y-3 text-sm leading-relaxed text-[#1A1A1A]">
          <p>
            <span className="font-medium text-[#0F3D2E]">Address:</span> {item.address}
          </p>
          <p>
            <span className="font-medium text-[#0F3D2E]">Hours:</span> {item.hours}
          </p>
          <p>
            <span className="font-medium text-[#0F3D2E]">Contact:</span>{" "}
            <a className="underline decoration-[#A44A2F]/60 underline-offset-4" href={`tel:${item.phone}`}>
              {item.phone}
            </a>
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`tel:${item.phone}`}
            className="inline-flex rounded-none border border-[#A44A2F] bg-[#A44A2F] px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#8f3f28]"
          >
            Call Now
          </a>
          <a
            href={item.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-none border border-[#0F3D2E] px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-[#0F3D2E] transition hover:bg-[#0F3D2E] hover:text-white"
          >
            Get Directions
          </a>
        </div>
      </div>
    </article>
  );
}
