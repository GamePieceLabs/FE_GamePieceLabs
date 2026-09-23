import type { CollectionHero } from "@/features/collections/board-game-inserts/types/board-game-inserts";

export const collectionHero = {
  header: "Tất cả sản phẩm",
  description:
    "Khám phá đầy đủ các dòng khay lưu trữ và phụ kiện bàn chơi, được thiết kế để nâng tầm trải nghiệm board game của bạn. Từ insert cắt laser tinh xảo đến phụ kiện RPG đẹp mắt và nhiều lựa chọn khác, hãy chọn món đồ phù hợp cho buổi chơi tiếp theo từ danh mục sản phẩm ngày càng mở rộng của chúng tôi!",
  imageSrc:
    "/images/laserox/MH40S2_StillLife-GuitarStore_2016_1.jpg_7.png",
  imageAlt: "Wooden board game inserts arranged on a gaming table",
} as const satisfies CollectionHero;
