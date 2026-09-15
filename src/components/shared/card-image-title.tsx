import React, { Children, type CSSProperties, type ReactNode } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/utils/cn";

/** Tỉ lệ visual dựng sẵn cho category/collection card. */
export type CardImageTitleAspectRatio =
  | "default"
  | "square"
  | "portrait"
  | "landscape";

export type CardImageTitleProps = {
  /** Tên collection/category hiển thị trên ảnh. Có thể bỏ trống với card chỉ có icon mũi tên. */
  title?: string;
  /** URL hoặc path ảnh card. */
  imageSrc: string;
  /** Alt text mô tả ảnh card. */
  imageAlt: string;
  /** Đường dẫn điều hướng khi `isClicked` là `true`. */
  href: string;
  /** Prefix route, hữu ích khi `href` chỉ là slug con. */
  prefix?: string;
  /** Tỉ lệ khung ảnh định nghĩa sẵn. */
  aspectRatio?: CardImageTitleAspectRatio;
  /** Hiện vùng dành cho icon mũi tên. Icon chỉ xuất hiện khi card có thể click. */
  isArrow?: boolean;
  /** Responsive sizes truyền vào `next/image`. */
  sizes?: string;
  /** Điểm neo hiển thị ảnh, ví dụ `"center top"`. */
  imagePosition?: CSSProperties["objectPosition"];
  /** Class cho wrapper/link bên ngoài card. */
  className?: string;
  /** Class riêng cho text title. */
  titleClassName?: string;
  /** Biến card thành link có hover/focus interaction. Mặc định `false`. */
  isClicked?: boolean;
};

export type CardImageTitleGridProps = {
  /** Các `CardImageTitle` được sắp theo responsive grid. */
  children: ReactNode;
  /** Class để thay đổi số cột hoặc khoảng cách grid. */
  className?: string;
  /** Hiển thị danh sách card bên trong carousel ngang thay vì lưới. Mặc định `false`. */
  isScroll?: boolean;
};

const aspectRatioClasses: Record<CardImageTitleAspectRatio, string> = {
  default: "aspect-[1.05/1]",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[2.2/1]",
};

function getPrefixedHref(href: string, prefix?: string): string {
  if (!prefix) {
    return href;
  }

  return `${prefix.replace(/\/+$/, "")}/${href.replace(/^\/+/, "")}`;
}

export function CardImageTitleGrid({
  children,
  className,
  isScroll = false,
}: CardImageTitleGridProps) {
  switch (isScroll) {
    case true:
      return (
        <div className="flex relative">
          <Carousel
            opts={{
              align: "start",
              containScroll: "trimSnaps",
              dragFree: true,
            }}
            aria-label="Danh sách thẻ hình ảnh"
            className={cn("w-full flex", className)}
          >
            <div className="flex-10">
              <CarouselContent className="-ml-3 sm:-ml-5">
                {Children.map(children, (child) => (
                  <CarouselItem className="basis-[75%] pl-3 sm:basis-1/2 sm:pl-5 lg:basis-1/3 xl:basis-1/5">
                    {child}
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            <div className="flex justify-center absolute top-1/2 -translate-y-1/2 w-full px-4">
              <div className="mr-auto">
                <CarouselPrevious className="static z-20 size-8 shrink-0 translate-x-0 border-0 bg-white text-neutral-950 shadow-lg hover:bg-neutral-100" />
              </div>
              <div className="ml-auto">
                <CarouselNext className="static z-20 size-8 shrink-0 translate-x-0 border-0 bg-white text-neutral-950 shadow-lg hover:bg-neutral-100" />
              </div>
            </div>
          </Carousel>
        </div>
      );
    default:
      return (
        <div
          className={cn(
            "grid grid-cols-6 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5",
            className,
          )}
        >
          {children}
        </div>
      );
  }
}

export function CardImageTitle({
  title,
  imageSrc,
  imageAlt,
  href,
  prefix,
  aspectRatio = "default",
  isArrow = true,
  sizes = "(max-width: 639px) 50vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 20vw",
  imagePosition = "center",
  className,
  titleClassName,
  isClicked = false,
}: CardImageTitleProps) {
  const card = (
    <Card
      className={cn(
        "relative overflow-hidden rounded-xl border-0 bg-neutral-950 p-0 shadow-none",
        aspectRatioClasses[aspectRatio],
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes={sizes}
        style={{ objectPosition: imagePosition }}
        className={cn(
          "object-cover transition-transform duration-500 ease-out",
          isClicked && "group-hover:scale-[1.04]",
        )}
      />

      <div
        aria-hidden="true"
        className="absolute z-10 inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/5 transition-colors duration-300 group-hover:from-black/90"
      />

      {title || isArrow ? (
        <CardContent
          className={cn(
            "gap-2 w-full flex justify-between items-center sm:gap-3 p-0 absolute bottom-4 px-2 z-10",
            title ? "justify-between" : "justify-end",
          )}
        >
          {title ? (
            <div
              className={cn(
                "max-mobile:text-center text-base font-bold m-1 line-clamp-2 leading-snug text-white drop-shadow-sm max-sm:text-lg sm:text-md md:text-md xl:text-base",
                titleClassName,
              )}
            >
              {title}
            </div>
          ) : null}

          {isArrow && isClicked ? (
            <span className="hidden size-4 sm:size-7 shrink-0 translate-x-2 items-center justify-center rounded-full bg-white text-neutral-950 opacity-0 shadow-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:flex">
              <ChevronRight className="size-3 sm:size-3" aria-hidden="true" />
            </span>
          ) : null}
        </CardContent>
      ) : null}
    </Card>
  );

  const containerClassName = cn(
    "mx-auto block w-full rounded-xl",
    isClicked &&
      "group outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4",
    className,
  );
  const resolvedHref = getPrefixedHref(href, prefix);

  if (!isClicked) {
    return <div className={containerClassName}>{card}</div>;
  }

  return (
    <Link href={resolvedHref} className={containerClassName}>
      {card}
    </Link>
  );
}
