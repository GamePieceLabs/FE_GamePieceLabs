import { BrowseByGameHero } from "@/features/collections/by-game-name/components/browse-by-game-hero";
import { BrowseByGameList } from "@/features/collections/by-game-name/components/browse-by-game-list";
import type { BrowseByGameContent } from "@/features/collections/by-game-name/data/browse-by-game";

type BrowseByGamePageProps = {
  content: BrowseByGameContent;
};

export function BrowseByGamePage({ content }: BrowseByGamePageProps) {
  return (
    <main>
      <BrowseByGameHero content={content} />
      <BrowseByGameList
        title={content.browseTitle}
        searchPlaceholder={content.searchPlaceholder}
        games={content.games}
      />
    </main>
  );
}
