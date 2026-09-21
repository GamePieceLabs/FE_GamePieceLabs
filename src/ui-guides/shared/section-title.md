# SectionTitle

`SectionTitle` là wrapper ngữ nghĩa cho các khối section trong storefront. Component không tự chọn layout grid, slider hay split; người viết màn hình chủ động ghép heading và layout cần thiết bên trong `children`.

## Purpose

Cung cấp một thẻ `<section>` dùng chung với gutter, chiều rộng và accessibility nhất quán, trong khi vẫn để từng màn hình tự quyết định bố cục bên trong.

## Styling

`SectionTitle` sử dụng Less source tại `src/components/shared/less/section-title.less`. Lệnh `npm run styles:less` quét toàn bộ file `.less` trong `src/components/shared/less` và biên dịch chúng vào `src/components/shared/css`, giữ nguyên cấu trúc thư mục; `section-title.less` trở thành `section-title.module.css`. Wrapper nhận style scope cục bộ qua `styles.root`. Khi chạy `npm run dev`, watcher sẽ biên dịch lại sau mỗi lần lưu file Less; `npm run build` cũng tự biên dịch một lần trước khi build. Nếu một Less source bị xóa, CSS output có nhãn generated tương ứng sẽ được xóa; nếu CSS output bị xóa trong khi Less source còn tồn tại, watcher sẽ tạo lại nó.

Tên class của CSS Module dùng camelCase để có thể truy cập bằng dot notation, ví dụ `.sectionTitle` trong Less sẽ dùng là `styles.sectionTitle` trong component. Với class có dấu gạch nối, phải dùng bracket notation như `styles["section-title"]`.

### Responsive horizontal padding

Wrapper ngoài cùng của `SectionTitle` dùng cùng một gutter cho toàn bộ section, không chỉ riêng từng child:

```tsx
px-[max(24px,calc((100vw-1580px)/2))] py-[80px]
```

Công thức này giữ nội dung section rộng tối đa khoảng `1580px` ở desktop và chỉ co lại khi viewport nhỏ hơn container. Khi viewport nhỏ, gutter tối thiểu là `24px`. Cách này tránh việc dùng `vw` thuần làm padding ngang quá lớn ở laptop/desktop hẹp, khiến banner hoặc grid bị ép nhỏ dù màn hình vẫn đủ chỗ hiển thị.

Các layout dạng lưới (`content` mặc định hoặc `imageList`) đặt `mb-6 sm:mb-10` trên `SectionHeading` để tạo khoảng cách giữa tiêu đề và grid children.

## Use Cases

- Các khối phân đoạn trên Trang chủ (`upcoming-products-section`, `company-links-section`).
- Khối danh mục hoặc giới thiệu trên các trang bộ sưu tập (`board-game-inserts`, `by-game-name`, `ox-product-family`, `tokens`).
- Khối sản phẩm liên quan hoặc thông tin bổ sung trên trang Chi tiết sản phẩm.

## When to Use

- Cần một section chuẩn có tiêu đề kết nối accessibility qua `aria-labelledby`.
- Cần tự ghép layout bên trong section, chẳng hạn `SectionHeading` + `CardImageTitleGrid`, slider, hoặc một layout split riêng.

## When NOT to Use

- Chỉ cần một thẻ tiêu đề nhỏ đơn giản không cần bao bọc thẻ `<section>` lớn (dùng `SectionHeading` hoặc `StoreSectionHeading`).

## Import

```tsx
import {
  SectionTitle,
  type SectionTitleProps,
  type SectionTitleMoreProps,
  type SectionTitleSplitProps,
  type SectionTitleHorizonSplitProps,
  type SectionTitleVerticalSplitProps,
  type SectionTitleAlign,
  type SectionTitleHeadingLevel,
  type SectionTitleOrientation,
  type SectionTitleMore,
} from "@/components/shared/section-title";
```

## Props

`SectionTitleProps` vẫn tương thích với các props layout cũ, nhưng `SectionTitle` không đọc `content`, `orientation` hay `contentPosition` để quyết định giao diện. Các props này chỉ nên dùng ở component layout mà màn hình đặt trong `children`.

### 1. Khi `content?: "imageList" | "text"` (`SectionTitleMoreProps`)

| Prop | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `title` | `string` | Yes | — | Tiêu đề của section |
| `children` | `ReactNode` | Yes | — | Nội dung bên dưới tiêu đề (các thẻ `CardImageTitle` hoặc đoạn văn bản) |
| `content` | `"imageList"` \| `"text"` | No | `"imageList"` | Loại layout nội dung |
| `more` | `SectionTitleMore` (`{ label?: string; href?: string }`) | No | — | Cấu hình liên kết xem thêm với mũi tên tròn |
| `align` | `SectionTitleAlign` (`"left"` \| `"center"` \| `"right"`) | No | `"left"` | Căn chỉnh vị trí tiêu đề |
| `orientation` | `SectionTitleOrientation` (`"horizon"` \| `"vertical"`) | No | `"horizon"` | Bố trí tiêu đề và nút 'more': nằm ngang cùng hàng (`horizon`) hoặc xếp dọc (`vertical`) |
| `className` | `string` | No | — | Lớp CSS tùy biến cho thẻ `<section>` |
| `wrapperClassName` | `string` | No | — | Lớp CSS tùy biến cho wrapper ngoài cùng của `SectionTitle` |

