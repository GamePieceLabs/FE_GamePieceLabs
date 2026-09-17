# CardImageTitle

`CardImageTitleGrid` renders cards as a responsive grid. Use `SliderGallery`
to render the same cards in a horizontal Embla carousel.

In the carousel variant, each item has a responsive width (`75%`, `50%`,
`33.333%`, then `20%`). `CardImageTitle` remains responsible for the card's
own `aspectRatio`; do not set a height or aspect ratio on `CarouselContent`.
This keeps `next/image` with `fill` and `object-cover` constrained to the
intended card frame.

```tsx
<SliderGallery>
  <CardImageTitle aspectRatio="square" {...card} />
</SliderGallery>
```
