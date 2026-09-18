import Link from "next/link";

import type { ContactPageContent } from "@/features/contact/types/contact-content";

type ContactIntroductionProps = {
  content: ContactPageContent["introduction"];
};

export function ContactIntroduction({ content }: ContactIntroductionProps) {
  return (
    <>
      <p className="uppercase font-bold leading-[1.4] tracking-normal text-neutral-600 text-[16px]
                    max-mobile:text-[14px]">{content.eyebrow}</p>
      <h2 className="type-h2 mt-5">{content.title}</h2>
      <p className="type-prose mt-6 max-w-xl text-base text-neutral-600">
        {content.description}{" "}
        <Link
          href={content.faqHref}
          className="font-semibold text-neutral-950 underline decoration-neutral-400 underline-offset-4 transition-colors hover:text-red-600 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/30"
        >
          {content.faqLabel}
        </Link>
        .
      </p>
    </>
  );
}
