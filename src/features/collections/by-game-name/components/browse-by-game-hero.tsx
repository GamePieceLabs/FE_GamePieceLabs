import Image from "next/image";

import type { BrowseByGameContent } from "@/features/collections/by-game-name/data/browse-by-game";
import { SectionTitle } from "@/components/shared/section-title/section-title";

type BrowseByGameHeroProps = {
  content: Pick<
    BrowseByGameContent,
    "heroImageSrc" | "heroImageAlt" | "eyebrow" | "title" | "description"
  >;
};

export function BrowseByGameHero({ content }: BrowseByGameHeroProps) {
  return (
    <section>
      <div className="relative w-full overflow-hidden bg-neutral-950
                      max-tablet:h-min-[270.375px]
                      max-mobile:h-max
                      max-mobile:!aspect-auto" 
                      style={{
                        aspectRatio: `${1800} / ${525}`,
                      }}
                    >
        <Image
          src={content.heroImageSrc}
          alt={content.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center text-left text-white 
                        px-[max(48px,calc((100vw-1580px)/2))] 
                        max-tablet:px-8 
                        max-mobile:justify-center max-mobile:px-5 max-mobile:py-5 max-mobile:text-center">
          <div className="max-w-[760px]">
            <h1 className="mt-6 text-[60px] font-extrabold leading-[1.05] tracking-normal 
                           max-tablet:text-[48px]  
                           max-mobile:text-[40px]">
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
