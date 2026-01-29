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
              className="  xl:w-150 rounded-[17px] border   "
              src={product.images}
              alt="product.title"
            />
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              // slidesPerView={4}
              navigation
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
              className="   sm:w-100 xl:w-150 mt-4"
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
          <div className="right-container flex flex-col   xl:w-150">
            <div className="mt-10">
              <BreadCrumbs
                className="bg-[#EDF0F8] px-2.25 py-1.5 rounded-[6px]"
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
                  Embrace Sideboards
                </h1>
                <p className="text-[#B9BBBF] font-normal text-[10px] sm:text-[16px]">
                  Teixeira Design Studio
                </p>
              </div>
              <div id="sideboard-right" className="flex gap-4 items-start">
                <div className="bg-[#FFF0F0] flex gap-2  py-1.75 px-2.5 rounded-[10px] ">
                  <Heart color="#D46F77" />
                  <p className="text-[#D46F77] text-[16px] font-semibold  ">
                    109
                  </p>
                </div>
                <div className="flex items-center px-2 py-2 bg-[#EDF0F8] rounded-[10px]">
                  <Bookmark color="#3A4980" />
                </div>
                <div className="flex items-center px-2 py-2 bg-[#EDF0F8] rounded-[10px]">
                  <Share2 color="#3A4980" />
                </div>
              </div>
            </div>
            <hr className="w-full h-3 text-[#E4E4E4] mt-7" />
            <div id="review" className="flex items-center gap-3 sm:gap-10 ">
              <div id="left">
                <h2 className="sm:text-[34px] text-[#3A4980] font-bold">
                  $71.56
                </h2>
                <h4 className="sm:text-[21px] text-black/50 font-normal line-through ">
                  $71.56
                </h4>
              </div>
              <div id="right" className="grid gap-2 sm:gap-4">
                <div id="right-top" className="flex gap-3 ">
                  <div
                    id="right-top-left"
                    className="flex px-2.5 py-1.75 gap-2 items-center bg-[#FBF3EA] rounded-[27px]"
                  >
                    <Star color="#D48D3B" fill="#D48D3B" />
                    <p className="text-[14px] font-semibold text-[#D48D3B] ">
                      {product.rating || "N/A"}
                    </p>
                  </div>

                  <div
                    id="right-top-right"
                    className="px-2.5 py-1.75 flex gap-2 sm:gap-8 rounded-[27px] bg-[#EDF0F8] items-center"
                  >
                    <MessageSquareMore color="#3A4980" />
                    <p className=" text-[10px] sm:text-[14px] font-semibold text-[#3A4980]">
                      67 Reviews
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
                <img src={Group_8} alt="" />
                <img src={Group_6} alt="" />
                <img src={Group_7} alt="" className="size-13" />
                <img src={Group_8} alt="" />
                <img src={Rectangle9} alt="" className="size-13" />
              </div>
            </div>
            <hr className="w-full h-3 text-[#E4E4E4] mt-7" />
            <div className="grid gap-4">
              <p className="text-[#B9BBBF]  text-[16px] font-medium">
                Choose a Size
              </p>
              <div className="flex gap-2 md:gap-3  ">
                <div className="flex  gap-1 sm:gap-2 rounded-xl px-1 sm:px-2.5 sm:py-1.75 bg-[#EDF0F8] ">
                  <input
                    type="radio"
                    checked={activeSize === "small"}
                    onChange={() => {
                      setActiveSize("small");
                    }}
                  />
                  <p className=" text-[10px]   md:text-[14px] sm:font-medium text-[#3A4980]">
                    Small
                  </p>
                </div>
                <div className="flex   gap-1 sm:gap-2 rounded-xl px-1 md:px-2.5 sm:py-1.75 bg-[#EDF0F8] ">
                  <input
                    type="radio"
                    checked={activeSize === "medium"}
                    onChange={() => {
                      setActiveSize("medium");
                    }}
                  />
                  <p className="text-[10px]  md:text-[14px] sm:font-medium text-[#3A4980]">
                    Medium
                  </p>
                </div>
                <div className="flex gap-1 sm:gap-2 rounded-xl px-1 md:px-2.5 sm:py-1.75 bg-[#EDF0F8] ">
                  <input
                    type="radio"
                    checked={activeSize === "Large"}
                    onChange={() => {
                      setActiveSize("Large");
                    }}
                  />
                  <p className="text-[10px]  md:text-[14px] sm:font-medium text-[#3A4980]">
                    {" "}
                    Large
                  </p>
                </div>
                <div className="flex  gap-1 sm:gap-2 rounded-xl px-1  sm:px-2.5 sm:py-1.75 bg-[#EDF0F8] ">
                  <input
                    type="radio"
                    checked={activeSize === "Extra Large"}
                    onChange={() => {
                      setActiveSize("Extra Large");
                    }}
                  />
                  <p className="text-[10px]  md:text-[14px] sm:font-medium text-[#3A4980]">
                    Extra Large
                  </p>
                </div>
                <div className="flex gap-1 sm:gap-2 rounded-xl px-1 sm:px-2.5 sm:py-1.75 bg-[#EDF0F8] ">
                  <input
                    type="radio"
                    checked={activeSize === "XXL"}
                    onChange={() => {
                      setActiveSize("XXL");
                    }}
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
                  className="text-[24px] font-bold text-[#A3A3A3] hover:text-[#3A4980] transition-colors"
                >
                  -
                </button>
                <p className="sm:text-[22px] font-bold text-[#3A4980]">
                  {quantity}
                </p>
                <button
                  onClick={() => SetQuantity(quantity + 1)}
                  className="text-[24px] font-bold text-[#3A4980] hover:text-[#164C96] transition-colors"
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
                    Enter your Postal code for Delivery Availability
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
                    Free 30 days Delivery{" "}
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
              <p className="text-[#667085] font-normal text-[16px]  sm:w-full">
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
              <div>
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={20}
                  // slidesPerView={4}r
                  navigation
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
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  className=" w-75 sm:w-140 md:w-180 min-[820px]:w-200 lg:w-230  xl:w-7xl mt-4 flex justify-center items-center "
                >
                  {similarProducts.map((item, id) => {
                    return (
                      <SwiperSlide>
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
        <div className={`${active === "Reviews" ? "block" : "hidden"} mt-5`}>
          <h4 className="text-[#344054] text-[24px] font-bold">
            Customers Feedback
          </h4>
          <div className="flex gap-20 p-5">
            <div className="feedback-left ">
              <h1 className="text-[#164C96] font-bold text-[60px]">4.8</h1>
              <img src={Star1} alt="" />
              <p className="text-[16px] font-normal text-[#4F547B] mt-2 sm:mt-4">
                Product Rating
              </p>
            </div>
            <div className="feedback-right p-5 grid gap-2">
              <div className="flex gap-4">
                <img src={r1} alt="" />
                <p className="text-[16px] font-normal text-[#164C96]">70%</p>
              </div>
              <div className="flex gap-4">
                <img src={r2} alt="" />
                <p className="text-[16px] font-normal text-[#164C96]">15%</p>
              </div>
              <div className="flex gap-4">
                <img src={r3} alt="" />
                <p className="text-[16px] font-normal text-[#164C96]">10%</p>
              </div>
              <div className="flex gap-4">
                <img src={r4} alt="" />
                <p className="text-[16px] font-normal text-[#164C96]">3%</p>
              </div>
              <div className="flex gap-4">
                <img src={r5} alt="" />
                <p className="text-[16px] font-normal text-[#164C96]">2%</p>
              </div>
            </div>
          </div>
          <h4 className="text-[#344054] text-[24px] font-bold">Reviews</h4>
          <div>
            <div id="1" className="mt-5">
              <div id="review-1" className="flex items-start gap-6">
                <img src={profile} alt="" />
                <div id="info" className="grid gap-2 sm:gap-4">
                  <div id="head" className="grid gap-1.25">
                    <div className="flex gap-2 items-center">
                      <h4 className="text-[17px] font-medium text-[#1D2939]">
                        Nicolas cage
                      </h4>
                      <p className="text-[13px] font-normal text-[#4F547B]">
                        3 Days ago
                      </p>
                    </div>
                    <img src={Star1} alt="rating" className="h-2.75" />
                  </div>
                  <h4 className="text-[15px] font-normal text-[#1D2939]">
                    Greate Product
                  </h4>
                  <p className="text-[15px] font-normal text-[#667085]">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour
                  </p>
                  <div id="helpful-btn" className="flex gap-2 sm:gap-4">
                    <div className="flex gap-1.25 items-center">
                      <ThumbsUp color="#667085" size={14} />
                      <p className="text-[13px] font-normal text-[#667085]">
                        Like
                      </p>
                    </div>
                    <button className="text-[13px] font-normal text-[#D94A27] cursor-pointer">
                      Replay
                    </button>
                  </div>
                </div>
              </div>
              <hr className="h-px w-full bg-[#EDEDED] my-10 " />
              <div id="review-2" className="flex items-start gap-6">
                <img src={profile} alt="" />
                <div id="info" className="grid gap-4">
                  <div id="head" className="grid gap-1.25">
                    <div className="flex gap-2 items-center">
                      <h4 className="text-[17px] font-medium text-[#1D2939]">
                        Sr.Robert Downey
                      </h4>
                      <p className="text-[13px] font-normal text-[#4F547B]">
                        3 Days ago
                      </p>
                    </div>
                    <img src={Star1} alt="rating" height={11} />
                  </div>
                  <h4 className="text-[15px] font-normal text-[#1D2939]">
                    The best product In Market
                  </h4>
                  <p className="text-[15px] font-normal text-[#667085]">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                  <div id="helpful-btn" className="flex gap-4">
                    <div className="flex gap-1.25 items-center">
                      <ThumbsUp color="#667085" size={14} />
                      <p className="text-[13px] font-normal text-[#667085]">
                        Like
                      </p>
                    </div>
                    <button className="text-[13px] font-normal text-[#D94A27] cursor-pointer">
                      Replay
                    </button>
                  </div>
                </div>
              </div>
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
              <h4 className="text-center  sm:text-[30px] font-bold text-[#344054]">
                Similar Items You Might Also Like
              </h4>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                // slidesPerView={4}
                navigation
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
                className=" w-75 sm:w-140 md:w-180 min-[820px]:w-200 lg:w-230  xl:w-7xl mt-4 flex justify-center items-center "
              >
                {similarProducts.map((item, id) => {
                  return (
                    <SwiperSlide>
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
  );
};

export default ProductDetail;
