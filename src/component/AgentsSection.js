import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const AgentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animation for children
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

  const agents = [
    {
      name: "Kassian Coleson",
      role: "Team lead / Broker",
      image:
        "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/670e092acdd7ceb531a4c978_agent-3.avif",
    },
    {
      name: "Hardin Scott",
      role: "Financial Agent",
      image:
        "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/66ffe629e4af05c423f13153_agent-5.avif",
    },
    {
      name: "Teressa Young",
      role: "Inmobiliary agent",
      image:
        "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/66ffe6af9e321a089d39c3a6_agent-1.avif",
      socials: {
        facebook: "#",
        linkedin: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Mike Johnson",
      role: "Real Estate Agent",
      image:
        "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/670e0a27eef59274db5961fc_agent-4.avif",
    },
  ];

  return (
    <section
      ref={ref}
      className="container mx-auto py-16 px-4"
    >
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        Professional findnest agents,
        <br />
        exceptional results
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {agents.map((agent, index) => (
          <motion.div
            key={index}
            className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            variants={cardVariants}
          >
            <div className="relative h-[300px] w-full overflow-hidden rounded-t-lg">
              <img
                src={agent.image || "/placeholder.svg"}
                alt={agent.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{agent.name}</h3>
              <p className="text-gray-600">{agent.role}</p>

              {agent.socials && (
                <div className="flex items-center gap-4 mt-4">
                  {agent.socials.facebook && (
                    <Link
                      to={agent.socials.facebook}
                      className="text-gray-600 hover:text-black"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                  )}
                  {agent.socials.linkedin && (
                    <Link
                      to={agent.socials.linkedin}
                      className="text-gray-600 hover:text-black"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  )}
                  {agent.socials.instagram && (
                    <Link
                      to={agent.socials.instagram}
                      className="text-gray-600 hover:text-black"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                  )}
                  {agent.socials.twitter && (
                    <Link
                      to={agent.socials.twitter}
                      className="text-gray-600 hover:text-black"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AgentsSection;
