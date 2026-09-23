import type { AboutValuesSection } from "@/features/about/types/about-content";
import { AboutProductDnaCard } from "@/features/about/components/about-product-dna-card";
import { SectionTitle } from "@/components/shared/section-title/section-title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
            "(max-width: 639px)": {
              watchDrag: true,
            },
          },
        }}
        aria-label="Danh sách thẻ hình ảnh"
        className="mt-10 w-full"
      >
        <CarouselContent className="h-full">
          {content.values.map((value) => (
            <CarouselItem
              className="basis-full sm:basis-1/2 lg:basis-1/3"
              key={value.title}
            >
              <AboutProductDnaCard value={value} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </SectionTitle>
  );
}
