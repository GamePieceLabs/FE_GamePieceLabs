import Image from "next/image";
import Link from "next/link";

import { cn } from "@/utils/cn";

/** Logo có link về home; phù hợp cho header/footer, không dùng làm ảnh brand thuần. */
export interface LogoProps {
  /** Class cho link wrapper. */
  className?: string;
  /** Class cho ảnh logo, ví dụ điều chỉnh kích thước theo breakpoint. */
  imageClassName?: string;
}

export function Logo({ className, imageClassName }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Game Piece Labs - Trang chủ"
      className={cn(
        "inline-flex items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4",
        className,
      )}
    >
      <Image
        src="/brand/game-piece-labs-logo-horizontal.png"
        alt="Game Piece Labs - Phụ kiện boardgame"
        width={2030}
        height={775}
        sizes="(width <= 1024px) 147px, (width <= 1920px) 252px, 273px"
        loading="eager"
        className={cn(
          "block h-[104px] w-auto object-contain bg-transparent",
          "max-pc:h-[96px]",
          "max-tablet:h-[56px]",
          "max-mobile:h-[56px]",
          imageClassName,
        )}
      />
    </Link>
  );
}
