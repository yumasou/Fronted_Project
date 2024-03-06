import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function Projects({projects}) {
  const ExpTitle = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };
  const card_variant={
    hidden:{y:100,opacity:0},
    visible:(index)=>({y:0,opacity:1,transition:{type:"spring",stiffness:180,damping:10,delay:0.2*index}})
  }
  const clap_pathvariant = {
    hidden: {
      opacity: 1,
      clipPath: "circle(20% at 100% 0)",
      transition: { delay: 0.5 },
    },
    visible: {
      opacity: 0.85,
      clipPath: "circle(150% at 100% 0%)",
    },
  };
  const navigate = useNavigate();
  return (
    <div className="w-3/4 mx-auto my-10 text-slate-600">
      <motion.h1 variants={ExpTitle}
      initial="initial"
      whileInView="animate"
      viewport={{once:true}}
      className="mx-auto text-center font-bold my-4">
        Projects
      </motion.h1>
      <motion.div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
        {Boolean(projects.length) && projects.map((m,index)=>
          <motion.div
          key={index}
          variants={card_variant}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          custom={index}
          onClick={()=>window.location.href=(m.link)} className="relative cursor-pointer">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={m.image_url}
              alt="weather_app"
              style={{ objectFit: "cover" }}
            />
            <motion.div
              variants={clap_pathvariant}
              initial="hidden"
              whileHover="visible"
              className="absolute top-0 right-0 w-full h-full rounded-lg bg-slate-400"
            >
              <div className="mx-atuo w-full flex flex-col items-center font-bold gap-10 text-white text-center my-10">
                <h1>{m.title}</h1>
                <ul>
                  <li>{m.description} </li>
                  <li className=" text-lg text-red-600">{m.language} </li>
                </ul>
                
              </div>
              
            </motion.div>
          </motion.div>
          )}
        
      </motion.div>
    </div>
  );
}

export default Projects;
