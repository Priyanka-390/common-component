import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex  top-0 left-0 bottom-0 w-[400px] p-5  bg-white min-h-[100vh]">
        <ul className="pt-10">
           <li><Link to='/client' className="font-poppins text-black text-2xl">Slider</Link></li>
            <li> <Link to='/tabs' className="font-poppins text-black text-2xl">Tabs </Link></li>
             <li className="font-poppins text-black text-2xl">Form</li>
            <li className="font-poppins text-black text-2xl">Accordian</li>
        </ul>
      </div>
  );
};

export default Sidebar;
