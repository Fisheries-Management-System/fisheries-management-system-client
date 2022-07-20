import React from "react";
import bannerImg1 from "../../../Images/banner/bannerImg1.png";
import bannerImg2 from "../../../Images/banner/bannerImg2.jpg";
import bannerImg3 from "../../../Images/banner/bannerImg3.jpg";
//import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full">
            <div className="w-full">
              <img
                className="w-full max-h-[70vh]"
                src={bannerImg1}
                alt=" Slider"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <div className="w-full">
              <img
                className="w-full max-h-[70vh]"
                src={bannerImg2}
                alt=" Slider"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <div className="w-full">
              <img
                className="w-full max-h-[70vh]"
                src={bannerImg3}
                alt=" Slider"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;