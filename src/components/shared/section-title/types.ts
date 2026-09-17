import type { ReactNode } from "react";

/** Canh heading/CTA trong section. */
export type SectionTitleAlign = "left" | "center" | "right";
export type SectionTitleHeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
/** Hướng xếp heading và content. */
export type SectionTitleOrientation = "vertical" | "horizon";
/** Vị trí text content so với ảnh trong horizontal split. */
export type SectionTitleSplitContentPosition = "left" | "right";

export interface SectionTitleMore {
  /** Text cho link xem thêm. */
  label?: string;
  /** Đường dẫn đích của link xem thêm. */
  href?: string;
}

/** Section heading thông thường, phù hợp cho text content hoặc card/image list. */
export interface SectionTitleMoreProps {
  /** Heading chính của section. */
  title?: string;
  headingLevel?: SectionTitleHeadingLevel;
  ariaLabel?: string;
  /** CTA "xem thêm" tùy chọn. */
  more?: SectionTitleMore;
  /** Canh heading và CTA. */
  align?: SectionTitleAlign;
  /** Hướng đặt heading và nội dung. */
  orientation?: SectionTitleOrientation;
  /** Nội dung section nằm dưới heading. */
  children: ReactNode;
  /** Class cho section wrapper. */
  className?: string;
  /** Class cho wrapper ngoài cùng của `SectionTitle`. */
  wrapperClassName?: string;
  /** Chọn layout content text, image grid hoặc slider. */
  content?: "text" | "imageList" | "slider";
}

/** API public của `SectionTitle`; `content` và `orientation` quyết định biến thể render. */
export type SectionTitleProps = SectionTitleMoreProps;
