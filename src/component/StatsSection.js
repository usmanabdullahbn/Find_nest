import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Home, Trophy, UserPlus } from "lucide-react"

const stats = [
  {
    icon: <Star className="w-8 h-8" />,
    value: "15Y",
    title: "Years of experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: <Home className="w-8 h-8" />,
    value: "1250+",
    title: "Homes sold",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    value: "20+",
    title: "Awards won",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: <UserPlus className="w-8 h-8" />,
    value: "900+",
    title: "Happy clients",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
]

const StatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" }) // Animation triggers only once

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animation for children
      },
    },
  }

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
  }

  return (
    <section
      ref={ref}
      className="w-full mx-auto py-16 px-4 mt-[100px] bg-gray-100"
    >
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-11 ml-[150px]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate only when in view
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg w-96 h-80 p-8 flex flex-col justify-between"
            variants={cardVariants}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-gray-600">{stat.icon}</div>
              <div className="text-5xl font-extrabold text-gray-800">
                {stat.value}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {stat.title}
            </h3>
            <p className="text-gray-600 text-base font-medium">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default StatsSection
