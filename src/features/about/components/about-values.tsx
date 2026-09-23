import type { AboutValuesSection } from "@/features/about/types/about-content";
import { AboutProductDnaCard } from "@/features/about/components/about-product-dna-card";
import { SectionTitle } from "@/components/shared/section-title/section-title";
import { SliderGallery } from "@/components/shared/slider-gallery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/utils/cn";

type AboutValuesProps = {
  content: AboutValuesSection;
};

export function AboutValues({ content }: AboutValuesProps) {
  return (
    <SectionTitle title={content.title} align="center">
      <p className="max-mobile:text-[14px] text-[16px] max-w-2xl mx-auto text-center mt-2 text-neutral-700">
        {content.description}
      </p>

      <Carousel
        opts={{
          align: "start",
          containScroll: "trimSnaps",
          dragFree: true,
          watchDrag: false,
          breakpoints: {
            "(max-width: 639px": {
              watchDrag: true,
            },
          },
        }}
        aria-label="Danh sách thẻ hình ảnh"
        className={cn("w-full mt-10")}
      >
        <CarouselContent className="w-full h-full ml-0! max-mobile:gap-5">
          {content.values.map((value) => (
            <CarouselItem
              className="basis-1/3 max-mobile:basis-4/5"
              key={value.title}
            >
              <AboutProductDnaCard key={value.title} value={value} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </SectionTitle>
  );
}
