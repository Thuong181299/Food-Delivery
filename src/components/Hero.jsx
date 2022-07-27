import React from "react";
import Menu from "../assets/Menu.mp4";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[550px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] justify-center bg-black/40 flex flex-col">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-600">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-600">Foods</span> Deliveried
          </h1>
        </div>
        <video
          className="w-full max-h-[500px] object-cover"
          src={Menu}
          alt=""
          loop
          autoPlay
          muted
        />
      </div>
    </div>
  );
};

export default Hero;
