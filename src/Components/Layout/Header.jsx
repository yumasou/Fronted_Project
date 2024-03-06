import React, { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [isopen, setopen] = useState(false);
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo512.png" className="h-8" alt="hein htet paing" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Hein Htet Paing
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white bg-blue-700 md:hover:text-blue-700 rounded md:bg-transparent   dark:bg-blue-600 md:dark:bg-transparent "
                aria-current="page"
              >
                My resume
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Shop
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={() => setopen((pre) => !pre)}
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <div class={isopen ? "md:hidden bg-gray-800 py-2" : "hidden"}>
        <Link
          onClick={() => setopen((pre) => !pre)}
          to="/"
          className="block text-center py-2 px-3  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          My resume
        </Link>
        <Link
          onClick={() => setopen((pre) => !pre)}
          to="/products"
          className="block text-center py-2 px-3  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Shop
        </Link>
      </div>
    </nav>
  );
}

export default Header;
