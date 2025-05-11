import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useActiveSection from "../hook/useActiveSection";
import { containervariants, ExpTitle } from "./AboutMe";
function Objective({ objects }) {
  const { ref } = useActiveSection("Objective", 1);

  const text_motion = {
    initial: { y: 100, opacity: 0 },
    animate: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 8,
        delay: 0.015 * index,
      },
    }),
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={containervariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        id="objective"
        ref={ref}
        className=" mx-auto my-44 scroll-mt-72"
      >
        <motion.div className="mx-auto grid grid-cols-1 ">
          <motion.h1
            variants={ExpTitle}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            className="font-bold text-2xl  my-3"
          >
            Career Objective
          </motion.h1>
          <motion.p className="indent-5 text-pretty tracking-wide md:tracking-widest leading-10 text-sm md:text-base ">
            {objects.map((m, index) => (
              <motion.span
                key={index}
                variants={text_motion}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                {m}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Objective;
