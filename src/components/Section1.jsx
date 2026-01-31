import React from "react";

const brands = ["Aveda", "Maybelline New York", "L'Oréal Paris", "CoverGirl"];

const categories = [
  {
    title: "For Face",
    description:
      "Cleansers, moisturizers, and serums to nourish and rejuvenate your complexion.",
    imageUrl: "/face.jpg",
  },
  {
    title: "For Eyes",
    description:
      "Specialized treatments to reduce dark circles, puffiness, and fine lines around delicate eye areas.",
    imageUrl: "/eye.jpg",
  },
  {
    title: "For Lips",
    description:
      "Hydrating balms and glosses to keep your lips soft, smooth, and perfectly conditioned.",
    imageUrl: "/lips.jpg",
  },
];

const Section1 = () => {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row px-6 sm:px-10 md:px-20 py-12 bg-red-900 text-white items-center lg:items-start justify-between gap-8 lg:gap-0">
        {/* Left side */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6">
            Organic Beauty Collection
          </h1>
          <p className="mb-4 sm:mb-6 text-gray-200 text-sm sm:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full mb-4 sm:mb-6 hover:bg-gray-800 transition">
            Open Store
          </button>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            {brands.map((brand) => (
              <button
                key={brand}
                className="border border-white px-3 sm:px-4 py-1 rounded-full hover:bg-white hover:text-red-950 transition text-sm sm:text-base"
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-48 sm:w-64 md:w-72 lg:w-80 h-48 sm:h-64 md:h-72 lg:h-80 bg-red-700 rounded-lg flex items-center justify-center">
            <img
              src="cream.jpg"
              alt="Prada Black Cream"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white text-black p-2 rounded shadow text-xs sm:text-sm">
              <p className="font-semibold">Prada Black Cream</p>
              <p className="text-gray-700">Category: For Face</p>
              <p className="font-bold">$270</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="px-4 sm:px-10 md:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Video / Image */}
        <div className="col-span-1 rounded-lg overflow-hidden relative h-64 sm:h-72 lg:h-80">
          <img
            src="/serum.jpg"
            alt="Face"
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute inset-0 flex items-center justify-center text-white text-3xl bg-black bg-opacity-30 hover:bg-opacity-50 transition">
            ▶
          </button>
        </div>

        {/* Category Cards */}
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="border border-gray-300 rounded-lg p-4 flex flex-col justify-between items-center hover:shadow-lg transition"
            >
              <img
                src={cat.imageUrl}
                alt={cat.title}
                className="w-32 h-32 object-cover rounded-lg mb-2"
              />
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2"></span>
                <h3 className="font-semibold text-sm sm:text-base">
            {cat.title}
                </h3>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm align-middle text-center">
                {cat.description}
              </p>
              <button className="mt-4 text-red-900 font-semibold hover:underline text-lg sm:text-base">
                →
              </button>
            </div>
          ))}
              </div>

              {/* Discounted Products */}
      <div className="px-4 sm:px-10 md:px-20 py-8 flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-t-lg gap-4 sm:gap-0">
        <h2 className="text-xl sm:text-2xl font-serif">Discounted Products</h2>
        <button className="bg-red-900 text-white px-4 py-2 rounded-full hover:bg-red-800 transition">
          Open Store
        </button>
      </div>
    </section>
  );
};

export default Section1;
