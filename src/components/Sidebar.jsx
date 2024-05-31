import { NavLink } from "react-router-dom";
import input from "../assets/images/svg/input.svg"
import logo from "../assets/images/svg/logo.svg";
import { AccordionIcon, DashBoard, FormIcon, SliderIcon } from "./Icons";

const SideBar = () => {
  return (
    <>
      <aside>
        <div className="bg-white flex flex-col justify-between h-screen overflow-y-scroll">
          <div className="relative lg:w-[256px] md:w-[200px] sm:w-[68px] w-[40px] md:px-4 px-2">
            <div className="flex justify-center items-center flex-col">
              <img src={logo} alt="logo" className="pt-7" />
            </div>
            <div className="flex flex-col">
              <NavLink
                to="/tabs"
                className={({ isActive }) =>
                  `text-black mt-2 py-4 md:flex max-md:justify-center md:pl-4 w-full gap-4 hover:bg-orange-white group flex ${
                    isActive &&
                    "!text-[#EC6707] bg-[#FEF8F3] md:relative md:after:absolute md:after:top-0 md:after:bottom-0 md:after:right-0 md:after:w-1 md:after:bg-[#EC6707] md:after:rounded-[8px] duration-300"
                  }`
                }
              >
                <DashBoard />
                <span className="hidden md:block">Tabs</span>
              </NavLink>
              <NavLink
                to="/swiper"
                className={({ isActive }) =>
                  `text-black mt-2 py-4 md:flex max-md:justify-center md:pl-4 w-full gap-4 hover:bg-orange-white group flex ${
                    isActive &&
                    "!text-[#EC6707] bg-[#FEF8F3] md:relative md:after:absolute md:after:top-0 md:after:bottom-0 md:after:right-0 md:after:w-1 md:after:bg-[#EC6707] md:after:rounded-[8px] duration-300"
                  }`
                }
              >
                <SliderIcon />
                <span className="hidden md:block">Slider</span>
              </NavLink>
              <NavLink
                to="/acc"
                className={({ isActive }) =>
                  `text-black mt-2 py-4  md:pl-4 md:flex max-md:justify-center w-full gap-4 hover:bg-orange-white group flex ${
                    isActive &&
                    "!text-[#EC6707] bg-[#FEF8F3] md:relative md:after:absolute md:after:top-0 md:after:bottom-0 md:after:right-0 md:after:w-1 md:after:bg-[#EC6707] md:after:rounded-[8px] duration-300"
                  }`
                }
              >
                <AccordionIcon />
                <span className="hidden md:block">Accordion</span>
              </NavLink>
              <NavLink
                to="/form"
                className={({ isActive }) =>
                  `text-black mt-2 py-4  md:pl-4 md:flex max-md:justify-center w-full gap-4 hover:bg-orange-white group flex ${
                    isActive &&
                    "!text-[#EC6707] bg-[#FEF8F3] md:relative md:after:absolute md:after:top-0 md:after:bottom-0 md:after:right-0 md:after:w-1 md:after:bg-[#EC6707] md:after:rounded-[8px] duration-300"
                  }`
                }
              >
                <FormIcon />
                <span className="hidden md:block">Form</span>
              </NavLink>
            </div>
          </div>
          <div className="relative">
            <img
              className="cursor-pointer max-sm:hidden sm:p-6"
              src={input}
              alt="input"
            />
            <input
              className="absolute top-0 z-20 w-full h-full opacity-0 cursor-pointer"
              type="file"
              name=""
              id=""
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
