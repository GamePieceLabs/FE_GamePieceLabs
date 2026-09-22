import type { CardImageTitleProps } from "@/components/shared/card-image-title";

export const gearCategories = [
  {
    title: "Organize/Insert Boardgame",
    imageSrc:
      "/images/laserox/MW08SportGR_Angle_Right_800x800_8a72d3f1-7771-4cb1-8ceb-3106713e47d6_800x800_2_jpg.png",
    imageAlt: "Board game inserts, tokens, cards, and accessories on a table",
    href: "board-game-inserts",
    imagePosition: "22% center",
  },
  {
    title: "Bọc hộp Boardgame",
    imageSrc: "/images/legacy/banner3.jpg",
    imageAlt: "Bọc hộp bảo vệ boardgame",
    href: "ox-product-family",
    imagePosition: "48% center",
  },
  {
    title: "Phụ kiện Boardgame",
    imageSrc: "/images/legacy/banner1.jpg",
    imageAlt: "Phụ kiện nâng cấp trải nghiệm chơi boardgame",
    href: "tokens",
    imagePosition: "58% center",
  },
  // {
  //   title: "Tokens",
  //   imageSrc: "/images/legacy/banner1.jpg",
  //   imageAlt: "Neon tabletop artwork in purple and blue",
  //   href: "tokens",
  //   imagePosition: "58% center",
  // },
  // {
  //   title: "Tokens",
  //   imageSrc: "/images/legacy/banner1.jpg",
  //   imageAlt: "Neon tabletop artwork in purple and blue",
  //   href: "tokens",
  //   imagePosition: "58% center",
  // },
  // {
  //   title: "Tokens",
  //   imageSrc: "/images/legacy/banner1.jpg",
  //   imageAlt: "Neon tabletop artwork in purple and blue",
  //   href: "tokens",
  //   imagePosition: "58% center",
  // },
  // {
  //   title: "Tokens",
  //   imageSrc: "/images/legacy/banner1.jpg",
  //   imageAlt: "Neon tabletop artwork in purple and blue",
  //   href: "tokens",
  //   imagePosition: "58% center",
  // },
] as const satisfies readonly CardImageTitleProps[];
