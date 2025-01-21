import { motion } from "framer-motion";
import React from "react";
import useActiveSection from "../hook/useActiveSection";
function MySkills({ skills = [] }) {

  const{ref}=useActiveSection("Skills",0.8)

  const ExpTitle = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };
  const FadeInAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: (index) => ({
      y: 0,
      opacity: 1,
      transition: {type:"spring",stiffness:180, delay: 0.05 * index },
    }),
  };

  return (
    <motion.div id="skills" ref={ref} className="mx-auto container  py-8 scroll-mt-96">
      <div className="mx-auto  flex flex-col  items-center justify-center gap-1 lg:gap-5">
      <motion.header
        variants={ExpTitle}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
        className="py-5 font-bold"
      >
        My Skills
      </motion.header>
      <ul className="  flex flex-wrap items-center justify-center gap-3">
        {Boolean(skills.length) &&
          skills.map((skill, index) => (
            <motion.li
              key={index}
              variants={FadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              className="rounded-lg border bg-slate-50 shadow-sm inline-block px-3 py-1 text-slate-600"
            >
              {skill}
            </motion.li>
          ))}
      </ul>
    </div>

    </motion.div>  );
}

export default MySkills;
