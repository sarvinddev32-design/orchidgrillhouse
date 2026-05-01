import Image from "next/image";
import { Phone } from "lucide-react";
import whatsappIcon from "@/app/assets/img/whatsapp.png";

export function FloatingContactButton() {
  return (
    <>
      <a
        href="https://wa.me/919847632600"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-20 right-6 z-[60] hidden h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-colors sm:inline-flex"
      >
        <Image src={whatsappIcon} alt="WhatsApp" className="w-full h-full object-contain" />
      </a>

      <a
        href="#contact"
        aria-label="Contact"
        className="fixed bottom-6 right-6 z-[60] hidden sm:inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-colors"
      >
        <Phone className="h-5 w-5 text-white" />
      </a>
    </>
  );
}
