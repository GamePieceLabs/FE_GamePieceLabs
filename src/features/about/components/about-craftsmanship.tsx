import type { AboutCraftsmanshipSection } from "@/features/about/types/about-content";
import { VideoFrame } from "@/components/shared/video-frame";
import { SectionTitle } from "@/components/shared/section-title/section-title";

type AboutCraftsmanshipProps = {
  content: AboutCraftsmanshipSection;
};

export function AboutCraftsmanship({ content }: AboutCraftsmanshipProps) {
  return (
    <>
      <SectionTitle>
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] overflow-hidden rounded-lg bg-white max-tablet:grid-cols-1 max-mobile:grid-cols-1">
          <VideoFrame
            type={content.showcaseVideo.type}
            src={content.showcaseVideo.src}
            title={content.showcaseVideo.title}
            className="w-full h-full rounded-bl-lg rounded-tl-lg max-tablet:rounded-bl-none max-tablet:rounded-tr-lg"
          />

          <div className="flex flex-col items-center justify-center mobile:p-15 text-center max-mobile:px-5">
            <h2 className="mt-2 w-4/5 leading-tight font-bold text-[48px] max-pc:text-[clamp(40px,1.6667vw,48px)] max-laptop:text-[clamp(20px,4.63vw,40px)] max-tablet:text-[clamp(32x,4.81vw,40px)] max-mobile:text-[clamp(18px,4.79vw,18px)]">
              {content.title}
            </h2>
            {/* Thẻ p đã được chỉnh sửa */}
            <p className="mt-2 w-full">{content.description}</p>
          </div>
        </div>
      </SectionTitle>
    </>
  );
}
