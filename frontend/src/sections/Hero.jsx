import React from "react";
import Heading from "../components/SubComponent/HeadingTitle/Heading";
import Para from "../components/SubComponent/Paragraph/Para";
import Button from "../components/SubComponent/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css'
import "swiper/css/pagination";

function Hero() {
  return (
    <div className=" w-full rounded-lg  mt-28 md:mt-32 lg:mt-36 bg-gray-500 flex md:py-0  lg:h-[72vh]">
      <Swiper
        slidesPerView={1}
        
        pagination={{
         

          clickable: true,
          // renderBullet: (index, className) => {
          //   return `<span class="${className} "/></span>`;
          // },
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="w-full">
            swipr
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full rounded-lg    space-y-1 md:space-y-2 bg-[url('https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZlZ2V0YWJsZXxlbnwwfHwwfHx8MA%3D%3D')]">
           
            <Heading content={"We provide best veges"} />
            <div className="flex flex-col gap-2 lg:gap-3 justify-start items-start">
              <Para />
              <Button />
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}

export default Hero;
