import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useProduct } from "../context/products.context";
import categorys from "../data/categories.json";

const LeftPanel = () => {
  const { handleDeliveryBox } = useProduct();
  const { pathname } = useLocation();

  return (
    <div className="bg-purple-100 p-5 md:w-64 md:fixed md:h-full md:top-0 md:left-0">
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-gray-800">Filter</h4>
        <div className="mt-4">
          <div className="flex items-center mb-2">
            <input
              id="delivery-checkbox"
              type="checkbox"
              className="w-4 h-4 text-purple-600 bg-gray-200 rounded border-gray-300 focus:ring-purple-500"
              onChange={handleDeliveryBox}
            />
            <label
              htmlFor="delivery-checkbox"
              className="ml-2 text-sm font-medium text-gray-600"
            >
              Delivery
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              id="expensive-checkbox"
              type="checkbox"
              className="w-4 h-4 text-purple-600 bg-gray-200 rounded border-gray-300 focus:ring-purple-500"
              disabled
            />
            <label
              htmlFor="expensive-checkbox"
              className="ml-2 text-sm font-medium text-gray-600"
            >
              Expensive
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="best-selling-checkbox"
              type="checkbox"
              className="w-4 h-4 text-purple-600 bg-gray-200 rounded border-gray-300 focus:ring-purple-500"
              disabled
            />
            <label
              htmlFor="best-selling-checkbox"
              className="ml-2 text-sm font-medium text-gray-600"
            >
              Best Selling
            </label>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-gray-800">Categories</h4>
        <ul className="mt-4">
          {categorys &&
            categorys.map((category) => (
              <li key={category.id}>
                <Link
                  className={`my-2 ml-2 font-semibold text-gray-700 hover:text-purple-700 ${
                    pathname === `/category/${category.id}`
                      ? "text-purple-700"
                      : ""
                  }`}
                  to={`/category/${category.id}`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftPanel;
