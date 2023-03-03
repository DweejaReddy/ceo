import Image from "next/image";
import React from "react";
import Home from "../public/assets/home.jpg";

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4 section" id="about">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <Image className="w-[500px] mx-auto my-6" src={Home} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#ff5757] text-xl font-bold">ABOUT STARTUP EXPO</p>
          <h1 className="md:text-4xl sm:3xl text-2xl font-bold py-4">Get Ready For Product Testing and Mass Networking</h1>
          <p className="">
            StartupExpo is an exhibition event for startups that draws participants, speakers, investors, and organisations from all around India. Startups will have a fantastic platform to share their cutting-edge innovations with the rest of the world at the event, which will also introduce them to a fantastic community that will support their progress. Startups that are interested should complete this form:
          </p>
          <button className="text-[#ffffff] w-[200px] rounded-md font-medium my-8 mx-auto md:mx-0 py-3 bg-[#000300] hover:scale-105 hover:text-white duration-200"><a href='#form'>Register Now</a></button>
        </div>
      </div>
    </div>
  );
};

export default About;