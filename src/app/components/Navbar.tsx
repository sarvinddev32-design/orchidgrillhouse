import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { gsap } from "gsap";
import type { Dispatch, RefObject, SetStateAction } from "react";
import NavLink from "@/app/components/NavLink";
import orchidGrillHouseLogo from "@/app/assets/img/orchid logo.png";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  navItems: NavItem[];
  isScrolled: boolean;
  activeNavHref: string;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  setActiveNavHref: Dispatch<SetStateAction<string>>;
  mobileMenuRef: RefObject<HTMLUListElement>;
  mobileMenuOverlayRef: RefObject<HTMLButtonElement>;
  menuTimelineRef: RefObject<gsap.core.Timeline>;
};

export function Navbar({
  navItems,
  isScrolled,
  activeNavHref,
  setIsMobileMenuOpen,
  setActiveNavHref,
  mobileMenuRef,
  mobileMenuOverlayRef,
  menuTimelineRef,
}: NavbarProps) {
  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 flex h-[80px] items-center justify-between w-full bg-[#F5F1EA] md:h-[80px] lg:pl-[20px] lg:pr-7 ${
        isScrolled ? "border-b border-[#ccc]" : ""
      }`}
    >
      <div className="logo">
        <Link
          href="/"
          aria-label="Orchid Grill House Home"
          onClick={() => {
            setActiveNavHref("/");
            setIsMobileMenuOpen(false);
          }}
        >
          <Image
            src={orchidGrillHouseLogo}
            alt="Orchid Grill House"
            priority
            className="mx-auto w-[190px] max-w-full select-none px-3 py-5 sm:w-[230px] md:w-[200px] md:px-5"
          />
        </Link>
      </div>
      <div className="menu">
        <button
          ref={mobileMenuOverlayRef}
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          className="invisible fixed inset-0 z-40 bg-black/40 md:hidden"
        />
        <ul
          ref={mobileMenuRef}
          className="fixed bottom-0 left-0 right-0 top-0 z-50 flex w-full -translate-x-full flex-col flex-wrap items-start gap-4 bg-white p-10 space-y-5 will-change-transform md:relative md:inset-auto md:w-auto md:max-w-none md:translate-x-0 md:flex md:flex-row md:items-center md:space-y-0 md:bg-[#F5F1EA] md:p-0 sm:gap-7"
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border bg-[#eee] p-2 text-base font-medium text-[#111] transition-colors hover:text-[#a54933] md:hidden"
          >
            <X className="h-6 w-6" />
          </button>
          {navItems.map((item) => (
            <li key={item.label} className="mobile-nav-item w-full md:w-auto">
              <NavLink
                href={item.href}
                label={item.label}
                onClick={() => {
                  setActiveNavHref(item.href);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-base font-regular transition-colors hover:text-[#a54933] md:w-auto md:border-y-0 md:py-0 ${
                  activeNavHref !== item.href ? "text-[#09392d]" : ""
                }`}
                style={{ fontFamily: '"bricolage-grotesque", "Bricolage Grotesque", sans-serif' }}
                isActive={activeNavHref === item.href}
              />
            </li>
          ))}
        </ul>
        <div className="mobile-menu pr-4 md:hidden">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => {
              setIsMobileMenuOpen((prev) => {
                const next = !prev;
                if (!next && menuTimelineRef.current) {
                  menuTimelineRef.current.timeScale(1).reverse();
                }
                return next;
              });
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#09392d] p-3 text-base font-medium text-white transition-colors hover:text-[#a54933]"
          >
            <div className="flex h-6 w-6 flex-col items-center justify-center space-y-2">
              <div className="line1 h-0.5 w-full bg-white"></div>
              <div className="line2 h-0.5 w-full bg-white"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
