import React from "react";
import errorimg from "../../assets/App-Error.png";
import { Link } from "react-router";

const AppNotFound = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center my-20">
      <div>
        <img src={errorimg} alt="Error image" />
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">OPPS!! APP NOT FOUND</h1>
        <p className="font-semibold mb-4">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <Link to={"/apps"}>
          <button className="btn text-white bg-linear-to-tl from-[#9F62F2] to-[#632EE3]">
            Go Back!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppNotFound;
