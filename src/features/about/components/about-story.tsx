import Image from "next/image";
import type { AboutStorySection } from "@/features/about/types/about-content";

type AboutStoryProps = {
  content: AboutStorySection;
};

export function AboutStory({ content }: AboutStoryProps) {
  const storyText = [content.lead, ...content.paragraphs].join(" ");

  return (
    <section className="bg-white px-5 py-10 sm:px-[var(--section-padding-x)] sm:py-[80px]">
      <div className="text-center">
        <Image
          src="/brand/game-piece-labs-mark.png"
          alt=""
          width={96}
          height={96}
          className="mx-auto size-16 object-contain sm:size-20"
        />
        <p className="mx-auto mt-12 max-w-[82ch] text-base font-semibold leading-8 text-neutral-900 sm:text-lg sm:leading-9">
          {storyText}
        </p>
      </div>
    </section>
  );
}
