import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BreadCrumbs } from "./BreadCrumbs";
import { Heart } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Share2 } from "lucide-react";
import { Star } from "lucide-react";
import { MessageSquareMore } from "lucide-react";
import Group_6 from "../assets/Group_6(1).svg";
import Group_9 from "../assets/Group_9(1).svg";
import Group_7 from "../assets/Group7(1).svg";
import Group_8 from "../assets/Group8.svg";
import Rectangle9 from "../assets/Rectangle9.svg";
import { Handbag } from "lucide-react";
import { Truck } from "lucide-react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Check_icon from "../assets/Checkicon.svg";
import Star1 from "../assets/star(1).svg";
import r1 from "../assets/1.svg";
import r2 from "../assets/2.svg";
import r3 from "../assets/3.svg";
import r4 from "../assets/4.svg";
import r5 from "../assets/5.svg";
import profile from "../assets/profile.svg";
import { ThumbsUp } from "lucide-react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Description from "./Description";
import Reviews from "./Reviews";
import { ReviewForm } from "./ReviewForm";
import Card from "./Card";
import Navbar from "./Navbar";
import { addToCart } from "@/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import StarRating from "./StarRating";
import { ChevronLeft, ChevronRight } from "lucide-react";
const ProductDetail = () => {
  const dispatch = useDispatch();
  // const { items, tempItems, totalPrice } = useSelector((state) => state.cart);
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [error, setError] = useState("");
  const [active, setActive] = useState("Description");
  const [activeSize, setActiveSize] = useState("small");
  const [quantity, SetQuantity] = useState(1);
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState("");

  const getProductDetail = async () => {
    try {
      const API = `https://dummyjson.com/products/${id}`;
      const response = await axios.get(API);
      console.log("response", response.data);
      setProduct(response.data);
      const similarAPI = `https://dummyjson.com/products/category/${response.data.category}`;
      const similarResponse = await axios.get(similarAPI);
      console.log("similarResponse", similarResponse);
      const filtered = similarResponse.data.products.filter(
        (item) => item.id !== response.data.id,
      );
      setSimilarProducts(filtered);
    } catch (error) {
      setError("failed to load data", error);
    }
  };

  // Calculate rating distribution from reviews
  const calculateRatingDistribution = () => {
    if (!product.reviews || product.reviews.length === 0) {
      return [0, 0, 0, 0, 0];
    }

    const distribution = [0, 0, 0, 0, 0]; // For 5, 4, 3, 2, 1 stars
    product.reviews.forEach((review) => {
      const rating = Math.floor(review.rating);
      if (rating >= 1 && rating <= 5) {
        distribution[5 - rating]++;
      }
    });

    // Convert to percentages
    const total = product.reviews.length;
    return distribution.map((count) =>
      total > 0 ? Math.round((count / total) * 100) : 0,
    );
  };

  const ratingDistribution = calculateRatingDistribution();

  useEffect(() => {
    getProductDetail();
  }, [id]);

  return (
    <div>
      {/* <Navbar /> */}
      <div className="px-4 md:px-8 xl:px-20 mt-10">
        <div
          id="product-top"
          className="flex flex-col  lg:flex-row  lg:justify-between"
        >
          <div id="left-container" className="">
            <img
              className="  xl:w-150 rounded-[17px] border"
              src={product.images}
              alt="product.title"
            />
            <div className="relative group sm:w-100 xl:w-150 mt-4">
              <button className="product-gallery-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full z-10 p-2 hover:opacity-75 cursor-pointer hidden md:block [&.swiper-button-disabled]:opacity-50 [&.swiper-button-disabled]:pointer-events-none transition-opacity duration-300">
                <ChevronLeft size={40} strokeWidth={1.5} color="#000" />
              </button>
              <button className="product-gallery-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-10 p-2 hover:opacity-75 cursor-pointer hidden md:block [&.swiper-button-disabled]:opacity-50 [&.swiper-button-disabled]:pointer-events-none transition-opacity duration-300">
                <ChevronRight size={40} strokeWidth={1.5} color="#000" />
              </button>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                // slidesPerView={4}
                navigation={{
                  nextEl: ".product-gallery-next",
                  prevEl: ".product-gallery-prev",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 2, // mobile
                  },
                  640: {
                    slidesPerView: 3, // tablets
                  },
                  1024: {
                    slidesPerView: 4, // desktop
                  },
                }}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
                className="w-full"
              >
                <SwiperSlide>
                  {" "}
                  <img
                    className="xl:size-30 rounded-[14px]"
                    src={product.images}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="xl:size-30" src={product.images} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img className="xl:size-30" src={product.images} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img className="xl:size-30" src={product.images} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img className="xl:size-30" src={product.images} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img className="xl:size-30" src={product.images} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img className="xl:size-30" src={product.images} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="right-container flex flex-col   xl:w-150">
            <div>
              <BreadCrumbs
                className="bg-[#EDF0F8] px-2.25 py-1.5 rounded-[6px] "
                items={[
                  {
                    label:
                      (product.category &&
                        product.category.charAt(0).toUpperCase() +
                          product.category.slice(1)) ||
                      "Category",
                    link: `/${product.category}`,
                  },
                  { label: product.title || "Product" },
                ]}
              />
            </div>
            <div
              id="sideboard"
              className="flex items-center sm:items-start justify-between mt-7 gap-3"
            >
              <div id="sideboard-left">
                <h1 className=" text-[10px] sm:text-[28px] font-semibold text-black">
                  {product.title}
                </h1>
                <p className="text-[#B9BBBF] font-normal text-[10px] sm:text-[16px]">
                  {product.brand}
                </p>
              </div>
              <div id="sideboard-right" className="flex gap-4 items-start">
                <div className="bg-[#FFF0F0] flex gap-1.75  py-1.75 px-2.5 rounded-[10px] items-center ">
                  <Heart color="#D46F77" size={20} />
                  <p className="text-[#D46F77] text-[16px] font-semibold  ">
                    109
                  </p>
                </div>
                <div className="flex items-center px-2 py-2 bg-[#EDF0F8] rounded-[10px]">
                  <Bookmark color="#3A4980" size={20} />
                </div>
                <div className="flex items-center px-2 py-2 bg-[#EDF0F8] rounded-[10px]">
                  <Share2 color="#3A4980" size={20} />
                </div>
              </div>
            </div>
            <hr className="w-full h-3 text-[#E4E4E4] mt-7" />
            <div id="review" className="flex items-center gap-3 sm:gap-10 ">
              <div id="left">
                <h2 className="sm:text-[34px] text-[#3A4980] font-bold">
                  ${product.price}
                </h2>
                <h4 className="sm:text-[21px] text-black/50 font-normal line-through">
                  {product.price && product.discountPercentage
                    ? `$${(
                        product.price /
                        (1 - product.discountPercentage / 100)
                      ).toFixed(2)}`
                    : null}
                </h4>
              </div>
              <div id="right" className="grid gap-2 sm:gap-4">
                <div id="right-top" className="flex gap-3 ">
                  <div
                    id="right-top-left"
                    className="flex px-2.5 py-1.75 gap-2 items-center bg-[#FBF3EA] rounded-[27px]"
                  >
                    <Star size={16} color="#D48D3B" />
                    <p className="text-[14px] font-semibold text-[#D48D3B] ">
                      {product.rating || "N/A"}
                    </p>
                  </div>

                  <div
                    id="right-top-right"
                    className="px-2.5 py-1.75 flex gap-1.75 rounded-[27px] bg-[#EDF0F8] items-center"
                  >
                    <MessageSquareMore color="#3A4980" size={16} />
                    <p className=" text-[10px] sm:text-[14px] font-semibold text-[#3A4980]">
                      {product.reviews?.length || 0} Reviews
                    </p>
                  </div>
                </div>
                <div id="right-bottom">
                  <p className="text-[10px] sm:text-[14px]">
                    <span className="text-[#3E9242]  sm:text-[14px]font-semibold">
                      93%
                    </span>{" "}
                    of buyers have recommended this.
                  </p>
                </div>
              </div>
            </div>
            <hr className="w-full h-3 text-[#E4E4E4] mt-7" />
            <div id="choose-color" className="grid gap-4">
              <p className="text-[#B9BBBF] text-[16px] font-medium">
                Choose a Color
              </p>
              <div className="flex gap-1 md:gap-3 items-center">
                <div
                  className={`size-12.5 rounded-full bg-[#ECDECC] cursor-pointer flex items-center justify-center ${
                    selectedColor === "#ECDECC"
                      ? "ring-4 ring-offset-4 ring-[#ECDECC]"
                      : ""
                  }`}
                  onClick={() => setSelectedColor("#ECDECC")}
                >
                  {selectedColor === "#ECDECC" && (
                    <Check color={"white"} size={24} strokeWidth={3} />
                  )}
                </div>

                <div
                  className={`size-12.5 rounded-full bg-[#BBD278] cursor-pointer flex items-center justify-center ${
                    selectedColor === "#BBD278"
                      ? "ring-4 ring-offset-4 ring-[#BBD278]"
                      : ""
                  }`}
                  onClick={() => setSelectedColor("#BBD278")}
                >
                  {selectedColor === "#BBD278" && (
                    <Check color={"white"} size={24} strokeWidth={3} />
                  )}
                </div>
                <div
                  className={`size-12.5 rounded-full bg-[#BBC1F8] cursor-pointer flex items-center justify-center ${
                    selectedColor === "#BBC1F8"
                      ? "ring-4 ring-offset-4 ring-[#BBC1F8]"
                      : ""
                  }`}
                  onClick={() => setSelectedColor("#BBC1F8")}
                >
                  {selectedColor === "#BBC1F8" && (
                    <Check color={"white"} size={24} strokeWidth={3} />
                  )}
                </div>
                <div
                  className={`size-12.5 rounded-full bg-[#FFD3F8] cursor-pointer  flex items-center justify-center ${
                    selectedColor === "#FFD3F8"
                      ? "ring-4 ring-offset-4 ring-[#FFD3F8]"
                      : ""
                  }`}
                  onClick={() => setSelectedColor("#FFD3F8")}
                >
                  {selectedColor === "#FFD3F8" && (
                    <Check color={"white"} size={24} strokeWidth={3} />
                  )}
                </div>
                <div
                  className={`size-12.5 rounded-full bg-linear-to-b from-[#FFB6B6] to-[#98C185] flex items-center justify-center ${
                    selectedColor === "#FFB6B6"
                      ? "ring-4 ring-offset-4 ring-[#FFB6B6]"
                      : ""
                  }`}
                  onClick={() => setSelectedColor("#FFB6B6")}
                >
                  {selectedColor === "#FFB6B6" && (
                    <Check color={"white"} size={24} strokeWidth={3} />
                  )}
                </div>
              </div>
            </div>
            <hr className="w-full h-3 text-[#E4E4E4] mt-7" />
            <div className="grid gap-4">
              <p className="text-[#B9BBBF]  text-[16px] font-medium">
                Choose a Size
              </p>
              <div className="flex gap-2 md:gap-3  ">
                <div
                  className="flex  gap-1 sm:gap-2 rounded-[8px] px-1 sm:px-2.5 sm:py-1.75 bg-[#EDF0F8] cursor-pointer "
                  onClick={() => {
                    setActiveSize("small");
                  }}
                >
                  <input
                    type="radio"
                    checked={activeSize === "small"}
                    className="cursor-pointer accent-[#3A4980]"
                  />
                  <p className=" text-[10px]   md:text-[14px] sm:font-medium text-[#3A4980]">
                    Small
                  </p>
                </div>
                <div
                  className="flex   gap-1 sm:gap-2 rounded-[8px] px-1 md:px-2.5 sm:py-1.75 bg-[#EDF0F8] cursor-pointer "
                  onClick={() => {
                    setActiveSize("medium");
                  }}
                >
                  <input
                    type="radio"
                    checked={activeSize === "medium"}
                    className="cursor-pointer accent-[#3A4980]"
                  />
                  <p className="text-[10px]  md:text-[14px] sm:font-medium text-[#3A4980]">
                    Medium
                  </p>
                </div>
                <div
                  className="flex gap-1 sm:gap-2 rounded-[8px] px-1 md:px-2.5 sm:py-1.75 bg-[#EDF0F8] cursor-pointer "
                  onClick={() => {
                    setActiveSize("Large");
                  }}
                >
                  <input
                    type="radio"
                    checked={activeSize === "Large"}
                    className="cursor-pointer accent-[#3A4980]"
                  />
                  <p className="text-[10px]  md:text-[14px] sm:font-medium text-[#3A4980]">
                    {" "}
                    Large
                  </p>
                </div>
                <div
                  className="flex  gap-1 sm:gap-2 rounded-[8px] px-1  sm:px-2.5 sm:py-1.75 bg-[#EDF0F8] cursor-pointer "
                  onClick={() => {
                    setActiveSize("Extra Large");
                  }}
                >
                  <input
                    type="radio"
                    checked={activeSize === "Extra Large"}
                    className="cursor-pointer accent-[#3A4980]"
                  />
                  <p className="text-[10px]  md:text-[14px] sm:font-medium text-[#3A4980]">
                    Extra Large
                  </p>
                </div>
                <div
                  className="flex gap-1 sm:gap-2 rounded-[8px] px-1 sm:px-2.5 sm:py-1.75 bg-[#EDF0F8] cursor-pointer "
                  onClick={() => {
                    setActiveSize("XXL");
                  }}
                >
                  <input
                    type="radio"
                    checked={activeSize === "XXL"}
                    className="cursor-pointer  accent-[#3A4980]"
                  />
                  <p className="text-[10px]  sm:text-[14px] sm:font-medium text-[#3A4980]">
                    XXL
                  </p>
                </div>
              </div>
            </div>
            <hr className="w-full h-3 text-[#E4E4E4] mt-7" />
            <div className="flex gap-5">
              <div className="flex rounded-[29.5px] bg-[#F3F3F3] w-25 sm:w-40 justify-between px-4 items-center py-1.75 ">
                <button
                  onClick={() => SetQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="text-[24px] font-bold text-[#A3A3A3] hover:text-[#3A4980] transition-colors cursor-pointer"
                >
                  -
                </button>
                <p className="sm:text-[22px] font-bold text-[#3A4980]">
                  {quantity}
                </p>
                <button
                  onClick={() => SetQuantity(quantity + 1)}
                  className="text-[24px] font-bold text-[#3A4980] hover:text-[#164C96] transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
              <div
                className="bg-[#3A4980] rounded-[29.5px] px-2 flex justify-center w-35 lg:w-75 items-center gap-3  text-white cursor-pointer hover:bg-[#164C96] transition-colors"
                onClick={() => {
                  dispatch(
                    addToCart({
                      product: {
                        id: product.id,
                        title: product.title,
                        thumbnail:
                          product.thumbnail ||
                          (Array.isArray(product.images)
                            ? product.images[0]
                            : product.images),
                        price: product.price,
                        category: product.category,
                      },
                      quantity,
                      size: activeSize,
                    }),
                  );
                  toast.success("Added to cart successfully 🛒");
                }}
              >
                <Handbag />
                <button className="cursor-pointer font-medium sm:font-semibold ">
                  Add To Cart
                </button>
              </div>
            </div>
            <div
              id="delivery-section"
              className=" grid gap-5 p-4 rounded-[14px] border border-[#E4E4E4] mt-7"
            >
              <div className="flex gap-4">
                <Truck color="#D75951" />
                <div>
                  <h3 className="text-[17px] font-bold text-[#1D364D]">
                    Free Delivery
                  </h3>
                  <p className="text-[14px] font-normal text-[#726C6C] underline ">
                    {product.shippingInformation}
                  </p>
                </div>
              </div>
              <hr className="w-full h-3 text-[#E4E4E4] " />
              <div className="flex gap-4">
                <Handbag color="#D75951" />
                <div className="">
                  <h3 className="text-[17px] font-bold text-[#1D364D]">
                    Return Delivery
                  </h3>
                  <p className="text-[14px] text-[#726C6C] font-normal ">
                    {product.returnPolicy}
                    <span className="underline"> Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-8 sm:mt-20 flex gap-10 ">
          <button
            className={` text-[16px] cursor-pointer relative ml-3 ${
              active === "Description"
                ? "text-[#164C96] font-semibold "
                : "text-[#98A2B3] font-normal"
            }`}
            onClick={() => {
              setActive("Description");
            }}
          >
            Description
            <hr
              className={` ${
                active === "Description"
                  ? "bg-[#164C96] h-1 w-27 absolute -left-3 top-10 "
                  : "hidden"
              } `}
            />
          </button>

          <button
            className={`text-[16px] font-normal text-[#98A2B3] cursor-pointer relative ${
              active === "Reviews"
                ? "text-[#164C96] font-semibold "
                : "text-[#98A2B3] font-normal"
            }`}
            onClick={() => {
              setActive("Reviews");
            }}
          >
            Reviews
            <hr
              className={` ${
                active === "Reviews"
                  ? "bg-[#164C96] h-1 w-27 absolute top-10 -right-7 "
                  : "hidden"
              } `}
            />
          </button>
        </div>

        <hr className="w-full h-1 bg-[#EAECF0] mt-4" />
        <div className={`${active === "Description" ? "flex" : "hidden"} mt-5`}>
          <div className=" flex flex-col gap-4 lg:gap-10 ">
            <div className="grid gap-2 sm:gap-4 lg:gap-10">
              <h4 className="text-[#344054] text-[24px] font-bold">
                Product Description
              </h4>
              <p className="text-[#667085] font-normal text-[16px]  sm:w-[80%]">
                When it's colder than the far side of the moon and spitting rain
                too, you've still got to look good. From water-repellent leather
                to a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you
                can keep your flame burning when the weather hits. Metal lace
                hardware and extended tongue bring mountain boot toughness,
                while the star-studded toe design gives your look the edge
              </p>
            </div>
            <div className="grid gap-5">
              <h4 className="text-[#344054] font-bold text-[24px] ">
                Benefits
              </h4>
              <div className="grid gap-4">
                <div className="flex gap-4">
                  <img src={Check_icon} alt="" />
                  <p className="text-[16px] text-[#667085] font-normal">
                    Durable leather is easily cleanable so you can keep your
                    look fresh.
                  </p>
                </div>
                <div className="flex gap-4">
                  <img src={Check_icon} alt="" />
                  <p className="text-[16px] text-[#667085] font-normal">
                    Durable leather is easily cleanable so you can keep your
                    look fresh.
                  </p>
                </div>
                <div className="flex gap-4">
                  <img src={Check_icon} alt="" />
                  <p className="text-[16px] text-[#667085] font-normal">
                    Durable leather is easily cleanable so you can keep your
                    look fresh.
                  </p>
                </div>
                <div className="flex gap-4">
                  <img src={Check_icon} alt="" />
                  <p className="text-[16px] text-[#667085] font-normal">
                    Durable leather is easily cleanable so you can keep your
                    look fresh.
                  </p>
                </div>
                <div className="flex gap-4">
                  <img src={Check_icon} alt="" />
                  <p className="text-[16px] text-[#667085] font-normal">
                    Durable leather is easily cleanable so you can keep your
                    look fresh.
                  </p>
                </div>
                <div className="flex gap-4">
                  <img src={Check_icon} alt="" />
                  <p className="text-[16px] text-[#667085] font-normal">
                    Durable leather is easily cleanable so you can keep your
                    look fresh.
                  </p>
                </div>
                <div className="flex gap-4">
                  <img src={Check_icon} alt="" />
                  <p className="text-[16px] text-[#667085] font-normal">
                    Durable leather is easily cleanable so you can keep your
                    look fresh.
                  </p>
                </div>
                <div className="flex gap-4">
                  <img src={Check_icon} alt="" />
                  <p className="text-[16px] text-[#667085] font-normal">
                    Durable leather is easily cleanable so you can keep your
                    look fresh.
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
                    Durable leather is easily cleanable so you can keep your
                    look fresh.
                  </p>
                </div>
                <div className="flex gap-4">
                  <img src={Check_icon} alt="" />
                  <p className="text-[16px] text-[#667085] font-normal">
                    Durable leather is easily cleanable so you can keep your
                    look fresh.
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
            <div>
              <h4 className="text-center  sm:text-[30px] font-bold text-[#344054]">
                Similar Items You Might Also Like
              </h4>
              <div className="relative group w-75 sm:w-140 md:w-180 min-[820px]:w-200 lg:w-230 xl:w-7xl mt-4 mx-auto flex justify-center items-center">
                <button className="similar-items-desc-prev absolute -left-6 top-1/3  z-10 size-11 flex items-center justify-center bg-white rounded-full border border-[#E4E7EC] shadow-sm hover:bg-gray-50 cursor-pointer disabled:opacity-50">
                  <ChevronLeft size={24} color="#1D2939" strokeWidth={1.5} />
                </button>
                <button className="similar-items-desc-next absolute -right-6 top-1/3  z-10 size-11 flex items-center justify-center bg-white rounded-full border border-[#E4E7EC] shadow-sm hover:bg-gray-50 cursor-pointer disabled:opacity-50">
                  <ChevronRight size={24} color="#1D2939" strokeWidth={1.5} />
                </button>
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={20}
                  // slidesPerView={4}
                  navigation={{
                    nextEl: ".similar-items-desc-next",
                    prevEl: ".similar-items-desc-prev",
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1, // mobile
                    },
                    640: {
                      slidesPerView: 2, // tablets
                    },
                    1024: {
                      slidesPerView: 3, // desktop
                    },
                    1280: {
                      slidesPerView: 4,
                    },
                  }}
                  // pagination={{ clickable: true }}
                  // scrollbar={{ draggable: true }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  // onSlideChange={() => console.log("slide change")}
                  className="w-full"
                >
                  {similarProducts.map((item, id) => {
                    return (
                      <SwiperSlide key={id}>
                        <Link to={`/product/${item.id}`}>
                          <Card
                            key={id}
                            product={item}
                            showActionButtons={false}
                          />
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className={`${active === "Reviews" ? "block" : "hidden"} mt-5`}>
          <h4 className="text-[#344054] text-[24px] font-bold">
            Customers Feedback
          </h4>
          <div className="flex gap-20 p-5">
            <div className="feedback-left ">
              <h1 className="text-[#164C96] font-bold text-[60px]">
                {product.rating || "N/A"}
              </h1>
              <StarRating
                rating={product.rating || 0}
                size={20}
                showRating={false}
              />
              <p className="text-[16px] font-normal text-[#4F547B] mt-2 sm:mt-4">
                Product Rating
              </p>
            </div>

            <div className="feedback-right flex-1 grid gap-4">
              {[5, 4, 3, 2, 1].map((starCount, index) => (
                <div key={starCount} className="flex gap-4 items-center">
                  <div className="flex-1 bg-[#F0F2F5] rounded-full h-2">
                    <div
                      className="bg-[#2E7D32] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${ratingDistribution[index]}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center gap-0.5 min-w-[80px]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < starCount ? "#F59E0B" : "#E5E7EB"}
                        color={i < starCount ? "#F59E0B" : "#E5E7EB"}
                      />
                    ))}
                  </div>
                  <p className="text-[14px] font-semibold text-[#164C96] w-10">
                    {ratingDistribution[index]}%
                  </p>
                </div>
              ))}
            </div>
          </div>
          <h4 className="text-[#344054] text-[24px] font-bold">Reviews</h4>
          <div>
            <div id="1" className="mt-5">
              {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                  <div key={`${review.reviewerEmail}-${index}`}>
                    <div className="flex items-start gap-6">
                      <img src={profile} alt="" />
                      <div id="info" className="grid gap-2 sm:gap-4">
                        <div id="head" className="grid gap-1.25">
                          <div className="flex gap-2 items-center">
                            <h4 className="text-[17px] font-medium text-[#1D2939]">
                              {review.reviewerName}
                            </h4>
                            <p className="text-[13px] font-normal text-[#4F547B]">
                              {new Date(review.date).toLocaleDateString()}
                            </p>
                          </div>
                          <StarRating
                            rating={review.rating}
                            size={14}
                            showRating={false}
                          />
                        </div>
                        <p className="text-[15px] font-normal text-[#667085]">
                          {review.comment}
                        </p>
                        <div id="helpful-btn" className="flex gap-2 sm:gap-4">
                          <div className="flex gap-1.25 items-center">
                            <ThumbsUp color="#667085" size={14} />
                            <p className="text-[13px] font-normal text-[#667085]">
                              Like
                            </p>
                          </div>
                          <button className="text-[13px] font-normal text-[#D94A27] cursor-pointer">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                    {index < product.reviews.length - 1 && (
                      <hr className="h-px w-full bg-[#EDEDED] my-10 " />
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-10">
                  No reviews yet
                </p>
              )}
            </div>
            <div id="2" className="flex justify-center items-center my-10">
              <button className="text-[16px] font-normal text-[#D94A27]">
                View All Reviews
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold text-[#1D2939]">
              Write a Review
            </h3>
            <div className="mt-3  lg:mt-6">
              <p className="text-[16px] font-normal text-[#1D2939]">
                What is it like to Product?
              </p>
              <img src={Star1} alt="rating" className="mt-3 h-2.75" />
            </div>
            <ReviewForm />
            <div>
              <h4 className="text-left text-[24px] sm:text-[30px] font-bold text-[#1D2939] mb-6">
                Similar Items You Might Also Like
              </h4>
              <div className="relative group w-75 sm:w-140 md:w-180 min-[820px]:w-200 lg:w-230 xl:w-7xl mt-4 mx-auto flex justify-center items-center">
                <button className="similar-items-prev absolute -left-6 top-1/3  z-10 size-11 flex items-center justify-center bg-white rounded-full border border-[#E4E7EC] shadow-sm hover:bg-gray-50 cursor-pointer disabled:opacity-50">
                  <ChevronLeft size={24} color="#1D2939" strokeWidth={1.5} />
                </button>
                <button className="similar-items-next absolute -right-6 top-1/3  z-10 size-11 flex items-center justify-center bg-white rounded-full border border-[#E4E7EC] shadow-sm hover:bg-gray-50 cursor-pointer disabled:opacity-50">
                  <ChevronRight size={24} color="#1D2939" strokeWidth={1.5} />
                </button>
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={20}
                  // slidesPerView={4}
                  navigation={{
                    nextEl: ".similar-items-next",
                    prevEl: ".similar-items-prev",
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1, // mobile
                    },
                    640: {
                      slidesPerView: 2, // tablets
                    },
                    1024: {
                      slidesPerView: 3, // desktop
                    },
                    1280: {
                      slidesPerView: 4,
                    },
                  }}
                  // pagination={{ clickable: true }}
                  // scrollbar={{ draggable: true }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  // onSlideChange={() => console.log("slide change")}
                  className="w-full"
                >
                  {similarProducts.map((item, id) => {
                    return (
                      <SwiperSlide key={id}>
                        <Link to={`/product/${item.id}`}>
                          <Card key={id} product={item} />
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
