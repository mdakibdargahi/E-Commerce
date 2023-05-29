/* eslint-disable no-unused-vars */
import React from "react";
import categorys from "../data/categories.json";
import CategoryItem from "./CategoryItem";
import keyboard from "../image/keyboard.jpg";
import headphone from "../image/headphone.jpg";
import { useLocation } from "react-router-dom";

const CategoryGrid = () => {
  const imgArr = [keyboard, headphone];

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-center text-4xl lg:text-6xl font-bold uppercase text-gray-800 mb-10">
          Categories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorys &&
            categorys.map((e, i) => (
              <CategoryItem img={imgArr[i]} key={e.id} category={e} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
