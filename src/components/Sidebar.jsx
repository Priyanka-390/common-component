import { Link } from "react-router-dom";
import logo from "../assets/images/svg/logo.svg";
import { AccordianIcon, DashBoard, FormIcon, SliderIcon } from "./Icons";

// const Sidebar = () => {
//   return (
//     <div className="flex  top-0 left-0 bottom-0 w-[400px] p-5  bg-white min-h-[100vh]">
//         <ul className="pt-10">
//            <li><Link to='/client' className="font-poppins text-black text-2xl">Slider</Link></li>
//             <li> <Link to='/tabs' className="font-poppins text-black text-2xl">Tabs </Link></li>
//              <li className="font-poppins text-black text-2xl">Form</li>
//             <li className="font-poppins text-black text-2xl">Accordian</li>
//         </ul>
//       </div>
//   );
// };
const Sidebar = () => {
  return (
    <div>
      <sidebar>
        <div className="fixed bg-white top-0 bottom-0 overflow-y-scroll">
          <div className=" relative  lg:w-[316px] md:w-[150px] w-[62px] px-6">
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
              <a className="flex" href="">
                {" "}
                <DashBoard />
                <span className="text-black group-hover:text-[#EC6707] md:pl-4 md:block hidden font-poppins text-sm font-medium">
                  Tabs
                </span>
              </a>
            </Link>
            <Link
              to="/client"
              className="mt-2 py-4  md:pl-4 w-full inline-block rounded-[22px] hover:bg-orange-white group"
            >
              <a className="flex" href="">
                {" "}
               <SliderIcon/>
                <span className="text-black  group-hover:text-[#EC6707] md:pl-4 md:block hidden font-poppins text-sm font-medium">
                  Slider
                </span>
              </a>
            </Link>
            <Link
              to="/acc"
              className="mt-2 py-4  md:pl-4 w-full rounded-[22px] inline-block hover:bg-orange-white group"
            >
              <a className="flex" href="">
                {" "}
               <AccordianIcon/>
                <span className="text-black  md:pl-4 group-hover:text-[#EC6707] font-poppins text-sm md:block hidden font-medium">
                  Accordion
                </span>
              </a>
            </Link>
            <Link
              to="/form"
              className="mt-2 py-4  md:pl-4 w-full rounded-[22px] inline-block hover:bg-orange-white group"
            >
              <a className="flex" href="">
                {" "}
                <FormIcon />
                <span className="text-black md:block group-hover:text-[#EC6707] hidden  md:pl-4 font-poppins text-sm font-medium">
                  Form
                </span>
              </a>
            </Link>
          </div>
        </div>
      </sidebar>
    </div>
  );
};

export default Sidebar;
