import React from "react";
import { motion } from "framer-motion";
function Objective({ objects }) {
  const ExpTitle = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };
  const p_motion = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    // transition: { when: "beforeChildren",staggerChildren: 0.3, },
  };
  const text_motion = {
    initial: { y: 100, opacity: 0 },
    animate: (index) => ({
      y: 0,
      opacity: 1,
      transition: {type:"spring",stiffness:180,damping:8, delay: 0.015 * index },
    }),
  };
  return (
    <div>
      <motion.div className="grid grid-cols-1 text-center w-2/3 mx-auto">
        <motion.h1
          variants={ExpTitle}
          whileInView="animate"
          initial="initial"
          viewport={{ once: true }}
          className="font-bold text-slate-600 py-5"
        >
          Career Objective
        </motion.h1>
        <motion.p
        // variants={p_motion}
        // whileInView="animate"
        // initial="initial"
        // viewport={{once:true}}
        className="text-slate-600 font-mono">
          {objects.map((m, index) => (
            <motion.span
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
    </div>
  );
}

export default Objective;
