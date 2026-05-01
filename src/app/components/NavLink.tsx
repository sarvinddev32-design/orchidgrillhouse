"use client";

import Link from "next/link";
import type { CSSProperties, MouseEventHandler } from "react";

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
  style?: CSSProperties;
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function NavLink({
  href,
  label,
  className,
  style,
  isActive = false,
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className ?? ""} group inline-flex flex-col overflow-hidden`}
      style={style}
    >
      <span className="relative flex flex-col transition-transform duration-[350ms] ease-[cubic-bezier(0.76,0,0.24,1)] md:group-hover:-translate-y-full">
        <span className={isActive ? "text-[#a54933]" : ""}>{label}</span>
        <span className="hidden md:absolute md:translate-y-full md:inline">{label}</span>
      </span>
    </Link>
  );
}
