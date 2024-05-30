import React, { useCallback, useRef } from "react";
import google from "../assets/images/svg/google.svg";
import { LeftArrow, RightArrow, Star } from "./Icons";
import { SwiperSlide, Swiper } from "swiper/react";
import { clientData } from "./MapData";
import "swiper/css";
import { Navigation } from "swiper/modules";

const ClientSwiper = () => {
  return (
    <div className="bg-[#F5F5F5] lg:py-24 py-16">
      <h2 className="text-black font-poppins pb-10 lg:text-6xl sm:text-5xl text-4xl  font-bold  text-center">
        SWIPER-Slider
      </h2>
      <div className="container md:px-12 px-4 max-w-[1140px] relative mx-auto">
        <Swiper
          spaceBetween={27}
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
          breakpoints={{
            456: { slidesPerView: 1 },
            920: { slidesPerView: 2 },
            1240: { slidesPerView: 3 },
          }}
          navigation={{ nextEl: ".next-arrow", prevEl: ".prev-arrow" }}
        >
          {clientData.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="border hover:border-[#E67E221A] hover:shadow-[0px_1px_27.3px_0px_#0000001A] duration-300 2xl:max-w-[362px] border-[#0000001A] p-[22px] ">
                <div className="flex items-center">
                  <img src={data.img} alt="img-1" />
                  <div className="ps-2">
                    <p className="font-poppins font-medium text-lg leading-[31.39px] text-black">
                      {data.name}
                    </p>
                    <p className="font-poppins font-normal text-base leading-[27.84px] text-[#545454]">
                      {data.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center my-3 gap-3">
                  <img src={google} alt="google" />
                  <Star />
                </div>
                <p className="font-poppins font-normal text-base leading-[25.6px] text-[#4D4D4D]">
                  Lorem ipsum dolor sit amet consectetur. Quis pretium amet sed
                  morbi. Mi sit lacus augue habitant. Quis mus nibh sed
                  consectetur.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-between px-5 mt-5 md:px-0 2xl:mt-0">
          <button className="2xl:absolute flex group items-center  justify-center w-10 h-10 duration-300 2xl:-translate-y-1/2  rounded-full group border border-black prev-arrow  hover:bg-[#E67E22] hover:border-[#E67E22] 2xl:-left-[50px] top-[110%]  2xl:top-1/2">
            <LeftArrow />
          </button>
          <button className="2xl:absolute flex items-center  justify-center w-10 h-10 duration-300 2xl:-translate-y-1/2 border border-black rounded-full group next-arrow hover:bg-[#E67E22] hover:border-[#E67E22] 2xl:-right-[50px] right-3 top-[110%]  2xl:top-1/2">
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientSwiper;
