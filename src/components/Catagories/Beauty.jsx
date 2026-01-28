import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import { Link } from "react-router-dom";
import { BreadCrumbs } from "../BreadCrumbs";
const Beauty = () => {
  const [product, setproduct] = useState([]);
  const [error, SetError] = useState("");
  const [loading, setLoading] = useState(false);
  const getBeautyProducts = async () => {
    try {
      setLoading(true);
      const beautyAPI = "https://dummyjson.com/products/category/beauty";
      const response = await axios.get(beautyAPI);
      console.log("response", response);
      setproduct(response.data.products);
    } catch (error) {
      console.log("error", error);
      SetError("failed to load products.Try again");
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBeautyProducts();
  }, []);

  return (
    <div className="px-4 md:px-8 xl:px-20 mt-10">
      <BreadCrumbs items={[{ label: "Beauty", link: "/beauty" }]} />
      {error && (
        <div className="text-center text-red-500 font-semibold mt-10">
          {error}
        </div>
      )}
      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <div className="animate-pulse text-gray-600 font-medium">
            Loading...
          </div>
        </div>
      ) : (
        <div className=" grid grid-cols-1 gap-10 p-5  sm:p-10 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
          {product.map((product) => {
            return (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card key={product.id} product={product} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Beauty;
