import type { FooterContent } from "@/features/navigation/types/footer-navigation";

export const footerContent: FooterContent = {
  navigationGroups: [
    {
      title: "Thông tin",
      links: [
        { label: "Về GamePiece Labs", href: "/about" },
        { label: "Liên hệ", href: "/contact" },
        // { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Chính Sách & Điều Khoản",
      links: [
        { label: "Điều khoản sử dụng", href: "/privacy/dieu-khoan-su-dung" },
        {
          label: "Chính sách thanh toán",
          href: "/privacy/chinh-sach-thanh-toan",
        },
        {
          label: "Chính sách đổi trả & Hoàn tiền",
          href: "/privacy/chinh-sach-doi-tra-hoan-tien",
        },
        {
          label: "Chính sách giao hàng",
          href: "/privacy/chinh-sach-giao-hang",
        },
        {
          label: "Chính sách kiểm hàng",
          href: "/privacy/chinh-sach-kiem-hang",
        },
        { label: "Chính sách bảo hành", href: "/privacy/chinh-sach-bao-hanh" },
        { label: "Chính sách bảo mật", href: "/privacy/chinh-sach-bao-mat" },
      ],
    },
  ],
  certifications: {
    title: "Chứng nhận",
    badges: [
      {
        label: "View DMCA.com protection status",
        href: "https://www.dmca.com/r/1q28p05",
        imageSrc: "/images/footer/dmca-protected.webp",
        imageAlt: "DMCA.com Protection Status",
        width: 121,
        height: 24,
      },
      {
        label: "View Ministry of Industry and Trade registration",
        href: "#",
        imageSrc: "/images/footer/bo-cong-thuong.png",
        imageAlt: "Registered with the Ministry of Industry and Trade",
        width: 230,
        height: 86,
      },
    ],
  },
  fanpage: {
    title: "Fanpage",
    embedUrl:
      "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIn3DPhuKienBoardgame%3Flocale%3Dvi_VN&tabs=&width=340&height=150&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true",
  },
  copyright: "© 2026 Game Piece Labs. All rights reserved.",
};
