import Heading from "../components/SubComponent/HeadingTitle/Heading";
import SubHeading from "../components/SubComponent/HeadingTitle/SubHeading";
import Para from "../components/SubComponent/Paragraph/Para";
import Cards from "../components/Cards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../swiperDesign.css";

function CardsContainer() {
  return (
    <div className="contentMargin">
      <Heading content={"Vegetables"} />
      <div className="md:mt-3">
        <SubHeading content={"All"} />
        <Swiper
          slidesPerView={1}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} "/></span>`;
            },
          }}
          modules={[Pagination]}
          style={{ width: "100%", height: "100%" }}
          className="my"
        >
          <SwiperSlide>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 mt-3 ">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 mt-3 ">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 mt-3 ">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </SwiperSlide>

          <div className="swiper-pagination h-1 "></div>
        </Swiper>
      </div>
    </div>
  );
}

export default CardsContainer;
