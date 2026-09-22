import { CollectionHero } from "@/features/collections/tokens/types/tokens";

export const collectionHero = {
  header: "Tokens",
  description:
    " Explore our range of durable, laser-cut tokens, crafted to enhance your gaming experience and immerse you fully in your campaign. Choose the perfect gear for your next game night from our ever-expanding inventory!",
  imageSrc:
    "/images/laserox/MH40S2_StillLife-GuitarStore_2016_1.jpg_5.png",
  imageAlt: "Wooden board game inserts arranged on a gaming table",
} as const satisfies CollectionHero;
