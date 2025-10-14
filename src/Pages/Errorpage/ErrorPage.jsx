import React from "react";
import errorimg from "../../assets/error-404.png";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <div>
        <img src={errorimg} alt="Error image" />
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Oops, page not found!</h1>
        <p className="font-semibold mb-4">
          The page you are looking for is not available.
        </p>
        <Link to={"/"}>
          <button className="btn text-white bg-linear-to-tl from-[#9F62F2] to-[#632EE3]">
            Go Back!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
