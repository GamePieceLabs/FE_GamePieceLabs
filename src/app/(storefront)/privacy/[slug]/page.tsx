import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { privacyPolicies } from "@/features/privacy/data/policies";
import type { PolicyParagraph } from "@/features/privacy/types/policy";

type PrivacyDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(privacyPolicies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PrivacyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const policy = privacyPolicies[slug];

  if (!policy) {
    return {
      title: "Không tìm thấy chính sách",
      description: "Không tìm thấy chính sách bạn đang cần tại GamePiece Labs.",
    };
  }

  return {
    title: policy.title,
    description: policy.intro,
  };
}

function PolicyParagraphContent({ paragraph }: { paragraph: PolicyParagraph }) {
  if (typeof paragraph === "string") {
    return paragraph;
  }

  return paragraph.map((segment, index) => {
    const content = segment.strong ? (
      <strong className="font-semibold">{segment.text}</strong>
    ) : (
      segment.text
    );

    if (segment.href) {
      return (
        <Link
          key={`${segment.text}-${index}`}
          href={segment.href}
          className="font-medium text-blue-700 underline underline-offset-4 transition-colors hover:text-blue-900"
        >
          {content}
        </Link>
      );
    }

    return <span key={`${segment.text}-${index}`}>{content}</span>;
  });
}

export default async function PrivacyDetailPage({
  params,
}: PrivacyDetailPageProps) {
  const { slug } = await params;
  const policy = privacyPolicies[slug];

  if (!policy) {
    notFound();
  }

  return (
    <main className="bg-[var(--storefront-surface)]">
      <article
        className="mx-auto w-[calc(100%-6rem)] max-w-[72ch] py-[48px] text-[16px] font-normal leading-[1.7] text-foreground
                   max-tablet:w-[calc(100%-3rem)]
                   max-mobile:w-[calc(100%-2rem)] max-mobile:py-[40px]"
      >
        <header className="mb-5">
          <h1
            className="text-center text-[22px] font-semibold leading-[1.25] uppercase
                       max-mobile:text-[20px]"
          >
            {policy.title}
          </h1>
          <p className="mt-4 text-[14px] font-normal text-muted-foreground">
            Cập nhật lần cuối: {policy.updatedAt}
          </p>
          <p className="mt-3 text-justify">{policy.intro}</p>
        </header>

        {policy.sections.map((section, sectionIndex) => (
          <section key={section.title} className="mt-10">
            <h2 className="text-[17px] font-semibold leading-[1.35]">
              {section.number ?? sectionIndex + 1}. {section.title}
            </h2>

            {section.description ? (
              <p className="mt-2 text-justify">{section.description}</p>
            ) : null}

            {section.steps ? (
              <ol className="mt-4 space-y-5 pl-6
                             max-mobile:pl-4">
                {section.steps.map((step) => (
                  <li key={step.title}>
                    {step.title ? (
                      <h3 className="text-[16px] font-medium leading-[1.4]">
                        {step.title}
                      </h3>
                    ) : null}
                    <div className="mt-2 space-y-2">
                      {step.paragraphs.map((paragraph) => (
                        <p
                          key={
                            typeof paragraph === "string"
                              ? paragraph
                              : paragraph.map((segment) => segment.text).join("")
                          }
                          className="text-justify"
                        >
                          <PolicyParagraphContent paragraph={paragraph} />
                        </p>
                      ))}
                    </div>
                    {step.bullets ? (
                      <ul className="mt-2 list-disc space-y-1 pl-6">
                        {step.bullets.map((bullet) => (
                          <li
                            key={
                              typeof bullet === "string"
                                ? bullet
                                : bullet.map((segment) => segment.text).join("")
                            }
                          >
                            <PolicyParagraphContent paragraph={bullet} />
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ol>
            ) : null}
          </section>
        ))}
      </article>
    </main>
  );
}
