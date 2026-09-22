import type { OtherCategory } from "@/features/collections/board-game-inserts/types/board-game-inserts";

export const otherCategories = [
  {
    title: "Board Game Inserts",
    imageSrc:
      "/images/laserox/boardgameinsert.webp",
    imageAlt: "Board game insert filled with cards and tokens",
    href: "board-game-inserts",
    isArrow: false,
  },
  {
    title: "OX Product Family",
    imageSrc:
      "/images/laserox/41c391c6446a49347a89f4af9aa8fc15_acae2f06-84a4-48aa-8a57-5f5ae9fa1be8.jpg",
    imageAlt: "Wooden trays from the OX product family",
    href: "ox-product-family",
    isArrow: false,
  },
  {
    title: "Tokens",
    imageSrc:
      "/images/laserox/fa9d8366b6a8ef51a66a0107f9947bac.jpg",
    imageAlt: "Purple gaming tokens on a dark surface",
    href: "tokens",
    isArrow: false,
  },
  {
    title: "Roleplaying Games",
    imageSrc:
      "/images/laserox/MH40S2_StillLife-GuitarStore_2016_1_jpg.webp",
    imageAlt: "Roleplaying game setup with books, dice, and a game master screen",
    href: "roleplaying-games",
    isArrow: false,
  },
  {
    title: "Accessories",
    imageSrc:
      "/images/laserox/18e602cb90c377249006230b7456ff3f.jpg",
    imageAlt: "Laser-cut wooden tabletop gaming accessories",
    href: "accessories",
    isArrow: false,
  },
] as const satisfies readonly OtherCategory[];
