import type { Metadata } from "next";

import { BoardGameInserts } from "@/features/collections/board-game-inserts/components/BoardGameInserts";
import { getBoardGameInsertsAsync } from "@/features/collections/board-game-inserts/services/board-game-inserts-api";
import { OXProductFamily } from "@/features/collections/ox-product-family/components/OXProductFamily";
import { getOXProductFamily } from "@/features/collections/ox-product-family/services/ox-product-family-api";
import { getTokens } from "@/features/collections/tokens/services/tokens-api";
import { Tokens } from "@/features/collections/tokens/components/Tokens";
import { ByGameName } from "@/features/collections/by-game-name/components/ByGameName";
import { getByGameName } from "@/features/collections/by-game-name/services/by-game-name-api";
import { getAllProductAsync } from "@/features/collections/all-products/services/all-products-api";
import AllProducts from "@/features/collections/all-products/components/AllProduct";

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

const collectionMetadata: Record<string, Metadata> = {
  "board-game-inserts": {
    title: "Organizer và Insert Boardgame",
    description:
      "Khám phá organizer và insert giúp sắp xếp board game gọn gàng, rút ngắn thời gian chuẩn bị và thu dọn.",
  },
  "box-protection": {
    title: "Bọc hộp Boardgame",
    description:
      "Dịch Vụ boc hộp boardgame chuyên nghiệp, bảo vệ hộp khỏi trầy xước, ẩm mốc và tăng tính thẩm mỹ cho bộ sưu tập của bạn.",
  },
  tokens: {
    title: "Token Boardgame",
    description:
      "Khám phá các loại token giúp nâng cấp trải nghiệm và quản lý thành phần board game dễ dàng hơn.",
  },
  "all-products": {
    title: "Tất cả sản phẩm",
    description:
      "Khám phá toàn bộ phụ kiện, organizer, insert và token board game tại GamePiece Labs.",
  },
};

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;

  return (
    collectionMetadata[slug] ?? {
      title: "Sản phẩm theo tựa game",
      description:
        "Tìm phụ kiện, organizer và insert phù hợp theo từng tựa board game tại GamePiece Labs.",
    }
  );
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;

  switch (slug) {
    case "board-game-inserts": {
      const boardGameInserts = await getBoardGameInsertsAsync();
      return <BoardGameInserts data={boardGameInserts} />;
    }
    case "box-protection": {
      const oxProductFamily = await getOXProductFamily();
      return <OXProductFamily data={oxProductFamily} />;
    }
    case "tokens": {
      const tokens = await getTokens();
      return <Tokens data={tokens} />;
    }
    case "all-products": {
      const allProducts = await getAllProductAsync();
      return <AllProducts data={allProducts} />;
    }
    default:
      const byGameName = await getByGameName();
      return <ByGameName data={byGameName} />;
  }
}
