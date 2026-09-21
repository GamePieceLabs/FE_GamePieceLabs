import type { ContactPageContent } from "@/features/contact/types/contact-content";

type ContactDetailsProps = {
  content: ContactPageContent["details"];
};

export function ContactDetails({ content }: ContactDetailsProps) {
  return (
    <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 min-[1400px]:grid-cols-2">
      {content.map((detail) => (
        <div key={detail.label} className="border-l-2 border-red-600 pl-4">
          <dt className="text-base font-bold text-neutral-950">{detail.label}</dt>
          <dd className="mt-1 text-base leading-relaxed text-neutral-700">
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
          </dd>
        </div>
      ))}
    </dl>
  );
}
