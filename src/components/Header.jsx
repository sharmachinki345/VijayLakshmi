import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import Slider from "./Slider";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-[#FFF6E0] rounded-lg px-0 md:px-10 lg:px-20">
      {/* ============Left========= */}
      <div className="hidden lg:w-1/2 lg:flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] ">
        <p className="text-[#2F2F2F] text-3xl md:text-4xl lg:text-5xl  font-semibold leading-tight md:leading-tight lg:leading-tight ">
          A Safe Space <br />
          For Little Minds
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-[#2F2F2F] text-base font-medium">
          <p>
            Creating a supportive environment <br className="hidden sm:block" />{" "}
            — where children can feel comfortable and understood.
          </p>
        </div>
        {/* <NavLink
          to="/contact"
          className="border-2 border-[#C7C7C7] flex items-center gap-2 bg-white px-8 py-3  rounded-[16px] text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Get in Touch <img className="w-3" src={assets.arrow_icon} alt="" />
        </NavLink> */}
      </div>
      {/* ============Right========= */}
      <div className="w-full lg:w-1/2 flex items-center">
        {/* <img
          className="w-full h-auto md:rounded-lg"
          src={assets.img12}
          alt=""
        /> */}
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Header;
