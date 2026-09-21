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

      <SectionTitle>
        <section className="grid gap-10 min-[1400px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] min-[1400px]:gap-20">
          <div className="max-w-2xl">
            <ContactIntroduction content={content.introduction} />
            <ContactDetails content={content.details} />
          </div>
          <ContactForm content={content.form} />
        </section>
      </SectionTitle>
    </main>
  );
}
