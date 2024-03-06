import React from "react";
import { motion } from "framer-motion";
function Loading() {
  return (
    <div className="flex items-center h-screen justify-center">
      <motion.button 
      initial={{opacity:0}}
      animate={{opacity:1,x:[0,10,20,10,0],y:[0,10,0,-10],transition:{y:{yoyo:Infinity},x:{yoyo:Infinity},delay:0.1,}}}
      type="button" className="text-red-600 font-bold text-5xl" disabled>
        .
      </motion.button>
    </div>
    
  );
}

export default Loading;
