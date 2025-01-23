import React from "react";

const BenefitsSection = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-5xl font-bold text-gray-900">
            The benefits of working with us
          </h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse.
          </p>
          <div className="flex items-start gap-8">
            <img
              src="https://cdn.prod.website-files.com/66e14188b0980f46c8264498/66f6376f2f8d068e07609c16_single-image-8.avif"
              alt="Property"
              className="w-56 h-40 object-cover rounded-lg shadow-lg"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Discover why clients trust us
              </h3>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2 text-base">
                <li>We offer a diverse portfolio of properties</li>
                <li>We guide you through every step</li>
                <li>Our successful history of transactions</li>
                <li>Positive testimonials and reviews</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative group">
          <img
            src="https://cdn.prod.website-files.com/66e14188b0980f46c8264498/66ffcd8a227e8744ff970d5f_single-image-7.avif"
            alt="Family"
            className="rounded-lg shadow-lg object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
