import { SectionTitle } from "@/components/shared/section-title/section-title";
import { ContactDetails } from "@/features/contact/components/contact-details";
import { ContactForm } from "@/features/contact/components/contact-form";
import { ContactHero } from "@/features/contact/components/contact-hero";
import { ContactIntroduction } from "@/features/contact/components/contact-introduction";
import type { ContactPageContent } from "@/features/contact/types/contact-content";

type ContactPageProps = {
  content: ContactPageContent;
};

export function ContactPage({ content }: ContactPageProps) {
  return (
    <main className="bg-white text-neutral-950">
      <ContactHero content={content.hero} />

      <SectionTitle title="Câu hỏi của bạn là ưu tiên của chúng tôi" headingLevel="h6">
        <div className="max-w-2xl">
          <ContactIntroduction content={content.introduction} />
        </div>
        {/* <ContactForm content={content.form} /> */}
        <div className="mt-10">
          <ContactDetails content={content.details} />
        </div>
      </SectionTitle>
    </main>
  );
}
