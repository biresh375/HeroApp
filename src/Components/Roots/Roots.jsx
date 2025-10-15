import React from "react";
import Navbar from "../Navbar/navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import { Vortex } from "react-loader-spinner";

const Roots = () => {
  const navigation = useNavigation();
  const isloading = navigation.state === "loading";

  return (
    <>
      <div>
        {isloading && (
          <div className="flex justify-center items-center h-screen">
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={["red", "green", "blue", "yellow", "orange", "purple"]}
            />
          </div>
        )}

        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Roots;
