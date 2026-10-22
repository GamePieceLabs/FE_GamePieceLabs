import type { Metadata } from "next";

import { ContactPage } from "@/features/contact/components/contact-page";
import { contactPageContent } from "@/features/contact/data/contact-content";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Liên hệ GamePiece Labs để được hỗ trợ về sản phẩm, đơn hàng, giao nhận và phụ kiện cho buổi chơi board game.",
};

export default function ContactRoute() {
  return <ContactPage content={contactPageContent} />;
}
