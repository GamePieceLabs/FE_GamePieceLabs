# ImageSlider

`ImageSlider` là component trình chiếu banner hình ảnh chính (Hero Image Carousel/Slider) chuyển cảnh fade, hỗ trợ tự động chuyển slide (`autoplay`), hiệu ứng nút điều hướng kính mờ thủy tinh (liquid glassmorphism) và nút kêu gọi hành động (Call To Action).

## Purpose

Tạo banner mở đầu ấn tượng cho Trang chủ, giới thiệu các bộ sưu tập hoặc chương trình khuyến mãi nổi bật kèm hình ảnh bắt mắt, phụ đề và nút bấm chuyển hướng.

## Use Cases

- Banner Hero chính trên Trang chủ (`src/app/(storefront)/page.tsx`).
- Trình chiếu sự kiện hoặc chiến dịch quảng bá bộ sưu tập mới.

## When to Use

- Cần banner lớn dạng carousel chuyển động mượt mà với nhiều slide.
- Cần tính năng tự động chuyển slide có thể tạm dừng hoặc điều chỉnh chu kỳ thời gian.
- Cần nút điều hướng phong cách Liquid Glass độc đáo ở góc dưới bên phải.

## When NOT to Use

- Thư viện ảnh thu nhỏ của chi tiết sản phẩm (dùng `ProductGallery`).
- Carousel đánh giá của người chơi (dùng `PlayerReviewsSection`).

## Import

```tsx
import {
  ImageSlider,
  type ImageSliderProps,
  type ImageSliderSlide,
} from "@/components/shared/image/image-slider";
```

## Props

| Prop | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `slides` | `readonly ImageSliderSlide[]` | Yes | — | Danh sách các slide trình chiếu |
| `autoplay` | `boolean` | No | `false` | Bật/tắt chế độ tự động chuyển slide |
| `autoplayInterval` | `number` | No | `10000` | Chu kỳ tự động chuyển slide tính bằng mili-giây (10 giây) |
| `ariaLabel` | `string` | No | `"Featured collections"` | Nhãn trợ năng cho carousel |
| `className` | `string` | No | — | Lớp CSS tùy biến cho container bao ngoài |

### `ImageSliderSlide` Interface

```ts
export interface ImageSliderSlide {
  id: string | number; // Định danh slide
  title: string;       // Tiêu đề lớn của slide
  subtitle?: string;   // Phụ đề mô tả ngắn
  imageSrc: string;    // Đường dẫn URL ảnh nền
  imageWidth: number;  // Chiều rộng ảnh gốc (px), bắt buộc > 0
  imageHeight: number; // Chiều cao ảnh gốc (px), bắt buộc > 0
  imageAlt: string;    // Văn bản mô tả ảnh cho accessibility
  ctaLabel: string;    // Nhãn trên nút bấm kêu gọi hành động
  ctaHref: string;     // Đường dẫn đích của nút CTA
}
```

## States

- **Autoplay Loop**: Khi `autoplay=true` và có từ 2 slide trở lên, đồng hồ đếm `setInterval` sẽ tự động chuyển slide tiếp theo sau mỗi `autoplayInterval` mili-giây. Tự động dọn dẹp interval khi unmount.
- **Single Slide vs Multi Slide**: Nếu chỉ có 1 slide, vô hiệu hóa tính năng loop và ẩn nút điều hướng. Nếu mảng rỗng `slides.length === 0`, component trả về `null`.
- **Crossfade**: Plugin `embla-carousel-fade` làm slide hiện tại mờ đi và slide kế tiếp hiện lên tại cùng vị trí, thay cho chuyển ngang. Ảnh chuyển bằng fade; tiêu đề và CTA vẫn chạy keyframe `image-slider-rise` khi slide được chọn, thông qua key active/idle. Nút điều hướng, kéo/vuốt, bàn phím và autoplay vẫn dùng Embla.
- **Motion**: Embla dùng `duration: 12` (tham số vật lý của Embla, không phải mili-giây). Khi bật `prefers-reduced-motion: reduce`, chuyển bằng `duration: 0` và tắt transition tỷ lệ khung cùng keyframe chữ.

## Responsive Behavior

