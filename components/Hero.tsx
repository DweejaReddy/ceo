import Image from "next/image";
import React from "react";

import logo from '../public/assets/CEO_web.png';
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="min-h-screen bg-black bg-[url('/assets/hero-image-01.jpg')] bg-blend-luminosity bg-cover bg-origin-border bg-center">
      <div className="h-full bg-black bg-opacity-[0.6]">
        <Navbar />
        <div className="flex flex-col justify-center items-center text-white px-4 md:py-4 lg:py-10 xl:px-20">
          <div className="grid grid-rows-4 gap-4 w-full h-screen items-center">
            <div className="md:text-5xl text-4xl text-center py-2 self-center md:self-center mt-6 font-semibold text-[#00a4f9] uppercase">
              LEADING WITH VISION. DRIVING WITH PURPOSE.
            </div>
            <div className="text-center w-full h-fit">
              <Image
                src={logo}
                alt="Expo"
                height={50}
                width={700}
                className="inline-flex justify-center"
              />
            </div>
            <div className="h-full flex flex-col gap-8 md:gap-16 pt-8 md:pt-32 justify-center items-center">
              <div className="flex flex-col items-center md:items-start md:flex-row justify-center gap-8 md:gap-16 w-full h-full">
                <a
                  href="#form"
                  className="bg-gradient-to-r from-[#00a4f9] to-[#0164eb] hover:from-[#0164eb] hover:to-[#00a4f9] p-4 w-3/4 md:w-1/4 lg:w-1/6 text-2xl text-center"
                >
                  Register
                </a>
                <a
                  href="https://drive.google.com/file/d/1LlRKzo1LM-IMSEBVN6rx2_5NVC_PQ8IP/view?usp=sharing" target="_blank"
                  className="bg-gradient-to-r from-[#00a4f9] to-[#0164eb] hover:from-[#0164eb] hover:to-[#00a4f9] p-4 w-3/4 md:w-1/4 lg:w-1/6 text-2xl text-center"
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