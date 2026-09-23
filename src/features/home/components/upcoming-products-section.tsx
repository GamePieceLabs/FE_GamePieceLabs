import { CardImageTitle } from "@/components/shared/card-image-title";
import { SliderGallery } from "@/components/shared/slider-gallery";
import { upcomingProducts } from "@/features/home/data/upcoming-products";

const upcomingProductSizes =
  "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2.5rem), 380px";

export function UpcomingProductsSection() {
  return (
    <div className="mx-auto max-w-[1580px]">
      <SliderGallery>
        {upcomingProducts.map(({ id, ...product }) => (
          <CardImageTitle
            key={id}
            {...product}
            aspectRatio="square"
            sizes={upcomingProductSizes}
            isClicked={false}
          />
        ))}
      </SliderGallery>
    </div>
  );
}
