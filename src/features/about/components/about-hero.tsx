import type { AboutHeroContent } from "@/features/about/types/about-content";
import { SectionTitle } from "@/components/shared/section-title/section-title";

type AboutHeroProps = {
  content: AboutHeroContent;
};

export function AboutHero({ content }: AboutHeroProps) {
  return (
    <SectionTitle ariaLabel="AboutHero" className="pt-0">
      <div
        className="relative w-full
                      overflow-hidden rounded-2xl border border-neutral-200/80 
                      bg-neutral-950 shadow-2xl 
                      h-[793px]
                      max-pc:h-[41.3021vw]
                      max-tablet:h-[clamp(344px,44.9158vw,44.9158vw)]
                      max-mobile:h-[clamp(282.391px,53.4986vw,53.4986vw)]
                      "
        style={{
          backgroundImage: `url(${content.heroImageSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

        <div className="relative h-full inset-0 z-10 flex items-center justify-center text-center text-white">
          <div className="max-w-[58rem]  py-[50px]">
            <p
              className="uppercase font-bold leading-[1.4]
                      max-pc:text-[16px] 
                      max-mobile:text-[14px] 
                      mx-auto mb-[32px] max-w-[36rem] text-white/90 drop-shadow-sm sm:mb-10"
            >
              {content.eyebrow}
            </p>
            <h1
              className="mx-auto max-w-[18ch] text-[60px] font-extrabold leading-[1.08] tracking-normal drop-shadow-sm 
                             max-mobile:text-[30px]"
            >
              {content.title}
            </h1>
          </div>
        </div>
      </div>
    </SectionTitle>
  );
}
