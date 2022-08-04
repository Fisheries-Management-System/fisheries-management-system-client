import React from "react";

import { AiOutlineSearch } from "react-icons/ai";
//import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Banner.css";
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
                                src="https://static.toiimg.com/photo/msid-61823658/61823658.jpg"
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
                                src="https://i.ytimg.com/vi/r903OhYUVGw/maxresdefault.jpg"
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
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7nFNGH13Xm8e-c7uV1ScNjlmNcveHhGYZxpAckNZnC6QXsyDkA_I2JNLRZVszqM1_P4U&usqp=CAU"
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
