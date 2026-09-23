"use client";
import { CardImageTitle } from "@/components/shared/card-image-title";
import Filter from "@/components/shared/filter/filter";
import { SheetFilter } from "@/components/shared/filter/sheet-filter";
import { FilterItem } from "@/components/shared/filter/type";
import { ImageFrame } from "@/components/shared/image/image-frame";
import { MarqueeText } from "@/components/shared/marquee-text";
import { ProductList } from "@/components/shared/product/product-list";
import { SectionTitle } from "@/components/shared/section-title/section-title";
import { SliderGallery } from "@/components/shared/slider-gallery";
import type { ByGameNamePageData } from "@/features/collections/by-game-name/types/by-game-name";
import { useState } from "react";

interface ByGameNameProps {
  data: ByGameNamePageData;
}

const productTypeItems: FilterItem[] = [
  { name: "Insert", value: "insert", count: 277 },
];

const sortFilterItems: FilterItem[] = [
  { name: "Nổi bật", value: "featured" },
  { name: "Phù hợp nhất", value: "relevant" },
  { name: "Bán chạy nhất", value: "best-selling" },
  { name: "Tên: A đến Z", value: "name-asc" },
  { name: "Tên: Z đến A", value: "name-desc" },
  { name: "Giá: Thấp đến Cao", value: "price-asc" },
  { name: "Giá: Cao đến Thấp", value: "price-desc" },
  { name: "Cũ nhất", value: "date-asc" },
  { name: "Mới nhất", value: "date-desc" },
];

const MINPRICE = 0;
const MAXPRICE = 5000000;

export function ByGameName({ data }: ByGameNameProps) {
  const { title, editorial, products, otherCategories } = data;

  // state for switch filter
  const [checked, setChecked] = useState<boolean>(false);

  // state for type filter
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleCheckboxChange = (selectedValues: string, checked: boolean) => {
    // Nhét thêm chọn item vào mảng ban đâu
    if (checked) {
      setSelectedValues((prev) => [...prev, selectedValues]);
      return;
    }
    setSelectedValues((prev) => prev.filter((item) => item !== selectedValues));
  };

  // state for price filter
  const [sliderPrice, setPrice] = useState<number[]>([MINPRICE, MAXPRICE]);
  const [, setMinPrice] = useState<number>();
  const [, setMaxPrice] = useState<number>();

  // cập nhật đồng bộ state slider với input max min
  const handlerSliderChange = (price: number[]) => {
    setPrice(price);
    setMinPrice(price?.[0]);
    setMaxPrice(price?.[1]);
  };

  // người dùng cập nhật input, cập nhật lại state slider
  const handleMinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
    setPrice((prevNumber) =>
      prevNumber.map((num, index) =>
        index === 0 ? Number(e.target.value) : num,
      ),
    );
  };

  // người dùng cập nhật input, cập nhật lại state slider
  const handleMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
    setPrice((prevNumber) =>
      prevNumber.map((num, index) =>
        index === 1 ? Number(e.target.value) : num,
      ),
    );
  };

  // state for sort filter
  const [selectedValue, setSelectedValue] = useState<string>();

  const handleSelectChange = (item: string) => {
    setSelectedValue(item);
  };

  return (
    <div className="bg-neutral-100">
      <div className="tablet:hidden sticky mt-10 top-20 flex justify-center left-1/2 z-20">
        <SheetFilter>
          <Filter
            label="Còn hàng"
            variant="switch"
            checked={checked}
            onCheckedChange={setChecked}
          />

          <Filter
            label="Sản phẩm"
            variant="type"
            items={productTypeItems}
            selectedValues={selectedValues}
            onValueChange={setSelectedValues}
            handleCheckboxChange={handleCheckboxChange}
          />

          <Filter
            label="Giá"
            variant="price"
            min={MINPRICE}
            max={MAXPRICE}
            step={50000}
            sliderPrice={sliderPrice}
            handleMinInput={handleMinInput}
            handleMaxInput={handleMaxInput}
            handleSliderChange={handlerSliderChange}
          />

          <Filter
            label="Bộ lọc"
            variant="sort"
            items={sortFilterItems}
            selectedValue={selectedValue}
            handleSelectChange={handleSelectChange}
          />
        </SheetFilter>
      </div>

      <SectionTitle>
        <div className="w-full hidden tablet:flex items-center justify-between py-3">
          {/* Sát bên trái */}
          <div className="w-1/3">
            <Filter
              label="Còn hàng"
              variant="switch"
              checked={checked}
              onCheckedChange={setChecked}
            />
          </div>

          {/* Chính giữa */}
          <div className="flex items-center gap-2 w-1/3">
            <Filter
              label="Sản phẩm"
              variant="type"
              items={productTypeItems}
              selectedValues={selectedValues}
              onValueChange={setSelectedValues}
              handleCheckboxChange={handleCheckboxChange}
            />

            <Filter
              label="Giá"
              variant="price"
              min={MINPRICE}
              max={MAXPRICE}
              step={50000}
              sliderPrice={sliderPrice}
              handleMinInput={handleMinInput}
              handleMaxInput={handleMaxInput}
              handleSliderChange={handlerSliderChange}
            />
          </div>

          {/* Sát bên phải */}
          <div className="w-1/3 text-end">
            <Filter
              label="Bộ lọc"
              variant="sort"
              items={sortFilterItems}
              selectedValue={selectedValue}
              handleSelectChange={handleSelectChange}
            />
          </div>
        </div>

        <div className="mb-7 flex items-center justify-between gap-4">
          <h2 id="collection-products-heading" className="sr-only">
            Board game inserts
          </h2>
          <p className="text-sm text-neutral-600">
            {products.pagination.totalItems} Sản phẩm
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
      </SectionTitle>

      <MarqueeText
        title="Khám phá và chinh phục không ngừng"
        speed={50}
        fontSize="text-8xl"
      />

      <SectionTitle>
        <div className="grid max-mobile:grid-cols-1 max-tablet:grid-cols-1 grid-cols-2 bg-white rounded-lg">
          <ImageFrame
            src={editorial.imageSrc}
            alt={editorial.imageAlt}
            aspectRatio="4/3"
            objectFit="contain"
            className="h-full max-tablet:rounded-t-lg tablet:rounded-tl-lg tablet:rounded-bl-lg border-0 bg-transparent shadow-none"
          />

          <div className="flex flex-col justify-center items-center text-center max-tablet:my-15 max-mobile:my-10">
            <ImageFrame
              src={editorial.emblemSrc}
              alt={editorial.emblemAlt}
              aspectRatio="1/1"
              objectFit="cover"
              containerClassName="w-9 sm:w-12.5"
              className="max-tablet:text-[clamp(34px,5.3125vw,34px)] max-laptop:laptop:w-[clamp(52px,2.7083vw,52px)] rounded-none border-0 bg-transparent shadow-none sm:rounded-none"
            />
          </div>
        </div>
      </SectionTitle>

      <SectionTitle
        title="Khám phá danh mục khác"
        more={{ label: "Xem tất cả danh mục", href: "/collections" }}
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
