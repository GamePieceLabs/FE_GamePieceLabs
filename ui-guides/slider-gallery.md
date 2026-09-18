# SliderGallery

`SliderGallery` hiển thị các phần tử con trong carousel ngang, kéo tự do và canh từ đầu. Component dùng chung cho các danh sách card cần cuộn ngang.

```tsx
import { SliderGallery } from "@/components/shared/slider-gallery";

<SliderGallery>
  <CardImageTitle {...card} />
</SliderGallery>;
```

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | Yes | Các slide cần hiển thị. |
| `className` | `string` | No | Class thêm vào carousel ngoài cùng. |
