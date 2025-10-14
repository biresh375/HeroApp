import React from "react";

const States = () => {
  return (
    <div className="text-white  py-[80px]  bg-linear-to-tl from-[#9F62F2] to-[#632EE3]">
      <h1 className="text-center text-4xl font-bold ">
        Trusted by Millions, Built for You
      </h1>
      <div className=" mt-10 flex justify-center gap-20 text-center ">
        <div>
          <h5 className="mb-8 text-[#edeef0] ">Total Downloads</h5>
          <span className="font-extrabold text-6xl ">29.6M</span>
          <p className="mt-8 text-[#edeef0] ">21% more than last month</p>
        </div>
        <div>
          <h5 className="mb-8 text-[#edeef0] ">Total Reviews</h5>
          <span className="font-extrabold text-6xl">906K</span>
          <p className="mt-8 text-[#edeef0] ">46% more than last month</p>
        </div>
        <div>
          <h5 className="mb-8 text-[#edeef0] ">Active Apps</h5>
          <span className="font-extrabold text-6xl">132+</span>
          <p className=" text-[#edeef0] mt-8">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default States;
