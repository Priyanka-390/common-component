import React, { useCallback, useRef } from "react";
import google from "../assets/images/svg/google.svg";
import { LeftArrow, RightArrow, Star } from "./Icons";
import { SwiperSlide, Swiper } from "swiper/react";
import { clientdata } from "./Mapdata";
import 'swiper/css';

const Clientswiper = () => {
     const sliderRef = useRef(null)
   const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, [sliderRef]);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, [sliderRef]);
  return (
    <div className=" py-24">
          <div className="container max-w-[1140px]  relative mx-auto">
              <h2 className="text-black font-poppins text-6xl font-bold  text-center">SWIPER-Slider</h2>
        <Swiper ref={sliderRef} spaceBetween={27} slidesPerView={3} loop={true}>
          {clientdata.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="border hover:border-[#E67E221A] hover:shadow-[0px_1px_27.3px_0px_#0000001A] duration-300 max-w-[362px] border-[#0000001A] p-[22px] ">
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
                <div className="flex items-center justify-between px-5 mt-5 md:px-0 md:mt-0">
                        <button onClick={handlePrev} className='md:absolute flex group items-center  justify-center w-10 h-10 duration-300 md:-translate-y-1/2  rounded-full group border border-black prev-arrow  hover:bg-[#E67E22] hover:border-[#E67E22] md:-left-[70px]  md:top-1/2'><LeftArrow /></button>
                        <button onClick={handleNext} className='md:absolute flex items-center  justify-center w-10 h-10 duration-300 md:-translate-y-1/2 border border-black rounded-full group next-arrow hover:bg-[#E67E22] hover:border-[#E67E22] md:-right-[70px]  md:top-1/2'><RightArrow /></button>
                    </div>
      </div>
    </div>
  );
};

export default Clientswiper;
