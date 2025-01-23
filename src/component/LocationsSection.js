import React from "react";

const locations = [
  {
    name: "Canada",
    properties: 300,
    image:
      "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/66ffb86cee3ca1fcee96a29d_city-2.jpg",
    hoverImage:
      "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/66ffb8d72f8eb1f3ddb39d03_city-2-hover.avif",
  },
  {
    name: "Germany",
    properties: 150,
    image:
      "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/66ffb929ab994f4b48daa156_city-4.avif",
    hoverImage:
      "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/66ffb92d9e91e1eacf23af74_city-4-hover.avif",
  },
  {
    name: "Australia",
    properties: 200,
    image:
      "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/66ffb90c472b92e37d6b2968_city-3.avif",
    hoverImage:
      "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/66ffb910e76b52831961f3d3_city-3-hover.avif",
  },
];

const LocationsSection = () => {
  return (
    <section className="container mx-auto py-16 px-4 mt-[100px]">
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-6xl md:text-6xl font-bold mb-4 ml-[50px]">
            Luxury living in a<br />
            brand-new space
          </h2>
        </div>
        <div className="flex items-center justify-between mt-[50px]">
          <div className="text-gray-600 max-w-md ml-[75px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum
            </p>
            <br />
            <button className="bg-[#c4f135] hover:bg-[#b3df2d] text-black px-6 py-3 rounded-full font-bold transition-all duration-300">
              Explore properties
            </button>
          </div>
        </div>
      </div>

      {/* Adjusted Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[150px]">
        {locations.map((location, index) => (
          <div
            key={location.name}
            className={`relative h-[400px] group overflow-hidden rounded-lg ${
              index === 1 ? "-translate-y-[100px]" : "" /* Adjust center image */
            }`}
          >
            {/* Default Image */}
            <img
              src={location.image}
              alt={`${location.name} properties`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <img
              src={location.hoverImage}
              alt={`${location.name} hover`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
              <p>{location.properties} Properties</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationsSection;
