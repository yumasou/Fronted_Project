import React from "react";
import { motion } from "framer-motion";
import useActiveSection from "../hook/useActiveSection";
function Introduction() {
  const { ref } = useActiveSection("Introduction", 0.75);
  const ExpTitle = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };
  const p_motion = {
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        when: "beforeChildren",
        staggerChildren: 0.3,
        stiffness: 200,
        delay: 0.5,
        duration: 0.5,
      },
    },
  };
  return (
    <div ref={ref} id="introduction" className=" scroll-mt-28 py-8">
      <motion.div className="w-3/4 sm:w-2/3  lg:w-2/3  mx-auto grid grid-cols-1 text-center ">
        <motion.h1
            variants={ExpTitle}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
          className="font-bold py-5"
        >
          Introduction
        </motion.h1>
        <motion.p
          variants={p_motion}
          whileInView="animate"
          initial="initial"
          viewport={{ once: true }}
          className=" text-balance first-letter:ml-8 leading-10 font-mono"
        >
          I am Hein Htet Paing from <strong className="italic"> Myanmar</strong>
          , and I have dedicated four years to studying programming at the
          University of Computer Studies Monywa. Throughout my academic journey,
          I have honed my skills in web development, with a particular focus on{" "}
          <strong className="italic">React</strong>, accumulating nearly two
          years of hands-on experience. My aspiration is to become a specialized{" "}
          <strong className="italic"> MERN stack developer</strong> in the
          future. I find immense satisfaction in overcoming challenges and
          solving problems. Given the opportunity to join your team, I am
          committed to delivering my best effort and ensuring success.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Introduction;
