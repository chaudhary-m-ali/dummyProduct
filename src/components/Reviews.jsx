import React from "react";
import Star from "../assets/star.svg";
const Reviews = () => {
  return (
    <div>
      <h4 className="text-[#344054] text-[24px] font-bold">
        Customers Feedback
      </h4>
      <div className="flex">
        <div className="feedback-left">
          <h1 className="text-[#164C96] font-bold text-[60px]">4.8</h1>
          <img src={Star} alt="" />
          <p>Product Rating</p>
        </div>
        <div className="feedback-right"></div>
      </div>
    </div>
  );
};

export default Reviews;
