import type { ProductCardProps } from "@/components/shared/product/product-card";

export type YouMayAlsoLikeProduct = ProductCardProps;

export const mockYouMayAlsoLikeProducts = [
  {
    slug: "terraforming-mars-tokens",
    gui: "8442315473138",
    name: "Terraforming Mars Tokens",
    imageSrc:
      "/images/laserox/All_Four_800_7e4e290e-6c22-4c59-942d-f5cf6304e1dd.jpg",
    imageAlt: "Four colorful acrylic tokens for Terraforming Mars",
    price: 225000,
    currency: "VND",
    rating: 4.8,
  },
  {
    slug: "woodcraft-organizer",
    gui: "8469487321330",
    name: "Woodcraft Organizer",
    imageSrc:
      "/images/laserox/LWOT_Woodcraft_comp-5.jpg",
    imageAlt: "Wooden card holder from the Woodcraft Organizer",
    price: 1125000,
    currency: "VND",
    rating: 4.9,
  },
  {
    slug: "gloomhaven-second-edition-organizer",
    gui: "14943222333816",
    name: "Gloomhaven: Second Edition Organizer",
    imageSrc:
      "/images/laserox/LGB2-hero1.jpg",
    imageAlt:
      "Gloomhaven Second Edition Organizer with wooden trays and game components",
    price: 3495000,
    currency: "VND",
    rating: 4.7,
  },
] as const satisfies readonly YouMayAlsoLikeProduct[];
