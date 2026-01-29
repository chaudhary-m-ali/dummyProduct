import React from "react";
import Rectangle1 from "../assets/Rectangle1.svg";
import { Handbag } from "lucide-react";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart?.items) || [];
  return (
    <div>
      <div className="flex justify-between px-5 lg:px-20 py-5 items-center">
        <div className="flex  gap-6  sm:gap-15 items-center">
          <Link
            to="/"
            className="text-[#0D3356] font-extrabold text-[16px] min-[350px]:text-[20px] sm:text-[32.8px]"
          >
            FashionHub
          </Link>
          <ul className="flex   items-center  gap-2 md:gap-12.5">
            <li className=" text-[10px] sm:text-[16px] font-medium text-[#1D364D] hidden sm:block">
              Brand
            </li>
            <li className=" text-[10px] sm:text-[16px] font-medium text-[#1D364D] hidden sm:block">
              Contact
            </li>
            <li className=" text-[10px] sm:text-[16px] font-medium text-[#1D364D] hidden sm:block">
              FAQ’s
            </li>
          </ul>
        </div>

        <div className="flex  gap-5">
          <Link to="/cart">
            <div className=" size-10  sm:size-12.5 bg-[#F5F1EE] rounded-full flex justify-center items-center relative ">
              <Handbag color="#875541" />
              <div className="size-4 sm:size-5 rounded-full bg-[#1D364D] flex justify-center items-center absolute top-0 -right-1">
                <p className="text-white"> {cartItems.length}</p>
              </div>
            </div>
          </Link>
          <div className=" hidden size-12.5 bg-[#F5F1EE] rounded-full md:flex justify-center items-center relative cursor-pointer">
            <Bell />
            <div className="size-2.5 rounded-full bg-[#393A45] flex justify-center items-center absolute top-2 -right-1"></div>
          </div>
          <div className=" hidden xl:flex gap-4 ">
            <img src={Rectangle1} alt="" />
            <div className="grid gap-2">
              <p className="text-[12px] font-medium text-[#C0C3C6]">
                Good Morning!
              </p>
              <h3 className="text-[16px] text-[#1D364D] font-semibold">
                Scarlet Johnson
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
