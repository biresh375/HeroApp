import React from "react";
import Navbar from "../Navbar/navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Roots = () => {
  
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Roots;
