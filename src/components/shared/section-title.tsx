import type { ReactElement } from "react";

import { CardGridSection } from "@/components/shared/section-title/card-grid-section";
import { SplitContentSection } from "@/components/shared/section-title/split-content";
import { TextContentSection } from "@/components/shared/section-title/text-content-section";
import { cn } from "@/utils/cn";

import type { SectionTitleProps } from "./section-title/types";
import styles from "./css/section-title.module.css";
import Wrapper from "./wrapper";

export { SectionTitleGroupProps } from "./section-title/section-title-group";
export type {
  SectionTitleAlign,
  SectionTitleHeadingLevel,
  SectionTitleHorizonSplitProps,
  SectionTitleMore,
  SectionTitleMoreProps,
  SectionTitleOrientation,
  SectionTitleProps,
  SectionTitleSplitContentPosition,
  SectionTitleSplitProps,
  SectionTitleVerticalSplitProps,
} from "./section-title/types";

export function SectionTitle(props: SectionTitleProps): ReactElement {
  const getComponents = (props: SectionTitleProps) => {
    switch (props.content) {
      case "split":
        return <SplitContentSection {...props} />;
      case "text":
        return <TextContentSection {...props} />;
      default:
        return <CardGridSection {...props} />;
    }
  };
  return (
    <div
      className={cn(
        "ariaLabel" in props && props.ariaLabel === "ImageSlider" && "!pt-0",
        "px-[max(48px,calc((100vw-1580px)/2))] py-20",
        "max-tablet:px-8 max-tablet:py-14",
        "max-mobile:px-5 max-mobile:py-10",
      )}
    >
      {getComponents(props)}
    </div>
  );
}
