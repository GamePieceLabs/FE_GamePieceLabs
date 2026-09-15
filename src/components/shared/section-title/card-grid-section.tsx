import type { ReactElement } from "react";

import { CardImageTitleGrid } from "@/components/shared/card-image-title";
import { cn } from "@/utils/cn";

import { createSectionTitleId, SectionHeading } from "./section-heading";
import type { SectionTitleMoreProps } from "./types";

export function CardGridSection({
  title,
  headingLevel,
  more,
  align,
  orientation,
  children,
  className,
}: SectionTitleMoreProps): ReactElement {
  const titleId = createSectionTitleId(title);

  return (
    <section
      aria-labelledby={titleId}
      className="mx-auto w-full xl:max-w-[1580px]"
    >
      <SectionHeading
        title={title}
        titleId={titleId}
        headingLevel={headingLevel}
        more={more}
        align={align}
        orientation={orientation}
        className="mb-6 sm:mb-10"
      />

      <CardImageTitleGrid>{children}</CardImageTitleGrid>
    </section>
  );
}
