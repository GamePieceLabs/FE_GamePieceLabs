# Thiết kế metadata storefront tiếng Việt

## Mục tiêu

Chuẩn hóa tiêu đề tab của toàn bộ storefront theo mẫu `GamePiece Labs | Tên trang`, với tên trang và mô tả bằng tiếng Việt.

## Thiết kế

- `src/app/layout.tsx` sở hữu title template `GamePiece Labs | %s` và title mặc định cho trang chủ.
- `src/app/(storefront)/layout.tsx` chỉ giữ description chung, không đặt title để tránh ghi đè title của route con.
- Route tĩnh khai báo `metadata` với phần tên trang, không lặp lại thương hiệu.
- Route động collection, sản phẩm và chính sách dùng `generateMetadata()` để lấy title từ slug hoặc dữ liệu hiện có.
- Trang giỏ hàng là Client Component nên metadata được đặt trong `src/app/(storefront)/cart/layout.tsx`.

## Quy ước nội dung

- Tên thương hiệu luôn viết `GamePiece Labs`.
- Nội dung giao diện metadata dùng tiếng Việt.
- Tên riêng của sản phẩm và dòng sản phẩm được giữ nguyên.
- Route không tìm thấy dữ liệu dùng title dự phòng tiếng Việt.

## Kiểm tra

- Chạy TypeScript type-check và ESLint cho các file thay đổi.
- Chạy production build để xác nhận metadata App Router được biên dịch.
