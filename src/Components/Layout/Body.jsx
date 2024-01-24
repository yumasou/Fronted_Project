import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../View/Home";
import Products from "../View/Products";
import About from "../View/About";
import DetailView from "../View/DetailView";

function Body() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      {/* <Route path="/services" element={<Services/>} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/products/:id" element={<DetailView />} />
    </Routes>
  );
}

export default Body;
