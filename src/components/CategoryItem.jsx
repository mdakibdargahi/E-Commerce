/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import randomColor from "randomcolor";
import { useProduct } from "../context/products.context";

const CategoryItem = ({ category, img }) => {
  const { id, name, description, thumbnail } = category;

  const products = useProduct();

  const getRandomColor = () => {
    return randomColor({ luminosity: "dark" });
  };

  const categoryColor = getRandomColor();

  return (
    <Link
      to={`/category/${id}`}
      className={`flex flex-col items-center justify-center p-6 m-4 rounded-md bg-gray-100 shadow-lg hover:shadow-xl transition-shadow`}
      style={{ backgroundColor: categoryColor }}
    >
      <img src={img} className="w-40 h-40 rounded-full mb-4" alt="" />
      <div className="text-center">
        <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          {name}
        </h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
