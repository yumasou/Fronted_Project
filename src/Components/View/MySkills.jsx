import {  AnimatePresence, motion } from "framer-motion";
import React from "react";
import useActiveSection from "../hook/useActiveSection";
import { containervariants, ExpTitle } from "./AboutMe";
function MySkills({ skills = [] }) {
  const { ref } = useActiveSection("Skills", 1);


  const FadeInAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: (index) => ({
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 180, delay: 0.05 * index },
    }),
  };

  return (
    <AnimatePresence>
      <motion.div
      variants={containervariants}
      initial="initial"
      whileInView="animate"
      viewport={{once:true}}
      id="skills" ref={ref} className="mx-auto  py-8  scroll-mt-28  mt-12">
        <motion.div className="  flex flex-col  items-center justify-center gap-1 lg:gap-5">
          <motion.header
            variants={ExpTitle}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            className="my-3 font-bold text-2xl text-center"
          >
            Skills
          </motion.header>
          <ul className="  flex flex-wrap items-center justify-center gap-4 ">
            {Boolean(skills.length) &&
              skills.map((skill, index) => (
                <motion.li
                  key={index}
                  variants={FadeInAnimation}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                  className="text-center items-center rounded-lg border bg-slate-50 shadow-sm  px-3 py-1 text-slate-600"
                >
                  {skill}
                </motion.li>
              ))}
          </ul>
        </motion.div>
      </motion.div>
      </AnimatePresence>
  );
}

export default MySkills;
