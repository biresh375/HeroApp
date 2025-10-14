import React from "react";
import { Link, useLoaderData } from "react-router";
import HomeApp from "../HomeApp/HomeApp";

const TrendingApps = () => {
  const HomeAppsData = useLoaderData();
  // console.log(HomeAppsData);
  return (
    <div className="my-20 max-w-[1400px] mx-auto">
      <div className="text-center mb-10">
        <h1 className="font-bold text-5xl mb-3">Trending Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {HomeAppsData.map((homeApp) => (
          <HomeApp key={homeApp.id} homeApp={homeApp}></HomeApp>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to={"/apps"}>
          <button className="btn text-xl bg-linear-to-tl from-[#9F62F2] to-[#632EE3] text-white">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
