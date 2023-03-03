import Image from "next/image";
import React from "react";

import logo from '../public/assets/logo.png';

const Hero = () => {
  return (
    <div className="text-white h-screen bg-center bg-cover custom-img mt-[-55px] section">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70">
        <div className="relative max-w-[800px] mt-0 w-full h-screen mx-auto text-center flex flex-col justify-center" id="home">
          <p className="md:text-4xl sm:text-xl text-[1.2rem] py-2 text-[#ff5757]">
            Connect, Collaborate and Sell
          </p>
          <div>
            <Image className='mx-auto py-6' src={logo} alt="/" width={700} />
          </div>


          <p className="md:text-3xl sm:text-xl text-[1.2rem] py-2">
            Awaits You...
          </p>
          <p className="md:text-2xl text-xl font-bold py-6">Hurry up!! Only few slots are left</p>
          <button className="bg-[#ff5757] w-[200px] rounded-md text-2xl font-medium my-8 mx-auto p-5 text-black hover:scale-105 duration-200"><a href="#form">Register Now</a></button>
        </div>
      </div>
    </div>
  );
}

export default Hero;