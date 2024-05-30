import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/svg/logo.svg";
import { AccordionIcon, DashBoard, FormIcon, SliderIcon } from "./Icons";

const SideBar = () => {
  const location = useLocation();
  return (
    <>
      <SideBar>
        <div className="bg-white min-h-screen fixed overflow-y-scroll">
          <div className=" relative  lg:w-[256px] md:w-[150px] w-[68px] px-4">
            <div className="flex justify-center items-center flex-col">
              <img src={logo} alt="logo" className="pt-7" />
              <h1 className="font-poppins text-xl font-bold md:block hidden leading-normal text-black pt-[19px]">
                Task Components
              </h1>
            </div>
            <p className="text-black font-poppins text-xs md:block hidden font-medium pt-16 ps-4">
              Components
            </p>
            <Link
              to="/tabs"
              className="mt-4 py-4 hover:bg-orange-white inline-block  md:pl-4 w-full rounded-[22px] group"
            >
              {" "}
              <DashBoard />
              <span
                className={` md:pl-4 md:block hidden font-poppins text-sm font-medium ${
                  location.pathname === "/tabs"
                    ? "text-[#EC6707] duration-300"
                    : "text-black"
                }`}
              >
                Tabs
              </span>
            </Link>
            <Link
              to="/client"
              className="mt-2 py-4  md:pl-4 w-full inline-block rounded-[22px] hover:bg-orange-white group"
            >
              {" "}
              <SliderIcon />
              <span
                className={` md:pl-4 md:block hidden font-poppins text-sm font-medium ${
                  location.pathname === "/client"
                    ? "text-[#EC6707] duration-300"
                    : "text-black"
                }`}
              >
                Slider
              </span>
            </Link>
            <Link
              to="/acc"
              className="mt-2 py-4  md:pl-4 w-full rounded-[22px] inline-block hover:bg-orange-white group"
            >
              {" "}
              <AccordionIcon />
              <span
                className={` md:pl-4 md:block hidden font-poppins text-sm font-medium ${
                  location.pathname === "/acc"
                    ? "text-[#EC6707] duration-300"
                    : "text-black"
                }`}
              >
                Accordion
              </span>
            </Link>
            <Link
              to="/form"
              className="mt-2 py-4  md:pl-4 w-full rounded-[22px] inline-block hover:bg-orange-white group"
            >
              {" "}
              <FormIcon />
              <span
                className={` md:pl-4 md:block hidden font-poppins text-sm font-medium ${
                  location.pathname === "/form"
                    ? "text-[#EC6707] duration-300"
                    : "text-black"
                }`}
              >
                Form
              </span>
            </Link>
          </div>
        </div>
      </SideBar>
    </>
  );
};

export default SideBar;
