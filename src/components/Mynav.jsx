import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Link, useLocation } from "react-router-dom";

const Mynav = () => {
  const location = useLocation()
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-black px-6 ">
      <div className="container max-w-[1140px] mx-auto">
        <div className="flex relative z-[1] justify-between items-center">
          <div className="py-4 cursor-pointer " onClick={() => setOpen(!open)} >
            <span className=" w-8 block rounded-xl h-1 mt-1 bg-white"></span>
            <span className=" w-8 block rounded-xl h-1 mt-1 bg-white"></span>
            <span className=" w-8 block rounded-xl h-1 mt-1 bg-white"></span>
          </div>
          <ul className="md:flex gap-5 hidden items-center">
            <li><Link to='/client' className={` ${location.pathname==="/client" && 'text-red-700'} font-poppins text-white text-2xl`}>Slider</Link></li>
            <li> <Link to='/tabs' className={` ${location.pathname==="/tabs" && 'text-red-700'} font-poppins text-white text-2xl`}>Tabs </Link></li>
            <li> <Link to='/form' className={` ${location.pathname==="/form" && 'text-red-700'} font-poppins text-white text-2xl`}>Form </Link> </li>
            <li className="font-poppins text-white text-2xl">Accordian</li>
          </ul>
        </div>
        <div
          className={`fixed z-[3] left-0 top-0 duration-500 ${
            open ? "" : "left-[-400px]"
          }`}
        >
          {/* <div className="relative">
            <Sidebar />
             <div className=" absolute right-[10%] cursor-pointer z-[1] top-[2%] " onClick={() => setOpen(!open)}>
            <span className="w-8 block rounded-xl h-1 mt-1 bg-black -rotate-45 translate-y-2 "></span>
            <span className="w-8 block rounded-xl h-1 mt-1 bg-black rotate-45"></span>
                    </div>
          </div> */}
        </div>
        {/* <div onClick={()=>setOpen(false)} className={`w-full min-h-screen bg-[#434e436d]  inset-0 fixed z-[2] ${
            open ? "left-0" : "-left-full"
          } `}></div> */}
      </div>
    </div>
  );
};

export default Mynav;
