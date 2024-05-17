import React, { useState } from "react";

import { Links } from "../../Api";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
function Header() {
  const ActiveSection = useSelector((state) => state.active_section.active);
  return (
    <div className="relative z-[999] w-screen">
      <motion.nav className="fixed top-0 left-1/2 -translate-x-1/2 lg:w-1/2 w-4/5 bg-slate-200 bg-opacity-90 shadow-black/[1.5rem] backdrop:blur-2xl border-gray-600 my-4  rounded-full  justify-center dark:bg-opacity-90 dark:backdrop:blur-lg  dark:bg-gray-800 dark:border-gray-700 ">
        <ul className=" flex flex-wrap items-center justify-evenly py-2">
          {Links.map((m) => (
            <li
              className={` shrink px-2 py-1 ${
                ActiveSection === m.name
                  ? " bg-slate-500 bg-opacity-10 dark:bg-opacity-10 dark:bg-slate-500 rounded-full "
                  : ""
              } `}
              key={m.title}
            >
              <a href={m.title}>{m.name}</a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}

export default Header;
