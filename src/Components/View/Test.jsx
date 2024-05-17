import React, { useState } from "react";
import { easeInOut, easeOut, inView, motion } from "framer-motion";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { AnimatePresence, useScroll, useTransform } from "framer-motion";
function Test() {
  const svgvariant = {
    hidden: { rotate: -180 },
    visible: { rotate: 0, transition: { duration: 1 } },
  };
  const pathvariant = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };
  return (
    <div className="row">
      <div className="col container-fluid">
      <div className="col-4">
        <img src="" alt="" className="w-100 bg-cover" style={{height:300}} />
      </div>
    </div>
    </div>
  );
}

export default Test;
