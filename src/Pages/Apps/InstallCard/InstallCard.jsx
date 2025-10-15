import React from "react";
import { BiStar } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import { stordedApp } from "../../../Utility/addToDb";
import { toast } from "react-toastify";

const InstallCard = ({ data, dbinstalledData, setDbinstalledData }) => {
  console.log(data);

  const { image, title, downloads, reviews, ratingAvg, id } = data;

  const handleUnInstall = (id) => {
    const storedApps = stordedApp();
    console.log(storedApps);
    const updatedApps = storedApps.filter((app) => app !== id);
    localStorage.setItem("installed", JSON.stringify(updatedApps));

    setDbinstalledData(dbinstalledData.filter((app) => app.id !== id));
    toast("Uninstall successfully completed")
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-xl rounded-xl p-4 border border-gray-100 mb-2.5 ">
      {/* Left section */}
      <div className="flex items-center gap-4">
        {/* App icon */}
        <div className="w-14 h-14 bg-gray-200 rounded-lg">
          <img src={image} alt={title} />
        </div>

        {/* App info */}
        <div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
            <div className="flex items-center gap-1 text-green-500">
              <FaDownload size={14} />
              <span>{downloads}</span>
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              <BiStar size={14} />
              <span>{reviews}</span>
            </div>
            <span>{ratingAvg}</span>
          </div>
        </div>
      </div>

      {/* Right button */}
      <button
        onClick={() => handleUnInstall(id)}
        className="bg-green-600 hover:bg-green-400 text-white text-sm font-medium px-4 py-2 rounded-sm transition"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallCard;
