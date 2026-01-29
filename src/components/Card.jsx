import React from "react";
import frame_10 from "../assets/frame10.svg";
import { Heart } from "lucide-react";
import StarRating from "./StarRating";
const Card = ({ product, id }) => {
  return (
    <div
      key={id}
      className="rounded-[18.48px] border-2 border-[#F7F5F7] grid gap-3  max-[350px]:w-[70] sm:w-full  "
    >
      <div className="relative">
        <img
          src={product.images[0]}
          alt={product.title}
          className="bg-[#F7F5F7] rounded-[18.48px]  sm:h-75 sm:w-full sm:bg-cover sm:bg-center "
        />
        <div className="absolute top-2 right-2 h-11 w-11 bg-[#FCFCFD] rounded-full  flex justify-center items-center">
          {" "}
          <Heart />
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between ">
          <h4 className=" capitalize text-[#667085]">
            {product.title.length > 20
              ? product.title.slice(0, 20) + "..."
              : product.title}
          </h4>
          <p className="text-[18px] font-bold text-[#344054]">
            ${product.price}
          </p>
        </div>
        <p className="text-[#98A2B3]">{product.availabilityStatus}</p>
        <div className="flex gap-2 mt-3">
          <StarRating rating={product.rating} size={16} showRating={false} />
          <p className="text-[#98A2B3]">({product.rating})</p>
        </div>
        <div className="flex justify-between mt-3">
          <button className="bg-[#3A4980] text-white rounded-[50px] text-sm font-semibold px-2 py-1 w-32 cursor-pointer">
            Add To Cart
          </button>
          <button className="text-[#344054] rounded-[50px] text-sm font-semibold border border-[#D0D5DD] px-2 py-1 w-32 cursor-pointer ">
            Add Shortlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
