import type { CollectionEditorial } from "@/features/collections/board-game-inserts/types/board-game-inserts";

export const collectionEditorial = {
  imageSrc:
    "/images/laserox/boardgameinsert.webp",
  imageAlt: "Wooden board game organizer filled with cards and tokens",
  emblemSrc:
    "/images/laserox/emblem_black.png",
  emblemAlt: "Laserox emblem",
  heading: "Clear Space, Clear Strategy",
  description:
    "Discover our line of expertly crafted game organizers, designed with three core principles in mind: efficient storage, speedy setup and teardown, and in-game support. Each organizer is designed to perfectly follow the theme of your favorite board games. Made from sustainably sourced birch plywood and precision-cut by laser, our organizers are built to last a lifetime, enhancing every game night with seamless organization.",
} as const satisfies CollectionEditorial;
