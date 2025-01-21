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
    <div
      ref={ref}
      id="introduction"
      className=" container mx-auto scroll-mt-72 sm:mx-auto  py-12"
    >
      <motion.div className=" mx-auto grid grid-cols-1 text-center ">
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
          className="indent-5 text-pretty tracking-wide line-clamp-5 sm:line-clamp-none leading-8 font-mono px-5 sm:px-0 overflow-y-scroll"
        >
          My name is Hein Htet Paing, and I am from Myanmar. I have studied
          programming for four years at the Computer University in Monywa
          (Myanmar), where I developed a passion for web development,
          particularly in the React frontend. My ultimate dream is to become a
          specialized MERN Stack developer, which drives my focus on
          continuously learning and honing my skills in this area. I have nearly
          two years of hands-on experience in web development, building
          practical projects and expanding my knowledge. Due to the political
          situation in Myanmar, I had to relocate to Bangkok, where it has been
          challenging to find opportunities as a junior developer. While working
          as an IT assistant in Bangkok, I never gave up on my dream career. I
          devoted my free time to self-learning, exploring new technologies, and
          practicing modern development tools in the MERN stack. Recently, I
          made the decision to fully commit to my passion by leaving my IT
          assistant role and dedicating myself to becoming a professional
          developer. While I have practical experience, I acknowledge areas for
          growth, such as communication, teamwork, and production-level
          experience. I am eager to learn and improve, and I am confident that,
          if given the opportunity to work with your team, I will bring my
          utmost dedication and enthusiasm to every task.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Introduction;
