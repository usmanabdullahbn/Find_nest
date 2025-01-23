import React from "react";
import { motion } from "framer-motion";
import sign from "./assert/signature.png";

const AboutSection = () => {
  // Animation variants for text and image
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="container mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image with animation */}
        <motion.div
          className="relative h-[500px] w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageVariants}
        >
          <img
            src="https://cdn.prod.website-files.com/66e14188b0980f46c8264498/66ffcd8a481f752c4f8f0110_single-image-4.avif"
            alt="Cozy interior with candles"
            className="object-cover rounded-lg"
          />
        </motion.div>

        {/* Right side - Content */}
        <div className="space-y-6">
          {/* Animated Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
          >
            Get some knowledge about findnest
          </motion.h2>

          {/* Animated Paragraphs */}
          <motion.div
            className="space-y-4 text-gray-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
          >
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
          </motion.div>

          {/* Animated Footer */}
          <motion.div
            className="pt-6 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
          >
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">Alen Hispro</h3>
              <span className="text-gray-500">- CEO, Business</span>
            </div>
            <div className="relative h-12 w-32">
              <img
                src={sign}
                alt="Alen Hispro signature"
                className="object-contain object-left"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
