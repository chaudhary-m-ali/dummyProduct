import React, { useState } from "react";
import Check_icon from "../assets/Checkicon.svg";

const Description = () => {
  const [active, setactive] = useState("");

  return (
    <div>
      <div className={`${active === "Description" ? "flex" : "hidden"}`}>
        <div className="grid gap-10">
          <div className="grid gap-10">
            <h4 className="text-[#344054] text-[24px] font-bold mt-5">
              Product Description
            </h4>
            <p className="text-[#667085] font-normal text-[16px]">
              When it's colder than the far side of the moon and spitting rain
              too, you've still got to look good. From water-repellent leather
              to a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you
              can keep your flame burning when the weather hits. Metal lace
              hardware and extended tongue bring mountain boot toughness, while
              the star-studded toe design gives your look the edge
            </p>
          </div>
          <div className="grid gap-5">
            <h4 className="text-[#344054] font-bold text-[24px] ">Benefits</h4>
            <div className="grid gap-4">
              <div className="flex gap-4">
                <img src={Check_icon} alt="" />
                <p className="text-[16px] text-[#667085] font-normal">
                  Durable leather is easily cleanable so you can keep your look
                  fresh.
                </p>
              </div>
              <div className="flex gap-4">
                <img src={Check_icon} alt="" />
                <p className="text-[16px] text-[#667085] font-normal">
                  Durable leather is easily cleanable so you can keep your look
                  fresh.
                </p>
              </div>
              <div className="flex gap-4">
                <img src={Check_icon} alt="" />
                <p className="text-[16px] text-[#667085] font-normal">
                  Durable leather is easily cleanable so you can keep your look
                  fresh.
                </p>
              </div>
              <div className="flex gap-4">
                <img src={Check_icon} alt="" />
                <p className="text-[16px] text-[#667085] font-normal">
                  Durable leather is easily cleanable so you can keep your look
                  fresh.
                </p>
              </div>
              <div className="flex gap-4">
                <img src={Check_icon} alt="" />
                <p className="text-[16px] text-[#667085] font-normal">
                  Durable leather is easily cleanable so you can keep your look
                  fresh.
                </p>
              </div>
              <div className="flex gap-4">
                <img src={Check_icon} alt="" />
                <p className="text-[16px] text-[#667085] font-normal">
                  Durable leather is easily cleanable so you can keep your look
                  fresh.
                </p>
              </div>
              <div className="flex gap-4">
                <img src={Check_icon} alt="" />
                <p className="text-[16px] text-[#667085] font-normal">
                  Durable leather is easily cleanable so you can keep your look
                  fresh.
                </p>
              </div>
              <div className="flex gap-4">
                <img src={Check_icon} alt="" />
                <p className="text-[16px] text-[#667085] font-normal">
                  Durable leather is easily cleanable so you can keep your look
                  fresh.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-5">
            <h4 className="text-[24px] text-[#344054] font-bold">
              Product Details
            </h4>
            <div className="grid gap-4">
              <div className="flex gap-4">
                <img src={Check_icon} alt="" />
                <p className="text-[16px] text-[#667085] font-normal">
                  Durable leather is easily cleanable so you can keep your look
                  fresh.
                </p>
              </div>
              <div className="flex gap-4">
                <img src={Check_icon} alt="" />
                <p className="text-[16px] text-[#667085] font-normal">
                  Durable leather is easily cleanable so you can keep your look
                  fresh.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-5">
            <h4 className="text-[24px] text-[#344054] font-bold">
              More Details
            </h4>
            <div className="flex gap-4">
              <img src={Check_icon} alt="" />
              <p className="text-[16px] text-[#667085] font-normal">
                Durable leather is easily cleanable so you can keep your look
                fresh.
              </p>
            </div>
            <div className="flex gap-4">
              <img src={Check_icon} alt="" />
              <p className="text-[16px] text-[#667085] font-normal">
                Durable leather is easily cleanable so you can keep your look
                fresh.
              </p>
            </div>
            <div className="flex gap-4">
              <img src={Check_icon} alt="" />
              <p className="text-[16px] text-[#667085] font-normal">
                Durable leather is easily cleanable so you can keep your look
                fresh.
              </p>
            </div>
            <div className="flex gap-4">
              <img src={Check_icon} alt="" />
              <p className="text-[16px] text-[#667085] font-normal">
                Durable leather is easily cleanable so you can keep your look
                fresh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
