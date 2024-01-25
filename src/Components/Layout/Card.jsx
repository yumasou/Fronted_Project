import React from "react";
import { useNavigate } from "react-router-dom";
function Card({
  image,
  title,
  description,
  price,
  discount,
  rating,
  stock,
  brand,
  cat,
  id,
}) {
  const navigate=useNavigate()
  return (
    <div onClick={()=>{navigate(`/products/${id}`)}} className="card">
      <img
        src={image}
        alt="something"
        className=" w-full h-32 sm:h-42 object-cover "
      />
       <span className="text-sm uppercase text-bold rounded-full bg-gray-300 opacity-80 py-2  px-4 absolute top-3 left-2 text-red-500">{`${discount} %`}</span>
      <div className="my-3 ">
        <span className="inline-block h-6 overflow-y-hidden font-bold text-slate-800 mx-3">{title}</span>
        <p className="text-small overflow-y-hidden h-20 mt-3 mx-3  text-slate-600 first-letter:ml-1 ">{description}</p>
        <span className="mt-3 mx-3  flex justify-between items-center ">
          <span>
            <span className="text-red-500">
              {parseInt(price - price / (discount * 100))}$
            </span>{" "}
            <small className="line-through text-slate-600">{price}</small>{" "}
          </span>
          <span>
            <span className="text-slate-600 text-small">stock:</span>
            <span className="text-bold">{stock}</span>
          </span>
        </span>
      </div>
     
    </div>
  );
}

export default Card;
