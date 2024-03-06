import React from "react";
import { useNavigate } from "react-router-dom";
import {  motion } from "framer-motion";
function Card({
  index,
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
  const navigate = useNavigate();
  const card_motion = {
    initial: { y:100,opacity:0 },
    animate: (index) => ({ y: 0,opacity:1, transition: { type:"spring", delay: 0.5,stiffness:120 } }),
    popup:{scale:1.1,transition:{delay:0.02,duration:0.2}}
  };
  const img_motion={
    initial:{scale:1,transition:{delay:0.1,duration:0.3}},
    up:{scale:1.2,transition:{delay:0.2,duration:0.5}}
  }
  return (
    <motion.div
      variants={card_motion}
      animate="animate"
      initial="initial"
      whileHover="popup"
      viewport={{once:true}}
      custom={index}
      onClick={() => {
        navigate(`/products/${id}`);
      }}
      className="card"
    >
      <motion.img
        variants={img_motion}
        initial="initial"
        whileHover="up"
        src={image}
        alt="something"
        className=" flex-shrink-0 w-full h-32 sm:h-42 object-cover "
      />
      <span className="text-sm uppercase text-bold rounded-full bg-gray-300 opacity-80 py-2  px-4 absolute top-3 left-2 text-red-500">{`${discount} %`}</span>
      <div className="my-3 ">
        <span className="inline-block h-6 overflow-y-hidden font-bold text-slate-700 mx-3">
          {title}
        </span>
        <p className="text-sm overflow-y-hidden h-20 mt-3 mx-3  text-slate-700  ">
          {description}
        </p>
        <span className="mt-3 mx-3  flex justify-between items-center ">
          <span>
            <span className="text-red-500 font-bold ">
              {parseInt(price - price / (discount * 100))}$
            </span>{" "}
            <small className="line-through text-slate-600">{price}</small>{" "}
          </span>
          <span className="rounded-full px-3 bg-slate-200 text-slate-700 ">
            <span className=" text-sm">stock:</span>
            <span className=" font-semibold text-sm ">{stock}</span>
          </span>
        </span>
      </div>
    </motion.div>
  );
}

export default Card;
