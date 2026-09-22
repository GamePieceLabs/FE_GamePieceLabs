import { BrowseByGamePage } from "@/features/collections/by-game-name/components/BrowseByGamePage";
import { browseByGameContent } from "@/features/collections/by-game-name/data/browse-by-game";

export default function Page() {
  return <BrowseByGamePage content={browseByGameContent} />;
}
