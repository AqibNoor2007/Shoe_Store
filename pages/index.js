import HeroBannerSection from "@/components/HeroBannerSection";
import ProductsCards from "@/components/ProductsCards";
import Waraper from "@/components/Wrapper";

HeroBannerSection;

export default function Home() {
  return (
    <>
      <main className="">
        <HeroBannerSection />
        <Waraper>
          {/* heading and paragraph start */}
          <div className=" text-center max-w-[800px]  mx-auto my-[50px] md:my-[80px]">
            <div className=" text-[28px] md:text-[34px] mb-5 font-semibold  leading-tight">
              Cushioning For Your Miles
            </div>
            <div className="text-md md:text-xl">
              A Lightweight Nike ZoomX midsole is combined with increased stach
              height to help provide Cushioning during extended stretches of
              running .
            </div>
          </div>
          {/* heading and paragraph end */}
          <div
            className=" grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 
          px-5 md:px-0"
          >
            <ProductsCards />
            <ProductsCards />

            <ProductsCards />
            <ProductsCards />
            <ProductsCards />
            <ProductsCards />
          </div>
        </Waraper>
      </main>
    </>
  );
}
