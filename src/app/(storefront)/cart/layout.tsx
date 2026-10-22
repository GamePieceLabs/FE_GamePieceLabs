import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giỏ hàng",
  description: "Xem và cập nhật các sản phẩm trong giỏ hàng GamePiece Labs.",
};

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
