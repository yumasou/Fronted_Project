import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useActiveSection from "../hook/useActiveSection";
import { containervariants, ExpTitle } from "./AboutMe";
function Introduction() {
  const { ref } = useActiveSection("Introduction", 0.1);
 
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
    <AnimatePresence>
    <motion.div 
    variants={containervariants}
    initial="initial"
    whileInView="animate"
    viewport={{once:true}}
    ref={ref}
    id="introduction"
    className="mx-auto mt-12 scroll-mt-96">
      <motion.div className="grid grid-cols-1 ">
        <motion.h1
          variants={ExpTitle}
          whileInView="animate"
          initial="initial"
          viewport={{ once: true }}
          className="my-3 font-bold text-2xl"
        >
          Introduction
        </motion.h1>
        <motion.p
          variants={p_motion}
          whileInView="animate"
          initial="initial"
          viewport={{ once: true }}
          className="indent-5 text-pretty tracking-wide md:tracking-widest leading-10 text-sm md:text-base "
        >
          My name is{" "}
          <span className="italic font-bold text-lg"> Hein Htet Paing</span> ,
          and I am from{" "}
          <span className="italic font-bold text-lg"> Myanmar</span>. I have
          studied programming for four years at the Computer University in
          Monywa (Myanmar), where I developed a passion for web development,
          particularly in the React frontend. My ultimate dream is to become a
          specialized{" "}
          <span className="italic font-bold text-lg">JavaScript </span>{" "}
          developer, which drives my focus on continuously learning and honing
          my skills in this area. I have nearly two years of hands-on experience
          in web development, building practical projects and expanding my
          knowledge. Due to the political situation in Myanmar, I had to
          relocate to Bangkok, where it has been challenging to find
          opportunities as a junior developer. I devoted my free time to
          self-learning, exploring new technologies, and practicing modern
          development tools in Both
          <span className="italic font-bold text-lg"> Frontend</span> and{" "}
          <span className="italic font-bold text-lg">Backend</span>. Recently, I
          have Transitioned from tutorials to real-world projects to solidify
          understanding and simulate real development scenarios, including
          building full-stack CRUD apps and API integrations to becoming a
          professional developer. While I have practical experience, I
          acknowledge areas for growth, such as communication, teamwork, and
          production-level experience. I am eager to learn and improve, and I am
          confident that, if given the opportunity to work with your team, I
          will bring my utmost dedication and enthusiasm to every task.
        </motion.p>
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
}

export default Introduction;
