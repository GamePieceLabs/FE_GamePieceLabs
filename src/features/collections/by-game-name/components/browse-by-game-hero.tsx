import Image from "next/image";

import type { BrowseByGameContent } from "@/features/collections/by-game-name/data/browse-by-game";

type BrowseByGameHeroProps = {
  content: Pick<
    BrowseByGameContent,
    "heroImageSrc" | "heroImageAlt" | "eyebrow" | "title" | "description"
  >;
};

export function BrowseByGameHero({ content }: BrowseByGameHeroProps) {
  return (
    <section className="px-5 py-10 sm:px-[var(--section-padding-x)] sm:py-[80px] sm:pt-[10px]">
      <div className="relative h-[475px] w-full overflow-hidden rounded-2xl bg-neutral-950 shadow-2xl 
                      max-pc:h-[420px]
                      max-mobile:h-[282px]">
        <Image
          src={content.heroImageSrc}
          alt={content.heroImageAlt}
          fill
          priority
          sizes="(max-width: 640px) calc(100vw - 2.5rem), calc(100vw - (var(--section-padding-x) * 2))"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center px-20 text-left text-white 
                        max-laptop:px-10 
                        max-mobile:justify-center max-mobile:px-6 max-mobile:text-center">
          <div className="max-w-[760px]">
            <p className="font-bold uppercase leading-[1.4] tracking-[0.14em] text-white/90 max-mobile:text-[12px]">
              {content.eyebrow}
            </p>
            <h1 className="mt-6 text-[64px] font-extrabold leading-[1.05] tracking-normal max-mobile:text-[40px]">
              {content.title}
            </h1>
            <p className="mt-6 max-w-[760px] text-[20px] font-medium leading-[1.6] text-white/90 max-mobile:text-[14px]">
              {content.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
