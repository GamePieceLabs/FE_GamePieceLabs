import type { CollectionHero } from "@/features/collections/board-game-inserts/types/board-game-inserts";

export const collectionHero = {
  header: "All Products",
  description:
    "Explore our complete range of tabletop organizers and accessories, designed to enhance your gaming experience. From expertly crafted laser-cut inserts to beautiful RPG accessories and more, pick the perfect gear for your next game night from our ever-expanding inventory!",
  imageSrc:
    "/images/laserox/MH40S2_StillLife-GuitarStore_2016_1.jpg_7.png",
  imageAlt: "Wooden board game inserts arranged on a gaming table",
} as const satisfies CollectionHero;
