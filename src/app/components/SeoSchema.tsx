import { orchidLocations, primaryLocation } from "@/data/locations";

const siteUrl = "https://orchidgrillhouse.com";

export function SeoSchema() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteUrl}/#restaurant`,
    name: "Orchid Grill House",
    image: `${siteUrl}/assets/img/hero.jpg`,
    url: siteUrl,
    telephone: primaryLocation.phone,
    servesCuisine: ["Lebanese", "Grill", "Middle Eastern"],
    priceRange: "₹200-₹400",
    address: {
      "@type": "PostalAddress",
      streetAddress: primaryLocation.address,
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/orchid_grillhouse/",
      "https://www.facebook.com/p/Orchid-Grill-House-61575733124094/",
    ],
  };

  const localBusinessSchemas = orchidLocations.map((location) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/location#${location.slug}`,
    name: `Orchid Grill House - ${location.name}`,
    parentOrganization: {
      "@type": "Organization",
      name: "Orchid Grill House",
    },
    image: location.image,
    telephone: location.phone,
    hasMap: location.mapUrl,
    url: `${siteUrl}/location`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "12:00",
        closes: "00:00",
      },
    ],
  }));

  const payload = [restaurantSchema, ...localBusinessSchemas];

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }} />
  );
}
