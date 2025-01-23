import React from "react";
import video from "./assert/bg vidoe.mp4";

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] w-full">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center items-start px-4">
        <h1 className="text-white text-6xl font-bold max-w-3xl leading-[5rem] tracking-wider">
          BUILDING STRATEGY
          <br />
          FROM THE <span className="bg-[#c4f135] text-black">HEART</span>
          <br />
           OF Qatar.
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
