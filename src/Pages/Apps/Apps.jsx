import React, { useState } from "react";
import { useLoaderData } from "react-router";
import App from "../App/App";

const Apps = () => {
  const AllAppsData = useLoaderData() || [];
  const [searchData, setSearchData] = useState("");

  const filteredApps = AllAppsData.filter((app) =>
    (app.title || app.name || "")
      .toLowerCase()
      .includes(searchData.toLowerCase())
  );

  return (
    <div className="my-20 max-w-[1400px] mx-auto">
      <div className="text-center">
        <h1 className="font-bold text-5xl mb-4">Our All Applications</h1>
        <p className="text-[#627382] text-xl">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center mt-10 mb-5">
        <p className="font-semibold text-2xl">
          ({filteredApps.length}) Apps Found
        </p>

        <input
          className="border border-gray-300 rounded-md pl-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Search Apps..."
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {filteredApps.length > 0 ? (
          filteredApps.map((Aps) => <App key={Aps.id} Aps={Aps} />)
        ) : (
          <p className="col-span-4 text-center text-gray-500 text-7xl font-bold">
            No apps found
          </p>
        )}
      </div>
    </div>
  );
};

export default Apps;
