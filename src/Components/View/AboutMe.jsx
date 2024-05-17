import React, {  useState } from "react";
import { motion } from "framer-motion";
import useActiveSection from "../hook/useActiveSection";

function AboutMe({ me }) {
  const [isOpen, setIsOpen] = useState(false);

const {ref}=useActiveSection("Home",1)

  const containervariants = {
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

  const personalvariants = {
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
  


  return (
    <section
      ref={ref}
      id="home"
      className={`mx-auto pt-28 sm:w-2/3 w-2/3 lg:w-1/2`}
      
    >
      <motion.div onClick={() => setIsOpen(!isOpen)} className=" mx-auto w-40 h-40  rounded-full">
        <motion.img
          className="w-40 h-40   border-2 border-transparent hover:border-purple-500 rounded-full"
          src="/images/PSX_20231121_015246.jpg"
          alt="Hein Htet Paing"
        />
      </motion.div>
        {isOpen && (
          <motion.div
            variants={containervariants}
            initial="hidden"
            animate="visible"
            exit="close"
            className=" shadow-sm "
          >
            <motion.ul className="*:my-1 ">
              {me.map((m, index) => {
                return (
                  <motion.li
                    variants={personalvariants}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                    className="flex flex-row items-center justify-between"
                  >
                    
                    <div className="text-left block">{m.index}</div>
                    <div className=" text-right block ">{m.value}</div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
    </section>
  );
}

export default AboutMe;
