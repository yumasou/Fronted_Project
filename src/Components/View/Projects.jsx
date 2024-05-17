import React from "react";
import { motion } from "framer-motion";
import useActiveSection from "../hook/useActiveSection";
function Projects({ projects }) {
  const { ref } = useActiveSection("Projects", 0.75);

  const ExpTitle = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };


  return (
    <div ref={ref} className="  pt-16 pb-12 " id="project">
      <div className="w-3/4 sm:w-2/3 mx-auto">
        <motion.header
          variants={ExpTitle}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mx-auto text-center font-bold my-5"
        >
          Projects
        </motion.header>
        <motion.div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          {Boolean(projects.length) &&
            projects.map((m, index) => (
              <Project {...m} key={index} index={index} />
            ))}
        </motion.div>
      </div>
    </div>
  );
}
const Project = ({ image_url, link, title, description, language, index }) => {
  const card_variant = {
    hidden: { y: 100, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 10,
        delay: 0.2 * index,
      },
    }),
  };
 
  return (
    <motion.div
      key={index}
      variants={card_variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      onClick={() => (window.location.href = link)}
      className="group  h-[15rem] shadow-lg rounded-lg overflow-hidden relative cursor-pointer"
    >
      
      <img
        className=" top-5 absolute  group-even:right-0  h-full  w-1/2 rounded-lg
        group-hover:scale-105
        group-hover:translate-x-5
        group-hover:translate-y-5
        group-even:group-hover:-translate-x-5
        group-even:group-hover:translate-y-5
        
        "
        src={image_url}
        alt=""
        style={{ objectFit: "cover" }}
      />
      <motion.div className="group-even:-translate-x-[100%] pl-2  absolute top-0 right-0 w-1/2 h-full  ">
        <h1 className="font-bold my-2">{title}</h1>
        <ul className="flex flex-col gap-3">
          <li className="flex flex-wrap gap-1 text-lg text-purple-500 text-shadow-2xl">{language.map(m=>
            <small className="bg-slate-700 rounded-lg px-2 py-1 backdrop:blur-4xl shadow-md bg-opacity-10 ">{m}</small>
          )}</li>
          <li> <small className="text-balance ">{description}</small></li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
