import React, { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import useActiveSection from "../hook/useActiveSection";
import { containervariants, ExpTitle } from "./AboutMe";

function Projects({ projects }) {
  const { ref } = useActiveSection("Projects", 0.1);

  return (
    <AnimatePresence>
      <motion.div
        variants={containervariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        ref={ref}
        className="mt-20 -scroll-mt-44"
        id="project"
      >
        <motion.header
          variants={ExpTitle}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className=" translate-y-full text-center font-bold text-2xl"
        >
          Projects
        </motion.header>

        <motion.div
          className="sticky max-w-full overflow-hidden 
        grid grid-cols-1 "
        >
          {Boolean(projects.length) &&
            projects.map((m, index) => (
              <React.Fragment key={index}>
                <Project m={m}  />
              </React.Fragment>
            ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const Project = ({ m }) => {
  const layerRef = useRef(null);
  const techStackVariant = {
    initial: { opacity: 0, y: 100 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: index * 0.05,
      },
    }),
  };
  const layerScroll = useScroll({
    target: layerRef,
    offset: ["start start", "end end"],
  });

  const layer1Translate = useTransform(
    layerScroll.scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4],
    ["100%", "75%", "50%", "25%", "0%"]
  );
  const layer1Opacity = useTransform(
    layerScroll.scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4],
    [1, 1, 1, 1, 1]
  );

  const layer2Translate = useTransform(
    layerScroll.scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4],
    ["-100%", "-75%", "-50%", "-25%", "0%"]
  );
  const layer2Opacity = useTransform(
    layerScroll.scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4],
    [0, 0, 0.5, 1, 1]
  );

  return (
    <motion.div  ref={layerRef} className="w-full h-[130vh]">
      <motion.div
        onClick={() => (window.location.href = m.link)}
        className="sticky top-0 md:translate-y-full translate-y-1/2 group rounded-lg  cursor-pointer flex-col md:flex-row flex gap-4 md:gap-8 "
      >
        <motion.img
          style={{
            translateX: layer1Translate,
            opacity: layer1Opacity,
            transitionDuration: ".3s",
            transition: { type: "spring" },
          }}
          className=" aspect-square object-cover w-[500px]  rounded-md  border "
          src={m.image_url}
          alt={m.image_url}
        />
        <motion.div
          style={{
            translateX: layer2Translate,
            opacity: layer2Opacity,
            transitionDuration: ".3s",
            transition: { type: "spring" },
          }}
        >
          <h1 className="font-bold my-2 text-2xl">{m.title}</h1>
          <ul className="flex flex-col gap-3">
            <li>
              <small className="text-pretty tracking-wide md:tracking-widest leading-10 text-sm md:text-base">
                {m.description}
              </small>
            </li>
            <li className="flex flex-wrap gap-4 md:gap-6 text-lg  text-shadow-2xl">
              {m.language.map((n, index) => (
                <motion.span
                  key={index}
                  variants={techStackVariant}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                  className="text-center items-center rounded-lg border bg-slate-50 shadow-sm  px-3 py-1 text-slate-600"
                >
                  {n}
                </motion.span>
              ))}
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
