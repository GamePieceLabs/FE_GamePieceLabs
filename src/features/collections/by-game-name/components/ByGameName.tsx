import { CardImageTitle } from "@/components/shared/card-image-title";
import { ImageFrame } from "@/components/shared/image/image-frame";
import { MarqueeText } from "@/components/shared/marquee-text";
import { ProductList } from "@/components/shared/product/product-list";
import { SectionTitle } from "@/components/shared/section-title/section-title";
import { SliderGallery } from "@/components/shared/slider-gallery";
import Wrapper from "@/components/shared/wrapper";
import type { ByGameNamePageData } from "@/features/collections/by-game-name/types/by-game-name";

interface ByGameNameProps {
  data: ByGameNamePageData;
}

const sortOptions = [
  "featured",
  "most relevant",
  "best selling",
  "alphabetically, a-z",
  "alphabetically, z-a",
  "price, low to high",
  "price, high to low",
  "date, old to new",
  "date, new to old",
] as const;

export function ByGameName({ data }: ByGameNameProps) {
  const { title, editorial, products, otherCategories } = data;

  return (
    <div className="bg-neutral-100">
      <Wrapper>
        <h1 className="type-h1 pb-8 text-center text-neutral-950">{title}</h1>

        <div className="grid w-full grid-cols-2 items-start gap-x-2 gap-y-1 py-3 max-sm:hidden sm:flex sm:gap-0">
          <div className="min-w-0 text-left sm:flex-1">fILTER SWITCH</div>

          <div className="contents sm:flex sm:flex-1 sm:items-start sm:justify-center sm:gap-2 sm:text-center">
            <span>FILTER TYPE</span>
            <span>FILTER PRICE</span>
          </div>

          <div className="min-w-0 text-right sm:flex-1">
            <span>FILTER SORT</span>
          </div>
        </div>

        <section className="pt-10" aria-labelledby="by-game-products-heading">
          MOBILE FILTER HERE
          <div className="mb-7 flex items-center justify-between gap-4">
            <h2 id="by-game-products-heading" className="sr-only">
              {title} products
            </h2>
            <p className="text-sm text-neutral-600">
              {products.pagination.totalItems} product
            </p>
          </div>
          <ProductList
            products={products.data}
            columns={4}
            alignPagination="center"
            pagination={products.pagination}
            variantPagination="simple"
            isShowed={false}
          />
        </section>
      </Wrapper>

      <MarqueeText
        title="Mastery is a never-ending exploration"
        speed={50}
        fontSize="text-8xl"
      />

      <SectionTitle>
        <div className="grid max-mobile:grid-cols-1 max-tablet:grid-cols-1 grid-cols-2 bg-white rounded-lg">
          <ImageFrame
            src={editorial.imageSrc}
            alt={editorial.imageAlt}
            aspectRatio="aspect-square"
            objectFit="contain"
            className="max-tablet:rounded-t-lg tablet:rounded-tl-lg tablet:rounded-bl-lg border-0 bg-transparent shadow-none"
          />

          <div className="flex flex-col justify-center items-center text-center max-tablet:my-15 max-mobile:my-10">
            <ImageFrame
              src={editorial.emblemSrc}
              alt={editorial.emblemAlt}
              aspectRatio="aspect-square"
              objectFit="cover"
              containerClassName="w-9 sm:w-12.5"
              className="max-tablet:text-[clamp(34px,5.3125vw,34px)] max-laptop:laptop:w-[clamp(52px,2.7083vw,52px)] rounded-none border-0 bg-transparent shadow-none sm:rounded-none"
            />
          </div>
        </div>
      </SectionTitle>

      <SectionTitle
        title="Explore Other Categories"
        more={{ label: "view all categories", href: "/collections" }}
        className="pb-16 sm:pb-20"
      >
        <SliderGallery>
          {otherCategories.map((category) => (
            <CardImageTitle
              key={category.href}
              {...category}
              prefix="/collections"
            />
          ))}
        </SliderGallery>
      </SectionTitle>
    </div>
  );
}
