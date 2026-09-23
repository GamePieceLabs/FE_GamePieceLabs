import type { AboutPageContent } from "@/features/about/types/about-content";

export const aboutPageContent: AboutPageContent = {
  hero: {
    eyebrow: "Câu chuyện của chúng tôi, ván chơi của bạn",
    title: "Tâm huyết và nghệ thuật chế tác tại GamePiece Labs",
    subtitle:
      "Chúng tôi kết hợp nghệ thuật thủ công tinh xảo, công nghệ cắt laser chính xác và vật liệu gỗ tuyển chọn để biến mỗi buổi chơi game thành một kỷ niệm đáng nhớ.",
    heroImageSrc: "/images/about/about-hero.jpg",
    heroImageAlt:
      "Bàn làm việc xưởng chế tác phụ kiện gỗ và organizer board game GamePieceLabs",
  },
  story: {
    eyebrow: "Câu chuyện của chúng tôi",
    title: "Sinh ra từ những buổi chơi cần gọn gàng hơn",
    lead: "Game Piece Labs bắt đầu từ một cảm giác rất quen thuộc với người chơi board game: mở hộp ra là thấy thẻ bài, token, mini và phụ kiện nằm lẫn vào nhau.",
    paragraphs: [
      "Chúng tôi muốn mỗi ván chơi bắt đầu nhanh hơn, setup ít mệt hơn và bàn chơi nhìn chỉn chu hơn. Từ nhu cầu đó, những khay gỗ, insert và phụ kiện đầu tiên được thiết kế để từng chi tiết có đúng vị trí của nó.",
      "Mỗi sản phẩm đều được nhìn từ trải nghiệm thật trên bàn chơi: dễ lấy, dễ cất, vừa hộp game và đủ đẹp để trở thành một phần của buổi chơi.",
    ],
    quote: {
      text: "Một chiếc organizer tốt không chỉ để cất đồ, nó giúp người chơi quay lại với phần vui nhất của board game nhanh hơn.",
      author: "Game Piece Labs",
      role: "Chế tác dành cho người chơi board game",
    },
  },
  craftsmanship: {
    eyebrow: "Kỹ nghệ chế tác",
    title: "Chính xác trong từng ván chơi: sức mạnh của cắt laser",
    description:
      "Cắt laser là công nghệ lý tưởng để tạo organizer board game nhờ độ chính xác vượt trội. Phương pháp này cho phép cắt tinh xảo và tạo các thiết kế phức tạp với nhiều chi tiết hoặc tùy biến. Gỗ ép bạch dương chất lượng cao mang lại độ bền, độ linh hoạt và giúp việc phân loại, cất giữ dễ dàng hơn.",
    showcaseVideo: {
      type: "youtube",
      src: "https://www.youtube.com/embed/HjsGUuQsQOY?si=ZcxnS0Ln7VPw4BqD",
      title: "Cần bao nhiêu người để sản xuất một organizer Frosthaven?",
    },
    showcaseImageSrc: "/images/about/laser-craftsmanship.jpg",
    showcaseImageAlt:
      "Máy cắt laser đang khắc chi tiết bảng điều khiển người chơi bằng gỗ",
    showcaseCaption:
      "Quy trình khắc laser CO2 chính xác trên gỗ bạch dương cao cấp tại xưởng Game Piece Labs",
    features: [
      {
        title: "Khắc laser vi mô chính xác",
        description:
          "Từng ký hiệu, ô chỉ số máu (HP tracker), rãnh thẻ bài và ngăn xúc xắc đều được định vị chuẩn xác với sai số dưới 0.1mm.",
        badge: "Độ chính xác 0.1mm",
      },
      {
        title: "Gỗ Bạch Dương & Óc Chó tự nhiên",
        description:
          "Vật liệu gỗ ép bạch dương Baltic nhiều lớp có độ bền uốn vượt trội, chống cong vênh và lưu hương thơm gỗ tự nhiên dịu nhẹ.",
        badge: "100% Gỗ tuyển chọn",
      },
      {
        title: "Lắp ráp không cần keo dán",
        description:
          "Hệ thống khớp mộng (Snap-fit & Tenon joints) thông minh cho phép người chơi tháo lắp dễ dàng, chắc chắn mà không cần keo dính.",
        badge: "Thiết kế mộng khớp",
      },
      {
        title: "Tối ưu hóa không gian hộp game",
        description:
          "Vừa vặn hoàn hảo trong hộp gốc của từng tựa game, hỗ trợ cả thẻ bài đã bọc sleeve và nắp hộp đóng kín phẳng 100%.",
        badge: "Khớp 100% hộp gốc",
      },
    ],
  },
  values: {
    eyebrow: "DNA sản phẩm",
    title: "DNA sản phẩm",
    description:
      "Khi chia sẻ các sản phẩm đầu tiên, chúng tôi nhanh chóng nhận được phản hồi tích cực từ người chơi và liên tục hoàn thiện quy trình sản xuất. Với kỹ nghệ vững vàng và niềm đam mê board game, Game Piece Labs phát triển các organizer giúp mọi buổi chơi trôi chảy hơn.",
    values: [
      {
        title: "Thiết kế vượt trội",
        description:
          "Mỗi khay và insert được thiết kế để dễ dùng, gọn gàng trên bàn và thao tác nhanh khi chơi.",
        imageSrc: "/images/about/valuesBox1.jpg",
      },
      {
        title: "Chất liệu cao cấp",
        description:
          "Chúng tôi chọn bề mặt gỗ bền chắc, cầm đầm tay và đẹp tự nhiên theo thời gian.",
        imageSrc: "/images/about/valuesBox2.jpg",
      },
      {
        title: "Công nghệ tinh xảo",
        description:
          "Độ chính xác của cắt laser giúp từng ngăn, vách chia và chi tiết phù hợp với từng tựa game.",
        imageSrc: "/images/about/valuesBox3.jpg",
      },
    ],
  },
  stats: {
    title: "Những con số khẳng định chất lượng",
    items: [
      {
        value: "50,000+",
        label: "Người chơi tin dùng",
        description: "Trên khắp các câu lạc bộ & gia đình",
      },
      {
        value: "150+",
        label: "Mẫu Inserts độc quyền",
        description: "Dành cho các tựa game nổi tiếng thế giới",
      },
      {
        value: "100%",
        label: "Kiểm định thủ công",
        description: "Mỗi sản phẩm đều qua khâu ráp thử",
      },
      {
        value: "4.9 / 5",
        label: "Điểm đánh giá trung bình",
        description: "Từ cộng đồng game thủ & reviewer",
      },
    ],
  },
  cta: {
    title: "Sẵn sàng nâng tầm bàn cờ của bạn?",
    description:
      "Khám phá ngay bộ sưu tập phụ kiện, inserts và bảng điều khiển người chơi được chế tác riêng cho tựa game yêu thích của bạn.",
    primaryAction: {
      label: "Khám phá sản phẩm",
      href: "/products",
    },
    secondaryAction: {
      label: "Liên hệ tư vấn",
      href: "/contact",
    },
  },
};
