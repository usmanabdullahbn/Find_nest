import React from "react";
import sign from "./assert/signature.png"

const AboutSection = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <div className="relative h-[500px] w-full">
          <img
            src="https://cdn.prod.website-files.com/66e14188b0980f46c8264498/66ffcd8a481f752c4f8f0110_single-image-4.avif"
            alt="Cozy interior with candles"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right side - Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Get some knowledge about findnest
          </h2>

          <div className="space-y-4 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidit ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices grida. Risus commdolore magna odo
              viverra maecenas accumsan lacus vel facilisis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidit ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices
            </p>
          </div>

          <div className="pt-6 space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">Alen Hispro</h3>
              <span className="text-gray-500">- CEO, Business</span>
            </div>
            <div className="relative h-12 w-32">
              <img
                src={sign}
                alt="Alen Hispro signature"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
