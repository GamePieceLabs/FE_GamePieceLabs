import React, { type CSSProperties, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
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
  imageSrc?: string;
  /** Alt text mô tả ảnh card. */
  imageAlt?: string;
  /** Đường dẫn điều hướng khi `isClicked` là `true`. */
  href?: string;
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

//*  basis-[316px] */
//*  max-pc:basis-[clamp(241.6px,16.4583vw,316px)]*/

export function CardImageTitleGrid({
  children,
  className,
}: CardImageTitleGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-6 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
        className,
      )}
    >
      {children}
    </div>
  );
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
        "relative w-full overflow-hidden rounded-xl border-0 bg-neutral-950 p-0 shadow-none",
        "aspect-[300/300]",
      )}
    >
      <Image
        src={String(imageSrc)}
        alt={String(imageAlt)}
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
            `w-full flex justify-between items-center absolute bottom-0 z-10 max-laptop:p-[clamp(15px,1.0417vw,10px)]`,
            title ? "justify-between" : "justify-end",
          )}
        >
          {title ? (
            <div
              className={cn(
                "max-mobile:mx-auto max-tablet:text-[clamp(12px,1.5625vw,16px)] max-mobile:text-[14px] text-[16px] font-bold line-clamp-2 leading-snug text-white drop-shadow-sm",
                titleClassName,
              )}
            >
              {title}
            </div>
          ) : null}

          {isArrow && isClicked ? (
            <span className="max-mobile:hidden flex size-4 sm:size-7 shrink-0 translate-x-2 items-center justify-center rounded-full bg-white text-neutral-950 opacity-0 shadow-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
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
  const resolvedHref = getPrefixedHref(String(href), prefix);

  if (!isClicked) {
    return <div className={containerClassName}>{card}</div>;
  }

  return (
    <Link href={resolvedHref} className={containerClassName}>
      {card}
    </Link>
  );
}
