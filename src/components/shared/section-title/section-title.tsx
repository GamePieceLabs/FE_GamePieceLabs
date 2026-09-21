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
  const shouldRemoveSectionPaddingTop =
    "ariaLabel" in props &&
    (props.ariaLabel === "ImageSlider" ||
      props.ariaLabel === "ComparasionImage" ||
      props.ariaLabel === "CompareSessionImage" ||
      props.ariaLabel === "FeaturedProducts" ||
      props.ariaLabel === "Brand" ||
      props.ariaLabel === "ProductDemo" ||
      props.ariaLabel === "BrowseByGame");


  const shouldRemoveSectionHeadingMarginBottom =
    "ariaLabel" in props &&
    (props.ariaLabel === "ImageSlider" || props.ariaLabel === "AboutHero");

  return (
    <div
      aria-labelledby={titleId}
      className={cn(
        "overflow-hidden bg-[var(--storefront-surface)]",
        "px-[max(48px,calc((100vw-1600px)/2))] py-20",
        "max-tablet:px-8 max-tablet:py-14",
        "max-mobile:px-5 max-mobile:py-10",
        shouldRemoveSectionPaddingTop && "!pt-0",
        props.wrapperClassName,
        props.className,
      )}
    >
      <section className="mx-auto w-full xl:max-w-[1600px]">
        {props.ariaLabel !== "ImageSlider" && (
          <SectionHeading
            title={title}
            titleId={titleId}
            more={more}
            headingLevel={headingLevel}
            align={align}
            className={cn(
              "mb-6 sm:mb-10",
              shouldRemoveSectionHeadingMarginBottom && "!mb-0",
            )}
          />
        )}
        {props.children}
      </section>
    </div>
  );
}
