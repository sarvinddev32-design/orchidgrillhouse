import Image from "next/image";

type GalleryItemProps = {
  src: string;
  title: string;
  category: string;
};

export function GalleryItem({ src, title, category }: GalleryItemProps) {
  return (
    <article className="group relative mb-6 overflow-hidden rounded-xl">
      <Image
        src={src}
        alt={title}
        width={900}
        height={1200}
        className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/35" />
      <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#A44A2F]">{category}</p>
        <h3 className="mt-2 text-lg font-light tracking-wide text-white">{title}</h3>
      </div>
    </article>
  );
}
