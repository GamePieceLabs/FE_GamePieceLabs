"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const SCROLL_THRESHOLD = 320;

export function ScrollToTop(): React.JSX.Element | null {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = (): void => {
      setIsVisible(window.scrollY >= SCROLL_THRESHOLD);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  const handleScrollToTop = (): void => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";

    window.scrollTo({ top: 0, behavior });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      aria-label="Scroll to top"
      className="fixed right-4 bottom-4 z-50 size-14 rounded-2xl"
      onClick={handleScrollToTop}
      size="icon"
      type="button"
    >
      <ArrowUp
        aria-hidden="true"
        className="size-6 transition-transform duration-200 ease-out group-hover/button:-translate-y-1"
      />
    </Button>
  );
}
