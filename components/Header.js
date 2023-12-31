import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import Waraper from "./Wrapper";
import { BsCart } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";

function Header() {
  const [mobilMenu, setMobilMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavBar = () => {
    if (window.scrollY > 100) {
      console.log("if");
      // console.log(lastScrollY);
      // if (window.scrollY < lastScrollY && !mobilMenu) {
      setShow("-translate-y-[80px]");
      // console.log(lastScrollY)
      // } else {
      //   setShow("shadow-sm");
      // }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between 
       z-20 static top-0 transition-transform duration-300 ${show}`}
    >
      <Waraper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <img src="/logo.svg" className=" w-[40px] md:w-[60px]" />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {mobilMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobilMenu={setMobilMenu}
          />
        )}
        <div className="flex items-center gap-2 text-black">
          {/* Icon start */}
          <div
            className=" w-8 md:w-12 h-8 md:h-12 flex justify-center items-center rounded-full hover:bg-black/[0.03]
          cursor-pointer relative"
          >
            <IoMdHeartEmpty className=" text-[19px] md:text-[24px]" />
            <div
              className=" h-[14px] md:h-[18px]  min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 
            absolute top-1 left-5  md:left-7 text-white text-[10px] md:text-[12px] flex justify-center
            items-center px-[2px] md:px-[5px]"
            >
              51
            </div>
          </div>
          <div
            className=" w-8 md:w-12 h-8 md:h-12 flex justify-center items-center rounded-full hover:bg-black/[0.05]
          cursor-pointer relative"
          >
            <BsCart className=" text-[15px] md:text-[20px]" />
            <div
              className=" h-[14px] md:h-[18px]  min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 
            absolute top-1 left-5  md:left-7 text-white text-[10px] md:text-[12px] flex justify-center
            items-center px-[2px] md:px-[5px]"
            >
              5
            </div>
            <button>Log out </button>
          </div>

          {/* Icon End */}

          {/* Mobile Menu start */}
          <div
            className=" w-8 md:w-12 h-8 md:h-12 flex justify-center items-center rounded-full hover:bg-black/[0.05]
          cursor-pointer relative -mr-2"
          >
            {mobilMenu ? (
              <VscChromeClose
                className=" text-[16px]"
                onClick={() => setMobilMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className=" text-[16px]"
                onClick={() => setMobilMenu(true)}
              />
            )}
          </div>
          {/* Mobile Menu End */}
        </div>
      </Waraper>
    </header>
  );
}

export default Header;
