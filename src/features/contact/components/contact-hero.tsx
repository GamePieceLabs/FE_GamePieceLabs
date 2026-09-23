import Image from "next/image";

import type { ContactPageContent } from "@/features/contact/types/contact-content";

type ContactHeroProps = {
  content: ContactPageContent["hero"];
};

export function ContactHero({ content }: ContactHeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden text-center h-[440px] content-center 
                      px-[max(48px,calc((100vw-1600px)/2))]
                      [@media(min-width:676px)_and_(max-width:1400px)]:h-[400px]
                      max-mobile:h-[375px]"
      aria-labelledby="contact-page-title"
    >
      <Image
        src={content.imageSrc}
        alt={content.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="relative">
        <h1
          id="contact-page-title"
          className="section-title-text text-white drop-shadow-sm font-bold"
        >
          {content.title}
        </h1>
      </div>
    </section>
  );
}
