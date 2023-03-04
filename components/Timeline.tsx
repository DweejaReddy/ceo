import React from "react";

const Timeline = () => {
  return (
    <div className="w-full py-16 text-white" id="timeline">
      <div>
        <h1 className="text-3xl font-bold text-center py-4">
          TIMELINE
        </h1>

        <div className="max-w-7xl mx-auto grid grid-cols-9 px-4 py-10">
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">4th March Registration Opens</h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                Startups will be evaluated on the basis of their market & customer base and their product showcasing capability.
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-white"></div>
            <div className="absolute w-10 h-10 rounded-full bg-[#ff5757] text-white text-3xl text-center">
              1
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-white"></div>
            <div className="absolute w-10 h-10 rounded-full bg-[#ff5757] text-white text-3xl text-center">
              2
            </div>
          </div>
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">24th March Closing of Registrations</h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                Deadline for the registration of startups for Expo.
              </p>
            </div>
          </div>

          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">Signing of MOUs</h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                Shortlisted Startups will be signing the MOUs and further details will be communicated.
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-white"></div>
            <div className="absolute w-10 h-10 rounded-full bg-[#ff5757] text-white text-3xl text-center">
              3
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-white"></div>
            <div className="absolute w-10 h-10 rounded-full bg-[#ff5757] text-white text-3xl text-center">
              4
            </div>
          </div>
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">31st March - 2nd April Expo LIVE</h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                Awaiting Startups to showcase their amazing ideas and products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;