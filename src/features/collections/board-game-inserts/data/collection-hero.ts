import type { CollectionHero } from "@/features/collections/board-game-inserts/types/board-game-inserts";

export const collectionHero = {
  header: "Board Game Inserts",
  description:
    "Organize Boardgame giúp bạn sắp xếp bộ sưu tập boardgame một cách gọn gàng và khoa học. Với thiết kế thông minh và các phụ kiện chuyên dụng, từng linh kiện sẽ được bảo quản tối ưu, giúp bạn duy trì sự ngăn nắp và tận hưởng trọn vẹn những ván chơi mà khong lo thất lạc hay lộn xộn.",
  imageSrc: "/images/laserox/MH40S2_StillLife-GuitarStore_2016_1.jpg_2.png",
  imageAlt: "Wooden board game inserts arranged on a gaming table",
} as const satisfies CollectionHero;
