# ScrollToTop

`ScrollToTop` renders a 56px fixed, square icon-only shadcn button with rounded corners after the visitor has scrolled 320px down the page. It has a short bounce-in keyframe on entry, a subtle top highlight, and a lifted hover state with an animated arrow.

It is intended to be composed once in an application shell, for example the storefront layout:

```tsx
import { ScrollToTop } from "@/components/shared/scroll-to-top";

<ScrollToTop />;
```

Selecting the button scrolls the window to the top smoothly. The component switches to an immediate scroll and disables its entry animation when the visitor prefers reduced motion.

The button provides its own accessible label, so it requires no additional visible text.
