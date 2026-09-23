# SectionBanner

Shared banner component for collection and browse pages.

## Props

- `aspectRatio`: CSS `aspect-ratio` value such as `"1800/525"`, `"2000/492"`, or `"16 / 9"`. This is applied through inline style so runtime values from page data work reliably.
- `imgSrc`: background image URL.
- `title`: banner heading text.
- `description`: banner supporting copy.

## Notes

- Do not build Tailwind aspect classes dynamically from `aspectRatio`; Tailwind cannot reliably generate runtime class names such as `aspect-${aspectRatio}`.
- Keep banner content short enough to fit within the image area on mobile and desktop.
