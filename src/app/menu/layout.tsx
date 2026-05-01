import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Menu | Lebanese Shawarma, Grill & More",
  description:
    "Explore Orchid Grill House menu featuring Lebanese shawarma, flame grills, mezze, beverages, and desserts in Kerala.",
  alternates: {
    canonical: "/menu",
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
