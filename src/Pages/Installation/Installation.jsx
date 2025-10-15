import React, { useState } from "react";
import { BiStar } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import { stordedApp } from "../../Utility/addToDb";
import { useLoaderData } from "react-router";
import InstallCard from "../Apps/InstallCard/InstallCard";

const Installation = () => {
  const localStoredId = stordedApp();
  const idStoredData = localStoredId.map((id) => parseInt(id));
  // console.log(idStoredData);
  const AllData = useLoaderData();

  const installedData = AllData.filter((app) => idStoredData.includes(app.id));
  console.log(installedData);
  const [dbinstalledData, setDbinstalledData] = useState(installedData);

  return (
    <div className="max-w-[1400px] mx-auto my-5 mt-20">
      <div className="text-center">
        <h1 className="font-bold text-5xl mb-4">Your Installed Apps</h1>
        <p className="text-[#627382] text-xl">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="font-semibold text-2xl">
          ({dbinstalledData.length}) Apps Found
        </p>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Short By
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box w-[200px] p-2 shadow-sm"
          >
            <li>
              <a>Low-High</a>
            </li>
            <li>
              <a>Higt-Low</a>
            </li>
          </ul>
        </div>
      </div>
      {dbinstalledData.map((data) => (
        <InstallCard
          key={data.id}
          data={data}
          setDbinstalledData={setDbinstalledData}
          dbinstalledData={dbinstalledData}
        ></InstallCard>
      ))}
    </div>
  );
};

export default Installation;
