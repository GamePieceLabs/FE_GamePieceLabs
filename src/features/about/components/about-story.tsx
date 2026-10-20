import Image from "next/image";
import type { AboutStorySection } from "@/features/about/types/about-content";
import { SectionTitle } from "@/components/shared/section-title/section-title";

type AboutStoryProps = {
  content: AboutStorySection;
};

export function AboutStory({ content }: AboutStoryProps) {
  const storyText = [content.lead, ...content.paragraphs].join(" ");

  return (
    <SectionTitle>
      <div className="-mt-10 text-center">
        <Image
          src="/brand/game-piece-labs-logo-horizontal.png"
          alt=""
          width={2030}
          height={775}
          sizes="(width <= 640px) 293px, (width <= 1024px) 503px, (width <= 1920px) 545px, 587px"
          className="mx-auto h-[224px] w-auto object-contain
                     max-pc:h-[208px]
                     max-tablet:h-[192px]
                     max-mobile:h-[112px]"
        />
        <p
          className="mx-auto mt-12 max-w-[82ch] leading-[1.6] text-neutral-900
                     max-mobile:leading-[1.7]"
        >
          {storyText}
        </p>
      </div>
    </SectionTitle>
  );
}
