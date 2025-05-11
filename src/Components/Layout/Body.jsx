import React from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import Home from "../View/Home";

import { AnimatePresence } from "framer-motion";

function Body() {
  const location=useLocation()
  return (
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.key} >
      
      <Route path="/" element={<Home />} />
    </Routes>
    </AnimatePresence>
  );
}

export default Body;
