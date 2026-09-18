import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ContactPageContent } from "@/features/contact/types/contact-content";

type ContactFormProps = {
  content: ContactPageContent["form"];
};

export function ContactForm({ content }: ContactFormProps) {
  return (
    <Card className="self-start border-white/80 shadow-[0_22px_70px_rgba(23,23,23,0.08)]">
      <form className="grid gap-4 p-5 sm:grid-cols-2 sm:gap-5 sm:p-8 lg:p-10">
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Name
          </label>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder={content.namePlaceholder}
            required
            className="h-14 rounded-xl border-neutral-200 px-5 text-base"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">
            E-mail
          </label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={content.emailPlaceholder}
            required
            className="h-14 rounded-xl border-neutral-200 px-5 text-base"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-subject" className="sr-only">
            Subject
          </label>
          <Input
            id="contact-subject"
            name="subject"
            placeholder={content.subjectPlaceholder}
            required
            className="h-14 rounded-xl border-neutral-200 px-5 text-base"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="sr-only">
            Message
          </label>
          <Textarea
            id="contact-message"
            name="message"
            placeholder={content.messagePlaceholder}
            required
            className="min-h-36 rounded-xl border-neutral-200 px-5 py-4 text-base"
          />
        </div>
        <div className="pt-1 sm:col-span-2">
          <Button
            type="button"
            size="lg"
            className="h-14 rounded-full bg-neutral-950 px-8 text-base font-bold text-white shadow-none hover:bg-red-600"
          >
            {content.submitLabel}
          </Button>
        </div>
      </form>
    </Card>
  );
}
