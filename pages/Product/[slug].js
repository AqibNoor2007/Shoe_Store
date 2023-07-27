import React from "react";
import Waraper from "@/components/Wrapper";
import ProductDetailsCrousel from "@/components/ProductDetailsCrousel";
ProductDetailsCrousel;
const ProductDetails = () => {
  return (
    <div className=" w-full md:py-20">
      <Waraper>
        <div>
          <div className=" flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/* left column start */}
            <div
              className=" w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full
        mx-auto lg:mx-0"
            >
              <ProductDetailsCrousel />
            </div>
            {/* left column end */}

            {/* right column start */}
            <div className=" flex-[1] py-0">
              <div className=" text-[34px] font-semibold mb-2">
                Jordan Retro 6.6
              </div>
              <div className=" text-lg font-semibold mb-5">Golf Shoes</div>
              <div className=" text-lg font-semibold]">MPR : $ 19 656.00</div>
              <div className=" text-md font-medium text-black/[0.5]">
                incl. of taxes
              </div>
              <div className="text-md font-medium text-black/[0.5] md-20">
                {"(Also include all applicable duties)"}
              </div>
            </div>
            {/* product size */}
            <div className=" mb-10 ">
              <div className=" flex justify-between mb-2">
                <div className=" text-md font-semibold">Select Size</div>
                <div className=" text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
      </Waraper>
    </div>
  );
};

export default ProductDetails;
