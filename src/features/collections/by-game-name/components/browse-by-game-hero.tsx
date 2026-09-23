import type { BrowseByGameContent } from "@/features/collections/by-game-name/data/browse-by-game";
import SectionBanner from "@/components/shared/section-banner";

type BrowseByGameHeroProps = {
  content: Pick<
    BrowseByGameContent,
    "heroImageSrc" | "heroImageAlt" | "eyebrow" | "title" | "description"
  >;
};

export function BrowseByGameHero({ content }: BrowseByGameHeroProps) {
  return (
    <SectionBanner
      aspectRatio="1800/525"
      imgSrc={content.heroImageSrc}
      title={content.title}
      description={content.description}
    />
  );
}
