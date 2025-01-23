import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DiscoverSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="w-full mx-auto py-16 px-4 pt-[100px] mt-[100px] bg-gray-100"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Discover recent properties
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipcing elit, sed do eiusmod
          tempordidunt ut la dolore magna aliqua suspendisse ultrices gravida.
          Rismmodo viverra maecenas accumsan lacus vel faciliss.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default DiscoverSection;
