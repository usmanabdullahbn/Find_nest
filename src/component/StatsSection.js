import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Home, Trophy, UserPlus } from "lucide-react";

const stats = [
  {
    icon: <Star className="w-10 h-10 text-indigo-600" />,
    value: "15Y",
    title: "Years of experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: <Home className="w-10 h-10 text-green-600" />,
    value: "1250+",
    title: "Homes sold",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: <Trophy className="w-10 h-10 text-yellow-600" />,
    value: "20+",
    title: "Awards won",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: <UserPlus className="w-10 h-10 text-blue-600" />,
    value: "900+",
    title: "Happy clients",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
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

  return (
    <section
      ref={ref}
      className="w-full mx-auto py-16 px-4 mt-[100px] bg-gradient-to-r from-gray-100 to-gray-200"
    >
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 ml-4 sm:ml-8 lg:ml-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg w-full h-80 p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2"
            variants={cardVariants}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-gray-600">{stat.icon}</div>
              <div className="text-5xl font-extrabold text-gray-800">
                {stat.value}
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {stat.title}
            </h3>
            <p className="text-gray-600 text-base font-medium">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsSection;
