import { CollectionHero } from "@/features/collections/tokens/types/tokens";

export const collectionHero = {
  header: "Phụ Kiện Boardgame",
  description:
    "Phụ kiện nhựa giúp trải nghiệm boardgame đẹp, tiện lợi và bền hơn. Các loại phổ biến như token, tháp xí ngầu,... và khay đựng giúp sắp xếp gọn gàng và tăng sự thú vị khi chơi. Đây là lựa chọn tuyệt vời để nâng cấp bộ sưu tập boardgame của bạn.",
  imageSrc: "/images/laserox/MH40S2_StillLife-GuitarStore_2016_1.jpg_5.png",
  imageAlt: "Wooden board game inserts arranged on a gaming table",
} as const satisfies CollectionHero;
