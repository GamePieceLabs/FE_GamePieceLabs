import type { ImageSliderSlide } from "@/components/shared/image/image-slider";

export const imageSliderSlides = [
  {
    id: "new-arrivals",
    title: " Let's get organized!",
    ctaLabel: "Xem bộ sưu tập",
    ctaHref: "/",
    imageSrc: "/images/legacy/banner1.jpg",
    imageWidth: 1600,
    imageHeight: 571.2,
    imageAlt: "Banner bộ sưu tập mới",
  },
  {
    id: "preorders",
    title: "Đặt trước những mẫu figure nổi bật trước khi cháy hàng",
    ctaLabel: "Đặt trước ngay",
    ctaHref: "/",
    imageSrc: "/images/legacy/banner2.jpg",
    imageWidth: 1600,
    imageHeight: 720,
    imageAlt: "Banner sản phẩm đặt trước",
  },
  {
    id: "featured-display",
    title: "Góc trưng bày dành cho người sưu tầm thật sự",
    ctaLabel: "Xem sản phẩm nổi bật",
    ctaHref: "/",
    imageSrc: "/images/legacy/banner3.jpg",
    imageWidth: 1600,
    imageHeight: 720,
    imageAlt: "Banner sản phẩm nổi bật",
  },
] as const satisfies readonly ImageSliderSlide[];
