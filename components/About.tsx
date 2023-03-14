import Image from "next/image";
import React from "react";
import Home from "../public/assets/about.jpg";

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4" id="about">
      <div className="mx-auto grid md:grid-cols-2 gap-8">
        <Image className="" src={Home} alt="Home" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00a4f9] text-3xl font-bold">ABOUT CEO</p>
          <h1 className="md:text-4xl text-3xl font-bold py-4">Get Ready to become a leader</h1>
          <p className="text-xl">
            CEO, an event designed to cultivate
            management and leadership qualities
            in college students. Through this
            engaging experience, participants will
            have the opportunity to tackle realworld challenges, take calculated risks,
            and exceed their competition to
            become influential leaders.
          </p>
          <button className="text-[#ffffff] w-[200px] font-medium my-8 mx-auto md:mx-0 py-3 bg-[#000300] hover:scale-105 hover:text-white duration-200">
            <a href='#form'>Register Now</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;