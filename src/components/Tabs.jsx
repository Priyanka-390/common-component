import React, { useState } from "react";

const Tabs = () => {
  const [tab, settab] = useState("tab1");
  function handletab(tabs) {
    settab(tabs);
  }
  return (
    <div className="bg-black py-20">
      <div className="container  md:px-12 px-4 mx-auto">
        <div className="flex items-center md:gap-10 gap-3">
          <button
            onClick={() => handletab("tab1")}
            className={`font-poppins lg:text-4xl sm:text-2xl text-lg text-white font-bold ${
              tab === "tab1" ? "!text-red-600 duation-300" : ""
            }`}
          > 
            Tab-1
          </button>
          <button
            onClick={() => handletab("tab2")}
            className={`font-poppins lg:text-4xl sm:text-2xl text-lg text-white font-bold ${
              tab === "tab2" ? "!text-red-600 duration-300" : ""
            }`}
          >
            Tab-2
          </button>
          <button
            onClick={() => handletab("tab3")}
            className={`font-poppins lg:text-4xl sm:text-2xl text-lg text-white font-bold ${
              tab === "tab3" ? "!text-red-600 duration-300" : ""
            }`}
          >
            Tab-3
          </button>
          <button
            onClick={() => handletab("tab4")}
            className={`font-poppins lg:text-4xl sm:text-2xl text-lg text-white font-bold ${
              tab === "tab4" ? "!text-red-600 duration-300" : ""
            }`}
          >
            Tab-4
          </button>
        </div>
        <div className="pt-10">
          {tab === "tab1" && (
            <p className="text-white lg:text-2xl md:text-lg text-base font-medium font-poppins">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              animi, voluptatum veniam possimus molestiae recusandae commodi
              ipsa officiis quidem eaque debitis aliquid ut a harum perspiciatis
              . Tempora earum placeat voluptas error deleniti exercitationem. Ex
              quia numquam in officiis eveniet voluptatum pariatur blanditiis
              maxime et reiciendis, nemo quaerat minima suscipit labore commodi
              obcaecati cupiditate nihil quae. Neque repudiandae unde itaque
              ullam sint! Quasi ipsum impedit tempore, molestiae ducimus ab
              obcaecati.
            </p>
          )}
          {tab === "tab2" && (
            <p className="text-white lg:text-2xl md:text-lg text-base font-medium font-poppins">
              officiis quidem eaque debitis aliquid ut a harum perspiciatis .
              Tempora earum placeat voluptas error deleniti exercitationem. Ex
              quia numquam in officiis eveniet voluptatum pariatur blanditiis
              maxime et reiciendis, nemo quaerat minima suscipit labore commodi
              obcaecati cupiditate nihil quae. Neque repudiandae unde itaque
              ullam sint! Quasi ipsum impedit tempore, molestiae ducimus ab
              obcaecati.
            </p>
          )}
          {tab === "tab3" && (
            <p className="text-white lg:text-2xl md:text-lg text-base font-medium font-poppins">
              voluptas error deleniti exercitationem. Ex quia numquam in
              officiis eveniet voluptatum pariatur blanditiis maxime et
              reiciendis, nemo quaerat minima suscipit labore commodi obcaecati
              cupiditate nihil quae. Neque repudiandae unde itaque ullam sint!
              Quasi ipsum impedit tempore, molestiae ducimus ab obcaecati.
            </p>
          )}
          {tab === "tab4" && (
            <p className="text-white lg:text-2xl md:text-lg text-base font-medium font-poppins">
              voluptas error deleniti exercitationem. Ex quia numquam in
              officiis eveniet voluptatum pariatur blanditiis maxime et
              reiciendis, nemo quaerat minima suscipit labore commodi obcaecati
              cupiditate nihil quae.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
