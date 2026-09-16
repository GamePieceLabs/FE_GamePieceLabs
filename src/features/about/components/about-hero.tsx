import Image from "next/image";
import type { AboutHeroContent } from "@/features/about/types/about-content";

type AboutHeroProps = {
  content: AboutHeroContent;
};

export function AboutHero({ content }: AboutHeroProps) {
  return (
    <section className="bg-white px-5 py-10 sm:px-[var(--section-padding-x)] sm:py-[80px] sm:pb-[80px] sm:pt-[10px]">

      <div className="relative h-[793px]
                      overflow-hidden rounded-2xl border border-neutral-200/80 
                      bg-neutral-950 shadow-2xl 
                      ">         
          <Image
            src={content.heroImageSrc}
            alt={content.heroImageAlt}
            fill
            priority
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white">
            <div className="max-w-[58rem]">
              <p className="type-eyebrow mx-auto mb-8 max-w-[36rem] text-white/90 drop-shadow-sm sm:mb-10">
                {content.eyebrow}
              </p>
              <h1 className="mx-auto max-w-[18ch] text-balance text-5xl font-extrabold leading-[1.08] tracking-normal drop-shadow-sm 
                            sm:text-6xl 
                            lg:max-w-[21ch] lg:text-[4.5rem]">
                {content.title}
              </h1>
            </div>
          </div>
      </div>
      
      {/*                       [@media(min-width:1441px)_and_(max-width:1919px)]:h-[clamp(733px,41.3021vw,793px)]
                      [@media(max-width:1440px)]:h-[clamp(282px,47.4306vw,683px)] */}
                            
    </section>
  );
}
