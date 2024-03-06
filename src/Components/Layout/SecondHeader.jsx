import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


function SecondHeader() {

  const dispatch = useDispatch();
  useEffect(() => {
  
  }, []);


  return (
    <div className=" mx-10">
      <header className="grid grid-cols-1 ">
        <ul className="">
          <li className="flex items-center justify-end">
              <input type="search" placeholder={`under maintaince`} className=" w-5/6 rounded-lg  text-slate-700 bg-slate-100 focus:outline-none px-3 mx-2" />
              <button
                className=""
                type="button"
              >
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-sliders"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                  />
                </svg>
              </button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default SecondHeader;