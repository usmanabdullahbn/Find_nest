import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { Bed, Bath, Square } from "lucide-react";

const GallerySection = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  
    const properties = [
      {
        id: "1",
        status: "FOR RENT",
        image:
          "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/66ffb1da5656628fbcde4c2f_the-luxe.avif",
        title: "The luxe haven",
        beds: 3,
        baths: 2,
        sqft: 950,
        price: 900.0,
        originalPrice: 1200.0,
      },
      {
        id: "2",
        status: "FOR SALE",
        image:
          "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/66ffb1fd9b424d9722c1bd93_river-view.avif",
        title: "Riverview rida",
        beds: 5,
        baths: 3,
        sqft: 1930,
        price: 1500.0,
        originalPrice: 1700.0,
      },
      {
        id: "3",
        status: "FOR BUY",
        image:
          "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/66ffb219d441ad252052efee_ware-house.avif",
        title: "Warehouses",
        beds: 6,
        baths: 4,
        sqft: 3600,
        price: 620000,
        originalPrice: 980000,
      },
      {
        id: "4",
        status: "FOR BUY",
        image:
          "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/66ffb1fd9b424d9722c1bd93_river-view.avif",
        title: "Wooden villas",
        beds: 5,
        baths: 3,
        sqft: 4120,
        price: 420000,
        originalPrice: 655000,
      },
      {
        id: "5",
        status: "FOR SALE",
        image:
          "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/66ffb23defd8340fb0c10bd3_glass-house.avif",
        title: "Glass house",
        beds: 7,
        baths: 5,
        sqft: 2120,
        price: 750000,
        originalPrice: 980000,
      },
      {
        id: "6",
        status: "FOR SALE",
        image:
          "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/66ffb25d75cfe61efb4066ab_duplex.avif",
        title: "Duplex villa",
        beds: 3,
        baths: 2,
        sqft: 1900,
        price: 300000,
        originalPrice: 520000,
      },
      {
        id: "7",
        status: "FOR RENT",
        image:
          "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/66ffb27322f897843bed281d_golden-house.avif",
        title: "Golden house",
        beds: 5,
        baths: 5,
        sqft: 2160,
        price: 810000,
        originalPrice: 1025000,
      },
      {
        id: "8",
        status: "FOR BUY",
        image:
          "https://cdn.prod.website-files.com/66e185ed6fc39a3ee85efc53/66ffb293b535f8e41694fba4_white-house.avif",
        title: "White villa",
        beds: 7,
        baths: 6,
        sqft: 3960,
        price: 520000,
        originalPrice: 655000,
      },
    ];
  
  

  const tabClasses = (isSelected) =>
    isSelected
      ? "bg-[#c4f135] text-black px-4 py-2 rounded-lg focus:outline-none"
      : "px-4 py-2 rounded-lg hover:bg-gray-100 focus:outline-none";

  const filteredProperties =
    selectedTab === "All"
      ? properties
      : properties.filter(
          (property) => property.status === `FOR ${selectedTab.toUpperCase()}`
        );

  return (
    <section className="w-full mx-auto py-16 px-4 pt-[100px] mt-[100px] bg-gray-100">
      <div className="text-center space-y-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto">
          The #1 site real estate professionals trust
        </h2>

        <Tab.Group>
          <Tab.List className="flex justify-center space-x-4">
            {["All", "Buy", "Rent", "Sale"].map((tab) => (
              <Tab
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={({ selected }) => tabClasses(selected)}
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
      {/* Properties */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105"
          >
            <div className="relative">
              <span className="absolute top-3 left-3 bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-md">
                {property.status}
              </span>
              <img
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                className="object-cover w-full h-64"
              />
            </div>
            <div className="p-4 space-y-3">
              <h3 className="text-xl font-semibold">{property.title}</h3>
              <div className="flex justify-between text-gray-600 text-sm">
                <div className="flex items-center gap-1">
                  <Bed size={16} />
                  <span>{property.beds} BD</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath size={16} />
                  <span>{property.baths} BA</span>
                </div>
                <div className="flex items-center gap-1">
                  <Square size={16} />
                  <span>{property.sqft} Sqft</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold">
                  ${property.price.toLocaleString()}
                </span>
                <span className="text-gray-400 line-through">
                  ${property.originalPrice.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
