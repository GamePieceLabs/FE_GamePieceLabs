import type { ReactElement } from "react";

import { cn } from "@/utils/cn";

import { createSectionTitleId, SectionHeading } from "./section-heading";
import type { SectionTitleProps } from "./types";

export { createSectionTitleId, SectionHeading } from "./section-heading";
export type {
  SectionTitleAlign,
  SectionTitleHeadingLevel,
  SectionTitleMore,
  SectionTitleMoreProps,
  SectionTitleOrientation,
  SectionTitleProps,
  SectionTitleSplitContentPosition,
} from "./types";

export function SectionTitle(props: SectionTitleProps): ReactElement {
  const title = "title" in props ? props.title : undefined;
  const titleId = title ? createSectionTitleId(title) : undefined;
  const more = props.more;
  const headingLevel = props.headingLevel;
  const align = props.align;
  const shouldRemovePaddingTop =
    "ariaLabel" in props &&
    (props.ariaLabel === "ImageSlider" ||
      props.ariaLabel === "ComparasionImage" ||
      props.ariaLabel === "CompareSessionImage" ||
      props.ariaLabel === "FeaturedProducts" ||
      props.ariaLabel === "Brand");

  return (
    <div
      aria-labelledby={titleId}
      className={cn(
        "overflow-hidden",
        "px-[max(48px,calc((100vw-1580px)/2))] py-20",
        "max-tablet:px-8 max-tablet:py-14",
        "max-mobile:px-5 max-mobile:py-10",
        shouldRemovePaddingTop && "!pt-0",
        props.wrapperClassName,
        props.className,
      )}
    >
      <section className="mx-auto w-full xl:max-w-[1580px]">
        {props.ariaLabel !== "ImageSlider" && (
          <SectionHeading
            title={title}
            titleId={titleId}
            more={more}
            headingLevel={headingLevel}
            align={align}
            className="mb-6 sm:mb-10"
          />
        )}
        {props.children}
      </section>
    </div>
  );
}
