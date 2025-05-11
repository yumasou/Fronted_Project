import React from "react";

import { Links } from "../../Api";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
function Header() {
  const ActiveSection = useSelector((state) => state.active_section.active);
  return (
    <motion.nav className="z-[999]  fixed top-8 left-1/2 -translate-x-1/2 lg:w-1/2 w-4/5 
    bg-slate-200 bg-opacity-90 shadow-black/[1.5rem] backdrop:blur-2xl border-gray-600  
    rounded-full  justify-center dark:bg-opacity-90 dark:backdrop:blur-lg  dark:bg-gray-800 dark:border-gray-700 ">
      <ul className=" flex flex-wrap items-center justify-evenly py-2 px-3">
        {Links.map((m) => (
          <li
            className={` shrink px-2 py-1 ${
              ActiveSection === m.name
                ? " bg-slate-500 bg-opacity-30 dark:bg-opacity-30 dark:bg-slate-500 rounded-full px-3 "
                : ""
            } `}
            key={m.title}
          >
            <a href={m.title}>{m.name}</a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Header;
