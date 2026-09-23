"use client";

import Link from "next/link";

import { CardImageTitle } from "@/components/shared/card-image-title";
import { MarqueeText } from "@/components/shared/marquee-text";
import { featuredProducts } from "@/features/home/data/featured-products";
import { gameCategories } from "@/features/home/data/game-categories";
import { gearCategories } from "@/features/home/data/gear-categories";
import { UpcomingProductsSection } from "@/features/home/components/upcoming-products-section";
import { OrderInstruction } from "@/features/home/components/order-instruction";
import { ImageSlider } from "@/components/shared/image/image-slider";
import { imageSliderSlides } from "@/features/home/data/image-slider-slides";
import { ImageComparison } from "@/components/shared/image/image-comparision";
import { ProductGallery } from "@/components/shared/product/product-gallery";
import { Button } from "@/components/ui/button";
import { ProductDemo } from "@/features/home/components/product-demo";
import { SliderGallery } from "@/components/shared/slider-gallery";
import { SectionTitle } from "@/components/shared/section-title/section-title";

export default function StorefrontHomePage() {
  return (
    <main className="bg-[var(--storefront-surface)]">
      <SectionTitle ariaLabel="ImageSlider">
        <ImageSlider slides={imageSliderSlides} />
      </SectionTitle>

      <SectionTitle
        title="Chọn phụ kiện của bạn"
        more={{
          label: "Xem tất cả danh mục",
          href: "/collections/all-products",
        }}
      >
        <SliderGallery>
          {gearCategories.map((category) => (
            <CardImageTitle
              key={category.title}
              {...category}
              prefix="/collections"
              isClicked={true}
            />
          ))}
        </SliderGallery>
      </SectionTitle>

      <MarqueeText
        title="Mỗi lần chơi là một lần khám phá"
        speed={30}
        fontSize="text-8xl"
        className="pb-20
                   max-tablet:pb-10
                  "
      />

      <SectionTitle ariaLabel="ComparasionImage">
        <div className="space-y-3 text-center sm:space-y-4">
          <p
            className={`
            section-subtext font-bold capitalize m-auto
            `}
          >
            Gọn bàn chơi, rõ chiến thuật
          </p>
          <p
            className={`section-title-text font-bold capitalize
                       !mt-[24px] mb-0 tracking-tight
                       max-pc:!mt-[1.2500vw]
                      `}
          >
            Tối đa thời gian nhập cuộc
          </p>

          <p
            className={`section-subtext mx-auto max-w-3xl text-pretty font-medium
                        mt-[32px] mb-[48px]
                        max-pc:mt-[1.6667vw] max-pc:mb-[2.5000vw]
                      `}
          >
            Không ai muốn mất hàng giờ chỉ để sắp xếp và thu dọn bàn chơi. Với
            Game Piece Labs, mọi thứ vào đúng vị trí nhanh hơn, gọn hơn, để bạn
            tập trung vào chiến thuật và tận hưởng trọn vẹn từng ván.
          </p>
        </div>

        <ImageComparison
          imageOne="/images/laserox/Picture_201509_MH40S5_marbletableplant_2_jpg.png"
          imageTwo="/images/laserox/2024-05-03T132444.466.png"
        />
      </SectionTitle>

      <SectionTitle
        ariaLabel="FeaturedProducts"
        title="Sản phẩm nổi bật"
        more={{ label: "Xem tất cả sản phẩm", href: "/products" }}
      >
        <div className="col-span-full">
          <ProductGallery type="featured" images={featuredProducts} />
        </div>
      </SectionTitle>

      <SectionTitle
        ariaLabel="Brand"
        align="center"
        className="overflow-hidden"
      >
        <div className="flex flex-col items-center text-center">
          <h2
            className="bg-gradient-to-b from-neutral-300 to-white bg-clip-text 
                        max-mobile:text-[48px] sm:text-[clamp(48px,12.5000vw,240px)] 
                        inline-block transform mobile:scale-y-[1.2] 
                        sm:scale-100 font-black tracking-[-0.065em] whitespace-nowrap text-transparent text-nowrap"
          >
            GamePiece Labs
          </h2>

          <div className="mt-5 flex max-w-3xl flex-col items-center">
            <h3
              className="leading-tight font-bold text-balance text-neutral-950 
                           text-2xl 
                           sm:text-3xl 
                           lg:text-4xl"
            >
              Từ bàn chơi của chúng tôi
              <br />
              đến trải nghiệm của bạn
            </h3>

            <p
              className=" leading-relaxed font-medium text-pretty text-neutral-700 
                          text-sm mt-7 max-w-4xl 
                          sm:text-lg sm:mt-9
                          lg:text-xl"
            >
              Chúng tôi tin rằng một ván chơi hay bắt đầu từ cách sắp xếp gọn
              gàng và chuẩn bị thật nhẹ nhàng. Game Piece Labs tạo ra organizer
              và phụ kiện với sự tỉ mỉ, đam mê cùng những chất liệu cao cấp,
              thân thiện hơn với môi trường. Hãy sẵn sàng nâng tầm cách bạn chơi
              boardgame.
            </p>

            <Button
              asChild
              className="mt-8 h-14 rounded-full bg-neutral-950 px-10 text-base font-bold text-white hover:bg-neutral-800 focus-visible:ring-neutral-950 sm:mt-10 sm:h-16 sm:px-12 sm:text-lg"
            >
              <Link href="/about">Khám phá thêm</Link>
            </Button>
          </div>
        </div>
      </SectionTitle>

      <SectionTitle ariaLabel="ProductDemo" align="center">
        <ProductDemo />
      </SectionTitle>

      <SectionTitle
        title="Tìm kiếm theo trò chơi"
        ariaLabel="BrowseByGame"
        more={{
          label: "Xem tất cả trò chơi",
          href: "/browse-by-game",
        }}
        align="left"
      >
        <SliderGallery>
          {gameCategories.map((game) => (
            <CardImageTitle key={game.title} {...game} prefix="/collections" />
          ))}
        </SliderGallery>
      </SectionTitle>

      <SectionTitle align="center">
        <OrderInstruction />
      </SectionTitle>

      <SectionTitle title="Sản phẩm mới ra mắt" align="center">
        <UpcomingProductsSection />
      </SectionTitle>
    </main>
  );
}

{
  /* <SectionTitle title="What Our Players Said" ariaLabel="WOPS" align="left">
        <PlayerReviewsSection
          variant="image"
          imageList={playerReviewImageList}
          contentList={playerReviewContentList}
        />
      </SectionTitle> */
}

{
  /* <SectionTitle>
        <CompanyLinksSection />
      </SectionTitle> */
}

{
  /* 
      <VideoFrame
        type="youtube"
        src="https://www.youtube.com/embed/HjsGUuQsQOY?si=ZcxnS0Ln7VPw4BqD"
      /> */
}
