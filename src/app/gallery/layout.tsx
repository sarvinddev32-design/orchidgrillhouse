import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Orchid Grill House Experience",
  description:
    "Browse the Orchid Grill House gallery and discover our Lebanese food, ambience, guest moments, and signature dining experience.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
