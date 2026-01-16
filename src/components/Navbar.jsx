import React from "react";
import Rectangle1 from "../assets/Rectangle1.svg";
import { Handbag } from "lucide-react";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-5 lg:px-20 py-5 items-center">
        <div className="flex  max-[500px]:gap-3 gap-15 items-center">
          <h1 className="text-[#0D3356] font-extrabold text-[10px] min-[350px]:text-[20px] sm:text-[32.8px]">
            FashionHub
          </h1>
          <ul className="flex   items-center  gap-2 md:gap-12.5">
            <li className="  text-[10px]  sm:text-[16px] font-medium text-[#1D364D]">
              <Dropdown />
            </li>
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
            <div className="size-12.5 bg-[#F5F1EE] rounded-full flex justify-center items-center relative ">
              <Handbag color="#875541" />
              <div className="size-5 rounded-full bg-[#1D364D] flex justify-center items-center absolute top-0 -right-1">
                <p className="text-white">3</p>
              </div>
            </div>
          </Link>
          <div className=" hidden size-12.5 bg-[#F5F1EE] rounded-full md:flex justify-center items-center relative">
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
