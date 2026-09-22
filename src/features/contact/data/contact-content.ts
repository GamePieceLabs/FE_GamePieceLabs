import type { ContactPageContent } from "@/features/contact/types/contact-content";

export const contactPageContent = {
  hero: {
    title: "Liên hệ với chúng tôi",
    imageSrc: "/images/contact/contact-hero.png",
    imageAlt:
      "Khách hàng nhận hỗ trợ về phụ kiện board game tại quầy tư vấn",
  },
  introduction: {
    eyebrow: "Câu hỏi của bạn là ưu tiên của chúng tôi",
    title: "Liên hệ để được hỗ trợ",
    description:
      "Bạn cần hỗ trợ về đơn hàng, độ phù hợp của sản phẩm hoặc chuẩn bị cho buổi chơi tiếp theo? Hãy gửi lời nhắn để đội ngũ hỗ trợ tư vấn đúng nhu cầu.",
    faqLabel: "Xem trang câu hỏi thường gặp",
    faqHref: "/faq",
  },
  details: [
    {
      label: "Facebook",
      value: "In 3D Và Phụ Kiện Boardgame",
      supportingText: "Hỗ trợ các câu hỏi về sản phẩm, đơn hàng và giao nhận.",
      href: "mailto:support@gamepiecelabs.example",
    },
    {
      label: "Tiktok",
      value: "Vui lòng ghi kèm mã đơn hàng",
      supportingText: "Thông tin này giúp chúng tôi tra cứu và phản hồi nhanh hơn.",
    },
    {
      label: "Thời gian hỗ trợ",
      value: "Thứ Hai - Thứ Sáu, 08:00 - 16:30",
      supportingText: "Tin nhắn ngoài giờ sẽ được xử lý vào ngày làm việc kế tiếp.",
    },
  ],
  form: {
    namePlaceholder: "Họ và tên",
    emailPlaceholder: "Email",
    subjectPlaceholder: "Chủ đề",
    messagePlaceholder: "Nội dung tin nhắn",
    submitLabel: "Gửi tin nhắn",
  },
  benefits: [
    {
      title: "Thiết kế cho buổi chơi trọn vẹn",
      description: "Phụ kiện chỉn chu giúp trải nghiệm chơi mượt mà và đáng nhớ hơn.",
      icon: "map-pin",
    },
    {
      title: "Giao hàng linh hoạt",
      description: "Nhiều lựa chọn giao nhận phù hợp cho cộng đồng yêu board game.",
      icon: "globe",
    },
    {
      title: "Hỗ trợ tận tâm cho người sưu tầm",
      description: "Tư vấn rõ ràng trước và sau mỗi lần mua tại Game Piece Labs.",
      icon: "messages",
    },
    {
      title: "Thanh toán an toàn",
      description: "Thanh toán được xử lý qua quy trình thanh toán bảo mật.",
      icon: "credit-card",
    },
  ],
} satisfies ContactPageContent;
