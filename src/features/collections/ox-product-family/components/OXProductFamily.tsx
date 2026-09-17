import { CardImageTitle } from "@/components/shared/card-image-title";
import Filter, { FilterMobileGroup } from "@/components/shared/filter";
import Wrapper from "@/components/shared/wrapper";
import { CollectionsPageData } from "../types/ox-product-family";
import { MarqueeText } from "@/components/shared/marquee-text";
import { ImageFrame } from "@/components/shared/image/image-frame";
import { ProductList } from "@/components/shared/product/product-list";
import { SectionTitle } from "@/components/shared/section-title/section-title";
import { SliderGallery } from "@/components/shared/slider-gallery";

interface OXProductFamilyProps {
  data: CollectionsPageData;
}

export function OXProductFamily({ data }: OXProductFamilyProps) {
  const { hero, editorial, products, otherCategories } = data;
  const filters = {
    availability: (
      <Filter
        variant="switch"
        label="In stock only"
        activeLabel="In Stock"
        defaultChecked={false}
        labelPosition="left"
        showActiveBadge
      />
    ),
    type: (
      <Filter
        items={[{ id: "accessories", label: "Accessories", count: 4 }]}
        title="Product"
        variant="type"
      />
    ),
    price: <Filter variant="price" min={0} max={274} step={1} currency="USD" />,
    sort: (
      <Filter
        variant="sort"
        items={[
          "featured",
          "most relevant",
          "best selling",
          "alphabetically, a-z",
          "alphabetically, z-a",
          "price, low to high",
          "price, high to low",
          "date, old to new",
          "date, new to old",
        ]}
      />
    ),
  };

  return (
    <div className="bg-neutral-100">
      <ImageFrame
        src={hero.imageSrc}
        alt={hero.imageAlt}
        header={hero.header}
        description={hero.description}
        headerSize="h1"
        textAlign="left"
        priority
        aspectRatio="aspect-[4/3] sm:aspect-[16/7] lg:aspect-[22/5]"
        sizes="100vw"
        containerClassName="w-full max-w-none sm:w-full xl:w-full"
        className="rounded-none border-0 shadow-none sm:rounded-none"
        imageClassName="object-center"
      />

      <Wrapper>
        <div className="grid w-full grid-cols-2 items-start gap-x-2 gap-y-1 py-3 max-sm:hidden sm:flex sm:gap-0">
          <div className="min-w-0 text-left sm:flex-1">
            {filters.availability}
          </div>

          <div className="contents sm:flex sm:flex-1 sm:items-start sm:justify-center sm:gap-2 sm:text-center">
            {filters.type}
            {filters.price}
          </div>

          <div className="min-w-0 text-right sm:flex-1">{filters.sort}</div>
        </div>

        <section className="pt-8" aria-labelledby="collection-products-heading">
          <FilterMobileGroup>
            {filters.availability}
            {filters.type}
            {filters.price}
            {filters.sort}
          </FilterMobileGroup>

          <div className="mb-7 flex items-center justify-between gap-4">
            <h2 id="collection-products-heading" className="sr-only">
              Board game inserts
            </h2>
            <p className="text-sm text-neutral-600">
              {products.pagination.totalItems} products
            </p>
          </div>

          <ProductList
            isShowed={false}
            products={products.data}
            columns={4}
            alignPagination="center"
            pagination={products.pagination}
            variantPagination="default"
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
              objectFit="contain"
              containerClassName="w-9 sm:w-12.5"
              className="max-tablet:text-[clamp(34px,5.3125vw,34px)] max-laptop:laptop:w-[clamp(52px,2.7083vw,52px)] rounded-none border-0 bg-transparent shadow-none sm:rounded-none"
            />
            <h2 className="max-mobile:text-[clamp(32px,2.0833vw,40px)] max-pc:text-[clamp(40px,2.5000vw,48px)] text-[48px] text-neutral-950 mt-2 max-mobile:px-10">
              {editorial.heading}
            </h2>
            {/* Thẻ p đã được chỉnh sửa */}
            <p className="max-mobile:text-[14px] text-[16px] max-mobile:w-[clamp(271px,83.7500vw,536px)] max-tablet:w-[clamp(700px,35.9375vw,368px)] max-laptop:w-[clamp(368px,35.5556vw,512px)] max-pc:w-[clamp(512px,33.3333vw,640px)] text-center mt-2 text-neutral-700">
              {editorial.description}
            </p>
          </div>
        </div>
      </SectionTitle>

      <SectionTitle
        title="Explore Other Categories"
        more={{ label: "view all categories", href: "#" }}
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
