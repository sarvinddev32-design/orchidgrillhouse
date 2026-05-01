import type { MetadataRoute } from "next";
import { orchidLocations } from "@/data/locations";

const baseUrl = "https://yourdomain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/menu`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/gallery`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/location`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/signature`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const locationAnchors: MetadataRoute.Sitemap = orchidLocations.map((location) => ({
    url: `${baseUrl}/location#${location.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...locationAnchors];
}
