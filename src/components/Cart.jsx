import React from "react";
import Group345 from "../assets/Group345.svg";
const Cart = () => {
  return (
    <div className="px-5 lg:px-20">
      <h3 className="text-[40px] text-[#0D707D] font-normal">Shopping Cart</h3>
      <div className="flex justify-around mt-5">
        <p className="text-black font-bold text-[24px] ">Item</p>
        <p className="text-black font-bold text-[24px]">Price</p>
        <p className="text-black font-bold text-[24px]">Quantity</p>
        <p className="text-black font-bold text-[24px]">Subtotal</p>
      </div>
      <hr className="bg-[#7BB2B4] w-full h-0.5" />
      <div className="flex justify-around">
        {/* <div>
          <p className="text-[24px] text-[#2C2E3D] font-bold">Apple</p>
          <h4 className="text-black text-[14px] font-bold">SKU #8675309JNY</h4>
        </div>
        <p className="text-[24px] text-black font-bold">$1.02</p>
        <div>
          <div className="flex ">
            <div className="size-6  border-2 border-black rounded-full flex justify-center items-center ">
              <button className="font-bold text-black flex justify-center items-center">
                -
              </button>
            </div>
            <p className="text-black text-[24px] font-bold">0</p>
            <div className="size-6  border-2 border-black rounded-full flex justify-center items-center">
              <button className="font-bold text-black flex justify-center items-center">
                +
              </button>
            </div>
          </div>
          <p className="font-regular text-[14px] uppercase">
            In-stock:<span className="text-[#0D707D] font-bold">6</span>
          </p>
        </div>
        <p className="text-black text-[24px] font-bold">$0</p>
      </div> */}
      </div>
    </div>
  );
};

export default Cart;
