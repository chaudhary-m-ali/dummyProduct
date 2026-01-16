import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import { Link } from "react-router-dom";

const Fragrances = () => {
  const [loading, setLoading] = useState(false);
  const [product, setproduct] = useState([]);
  const [error, SetError] = useState("");
  const getFragranceProducts = async () => {
    try {
      setLoading(true);
      const fragrancesAPI =
        "https://dummyjson.com/products/category/fragrances";
      const response = await axios.get(fragrancesAPI);
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
    getFragranceProducts();
  }, []);

  return (
    <div>
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

export default Fragrances;
