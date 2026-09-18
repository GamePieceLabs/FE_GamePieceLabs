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
    <section className="sm:pt-[10px]">
      <div className="relative h-[555.625px] w-full overflow-hidden bg-neutral-950 shadow-2xl 
                      max-pc:h-[clamp(29.5288vw,28.9388vw,28.9388vw)]
                      max-tablet:h-[clamp(33.6206vw,29.5288vw,29.5288vw)]
                      max-mobile:h-[clamp(303.953px,33.6206vw,33.6206vw)]">
        <Image
          src={content.heroImageSrc}
          alt={content.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center px-20 text-left text-white 
                        max-laptop:px-10 
                        max-mobile:justify-center max-mobile:px-6 max-mobile:text-center">
          <div className="max-w-[760px]">
            <h1 className="mt-6 text-[60px] font-extrabold leading-[1.05] tracking-normal 
                           max-laptop:text-[48px]  
                           max-tablet:text-[40px]
                           max-mobile:text-[35px] text-start">
              {content.title}
            </h1>
            <p className="mt-6 max-w-[760px] text-[16px] font-medium leading-[1.6] text-white/90 
                          max-mobile:text-[14px]">
              {content.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
