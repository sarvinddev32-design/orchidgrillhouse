export type OrchidLocation = {
  name: string;
  slug: string;
  image: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
  embedUrl: string;
  coordinates: { lat: number; lng: number };
  description: string;
};

export const orchidLocations: OrchidLocation[] = [
  {
    name: "Perod Nadapuram",
    slug: "nadapuram",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=80",
    address: "Mukkam Tyres, Opp:, Perode, Nadapuram, Kerala 673504",
    phone: "098476 32600",
    hours: "Daily: 12:00 PM - 12:00 AM",
    mapUrl: "https://maps.google.com/?q=Mukkam+Tyres+Perode+Nadapuram+Kerala+673504",
    embedUrl:
      "https://maps.google.com/maps?q=Mukkam%20Tyres%20Perode%20Nadapuram%20Kerala%20673504&t=&z=13&ie=UTF8&iwloc=&output=embed",
    coordinates: { lat: 11.6927, lng: 75.6603 },
    description:
      "Orchid Grill House offers fresh and tasty grilled dishes in a friendly and comfortable space. It is a great place to enjoy lunch or dinner with your loved ones.",
  },
  {
    name: "Orkatteri",
    slug: "orkatteri",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&q=80",
    address: "Main Road, Orkatteri, Vadakara, Kerala 673501",
    phone: "+919876543210",
    hours: "Daily: 12:00 PM - 11:00 PM",
    mapUrl: "https://maps.google.com/?q=Orkatteri+Vadakara+Kerala",
    embedUrl: "https://maps.google.com/maps?q=Orkatteri%20Vadakara%20Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed",
    coordinates: { lat: 11.6848, lng: 75.7067 },
    description: "A warm, premium family dining stop with signature grills.",
  },
  {
    name: "Mekkunnu",
    slug: "mekkunnu",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1400&q=80",
    address: "Mekkunnu Town Center, Kannur, Kerala 670675",
    phone: "+919745551122",
    hours: "Daily: 11:00 AM - 11:00 PM",
    mapUrl: "https://maps.google.com/?q=Mekkunnu+Kannur+Kerala",
    embedUrl: "https://maps.google.com/maps?q=Mekkunnu%20Kannur%20Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed",
    coordinates: { lat: 11.9202, lng: 75.6889 },
    description: "Bold Lebanese flavors served in a refined local setting.",
  },
  {
    name: "Edappally, Ernakulam",
    slug: "edappally",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80",
    address: "Edappally Toll Junction, Ernakulam, Kerala 682024",
    phone: "+919645551133",
    hours: "Daily: 11:30 AM - 12:00 AM",
    mapUrl: "https://maps.google.com/?q=Edappally+Ernakulam+Kerala",
    embedUrl:
      "https://maps.google.com/maps?q=Edappally%20Ernakulam%20Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed",
    coordinates: { lat: 10.0275, lng: 76.3077 },
    description: "Urban luxury dining crafted for modern city evenings.",
  },
];

export const primaryLocation = orchidLocations[0];
