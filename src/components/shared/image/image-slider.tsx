"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/utils/cn";
import styles from "./css/image-slider.module.css";

export type ImageSliderSlide = {
  /** ID ổn định dùng làm React key. */
  id: string | number;
  /** Heading hiển thị trên slide. */
  title: string;
  /** Dòng mô tả tùy chọn dưới heading. */
  subtitle?: string;
  /** URL/path ảnh nền slide. */
  imageSrc: string;
  /** Alt text mô tả ảnh. */
  imageAlt: string;
  /** Nhãn CTA dẫn tới `ctaHref`. */
  ctaLabel: string;
  /** Đích điều hướng của CTA. */
  ctaHref: string;
};

/** Carousel hero/image campaign có CTA cho từng slide. */
export type ImageSliderProps = {
  /** Danh sách slide, ít nhất một phần tử để hiển thị nội dung. */
  slides: readonly ImageSliderSlide[];
  /** Tự chuyển slide. Mặc định `true`. */
  autoplay?: boolean;
  /** Thời gian giữa các lần tự chuyển, tính bằng ms. */
  autoplayInterval?: number;
  /** Nhãn accessibility cho carousel. */
  ariaLabel?: string;
  /** Class cho carousel wrapper. */
  className?: string;
};

const liquidGlassNavigationButton =
  "static inset-auto m-0 size-10 overflow-hidden border border-white/45 bg-white/15 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(255,255,255,0.15),0_8px_24px_rgba(15,23,42,0.3)] backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 before:pointer-events-none before:absolute before:inset-px before:rounded-full before:bg-gradient-to-br before:from-white/50 before:via-white/10 before:to-transparent before:opacity-80 hover:scale-105 hover:border-white/70 hover:bg-white/25 hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-1px_0_rgba(255,255,255,0.2),0_10px_28px_rgba(15,23,42,0.38)] active:scale-95 focus-visible:ring-white/80 [&_svg]:relative [&_svg]:z-10 sm:size-12";

export function ImageSlider({
  slides,
  autoplay = false,
  autoplayInterval = 10000,
  ariaLabel = "Featured collections",
  className,
}: ImageSliderProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  useEffect(() => {
    if (!api || !autoplay || slides.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      api.scrollNext();
    }, autoplayInterval);

    return () => window.clearInterval(intervalId);
  }, [api, autoplay, autoplayInterval, slides.length]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const syncSelectedSlide = () => {
      setSelectedSlideIndex(api.selectedScrollSnap());
    };

    syncSelectedSlide();
    api.on("select", syncSelectedSlide);
    api.on("reInit", syncSelectedSlide);

    return () => {
      api.off("select", syncSelectedSlide);
      api.off("reInit", syncSelectedSlide);
    };
  }, [api]);

  if (slides.length === 0) {
    return null;
  }

  const hasMultipleSlides = slides.length > 1;

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: hasMultipleSlides }}
      aria-label={ariaLabel}
      className={cn(
        "mx-auto overflow-hidden rounded-xl shadow-[0_18px_60px_rgba(15,23,42,0.16)]",
        className,
      )}
    >
      <CarouselContent className="ml-0">
        {slides.map((slide, index) => (
          <CarouselItem key={slide.id} className="pl-0">
            <div
              className="relative 
                         w-[1580px] h-[677px] 
                         max-pc:w-full max-pc:h-[35.2604vw]
                         max-tablet:h-[39vw]
                        "
            >
              <Image
                src={slide.imageSrc}
                alt={slide.imageAlt}
                preload={index === 0}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent"
              />
              <div
                className="absolute z-10 flex flex-col items-start justify-center text-white 
                           w-[700px] ml-[100px] gap-[20px] bottom-[160px] 
                           max-pc:w[36.4583vw] max-pc:gap-[1.0417vw] max-pc:bottom-[8.3333vw] 
                           max-tablet:bottom-[5vw] max-tablet:ml-[4.8828vw] max-tablet:w-[41vw]
                          "
              >
                <h2
                  key={`title-${slide.id}-${selectedSlideIndex === index ? selectedSlideIndex : "idle"}`}
                  className={cn(
                    "font-heading font-bold ",
                    "text-[60px] !leading-[80px]",
                    "max-pc:text-[3.1250vw]",
                    "max-tablet:text-[3.4180vw]",
                    selectedSlideIndex === index && styles.revealTitle,
                  )}
                >
                  {slide.title}
                </h2>
                <Link
                  key={`cta-${slide.id}-${selectedSlideIndex === index ? selectedSlideIndex : "idle"}`}
                  href={slide.ctaHref}
                  className={cn(
                    "inline-flex items-center rounded-full bg-white font-bold text-neutral-950 shadow-md",
                    "leading-[1.35] transition-all hover:bg-neutral-100 hover:shadow-lg active:scale-95",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50",
                    "h-max px-[60px] py-[20px] text-[16px]",
                    "max-pc:px-[3.1250vw] max-pc:py-[1.0417vw] max-pc:text-[0.8333vw]",
                    "max-laptop:text-[1.1111vw]",
                    "max-tablet:px-[3.9063vw] max-tablet:py-[0.9766vw] max-tablet:text-[1.1719vw]",
                    selectedSlideIndex === index && styles.revealCta,
                  )}
                >
                  {slide.ctaLabel}
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute inset-x-0 bottom-3 sm:bottom-4 z-20 flex justify-center gap-1.5 sm:gap-2">
        <div className="absolute right-4 bottom-0 hidden items-center gap-2 sm:flex">
          <CarouselPrevious className={liquidGlassNavigationButton} />
          <CarouselNext className={liquidGlassNavigationButton} />
        </div>
      </div>
    </Carousel>
  );
}
