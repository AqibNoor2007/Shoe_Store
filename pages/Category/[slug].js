import React from "react";
// import { useRouter } from "next/router";
import Waraper from "@/components/Wrapper";
import ProductsCards from "@/components/ProductsCards";

const Category = () => {
  // const router = useRouter();
  // const { slug } = router.query;
  return (
    <div className=" w-full md:py-20">
      <Waraper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Running shoes{" "}
          </div>
        </div>
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
    </div>
  );
};
export default Category;
