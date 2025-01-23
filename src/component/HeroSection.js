import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.prod.website-files.com/66e14188b0980f46c8264498/66ea6406e4924baf1556d7e0_banner-image2.avif')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative container mx-auto h-full flex flex-col justify-center items-start px-4">
        <h1 className="text-white text-6xl font-bold max-w-3xl leading-[5rem] tracking-wider">
          YOUR PATH TO
          <br />
          HOMEOWNERSHIP
          <br />
          <span className="bg-amber-300">STARTS</span> HERE
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
