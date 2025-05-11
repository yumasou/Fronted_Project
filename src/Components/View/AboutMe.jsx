import React, {  useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import useActiveSection from "../hook/useActiveSection";

export const containervariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 1,
      beforeChildren: true,
    },
  },
};

export const personalvariants = {
  hidden: { opacity: 0, y: -100, transition: { delay: 0.2, duration: 1 } },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 260,
      damping: 20,
      staggerChildren: 0.5,
    },
  },
};

export const ExpTitle = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
};

function AboutMe({ me }) {
  const { ref } = useActiveSection("Home", 0.5);
  const parentRef = useRef(null);
  const parentScroll = useScroll({
    target: parentRef,
    offset: ["start start", "end end"],
  });

  const translateLayer1 = useTransform(
    parentScroll.scrollYProgress,
    [0, 0.1, 0.2, 0.3],
    ["150%", "50%", "25%", "0%"]
  );
  const translateLayer2 = useTransform(
    parentScroll.scrollYProgress,
    [0.3, 0.4, 0.5, 0.6],
    ["-100%", "-50%", "-25%", "0%"]
  );

  const opacityLayer1 = useTransform(
    parentScroll.scrollYProgress,
    [0, 0.1, 0.2, 0.3],
    [1, 1, 1, 1]
  );
  const opacityLayer2 = useTransform(
    parentScroll.scrollYProgress,
    [0.3, 0.4, 0.5, 0.6],
    [0, 0.5, 1, 1]
  );

  return (
    <AnimatePresence>
      <motion.div
        variants={containervariants}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}
        ref={ref}
        className="w-full -scroll-mt-72 "
        id="home"
      >
        <motion.div ref={parentRef} className={` h-[200vh] `}>
          <motion.div
            className="sticky w-full overflow-hidden top-1/2  md:-translate-y-1/2 -translate-y-1/4 grid grid-cols-1 md:grid-cols-2 gap-8 items-end"
          >
            <motion.img
              style={{
                translateX: translateLayer1,
                opacity: opacityLayer1,
                transitionDuration: "0.5s",
                transition: { type: "spring" },
              }}
              className="sticky"
              src="/images/HeinHtetPaing_Adobe_remove_croped.png"
              alt="Hein Htet Paing"
            />

            <motion.ul
              className="sticky"
              style={{
                translateX: translateLayer2,
                opacity: opacityLayer2,
                transitionDuration: "0.5s",
                transition: { type: "spring" },
              }}
            >
              {me.map((m, index) => (
                <motion.li
                  key={index}
                  className="flex justify-between items-center text-end even:bg-gray-400 px-2 rounded-md leading-10"
                >
                  <span>{m.index}</span>
                  <span className="font-bold ">{m.value}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default AboutMe;
