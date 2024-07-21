
import {useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SwiperNavigation.css'



// import required modules
import { Navigation } from 'swiper/modules';
import Cards from './Cards';

export default function App() {
    const navigationPrevRef=useRef(null);
    const navigationNextRef=useRef(null);
  return (
    <>
    <div className='mt-2'>
    <Swiper
        spaceBetween={4}
        
        
        
        navigation={{

            prevEl:navigationPrevRef.current,
            nextEl:navigationNextRef.current
           
            
        }}
        onInit={(swiper)=>{
            swiper.params.navigation.prevEl=navigationPrevRef.current;
            swiper.params.navigation.nextEl=navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }}

        modules={[Navigation]}
        breakpoints={{
            640:{
                slidesPerView:2,

            },
            768:{
                slidesPerView:2,
                
            },
            1024:{
                slidesPerView:3
            }
        }}
        className="mySwiper"
      >
        <SwiperSlide>
            <Cards/>
            
        </SwiperSlide>
        <SwiperSlide>
            <Cards/>
            
        </SwiperSlide>
        <SwiperSlide>
            <Cards/>
            
        </SwiperSlide>
        <SwiperSlide>
            <Cards/>
            
        </SwiperSlide>

        <SwiperSlide>
            <Cards/>
            
        </SwiperSlide>
        
        <div ref={navigationPrevRef} className="custom-button-prev"><FaAngleLeft /></div>
        <div ref={navigationNextRef} className="custom-button-next"><FaAngleRight /></div>
      
      </Swiper>
      

      

    </div>
      
    </>
  );
}
