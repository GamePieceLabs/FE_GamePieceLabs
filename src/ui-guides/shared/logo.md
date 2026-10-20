# Logo

`Logo` là component hiển thị biểu trưng nhận diện thương hiệu của Game Piece Labs bằng ảnh PNG đầy đủ, đã chứa tên thương hiệu và phụ đề, đóng vai trò là liên kết điều hướng về Trang chủ.

## Purpose

Cung cấp logo chuẩn hóa cho toàn bộ website (Header, Footer, các trang xác thực hoặc trang thông báo) với kích thước và khoảng cách responsive đồng nhất.

## Use Cases

- Thanh tiêu đề chính của trang web (`site-header.tsx`).
- Chân trang (`site-footer.tsx`).
- Trang bảo trì hoặc trang lỗi 404 / 500.

## When to Use

- Bất kỳ nơi nào cần hiển thị thương hiệu Game Piece Labs có kèm liên kết dẫn về Trang chủ (`/`).

## When NOT to Use

- Chỉ cần ảnh thương hiệu không có liên kết (hãy dùng `<Image>` trực tiếp với asset `/brand/game-piece-labs-logo-horizontal.png`).

## Import

```tsx
import { Logo } from "@/components/shared/logo";
```

## Props

| Prop | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `className` | `string` | No | — | Lớp CSS tùy biến cho thẻ bao ngoài `<Link>` |
| `imageClassName` | `string` | No | — | Lớp CSS tùy biến cho ảnh logo `<Image>` |

## Responsive Behavior

- Dùng **Desktop First** như các trang About/Contact: class mặc định cho desktop, `max-*` ghi đè cho màn hình nhỏ.
- **Màn hình lớn (`> 1920px`)**: ảnh ngang `/brand/game-piece-labs-logo-horizontal.png` (2030 × 775px), cao cố định `104px`, rộng khoảng `273px`.
- **PC (`<= 1920px`)**: ảnh ngang, `max-pc:h-[96px]`, rộng khoảng `252px`.
- **Tablet (`<= 1024px`)**: ảnh ngang, `max-tablet:h-[56px]`, rộng khoảng `147px`.
- **Mobile (`<= 640px`)**: tiếp tục dùng ảnh ngang, cao cố định `56px`, rộng khoảng `147px`.
- Chỉ dùng custom variant trong `src/app/globals.css` theo Desktop First: `max-pc` → `max-tablet` → `max-mobile`. Không dùng breakpoint mặc định `sm/md/lg/xl/2xl`, `clamp()` hoặc đơn vị `vw` cho kích thước logo.
- Mỗi nhóm class có breakpoint khác nhau được truyền thành một đối số riêng trong `cn()` và đặt trên dòng riêng để dễ đọc.
- Component chỉ render một ảnh ngang cho tất cả breakpoint, tránh tải hai asset logo song song.
- Header desktop cao 112px; header mobile/tablet cao 64px.
- Khi tùy biến, dùng kích thước pixel cố định theo Desktop First và giữ `w-auto`. `imageClassName` áp dụng cho cả hai ảnh; các class chọn biến thể được giữ nội bộ.

## Basic Usage

```tsx
import { Logo } from "@/components/shared/logo";

export function HeaderBar() {
  return (
    <header className="flex h-16 items-center px-4">
      <Logo />
    </header>
  );
}
```

## Advanced Usage

### Tùy biến kích thước cho Footer hoặc Banner lớn

```tsx
import { Logo } from "@/components/shared/logo";

export function FooterBranding() {
  return (
    <div className="py-8">
      <Logo
        className="opacity-90 hover:opacity-100"
        imageClassName="
          h-[120px]
          max-pc:h-[112px]
          max-tablet:h-[96px]
          max-mobile:h-[80px]
        "
      />
    </div>
  );
}
```

## Dependencies

### Internal

- `cn` từ `@/utils/cn`

### External

- `next/image`
- `next/link`

## Accessibility

- Thẻ `<Link>` được cấu hình thuộc tính trợ năng `aria-label="Game Piece Labs - Trang chủ"`.
- Ảnh logo có thuộc tính `alt="Game Piece Labs - Phụ kiện boardgame"`.
- Hỗ trợ đường viền focus cho bàn phím: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4`.

## Styling

- Tên thương hiệu và phụ đề nằm trong ảnh; không render thêm text trùng lặp.
- `object-contain`, `w-auto` và kích thước gốc giữ đúng tỷ lệ ảnh. `sizes` của ảnh ngang lần lượt là 147px, 252px và 273px theo breakpoint.
- Tải ảnh ưu tiên (`loading="eager"`) để tối ưu chỉ số LCP (Largest Contentful Paint) trên header.

## Implementation Notes

- Ảnh ngang: `/brand/game-piece-labs-logo-horizontal.png`.
- Favicon được tạo từ `/brand/game-piece-labs.ico` và lưu tại `src/app/favicon.ico` theo convention Next.js, gồm các cỡ 16, 32, 48, 64 và 256px.
