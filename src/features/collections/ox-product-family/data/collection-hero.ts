import type { CollectionHero } from "@/features/collections/board-game-inserts/types/board-game-inserts";

export const collectionHero = {
  header: "Bọc hộp Boardgame",
  description:
    "Bảo vệ hộp boardgame khỏi trầy xước, phai màu, hay hư hỏng, giữ cho bộ sưu tập của bạn luôn bền đẹp theo thời gian. Lớp bọc chất lượng cao, thẩm mỹ, giúp duy trì giá trị và tăng độ bền cho hộp game yêu thích. Chăm sóc boardgame đúng cách, giữ trọn đam mê lâu dài.",
  imageSrc: "/images/laserox/ox.png",
  imageAlt: "Wooden board game inserts arranged on a gaming table",
} as const satisfies CollectionHero;