### 2. Khi `content="split"` (`SectionTitleSplitProps`)

Chia làm 2 biến thể theo `orientation`:

#### Biến thể ngang (`orientation="horizon"` hoặc mặc định - `SectionTitleHorizonSplitProps`)

| Prop | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `content` | `"split"` | Yes | — | Định danh chế độ split |
| `children` | `ReactNode` | Yes | — | Khối nội dung văn bản bên cạnh ảnh |
| `image` | `{ src: string; alt: string; aspectRatio?: string }` | Yes | — | Thông tin hình ảnh bên cạnh |
| `contentPosition` | `"left"` \| `"right"` | No | `"right"` | Vị trí của khối chữ `children` so với ảnh |
| `orientation` | `"horizon"` | No | `"horizon"` | Định hướng bố cục ngang |
| `className` | `string` | No | — | Lớp CSS tùy biến cho thẻ section |
| `wrapperClassName` | `string` | No | — | Lớp CSS tùy biến cho wrapper ngoài cùng của `SectionTitle` |

#### Biến thể dọc (`orientation="vertical"` - `SectionTitleVerticalSplitProps`)

| Prop | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `content` | `"split"` | Yes | — | Định danh chế độ split |
| `orientation` | `"vertical"` | Yes | — | Định hướng bố cục dọc |
| `children` | `ReactNode` | Yes | — | Nội dung bên trong section |
| `title` | `string` | No | — | Tiêu đề section |
| `ariaLabel` | `string` | No | — | Nhãn trợ năng khi không có `title` |
| `more` | `SectionTitleMore` | No | — | Nút liên kết xem thêm |
| `align` | `SectionTitleAlign` | No | `"left"` | Căn lề tiêu đề |
| `className` | `string` | No | — | Lớp CSS tùy biến |
| `wrapperClassName` | `string` | No | — | Lớp CSS tùy biến cho wrapper ngoài cùng của `SectionTitle` |

## Composing a layout

```tsx
<SectionTitle title="Browse By Game">
  <SectionHeading title="Browse By Game" titleId="browse-by-game-title" />
  <SliderGallery>
    <CardImageTitle {...game} />
  </SliderGallery>
</SectionTitle>
```

## Basic Usage

### Layout danh mục thẻ

```tsx
import {
  createSectionTitleId,
  SectionHeading,
  SectionTitle,
} from "@/components/shared/section-title";
import {
  CardImageTitle,
  CardImageTitleGrid,
} from "@/components/shared/card-image-title";

export function CategoriesDemo() {
  const title = "Khám phá theo danh mục";
  const titleId = createSectionTitleId(title);

  return (
    <SectionTitle
      title={title}
    >
      <SectionHeading
        title={title}
        titleId={titleId}
        more={{ label: "Xem tất cả", href: "/collections" }}
        className="mb-6 sm:mb-10"
      />
      <CardImageTitleGrid>
        <CardImageTitle
          title="Board Game Inserts"
          imageSrc="/images/insert-cat.jpg"
          imageAlt="Inserts"
          href="/collections/inserts"
          isClicked
        />
        <CardImageTitle
          title="Token Nâng Cấp"
          imageSrc="/images/token-cat.jpg"
          imageAlt="Tokens"
          href="/collections/tokens"
          isClicked
        />
      </CardImageTitleGrid>
    </SectionTitle>
  );
}
```

## Advanced Usage

### Layout split (ảnh và văn bản)

```tsx
import { SectionTitle } from "@/components/shared/section-title";

export function StorySection() {
  return (
    <SectionTitle ariaLabel="Workshop story">
      <div className="space-y-4">
        <h3 className="type-h3">Công nghệ in 3D chính xác cao</h3>
        <p className="type-prose text-neutral-600">
          Mỗi sản phẩm đều được thiết kế tỉ mỉ, tối ưu từng milimet nhằm bảo vệ trọn vẹn các thành phần boardgame của bạn.
        </p>
      </div>
    </SectionTitle>
  );
}
```

## Heading level

`headingLevel` accepts `"h1"` through `"h6"` and defaults to `"h2"`. It controls both the semantic tag and the Tailwind size utility:

| Level | Tailwind class |
| --- | --- |
| `h1` | `text-5xl` |
| `h2` | `text-4xl` |
| `h3` | `text-3xl` |
| `h4` | `text-2xl` |
| `h5` | `text-xl` |
| `h6` | `text-lg` |

Use `"h1"` only for the page's single primary title and use lower levels in document order for subsequent sections.

```tsx
<SectionTitle title="Board game inserts" headingLevel="h1">
  {children}
</SectionTitle>
```

## Accessibility

- Khi có `title`, component tự động sinh `id` và dùng `<section aria-labelledby={titleId}>`. Khi không có title, truyền `ariaLabel` để gắn nhãn cho section.

## Implementation Notes

- Component chỉ render một `<section>`; toàn bộ layout nội dung thuộc về `children`.
- Wrapper dùng `bg-[var(--storefront-surface)]` để các section storefront cùng nền với header/layout.
- `ariaLabel="ImageSlider"` bỏ padding top để hero nằm sát header theo thiết kế; padding bottom vẫn giữ section spacing mặc định.
