import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {  Pagination } from 'swiper/modules';
import slide from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'
import SectionTItle from './SectionTItle';

const Category = () => {
    return (
        <section className="">
            <SectionTItle
            subTitle="---From 11:00am to 10:00pm---"  
            heading="ORDER ONLINE"
            >
            </SectionTItle>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-16"
      >
        <SwiperSlide>
            <img src={slide} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
        </SwiperSlide>
      </Swiper>
      </section>
    );
};

export default Category;