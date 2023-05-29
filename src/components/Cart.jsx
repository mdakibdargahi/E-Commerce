/* eslint-disable no-unused-vars */
import React from "react";
import { useCart } from "../context/cart.context";
import {
  AiOutlineClose,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import { getProductById } from "../misc/helper";
import { useProduct } from "../context/products.context";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    calculateTotalPrice,
    calculateGrandTotalPrice,
    setCart,
  } = useCart();
  const { products } = useProduct();

  const removeProductFromCart = (id) => {
    const product = getProductById(products, id);
    setCart((cart) => cart.filter((item) => item.id !== product.id));
  };

  return (
    <div>
      {cart.length === 0 && <div className="m-10 text-center">Cart Empty!</div>}

      {cart.length !== 0 && (
        <div className="mt-5">
          <div className="border-b mb-2 pb-2">
            <div className="flex border-b text-xs font-semibold">
              <h4 className="w-1/2">Product</h4>
              <h4 className="w-1/6">Quantity</h4>
              <h4 className="w-1/6">Total Price</h4>
            </div>

            {cart.map((item) => (
              <div key={item.id} className="flex items-center my-5">
                <div className="w-1/2 flex items-center space-x-3">
                  <div className="rounded-lg">
                    <img src={item.thumbnail} className="w-16" alt="" />
                  </div>
                  <h4 className="font-semibold">{item.name}</h4>
                </div>

                <div className="flex w-1/6 items-center space-x-2">
                  <AiOutlineMinusCircle
                    className="cursor-pointer"
                    onClick={() => decreaseQuantity(item.id)}
                  />
                  <h4>{item.quantity}</h4>
                  <AiOutlinePlusCircle
                    className="cursor-pointer"
                    onClick={() => increaseQuantity(item.id)}
                  />
                </div>

                <h4 className="w-1/6">
                  ₹{calculateTotalPrice(item.price, item.quantity)}
                </h4>

                <button onClick={() => removeProductFromCart(item.id)}>
                  <AiOutlineClose className="text-red-700 text-2xl" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <div className="font-semibold">
              Grand Total: ₹{calculateGrandTotalPrice()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
