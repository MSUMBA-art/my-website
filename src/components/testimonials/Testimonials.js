import "./testimonials.css";

import React from "react";
import AVT1 from "../../assets/images/6.jpg";
import AVT2 from "../../assets/images/6.jpg";
import AVT3 from "../../assets/images/6.jpg";
import AVT4 from "../../assets/images/6.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
//import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';
import "swiper/css/pagination";
//import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVT1,
    name: "Alexander Msumba",
    review: "Super guy, always eager to learn",
  },
  {
    avatar: AVT2,
    name: "Alex Msumba",
    review: "qui dolorem ipsum quia dolor sit ame",
  },
  {
    avatar: AVT3,
    name: "Irene Alexis",
    review: "dolorem ipsum quia dolor sit ame",
  },
  {
    avatar: AVT4,
    name: "AJ",
    review: " est qui dolorem ipsum quia dolor sit ame",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials-container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation pagination={{ clickable: true }}>
        
       
        
        
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client-avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client-name">{name}</h5>
              <small className="client-review">
                <p>{review}</p>
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
