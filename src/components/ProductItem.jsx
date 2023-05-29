/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useCart } from "../context/cart.context";
import { useProduct } from "../context/products.context";

const ProductItem = ({ product, handleAddToCart }) => {
  const { name, price, currency, id, thumbnail, delivery } = product;
  const { cart, handleCartToggler } = useCart();
  const ref = useRef();
  const { isDelivered } = useProduct();
  const [btnText, setBtnText] = useState("Add to Cart");

  useEffect(() => {
    cart.forEach((item) => {
      if (item.id === id) {
        setBtnText("Remove");
      }
    });
  }, []);

  const updateButtonText = () => {
    setBtnText((prevText) =>
      prevText === "Remove" ? "Add to Cart" : "Remove"
    );
  };

  const renderDelivered = (delivery) => {
    return isDelivered && delivery;
  };

  return (
    <div
      className={`flex flex-col justify-between items-center h-72 p-4 mx-4 mb-8 border border-gray-200 rounded-lg shadow-md ${
        renderDelivered(delivery) ? "grayscale" : "hover:shadow-lg"
      }`}
    >
      <img src={thumbnail} className="w-40 mb-4" alt="" />
      <div className="flex flex-col items-center">
        <h4 className="text-lg font-semibold mb-2">{name}</h4>
        <h5 className="text-gray-500 text-sm mb-4">
          {currency} {price}
        </h5>
      </div>
      <button
        ref={ref}
        disabled={renderDelivered(delivery)}
        id={`toggleBtn-${id}`}
        className={`w-full bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded ${
          renderDelivered(delivery) ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={() => {
          handleCartToggler(id);
          updateButtonText(id);
        }}
      >
        {btnText}
      </button>
    </div>
  );
};

export default ProductItem;
