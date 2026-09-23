export type BannerPageProp = {
  aspectRatio: string;
  imgSrc: string;
  title: string;
  description: string;
};

export default function SectionBanner({
  aspectRatio,
  imgSrc,
  title,
  description,
}: BannerPageProp) {
  return (
    <div
      className="relative h-auto w-full"
      style={{
        aspectRatio,
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

      <div
        className="
          relative h-full inset-0 z-10 flex flex-col gap-y-5 justify-center text-white
          px-[max(48px,calc((100vw-1600px)/2))] py-20 
          max-tablet:px-8 max-tablet:py-14
          max-mobile:text-center max-tablet:min-h-[400px] max-mobile:items-center max-mobile:px-5 max-mobile:py-10                              
          "
      >
        <h1
          className=" text-[60px] font-extrabold leading-[1.08] tracking-normal drop-shadow-sm 
                    max-mobile:text-[40px]"
        >
          {title}
        </h1>
        <p
          className="
            section-sub-text
            w-[800px] 
            max-pc:w-[clamp(600px,41.6667vw,800px)] 
            max-mobile:w-auto!
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
