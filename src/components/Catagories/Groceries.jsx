import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import { Link } from "react-router-dom";
import { BreadCrumbs } from "../BreadCrumbs";
import ProductSkeleton from "../ProductSkeleton";
const Groceries = () => {
  const [product, setproduct] = useState([]);
  const [error, SetError] = useState("");
  const [loading, setLoading] = useState(false);
  const getGroceriesProducts = async () => {
    try {
      setLoading(true);
      const groceriesAPI =
        "https://dummyjson.com/products/category/groceries? limit=10&skip=10";
      const response = await axios.get(groceriesAPI);
      console.log("response", response);
      setproduct(response.data.products);
    } catch (error) {
      SetError("failed to load products.Try again");
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getGroceriesProducts();
  }, []);

  return (
    <div className="p-5 md:p-8 mt-10">
      <BreadCrumbs items={[{ label: "Groceries" }]} />
      {error && (
        <div className="text-center text-red-500 font-semibold mt-10">
          {error}
        </div>
      )}
      {loading ? (
        <div className="grid grid-cols-1 gap-10 p-5  sm:p-10 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
          {[...Array(8)].map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-10 p-5  sm:p-10 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
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

export default Groceries;
