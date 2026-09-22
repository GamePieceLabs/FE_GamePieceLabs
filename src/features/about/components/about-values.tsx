import type { AboutValuesSection } from "@/features/about/types/about-content";
import { AboutProductDnaCard } from "@/features/about/components/about-product-dna-card";
import { SectionTitle } from "@/components/shared/section-title/section-title";

type AboutValuesProps = {
  content: AboutValuesSection;
};

export function AboutValues({ content }: AboutValuesProps) {
  return (
    <SectionTitle title={content.title} align="center">
      <p className="max-mobile:text-[14px] text-[16px] max-w-2xl mx-auto text-center mt-2 text-neutral-700">
        {content.description}
      </p>

      <div
        className="mt-10 grid grid-cols-3 max-mobile:grid-cols-1 mobile:gap-5 space-y-8"
      >
        {content.values.map((value) => (
          <AboutProductDnaCard key={value.title} value={value} />
        ))}
      </div>
    </SectionTitle>
  );
}
