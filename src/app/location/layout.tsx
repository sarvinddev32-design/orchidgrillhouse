import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Locations | Orchid Grill House Kerala",
  description:
    "Find Orchid Grill House branches in Nadapuram, Orkatteri, Mekkunnu, and Edappally with directions, contact numbers, and opening hours.",
  alternates: {
    canonical: "/location",
  },
};

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
