import type { ByGameNameEditorial } from "@/features/collections/by-game-name/types/by-game-name";

export const collectionEditorial = {
  imageSrc:
    "/images/laserox/LGBB.jpg",
  imageAlt: "Gloomhaven Buttons and Bugs box artwork",
  emblemSrc:
    "/images/laserox/favicon.png",
  emblemAlt: "Laserox emblem",
} as const satisfies ByGameNameEditorial;
