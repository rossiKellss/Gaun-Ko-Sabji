import Heading from "../components/SubComponent/HeadingTitle/Heading";
import SubHeading from "../components/SubComponent/HeadingTitle/SubHeading";
import Para from "../components/SubComponent/Paragraph/Para";
import Cards from "./Cards";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import {Pagination} from 'swiper/modules';




function CardsContainer() {
  return (<div className="contentMargin">
    <Heading content={"Products"}/>
    <div className="md:mt-3">
    <SubHeading content={"All"}/>
    <Swiper
      className=""
    >
      <SwiperSlide>
        1
      </SwiperSlide>
      <SwiperSlide>
        1
      </SwiperSlide>
      <SwiperSlide>
        1
      </SwiperSlide>
      <SwiperSlide>
        1
      </SwiperSlide>
    </Swiper>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 mt-3 ">
      <Cards/>
    </div>

    </div>
   
   
  </div>);
}

export default CardsContainer;
