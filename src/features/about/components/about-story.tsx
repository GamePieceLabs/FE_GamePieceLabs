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
      <div className="text-center">
        <Image
          src="/brand/game-piece-labs-mark.png"
          alt=""
          width={96}
          height={96}
          className="mx-auto size-16 object-contain sm:size-20"
        />
        <p className="mx-auto mt-12 max-w-[82ch] text-[24px] leading-[1.6] text-neutral-900 max-mobile:text-[14px] max-mobile:leading-[1.7]">
          {storyText}
        </p>
      </div>
    </SectionTitle>
  );
}
