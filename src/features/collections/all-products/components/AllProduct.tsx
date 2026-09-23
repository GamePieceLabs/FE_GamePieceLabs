"use client";
import {
  CardImageTitle,
  CardImageTitleGrid,
} from "@/components/shared/card-image-title";
import Filter from "@/components/shared/filter/filter";
import { ImageFrame } from "@/components/shared/image/image-frame";
import { MarqueeText } from "@/components/shared/marquee-text";
import { ProductList } from "@/components/shared/product/product-list";
import { SectionTitle } from "@/components/shared/section-title/section-title";
import { gearCategories } from "@/features/home/data/gear-categories";
import { useState } from "react";
import { CollectionsPageData } from "../types/all-product";
import { FilterItem } from "@/components/shared/filter/type";
import { SheetFilter } from "@/components/shared/filter/sheet-filter";

interface AllProductsProps {
  data: CollectionsPageData;
}

const productTypeItems: FilterItem[] = [
  { name: "Organizer/Insert Boardgame", value: "#", count: 1 },
  { name: "Bọc hộp Boardgame", value: "divider", count: 4 },
  { name: "Phụ kiện Boardgame", value: "insert", count: 277 },
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

export default function AllProducts({ data }: AllProductsProps) {
  const { hero, products } = data;

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
    <div className="bg-neutral-100 relative">
      <div
        className="relative w-full h-auto aspect-1800/525"
        style={{
          backgroundImage: `url(${hero.imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

        <div
          className="
          max-mobile:text-center 
          max-tablet:min-h-[400px]
          max-mobile:items-center
          px-[max(48px,calc((100vw-1600px)/2))] py-20 
          max-tablet:px-8 max-tablet:py-14
          max-mobile:px-5 max-mobile:py-10
          relative h-full inset-0 z-10 flex flex-col gap-y-5 justify-center text-white"
        >
          <h1
            className="text-nowrap text-[60px] font-extrabold leading-[1.08] tracking-normal drop-shadow-sm 
                     max-mobile:text-[40px]"
          >
            {hero.header}
          </h1>
          <p
            className="w-[800px] 

          max-pc:w-[clamp(600px,41.6667vw,800px)] 
          max-mobile:w-auto!
          section-sub-text
          "
          >
            {hero.description}
          </p>
        </div>
      </div>

      <SectionTitle title="Chọn phụ kiện của bạn">
        <CardImageTitleGrid className="grid! grid-cols-5! gap-5 max-laptop:grid-cols-3! max-tablet:grid-cols-2! max-mobile:grid-cols-1!">
          {gearCategories.map((category) => (
            <CardImageTitle
              key={category.title}
              {...category}
              prefix="/collections"
              isClicked={true}
              className="max-w-[300px]"
            />
          ))}
        </CardImageTitleGrid>
      </SectionTitle>

      <MarqueeText
        title="Mỗi lần chơi là một lần khám phá"
        speed={50}
        fontSize="text-8xl"
      />

      <div className="tablet:hidden mt-5 sticky top-20 flex justify-center left-1/2 z-20">
        <SheetFilter>
          <Filter
            label="Chỉ còn hàng"
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
            variant="sort"
            label="Sắp xếp theo"
            items={sortFilterItems}
            selectedValue={selectedValue}
            handleSelectChange={handleSelectChange}
          />
        </SheetFilter>
      </div>

      <SectionTitle>
        <div className="flex flex-col gap-5">
          <div className="w-full hidden tablet:flex items-center justify-between py-3">
            {/* Sát bên trái */}
            <div className="w-1/3">
              <Filter
                label="Chỉ còn hàng"
                variant="switch"
                checked={checked}
                onCheckedChange={setChecked}
              />
            </div>

            {/* Chính giữa */}
            <div className="flex justify-center grow items-center gap-2 w-1/3">
              <Filter
                variant="type"
                label="Sản phẩm"
                items={productTypeItems}
                selectedValues={selectedValues}
                onValueChange={setSelectedValues}
                handleCheckboxChange={handleCheckboxChange}
              />

              <Filter
                variant="price"
                label="Giá"
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
                variant="sort"
                label="Sắp xếp theo"
                items={sortFilterItems}
                selectedValue={selectedValue}
                handleSelectChange={handleSelectChange}
              />
            </div>
          </div>

          <ProductList
            products={products.data}
            columns={4}
            alignPagination="center"
            pagination={products.pagination}
            variantPagination="simple"
          />
        </div>
      </SectionTitle>
    </div>
  );
}
