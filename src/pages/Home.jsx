/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CategoryGrid from "../components/CategoryGrid";
import ProductGrid from "../components/ProductGrid";
import { useProduct } from "../context/products.context";
import cover from "../image/cover.png";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-bold mb-4 text-gray-800">
                Professional Keyboard
              </h2>
              <div className="bg-purple-900 h-1 w-40 mb-6"></div>
              <p className="text-xl text-gray-700 mb-8">
                Built for Professional Creatives
                <br />
                Connect up to 3 devices
                <br />
                Compact and portable
              </p>
              <a
                href="#"
                className="bg-purple-900 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-800 transition-colors"
              >
                Learn More
              </a>
            </div>
            <div className="flex justify-center">
              <img
                src={cover}
                className="w-full lg:w-4/5 rounded-lg shadow-md"
                alt="Cover"
              />
            </div>
          </div>
        </div>
      </div>

      <CategoryGrid />
    </div>
  );
};

export default Home;
