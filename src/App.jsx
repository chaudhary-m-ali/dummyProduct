import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Beauty from "./components/Catagories/Beauty";
import Fragrances from "./components/Catagories/Fragrances";
import Groceries from "./components/Catagories/Groceries";
import Furniture from "./components/Catagories/Furniture";
import { Toaster } from "@/components/ui/sonner";
import Brand from "./components/pages/Brand";
import Contact from "./components/pages/Contact";
import FAQ from "./components/pages/FAQ";
const App = () => {
  return (
    <div className="">
      <Toaster position="top-center" />
      <Navbar />
      <Routes>
        <Route path="/brand" element={<Brand />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/" element={<Products />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/beauty" element={<Beauty />}></Route>
        <Route path="/fragrances" element={<Fragrances />}></Route>
        <Route path="/groceries" element={<Groceries />}></Route>
        <Route path="/furniture" element={<Furniture />}></Route>
      </Routes>
    </div>
  );
};

export default App;
