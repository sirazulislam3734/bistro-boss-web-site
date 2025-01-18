import React, { useEffect, useState } from "react";
import SectionTItle from "./SectionTItle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/review").then((res) => {
      setReviews(res.data);
    });
  }, []);
  
  return (
    <div className="my-16">
      <SectionTItle
        subTitle="---------What Our Clients Say---------"
        heading="TESTIMONIAL"
      ></SectionTItle>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col p-10 mx-12 items-center justify-center">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <img src="" alt="" />
                <p className="">{review.details}</p>
                <p className="text-orange-500 font-semibold text-3xl">
                  {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
