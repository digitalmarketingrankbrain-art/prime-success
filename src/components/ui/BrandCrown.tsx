import Image from "next/image";

interface BrandCrownProps {
  className?: string;
  variant?: "with-shadow" | "shadow" | "logo";
  alt?: string;
}

export default function BrandCrown({
  className = "w-7 h-7",
  variant = "with-shadow",
  alt = "Prime Success Royal Crown",
}: BrandCrownProps) {
  const imgSrc =
    variant === "shadow"
      ? "/images/crown-shadow.png"
      : variant === "logo"
      ? "/images/prime-success-logo.png"
      : "/images/crown-with-shadow.png";

  return (
    <div className={`relative inline-block flex-shrink-0 drop-shadow-md ${className}`}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
