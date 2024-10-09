
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { assets } from '../assets/assets';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'swiper/css/scrollbar';

import 'swiper/css/autoplay';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <h1 style={{ position: "absolute", zIndex: "100", fontSize: "44px", backgroundColor: 'rgba(223, 143, 80, 0.23)', marginTop: "300px", marginLeft: "200px", fontFamily:"serif" }}>
        RAISING STANDARDS,LIFTING SUCCESS!
      </h1>
      <h2 style={{ position: "absolute", zIndex: "100", fontSize: "34px", backgroundColor: 'rgba(223, 143, 80, 0.23)', marginTop: "366px", marginLeft: "450px", fontFamily:"serif" }}>Heavy Lifting, Simplified.</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide><img
          className="w-full md:rounded-lg blur-sm"
          src={assets.img12}
          alt=""
        /></SwiperSlide>
        <SwiperSlide><img
          className="w-full md:rounded-lg blur-sm"
          src={assets.img13}
          alt=""
        /></SwiperSlide>
        {/* <SwiperSlide><img
          className="w-full md:rounded-lg blur-sm"
          src={assets.img14}
          alt=""
        /></SwiperSlide> */}
        <SwiperSlide><img
          className="w-full h-auto md:rounded-lg blur-sm"
          src={assets.img15}
          alt=""
        /></SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
