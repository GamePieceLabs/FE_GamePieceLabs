import type {
  HeaderNavigationItem,
  HeaderPromoCard,
} from "@/features/navigation/types/header-navigation";

export const contactNavigationItem: HeaderNavigationItem = {
  label: "Liên hệ",
  href: "/contact",
};

export const productMenuItems: HeaderNavigationItem[] = [
  { label: "Tất cả sản phẩm", href: "/products" },
  { label: "Theo trò chơi", href: "/browsebygame" },
  { label: "Khay đựng board game", href: "/collections/board-game-inserts" },
  { label: "Dòng sản phẩm OX", href: "/collections/ox-product-family" },
  { label: "Token", href: "/collections/tokens" },
];

export const promoCards: HeaderPromoCard[] = [
  {
    title: "Khay đựng board game",
    description: "Sắp xếp gọn gàng cho mọi buổi chơi",
    href: "/products?group=inserts",
    tone: "charcoal",
    icon: "inserts",
  },
  {
    title: "Đang được săn đón",
    description: "Những lựa chọn nổi bật trong tuần",
    href: "/products?group=hotlist",
    tone: "ocean",
    icon: "hotlist",
  },
  {
    title: "Mới trong năm 2026",
    description: "Sản phẩm mới cho bàn chơi của bạn",
    href: "/products?group=new",
    tone: "walnut",
    icon: "new",
  },
];

export const aboutMenuItems: HeaderNavigationItem[] = [
  { label: "Về Game Piece Labs", href: "/about" },
  { label: "Chất liệu", href: "/about/materials" },
  { label: "Chơi xanh", href: "/about/sustainability" },
  { label: "Chế tác & chất lượng", href: "/about/craft" },
];

export const aboutPromoCards: HeaderPromoCard[] = [
  {
    title: "Về Game Piece Labs",
    description: "Được tạo ra cho những buổi chơi đáng nhớ",
    href: "/about",
    tone: "clay",
    icon: "story",
  },
  {
    title: "Chất liệu",
    description: "Được chọn để chơi bền và dùng lâu",
    href: "/about/materials",
    tone: "sand",
    icon: "materials",
  },
  {
    title: "Chơi xanh",
    description: "Giảm tác động môi trường ngay trên bàn chơi",
    href: "/about/sustainability",
    tone: "forest",
    icon: "green",
  },
];
