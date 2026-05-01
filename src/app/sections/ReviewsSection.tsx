"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    avatar: "https://i.pravatar.cc/150?img=11",
    name: "Sarah Al Mansoori",
    review:
      "Orchid Grill House is simply unmatched. The Lebanese Shawarma melts in your mouth and the ambiance is pure elegance. Every visit feels special.",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=32",
    name: "James Whitfield",
    review:
      "The Chicken Shawaya was the best I've had in Dubai - smoky, tender, beautifully presented. The service was warm and attentive from start to finish.",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=47",
    name: "Layla Hassan",
    review:
      "A dining experience that truly lives up to its reputation. The flavors are bold yet refined, and the atmosphere makes you want to stay all evening.",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=53",
    name: "Omar Farouq",
    review:
      "Came for a special anniversary dinner and left completely mesmerized. The food, the decor, and the attention to detail - nothing short of perfect.",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=26",
    name: "Priya Menon",
    review:
      "Orchid Grill House has become our go-to for every celebration. The consistency in quality and hospitality is remarkable. Highly recommended.",
  },
];

export function ReviewsSection() {
  return (
    <section className="overflow-hidden bg-[#fffffe] px-12 py-24 md:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col gap-8 md:flex-row">
          <div className="md:w-1/2">
            <p className="mb-3 text-lg font-medium uppercase text-[#a54933]" style={{ fontFamily: '"bricolage-grotesque", "Bricolage Grotesque", sans-serif' }}>Guest Experience</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-wide text-[#1a3a2e] md:text-5xl" style={{ fontFamily: '"bricolage-grotesque", "Bricolage Grotesque", sans-serif' }}>
              <span className="block">Why Guests Keep</span>
              <span className="block">Coming Back.</span>
            </h2>
          </div>
          <div className="flex items-end pb-2 md:w-1/2">
            <p className="max-w-sm text-sm font-medium leading-relaxed text-[#1a3a2e]" style={{ fontFamily: '"bricolage-grotesque", "Bricolage Grotesque", sans-serif' }}>
              Hear from the people who have experienced the warmth, flavor, and craft of Orchid
              Grill House firsthand.
            </p>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{
            clickable: true,
            el: ".swiper-custom-pagination",
            bulletClass: "swiper-custom-bullet",
            bulletActiveClass: "swiper-custom-bullet-active",
          }}
          speed={600}
          grabCursor
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="w-full"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <article
                className="flex min-h-[260px] select-none flex-col justify-between border border-[rgba(26,58,46,0.08)] bg-white p-6"
                style={{ userSelect: "none" }}
              >
                <div>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium tracking-wide text-[#1a3a2e]">{item.name}</p>
                      <p className="text-xs tracking-wider text-[#a54933] opacity-80">Dined at Orchid</p>
                    </div>
                  </div>

                  <p className="mb-2 font-serif text-4xl leading-none text-[#a54933] opacity-30">
                    &quot;
                  </p>
                  <p
                    className="text-sm font-medium leading-relaxed text-[#1a3a2e] opacity-70"
                    style={{
                      fontFamily: '"bricolage-grotesque", "Bricolage Grotesque", sans-serif',
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.review}
                  </p>
                </div>

                <p className="mt-6 flex gap-1 text-[14px] text-[#a54933]">★★★★★</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 flex items-center justify-center">
          <div className="swiper-custom-pagination flex items-center gap-2" />
        </div>
      </div>
      <style jsx global>{`
        .swiper-custom-bullet {
          display: inline-block;
          width: 8px;
          height: 4px;
          background: #1a3a2e;
          opacity: 0.2;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .swiper-custom-bullet-active {
          width: 32px;
          background: #a54933;
          opacity: 1;
        }
        .swiper-custom-pagination {
          position: static !important;
          left: auto !important;
          width: auto !important;
          display: flex;
          justify-content: center;
        }
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
}
