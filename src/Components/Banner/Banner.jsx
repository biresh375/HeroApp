import React from "react";
import hero from "../../assets/hero.png";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router";
import States from "./States";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-14 max-w-[1400px] mx-auto">
        <div className="mb-5">
          <div className=" text-6xl font-extrabold">
            <h1 className="mb-5">We Build</h1>
            <h1 className="mb-5">
              <span className="text-[#632EE3]">Productive</span> Apps
            </h1>
          </div>
          <p className="sm:max-w-[900px] text-[#627382] mb-5">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          <Link to={"https://play.google.com/store/apps?hl=en"}>
            <button className="btn mr-5 text-[#001931] text-[18px]">
              <FaGooglePlay className="text-green-500" /> Google Play
            </button>
          </Link>
          <Link to={"https://www.apple.com/app-store/"}>
            {" "}
            <button className="btn  text-[#001931] text-[18px]">
              {" "}
              <FaAppStoreIos className="text-[#0073F6]" /> App Store
            </button>
          </Link>
        </div>
        <div>
          <img src={hero} alt="Banner image" />
        </div>
      </div>
      <States></States>
    </>
  );
};

export default Banner;
