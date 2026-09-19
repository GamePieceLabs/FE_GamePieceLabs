"use client";

import Link from "next/link";

import {
  CardImageTitle,
  CardImageTitleGrid,
} from "@/components/shared/card-image-title";
import { MarqueeText } from "@/components/shared/marquee-text";
import { featuredProducts } from "@/features/home/data/featured-products";
import { gameCategories } from "@/features/home/data/game-categories";
import { gearCategories } from "@/features/home/data/gear-categories";
import {
  playerReviewContentList,
  playerReviewImageList,
} from "@/features/home/data/player-reviews";
import { PlayerReviewsSection } from "@/components/shared/player-reviews-section";
import { CompanyLinksSection } from "@/features/home/components/company-links-section";
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
    <main className="bg-neutral-50/60">
      <SectionTitle ariaLabel="ImageSlider">
        <ImageSlider
          slides={imageSliderSlides}
          ariaLabel="Bộ sưu tập nổi bật"
        />
      </SectionTitle>

      <SectionTitle
        title="Choose Your Gear"
        more={{
          label: "Browse all categories",
          href: "/products",
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
        title="Mastery is a never-ending exploration"
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
            Clear Space, Clear Strategy
          </p>
          <p
            className={`section-title-text font-bold capitalize
                       !mt-[24px] mb-0 tracking-tight
                       max-pc:!mt-[1.2500vw]
                      `}
          >
            Maximize Your Game Time
          </p>

          <p
            className={`section-subtext mx-auto max-w-3xl text-pretty font-medium
                        mt-[32px] mb-[48px]
                        max-pc:mt-[1.6667vw] max-pc:mb-[2.5000vw]
                      `}
          >
            We all know the frustration of wasting hours of precious game time
            on game setup and teardown. With Laserox, you can set up in a snap
            and stay organized, no matter how complex the campaign gets.
          </p>
        </div>

        <ImageComparison
          imageOne="https://laserox.net/cdn/shop/files/Picture_201509_MH40S5_marbletableplant_2_jpg.png?v=1714735329&width=1000"
          imageTwo="https://laserox.net/cdn/shop/files/2024-05-03T132444.466.png?v=1714735542&width=1000"
        />
      </SectionTitle>

      <SectionTitle
        ariaLabel="FeaturedProducts"
        title="Featured Products"
        more={{ label: "View all", href: "/products" }}
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
          <h2 className="bg-gradient-to-b from-neutral-300 to-white bg-clip-text mobile:text-[40px] sm:text-[clamp(40px,10vw,192px)] inline-block transform mobile:scale-y-[1.2] sm:scale-100 font-black tracking-[-0.065em] whitespace-nowrap text-transparent text-nowrap">
            GAME PIECE LABS
          </h2>

          <div className="mt-5 flex max-w-3xl flex-col items-center">
            <h3 className="text-2xl leading-tight font-bold text-balance text-neutral-950 sm:text-3xl lg:text-4xl">
              From Our Table to Yours:
              <br />
              The Game Piece Labs Philosophy
            </h3>

            <p className="mt-7 max-w-4xl text-sm leading-relaxed font-medium text-pretty text-neutral-700 sm:mt-9 sm:text-lg lg:text-xl">
              We believe that the best gaming experiences are born from
              hassle-free setups and crystal-clear organization. We craft our
              organizers and accessories with precision and passion, using
              eco-friendly, hand-selected, premium materials. Prepare to
              transform how you play!
            </p>

            <Button
              asChild
              className="mt-8 h-14 rounded-full bg-neutral-950 px-10 text-base font-bold text-white hover:bg-neutral-800 focus-visible:ring-neutral-950 sm:mt-10 sm:h-16 sm:px-12 sm:text-lg"
            >
              <Link href="/about">Discover more</Link>
            </Button>
          </div>
        </div>
      </SectionTitle>

      <SectionTitle align="center">
        <ProductDemo />
      </SectionTitle>

      {/* 
      <VideoFrame
        type="youtube"
        src="https://www.youtube.com/embed/HjsGUuQsQOY?si=ZcxnS0Ln7VPw4BqD"
      /> */}

      <SectionTitle
        title="Browse By Game"
        more={{
          label: "View all games",
          href: "/browsebygame",
        }}
        align="left"
      >
        <CardImageTitleGrid>
          {gameCategories.map((game) => (
            <CardImageTitle key={game.title} {...game} prefix="/collections" />
          ))}
        </CardImageTitleGrid>
      </SectionTitle>

      <SectionTitle align="left">
        <PlayerReviewsSection
          variant="image"
          imageList={playerReviewImageList}
          contentList={playerReviewContentList}
        />
      </SectionTitle>

      <SectionTitle align="center">
        <OrderInstruction />
      </SectionTitle>

      <SectionTitle>
        <CompanyLinksSection />
      </SectionTitle>

      <SectionTitle title="Upcoming Products" align="center">
        <UpcomingProductsSection />
      </SectionTitle>
    </main>
  );
}
