import React from "react";
import bglogo from "../../assets/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-tl from-[#9F62F2] to-[#632EE3] text-white p-10">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <img className="h-[80px] w-[80px]" src={bglogo} alt="Hero.io logo" />
          <h1 className="text-4xl font-bold">HERO.IO</h1>
        </div>

        <div className="text-center">
          <h6 className="footer-title mb-3 text-lg font-semibold">Follow Us</h6>
          <div className="flex justify-center gap-6">
            <a href="https://twitter.com" target="_blank">
              <FaXTwitter />
            </a>
            <a href="https://youtube.com" target="_blank">
              <FaYoutube />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="divider my-6"></div>

      <p className="text-center text-sm">
        Copyright © 2025 - All rights reserved by HERO.IO
      </p>
    </footer>
  );
};

export default Footer;
