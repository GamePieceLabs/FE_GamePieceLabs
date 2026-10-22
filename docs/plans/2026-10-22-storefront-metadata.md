# Storefront Metadata Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Chuẩn hóa title và description của toàn bộ storefront sang tiếng Việt với định dạng `GamePiece Labs | Tên trang`.

**Architecture:** Root layout sở hữu title template và title mặc định. Route tĩnh chỉ khai báo tên trang; route động tạo metadata từ slug hoặc dữ liệu hiện có. Storefront layout không đặt title chung để tránh che metadata của route con.

**Tech Stack:** Next.js App Router 16, React 19, TypeScript.

---

### Task 1: Chuẩn hóa template gốc và storefront layout

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/(storefront)/layout.tsx`

1. Đổi root title template thành `GamePiece Labs | %s` và default thành `GamePiece Labs | Phụ kiện Boardgame`.
2. Bỏ title khỏi storefront layout và giữ description tiếng Việt dùng chung.

### Task 2: Thêm metadata tiếng Việt cho route tĩnh

**Files:**
- Modify: `src/app/(storefront)/about/page.tsx`
- Modify: `src/app/(storefront)/contact/page.tsx`
- Modify: `src/app/(storefront)/browse-by-game/page.tsx`
- Create: `src/app/(storefront)/cart/layout.tsx`

1. About trả title `Về chúng tôi`.
2. Contact trả title `Liên hệ` và description tiếng Việt.
3. Browse by game trả title `Sản phẩm theo tựa game`.
4. Cart layout trả title `Giỏ hàng` vì page là Client Component.

### Task 3: Tạo metadata cho route động

**Files:**
- Modify: `src/app/(storefront)/collections/[slug]/page.tsx`
- Modify: `src/app/(storefront)/products/[id]/page.tsx`
- Modify: `src/app/(storefront)/privacy/[slug]/page.tsx`

1. Collection ánh xạ slug sang title và description tiếng Việt trong `generateMetadata()`.
2. Product dùng tên sản phẩm hiện có làm title và description sản phẩm làm mô tả nếu khả dụng.
3. Privacy dùng title chính sách và intro làm description.
4. Dữ liệu không tồn tại dùng title dự phòng tiếng Việt.

### Task 4: Xác minh

**Files:**
- Verify all files above.

1. Chạy `npx tsc --noEmit`; kỳ vọng exit code 0.
2. Chạy ESLint cho các file metadata đã thay đổi; kỳ vọng exit code 0.
3. Chạy `git diff --check`; kỳ vọng exit code 0.
4. Chạy production build bằng Node 22; kỳ vọng exit code 0 và tất cả storefront route được tạo thành công.
