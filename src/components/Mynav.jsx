import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BellIcon, MailIcon } from "./Icons";

const MyNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white sticky top-0 md:px-6 ">
      <div className="container md:px-12 px-4 mx-auto">
        <div className="flex relative z-[1] md:py-4 py-2 justify-between items-center">
          <div className="mb-0">
            <h2 className="font-poppins font-bold sm:text-2xl text-lg leading-9 text-black">
              Components
            </h2>
            <p className="font-poppins md:block hidden font-medium text-base leading-[25.6px] pt-1">
              Lass uns heute den Umsatz überprüfen!
            </p>
          </div>
          <div className="flex md:gap-4 gap-2">
            <a href="#mailto:">
              <MailIcon />
            </a>
            <a href=""><BellIcon/></a>
         </div>
        </div>
      
      </div>
    </div>
  );
};

export default MyNav;
