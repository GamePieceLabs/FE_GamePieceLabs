import type { ProductHotspot } from "@/features/home/types/product-demo";

export const productDemoImage = {
  src: "/images/laserox/TRACKER-3-400x400_6.png",
  alt: "Wooden board game organizer filled with cards, tokens, and game pieces",
  width: 800,
  height: 732,
} as const;

export const productHotspots = [
  {
    id: "sorted-components",
    title: "Linh kiện luôn gọn gàng",
    position: { left: "50%", top: "11%" },
    side: "bottom",
    text: "Mỗi token, thẻ bài và phụ kiện đều có ngăn riêng để bạn tìm thấy ngay khi cần.",
  },
  {
    id: "more-play-time",
    title: "Thêm thời gian vào cuộc",
    position: { left: "31%", top: "47.5%" },
    side: "right",
    text: "Sắp xếp tốt hơn giúp bạn bớt lo chuẩn bị, thêm thời gian tính chiến thuật và tận hưởng ván chơi.",
  },
  {
    id: "faster-pack-up",
    title: "Thu dọn nhanh hơn",
    position: { left: "64.5%", top: "76%" },
    side: "top",
    text: "Kết thúc ván chơi nhẹ nhàng hơn, đồng thời bảo vệ từng thành phần giữa các lần chơi.",
  },
] as const satisfies readonly ProductHotspot[];
