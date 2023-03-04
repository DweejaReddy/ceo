import Image from "next/image";
import React from "react";

import logo from '../public/assets/logo.png';
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[url('/assets/expo.jpg')] bg-cover bg-origin-border aspect-16 bg-center">
      <div className="h-screen bg-black bg-opacity-[0.65]">
        <Navbar />
        <div className="flex flex-col justify-center items-center text-white p-4 lg:p-10 lg:py-10">
          <div className="grid grid-rows-4 gap-4 w-full h-screen items-center">
            <div className="md:text-5xl text-3xl text-center py-2 self-end text-[#ff5757]">
              Connect, Collaborate and Sell
            </div>
            <div className="text-center">
              <Image
                src={logo}
                alt="Expo"
                height={200}
                width={500}
                className="inline-flex justify-center py-4"
              />
            </div>
            <div className="h-full flex flex-col gap-12 justify-start items-center">
              <div className="md:text-3xl text-2xl py-2">
                Awaits You...
              </div>
              <div className="flex flex-col items-start md:flex-row justify-center gap-6 w-full h-full">
                <a
                  href="#form"
                  className="bg-[#ff5757] hover:bg-red-500 p-4 w-3/4 md:w-1/4 lg:w-1/6 rounded-md text-2xl text-center"
                >
                  Register
                </a>
                <a
                  href="https://drive.google.com/file/d/1TRfgslkM1nmKzppj1V_oxCB2ox94cMEj/view" target="_blank"
                  className="bg-[#ff5757] hover:bg-red-500 p-4 w-3/4 md:w-1/4 lg:w-1/6 rounded-md text-2xl text-center"
                >
                  Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;