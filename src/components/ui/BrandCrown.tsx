import Image from "next/image";

interface BrandCrownProps {
  className?: string;
  alt?: string;
}

export default function BrandCrown({
  className = "w-7 h-7",
  alt = "Prime Success Royal Crown",
}: BrandCrownProps) {
  return (
    <div className={`relative inline-block flex-shrink-0 drop-shadow-md ${className}`}>
      <Image
        src="/images/crown-shadow.png"
        alt={alt}
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
