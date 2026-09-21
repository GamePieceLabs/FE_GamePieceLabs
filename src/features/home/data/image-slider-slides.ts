import type { ImageSliderSlide } from "@/components/shared/image/image-slider";

export const imageSliderSlides = [
  {
    id: "new-arrivals",
    title: "Organize hay Insert Boardgame là gì ?",
    ctaLabel: "Cùng tìm hiểu Organize nhé",
    ctaHref: "/",
    imageSrc: "/images/legacy/banner1.jpg",
    imageWidth: 1600,
    imageHeight: 571.2,
    imageAlt: "Banner Tìm hiểu về Organize Boardgame",
  },
  {
    id: "preorders",
    title: "Làm thế nào để tránh hộp Boardgame bị móc hay thậm chí là rách ?",
    ctaLabel: "Cùng tìm hiểu về Bọc hộp Boardgame nhé",
    ctaHref: "/",
    imageSrc: "/images/legacy/banner2.jpg",
    imageWidth: 1600,
    imageHeight: 720,
    imageAlt: "Banner Bọc hộp Boardgame",
  },
  {
    id: "featured-display",
    title: "Bạn cần nâng tầm trải nghiệm chơi Boardgame ?",
    ctaLabel: "Cùng tìm hiểu về Phụ kiện Boardgame nhé",
    ctaHref: "/",
    imageSrc: "/images/legacy/banner3.jpg",
    imageWidth: 1600,
    imageHeight: 720,
    imageAlt: "Banner Phụ kiện Boardgame",
  },
] as const satisfies readonly ImageSliderSlide[];
