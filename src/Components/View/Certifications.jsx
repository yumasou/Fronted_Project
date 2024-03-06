import React from "react";
import { motion } from "framer-motion";
function Certifications({ certificate }) {
  const ExpTitle = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };
  const list = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.1 },
  };
  const item = {
    initial: { x: -100 },
    animate: { x: 0, transition: { delay: 0.02 } },
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
          Certifications
        </motion.h1>
        <div className="w-screen flex flex-row justify-center  gap-5">
          <motion.div
            variants={ExpTitle}
            whileInView="animate"
            initial="initial"
            transition="transition"
            viewport={{ once: true }}
            className="flex flex-col items-center text-slate-600 justify-center w-2/5 "
          >
            {certificate.map((m,index)=><div className="my-5 text-center" key={index}>
            <span className="block">
                <h1 className="font-bold">{m.title}</h1>{" "}
              </span>
              <span className="text-xs font-light">
                {m.year}
              </span></div>
            )}
          </motion.div>
          <div className="border-l h-auto  border-gray-500"></div>
          <div className="w-2/5  text-slate-600">
            <motion.ul
              variants={list}
              initial="initial"
              whileInView="animate"
              transition="transition"
              viewport={{ once: true }}
              className=" first:pt-3 last:pb-3"
            >
              <motion.li
                variants={item}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="py-2 text-start font-mono"
              >
                {certificate.map((m,index)=><div className="my-12" key={index}>
                  <span>{m.center}</span>
                </div>)}
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
