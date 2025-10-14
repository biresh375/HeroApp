import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const App = ({ Aps }) => {
    // console.log(Aps);
  const { downloads, ratingAvg, title, image } = Aps;
  return (
    <div className="shadow-sm p-4 rounded-xl bg-white">
      <div className="flex justify-center">
        <img
          className="rounded-2xl  h-[300px] w-fit mb-10"
          src={image}
          alt={title}
        />
      </div>
      <div className=" ">
        <h4 className=" text-xl ml-5 font-semibold mb-3">{title}</h4>
        <div className="mx-5 flex justify-between">
          <span className="text-[#00D390] bg-[#F1F5E8] px-2 py-1 rounded-sm flex items-center gap-2">
            {" "}
            <FaDownload /> {downloads}
          </span>
          <span className="text-[#FF8811] bg-[#FFF0E1] px-2 py-1 rounded-sm flex items-center gap-2">
            <FaStar /> {ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
