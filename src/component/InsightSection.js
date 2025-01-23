import React from "react";
import geoImg from "./assert/Geographical.jpg";
import transImg from "./assert/Transformation.jpg";
import subImg from "./assert/subtainability.jpg";
import sucImg from "./assert/success.jpg";

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
    {
      title: "NO SUCCESS WITHOUT SUSTAINABILITY",
      image: sucImg,
      alt: "Success and sustainability image",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-serif text-center mb-12">INSIGHTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden aspect-[3/4]"
          >
            <img
              src={insight.image}
              alt={insight.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
              <h3 className="text-white text-center text-xl font-medium leading-tight">
                {insight.title}
              </h3>
              <div className="absolute bottom-4 right-4 w-6 h-6 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white opacity-80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsightSection;
