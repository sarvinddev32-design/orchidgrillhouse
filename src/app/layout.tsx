import type { Metadata } from "next";
import Script from "next/script";
import { SmoothScroll } from "@/app/components/SmoothScroll";
import { SeoSchema } from "@/app/components/SeoSchema";
import { SeoAnalytics } from "@/app/components/SeoAnalytics";
import logoIcon from "@/app/assets/img/logo.png";
import "./globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://orchidgrillhouse.com"),
  icons: {
    icon: [{ url: logoIcon.src }],
    shortcut: [{ url: logoIcon.src }],
    apple: [{ url: logoIcon.src }],
  },
  title: {
    default: "Fresh & Tasty Grilled Dishes in a Friendly Space",
    template: "%s | Orchid Grill House",
  },
  description:
    "Experience authentic Lebanese cuisine at Orchid Grill House. Visit our locations in Nadapuram, Orkatteri, Mekkunnu, and Edappally.",
  keywords: [
    "Lebanese restaurant Kerala",
    "shawarma Kerala",
    "grill restaurant Nadapuram",
    "restaurant Edappally",
    "Nadapuram restaurant",
    "Edappally dining",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Orchid Grill House",
    description: "Authentic Lebanese dining experience in Kerala",
    url: "https://orchidgrillhouse.com",
    siteName: "Orchid Grill House",
    images: [
      {
        url: "/assets/img/hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ciw0wkm.css" />
        <SeoSchema />
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-base" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaId}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className="min-h-screen bg-background text-primary antialiased">
        <SeoAnalytics />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
