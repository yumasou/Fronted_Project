import React from "react";
import {  motion } from "framer-motion";

function MyExperience({ exp }) {
  const ExpTitle = {
    initial: { opacity: 0 },
    animate: { opacity: 1,transition: { delay: 0.2,duration:0.5 }, },
    
  };
  const list = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.1 },
  };
  const item = {
    initial: { x: -100 },
    animate: (index) => ({ x: 0, transition: { delay: 0.02 * index } }),
  };
  return (
    <div className="my-10">
      <div className="w-screen flex flex-col items-center justify-center gap-5">
        <motion.h1
          variants={ExpTitle}
          whileInView="animate"
          initial="initial"
          viewport={{ once: true }}
          className="text-slate-600 text-lg font-bold"
        >
          My Experience
        </motion.h1>
        <div className="flex flex-col lg:flex-row  justify-center  gap-5">
          <motion.div
            variants={ExpTitle}
            whileInView="animate"
            initial="initial"
            transition="transition"
            viewport={{ once: true }}
            className="flex flex-col mx-auto lg:mx-0 items-center text-slate-600 justify-center w-2/5 "
          >
            <span className="inline-block">
              {" "}
              <h1 className="font-bold">Promes MM</h1>{" "}
            </span>
            <h1>Junior Frontend Developer</h1>
            <span className="text-xs font-light">March 2023, Nov 2023</span>
          </motion.div>
          <div className="border-l lg:visible invisible h-auto  border-gray-500"></div>
          <div className="lg:w-2/5 mx-auto lg:mx-0 w-4/5  text-slate-600">
            <motion.ul
              variants={list}
              initial="initial"
              whileInView="animate"
              transition="transition"
              viewport={{ once: true }}
              className=" first:pt-3 last:pb-3"
            >
              {Boolean(exp.length) &&
                exp.map((m, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    initial="initial"
                    whileInView="animate"
                    custom={index}
                    viewport={{ once: true }}
                    className="py-2 text-start font-mono"
                  >
                    {m}
                  </motion.li>
                ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyExperience;
