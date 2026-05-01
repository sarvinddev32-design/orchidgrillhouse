import type { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
  return <div className={`mx-auto w-full max-w-[1200px] px-6 md:px-12 ${className}`}>{children}</div>;
}
