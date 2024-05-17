import React from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import Home from "../View/Home";
import Products from "../View/Products";
import DetailView from "../View/DetailView";
import Test from "../View/Test";
import { AnimatePresence } from "framer-motion";

function Body() {
  const location=useLocation()
  return (
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.key} >
      
      <Route path="/" element={<Home />} />
      {/* <Route path="/products" element={<Products />} /> */}
      {/* <Route path="/products/:id" element={<DetailView />} /> */}
      {/* <Route path="/test" element={<Test/>}/> */}
    </Routes>
    </AnimatePresence>
  );
}

export default Body;
