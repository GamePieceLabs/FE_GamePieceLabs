import { PaginatedOXProductFamily } from "../types/tokens";

export const tokenProducts = {
  data: [
    {
      slug: "personal-ox-station-5-slot",
      gui: "a3f1c2d4-7b8e-4a9d-9c0f-1e2d3c4b5a61",
      name: "Terraforming Mars Tokens",
      imageSrc:
        "/images/laserox/All_Four_800_7e4e290e-6c22-4c59-942d-f5cf6304e1dd.jpg",
      imageAlt: "Wooden organizer for Gloomhaven Buttons and Bugs",
      price: 283500,
      currency: "VND",
      rating: 4.9,
    },
    {
      slug: "personal-ox-station-3-slot",
      gui: "b4e2d3c5-8f9a-4b0e-a1d2-2f3e4d5c6b72",
      name: "Terraforming Mars Resource Tokens",
      imageSrc:
        "/images/laserox/TM_Token_01_e9e80457-68cd-49bf-bf29-e22c58253ac2.jpg",
      imageAlt: "Wooden organizer trays for Spirit Island",
      price: 935750,
      currency: "VND",
      rating: 4.5,
    },
    {
      slug: "ox-storage-2+-1-set",
      gui: "c5f3e4d6-9a0b-4c1f-b2e3-3a4f5e6d7c83",
      name: "Twilight Imperium: Infantry & Fighter Tokens",
      imageSrc:
        "/images/laserox/DSC5862_d7b73c5f-c78d-4e53-89fe-ce79aaeef02c.jpg",
      imageAlt: "Wooden organizer filled with SETI board game components",
      price: 1166000,
      currency: "VND",
      rating: 4.7,
    },
    {
      slug: "ox-standy",
      gui: "d6a4f5e7-0b1c-4d2a-83f4-4b5a6f7e8d94",
      name: "Arkham Horror LCG Tokens Edge of the Earth Tokens",
      imageSrc:
        "/images/laserox/il_1140xN.3465432658_lmlk.jpg",
      imageAlt: "Spirit Island expansion organizer with cards and tokens",
      price: 945000,
      currency: "VND",
      rating: 2,
    },
  ],
  pagination: {
    currentPage: 1,
    pageSize: 12,
    totalItems: 281,
    totalPages: 24,
    hasNext: true,
    hasPrevious: false,
  },
} as const satisfies PaginatedOXProductFamily;
