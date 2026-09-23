import Image from "next/image";
import type { AboutCoreValue } from "@/features/about/types/about-content";

type AboutProductDnaCardProps = {
  value: AboutCoreValue;
};

export function AboutProductDnaCard({ value }: AboutProductDnaCardProps) {
  return (
    <article className="w-full text-center max-mobile:shrink-0">
      <div className="relative aspect-400/461 overflow-hidden rounded-lg bg-neutral-100">
        <Image
          src={value.imageSrc}
          alt={value.title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="mt-5 font-bold section-sub-text">{value.title}</h3>
      <p className="mx-auto mt-2 text-[clamp(14px,1.5vw,16px)] font-medium leading-[1.6] text-neutral-800">
        {value.description}
      </p>
    </article>
  );
}
