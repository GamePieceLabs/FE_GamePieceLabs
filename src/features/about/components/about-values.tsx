import type { AboutValuesSection } from "@/features/about/types/about-content";
import { AboutProductDnaCard } from "@/features/about/components/about-product-dna-card";
import { SectionTitle } from "@/components/shared/section-title/section-title";

type AboutValuesProps = {
  content: AboutValuesSection;
};

export function AboutValues({ content }: AboutValuesProps) {
  return (
    <SectionTitle>
      <div>
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className="text-[40px] font-bold leading-[1.1] tracking-normal text-neutral-950 max-mobile:text-[32px]"
            style={{ textWrap: "wrap" }}
          >
            {content.title}
          </h2>
          <p className="mx-auto mt-8 max-w-[720px] text-center text-[24px] font-medium leading-[1.6] text-neutral-800 max-mobile:text-[14px] max-mobile:leading-[1.7]">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-28 
                        max-pc:gap-14 
                        max-mobile:flex 
                        max-mobile:gap-4 
                        max-mobile:overflow-x-auto 
                        max-mobile:snap-x 
                        max-mobile:pb-4">

          {content.values.map((value) => (
            <AboutProductDnaCard key={value.title} value={value} />
          ))}
        </div>
      </div>
    </SectionTitle>
  );
}
