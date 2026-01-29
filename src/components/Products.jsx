import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Link, useSearchParams } from "react-router-dom";
import { Handbag } from "lucide-react";
import { Bell } from "lucide-react";
import Navbar from "./Navbar";
import { Search } from "lucide-react";
import { Dropdown } from "./Dropdown";
import ProductSkeleton from "./ProductSkeleton";
const Products = () => {
  const [product, setProduct] = useState([]);

  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentpage, setCurrentpage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const searchQuery = searchParams.get("search") || "";
  const [searchInput, setSearchInput] = useState(searchQuery);
  const itemsPerPage = 20;

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const skip = (currentpage - 1) * itemsPerPage;
      const API = `https://dummyjson.com/products/search?q=${searchQuery}&limit=${itemsPerPage}&skip=${skip}`;
      const response = await axios.get(API);

      console.log("response:", response.data);
      setProduct(response.data.products);
      setTotal(response.data.total);
    } catch (error) {
      setError("❌ failed to load Products.Please try again later");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [currentpage, searchParams]);
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchParams(searchInput ? { search: searchInput } : {});
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  const totalPages = Math.ceil(total / itemsPerPage);
  const hasNoResults =
    !error && !loading && product.length === 0 && searchQuery.trim() !== "";
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div className="p-5 sm:p-10 flex relative sm:w-96  ">
          <input
            type="search"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full sm:w-96 px-4 pr-10 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400    [&::-webkit-search-cancel-button]:cursor-pointer"
          />
          <Search
            className="absolute right-10 top-7 sm:right-15 sm:top-12.5 cursor-pointer"
            size={20}
          />
        </div>
        <Dropdown className="cursor-pointer " />
      </div>
      {error && (
        <div className="text-center text-red-500 font-semibold mt-10">
          {error}
        </div>
      )}
      {hasNoResults && (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-500">
          <Search size={40} className="mb-3" />
          <p className="text-lg font-semibold">No product found</p>
          <p className="text-sm">Try searching with a different keyword</p>
        </div>
      )}
      {loading ? (
        <div className="grid grid-cols-1 gap-10 p-5  sm:p-10 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
          {[...Array(8)].map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-10 p-5  sm:p-10 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
          {product.map((product) => {
            return (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card key={product.id} product={product} />
              </Link>
            );
          })}
        </div>
      )}
      <div className="flex gap-6 items-center justify-center mt-10 mb-5">
        <button
          onClick={() => {
            setCurrentpage((p) => Math.max(p - 1, 1));
          }}
          disabled={currentpage === 1}
          className={`cursor-pointer rounded border-2 px-3 py-1 disabled:opacity-50 disabled:cursor-not-allowed `}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentpage(index + 1)}
            className={`  px-3 py-1 border rounded cursor-pointer hidden sm:block  ${
              currentpage === index + 1
                ? "bg-linear-to-tr from-[#F4E8F3] via-[#F3EFF6] to-[#EEE0F9] text-[#1D364D]"
                : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button className="block sm:hidden">
          page:{currentpage} of {totalPages}
        </button>
        <button
          className={`cursor-pointer rounded border-2 px-3 py-1 disabled:opacity-50 disabled:cursor-not-allowed `}
          disabled={currentpage === totalPages}
          onClick={() => {
            setCurrentpage((p) => Math.min(p + 1, totalPages));
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