- Mỗi item rộng `100%` khung carousel; desktop dùng tỷ lệ ảnh, tablet ép chiều cao hero bằng `max-tablet:h-[clamp(346.36px,40.7803vw,417.59px)]`. Section bọc `ImageSlider` bỏ padding-bottom để khoảng dưới banner không hiện thành mảng nền riêng.
- Khung ảnh dùng `aspect-ratio: imageWidth / imageHeight`. Chiều cao hiển thị bằng chiều rộng item × `imageHeight / imageWidth`.
- `imageWidth` và `imageHeight` là kích thước gốc, không phải kích thước hiển thị cố định. Khai báo đúng tỷ lệ để ảnh `fill` với `object-cover` không bị cắt.
- Các item căn trên (`items-start`) và kế thừa chiều cao của viewport carousel. Hàng carousel dùng tỷ lệ của slide active cùng `min-h-0` và transition `aspect-ratio` 250ms ease-in-out; riêng tablet có height clamp để hero không bị quá thấp. Viewport Embla (`data-slot=carousel-content`) là lớp duy nhất chịu trách nhiệm `overflow-hidden`, `rounded-xl` và shadow để các góc banner được cắt đồng bộ khi dùng fade.
- Khi chọn slide (nút điều hướng, kéo, bàn phím hoặc autoplay), tỷ lệ khung cập nhật theo `selectedSlideIndex`. Khi resize, CSS tự tính lại chiều cao theo chiều rộng mới, không cần đo DOM. Render ban đầu dùng tỷ lệ slide đầu tiên; danh sách rỗng không render carousel.
- Ví dụ: item rộng 1000px với ảnh 2000 × 800 sẽ cao 400px; ảnh 2000 × 1200 sẽ cao 600px.
- Overlay và nội dung vẫn định vị tuyệt đối bên trong khung ảnh.
- Mobile overlay không dùng full width; content được siết về `max-mobile:w-[min(368px,82vw)]` và căn giữa để heading gọn như block `prose` của Laserox.
- Mock data trang chủ đặt tại `src/features/home/data/image-slider-slides.ts`.
- Nút điều hướng Liquid Glass (Next/Prev) ẩn trên mobile và chỉ hiển thị ở góc phải dưới từ `sm:` trở lên.

## Basic Usage

```tsx
import { ImageSlider, type ImageSliderSlide } from "@/components/shared/image/image-slider";

const heroSlides: ImageSliderSlide[] = [
  {
    id: "nemesis-collection",
    title: "Nemesis: Khởi Đầu Hành Trình Sinh Tồn",
    subtitle: "Trọn bộ insert tối ưu không gian cho Nemesis và bản mở rộng Lockdown.",
    imageSrc: "/images/hero/nemesis-slide.jpg",
    imageWidth: 2000,
    imageHeight: 800,
    imageAlt: "Nemesis boardgame insert",
    ctaLabel: "Khám Phá Ngay",
    ctaHref: "/collections/nemesis",
  },
  {
    id: "catan-collection",
    title: "Catan: Nâng Tầm Đảo Trù Phú",
    subtitle: "Khay đựng tài nguyên và thẻ bài thông minh giúp setup ván đấu tức thì.",
    imageSrc: "/images/hero/catan-slide.jpg",
    imageWidth: 2000,
    imageHeight: 1200,
    imageAlt: "Catan boardgame insert",
    ctaLabel: "Xem Chi Tiết",
    ctaHref: "/collections/catan",
  },
];

export function HeroSection() {
  return <ImageSlider slides={heroSlides} />;
}
```

## Advanced Usage

### Tùy biến thời gian Autoplay và Class bao ngoài

```tsx
import { ImageSlider } from "@/components/shared/image/image-slider";

export function FastHeroSlider() {
  return (
    <ImageSlider
      slides={heroSlides}
      autoplay={true}
      autoplayInterval={6000} // Chuyển slide sau 6 giây
      ariaLabel="Khuyến mãi tháng này"
      className="rounded-2xl"
    />
  );
}
```

## Dependencies

### Internal

- `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselNext`, `CarouselPrevious`, `CarouselApi` từ `@/components/ui/carousel`
- `cn` từ `@/utils/cn`
- `image-slider.module.css` cho transition tỷ lệ khung và reduced motion

### External

- `next/image`
- `next/link`
- `embla-carousel-fade@8.6.0` (cùng phiên bản với Embla React); [tài liệu Fade](https://www.embla-carousel.com/docs/v8/plugins/fade).

## Accessibility

- Container carousel có thuộc tính `aria-label={ariaLabel}`.
- Slide đầu tiên được cấu hình `preload={index === 0}` giúp trình duyệt tải sớm ảnh đại diện quan trọng nhất.
- Hỗ trợ đầy đủ tương tác phím mũi tên và focus ring trắng tương phản trên nền tối.
- Slide không active có `aria-hidden` và `inert`, nên CTA ẩn không nhận focus hoặc click.

## Styling

- Lớp phủ gradient tối tăng cường độ tương phản văn bản: `bg-gradient-to-r from-black/65 via-black/35 to-transparent`.
- Nút bấm điều hướng kính lỏng (Liquid Glassmorphism):
  - Kính mờ: `backdrop-blur-xl backdrop-saturate-150`
  - Viền phát sáng: `border border-white/45 bg-white/15`
  - Đổ bóng phản quang: `shadow-[inset_0_1px_0_rgba(255,255,255,0.7),...]`
- Nút CTA màu trắng nổi bật với bo tròn pill `rounded-full bg-white text-neutral-950 font-bold`.
- Opacity của slide do plugin Fade quản lý. Bo góc và shadow gọn nằm ở viewport carousel thay vì từng slide item để tránh lộ 4 góc trong lúc các slide fade chồng lên nhau và tránh tạo mảng xám lớn dưới banner. CSS Module chuyển tỷ lệ khung trong 250ms và giữ keyframe `image-slider-rise` gốc (opacity 0 → 1, translateY 36px → 0).
- Keyframe chạy 300ms linear: tiêu đề bắt đầu ngay, subtitle có delay 100ms (class được giữ sẵn), CTA có delay 150ms.
- Ảnh đầu dùng preload; ảnh còn lại tải eager để giảm việc chờ tải khi chuyển slide lần đầu (đổi lại tải trước toàn bộ ảnh slider).
