type PrimaryActionButtonsProps = {
  className?: string;
  phone?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryExternal?: boolean;
  theme?: "light" | "dark";
};

export function PrimaryActionButtons({
  className = "",
  phone = "098476 32600",
  primaryLabel = "Call Now",
  secondaryLabel = "Get Directions",
  secondaryHref = "https://maps.google.com/?q=Mukkam+Tyres+Perode+Nadapuram+Kerala+673504",
  secondaryExternal = true,
  theme = "light",
}: PrimaryActionButtonsProps) {
  const dialablePhone = phone.replace(/\s+/g, "");
  const primaryClasses =
    theme === "dark"
      ? "border border-white bg-white text-[#0F3D2E] hover:bg-transparent hover:text-white"
      : "border border-[#A44A2F] bg-[#A44A2F] text-white hover:bg-[#8f3f28]";

  const secondaryClasses =
    theme === "dark"
      ? "border border-white text-white hover:bg-white hover:text-[#0F3D2E]"
      : "border border-[#0F3D2E] text-[#0F3D2E] hover:bg-[#0F3D2E] hover:text-white";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={`tel:${dialablePhone}`}
        className={`inline-flex rounded-none px-8 py-3 text-sm uppercase tracking-[0.2em] transition ${primaryClasses}`}
      >
        {primaryLabel}
      </a>
      <a
        href={secondaryHref}
        target={secondaryExternal ? "_blank" : undefined}
        rel={secondaryExternal ? "noopener noreferrer" : undefined}
        className={`inline-flex rounded-none px-8 py-3 text-sm uppercase tracking-[0.2em] transition ${secondaryClasses}`}
      >
        {secondaryLabel}
      </a>
    </div>
  );
}
