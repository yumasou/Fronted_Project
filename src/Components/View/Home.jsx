import React from "react";
import Button from "../Layout/Button";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  function rediect() {
    navigate("/products");
  }

  return (
    <div className="min-h-screen bg-cover bg-center opacity-100" style={{ backgroundImage: 'url("/images/shopping.jpg")' }}>
      <div className="flex flex-col items-center"><h1 className=" uppercase font-bold lg:text-7xl md:text-6xl sm:text-5xl text-white  text-center pt-28">New Gear for</h1>
      <h2 className="my-10 uppercase font-bold lg:text-6xl md:text-5xl sm:text-4xl text-white  text-center ">The New School Year</h2>
      <p className="w-2/3 text-pink-600 text-pretty font-bold sm:text-small text-end my-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore, odio quam omnis tempora excepturi beatae optio, eum vitae pariatur quibusdam perferendis. Odit sed aspernatur eum vitae aperiam, nesciunt fuga.</p>
      
    </div>
    <div className="flex justify-evenly my-5"> <Button action={()=>rediect()} color="pink" size="lg" text="Shop Now" /></div>
   </div>
    
  );
}

export default Home;
