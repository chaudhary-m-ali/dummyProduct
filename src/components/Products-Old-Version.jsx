import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Link, useSearchParams } from "react-router-dom";
// import { id } from "zod/v4/locales";
import { Handbag } from "lucide-react";
import { Bell } from "lucide-react";
import Navbar from "./Navbar";
import { Search } from "lucide-react";
// import { array } from "zod";
// import Rectangle1 from "../assets/Rectangle1.svg";
const Products = () => {
  const [product, setProduct] = useState([]);
  // const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentpage, setCurrentpage] = useState(1);
  const itemsPerPage = 8;

  const getAllProducts = async () => {
    try {
      const API = "https://dummyjson.com/products";
      const response = await axios.get(API);
      console.log("response:", response.data.products);
      setProduct(response.data.products);
    } catch (error) {
      setError("failed to load data");
      console.error(error);
    }
  };

  const search = searchParams.get("search") || "";
  console.log("URL search:", searchParams.toString());

  useEffect(() => {
    getAllProducts();
  }, []);

  // for search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const filteredProduct = product.filter((item) => {
    return item.title.toLowerCase().includes(debouncedSearch.toLowerCase());
  });

  const totalPages = Math.ceil(filteredProduct.length / itemsPerPage);
  const startIndex = (currentpage - 1) * 8;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProduct.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentpage(1);
  }, [debouncedSearch]);

  return (
    <div>
      {/* <Navbar /> */}
      <div className="p-5 sm:p-10 flex relative sm:w-96  ">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearchParams({ search: e.target.value })}
          className="w-full sm:w-96 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400  "
        />
        <Search
          className="absolute right-10 top-7 sm:right-15 sm:top-12.5"
          size={20}
        />
      </div>
      <div className="grid grid-cols-1 gap-10 p-5  sm:p-10 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
        {paginatedProducts.map((product) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`}>
              <h1>{error}</h1>
              <Card key={product.id} product={product} />
            </Link>
          );
        })}
      </div>
      <div className="flex gap-2 sm:gap-6 items-center justify-center mt-10 mb-5">
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
            className={`px-3 py-1 border rounded cursor-pointer  ${
              currentpage === index + 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
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
