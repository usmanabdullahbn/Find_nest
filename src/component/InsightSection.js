import React from "react";
import { motion } from "framer-motion";
import geoImg from "./assert/Geographical.jpg";
import transImg from "./assert/Transformation.jpg";
import subImg from "./assert/subtainability.jpg";

const InsightSection = () => {
  const insights = [
    {
      title: "GEOPOLITICAL RISK: DOOM OR OPPORTUNITY?",
      image: geoImg,
      alt: "Geographical insight image",
    },
    {
      title: "TRANSFORMATION OF HEALTHCARE: PREEMPTIVE MEDICINE",
      image: transImg,
      alt: "Healthcare transformation image",
    },
    {
      title: "QUANTIFYING SUSTAINABILITY",
      image: subImg,
      alt: "Sustainability-related image",
    },
  ];

  // Animation variants for text and cards
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="container mx-auto py-16 px-4 mt-[100px]">
      {/* Heading Section */}
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
        <motion.div variants={textVariants} initial="hidden" animate="visible">
          <motion.h2
            className="text-4xl font-serif text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            INSIGHTS
          </motion.h2>
        </motion.div>

        <motion.div
          className="text-gray-600 max-w-md ml-[75px]"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum.
          </p>
          <br />
          <button className="bg-[#c4f135] hover:bg-[#b3df2d] text-black px-6 py-3 rounded-full font-bold transition-all duration-300">
            Explore properties
          </button>
        </motion.div>
      </div>

      {/* Insights Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[150px]"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        viewport={{ once: false }} // Ensures the animation happens only once
      >
        {insights.map((insight, index) => (
          <div
            key={insight.title}
            className={`relative h-[400px] group overflow-hidden rounded-lg ${
              index === 1 ? "-translate-y-[100px]" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {/* Image */}
            <img
              src={insight.image}
              alt={insight.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-6 text-white bg-black/50">
              <h3 className="text-2xl font-bold mb-2">{insight.title}</h3>
              <p>{insight.alt}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default InsightSection;
