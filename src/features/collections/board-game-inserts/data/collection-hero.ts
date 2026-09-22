import type { CollectionHero } from "@/features/collections/board-game-inserts/types/board-game-inserts";

export const collectionHero = {
  header: "Board Game Inserts",
  description:
    "Explore our range of game-specific, laser-cut organizers, crafted to enhance your gaming experience by supporting both setup and storage. Choose the perfect gear for your next game night from our ever-expanding inventory!",
  imageSrc:
    "/images/laserox/MH40S2_StillLife-GuitarStore_2016_1.jpg_2.png",
  imageAlt: "Wooden board game inserts arranged on a gaming table",
} as const satisfies CollectionHero;
