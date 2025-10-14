import React from "react";
import Navbar from "../Navbar/navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import TrendingApps from "../TrendingApps/TrendingApps";

const Home = () => {
  // const data =useLoaderData();
  // console.log(data);

  return (
    <div>
      <Banner></Banner>
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default Home;
