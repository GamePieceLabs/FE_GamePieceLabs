import { Children, type ReactNode } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/utils/cn";

export interface SliderGalleryProps {
  /** Các phần tử được hiển thị thành các slide ngang. */
  children: ReactNode;
  /** Class cho carousel bọc bên ngoài. */
  className?: string;
}

export function SliderGallery({ children, className }: SliderGalleryProps): ReactNode {
  return (
    <Carousel
      opts={{ align: "start", containScroll: "trimSnaps", dragFree: true }}
      aria-label="Danh sách thẻ hình ảnh"
      className={cn("w-full", className)}
    >
      <CarouselContent className="w-full h-full">
        {Children.map(children, (child, index) => (
          <CarouselItem key={index}
            className="
              basis-1/5
              max-laptop:basis-1/4
              max-tablet:basis-1/3
              max-mobile:basis-1/2
            "
          >
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
