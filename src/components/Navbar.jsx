// import React, { useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
// import { BsSearch } from "react-icons/bs";
// import CartModal from "./CartModal";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineClose } from "react-icons/ai";
// import { useCart } from "../context/cart.context";

// const Navbar = () => {
//   const ref = useRef();
//   const [isNavActive, setIsNavActive] = useState(false);

//   const { calculateGrandTotalPrice, getNumberOfItemInCart } = useCart();

//   const handleNav = () => {
//     ref.current.classList.toggle("hidden");
//     setIsNavActive((nav) => !nav);
//   };

//   const { pathname } = useLocation();
//   return (
//     <>
//       <nav className="border flex py-2 md:py-3  items-start flex-col md:flex-row px-3  md:items-center  ">
//         <div className="flex justify-between w-full px-5">
//           <div className=" text-3xl flex font-extrabold text-shadow-lg ">
//             <Link to="/">
//               <span className="text-purple-800">E </span>Commerce
//             </Link>
//           </div>

//           <div className="md:hidden flex justify-center items-center ">
//             {!isNavActive ? (
//               <GiHamburgerMenu
//                 className="text-2xl cursor-pointer"
//                 onClick={handleNav}
//               />
//             ) : (
//               <AiOutlineClose
//                 className="text-2xl cursor-pointer"
//                 onClick={handleNav}
//               />
//             )}
//           </div>
//         </div>

//         <div
//           ref={ref}
//           className="  md:m-0 hidden   md:flex flex-col md:flex-row  space-y-5 md:space-y-0 md:space-x-3 md:items-center "
//         >
//           <span></span>

//           <nav className="flex space-y-5   mr-5 uppercase text-gray-400 flex-col md:flex-row md:items-center md:space-y-0 md:space-x-10 ">
//             <Link
//               className={pathname === "/" ? "text-purple-800" : ""}
//               to={"/"}
//             >
//               Home
//             </Link>
//             <Link
//               className={pathname === "/category" ? "text-purple-800" : ""}
//               to={"/category"}
//             >
//               Category
//             </Link>
//             <Link
//               className={pathname === "/checkout" ? "text-purple-800" : ""}
//               to={"/checkout"}
//             >
//               Checkout
//             </Link>
//           </nav>

//           <button className="bg-purple-100 cursor-default flex items-center px-3 py-2 rounded-lg text-purple-800 font-semibold">
//             <span className="mx-2">₹{calculateGrandTotalPrice()}</span>
//             <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-purple-800 bg-purple-200 rounded-full">
//               {getNumberOfItemInCart()}
//             </span>
//           </button>

//           <CartModal />

//           <button className="h-10 w-10 bg-light bg-slate-200 border rounded-full"></button>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
//-------------

import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import CartModal from "./CartModal";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useCart } from "../context/cart.context";

const Navbar = () => {
  const ref = useRef();
  const [isNavActive, setIsNavActive] = useState(false);

  const { calculateGrandTotalPrice, getNumberOfItemInCart } = useCart();

  const handleNav = () => {
    ref.current.classList.toggle("hidden");
    setIsNavActive((nav) => !nav);
  };

  const { pathname } = useLocation();

  return (
    <>
      <nav className="bg-purple-900 text-white py-4 md:py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-3xl font-extrabold">
          <Link to="/">
            <span className="text-purple-300">E</span>Commerce
          </Link>
        </div>

        <div className="md:hidden">
          {!isNavActive ? (
            <GiHamburgerMenu
              className="text-2xl cursor-pointer"
              onClick={handleNav}
            />
          ) : (
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={handleNav}
            />
          )}
        </div>

        <div ref={ref} className="md:flex md:items-center md:space-x-4 hidden">
          <nav className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
            <Link
              className={`${
                pathname === "/" ? "text-purple-300" : "text-white"
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`${
                pathname === "/category" ? "text-purple-300" : "text-white"
              }`}
              to="/category"
            >
              Category
            </Link>
            <Link
              className={`${
                pathname === "/checkout" ? "text-purple-300" : "text-white"
              }`}
              to="/checkout"
            >
              Checkout
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="bg-purple-300 hover:bg-purple-400 text-purple-800 px-3 py-2 rounded-lg font-semibold">
              ₹{calculateGrandTotalPrice()}
              <span className="inline-flex justify-center items-center w-4 h-4 text-xs font-semibold text-purple-800 bg-purple-200 rounded-full">
                {getNumberOfItemInCart()}
              </span>
            </button>

            <CartModal />

            <button className="h-10 w-10 bg-white border rounded-full"></button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
