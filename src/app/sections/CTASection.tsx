import Image from "next/image";
import instagramIcon from "@/app/assets/img/instagram.png";
import facebookIcon from "@/app/assets/img/facebook.jpg";
import whatsappIcon from "@/app/assets/img/whatsapp.png";
import { PrimaryActionButtons } from "@/app/components/PrimaryActionButtons";
import { primaryLocation } from "@/data/locations";

const legalLinks = [
  "Privacy Policy",
  "Terms & Conditions",
] as const;

export function CTASection() {
  const dialablePhone = primaryLocation.phone.replace(/\s+/g, "");

  return (
    <footer
      id="contact"
      aria-label="Footer section"
      className="bg-[#09392d] px-5 pb-[calc(6.5rem+env(safe-area-inset-bottom))] pt-10 text-[#fff7ef] md:pb-8 lg:px-12 lg:pt-12"
      style={{ fontFamily: '"bricolage-grotesque", "Bricolage Grotesque", sans-serif' }}
    >
      <div className="mx-auto max-w-[1440px]">
        <h2 className="tk-sheila sm:flex hidden justify-center text-center text-[clamp(2.1rem,4vw,4.4rem)] leading-[0.9] tracking-[-0.02em]">
          Opening Hours
        </h2>

        <div className="mt-8 grid gap-10 text-left md:grid-cols-3 md:gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#e3c8b7]">
              Address
            </p>
            <p className="mt-3 text-[clamp(1.1rem,1.7vw,1.65rem)] font-medium leading-[1.35] tracking-[-0.01em]">
              {primaryLocation.address.split(",").slice(0, 2).join(",")},
              <br />
              {primaryLocation.address.split(",").slice(2).join(",").trim()}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#e3c8b7]">
              Hours
            </p>
            <p className="mt-3 text-[clamp(1.1rem,1.7vw,1.65rem)] font-medium leading-[1.35] tracking-[-0.01em]">
              {primaryLocation.hours}
              <br />
              Holiday hours may vary
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#e3c8b7]">
              Contact Us
            </p>
            <p className="mt-3 text-[clamp(1.1rem,1.7vw,1.65rem)] font-medium leading-[1.35] tracking-[-0.01em]">
              info@orchidgrillhouse.com
              <br />
              {primaryLocation.phone}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 border-t border-white/15 pt-6 md:grid-cols-3 md:items-end">
          <div className="space-y-2">
            <a
              href="/menu"
              className="block text-sm text-[#dbc5b8] underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              View Our Menu
            </a>
            <a
              href="/location"
              className="block text-sm text-[#dbc5b8] underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Find Your Nearest Location
            </a>
            <a
              href="/gallery"
              className="block text-sm text-[#dbc5b8] underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Explore Gallery
            </a>
            <a
              href="/about"
              className="block text-sm text-[#dbc5b8] underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              About Orchid
            </a>
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-sm text-[#dbc5b8] underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 text-lg">
            <a
              href="https://www.facebook.com/p/Orchid-Grill-House-61575733124094/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-opacity hover:opacity-80"
            >
              <Image src={facebookIcon} alt="Facebook" className="h-5 w-5 object-contain" />
            </a>
            <a
              href="https://www.instagram.com/orchid_grillhouse/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-opacity hover:opacity-80"
            >
              <Image src={instagramIcon} alt="Instagram" className="h-5 w-5 object-contain" />
            </a>
            <a href="#" aria-label="WhatsApp" className="transition-opacity hover:opacity-80">
              <Image src={whatsappIcon} alt="WhatsApp" className="h-5 w-5 object-contain" />
            </a>
          </div>

          <div className="text-sm text-[#ccb4a6] md:text-right">
            <p>© 2026 Orchid Grill House</p>
            <p className="mt-1">Crafted for flavor. Served with heart.</p>
          </div>
        </div>

        <PrimaryActionButtons
          className="mt-8 justify-center"
          theme="dark"
          phone={primaryLocation.phone}
          secondaryHref={primaryLocation.mapUrl}
        />
      </div>

      <div className="fixed inset-x-0 bottom-0 z-[70] grid grid-cols-2 border-t border-white/15 bg-[#0F3D2E] p-3 md:hidden">
        <a
          href={`tel:${dialablePhone}`}
          className="mx-1 inline-flex items-center justify-center rounded-none border border-[#A44A2F] bg-[#A44A2F] px-4 py-3 text-xs uppercase tracking-[0.2em] text-white"
        >
          Call Now
        </a>
        <a
          href={primaryLocation.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1 inline-flex items-center justify-center rounded-none border border-white px-4 py-3 text-xs uppercase tracking-[0.2em] text-white"
        >
          Directions
        </a>
      </div>
    </footer>
  );
}
