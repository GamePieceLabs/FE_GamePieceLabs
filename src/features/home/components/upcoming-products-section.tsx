import {
  CardImageTitle,
  CardImageTitleGrid,
} from "@/components/shared/card-image-title";
import { upcomingProducts } from "@/features/home/data/upcoming-products";

const upcomingProductSizes =
  "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2.5rem), 380px";


export function UpcomingProductsSection() {
  return (
    <div className="mx-auto max-w-[1350px]">
      <CardImageTitleGrid isScroll>
        {upcomingProducts.map(({ id, ...product }) => (
          <CardImageTitle
            key={id}
            {...product}
            aspectRatio="square"
            sizes={upcomingProductSizes}
            isClicked
          />
        ))}
      </CardImageTitleGrid>
    </div>
  );
}
