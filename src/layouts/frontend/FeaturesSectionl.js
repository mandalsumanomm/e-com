import React from 'react';

// Example image paths, replace with actual paths to your images
const features = [
  {
    image: "Services.png", // Replace with actual image path
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140"
  },
  {
    image: "Services1.png", // Replace with actual image path
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support"
  },
  {
    image: "Services 2.png", // Replace with actual image path
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days"
  }
];

const FeaturesSection = () => {
  return (
    <div className="flex justify-center space-x-8 py-12 bg-white">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          {/* Image with circular background */}
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-14 h-14" // Adjust size to fit within the circle
            />
          </div>
          {/* Title and Description */}
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p className="text-gray-500 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
