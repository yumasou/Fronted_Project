import React from "react";
import Button from "../Layout/Button";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate=useNavigate()
  function rediect(){
    console.log("working")
    navigate("/products")
  }

  return (
    <div>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
      <h1 className="font-myan">မြန်မာစာ This is font test</h1>
    </div>
    <Button text="Test" size="md" color="red" action={rediect}/>
    <Button text="Pink" size="md" color="pink" />
    <Button text="Blue" size="sm" color="blue" />
    <Button text="Purpless" size="lg" color="purple" />
    <Button text="Gray" size="md" color="gray" />
    <div>
    <ul className=" p-6 divide-y divide-slate-200">
    <li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
      <div className="ml-3 overflow-hidden">
        <p className="text-sm font-medium text-slate-900">person.name</p>
        <p className="text-sm text-slate-500 truncate">person.email</p>
      </div>
    </li>
    <li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
      <div className="ml-3 overflow-hidden">
        <p className="text-sm font-medium text-slate-900">person2.name</p>
        <p className="text-sm text-slate-500 truncate">person2.email</p>
      </div>
    </li>
    <li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
      <div className="ml-3 overflow-hidden">
        <p className="text-sm font-medium text-slate-900">person3.name</p>
        <p className="text-sm text-slate-500 truncate">person3.email</p>
      </div>
    </li>
  
</ul>
<div className="mx-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 ">
<div className="card">
  <img src="./images/tree.jpg" alt="something" className=" w-full h-32 sm:h-42 object-cover " />
  <div>
    <span className="block font-bold mt-3 ml-2">Blah Blah</span>
    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quae error quidem recusandae autem magni exercitationem enim. Temporibus animi dolore, tempora provident voluptates odio consectetur porro accusamus molestiae, aut illo!</span>
  </div>
  <span className="text-sm uppercase text-bold rounded-full bg-gray-500 opacity-90 py-2  px-4 absolute top-3 left-2 ">25 m</span>
</div>
<div className="card">
  <img src="./images/tree.jpg" alt="something" className=" w-full h-32 sm:h-42 object-cover " />
  <div>
    <span className="block font-bold mt-3 ml-2">Blah Blah</span>
    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quae error quidem recusandae autem magni exercitationem enim. Temporibus animi dolore, tempora provident voluptates odio consectetur porro accusamus molestiae, aut illo!</span>
  </div>
  <span className="text-sm uppercase text-bold rounded-full bg-gray-500 opacity-90 py-2  px-4 absolute top-3 left-2 ">25 m</span>
</div>
<div className="card">
  <img src="./images/tree.jpg" alt="something" className=" w-full h-32 sm:h-42 object-cover " />
  <div>
    <span className="block font-bold mt-3 ml-2">Blah Blah</span>
    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quae error quidem recusandae autem magni exercitationem enim. Temporibus animi dolore, tempora provident voluptates odio consectetur porro accusamus molestiae, aut illo!</span>
  </div>
  <span className="text-sm uppercase text-bold rounded-full bg-gray-500 opacity-90 py-2  px-4 absolute top-3 left-2 ">25 m</span>
</div>
  </div>
    </div>
    <div><a href="#" className="block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500" >
  Example
</a>
</div>
<div>

<div>
  
  
</div>

<ul role="list">
  
    <li class="group/item hover:bg-slate-100 ...">
      <img src="{person.imageUrl}" alt="" />
      <div>
        <a href="{person.url}">Aung Aung</a>
        <p>this is Aung Aung</p>
      </div>
      <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href="tel:{person.phone}">
        <span class="group-hover/edit:text-gray-700 ...">Call</span>
        <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
          
        </svg>
      </a>
    </li>
    <li class="group/item hover:bg-slate-100 ...">
      <img src="{person.imageUrl}" alt="" />
      <div>
        <a href="{person.url}">Mya Mya</a>
        <p>this is Mya Mya</p>
      </div>
      <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href="tel:{person.phone}">
        <span class="group-hover/edit:text-gray-700 ...">Call</span>
        <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
          
        </svg>
      </a>
    </li>
    <li class="group/item hover:bg-slate-100 ...">
      <img src="{person.imageUrl}" alt="" />
      <div>
        <a href="{person.url}">Mg Mg</a>
        <p>this is Mg Mg</p>
      </div>
      <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href="tel:{person.phone}">
        <span class="group-hover/edit:text-gray-700 ...">Call</span>
        <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
          
        </svg>
      </a>
    </li>
</ul>
<label class="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 ..">
  <svg fill="currentColor">
  </svg>
  Google Pay
  <input type="radio" class="checked:border-indigo-500 ..." />
  Apple Pay
  <input type="radio" class="checked:border-indigo-500 ..." />
</label>
<span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Email
  </span>
  <dialog class="backdrop:bg-gray-50">
  <form method="dialog">
    blah blha
  </form>
</dialog>
<button class="hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none ...">
  Save changes
</button>


<button class="motion-safe:hover:-translate-x-0.5 motion-safe:transition ...">
  Save changes
</button>
<button class="dark:md:hover:bg-fuchsia-600 ...">
  Save changes
</button>
</div>
    </div>
  );
}

export default Home;
