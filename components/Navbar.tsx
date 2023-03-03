import Image from "next/image";
import React, { useEffect, useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import logo from "../public/assets/logo.png";
import { useEventListener } from "./utils";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setcolor] = useState(false);


  const changecolor = () => {
    if (window.scrollY >= 670) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  useEventListener("scroll", changecolor);

  useEffect(() => {

  }, [])

  return (
    <div
      className={
        color
          ? "sticky top-0 flex justify-items-end items-center text-white px-4 sm:px-40 z-10 bg-[rgba(0,0,0,0.8)] h-14"
          : "sticky top-0 flex justify-items-end items-center text-white px-4 sm:px-40 z-10 h-14"
      }
    >
      <div className="w-full">
        <Image className=' py-6 w-[7.5rem] h-[5.5rem] z-20' src={logo} alt="/" />
      </div>
      <ul className="hidden md:flex">
        <li className="p-3 w-24 hover:underline">
          <a href="#home">Home</a>
        </li>
        <li className="p-3 w-32 hover:underline">
          <a href="#about">About Expo</a>
        </li>
        <li className="p-3 w-24 hover:underline">
          <a href="#timeline">Timeline</a>
        </li>
        <li className="p-3 w-24 hover:underline">
          <a href="https://drive.google.com/file/d/1TRfgslkM1nmKzppj1V_oxCB2ox94cMEj/view" target="_blank">Brochure</a>
        </li>
        <li className="p-3 w-32 hover:underline">
          <a href="#footer">Contact Us</a>
        </li>
      </ul>

      <div onClick={() => setNav(nav => !nav)} className="block z-20 md:hidden ">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-l border-l-white-900 bg-[#575656] ease-in-out duration-500 z-20"
            : "fixed left-[-100%]"
        }
      >
        <div className="w-full">
          <Image className='py-6 w-[7.5rem] h-[5.5rem] z-20' src={logo} alt="/" />
        </div>

        <ul className="pt-24">
          <li className="p-4 underline"><a href="#home">Home</a></li>
          <li className="p-4 underline"><a href="#about">About Expo</a></li>
          <li className="p-4 underline"><a href="#timeline">Timeline</a></li>
          <li className="p-4 underline"><a href="#broucher">Brochure</a></li>
          <li className="p-4 underline"><a href="#footer">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;