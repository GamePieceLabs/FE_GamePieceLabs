import type { Metadata } from "next";

import { BrowseByGamePage } from "@/features/collections/by-game-name/components/BrowseByGamePage";
import { browseByGameContent } from "@/features/collections/by-game-name/data/browse-by-game";

export const metadata: Metadata = {
  title: "Sản phẩm theo tựa game",
  description:
    "Tìm phụ kiện, organizer và insert phù hợp theo từng tựa board game tại GamePiece Labs.",
};

export default function Page() {
  return <BrowseByGamePage content={browseByGameContent} />;
}
