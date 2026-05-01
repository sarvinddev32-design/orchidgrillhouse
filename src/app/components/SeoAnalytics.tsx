"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function SeoAnalytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link || !window.gtag) return;

      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        window.gtag("event", "click_call_now", { link_url: href });
      }
      if (href.includes("maps.google.com") || href.includes("google.com/maps")) {
        window.gtag("event", "click_get_directions", { link_url: href });
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
