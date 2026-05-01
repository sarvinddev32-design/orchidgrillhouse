"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function GallerySection() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1200&q=80",
    "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=1200&q=80",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&q=80",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80",
  ];

  return (
    <section className="w-full pt-10">

      <div className="w-full overflow-hidden px-12 md:px-20">
        <div className="-mx-12 md:-mx-20">
          <Swiper
            modules={[FreeMode, Navigation, Pagination]}
            freeMode={{
              enabled: true,
              momentum: true,
              momentumRatio: 0.8,
              momentumVelocityRatio: 0.6,
              sticky: false,
            }}
            grabCursor
            centeredSlides={false}
            slidesPerView="auto"
            spaceBetween={16}
            loop={false}
            speed={600}
            navigation={{
              prevEl: ".gallery-btn-prev",
              nextEl: ".gallery-btn-next",
            }}
            className="gallery-swiper !overflow-visible w-full"
          >
            {galleryImages.map((src, i) => (
              <SwiperSlide
                key={i}
                style={{
                  width: "60vw",
                  maxWidth: "780px",
                  minWidth: "280px",
                }}
                className="!w-[88vw] sm:!w-[70vw] lg:!w-[60vw]"
              >
                <div className="relative h-[60vh] overflow-hidden md:h-[75vh]">
                  <img
                    src={src}
                    alt={`Moment ${i + 1}`}
                    className="h-full w-full object-cover object-center"
                    draggable={false}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between px-12 md:px-20">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous gallery slide"
            className="gallery-btn-prev flex h-10 w-10 cursor-pointer items-center justify-center border border-white/30 text-white transition-all duration-300 hover:border-[#a54933] hover:bg-[#a54933]"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next gallery slide"
            className="gallery-btn-next flex h-10 w-10 cursor-pointer items-center justify-center border border-white/30 text-white transition-all duration-300 hover:border-[#a54933] hover:bg-[#a54933]"
          >
            →
          </button>
        </div>
        <div className="gallery-pagination flex items-center gap-2" />
      </div>

      <style jsx global>{`
        .gallery-swiper .swiper-slide img {
          transition: filter 0.4s ease, transform 0.4s ease;
          filter: brightness(0.85);
        }
        .gallery-swiper .swiper-slide:hover img {
          filter: brightness(1);
          transform: scale(1.02);
        }
        .gallery-bullet {
          display: inline-block;
          width: 8px;
          height: 4px;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .gallery-bullet-active {
          width: 28px;
          background: #a54933;
          opacity: 1;
        }
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
}
