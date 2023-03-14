import React from "react";

const Timeline = () => {
  return (
    <div className="w-full pt-16 text-white bg-black bg-[url('/assets/features-03-image-03.jpg')] bg-blend-luminosity bg-no-repeat bg-cover bg-center" id="timeline" >
      <div className="bg-black bg-opacity-[0.6]">
        <div>
          <h1 className="text-3xl font-bold text-center py-4">
            TIMELINE
          </h1>

          <div className="max-w-7xl mx-auto grid grid-cols-9 px-4 py-10">
            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium py-2">25th March Closing of Registrations</h1>
                <p className="text-gray-100 sm:text-sm text-xs">
                Deadline for the registration.</p>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-white"></div>
              <div className="absolute w-10 h-10 rounded-full bg-[#00a4f9] text-white text-3xl text-center">
                1
              </div>
            </div>
            <div className="col-span-4 w-full h-full"></div>

            
            <div className="col-span-4 w-full h-full"></div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-white"></div>
              <div className="absolute w-10 h-10 rounded-full bg-[#00a4f9] text-white text-3xl text-center">
                2
              </div>
            </div>
            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium py-2">26th March - 27th March Group Discussion Round</h1>
                <p className="text-gray-100 sm:text-sm text-xs">
                  Well curated webinar for all the students conducted by industry experts
                </p>
              </div>
            </div>
            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium py-2">30th March-Marketistaan</h1>
                <p className="text-gray-100 sm:text-sm text-xs">
                  Case study competition challenges teams to analyze real-world market scenarios and provide innovative solutions
                </p>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-white"></div>
              <div className="absolute w-10 h-10 rounded-full bg-[#00a4f9] text-white text-3xl text-center">
                3
              </div>
            </div>
            <div className="col-span-4 w-full h-full"></div>


            <div className="col-span-4 w-full h-full"></div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-white"></div>
              <div className="absolute w-10 h-10 rounded-full bg-[#00a4f9] text-white text-3xl text-center">
                4
              </div>
            </div>
            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium py-2">1st - 2nd April The Boardroom Dilemma</h1>
                <p className="text-gray-100 sm:text-sm text-xs">
                  Winners are announced
                  based on problem solving
                  skills, communication and on
                  innovative ideas.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;