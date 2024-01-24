import React from "react";

function Button({ color, size, text, action }) {
  const sizes = {
    res: "sm:px-4 sm:py-1 sm:text-sm md:px-5 md:py-1 md:text-md lg:px-6 lg:py-2 lg:text-lg",
    sm: "px-4 py-1 text-sm",
    md: "px-5 py-1 text-md",
    lg: "px-6 py-2 text-lg",
  };
  const colors = {
    gray: "text-gray-600  border-gray-200  hover:bg-gray-600 focus:ring-gray-600",
    red: "text-red-600  border-red-200  hover:bg-red-600 focus:ring-red-600",
    yellow:
      "text-yellow-600  border-yellow-200  hover:bg-yellow-600 focus:ring-yellow-600",
    green:
      "text-green-600  border-green-200  hover:bg-green-600 focus:ring-green-600",
    blue: "text-blue-600  border-blue-200  hover:bg-blue-600 focus:ring-blue-600",
    indigo:
      "text-indigo-600  border-indigo-200  hover:bg-indigo-600 focus:ring-indigo-600",
    purple:
      "text-purple-600  border-purple-200  hover:bg-purple-600 focus:ring-purple-600",
    pink: "text-pink-600  border-pink-200  hover:bg-pink-600 focus:ring-pink-600",
  };
  return (
    <button
      className={` ${colors[color]} ${size ? sizes[size] : sizes.res} 
    font-semibold rounded-2xl border 
    shadow-[0_4px_9px_-4px_#3b71ca]
    hover:border-transparent hover:text-white 
    focus:outline-none focus:ring-2  focus:ring-offset-2 
    transform hover:scale-105  hover:bg-opacity-50 
    transition ease-out duration-500 `}
      onClick={action}
    >
      {text}
    </button>
  );
}

export default Button;
