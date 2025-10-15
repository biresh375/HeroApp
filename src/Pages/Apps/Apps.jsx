import React from "react";
import { useLoaderData } from "react-router";
import App from "../App/App";

const Apps = () => {
  const AllAppsData = useLoaderData();
//   console.log(AllAppsData);
  return (
    <div className="my-20 max-w-[1400px] mx-auto">
      <div className="text-center">
        <h1 className="font-bold text-5xl mb-4">Our All Applications</h1>
        <p className="text-[#627382] text-xl">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="font-semibold text-2xl">
          ({AllAppsData.length}) Apps Found
        </p>
        <input
          className="border border-gray-100 pl-4"
          type="text"
          name=""
          id=""
          placeholder="Search Apps"
        />
      </div>
      <div className="grid grid-cols-4 gap-10">
        {AllAppsData.map((Aps) => (
          <App key={Aps.id} Aps={Aps}></App>
        ))}
      </div>
    </div>
  );
};

export default Apps;
