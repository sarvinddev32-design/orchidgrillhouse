import type { Metadata } from "next";
import { HeroSection } from "@/app/sections/HeroSection";
import { AboutUsSection } from "@/app/sections/AboutUsSection";
import { FeaturedProductsSection } from "@/app/sections/FeaturedProductsSection";
import { StorySplitSection } from "@/app/sections/StorySplitSection";
import { MissionVisionSection } from "@/app/sections/MissionVisionSection";
import { GallerySection } from "@/app/sections/GallerySection";
import { OurTeamSection } from "@/app/sections/OurTeamSection";
import { ReviewsSection } from "@/app/sections/ReviewsSection";
import { MomentsCarousel } from "@/app/sections/MomentsCarousel";
import { CTASection } from "@/app/sections/CTASection";
import { FloatingContactButton } from "@/app/components/FloatingContactButton"; 

export const metadata: Metadata = {
  title: "Fresh and Tasty Grilled Dishes in a Friendly and Comfortable Space",
  description:
    "Orchid Grill House brings authentic Lebanese cuisine to Kerala with locations in Nadapuram, Orkatteri, Mekkunnu, and Edappally.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <FeaturedProductsSection />
      <StorySplitSection />
      <MissionVisionSection />
      <GallerySection />
      <OurTeamSection />
      <ReviewsSection />
      <MomentsCarousel />
      <CTASection />
      <FloatingContactButton />
    </main>
  );
}

