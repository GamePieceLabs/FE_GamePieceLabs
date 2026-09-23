import BreadCrumbs from "@/components/shared/breadcrumbs";
import { PlayerReviewsSection } from "@/components/shared/player-reviews-section";
import { ProductList } from "@/components/shared/product/product-list";
import { SectionTitle } from "@/components/shared/section-title/section-title";
import { VideoFrame } from "@/components/shared/video-frame";
import FeatureList from "@/features/products/components/feature-list";
import ProductDetailsSummary from "@/features/products/components/product-details-summary";
import ProductImageGallery from "@/features/products/components/product-image-gallery";
import ProductNotFoundMessage from "@/features/products/components/product-not-found-message";
import ProductPurchasePanel from "@/features/products/components/product-purchase-panel";
import { getMockProductById } from "@/features/products/lib/mock-product-details";
import { getMockYouMayAlsoLikeProducts } from "@/features/products/lib/mock-you-may-also-like-products";
import CustomerReviewsSection from "@/features/reviews/components/customer-reviews-section";
import { getProductReviews } from "@/features/reviews/services/reviews-api";

interface ProductDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id: productId } = await params;
  const product = getMockProductById(productId);

  if (!product) {
    return <ProductNotFoundMessage />;
  }

  const reviews = getProductReviews(product.id);
  const youMayAlsoLikeProducts = getMockYouMayAlsoLikeProducts();

  return (
    <main className="min-h-screen bg-[#f7f7f7] px-4 py-5 text-neutral-950
                     max-mobile:px-0 
                     max-mobile:py-0 ">

      <div className="mx-auto md:w-[calc(100%-100px)]  max-w-[1580px] grid-cols-[1fr_auto_1fr]">
        <BreadCrumbs />
        
        <section className="grid gap-10 rounded-3xl bg-white p-4 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:p-10 xl:gap-16">
          <ProductImageGallery
            images={product.images}
            productName={product.name}
          />

          <div className="min-w-0 lg:py-1">
            <ProductDetailsSummary product={product} />
            {/* <ProductPurchasePanel /> */}
          </div>
        </section>
      </div>

      <SectionTitle
          title="Thông tin chi tiết"
          align="left"
          content="text"
        >
          <p className="w-fit section-sub-text">
            In Gloomhaven: Buttons & Bugs, you’re shrunk to the size of a mouse
            after a botched attempt to visit the powerful mage Hail, thrust into
            a miniaturized world of danger and chaos. Armed with a handful of
            double-sided cards and simplified yet strategic gameplay,
            you&apos;ll navigate intense, small-scale battles against enemies,
            leveling up as you try to return to normal size. With a compelling
            solo campaign and the beloved mechanics of Gloomhaven packed into a
            bite-sized experience, this adventure is perfect for those seeking
            epic challenges in a fraction of the space. Tame the chaos of
            Buttons & Bugs with our expertly crafted game organizer, designed to
            fit every figure, token, dial, and card perfectly inside the tiny
            game box. With everything neatly in place, you can shrink into your
            adventure and face Hail&apos;s enchanted trials without the hassle
            of setup. Get ready to dive into action in just a few easy moves—so
            you can focus on battling enemies and leveling up, instead of
            organizing your table. Some versions of the game come with bigger
            sized dials than the insert was designed for, resulting in only 3
            dials fitting out of the 5. Please take this into consideration when
            purchasing the insert. If your dials are bigger than these
            meaurements, only 3 will fit: 44.3mm diameter, 1.9mm thickness
            (cardboard only), 4.55mm thickness (cardboard+plastic button), 9.5mm
            diameter of plastic button. No lid-lift, the gamebox can be stored
            vertically. This is a third-party accessory designed by Laserox and
            officially licensed by Cephalofair Games. All product names are
            trademarks of their respective owners, which are in no way
            associated or affiliated with Laserox. This kit requires assembly.
            We advise the use of wood glue, which is sold separately.
          </p>
      </SectionTitle>

      <SectionTitle
          title="Đặc điểm nổi bật"
          align="left"
          className="pt-0"
          content="text"
        >
          <FeatureList features={product.features} />
      </SectionTitle>

      <section className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] 
                          pt-0
                          px-[max(48px,calc((100vw-1600px)/2))] py-20
                          max-tablet:px-8 max-tablet:py-14
                          max-mobile:px-5 max-mobile:py-10
                          lg:gap-20">
          <div>
            <h2 id="supported-games-heading" className="section-title-text !text-4xl text-left font-bold">
              Supports the following
            </h2>

            <ul className="mt-8 text-base text-neutral-950">
              <li className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 rounded-full bg-red-700"
                />
                <span>Gloomhaven: Buttons &amp; Bugs</span>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-[#ECECEC] px-12 
                          max-mobile:rounded-none 
                          max-mobile:border-x-0 
                          max-mobile:px-5">
            <table className="w-full table-fixed text-left max-mobile:block">
              <tbody className="max-mobile:block">
                <tr className="border-b border-neutral-300 max-mobile:block">
                  <th scope="row" className="w-1/3 py-7 pr-8 align-top font-bold max-mobile:block max-mobile:w-full max-mobile:pb-1 max-mobile:pr-0">
                    Nhà tài trợ
                  </th>
                  <td className="py-7 text-neutral-700 max-mobile:block max-mobile:pt-0">Cephalofair Games</td>
                </tr>
                <tr className="border-b border-neutral-300 max-mobile:block">
                  <th scope="row" className="py-7 pr-8 align-top font-bold max-mobile:block max-mobile:w-full max-mobile:pb-1 max-mobile:pr-0">
                    Cân nặng
                  </th>
                  <td className="py-7 text-neutral-700 max-mobile:block max-mobile:pt-0">800 g</td>
                </tr>
                <tr className="border-b border-neutral-300 max-mobile:block">
                  <th scope="row" className="py-7 pr-8 align-top font-bold max-mobile:block max-mobile:w-full max-mobile:pb-1 max-mobile:pr-0">
                    Kích cỡ (cm)
                  </th>
                  <td className="py-7 text-neutral-700 max-mobile:block max-mobile:pt-0">10.6x7.7x7.3</td>
                </tr>
                <tr className="border-b border-neutral-300 max-mobile:block">
                  <th scope="row" className="py-7 pr-8 align-top font-bold max-mobile:block max-mobile:w-full max-mobile:pb-1 max-mobile:pr-0">
                    Nguyên vật liệu
                  </th>
                  <td className="py-7 text-neutral-700 max-mobile:block max-mobile:pt-0">Plywood</td>
                </tr>
                <tr className="max-mobile:block">
                  <th scope="row" className="py-7 pr-8 align-top font-bold max-mobile:block max-mobile:w-full max-mobile:pb-1 max-mobile:pr-0">
                   Sách hướng dẫn về cách setup cho boardgame Gloomhaven Buttons &amp; Bugs Organizer 
                  </th>
                  <td className="py-7 max-mobile:block max-mobile:pt-0">
                    <a
                      href="https://cdn.shopify.com/s/files/1/0690/0413/2594/files/LGBB_guide_WEB.pdf?v=1727332384"
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-700 underline decoration-neutral-500 underline-offset-4 transition-colors hover:text-red-700 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
                    >
                      Tải
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </section>

        {/* {reviews && <CustomerReviewsSection reviews={reviews} />} */}

      {/* <VideoFrame
        src="https://www.youtube.com/embed/EEH1XhnkODo?si=EXio06y4u52nBs8r"
        type="youtube"
      /> */}

      {/* <PlayerReviewsSection /> */}

      <SectionTitle
        title="Có thể bạn cũng thích"
        align="left"
        className=""
        content="imageList"
      >
        <div className="col-span-full">
          <ProductList
            isShowed={false}
            products={youMayAlsoLikeProducts}
            columns={3}
            className="max-mobile:grid-cols-1"
            alignPagination="center"
            pagination={{
              currentPage: 1,
              pageSize: youMayAlsoLikeProducts.length,
              totalItems: youMayAlsoLikeProducts.length,
              totalPages: 1,
              hasNext: false,
              hasPrevious: false,
            }}
            variantPagination="default"
          />
        </div>
      </SectionTitle>
    </main>
  );
}
