import Image from "next/image";

type TeamMemberCardProps = {
  name: string;
  role: string;
  image: string;
  shortLine: string;
};

export function TeamMemberCard({ name, role, image, shortLine }: TeamMemberCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl">
      <div className="relative aspect-[3/4]">
        <Image
          src={image}
          alt={name}
          fill
          loading="lazy"
          className="object-cover grayscale-[22%] saturate-75 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:saturate-100"
        />
        <div className="absolute inset-0 bg-[#0F3D2E]/12 transition-colors duration-500 group-hover:bg-[#0F3D2E]/48" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#A44A2F]">{role}</p>
        <h3 className="mt-2 text-xl font-light tracking-wide text-white">{name}</h3>
        <p className="mt-2 max-h-0 overflow-hidden text-xs leading-relaxed text-white/80 transition-all duration-500 group-hover:max-h-10">
          {shortLine}
        </p>
      </div>
    </article>
  );
}
