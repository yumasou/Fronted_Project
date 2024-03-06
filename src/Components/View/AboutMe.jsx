import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function AboutMe() {
  const [isOpen, setIsOpen] = useState(false);
  const containervariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { type: "spring", stiffness: 120, duration: 1 },
    },
    close: {
      opacity: 0,
      transition: {y:-100, delay: 0.1, duration: 0.5, when: "afterChildren" },
    },
  };
  const personalvariants = {
    hidden: { opacity: 0,y:-100,transition: { delay: 0.2,duration:1},when:"afterChildren" },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
    close:{y:-100,transition: { delay: 0.2,duration:1,when:"afterChildren"}}
  };
  const detailvariant = {
    hidden: { opacity: 0, y: -100,transition: { delay: 0.2,duration:1} },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, type: "spring", stiffness: 260, damping: 20 },
    },
    close:{
      x:-100,transition:{delay:0.5,duration:0.5}
    }
  };
  return (
    
      <AnimatePresence mode="wait">
      <motion.div
        variants={containervariants}
        initial="hidden"
        animate="visible"
        exit="close"
        className={`mx-auto ${
          isOpen ? "flex gap-5 flex-col w-1/2 " : "w-40 h-40 rounded-full "
        } flex justify-center items-center `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div className="w-40 h-40  rounded-full">
          <img src="/images/PSX_20231121_015246.jpg" alt="Hein Htet Paing" />
        </motion.div>
        {isOpen && (
            <motion.div
              variants={personalvariants}
              initial="hidden"
              animate="visible"
              exit="close"
              className="w-2/3 shadow-sm text-slate-600"
            >
              <motion.ul className="*:my-1 last:mb-5">
                  <motion.li
                    variants={detailvariant}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                    className="flex flex-row items-center justify-between"
                  >
                    <div>Name:</div>
                    <div>Hein Htet Paing</div>
                  </motion.li>
                  <motion.li
                    variants={detailvariant}
                    initial="hidden"
                    animate="visible"
                    className="flex  flex-row items-center justify-between"
                  >
                    <div>Nationality:</div>
                    <div>Myanmar</div>
                  </motion.li>
                  <motion.li
                    variants={detailvariant}
                    initial="hidden"
                    animate="visible"
                    className="flex  flex-row items-center justify-between"
                  >
                    <div>Date of Birth:</div>
                    <div>6-10-1999</div>
                  </motion.li>
                  <motion.li
                    variants={detailvariant}
                    initial="hidden"
                    animate="visible"
                    className="flex  flex-row items-center justify-between"
                  >
                    <div>Gender:</div>
                    <div>Male</div>
                  </motion.li><motion.li
                    variants={detailvariant}
                    initial="hidden"
                    animate="visible"
                    className="flex  flex-row items-center justify-between"
                  >
                    <div>Marital Status:</div>
                    <div>Single</div>
                  </motion.li>
                  <motion.li
                    variants={detailvariant}
                    initial="hidden"
                    animate="visible"
                    className="flex  flex-row items-center justify-between"
                  >
                    <div>Religion:</div>
                    <div>Buddhist</div>
                  </motion.li>
              </motion.ul>
            </motion.div>
          
        )}
      </motion.div>
      </AnimatePresence>
  );
}

export default AboutMe;
