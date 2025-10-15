import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BiMessageSquare } from "react-icons/bi";
import { FaDownload, FaStar } from "react-icons/fa";

import { useLoaderData, useParams } from "react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { addToStoreDB, stordedApp } from "../../Utility/addToDb";

const AppDetails = () => {
  const [clickInstall, setClickInstall] = useState(false);
  const localStoredId = stordedApp();
  // console.log(clickInstall);

  const linkId = useParams();

  const appId = parseInt(linkId.id);
  // console.log(appId);

  const allApp = useLoaderData();
  // console.log(allApp);

  const detailsApp = allApp.find((app) => app.id === appId);

  const {
    downloads,
    ratingAvg,
    title,
    image,
    companyName,
    ratings,
    reviews,
    description,
    id,
  } = detailsApp;

  useEffect(() => {
    if (localStoredId.includes(appId)) {
      setClickInstall(true);
    }
  }, [appId, localStoredId]);

  const handleInstallBtn = (id) => {
    setClickInstall(true);
    addToStoreDB(id);
  };
  // console.log(installData);

  return (
    <div className="max-w-[1400px] mx-auto my-20">
      <div className=" mx-auto bg-white shadow-md rounded-xl p-6 flex items-center gap-6 border border-gray-100">
        {/* App Icon */}
        <div className="flex-shrink-0">
          <div className="w-50 h-50 bg-blue-50 rounded-lg flex items-center justify-center">
            <img src={image} alt="App Icon" />
          </div>
        </div>

        {/* App Info */}
        <div className="flex flex-col flex-1">
          <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">
            Developed by :{" "}
            <a href="#" className="text-indigo-600 hover:underline font-medium">
              {companyName}
            </a>
          </p>

          {/* Stats */}
          <div className="flex items-center gap-15 mt-3 text-sm text-gray-700">
            <div className="flex flex-col items-center">
              <FaDownload className="w-10 h-10 text-green-600" />
              <p className="font-extrabold text-6xl">{downloads}</p>
              <p className="text-gray-500 text-xs">Downloads</p>
            </div>

            <div className="flex flex-col items-center">
              <FaStar className="w-10 h-10 text-yellow-500" />
              <p className="font-extrabold text-6xl">{ratingAvg}</p>
              <p className="text-gray-500 text-xs">Average Ratings</p>
            </div>

            <div className="flex flex-col items-center">
              <AiFillLike className="w-10 h-10 text-purple-500" />
              <p className="font-extrabold text-6xl">{reviews}</p>
              <p className="text-gray-500 text-xs">Total Reviews</p>
            </div>
          </div>

          {/* Button */}
          <button
            disabled={clickInstall}
            onClick={() => handleInstallBtn(id)}
            className={` mt-4 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 rounded-md shadow-md w-1/3`}
          >
            {clickInstall === true ? "Installed" : " Install Now"}
          </button>
        </div>
      </div>
      <div className="divider"></div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <ResponsiveContainer width="50%" height={300}>
          <BarChart data={ratings} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" reversed />
            <Tooltip />
            <Bar dataKey="count" fill="#FF9800" barSize={25} radius={5} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="divider"></div>
      <div>
        <h1 className="text-xl font-semibold mb-5 ">Description</h1>
        <p className="text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
