import type { ContactPageContent } from "@/features/contact/types/contact-content";

type ContactDetailsProps = {
  content: ContactPageContent["details"];
};

export function ContactDetails({ content }: ContactDetailsProps) {
  return (
    <div className="flex max-mobile:flex-col gap-y-5 justify-between items-center">
      {content.map((detail) => (
        <div key={detail.label} className="border-l-2 border-red-600 pl-4">
          <div className="text-base font-bold text-neutral-950">
            {detail.label}
          </div>
          <div className="mt-1 text-base leading-relaxed text-neutral-700">
            {detail.href ? (
              <a
                href={detail.href}
                className="font-semibold underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-red-600"
              >
                {detail.value}
              </a>
            ) : (
              <span className="font-semibold">{detail.value}</span>
            )}
            {detail.supportingText ? (
              <span className="mt-1 block text-neutral-500">
                {detail.supportingText}
              </span>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
