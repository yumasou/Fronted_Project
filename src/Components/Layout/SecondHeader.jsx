import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchTownship,
//   setFilterTSP,
//   setFilterType,
// } from "../../feature/counter/townshipSlice";

function SecondHeader() {
//   const filterTSP = useSelector((state) => state.township.filterTSP);
//   const filterType = useSelector((state) => state.township.filterType);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchTownship());
  }, []);
//   const townshipList = useSelector((state) => state.township.data);
//   const typeList = useSelector((state) => state.township.type);

  return (
    <div className=" mx-10">
      <header className="flex justify-end items-center">
        
        <ul className="">
          <li className="">
            <div className="">
            <span className="text-red-500">*** Maintenaning ***</span>
              <button
                className=" "
                type="button"
                data-bs-toggle=""
                aria-expanded="false"
              >
                {/* {filterType
                  ? typeList
                      .filter((m) => m.id === filterType)
                      .map((m) => m.name)
                  : "Filter"} */}
               
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
              <ul className="">
                {/* {typeList.map((m) => (
                  <li>
                    <button
                      className="dropdown-item"
                      key={m.id}
                    //   onClick={() => dispatch(setFilterType(m.id))}
                    >
                      {m.name}
                    </button>
                  </li>
                ))} */}
              </ul>
            </div>
          </li>
          <li className="">
            <div className="">
              <button
                className=""
                type=""
                data-bs-toggle=""
                aria-expanded="false"
              >
                {/* {filterTSP
                  ? townshipList
                      .filter((m) => m.id === filterTSP)
                      .map((m) => m.name)
                  : "By TownShip"} */}
              </button>

              <ul className="">
            
                {/* {townshipList.map((m) => (
                  <li>
                    <button
                      key={m.id}
                      className="dropdown-item"
                    //   onClick={() => dispatch(setFilterTSP(m.id))}
                    >
                      {m.name}
                    </button>
                  </li>
                ))} */}
              </ul>
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default SecondHeader;